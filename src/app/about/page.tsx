import type { Metadata } from "next";

import { CTASection } from "@/components/sections/CTASection";
import { PageHero } from "@/components/sections/PageHero";
import { ProcessSteps } from "@/components/sections/ProcessSteps";
import { Testimonials } from "@/components/sections/Testimonials";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Section, SectionHeader } from "@/components/ui/Section";
import { companyStats, leadership, methodology, mission, values } from "@/data/content";
import { contact } from "@/data/site";

export const metadata: Metadata = {
  title: "About us",
  description:
    "The Epitome are AI integrators bridging the gap between traditional business operations and AI automation for UK small businesses. Meet the team and the method.",
  alternates: { canonical: "/about" },
};

/** Initials stand in for portraits — the source site publishes no photography. */
function Initials({ name }: { name: string }) {
  const initials = name
    .split(" ")
    .map((part) => part[0])
    .slice(0, 2)
    .join("");
  return (
    <span
      aria-hidden="true"
      className="numeric flex h-40 w-40 items-center justify-center rounded-full border border-cloud-gray bg-mist-gray text-caption font-medium text-ink-muted"
    >
      {initials}
    </span>
  );
}

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About us"
        title="AI integrators, not another software vendor"
        intro={mission}
        primary={{ label: "Work with us", href: "/contact" }}
        secondary={{ label: "See our services", href: "/services" }}
      />

      <Section rhythm="tight">
        <Container>
          <Reveal>
            <dl className="grid grid-cols-2 gap-24 border-b border-mist-gray pb-32 lg:grid-cols-4">
              {companyStats.map((stat) => (
                <div key={stat.label}>
                  <dt className="sr-only">{stat.label}</dt>
                  <dd>
                    <span className="type-heading numeric block">
                      {stat.value}
                    </span>
                    <span className="type-caption mt-6 block text-ink-muted">
                      {stat.label}
                    </span>
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </Container>
      </Section>

      <Section rhythm="tight">
        <SectionHeader
          eyebrow="What we believe"
          title="Four things that shape every engagement"
        />
        <Container className="mt-48">
          <div className="grid gap-16 md:grid-cols-2">
            {values.map((value, i) => (
              <Reveal key={value.title} delay={(i % 2) * 60}>
                <Card padding="roomy" className="h-full">
                  <h3 className="type-subheading font-semibold">{value.title}</h3>
                  <p className="type-body mt-12 text-ink-muted">{value.body}</p>
                </Card>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      <Section tone="mist" divided>
        <SectionHeader
          eyebrow="Methodology"
          title="How we run an integration"
          intro="Four steps, applied consistently, from the first conversation through to long-term optimisation."
        />
        <ProcessSteps
          steps={methodology.map((step) => ({
            title: step.title,
            description: step.body,
          }))}
        />
      </Section>

      <Section divided>
        <SectionHeader
          eyebrow="Leadership"
          title="Who you will be working with"
          intro="A small senior team — strategy, go-to-market, training and compliance."
        />
        <Container className="mt-48">
          <ul className="grid gap-16 sm:grid-cols-2 lg:grid-cols-4">
            {leadership.map((person, i) => (
              <Reveal as="li" key={person.name} delay={i * 60}>
                <Card className="h-full">
                  <Initials name={person.name} />
                  <h3 className="type-subheading mt-20 font-semibold">
                    {person.name}
                  </h3>
                  <p className="type-caption mt-6 text-ink-muted">{person.role}</p>
                  <p className="type-caption numeric mt-12 text-ink-subtle">
                    {person.experience} experience
                  </p>
                </Card>
              </Reveal>
            ))}
          </ul>
        </Container>
      </Section>

      <Testimonials />

      <Section tone="mist" divided rhythm="tight">
        <Container>
          <Reveal>
            <div className="grid gap-32 md:grid-cols-3">
              <div>
                <h2 className="type-label text-ink-subtle">Where we are</h2>
                <address className="type-body mt-12 not-italic">
                  {contact.address.line1}
                  <br />
                  {contact.address.line2}
                  <br />
                  {contact.address.postcode}
                </address>
                <p className="type-caption mt-8 text-ink-muted">
                  {contact.offices}
                </p>
              </div>
              <div>
                <h2 className="type-label text-ink-subtle">Email</h2>
                <a
                  href={`mailto:${contact.email}`}
                  className="type-body mt-12 block font-medium transition-colors hover:text-violet-core"
                >
                  {contact.email}
                </a>
              </div>
              <div>
                <h2 className="type-label text-ink-subtle">Phone</h2>
                <a
                  href={contact.phoneHref}
                  className="type-body numeric mt-12 block font-medium transition-colors hover:text-violet-core"
                >
                  {contact.phone}
                </a>
              </div>
            </div>
          </Reveal>
        </Container>
      </Section>

      <CTASection />
    </>
  );
}
