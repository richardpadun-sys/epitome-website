/**
 * Minimal in-memory rate limiter for form submission routes.
 *
 * This is intentionally simple rather than infrastructure-backed (Redis /
 * Vercel KV / Upstash): those need their own external account and config,
 * and for a low-traffic B2B contact form a per-instance sliding window is a
 * reasonable first line of defence against a script hammering the endpoint.
 *
 * The real limitation to know about: Vercel serverless functions do not
 * guarantee the same instance handles consecutive requests, so this map can
 * reset between calls under load — it reduces abuse, it does not eliminate
 * it. If spam becomes a real problem after launch, the fix is Vercel's
 * platform-level Attack Challenge Mode (dashboard toggle, no code) or a
 * proper store-backed limiter — not a bigger version of this file.
 */

const WINDOW_MS = 60_000;
const MAX_REQUESTS_PER_WINDOW = 5;

const hits = new Map<string, number[]>();

export function isRateLimited(key: string): boolean {
  const now = Date.now();
  const timestamps = (hits.get(key) ?? []).filter((t) => now - t < WINDOW_MS);
  timestamps.push(now);
  hits.set(key, timestamps);

  // Bound memory: this map only ever holds recent IPs, but without a cap a
  // sustained attack from many source IPs could still grow it unboundedly.
  if (hits.size > 5000) {
    const oldestKey = hits.keys().next().value;
    if (oldestKey) hits.delete(oldestKey);
  }

  return timestamps.length > MAX_REQUESTS_PER_WINDOW;
}
