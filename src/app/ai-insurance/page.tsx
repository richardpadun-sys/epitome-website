import type { Metadata } from "next";

import { CTASection } from "@/components/sections/CTASection";
import { PageHero } from "@/components/sections/PageHero";
import { RelatedServices } from "@/components/sections/RelatedServices";
import { ArrowLink } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Section, SectionHeader } from "@/components/ui/Section";
import { contact } from "@/data/site";
import { serviceBySlug } from "@/data/services";

const service = serviceBySlug("ai-insurance")!;

export const metadata: Metadata = {
  title: service.meta.title,
  description: service.meta.description,
  alternates: { canonical: service.href },
};

/**
 * The source site publishes this service as a headline, a single line of
 * description and a call to action — no cover details, underwriters or
 * process. The page is built to match that scope honestly rather than to
 * pad it out with cover we cannot substantiate, and routes the visitor to
 * a conversation, which is what the source site does too.
 */
export default function AiInsurancePage() {
  return (
    <>
      <PageHero
        eyebrow={service.eyebrow}
        title={service.headline}
        intro={service.subheadline}
        primary={{ label: "Get protected", href: "/contact" }}
        secondary={{ label: "See AI policy & governance", href: "/ai-policy" }}
      />

      <Section>
        <SectionHeader
          eyebrow="How it fits"
          title="Cover is the last line, not the first"
          intro="Insurance sits alongside the controls that reduce the risk in the first place. We would usually talk about both together."
        />

        <Container className="mt-48">
          <div className="grid gap-16 md:grid-cols-2">
            <Reveal>
              <Card padding="roomy" className="h-full">
                <h3 className="type-subheading font-semibold">
                  Reduce the exposure
                </h3>
                <p className="type-body mt-12 text-ink-muted">
                  Governance frameworks, usage policies, data controls and an
                  ethics standard — so AI is being used deliberately rather
                  than informally.
                </p>
                <div className="mt-24">
                  <ArrowLink href="/ai-policy">AI policy &amp; governance</ArrowLink>
                </div>
              </Card>
            </Reveal>

            <Reveal delay={60}>
              <Card padding="roomy" className="h-full">
                <h3 className="type-subheading font-semibold">
                  Cover what remains
                </h3>
                <p className="type-body mt-12 text-ink-muted">
                  Specialised AI insurance coverage and risk management
                  strategies, arranged around how your business actually uses
                  AI.
                </p>
                <div className="mt-24">
                  <ArrowLink href="/contact">Talk to us about cover</ArrowLink>
                </div>
              </Card>
            </Reveal>
          </div>

          <Reveal delay={120}>
            <p className="type-caption mt-32 max-w-[640px] text-ink-subtle">
              Cover, limits and terms depend on your sector, your systems and
              how AI is deployed in your operation. We scope it in
              conversation rather than publishing a fixed product — start with
              a call on{" "}
              <a
                href={contact.phoneHref}
                className="numeric font-medium text-ink underline decoration-cloud-gray underline-offset-4 transition-colors hover:text-violet-core"
              >
                {contact.phone}
              </a>
              .
            </p>
          </Reveal>
        </Container>
      </Section>

      <RelatedServices currentSlug={service.slug} />

      <CTASection
        eyebrow="Next step"
        title="Talk through your AI risk exposure"
        body="A free 30-minute call to understand how you are using AI today and what cover would sensibly look like."
        primaryLabel="Book free consultation"
      />
    </>
  );
}
