import Link from "next/link";

/**
 * The Epitome mark and lockups.
 *
 * Construction, per the identity system:
 * — One solid summit with the ridgeline cut out of it as negative space.
 *   Not a hairline triangle containing a hairline chart; half the parts.
 * — Every angle is 45° or 90°, and the ridgeline's long runs are parallel to
 *   the summit face.
 * — One gradient, one job: Rise (45°) sits on the mark because the mark is
 *   roughly square. It never sits on letterforms — the wordmark is always one
 *   flat colour.
 * — No outer glow, no inner stroke, no drop shadow, no noise.
 *
 * Wordmark: Bitter Bold, sentence case with a capital E only, tracking
 * −22/1000, mark height to cap height 1.38 : 1, aligned cap centre to mark
 * centre. Bitter's cap height is ~0.73em, so a mark sized at 1em of the
 * wordmark's font-size lands on that ratio.
 *
 * Minimum sizes (below these, step down to the next lockup):
 *   primary capsule 160px · secondary horizontal 120px · stacked 88px ·
 *   mark 24px · small-size build 16px (hard floor).
 */

const SUMMIT = "M6 58 H58 V6 Z";
const RIDGELINE = "M10 66 L28 48 L36 56 L52 40";

/**
 * Shared gradient and mask definitions, rendered once per document so every
 * mark instance can reference them without duplicating ids.
 */
export function BrandDefs() {
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      className="absolute h-0 w-0 overflow-hidden"
      style={{ position: "absolute" }}
    >
      <defs>
        {/* Rise · 45°, midpoint held at 55% */}
        <linearGradient id="epi-rise" x1="0" y1="1" x2="1" y2="0">
          <stop offset="0%" stopColor="#4B23E8" />
          <stop offset="55%" stopColor="#8B27C4" />
          <stop offset="100%" stopColor="#D42A8E" />
        </linearGradient>

        {/* The summit, with the ridgeline removed as negative space */}
        <mask id="epi-summit" maskUnits="userSpaceOnUse" x="0" y="0" width="64" height="64">
          <rect width="64" height="64" fill="black" />
          <path d={SUMMIT} fill="white" />
          <path
            d={RIDGELINE}
            fill="none"
            stroke="black"
            strokeWidth="8"
            strokeLinecap="butt"
            strokeLinejoin="miter"
          />
        </mask>
      </defs>
    </svg>
  );
}

type MarkProps = {
  className?: string;
  /** `gradient` puts Rise on the mark; `flat` fills it with currentColor. */
  fill?: "gradient" | "flat";
  style?: React.CSSProperties;
};

export function LogoMark({
  className = "",
  fill = "gradient",
  style,
}: MarkProps) {
  return (
    <svg
      viewBox="0 0 64 64"
      aria-hidden="true"
      focusable="false"
      className={className}
      style={style}
    >
      <rect
        width="64"
        height="64"
        fill={fill === "gradient" ? "url(#epi-rise)" : "currentColor"}
        mask="url(#epi-summit)"
      />
    </svg>
  );
}

type LogoProps = {
  className?: string;
  /** Light grounds keep the wordmark in Indigo Ink; dark grounds invert it. */
  tone?: "default" | "inverse";
  markOnly?: boolean;
  href?: string | null;
  /** Wordmark size in px. The mark is sized to match, giving the 1.38:1 ratio. */
  size?: number;
};

/** Secondary horizontal lockup — the default across the site. */
export function Logo({
  className = "",
  tone = "default",
  markOnly = false,
  href = "/",
  size = 21,
}: LogoProps) {
  const content = (
    <span
      className={[
        "inline-flex items-center",
        tone === "inverse" ? "text-paper-white" : "text-ink",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      style={{ gap: `${Math.round(size * 0.4)}px` }}
    >
      <LogoMark
        className="shrink-0"
        style={{ width: size, height: size }}
        fill="gradient"
      />
      {markOnly ? null : (
        <span
          className="font-wordmark leading-none font-bold"
          // Nudged down a fraction of an em so the cap centre, not the line
          // box centre, sits level with the mark centre.
          style={{
            fontSize: size,
            letterSpacing: "-0.022em",
            transform: "translateY(0.045em)",
          }}
        >
          Epitome
        </span>
      )}
    </span>
  );

  if (!href) return content;

  return (
    <Link
      href={href}
      aria-label="Epitome — home"
      className="inline-flex rounded-md transition-opacity hover:opacity-80"
    >
      {content}
    </Link>
  );
}

/**
 * Primary capsule lockup — the gradient sits on the capsule (Span · 82°,
 * since a capsule is wider than 2:1) and the mark and wordmark are both flat
 * white on top of it. Minimum width 160px.
 */
export function LogoCapsule({
  className = "",
  size = 22,
}: {
  className?: string;
  size?: number;
}) {
  return (
    <span
      className={`bg-span inline-flex items-center rounded-3xl text-paper-white ${className}`}
      style={{
        gap: `${Math.round(size * 0.4)}px`,
        padding: `${Math.round(size * 0.62)}px ${Math.round(size * 1.1)}px`,
      }}
    >
      <LogoMark
        className="shrink-0"
        style={{ width: size, height: size }}
        fill="flat"
      />
      <span
        className="font-wordmark leading-none font-bold"
        style={{
          fontSize: size,
          letterSpacing: "-0.022em",
          transform: "translateY(0.045em)",
        }}
      >
        Epitome
      </span>
    </span>
  );
}
