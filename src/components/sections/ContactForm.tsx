"use client";

import { useRef, useState, type FormEvent } from "react";

import { Button } from "@/components/ui/Button";
import { contact } from "@/data/site";
import { services } from "@/data/services";

/**
 * Enquiry form.
 *
 * Posts to /api/contact, which re-validates everything server-side (see
 * src/lib/forms.ts) and sends via Resend — the client-side checks below
 * exist purely for fast UX feedback, not as the actual gate. `renderedAt`
 * and the honeypot `website` field are read by that route too; see
 * src/lib/rate-limit.ts and the honeypot check in the route handler for
 * what they're for.
 */

type Fields = {
  name: string;
  email: string;
  company: string;
  phone: string;
  interest: string;
  message: string;
};

type Errors = Partial<Record<keyof Fields, string>>;

const EMPTY: Fields = {
  name: "",
  email: "",
  company: "",
  phone: "",
  interest: "",
  message: "",
};

function validate(values: Fields): Errors {
  const errors: Errors = {};
  if (!values.name.trim()) errors.name = "Please enter your name.";
  if (!values.email.trim()) {
    errors.email = "Please enter your email address.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(values.email.trim())) {
    errors.email = "Please enter a valid email address.";
  }
  if (values.message.trim().length < 10) {
    errors.message = "Please tell us a little more — at least a sentence.";
  }
  return errors;
}

const fieldBase =
  "w-full rounded-md border px-12 py-10 text-body text-ink " +
  "placeholder:text-ink-subtle transition-colors focus:outline-none";

/**
 * Valid and invalid states are complete, mutually exclusive class sets rather
 * than a base plus an override — two utilities setting the same property have
 * equal specificity, so the winner would depend on stylesheet order.
 */
const fieldRest =
  "border-cloud-gray bg-paper-white hover:border-[#c6c6c6] focus:border-violet-core";
const fieldInvalid =
  "border-[#c0392b] bg-[#fdf7f6] hover:border-[#c0392b] focus:border-[#c0392b]";

const fieldClass = (invalid?: boolean) =>
  `${fieldBase} ${invalid ? fieldInvalid : fieldRest}`;

export function ContactForm() {
  const [values, setValues] = useState<Fields>(EMPTY);
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [serverError, setServerError] = useState<string | null>(null);
  const renderedAt = useRef(Date.now());
  const honeypotRef = useRef<HTMLInputElement>(null);

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
      // Focus by id rather than by [aria-invalid] — the attribute is not on
      // the DOM until React has re-rendered with the new error state.
      document.getElementById(firstInvalid)?.focus();
      return;
    }

    setStatus("sending");
    setServerError(null);
    try {
      const res = await fetch("/api/contact", {
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
        <span
          aria-hidden="true"
          className="flex h-40 w-40 items-center justify-center rounded-full bg-violet-wash text-violet-core"
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path
              d="M4 10.5 8.2 14.7 16 6.9"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
        <h3 className="type-heading-sm mt-20">Thanks — your enquiry is on its way</h3>
        <p className="type-body mt-12 text-ink-muted">
          We reply to every enquiry, usually within one business day. If it's
          urgent, call us on {contact.phone}.
        </p>
        <div className="mt-24 flex flex-wrap gap-10">
          <Button
            variant="secondary"
            onClick={() => {
              setStatus("idle");
              setValues(EMPTY);
              renderedAt.current = Date.now();
            }}
          >
            Send another enquiry
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
      <h2 className="type-heading-sm">Send us an enquiry</h2>
      <p className="type-caption mt-8 text-ink-muted">
        Tell us what you are trying to solve. Fields marked with an asterisk
        are required.
      </p>

      {/* Honeypot: invisible to real visitors (off-screen, not display:none
          — screen readers and simple bot heuristics both key off that), a
          filled value tells the API route this wasn't a human. */}
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
          id="name"
          label="Your name"
          required
          value={values.name}
          onChange={set("name")}
          error={errors.name}
          autoComplete="name"
        />
        <Field
          id="email"
          label="Email address"
          type="email"
          required
          value={values.email}
          onChange={set("email")}
          error={errors.email}
          autoComplete="email"
        />
        <Field
          id="company"
          label="Company"
          value={values.company}
          onChange={set("company")}
          autoComplete="organization"
        />
        <Field
          id="phone"
          label="Phone"
          type="tel"
          value={values.phone}
          onChange={set("phone")}
          autoComplete="tel"
        />

        <div className="sm:col-span-2">
          <label htmlFor="interest" className="type-caption font-medium">
            What are you interested in?
          </label>
          <select
            id="interest"
            name="interest"
            value={values.interest}
            onChange={(e) => set("interest")(e.target.value)}
            className={`${fieldClass()} mt-8 appearance-none bg-[length:10px] bg-[right_12px_center] bg-no-repeat pr-32`}
            style={{
              backgroundImage:
                "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 10 10'%3E%3Cpath d='M1.5 3.5 5 7l3.5-3.5' fill='none' stroke='%238b9094' stroke-width='1.3' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E\")",
            }}
          >
            <option value="">Not sure yet</option>
            {services.map((service) => (
              <option key={service.slug} value={service.name}>
                {service.name}
              </option>
            ))}
          </select>
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="message" className="type-caption font-medium">
            How can we help?{" "}
            <span aria-hidden="true" className="text-violet-core">
              *
            </span>
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            required
            value={values.message}
            onChange={(e) => set("message")(e.target.value)}
            aria-invalid={Boolean(errors.message)}
            aria-describedby={errors.message ? "message-error" : undefined}
            placeholder="What is slowing the business down, and what have you already tried?"
            className={`${fieldClass(Boolean(errors.message))} mt-8 resize-y`}
          />
          {errors.message ? (
            <p id="message-error" role="alert" className="type-caption mt-6 text-[#c0392b]">
              {errors.message}
            </p>
          ) : null}
        </div>
      </div>

      <div className="mt-24 flex flex-wrap items-center gap-16">
        <Button type="submit" trailingIcon disabled={status === "sending"}>
          {status === "sending" ? "Sending…" : "Send enquiry"}
        </Button>
        <p className="type-caption text-ink-subtle">
          We reply to every enquiry.
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
        name={id}
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
