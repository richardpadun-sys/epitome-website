import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Section, SectionHeader } from "@/components/ui/Section";
import { testimonials } from "@/data/content";

export function Testimonials() {
  return (
    <Section divided>
      <SectionHeader
        eyebrow="Client success"
        title="What clients say"
        intro="Three UK businesses on what changed after working with us."
      />

      <Container className="mt-48">
        <div className="grid gap-16 md:grid-cols-3">
          {testimonials.map((item, i) => (
            <Reveal key={item.name} delay={i * 70}>
              <Card padding="roomy" className="flex h-full flex-col">
                <svg
                  aria-hidden="true"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  className="text-cloud-gray"
                >
                  <path
                    d="M8 4.5C5.2 5.8 3.5 8.3 3.5 11.4c0 2.6 1.5 4.1 3.5 4.1 1.8 0 3.1-1.3 3.1-3 0-1.7-1.2-2.9-2.8-2.9-.3 0-.6 0-.8.1.3-1.4 1.4-2.7 3-3.5L8 4.5ZM16.5 4.5c-2.8 1.3-4.5 3.8-4.5 6.9 0 2.6 1.5 4.1 3.5 4.1 1.8 0 3-1.3 3-3 0-1.7-1.1-2.9-2.7-2.9-.3 0-.6 0-.8.1.3-1.4 1.4-2.7 3-3.5l-1.5-1.7Z"
                    fill="currentColor"
                  />
                </svg>
                <blockquote className="mt-20 grow">
                  <p className="type-body text-ink">{item.quote}</p>
                </blockquote>
                <figcaption className="mt-24 border-t border-mist-gray pt-16">
                  <span className="type-caption block font-medium text-ink">
                    {item.name}
                  </span>
                  <span className="type-caption block text-ink-subtle">
                    {item.company}
                  </span>
                </figcaption>
              </Card>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}
