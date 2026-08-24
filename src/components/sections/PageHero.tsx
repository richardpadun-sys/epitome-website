import type { ReactNode } from "react";

import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  intro: string;
  primary?: { label: string; href: string };
  secondary?: { label: string; href: string };
  /** Right-hand column: an at-a-glance panel, a stat set, or nothing. */
  aside?: ReactNode;
};

/**
 * The interior-page hero. Deliberately quieter than the homepage hero — no
 * product visual, one hairline, and the supporting panel carrying whatever
 * the page's own content makes worth summarising.
 */
export function PageHero({
  eyebrow,
  title,
  intro,
  primary,
  secondary,
  aside,
}: PageHeroProps) {
  return (
    <section className="border-b border-mist-gray pt-48 pb-56 md:pt-72 md:pb-72">
      <Container>
        <div className="grid gap-40 lg:grid-cols-12 lg:gap-48">
          <div className={aside ? "lg:col-span-7" : "lg:col-span-8"}>
            <div className="epi-rise" style={{ animationDelay: "40ms" }}>
              <Eyebrow>{eyebrow}</Eyebrow>
            </div>
            <h1 className="type-heading epi-rise mt-16" style={{ animationDelay: "110ms" }}>
              {title}
            </h1>
            <p
              className="type-subheading epi-rise mt-20 max-w-[560px] font-normal text-ink-muted"
              style={{ animationDelay: "180ms" }}
            >
              {intro}
            </p>
            {primary || secondary ? (
              <div
                className="epi-rise mt-32 flex flex-wrap gap-10"
                style={{ animationDelay: "250ms" }}
              >
                {primary ? (
                  <Button href={primary.href} trailingIcon>
                    {primary.label}
                  </Button>
                ) : null}
                {secondary ? (
                  <Button href={secondary.href} variant="secondary">
                    {secondary.label}
                  </Button>
                ) : null}
              </div>
            ) : null}
          </div>

          {aside ? (
            <div className="epi-rise lg:col-span-5" style={{ animationDelay: "320ms" }}>
              {aside}
            </div>
          ) : null}
        </div>
      </Container>
    </section>
  );
}

/** The standard "at a glance" panel used on service pages. */
export function AtAGlance({
  title = "At a glance",
  items,
}: {
  title?: string;
  items: readonly string[];
}) {
  return (
    <div className="rounded-2xl border border-mist-gray bg-paper-white p-24 shadow-subtle">
      <h2 className="type-label text-ink-subtle">{title}</h2>
      <ul className="mt-16 space-y-12">
        {items.map((item) => (
          <li key={item} className="flex gap-10">
            <svg
              aria-hidden="true"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              className="mt-3 shrink-0 text-violet-core"
            >
              <path
                d="M3 8.4 6.4 11.8 13 5.2"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className="type-body font-medium">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
