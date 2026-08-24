import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Section, SectionHeader } from "@/components/ui/Section";
import { ServiceIcon } from "@/components/ui/ServiceIcon";
import { services } from "@/data/services";

/** Cross-links to the three nearest services, excluding the current one. */
export function RelatedServices({ currentSlug }: { currentSlug: string }) {
  const current = services.find((s) => s.slug === currentSlug);

  const related = services
    .filter((s) => s.slug !== currentSlug)
    // Same engagement stage first, so the suggestions follow the client's
    // position in the journey rather than the order of the catalogue.
    .sort((a, b) => {
      const aMatch = a.stage === current?.stage ? 0 : 1;
      const bMatch = b.stage === current?.stage ? 0 : 1;
      return aMatch - bMatch;
    })
    .slice(0, 3);

  return (
    <Section tone="mist" divided>
      <SectionHeader
        eyebrow="Continue"
        title="Related capabilities"
        intro="Most engagements combine two or three of these."
      />
      <Container className="mt-48">
        <div className="grid gap-16 md:grid-cols-3">
          {related.map((service, i) => (
            <Reveal key={service.slug} delay={i * 60}>
              <Card
                href={service.href}
                interactive
                className="group flex h-full flex-col bg-paper-white"
              >
                <div className="flex items-start justify-between gap-16">
                  <span className="type-label numeric text-ink-subtle">
                    {service.index}
                  </span>
                  <span className="text-ink-subtle transition-colors group-hover:text-violet-core">
                    <ServiceIcon slug={service.slug} />
                  </span>
                </div>
                <h3 className="type-subheading mt-20 font-semibold">
                  {service.name}
                </h3>
                <p className="type-caption mt-8 grow text-ink-muted">
                  {service.summary}
                </p>
                <span className="mt-20 inline-flex items-center gap-6 text-caption font-medium transition-colors group-hover:text-violet-core">
                  Learn more
                  <svg
                    aria-hidden="true"
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    className="transition-transform duration-200 group-hover:translate-x-2"
                  >
                    <path
                      d="M2.5 6h7M6.5 3l3 3-3 3"
                      stroke="currentColor"
                      strokeWidth="1.4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </Card>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}
