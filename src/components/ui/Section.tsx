import type { ReactNode } from "react";
import { Container } from "./Container";
import { Eyebrow } from "./Eyebrow";

type SectionProps = {
  children: ReactNode;
  /** 80px is the default rhythm; `major` uses 96px for hero-adjacent breaks. */
  rhythm?: "default" | "major" | "tight" | "none";
  className?: string;
  id?: string;
  /** Draws the hairline that separates one section band from the next. */
  divided?: boolean;
  tone?: "paper" | "mist" | "ink";
};

const rhythmClass: Record<NonNullable<SectionProps["rhythm"]>, string> = {
  none: "",
  tight: "py-56 md:py-64",
  default: "py-64 md:py-80",
  major: "py-72 md:py-96",
};

const toneClass: Record<NonNullable<SectionProps["tone"]>, string> = {
  paper: "bg-paper-white",
  mist: "bg-mist-gray",
  ink: "bg-ink text-paper-white",
};

export function Section({
  children,
  rhythm = "default",
  className = "",
  id,
  divided = false,
  tone = "paper",
}: SectionProps) {
  return (
    <section
      id={id}
      className={[
        rhythmClass[rhythm],
        toneClass[tone],
        divided ? "border-t border-mist-gray" : "",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {children}
    </section>
  );
}

type SectionHeaderProps = {
  eyebrow?: string;
  title: ReactNode;
  intro?: ReactNode;
  /** Right-hand slot for a link or secondary action on wide viewports. */
  aside?: ReactNode;
  align?: "left" | "center";
  className?: string;
  headingLevel?: "h2" | "h3";
};

/**
 * The standard section opener. Keeping it in one place is what makes the
 * vertical rhythm read as deliberate across a dozen sections.
 */
export function SectionHeader({
  eyebrow,
  title,
  intro,
  aside,
  align = "left",
  className = "",
  headingLevel: Heading = "h2",
}: SectionHeaderProps) {
  const centered = align === "center";
  return (
    <Container>
      <div
        className={[
          "flex flex-col gap-24 md:flex-row md:items-end md:justify-between",
          centered ? "md:flex-col md:items-center" : "",
          className,
        ]
          .filter(Boolean)
          .join(" ")}
      >
        <div className={centered ? "max-w-[720px] text-center" : "max-w-[640px]"}>
          {eyebrow ? (
            <Eyebrow className={centered ? "justify-center" : ""}>{eyebrow}</Eyebrow>
          ) : null}
          <Heading className="type-heading mt-16">{title}</Heading>
          {intro ? (
            <p className="type-subheading mt-16 font-normal text-ink-muted">
              {intro}
            </p>
          ) : null}
        </div>
        {aside ? <div className="shrink-0">{aside}</div> : null}
      </div>
    </Container>
  );
}
