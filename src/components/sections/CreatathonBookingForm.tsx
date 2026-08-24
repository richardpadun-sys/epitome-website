"use client";

import { useMemo, useRef, useState, type FormEvent } from "react";

import { Button } from "@/components/ui/Button";
import {
  creatathonPricePerSeat,
  creatathonVatRate,
  workshopDates,
} from "@/data/creatathon";
import { contact } from "@/data/site";

/**
 * Workshop booking form.
 *
 * IMPORTANT — this posts a booking ENQUIRY to /api/creatathon-booking; it
 * does not take payment. The live version of this page processes a real
 * card payment at the point of booking. Wiring that up needs a real payment
 * provider (Stripe Checkout is the natural fit for a fixed-price, per-seat
 * product like this) — see the deployment report for exactly what that
 * requires. Do not present this form as "Secure Your Place" copy implying
 * payment has been taken; the button below is worded to match what
 * actually happens. Seat count and price are also recomputed server-side
 * from the attendee list, not trusted from the client — see the API route.
 */

type Fields = {
  name: string;
  email: string;
  company: string;
  role: string;
  workshopId: string;
  attendeeNames: string;
  notes: string;
  referralCode: string;
};

const EMPTY: Fields = {
  name: "",
  email: "",
  company: "",
  role: "",
  workshopId: "",
  attendeeNames: "",
  notes: "",
  referralCode: "",
};

type Errors = Partial<Record<keyof Fields, string>>;

function validate(v: Fields): Errors {
  const e: Errors = {};
  if (!v.name.trim()) e.name = "Please enter your name.";
  if (!v.email.trim()) e.email = "Please enter your email address.";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.email.trim()))
    e.email = "Please enter a valid email address.";
  if (workshopDates.length > 0 && !v.workshopId)
    e.workshopId = "Please choose a workshop date.";
  return e;
}

const fieldBase =
  "w-full rounded-md border px-12 py-10 text-body text-ink " +
  "placeholder:text-ink-subtle transition-colors focus:outline-none";
const fieldRest =
  "border-cloud-gray bg-paper-white hover:border-[#c6c6c6] focus:border-violet-core";
const fieldInvalid =
  "border-[#c0392b] bg-[#fdf7f6] hover:border-[#c0392b] focus:border-[#c0392b]";
const fieldClass = (invalid?: boolean) =>
  `${fieldBase} ${invalid ? fieldInvalid : fieldRest}`;

export function CreatathonBookingForm() {
  const [values, setValues] = useState<Fields>(EMPTY);
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [serverError, setServerError] = useState<string | null>(null);
  const renderedAt = useRef(Date.now());
  const honeypotRef = useRef<HTMLInputElement>(null);

  const seatCount = useMemo(() => {
    const lines = values.attendeeNames
      .split("\n")
      .map((l) => l.trim())
      .filter(Boolean);
    return Math.max(1, lines.length);
  }, [values.attendeeNames]);

  const subtotal = seatCount * creatathonPricePerSeat;
  const vat = subtotal * creatathonVatRate;
  const total = subtotal + vat;

  const set = (key: keyof Fields) => (value: string) => {
    setValues((v) => ({ ...v, [key]: value }));
    setErrors((e) => ({ ...e, [key]: undefined }));
  };

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const found = validate(values);
    setErrors(found);
    const firstInvalid = (Object.keys(found) as (keyof Fields)[])[0];
    if (firstInvalid) {
      document.getElementById(`creatathon-${firstInvalid}`)?.focus();
      return;
    }

    setStatus("sending");
    setServerError(null);
    try {
      const res = await fetch("/api/creatathon-booking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...values,
          website: honeypotRef.current?.value ?? "",
          renderedAt: renderedAt.current,
        }),
      });
      const json = (await res.json()) as { ok: boolean; error?: string };
      if (!json.ok) throw new Error(json.error ?? "Something went wrong.");
      setStatus("sent");
    } catch (err) {
      setStatus("error");
      setServerError(err instanceof Error ? err.message : "Something went wrong.");
    }
  };

  if (status === "sent") {
    return (
      <div
        role="status"
        className="rounded-2xl border border-mist-gray bg-paper-white p-32 shadow-subtle"
      >
        <h3 className="type-heading-sm">Thanks — your booking enquiry is on its way</h3>
        <p className="type-body mt-12 text-ink-muted">
          We&rsquo;ll confirm your place and take payment directly. If it&rsquo;s
          urgent, call us on {contact.phone}.
        </p>
        <div className="mt-24">
          <Button
            variant="secondary"
            onClick={() => {
              setStatus("idle");
              setValues(EMPTY);
              renderedAt.current = Date.now();
            }}
          >
            Book another workshop
          </Button>
        </div>
      </div>
    );
  }

  return (
    <form
      noValidate
      onSubmit={onSubmit}
      className="rounded-2xl border border-mist-gray bg-paper-white p-24 shadow-subtle md:p-32"
    >
      <h2 className="type-heading-sm">Secure your Creatathon place</h2>
      <p className="type-caption mt-8 text-ink-subtle">
        All workshops follow the same curriculum. Choose the location and
        date that works best for you.
      </p>

      <input
        ref={honeypotRef}
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="absolute left-[-9999px] h-0 w-0 opacity-0"
      />

      {status === "error" && serverError ? (
        <p role="alert" className="type-caption mt-16 rounded-md bg-[#fdf7f6] px-12 py-10 text-[#c0392b]">
          {serverError}
        </p>
      ) : null}

      <div className="mt-24 grid gap-16 sm:grid-cols-2">
        <Field
          id="creatathon-name"
          label="Full name"
          required
          value={values.name}
          onChange={set("name")}
          error={errors.name}
          autoComplete="name"
        />
        <Field
          id="creatathon-email"
          label="Email address"
          type="email"
          required
          value={values.email}
          onChange={set("email")}
          error={errors.email}
          autoComplete="email"
        />
        <Field
          id="creatathon-company"
          label="Company"
          value={values.company}
          onChange={set("company")}
          autoComplete="organization"
        />
        <Field
          id="creatathon-role"
          label="Your role"
          value={values.role}
          onChange={set("role")}
        />

        <div className="sm:col-span-2">
          <label htmlFor="creatathon-workshopId" className="type-caption font-medium">
            Select workshop location &amp; date
          </label>
          {workshopDates.length > 0 ? (
            <select
              id="creatathon-workshopId"
              value={values.workshopId}
              onChange={(e) => set("workshopId")(e.target.value)}
              className={`${fieldClass(Boolean(errors.workshopId))} mt-8`}
            >
              <option value="">Choose a date</option>
              {workshopDates.map((w) => (
                <option key={w.id} value={w.id}>
                  {w.location} — {w.date}
                </option>
              ))}
            </select>
          ) : (
            <p className="type-caption mt-8 rounded-md border border-cloud-gray bg-mist-gray/60 px-12 py-10 text-ink-subtle">
              No workshop dates are currently scheduled. Submit your details
              and we&rsquo;ll contact you when the next one is confirmed.
            </p>
          )}
          {errors.workshopId ? (
            <p role="alert" className="type-caption mt-6 text-[#c0392b]">
              {errors.workshopId}
            </p>
          ) : null}
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="creatathon-attendeeNames" className="type-caption font-medium">
            Attendee names (one per line)
          </label>
          <textarea
            id="creatathon-attendeeNames"
            rows={3}
            value={values.attendeeNames}
            onChange={(e) => set("attendeeNames")(e.target.value)}
            placeholder={"Jane Smith\nJohn Doe"}
            className={`${fieldClass()} mt-8 resize-y`}
          />
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="creatathon-notes" className="type-caption font-medium">
            Additional notes (optional)
          </label>
          <textarea
            id="creatathon-notes"
            rows={3}
            value={values.notes}
            onChange={(e) => set("notes")(e.target.value)}
            placeholder="Dietary requirements, accessibility needs, or anything else we should know"
            className={`${fieldClass()} mt-8 resize-y`}
          />
        </div>

        <Field
          id="creatathon-referralCode"
          label="Referral code (optional)"
          value={values.referralCode}
          onChange={set("referralCode")}
        />
      </div>

      <div className="mt-24 rounded-xl border border-mist-gray bg-mist-gray/50 p-20">
        <h3 className="type-label text-ink-subtle">Investment summary</h3>
        <dl className="mt-12 space-y-6">
          <div className="flex justify-between">
            <dt className="type-caption text-ink-muted">
              Subtotal ({seatCount} × £{creatathonPricePerSeat})
            </dt>
            <dd className="type-caption numeric">£{subtotal.toFixed(2)}</dd>
          </div>
          <div className="flex justify-between">
            <dt className="type-caption text-ink-muted">
              VAT ({Math.round(creatathonVatRate * 100)}%)
            </dt>
            <dd className="type-caption numeric">£{vat.toFixed(2)}</dd>
          </div>
          <div className="flex justify-between border-t border-cloud-gray pt-6">
            <dt className="type-caption font-medium text-ink">Total</dt>
            <dd className="type-caption numeric font-medium text-ink">
              £{total.toFixed(2)}
            </dd>
          </div>
        </dl>
      </div>

      <div className="mt-24 flex flex-wrap items-center gap-16">
        <Button type="submit" trailingIcon disabled={status === "sending"}>
          {status === "sending" ? "Sending…" : "Send booking enquiry"}
        </Button>
        <p className="type-caption text-ink-subtle">
          We&rsquo;ll confirm your place and take payment directly — this
          form does not charge your card.
        </p>
      </div>
    </form>
  );
}

function Field({
  id,
  label,
  value,
  onChange,
  error,
  required,
  type = "text",
  autoComplete,
}: {
  id: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  error?: string;
  required?: boolean;
  type?: string;
  autoComplete?: string;
}) {
  return (
    <div>
      <label htmlFor={id} className="type-caption font-medium">
        {label}
        {required ? (
          <>
            {" "}
            <span aria-hidden="true" className="text-violet-core">
              *
            </span>
          </>
        ) : null}
      </label>
      <input
        id={id}
        type={type}
        required={required}
        autoComplete={autoComplete}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${id}-error` : undefined}
        className={`${fieldClass(Boolean(error))} mt-8`}
      />
      {error ? (
        <p id={`${id}-error`} role="alert" className="type-caption mt-6 text-[#c0392b]">
          {error}
        </p>
      ) : null}
    </div>
  );
}
