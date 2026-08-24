import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

import { contact } from "@/data/site";
import { contactSchema, tooFast } from "@/lib/forms";
import { sendNotificationEmail } from "@/lib/mailer";
import { isRateLimited } from "@/lib/rate-limit";

/**
 * Contact form submission handler.
 *
 * Every check here runs regardless of what the client already validated —
 * the client-side checks in ContactForm.tsx exist only to give the visitor
 * fast feedback, never as the source of truth. A request that skips the
 * browser entirely and posts straight to this route hits exactly the same
 * validation.
 */
export async function POST(request: NextRequest) {
  const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";
  if (isRateLimited(`contact:${ip}`)) {
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

  const parsed = contactSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { ok: false, error: parsed.error.issues[0]?.message ?? "Invalid submission." },
      { status: 400 },
    );
  }

  const data = parsed.data;

  // Honeypot: a filled hidden field means an automated submission slipped
  // past the browser-side form entirely (or ignored the DOM styling that
  // hides it from real visitors). Respond as if it succeeded so the bot
  // gets no signal to adapt against, but do not send an email.
  if (data.website.length > 0) {
    return NextResponse.json({ ok: true });
  }

  if (tooFast(data.renderedAt)) {
    return NextResponse.json(
      { ok: false, error: "Please try submitting again." },
      { status: 400 },
    );
  }

  const lines = [
    `Name: ${data.name}`,
    `Email: ${data.email}`,
    data.company ? `Company: ${data.company}` : null,
    data.phone ? `Phone: ${data.phone}` : null,
    data.interest ? `Interested in: ${data.interest}` : null,
    "",
    data.message,
  ].filter((l): l is string => l !== null);

  try {
    await sendNotificationEmail({
      to: contact.email,
      subject: data.interest ? `Enquiry: ${data.interest}` : "Website enquiry",
      text: lines.join("\n"),
      replyTo: data.email,
    });
  } catch (err) {
    // Log server-side for diagnosis; never leak the underlying error
    // (API key state, provider response body) back to the client.
    console.error("contact form send failed", err);
    return NextResponse.json(
      { ok: false, error: "Something went wrong sending your message. Please email us directly." },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
