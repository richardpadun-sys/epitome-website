import { ArrowLink } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { ServiceIcon } from "@/components/ui/ServiceIcon";
import type { Service } from "@/data/services";

/**
 * The capability grid. Cards are deliberately not identical: the first card
 * spans two columns and carries its outcome list, because the lead capability
 * on any given page deserves more room than the ones supporting it.
 */
export function CapabilityGrid({
  items,
  featureFirst = true,
}: {
  items: Service[];
  featureFirst?: boolean;
}) {
  const [lead, ...rest] = items;

  return (
    <Container className="mt-48">
      <div className="grid gap-16 md:grid-cols-2 lg:grid-cols-3">
        {featureFirst && lead ? (
          <Reveal className="md:col-span-2">
            <Card
              href={lead.href}
              interactive
              padding="roomy"
              className="group flex h-full flex-col justify-between"
            >
              <div>
                <div className="flex items-start justify-between gap-16">
                  <span className="type-label numeric text-ink-subtle">
                    {lead.index} — {lead.name}
                  </span>
                  <span className="text-ink-subtle transition-colors group-hover:text-violet-core">
                    <ServiceIcon slug={lead.slug} />
                  </span>
                </div>
                <h3 className="type-heading-sm mt-20 max-w-[420px]">
                  {lead.headline}
                </h3>
                <p className="type-body mt-12 max-w-[520px] text-ink-muted">
                  {lead.summary}
                </p>
              </div>

              {lead.outcomes ? (
                <ul className="mt-24 flex flex-wrap gap-x-24 gap-y-8">
                  {lead.outcomes.map((outcome) => (
                    <li
                      key={outcome}
                      className="type-caption flex items-center gap-8 text-ink-muted"
                    >
                      <span
                        aria-hidden="true"
                        className="h-4 w-4 shrink-0 rounded-[1px] bg-cloud-gray"
                      />
                      {outcome}
                    </li>
                  ))}
                </ul>
              ) : null}

              <span className="mt-24 inline-flex items-center gap-6 text-caption font-medium text-ink transition-colors group-hover:text-violet-core">
                Explore {lead.name.toLowerCase()}
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
        ) : null}

        {(featureFirst ? rest : items).map((service, i) => (
          <Reveal key={service.slug} delay={60 + i * 50}>
            <Card
              href={service.href}
              interactive
              className="group flex h-full flex-col"
            >
              <div className="flex items-start justify-between gap-16">
                <span className="type-label numeric text-ink-subtle">
                  {service.index}
                </span>
                <span className="text-ink-subtle transition-colors group-hover:text-violet-core">
                  <ServiceIcon slug={service.slug} />
                </span>
              </div>
              <h3 className="type-subheading mt-20 font-semibold">{service.name}</h3>
              <p className="type-caption mt-8 grow text-ink-muted">
                {service.summary}
              </p>
              <span className="mt-20 inline-flex items-center gap-6 text-caption font-medium text-ink transition-colors group-hover:text-violet-core">
                Learn more
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

      <div className="mt-24">
        <ArrowLink href="/contact">Not sure where to start? Talk to us</ArrowLink>
      </div>
    </Container>
  );
}
