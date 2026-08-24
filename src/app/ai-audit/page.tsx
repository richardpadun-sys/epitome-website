import type { Metadata } from "next";

import { CTASection } from "@/components/sections/CTASection";
import { DeliverablesGrid } from "@/components/sections/DeliverablesGrid";
import { AtAGlance, PageHero } from "@/components/sections/PageHero";
import { ProcessSteps } from "@/components/sections/ProcessSteps";
import { RelatedServices } from "@/components/sections/RelatedServices";
import { Section, SectionHeader } from "@/components/ui/Section";
import { serviceBySlug } from "@/data/services";

const service = serviceBySlug("ai-audit")!;

export const metadata: Metadata = {
  title: service.meta.title,
  description: service.meta.description,
  alternates: { canonical: service.href },
};

export default function AiAuditPage() {
  return (
    <>
      <PageHero
        eyebrow={service.eyebrow}
        title={service.headline}
        intro={service.subheadline}
        primary={{ label: "Start your AI audit", href: "/contact" }}
        secondary={{ label: "Schedule a consultation", href: "/contact" }}
        aside={<AtAGlance title="What the audit covers" items={service.outcomes!} />}
      />

      <Section>
        <SectionHeader
          eyebrow="Deliverables"
          title="Nine outputs, one document you own"
          intro="Professional assessment that reveals your AI opportunities and creates a clear path forward."
        />
        <DeliverablesGrid items={service.deliverables!} />
      </Section>

      <Section tone="mist" divided>
        <SectionHeader
          eyebrow="Process"
          title="How the audit runs"
          intro="Four stages, starting with a free 30-minute conversation and ending with a written report."
        />
        <ProcessSteps steps={service.phases!} />
      </Section>

      <RelatedServices currentSlug={service.slug} />

      <CTASection
        eyebrow="Next step"
        title="Find out where AI actually pays back"
        body="Book a free 30-minute consultation and we will tell you honestly whether an audit is the right place for your business to start."
        primaryLabel="Book free consultation"
      />
    </>
  );
}
