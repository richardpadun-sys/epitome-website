import { ArrowLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { caseStudy } from "@/data/content";

/**
 * The one published case study, given a full band rather than a card. A
 * single piece of real proof presented properly beats a grid of thin ones.
 */
export function CaseStudySection() {
  return (
    <Section tone="ink" divided={false}>
      <Container>
        <Reveal>
          <div className="grid gap-40 lg:grid-cols-12 lg:gap-48">
            <div className="lg:col-span-5">
              <Eyebrow tone="inverse">{caseStudy.eyebrow}</Eyebrow>
              <h2 className="type-heading mt-16 text-paper-white">
                {caseStudy.client}
              </h2>
              <p className="type-body mt-16 max-w-[420px] text-ink-on-dark">
                {caseStudy.challenge}
              </p>

              <dl className="mt-32 grid grid-cols-2 gap-24 border-t border-white/10 pt-24">
                <div>
                  <dt className="type-label text-ink-on-dark-subtle">Delivered in</dt>
                  <dd className="type-heading-sm numeric mt-6 text-paper-white">
                    {caseStudy.duration}
                  </dd>
                </div>
                <div>
                  <dt className="type-label text-ink-on-dark-subtle">Built</dt>
                  <dd className="type-caption mt-8 text-paper-white">
                    {caseStudy.deliverable}
                  </dd>
                </div>
              </dl>
            </div>

            <div className="lg:col-span-7">
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-24 md:p-32">
                <p className="type-caption text-ink-on-dark-subtle">What we built</p>
                <p className="type-subheading mt-12 font-normal text-paper-white">
                  {caseStudy.solution}
                </p>

                <ul className="mt-24 flex flex-wrap gap-8">
                  {caseStudy.highlights.map((highlight) => (
                    <li
                      key={highlight}
                      className="type-caption rounded-md border border-white/10 bg-white/[0.04] px-12 py-6 text-ink-on-dark"
                    >
                      {highlight}
                    </li>
                  ))}
                </ul>

                <blockquote className="mt-32 border-t border-white/10 pt-24">
                  <p className="type-subheading font-normal text-paper-white">
                    &ldquo;{caseStudy.quote}&rdquo;
                  </p>
                  <footer className="type-caption mt-16 text-ink-on-dark-subtle">
                    Client, {caseStudy.client}
                  </footer>
                </blockquote>
              </div>

              <div className="mt-24">
                <ArrowLink href="/services/custom-applications" tone="inverse">
                  See how we build custom applications
                </ArrowLink>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
