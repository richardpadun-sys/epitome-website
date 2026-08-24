import type { Metadata } from "next";

import { CapabilityGrid } from "@/components/sections/CapabilityGrid";
import { CTASection } from "@/components/sections/CTASection";
import { PageHero } from "@/components/sections/PageHero";
import { ProcessSteps } from "@/components/sections/ProcessSteps";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Section, SectionHeader } from "@/components/ui/Section";
import { methodology } from "@/data/content";
import { services } from "@/data/services";

export const metadata: Metadata = {
  title: "AI Services for UK Small Businesses",
  description:
    "Eight AI capabilities from The Epitome — audit, consultancy, policy, integration, agents, custom applications, training and insurance — for UK small businesses.",
  alternates: { canonical: "/services" },
};

const STAGES = [
  {
    stage: "Plan" as const,
    title: "Plan",
    body: "Establish where you stand, what is worth doing, and under what rules.",
  },
  {
    stage: "Build" as const,
    title: "Build",
    body: "Put the systems in — integrated with what you run, and owned by you.",
  },
  {
    stage: "Adopt" as const,
    title: "Adopt",
    body: "Get the capability into your team, and manage what is left over.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Eight capabilities across one engagement"
        intro="Comprehensive AI solutions designed specifically for UK small businesses. Most clients start with one and grow into two or three."
        primary={{ label: "Book free consultation", href: "/contact" }}
        secondary={{ label: "Read the FAQ", href: "/faq" }}
      />

      <Section rhythm="tight">
        <Container>
          <Reveal>
            <div className="grid gap-32 border-b border-mist-gray pb-32 md:grid-cols-3">
              {STAGES.map((stage) => {
                const inStage = services.filter((s) => s.stage === stage.stage);
                return (
                  <div key={stage.title}>
                    <h2 className="type-label text-ink-subtle">{stage.title}</h2>
                    <p className="type-subheading mt-12 font-medium">
                      {stage.body}
                    </p>
                    <p className="type-caption mt-12 text-ink-muted">
                      {inStage.map((s) => s.name).join(" · ")}
                    </p>
                  </div>
                );
              })}
            </div>
          </Reveal>
        </Container>
      </Section>

      <Section rhythm="tight">
        <SectionHeader
          eyebrow="Capabilities"
          title="Everything we do"
          intro="Each capability is scoped, timeboxed and delivered as something you keep."
        />
        <CapabilityGrid items={services} />
      </Section>

      <Section tone="mist" divided>
        <SectionHeader
          eyebrow="How it works"
          title="A four-step integration methodology"
          intro="The same sequence on every engagement, whichever capability it starts with."
        />
        <ProcessSteps
          steps={methodology.map((step) => ({
            title: step.title,
            description: step.body,
          }))}
        />
      </Section>

      <CTASection />
    </>
  );
}
