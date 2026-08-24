import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Section, SectionHeader } from "@/components/ui/Section";
import { platformCategories, securityStandards } from "@/data/content";

/**
 * The platforms Epitome integrates with, grouped by business function.
 * Names are set in type rather than as logo marks — reproducing third-party
 * logos would imply a partnership the source site does not claim.
 */
export function PlatformGrid({ divided = true }: { divided?: boolean }) {
  return (
    <Section divided={divided}>
      <SectionHeader
        eyebrow="Technology"
        title="AI meets the systems you already run"
        intro="We connect AI services to your existing platforms through APIs, middleware and custom adapters — so nothing has to be replaced for anything to improve."
      />

      <Container className="mt-48">
        <div className="grid gap-x-32 gap-y-32 border-t border-mist-gray pt-32 sm:grid-cols-2 lg:grid-cols-4">
          {platformCategories.map((group, i) => (
            <Reveal key={group.category} delay={i * 60}>
              <h3 className="type-label text-ink-subtle">{group.category}</h3>
              <ul className="mt-16 space-y-10">
                {group.platforms.map((platform) => (
                  <li
                    key={platform}
                    className="type-body flex items-center gap-10 font-medium"
                  >
                    <span
                      aria-hidden="true"
                      className="h-6 w-6 shrink-0 rounded-full border border-cloud-gray"
                    />
                    {platform}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>

        <Reveal delay={120}>
          <div className="mt-48 rounded-2xl border border-mist-gray bg-mist-gray/60 p-24 md:p-32">
            <h3 className="type-label text-ink-subtle">Security standards</h3>
            <ul className="mt-16 flex flex-wrap gap-x-32 gap-y-12">
              {securityStandards.map((standard) => (
                <li
                  key={standard}
                  className="type-caption flex items-center gap-8 font-medium text-ink"
                >
                  <span
                    aria-hidden="true"
                    className="h-4 w-4 shrink-0 rounded-[1px] bg-violet-core"
                  />
                  {standard}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
