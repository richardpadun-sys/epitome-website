import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

export type ProcessStep = {
  title: string;
  /** Duration, phase name, or step number — whatever the source states. */
  duration?: string;
  description: string;
};

/**
 * A step rail rather than a numbered list: a single hairline runs the length
 * of the sequence with a node on each step, so the process reads as one
 * continuous engagement instead of four unrelated cards. The rail is
 * horizontal on desktop and vertical below `lg`.
 */
export function ProcessSteps({ steps }: { steps: readonly ProcessStep[] }) {
  return (
    <Container className="mt-48">
      {/* Desktop rail ---------------------------------------------------- */}
      <ol className="relative hidden lg:grid lg:grid-cols-4 lg:gap-32">
        <span
          aria-hidden="true"
          className="absolute top-6 right-0 left-0 h-1 bg-cloud-gray"
        />
        {steps.map((step, i) => (
          <Reveal as="li" key={step.title} delay={i * 70} className="relative">
            <span
              aria-hidden="true"
              className="absolute top-0 left-0 block h-12 w-12 rounded-full bg-paper-white ring-1 ring-cloud-gray"
            >
              <span className="absolute inset-3 rounded-full bg-violet-core" />
            </span>
            <div className="pt-32">
              <span className="type-label numeric text-ink-subtle">
                {String(i + 1).padStart(2, "0")}
                {step.duration ? ` · ${step.duration}` : ""}
              </span>
              <h3 className="type-subheading mt-12 font-semibold">{step.title}</h3>
              <p className="type-caption mt-8 text-ink-muted">{step.description}</p>
            </div>
          </Reveal>
        ))}
      </ol>

      {/* Stacked rail ---------------------------------------------------- */}
      <ol className="relative lg:hidden">
        <span
          aria-hidden="true"
          className="absolute top-10 bottom-10 left-6 w-1 bg-cloud-gray"
        />
        {steps.map((step, i) => (
          <Reveal as="li" key={step.title} delay={i * 60} className="relative pb-32 pl-28 last:pb-0">
            <span
              aria-hidden="true"
              className="absolute top-4 left-0 block h-12 w-12 rounded-full bg-paper-white ring-1 ring-cloud-gray"
            >
              <span className="absolute inset-3 rounded-full bg-violet-core" />
            </span>
            <span className="type-label numeric text-ink-subtle">
              {String(i + 1).padStart(2, "0")}
              {step.duration ? ` · ${step.duration}` : ""}
            </span>
            <h3 className="type-subheading mt-8 font-semibold">{step.title}</h3>
            <p className="type-caption mt-6 text-ink-muted">{step.description}</p>
          </Reveal>
        ))}
      </ol>
    </Container>
  );
}
