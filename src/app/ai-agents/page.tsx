import type { Metadata } from "next";

import { CTASection } from "@/components/sections/CTASection";
import { AtAGlance, PageHero } from "@/components/sections/PageHero";
import { ProcessSteps } from "@/components/sections/ProcessSteps";
import { RelatedServices } from "@/components/sections/RelatedServices";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Section, SectionHeader } from "@/components/ui/Section";
import { agentCapabilities, agentTypes, agentUseCases } from "@/data/content";
import { serviceBySlug } from "@/data/services";

const service = serviceBySlug("ai-agents")!;

export const metadata: Metadata = {
  title: service.meta.title,
  description: service.meta.description,
  alternates: { canonical: service.href },
};

export default function AiAgentsPage() {
  return (
    <>
      <PageHero
        eyebrow={service.eyebrow}
        title={service.headline}
        intro={service.subheadline}
        primary={{ label: "Scope an agent", href: "/contact" }}
        secondary={{ label: "See how we integrate", href: "/ai-integration" }}
        aside={<AtAGlance title="Built in as standard" items={service.outcomes!} />}
      />

      <Section>
        <SectionHeader
          eyebrow="Agent types"
          title="Four roles we build for"
          intro="Each one trained on your business data and scoped to a specific set of tasks — not a general-purpose chatbot pointed at your website."
        />
        <Container className="mt-48">
          <div className="grid gap-16 md:grid-cols-2">
            {agentTypes.map((agent, i) => (
              <Reveal key={agent.name} delay={(i % 2) * 60}>
                <Card padding="roomy" className="h-full">
                  <h3 className="type-heading-sm">{agent.name}</h3>
                  <p className="type-body mt-12 text-ink-muted">
                    {agent.description}
                  </p>
                  <ul className="mt-24 grid gap-8 border-t border-mist-gray pt-16 sm:grid-cols-2">
                    {agent.capabilities.map((capability) => (
                      <li
                        key={capability}
                        className="type-caption flex items-center gap-8 text-ink"
                      >
                        <span
                          aria-hidden="true"
                          className="h-4 w-4 shrink-0 rounded-[1px] bg-violet-core"
                        />
                        {capability}
                      </li>
                    ))}
                  </ul>
                </Card>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      <Section tone="mist" divided>
        <SectionHeader
          eyebrow="Capabilities"
          title="What every agent ships with"
          intro="Eight things we build in regardless of which department the agent serves."
        />
        <Container className="mt-48">
          <ul className="grid gap-x-32 gap-y-0 border-t border-cloud-gray/60 sm:grid-cols-2 lg:grid-cols-4">
            {agentCapabilities.map((capability, i) => (
              <Reveal as="li" key={capability} delay={(i % 4) * 50}>
                <div className="flex items-baseline gap-12 border-b border-cloud-gray/60 py-20">
                  <span className="type-label numeric text-ink-subtle">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="type-body font-medium">{capability}</span>
                </div>
              </Reveal>
            ))}
          </ul>
        </Container>
      </Section>

      <Section divided>
        <SectionHeader
          eyebrow="Use cases"
          title="Results reported by sector"
          intro="Outcomes published from agent deployments across four sectors."
        />
        <Container className="mt-48">
          <dl className="grid gap-16 sm:grid-cols-2 lg:grid-cols-4">
            {agentUseCases.map((useCase, i) => (
              <Reveal key={useCase.sector} delay={i * 60}>
                <Card className="h-full">
                  <dt className="type-label text-ink-subtle">{useCase.sector}</dt>
                  <dd className="mt-16">
                    <span className="type-heading numeric block text-violet-core">
                      {useCase.metric}
                    </span>
                    <span className="type-caption mt-8 block text-ink-muted">
                      {useCase.outcome}
                    </span>
                  </dd>
                </Card>
              </Reveal>
            ))}
          </dl>
        </Container>
      </Section>

      <Section tone="mist" divided>
        <SectionHeader
          eyebrow="Process"
          title="How an agent gets built"
          intro="Nothing goes live until it has been tested against real cases from your own operation."
        />
        <ProcessSteps steps={service.phases!} />
      </Section>

      <RelatedServices currentSlug={service.slug} />

      <CTASection
        eyebrow="Next step"
        title="Put an agent on your slowest workflow"
        body="Tell us which process costs your team the most time and we will scope an agent for it on a free 30-minute call."
        primaryLabel="Book free consultation"
      />
    </>
  );
}
