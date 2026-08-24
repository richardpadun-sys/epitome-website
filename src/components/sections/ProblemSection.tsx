import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Section, SectionHeader } from "@/components/ui/Section";
import { problems } from "@/data/content";

/**
 * The problem statement, expressed as a ledger rather than cards — four rows
 * on a shared hairline grid. It is the quietest section on the page by
 * design; the weight belongs to the approach that answers it.
 */
export function ProblemSection() {
  return (
    <Section divided>
      <SectionHeader
        eyebrow="The problem"
        title="Most small businesses are renting their operations"
        intro="Software costs rise, work moves by hand between systems, and nobody has a single view of what is actually happening."
      />

      <Container className="mt-48">
        <dl className="border-t border-mist-gray">
          {problems.map((problem, i) => (
            <Reveal key={problem.title} delay={i * 60}>
              <div className="grid gap-8 border-b border-mist-gray py-24 md:grid-cols-12 md:gap-32">
                <dt className="type-label text-ink-subtle md:col-span-2">
                  {problem.label}
                </dt>
                <dd className="md:col-span-10 md:grid md:grid-cols-10 md:gap-32">
                  <p className="type-subheading font-medium md:col-span-4">
                    {problem.title}
                  </p>
                  <p className="type-caption mt-6 text-ink-muted md:col-span-6 md:mt-0">
                    {problem.body}
                  </p>
                </dd>
              </div>
            </Reveal>
          ))}
        </dl>
      </Container>
    </Section>
  );
}
