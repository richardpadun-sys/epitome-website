import type { Metadata } from "next";

import { ContactForm } from "@/components/sections/ContactForm";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { contact } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact Us | Get In Touch",
  description:
    "Talk to The Epitome about AI integration, consultancy, agents, applications or training. Email, phone, WhatsApp, or book a free consultation.",
  alternates: { canonical: "/contact" },
};

const CHANNELS = [
  {
    label: "Email us",
    detail: "Get in touch via email",
    value: contact.email,
    href: `mailto:${contact.email}`,
  },
  {
    label: "Call us",
    detail: "Speak to our AI experts",
    value: contact.phone,
    href: contact.phoneHref,
  },
  {
    label: "WhatsApp",
    detail: "Message us directly",
    value: contact.whatsappNumber,
    href: contact.whatsappHref,
    external: true,
  },
] as const;

export default function ContactPage() {
  return (
    <>
      <section className="border-b border-mist-gray pt-48 pb-56 md:pt-72 md:pb-72">
        <Container>
          <div className="grid gap-40 lg:grid-cols-12 lg:gap-48">
            <div className="lg:col-span-5">
              <div className="epi-rise" style={{ animationDelay: "40ms" }}>
                <Eyebrow>Contact</Eyebrow>
              </div>
              <h1
                className="type-heading epi-rise mt-16"
                style={{ animationDelay: "110ms" }}
              >
                Get in touch
              </h1>
              <p
                className="type-subheading epi-rise mt-20 max-w-[420px] font-normal text-ink-muted"
                style={{ animationDelay: "180ms" }}
              >
                Ready to start your AI transformation journey? Book a free
                30-minute consultation, or send us the problem you are trying
                to solve.
              </p>

              <div
                className="epi-rise mt-32"
                style={{ animationDelay: "250ms" }}
              >
                <Button href={contact.bookingUrl} external trailingIcon>
                  Book free consultation
                </Button>
              </div>

              <dl className="epi-rise mt-48 border-t border-mist-gray" style={{ animationDelay: "320ms" }}>
                {CHANNELS.map((channel) => (
                  <div
                    key={channel.label}
                    className="flex items-baseline justify-between gap-16 border-b border-mist-gray py-20"
                  >
                    <div>
                      <dt className="type-caption font-medium text-ink">
                        {channel.label}
                      </dt>
                      <dd className="type-caption text-ink-subtle">
                        {channel.detail}
                      </dd>
                    </div>
                    <a
                      href={channel.href}
                      {...("external" in channel && channel.external
                        ? { target: "_blank", rel: "noopener noreferrer" }
                        : {})}
                      className="type-caption numeric shrink-0 font-medium text-ink underline decoration-cloud-gray underline-offset-4 transition-colors hover:text-violet-core hover:decoration-violet-core"
                    >
                      {channel.value}
                    </a>
                  </div>
                ))}
              </dl>

              <div className="epi-rise mt-32" style={{ animationDelay: "380ms" }}>
                <h2 className="type-label text-ink-subtle">Visit us</h2>
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
            </div>

            <div className="epi-rise lg:col-span-7" style={{ animationDelay: "300ms" }}>
              <ContactForm />
            </div>
          </div>
        </Container>
      </section>

      <Section rhythm="tight">
        <Container>
          <Reveal>
            <div className="grid gap-24 md:grid-cols-3">
              <div>
                <h2 className="type-label text-ink-subtle">What happens next</h2>
              </div>
              <div className="md:col-span-2">
                <ol className="type-body space-y-12 text-ink-muted">
                  <li className="flex gap-12">
                    <span className="numeric type-caption mt-3 shrink-0 font-medium text-ink-subtle">
                      01
                    </span>
                    <span>
                      We read your enquiry and come back to you — every enquiry
                      gets a reply.
                    </span>
                  </li>
                  <li className="flex gap-12">
                    <span className="numeric type-caption mt-3 shrink-0 font-medium text-ink-subtle">
                      02
                    </span>
                    <span>
                      A free 30-minute discovery call to understand the
                      business, its pressures and its objectives.
                    </span>
                  </li>
                  <li className="flex gap-12">
                    <span className="numeric type-caption mt-3 shrink-0 font-medium text-ink-subtle">
                      03
                    </span>
                    <span>
                      An honest recommendation on where to start — including
                      when the answer is that AI is not the right lever yet.
                    </span>
                  </li>
                </ol>
              </div>
            </div>
          </Reveal>
        </Container>
      </Section>
    </>
  );
}
