/**
 * A closed set of geometric service marks, all drawn on the same 20×20 grid
 * with a 1.4 stroke and square-ish geometry, so a row of capability cards
 * reads as one family rather than a set of borrowed icons.
 */

type IconSlug =
  | "ai-audit"
  | "ai-consultancy"
  | "ai-policy"
  | "ai-integration"
  | "ai-agents"
  | "custom-applications"
  | "ai-training"
  | "ai-insurance";

const PATHS: Record<IconSlug, React.ReactNode> = {
  /* A measured column set under a reading line — assessment. */
  "ai-audit": (
    <>
      <path d="M3 17h14" />
      <path d="M6 17V9.5M10 17V4.5M14 17V12" />
      <circle cx="10" cy="4.5" r="1.6" fill="currentColor" stroke="none" />
    </>
  ),
  /* A branching route with a chosen path — strategy. */
  "ai-consultancy": (
    <>
      <path d="M3.5 16.5V9a2 2 0 0 1 2-2h9" />
      <path d="M11.5 4.5 14.5 7l-3 2.5" />
      <path d="M8.5 16.5h8" />
    </>
  ),
  /* A shield with an internal rule — governance. */
  "ai-policy": (
    <>
      <path d="M10 2.8 16.5 5v5.2c0 3.6-2.6 6-6.5 7.2-3.9-1.2-6.5-3.6-6.5-7.2V5L10 2.8Z" />
      <path d="M7.4 10h5.2" />
    </>
  ),
  /* Two systems bridged — integration. */
  "ai-integration": (
    <>
      <rect x="2.6" y="6.6" width="5.6" height="6.8" rx="1.4" />
      <rect x="11.8" y="6.6" width="5.6" height="6.8" rx="1.4" />
      <path d="M8.2 10h3.6" />
    </>
  ),
  /* A core with attached channels — agents. */
  "ai-agents": (
    <>
      <rect x="6.6" y="6.6" width="6.8" height="6.8" rx="2" />
      <path d="M10 3v3.6M10 13.4V17M3 10h3.6M13.4 10H17" />
    </>
  ),
  /* An application frame — owned software. */
  "custom-applications": (
    <>
      <rect x="2.8" y="3.8" width="14.4" height="12.4" rx="2" />
      <path d="M2.8 7.6h14.4" />
      <path d="M6.4 11.2h4.4" />
    </>
  ),
  /* Ascending capability levels — training. */
  "ai-training": (
    <>
      <path d="M3 16.4h3.4V11H3zM8.3 16.4h3.4V7.4H8.3zM13.6 16.4H17V3.6h-3.4z" />
    </>
  ),
  /* Cover held over a core — insurance and risk. */
  "ai-insurance": (
    <>
      <path d="M2.8 10.4a7.2 7.2 0 0 1 14.4 0Z" />
      <path d="M10 10.4V15a2 2 0 0 1-4 0" />
    </>
  ),
};

export function ServiceIcon({
  slug,
  className = "",
}: {
  slug: string;
  className?: string;
}) {
  const paths = PATHS[slug as IconSlug];
  if (!paths) return null;

  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.4}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={`h-20 w-20 ${className}`}
    >
      {paths}
    </svg>
  );
}
