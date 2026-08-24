import type { ReactNode } from "react";

type EyebrowProps = {
  children: ReactNode;
  className?: string;
  /** On dark bands the marker and text invert. */
  tone?: "default" | "inverse";
};

/**
 * Small uppercase label with a 4px accent marker. The marker is one of the
 * few places green appears, which is what keeps it meaningful.
 */
export function Eyebrow({ children, className = "", tone = "default" }: EyebrowProps) {
  return (
    <p
      className={[
        "type-label flex items-center gap-8",
        tone === "inverse" ? "text-paper-white/60" : "text-ink-muted",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <span
        aria-hidden="true"
        className="inline-block h-4 w-4 shrink-0 rounded-[1px] bg-violet-core"
      />
      {children}
    </p>
  );
}
