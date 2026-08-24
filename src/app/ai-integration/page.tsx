import type { Metadata } from "next";

import { CTASection } from "@/components/sections/CTASection";
import { AtAGlance, PageHero } from "@/components/sections/PageHero";
import { PlatformGrid } from "@/components/sections/PlatformGrid";
import { ProcessSteps } from "@/components/sections/ProcessSteps";
import { RelatedServices } from "@/components/sections/RelatedServices";
import { Section, SectionHeader } from "@/components/ui/Section";
import { OperationsCanvas } from "@/components/visuals/OperationsCanvas";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { serviceBySlug } from "@/data/services";

const service = serviceBySlug("ai-integration")!;

export const metadata: Metadata = {
  title: service.meta.title,
  description: service.meta.description,
  alternates: { canonical: service.href },
};

export default function AiIntegrationPage() {
  return (
    <>
      <PageHero
        eyebrow={service.eyebrow}
        title={service.headline}
        intro={service.subheadline}
        primary={{ label: "Discuss an integration", href: "/contact" }}
        secondary={{ label: "See our AI agents", href: "/ai-agents" }}
        aside={<AtAGlance title="What changes" items={service.outcomes!} />}
      />

      <Section>
        <SectionHeader
          eyebrow="What it looks like"
          title="One workflow, running across four systems"
          intro="A single inbound signal handled once, then written into every platform that needs to know about it."
        />
        <Container className="mt-48">
          <Reveal>
            <OperationsCanvas />
          </Reveal>
        </Container>
      </Section>

      <Section tone="mist" divided>
        <SectionHeader
          eyebrow="Process"
          title="Three phases, then continuous improvement"
          intro="Integration is not a one-off project — the last phase does not end."
        />
        <ProcessSteps steps={service.phases!} />
      </Section>

      <PlatformGrid />

      <RelatedServices currentSlug={service.slug} />

      <CTASection
        eyebrow="Next step"
        title="Make the systems you already pay for work harder"
        body="Tell us what you run today and we will map where AI can be embedded without replacing any of it."
        primaryLabel="Book free consultation"
      />
    </>
  );
}
