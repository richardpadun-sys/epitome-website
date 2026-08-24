import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

export type Deliverable = { title: string; description: string };

/**
 * The "what you get" grid used across service pages. Numbered so a nine-item
 * list still reads as a defined scope rather than an open-ended feature dump.
 */
export function DeliverablesGrid({ items }: { items: readonly Deliverable[] }) {
  return (
    <Container className="mt-48">
      <div className="grid gap-x-32 gap-y-0 border-t border-mist-gray sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item, i) => (
          <Reveal key={item.title} delay={(i % 3) * 60}>
            <div className="border-b border-mist-gray py-24">
              <span className="type-label numeric text-ink-subtle">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="type-subheading mt-12 font-semibold">{item.title}</h3>
              <p className="type-caption mt-8 text-ink-muted">{item.description}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </Container>
  );
}
