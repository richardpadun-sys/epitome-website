import type { Metadata } from "next";

import { CTASection } from "@/components/sections/CTASection";
import { PageHero } from "@/components/sections/PageHero";
import { Accordion } from "@/components/ui/Accordion";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { faqs } from "@/data/content";

export const metadata: Metadata = {
  title: "Frequently Asked Questions",
  description:
    "Common questions about AI integration, training, security, timelines and support — answered by The Epitome, AI integration specialists for UK small businesses.",
  alternates: { canonical: "/faq" },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: { "@type": "Answer", text: faq.answer },
  })),
};

export default function FaqPage() {
  return (
    <>
      <PageHero
        eyebrow="Help & answers"
        title="Frequently asked questions"
        intro="Common questions about AI integration and our services. If yours is not here, ask us directly — we answer every enquiry."
        primary={{ label: "Contact us", href: "/contact" }}
      />

      <Section>
        {/* Left-aligned to the page grid rather than centred, so the list
            shares an edge with the heading above it. */}
        <Container>
          <div className="max-w-[820px]">
            <Accordion items={faqs} headingLevel="h2" />
          </div>
        </Container>
      </Section>

      <CTASection
        eyebrow="Still have questions?"
        title="We're here to help"
        body="Tell us what you are trying to work out and we will give you a straight answer — on a free 30-minute call or by email."
        primaryLabel="Contact us"
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
}
