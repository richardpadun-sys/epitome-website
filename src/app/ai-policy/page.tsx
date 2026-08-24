import type { Metadata } from "next";

import { CTASection } from "@/components/sections/CTASection";
import { DeliverablesGrid } from "@/components/sections/DeliverablesGrid";
import { AtAGlance, PageHero } from "@/components/sections/PageHero";
import { ProcessSteps } from "@/components/sections/ProcessSteps";
import { RelatedServices } from "@/components/sections/RelatedServices";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Section, SectionHeader } from "@/components/ui/Section";
import { complianceOptions } from "@/data/content";
import { serviceBySlug } from "@/data/services";

const service = serviceBySlug("ai-policy")!;

export const metadata: Metadata = {
  title: service.meta.title,
  description: service.meta.description,
  alternates: { canonical: service.href },
};

export default function AiPolicyPage() {
  return (
    <>
      <PageHero
        eyebrow={service.eyebrow}
        title={service.headline}
        intro={service.subheadline}
        primary={{ label: "Start policy development", href: "/contact" }}
        secondary={{ label: "See training programmes", href: "/ai-training" }}
        aside={<AtAGlance title="What it protects" items={service.outcomes!} />}
      />

      <Section>
        <SectionHeader
          eyebrow="Frameworks"
          title="Four documents that work together"
          intro="Governance sets the decision rights, usage sets the rules, data sets the controls, and ethics sets the standard everything is judged against."
        />
        <DeliverablesGrid items={service.deliverables!} />
      </Section>

      <Section tone="mist" divided>
        <SectionHeader
          eyebrow="Compliance"
          title="Written against the regime you operate under"
          intro="Policies are drafted for your sector's obligations rather than as a generic template."
        />
        <Container className="mt-48">
          <Reveal>
            <ul className="flex flex-wrap gap-10">
              {complianceOptions.map((option) => (
                <li
                  key={option}
                  className="type-body rounded-md border border-cloud-gray bg-paper-white px-16 py-10 font-medium shadow-subtle"
                >
                  {option}
                </li>
              ))}
            </ul>
          </Reveal>
        </Container>
      </Section>

      <Section divided>
        <SectionHeader
          eyebrow="Process"
          title="Six to ten weeks, start to rollout"
          intro="The final phase matters most — a policy nobody has been trained on is not a control."
        />
        <ProcessSteps steps={service.phases!} />
      </Section>

      <RelatedServices currentSlug={service.slug} />

      <CTASection
        eyebrow="Next step"
        title="Get AI use under a policy before it becomes a problem"
        body="If teams are already using AI tools informally, the exposure exists whether or not the policy does. Start with a free 30-minute call."
        primaryLabel="Book free consultation"
      />
    </>
  );
}
