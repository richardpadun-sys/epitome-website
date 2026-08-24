import { z } from "zod";

/**
 * Server-side validation schemas, shared between the API routes and (via
 * `.safeParse` on the client) the form components, so the two never drift.
 * Client-side checks exist for UX only — the server never trusts them; see
 * the route handlers, which re-validate everything regardless of what the
 * client already checked.
 */

/**
 * Anti-spam fields present on every form. Not part of the visible UI.
 *
 * `website` deliberately accepts any string at the schema level — rejecting
 * it here would surface a validation error that tells a bot exactly which
 * field it tripped. Route handlers check it explicitly after parsing and
 * respond with a plain `{ ok: true }` when it's filled, so a bot sees an
 * apparently successful submission and gets no signal to adapt against.
 */
const antiSpamShape = {
  /** Honeypot — real visitors never see or fill this field. */
  website: z.string().max(500).optional().default(""),
  /** Client-side render timestamp (ms). Server rejects submissions faster
   *  than a human could plausibly fill the form. */
  renderedAt: z.coerce.number().int().positive(),
};

const MIN_FILL_TIME_MS = 1500;

export function tooFast(renderedAt: number): boolean {
  return Date.now() - renderedAt < MIN_FILL_TIME_MS;
}

export const contactSchema = z.object({
  name: z.string().trim().min(1, "Please enter your name.").max(200),
  email: z.string().trim().email("Please enter a valid email address.").max(320),
  company: z.string().trim().max(200).optional().default(""),
  phone: z.string().trim().max(50).optional().default(""),
  interest: z.string().trim().max(200).optional().default(""),
  message: z
    .string()
    .trim()
    .min(10, "Please tell us a little more — at least a sentence.")
    .max(5000),
  ...antiSpamShape,
});

export type ContactInput = z.infer<typeof contactSchema>;

export const creatathonBookingSchema = z.object({
  name: z.string().trim().min(1, "Please enter your name.").max(200),
  email: z.string().trim().email("Please enter a valid email address.").max(320),
  company: z.string().trim().max(200).optional().default(""),
  role: z.string().trim().max(200).optional().default(""),
  workshopId: z.string().trim().max(200).optional().default(""),
  attendeeNames: z.string().trim().max(2000).optional().default(""),
  notes: z.string().trim().max(2000).optional().default(""),
  referralCode: z.string().trim().max(100).optional().default(""),
  ...antiSpamShape,
});

export type CreatathonBookingInput = z.infer<typeof creatathonBookingSchema>;
