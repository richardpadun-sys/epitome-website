import type { Metadata } from "next";

import { AssessmentTool } from "@/components/sections/AssessmentTool";
import { PageHero } from "@/components/sections/PageHero";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";

export const metadata: Metadata = {
  title: "Free AI Integration Assessment",
  description:
    "A free, instant AI readiness assessment for UK small businesses — 23 questions across six domains, with a personalised score and recommendations. No email required.",
  alternates: { canonical: "/ai-assessment" },
};

export default function AiAssessmentPage() {
  return (
    <>
      <PageHero
        eyebrow="Free assessment"
        title="Discover exactly where your business stands with AI"
        intro="Take our short, curated AI Integration Assessment to get a personalised roadmap for successful adoption. Free, instant results, no email required."
      />

      <Section>
        <Container size="narrow">
          <AssessmentTool />
        </Container>
      </Section>
    </>
  );
}
