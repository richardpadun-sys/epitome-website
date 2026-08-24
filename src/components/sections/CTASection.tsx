import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { contact } from "@/data/site";

type CTASectionProps = {
  eyebrow?: string;
  title?: string;
  body?: string;
  primaryLabel?: string;
  primaryHref?: string;
};

/**
 * The site's single closing conversion block. One primary action, with the
 * direct contact routes offered as text rather than as competing buttons.
 */
export function CTASection({
  eyebrow = "Get started",
  title = "Ready to transform your business with AI?",
  body = "Join 745+ UK small businesses that have already revolutionised their operations with our AI solutions. Start with a free 30-minute discovery call.",
  primaryLabel = "Book free consultation",
  primaryHref = "/contact",
}: CTASectionProps) {
  return (
    <Section rhythm="major" divided>
      <Container>
        <Reveal>
          {/* The one place the brand gradient appears at scale on a content
              page: a Span · 82° rule capping the conversion block. Wider than
              2:1, so Span rather than Rise. */}
          <div className="relative overflow-hidden rounded-3xl border border-mist-gray bg-mist-gray/70 px-24 py-48 md:px-56 md:py-64">
            <span
              aria-hidden="true"
              className="bg-span absolute inset-x-0 top-0 block h-3"
            />
            <div className="mx-auto max-w-[720px] text-center">
              <Eyebrow className="justify-center">{eyebrow}</Eyebrow>
              <h2 className="type-heading mt-16">{title}</h2>
              <p className="type-subheading mx-auto mt-16 max-w-[560px] font-normal text-ink-muted">
                {body}
              </p>

              <div className="mt-32 flex flex-wrap justify-center gap-10">
                <Button href={primaryHref} trailingIcon>
                  {primaryLabel}
                </Button>
                <Button href={contact.whatsappHref} variant="secondary" external>
                  Message on WhatsApp
                </Button>
              </div>

              <p className="type-caption mt-24 text-ink-subtle">
                Or reach us directly on{" "}
                <a
                  href={`mailto:${contact.email}`}
                  className="font-medium text-ink underline decoration-cloud-gray underline-offset-4 transition-colors hover:text-violet-core hover:decoration-violet-core"
                >
                  {contact.email}
                </a>{" "}
                and{" "}
                <a
                  href={contact.phoneHref}
                  className="numeric font-medium text-ink underline decoration-cloud-gray underline-offset-4 transition-colors hover:text-violet-core hover:decoration-violet-core"
                >
                  {contact.phone}
                </a>
                .
              </p>
            </div>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
