import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

import { creatathonPricePerSeat, creatathonVatRate, workshopDates } from "@/data/creatathon";
import { contact } from "@/data/site";
import { creatathonBookingSchema, tooFast } from "@/lib/forms";
import { sendNotificationEmail } from "@/lib/mailer";
import { isRateLimited } from "@/lib/rate-limit";

/**
 * Creatathon booking enquiry handler.
 *
 * This sends a booking ENQUIRY, the same as the previous mailto version —
 * it does not take payment. See the deployment report for what real card
 * payment at booking time requires (a Stripe Checkout integration); that is
 * a separate, larger piece of work than swapping mailto for an API route.
 */
export async function POST(request: NextRequest) {
  const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";
  if (isRateLimited(`creatathon:${ip}`)) {
    return NextResponse.json(
      { ok: false, error: "Too many requests. Please try again in a minute." },
      { status: 429 },
    );
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request body." }, { status: 400 });
  }

  const parsed = creatathonBookingSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { ok: false, error: parsed.error.issues[0]?.message ?? "Invalid submission." },
      { status: 400 },
    );
  }

  const data = parsed.data;

  if (data.website.length > 0) {
    return NextResponse.json({ ok: true });
  }
  if (tooFast(data.renderedAt)) {
    return NextResponse.json(
      { ok: false, error: "Please try submitting again." },
      { status: 400 },
    );
  }

  // Seat count and price are recomputed server-side from trusted inputs
  // (the attendee list length, not a client-supplied total) so a tampered
  // request body can't understate what's actually being booked.
  const seatCount = Math.max(
    1,
    data.attendeeNames.split("\n").map((l) => l.trim()).filter(Boolean).length,
  );
  const subtotal = seatCount * creatathonPricePerSeat;
  const vat = subtotal * creatathonVatRate;
  const total = subtotal + vat;

  const chosen = workshopDates.find((w) => w.id === data.workshopId);

  const lines = [
    `Name: ${data.name}`,
    `Email: ${data.email}`,
    data.company ? `Company: ${data.company}` : null,
    data.role ? `Role: ${data.role}` : null,
    chosen ? `Workshop: ${chosen.location} — ${chosen.date}` : "Workshop: (to be confirmed)",
    `Seats requested: ${seatCount}`,
    data.attendeeNames ? `Attendee names:\n${data.attendeeNames}` : null,
    data.referralCode ? `Referral code: ${data.referralCode}` : null,
    "",
    `Estimated total: £${total.toFixed(2)} (${seatCount} × £${creatathonPricePerSeat} + VAT)`,
    "",
    data.notes || "",
  ].filter((l): l is string => l !== null);

  try {
    await sendNotificationEmail({
      to: contact.email,
      subject: "Creatathon booking enquiry",
      text: lines.join("\n"),
      replyTo: data.email,
    });
  } catch (err) {
    console.error("creatathon booking send failed", err);
    return NextResponse.json(
      { ok: false, error: "Something went wrong sending your enquiry. Please email us directly." },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
