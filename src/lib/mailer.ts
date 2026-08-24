import { Resend } from "resend";

/**
 * Thin wrapper around Resend so the API routes don't each re-implement
 * client construction, env-var checks, and error shaping.
 *
 * RESEND_API_KEY and RESEND_FROM_EMAIL are read from the server-only
 * environment — see the deployment report for where to get real values.
 * Neither is ever sent to the browser: this file is only ever imported by
 * route handlers, which run server-side.
 */

let client: Resend | null = null;

function getClient(): Resend {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    throw new Error(
      "RESEND_API_KEY is not set. Add it in your hosting provider's " +
        "environment variables — see the deployment report.",
    );
  }
  client ??= new Resend(apiKey);
  return client;
}

export async function sendNotificationEmail(params: {
  to: string;
  subject: string;
  /** Plain text only — no user input is ever rendered as HTML here, which
   *  avoids having to sanitise against stored/reflected XSS in an email
   *  client that does render HTML. */
  text: string;
  /** Set to the submitter's own address so replying goes straight to them.
   *  Already validated as a well-formed email address by the calling
   *  route's Zod schema before this is called. */
  replyTo?: string;
}): Promise<void> {
  const from = process.env.RESEND_FROM_EMAIL;
  if (!from) {
    throw new Error(
      "RESEND_FROM_EMAIL is not set. Add it in your hosting provider's " +
        "environment variables — see the deployment report.",
    );
  }

  const resend = getClient();
  const { error } = await resend.emails.send({
    from,
    to: params.to,
    replyTo: params.replyTo,
    subject: params.subject,
    text: params.text,
  });

  if (error) {
    throw new Error(`Resend rejected the email: ${error.message}`);
  }
}
