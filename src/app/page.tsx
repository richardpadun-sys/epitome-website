import type { Metadata } from "next";

import { ApproachSection } from "@/components/sections/ApproachSection";
import { CapabilityGrid } from "@/components/sections/CapabilityGrid";
import { CaseStudySection } from "@/components/sections/CaseStudySection";
import { CTASection } from "@/components/sections/CTASection";
import { Hero } from "@/components/sections/Hero";
import { PlatformGrid } from "@/components/sections/PlatformGrid";
import { ProblemSection } from "@/components/sections/ProblemSection";
import { ProcessSteps } from "@/components/sections/ProcessSteps";
import { Testimonials } from "@/components/sections/Testimonials";
import { ArrowLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Section, SectionHeader } from "@/components/ui/Section";
import { industries, methodology } from "@/data/content";
import { services } from "@/data/services";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "AI Integration Specialists for UK Small Businesses | The Epitome",
  description:
    "The Epitome helps UK small businesses cut costs and free up time by embedding AI into their operations — consultancy, audits, integration, custom AI agents, applications and training.",
  alternates: { canonical: "/" },
};

const homeSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: site.name,
  url: site.url,
  description: site.description,
};

export default function HomePage() {
  return (
    <>
      <Hero />

      <ProblemSection />

      <ApproachSection />

      <Section divided>
        <SectionHeader
          eyebrow="What we do"
          title="Eight capabilities, one engagement"
          intro="Comprehensive AI solutions designed specifically for UK small businesses — from the first assessment through to the systems your team uses every day."
          aside={
            <ArrowLink href="/contact">Book a free 30-minute call</ArrowLink>
          }
        />
        <CapabilityGrid items={services} />
      </Section>

      <Section tone="mist" divided>
        <SectionHeader
          eyebrow="How it works"
          title="A four-step integration methodology"
          intro="The same sequence on every engagement, whether it ends in a policy framework or a production application."
        />
        <ProcessSteps
          steps={methodology.map((step) => ({
            title: step.title,
            description: step.body,
          }))}
        />

        <Container className="mt-56">
          <Reveal>
            <div className="flex flex-col gap-16 border-t border-cloud-gray/60 pt-24 md:flex-row md:items-baseline md:justify-between">
              <p className="type-label text-ink-subtle">Industries we work across</p>
              <ul className="flex flex-wrap gap-x-24 gap-y-8">
                {industries.map((industry) => (
                  <li key={industry} className="type-body font-medium">
                    {industry}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </Container>
      </Section>

      <PlatformGrid />

      <CaseStudySection />

      <Testimonials />

      <CTASection />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeSchema) }}
      />
    </>
  );
}
