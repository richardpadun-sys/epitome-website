import type { Metadata } from "next";
import Link from "next/link";

import { PageHero } from "@/components/sections/PageHero";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { policies, policiesIntro } from "@/data/content";
import { contact } from "@/data/site";

export const metadata: Metadata = {
  title: "Legal Policies",
  description:
    "All policies governing The Epitome Group's services — terms of sale, AIOS and integration terms, cancellation, IP, acceptable use, cookies, privacy and contractor terms.",
  alternates: { canonical: "/policies" },
};

export default function PoliciesPage() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Policies" intro={policiesIntro} />

      <Section>
        <Container>
          <ul className="grid gap-16 md:grid-cols-2 lg:grid-cols-3">
            {policies.map((policy, i) => (
              <Reveal as="li" key={policy.slug} delay={(i % 3) * 50}>
                <Link
                  href={policy.href}
                  className="group flex h-full flex-col rounded-2xl border border-mist-gray bg-paper-white p-24 shadow-subtle transition-[border-color,box-shadow,transform] duration-200 hover:-translate-y-2 hover:border-cloud-gray hover:shadow-raised"
                >
                  <h2 className="type-subheading font-semibold">{policy.title}</h2>
                  <p className="type-caption mt-8 grow text-ink-muted">
                    {policy.summary}
                  </p>
                  <span className="mt-20 inline-flex items-center gap-6 text-caption font-medium transition-colors group-hover:text-violet-core">
                    Read policy
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
                </Link>
              </Reveal>
            ))}
          </ul>

          <Reveal delay={120}>
            <p className="type-body mt-48 border-t border-mist-gray pt-24 text-ink-muted">
              For questions about any of these policies, contact us at{" "}
              <a
                href={`mailto:${contact.email}`}
                className="font-medium text-ink underline decoration-cloud-gray underline-offset-4 transition-colors hover:text-violet-core"
              >
                {contact.email}
              </a>{" "}
              or call{" "}
              <a
                href={contact.phoneHref}
                className="numeric font-medium text-ink underline decoration-cloud-gray underline-offset-4 transition-colors hover:text-violet-core"
              >
                {contact.phone}
              </a>
              .
            </p>
          </Reveal>
        </Container>
      </Section>
    </>
  );
}
