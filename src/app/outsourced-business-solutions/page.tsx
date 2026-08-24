import type { Metadata } from "next";

import { CTASection } from "@/components/sections/CTASection";
import { PageHero } from "@/components/sections/PageHero";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { outsourcedIntro, outsourcedServices } from "@/data/outsourced";

export const metadata: Metadata = {
  title: "Outsourced Business Solutions",
  description:
    "AI integration paired with hands-on outsourced business support — marketing, business development, sales, operations, technology, customer service, recruitment, HR and finance for UK SMEs.",
  alternates: { canonical: "/outsourced-business-solutions" },
};

export default function OutsourcedBusinessSolutionsPage() {
  return (
    <>
      <PageHero
        eyebrow="Outsourced Business Solutions"
        title="A full suite of outsourced business functions"
        intro={outsourcedIntro}
        primary={{ label: "Talk to us about your needs", href: "/contact" }}
      />

      <Section>
        <Container>
          <div className="grid gap-16 sm:grid-cols-2 lg:grid-cols-3">
            {outsourcedServices.map((service, i) => (
              <Reveal key={service.name} delay={(i % 3) * 60}>
                <Card
                  href="/contact"
                  interactive
                  className="group flex h-full flex-col"
                >
                  <h3 className="type-subheading font-semibold">{service.name}</h3>
                  <p className="type-caption mt-8 grow text-ink-subtle">
                    {service.body}
                  </p>
                  <span className="mt-20 inline-flex items-center gap-6 text-caption font-medium transition-colors group-hover:text-violet-core">
                    Discover more
                    <svg
                      aria-hidden="true"
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      fill="none"
                      className="transition-transform duration-200 group-hover:translate-x-2"
                    >
                      <path
                        d="M2.5 6h7M6.5 3l3 3-3 3"
                        stroke="currentColor"
                        strokeWidth="1.4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </Card>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      <CTASection
        eyebrow="Next step"
        title="Combine AI integration with hands-on operational support"
        body="Tell us which functions are taking up the most time and we'll scope the right mix of AI and outsourced support on a free 30-minute call."
        primaryLabel="Book free consultation"
      />
    </>
  );
}
