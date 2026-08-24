import type { Metadata } from "next";

import { CaseStudySection } from "@/components/sections/CaseStudySection";
import { CTASection } from "@/components/sections/CTASection";
import { AtAGlance, PageHero } from "@/components/sections/PageHero";
import { ProcessSteps } from "@/components/sections/ProcessSteps";
import { RelatedServices } from "@/components/sections/RelatedServices";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Section, SectionHeader } from "@/components/ui/Section";
import {
  applicationTypes,
  engagementModels,
  mvpTiers,
  platformClaims,
} from "@/data/content";
import { serviceBySlug } from "@/data/services";

const service = serviceBySlug("custom-applications")!;

export const metadata: Metadata = {
  title: service.meta.title,
  description: service.meta.description,
  alternates: { canonical: service.href },
};

export default function CustomApplicationsPage() {
  return (
    <>
      <PageHero
        eyebrow={service.eyebrow}
        title={service.headline}
        intro={service.subheadline}
        primary={{ label: "Discuss your project", href: "/contact" }}
        secondary={{ label: "Explore AI consultancy", href: "/ai-consultancy" }}
        aside={<AtAGlance title="Why bespoke" items={service.outcomes!} />}
      />

      <Section>
        <SectionHeader
          eyebrow="What we build"
          title="Six kinds of application"
          intro="All of them owned outright by the client, with no vendor lock-in and no recurring licence."
        />
        <Container className="mt-48">
          <div className="grid gap-16 md:grid-cols-2 lg:grid-cols-3">
            {applicationTypes.map((type, i) => (
              <Reveal key={type.name} delay={(i % 3) * 60}>
                <Card className="h-full">
                  <span className="type-label numeric text-ink-subtle">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="type-subheading mt-16 font-semibold">
                    {type.name}
                  </h3>
                  <p className="type-caption mt-8 text-ink-muted">{type.body}</p>
                </Card>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      <Section tone="mist" divided>
        <SectionHeader
          eyebrow="Process"
          title="Understand, design, build, deploy"
          intro="Wireframes and prototypes are agreed before a line of the real thing is built."
        />
        <ProcessSteps steps={service.phases!} />
      </Section>

      <Section divided>
        <SectionHeader
          eyebrow="Technology"
          title="Built on Lovable"
          intro="We build on Lovable's no-code platform, where The Epitome is recognised as a top 1% global builder with 1.2 million lines of code shipped."
        />
        <Container className="mt-48">
          <Reveal>
            <ul className="grid gap-x-32 gap-y-0 border-t border-mist-gray sm:grid-cols-2 lg:grid-cols-3">
              {platformClaims.map((claim) => (
                <li
                  key={claim}
                  className="type-body flex items-start gap-10 border-b border-mist-gray py-20 font-medium"
                >
                  <span
                    aria-hidden="true"
                    className="mt-10 h-4 w-4 shrink-0 rounded-[1px] bg-violet-core"
                  />
                  {claim}
                </li>
              ))}
            </ul>
          </Reveal>
        </Container>
      </Section>

      <Section tone="mist" divided>
        <SectionHeader
          eyebrow="Investment"
          title="What an MVP costs"
          intro="Indicative ranges by scope. The discovery consultation is free and comes before any of them."
        />
        <Container className="mt-48">
          <div className="grid gap-16 lg:grid-cols-3">
            {mvpTiers.map((tier, i) => (
              <Reveal key={tier.name} delay={i * 70}>
                <Card
                  padding="roomy"
                  className={`flex h-full flex-col bg-paper-white ${
                    "featured" in tier && tier.featured
                      ? "border-ink/15 shadow-raised"
                      : ""
                  }`}
                >
                  <div className="flex items-baseline justify-between gap-12">
                    <h3 className="type-subheading font-semibold">{tier.name}</h3>
                    {"featured" in tier && tier.featured ? (
                      <span className="type-label text-violet-core">
                        Most common
                      </span>
                    ) : null}
                  </div>
                  <p className="type-caption numeric mt-8 text-ink-subtle">
                    {tier.timeline}
                  </p>
                  <p className="type-heading-sm numeric mt-24">{tier.price}</p>
                  <ul className="mt-24 space-y-10 border-t border-mist-gray pt-20">
                    {tier.features.map((feature) => (
                      <li
                        key={feature}
                        className="type-caption flex items-center gap-8 text-ink"
                      >
                        <span
                          aria-hidden="true"
                          className="h-4 w-4 shrink-0 rounded-[1px] bg-cloud-gray"
                        />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </Card>
              </Reveal>
            ))}
          </div>

          <Reveal delay={120}>
            <dl className="mt-32 grid gap-24 border-t border-cloud-gray/60 pt-24 sm:grid-cols-3">
              {engagementModels.map((model) => (
                <div key={model.name}>
                  <dt className="type-caption font-medium text-ink">
                    {model.name}
                  </dt>
                  <dd className="type-caption mt-4 text-ink-muted">
                    {model.detail}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </Container>
      </Section>

      <CaseStudySection />

      <RelatedServices currentSlug={service.slug} />

      <CTASection
        eyebrow="Next step"
        title="Stop adapting your business to someone else's software"
        body="Book a free 60-minute discovery consultation and we will scope what it would take to build the thing you actually need."
        primaryLabel="Book free consultation"
      />
    </>
  );
}
