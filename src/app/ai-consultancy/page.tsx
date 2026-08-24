import type { Metadata } from "next";

import { CTASection } from "@/components/sections/CTASection";
import { DeliverablesGrid } from "@/components/sections/DeliverablesGrid";
import { AtAGlance, PageHero } from "@/components/sections/PageHero";
import { ProcessSteps } from "@/components/sections/ProcessSteps";
import { RelatedServices } from "@/components/sections/RelatedServices";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Section, SectionHeader } from "@/components/ui/Section";
import { consultancyCredentials } from "@/data/content";
import { serviceBySlug } from "@/data/services";

const service = serviceBySlug("ai-consultancy")!;

export const metadata: Metadata = {
  title: service.meta.title,
  description: service.meta.description,
  alternates: { canonical: service.href },
};

export default function AiConsultancyPage() {
  return (
    <>
      <PageHero
        eyebrow={service.eyebrow}
        title={service.headline}
        intro={service.subheadline}
        primary={{ label: "Schedule discovery session", href: "/contact" }}
        secondary={{ label: "Start with an audit", href: "/ai-audit" }}
        aside={<AtAGlance title="What you get" items={service.outcomes!} />}
      />

      <Section rhythm="tight">
        <Container>
          <Reveal>
            <dl className="grid gap-24 border-b border-mist-gray pb-32 sm:grid-cols-3">
              {consultancyCredentials.map((item) => (
                <div key={item.label}>
                  <dt className="sr-only">{item.label}</dt>
                  <dd>
                    <span className="type-heading numeric block">{item.value}</span>
                    <span className="type-caption mt-6 block max-w-[220px] text-ink-muted">
                      {item.label}
                    </span>
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </Container>
      </Section>

      <Section rhythm="tight">
        <SectionHeader
          eyebrow="Engagements"
          title="Three ways we work with you"
          intro="Strategic guidance that transforms challenges into competitive advantages — scoped so you know exactly what is being produced."
        />
        <DeliverablesGrid items={service.deliverables!} />
      </Section>

      <Section tone="mist" divided>
        <SectionHeader
          eyebrow="Process"
          title="From first call to implementation"
          intro="Timelines quoted are the ranges we work to on a typical small-business engagement."
        />
        <ProcessSteps steps={service.phases!} />
      </Section>

      <RelatedServices currentSlug={service.slug} />

      <CTASection
        eyebrow="Next step"
        title="Start with a free discovery call"
        body="Thirty minutes, no obligation. We will tell you what is worth doing, what is not, and roughly what it costs."
        primaryLabel="Book free consultation"
      />
    </>
  );
}
