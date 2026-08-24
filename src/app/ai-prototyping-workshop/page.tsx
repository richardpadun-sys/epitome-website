import type { Metadata } from "next";

import { CreatathonBookingForm } from "@/components/sections/CreatathonBookingForm";
import { PageHero } from "@/components/sections/PageHero";
import { Accordion } from "@/components/ui/Accordion";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Section, SectionHeader } from "@/components/ui/Section";
import {
  audiences,
  courseFormat,
  faqs,
  included,
  testimonials,
  waves,
  whyItWorks,
} from "@/data/creatathon";

export const metadata: Metadata = {
  title: "Creatathon — Build an AI App in One Day",
  description:
    "A hands-on no-code workshop where you build a working AI-powered app in one day — no coding experience required. Delivered by expert facilitators across the UK.",
  alternates: { canonical: "/ai-prototyping-workshop" },
};

export default function CreatathonPage() {
  return (
    <>
      <PageHero
        eyebrow="Creatathon"
        title="Turn problems into prototypes in one day"
        intro="A hands-on no-code workshop where you'll build a working AI-powered app — no coding experience required. Delivered by expert facilitators across the UK."
        primary={{ label: "Choose your workshop", href: "#book" }}
      />

      <Section>
        <SectionHeader eyebrow="What participants say" title="From the last cohort" />
        <Container className="mt-48">
          <div className="grid gap-16 md:grid-cols-3">
            {testimonials.map((t, i) => (
              <Reveal key={t.attribution} delay={i * 60}>
                <Card padding="roomy" className="flex h-full flex-col">
                  <p className="type-body grow text-ink">&ldquo;{t.quote}&rdquo;</p>
                  <p className="type-caption mt-16 border-t border-mist-gray pt-16 text-ink-subtle">
                    — {t.attribution}
                  </p>
                </Card>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      <Section tone="mist" divided>
        <SectionHeader eyebrow="Perfect for" title="Who this is for" />
        <Container className="mt-48">
          <div className="grid gap-16 sm:grid-cols-2 lg:grid-cols-4">
            {audiences.map((a, i) => (
              <Reveal key={a.title} delay={i * 60}>
                <Card className="h-full bg-paper-white">
                  <h3 className="type-subheading font-semibold">{a.title}</h3>
                  <p className="type-caption mt-8 text-ink-subtle">{a.body}</p>
                </Card>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      <Section divided>
        <SectionHeader
          eyebrow="Structure"
          title="The three-wave structure"
          intro="Our unique three-wave methodology takes you from concept to working prototype in one focused day."
        />
        <Container className="mt-48">
          <div className="grid gap-16 md:grid-cols-3">
            {waves.map((w, i) => (
              <Reveal key={w.title} delay={i * 70}>
                <Card padding="roomy" className="h-full">
                  <span className="type-label numeric text-ink-subtle">
                    {String(w.n).padStart(2, "0")}
                  </span>
                  <h3 className="type-subheading mt-16 font-semibold">{w.title}</h3>
                  <p className="type-caption numeric mt-4 text-ink-subtle">{w.time}</p>
                  <ul className="mt-16 space-y-8 border-t border-mist-gray pt-16">
                    {w.items.map((item) => (
                      <li key={item} className="type-caption flex items-center gap-8">
                        <span
                          aria-hidden="true"
                          className="h-4 w-4 shrink-0 rounded-[1px] bg-violet-core"
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                </Card>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      <Section tone="mist" divided>
        <SectionHeader eyebrow="Why it works" title="Why Creatathon works" />
        <Container className="mt-48">
          <div className="grid gap-16 sm:grid-cols-2 lg:grid-cols-4">
            {whyItWorks.map((w, i) => (
              <Reveal key={w.title} delay={i * 60}>
                <Card className="h-full bg-paper-white">
                  <h3 className="type-subheading font-semibold">{w.title}</h3>
                  <p className="type-caption mt-8 text-ink-subtle">{w.body}</p>
                </Card>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      <Section divided id="book">
        <SectionHeader
          eyebrow="Book"
          title="Choose your workshop"
          intro="All workshops follow the same curriculum. Select the location and date that works best for you."
        />
        <Container className="mt-48">
          <div className="grid gap-32 lg:grid-cols-[1fr_360px]">
            <CreatathonBookingForm />

            <div className="space-y-24">
              <Card padding="roomy">
                <h3 className="type-label text-ink-subtle">What&rsquo;s included</h3>
                <ul className="mt-16 space-y-10">
                  {included.map((item) => (
                    <li key={item} className="type-caption flex items-start gap-8">
                      <svg
                        aria-hidden="true"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        className="mt-2 shrink-0 text-violet-core"
                      >
                        <path
                          d="M3 8.4 6.4 11.8 13 5.2"
                          stroke="currentColor"
                          strokeWidth="1.6"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </Card>

              <Card padding="roomy">
                <h3 className="type-label text-ink-subtle">Course format</h3>
                <dl className="mt-16 space-y-10">
                  {courseFormat.map((f) => (
                    <div key={f.label}>
                      <dt className="type-caption font-medium text-ink">{f.label}</dt>
                      <dd className="type-caption text-ink-subtle">{f.value}</dd>
                    </div>
                  ))}
                </dl>
              </Card>
            </div>
          </div>
        </Container>
      </Section>

      <Section tone="mist" divided>
        <SectionHeader eyebrow="FAQ" title="Frequently asked questions" />
        <Container className="mt-48">
          <div className="max-w-[820px] rounded-2xl border border-mist-gray bg-paper-white p-8">
            <Accordion items={faqs} />
          </div>
        </Container>
      </Section>
    </>
  );
}
