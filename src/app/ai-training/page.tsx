import type { Metadata } from "next";

import { CTASection } from "@/components/sections/CTASection";
import { AtAGlance, PageHero } from "@/components/sections/PageHero";
import { ProcessSteps } from "@/components/sections/ProcessSteps";
import { RelatedServices } from "@/components/sections/RelatedServices";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Section, SectionHeader } from "@/components/ui/Section";
import {
  trainingDelivery,
  trainingDepartments,
  trainingLevels,
} from "@/data/content";
import { serviceBySlug } from "@/data/services";

const service = serviceBySlug("ai-training")!;

export const metadata: Metadata = {
  title: service.meta.title,
  description: service.meta.description,
  alternates: { canonical: service.href },
};

export default function AiTrainingPage() {
  return (
    <>
      <PageHero
        eyebrow={service.eyebrow}
        title={service.headline}
        intro={service.subheadline}
        primary={{ label: "Book a training call", href: "/contact" }}
        secondary={{ label: "See our AI policy work", href: "/ai-policy" }}
        aside={<AtAGlance title="How it differs" items={service.outcomes!} />}
      />

      <Section>
        <SectionHeader
          eyebrow="Departments"
          title="Ten tracks, each written for the work"
          intro="Every track is built around the tasks that department actually does — the finance programme is not the marketing programme with the examples swapped out."
        />
        <Container className="mt-48">
          <ul className="grid gap-x-32 gap-y-0 border-t border-mist-gray sm:grid-cols-2 lg:grid-cols-3">
            {trainingDepartments.map((department, i) => (
              <Reveal as="li" key={department} delay={(i % 3) * 50}>
                <div className="flex items-baseline gap-12 border-b border-mist-gray py-20">
                  <span className="type-label numeric text-ink-subtle">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="type-body font-medium">{department}</span>
                </div>
              </Reveal>
            ))}
          </ul>
        </Container>
      </Section>

      <Section tone="mist" divided>
        <SectionHeader
          eyebrow="Levels"
          title="Two levels per department"
          intro="Pick the level by role, not by job title — the split is between doing the work and directing it."
        />
        <Container className="mt-48">
          <div className="grid gap-16 md:grid-cols-2">
            {trainingLevels.map((level, i) => (
              <Reveal key={level.name} delay={i * 70}>
                <Card padding="roomy" className="h-full bg-paper-white">
                  <div className="flex items-baseline justify-between gap-16">
                    <h3 className="type-heading-sm">{level.name}</h3>
                    <span className="type-label text-ink-subtle">
                      {level.audience}
                    </span>
                  </div>
                  <p className="type-body mt-16 text-ink-muted">{level.body}</p>
                </Card>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      <Section divided>
        <SectionHeader
          eyebrow="Delivery"
          title="Three ways to run it"
          intro="Delivered by a UK-based training team, in whichever format suits how your people work."
        />
        <Container className="mt-48">
          <div className="grid gap-16 md:grid-cols-3">
            {trainingDelivery.map((method, i) => (
              <Reveal key={method.name} delay={i * 60}>
                <Card className="h-full">
                  <span className="type-label numeric text-ink-subtle">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="type-subheading mt-16 font-semibold">
                    {method.name}
                  </h3>
                  <p className="type-caption mt-8 text-ink-muted">{method.body}</p>
                </Card>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      <Section tone="mist" divided>
        <SectionHeader
          eyebrow="How it works"
          title="Three decisions, then you are booked"
        />
        <ProcessSteps steps={service.phases!} />
      </Section>

      <RelatedServices currentSlug={service.slug} />

      <CTASection
        eyebrow="Next step"
        title="Train the department that needs it most"
        body="Tell us which team is furthest behind and we will recommend a track and a level on a free 30-minute call."
        primaryLabel="Book free consultation"
      />
    </>
  );
}
