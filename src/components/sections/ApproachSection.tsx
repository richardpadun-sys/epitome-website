import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Section, SectionHeader } from "@/components/ui/Section";
import { approachPillars, differentiators } from "@/data/content";

/**
 * "Why Epitome" — the differentiation section. The four positioning pillars
 * from the source site, followed by the three commitments that qualify them.
 */
export function ApproachSection() {
  return (
    <Section id="approach" tone="mist" divided>
      <SectionHeader
        eyebrow="The Epitome approach"
        title="Own your software, not another subscription"
        intro="We are AI, automation and digital specialists — helping small businesses own their own software and workflows instead of paying endless SaaS subscription fees."
      />

      <Container className="mt-48">
        <div className="grid gap-16 md:grid-cols-2">
          {differentiators.map((item, i) => (
            <Reveal key={item.title} delay={i * 60}>
              <Card className="h-full border-cloud-gray/60 bg-paper-white">
                <span className="type-label numeric text-ink-subtle">
                  {item.index}
                </span>
                <h3 className="type-subheading mt-16 font-semibold">{item.title}</h3>
                <p className="type-caption mt-8 text-ink-muted">{item.body}</p>
              </Card>
            </Reveal>
          ))}
        </div>

        <Reveal delay={120}>
          <div className="mt-16 grid gap-x-32 gap-y-16 rounded-2xl border border-cloud-gray/60 bg-paper-white p-24 md:grid-cols-3 md:p-32">
            {approachPillars.map((pillar) => (
              <div key={pillar.title} className="flex gap-12">
                <svg
                  aria-hidden="true"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  className="mt-3 shrink-0 text-violet-core"
                >
                  <path
                    d="M3 8.4 6.4 11.8 13 5.2"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <div>
                  <p className="type-caption font-medium text-ink">
                    {pillar.title}
                  </p>
                  <p className="type-caption mt-4 text-ink-muted">{pillar.body}</p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
