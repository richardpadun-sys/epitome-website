"use client";

import { useId, useState } from "react";

export type AccordionItem = {
  question: string;
  answer: string;
};

/**
 * Native-feeling disclosure list. Built on buttons + aria-controls rather than
 * <details> so the open/close height can be animated consistently, and so a
 * single item can be opened at a time without JS-driven scroll jumps.
 */
export function Accordion({
  items,
  /** Heading level for each question, so the list slots into the page's
      existing hierarchy rather than always sitting at h3. */
  headingLevel: Heading = "h3",
}: {
  items: readonly AccordionItem[];
  headingLevel?: "h2" | "h3";
}) {
  const [open, setOpen] = useState<number | null>(0);
  const baseId = useId();

  return (
    <div className="border-t border-mist-gray">
      {items.map((item, i) => {
        const isOpen = open === i;
        const panelId = `${baseId}-panel-${i}`;
        const buttonId = `${baseId}-button-${i}`;
        return (
          <div key={item.question} className="border-b border-mist-gray">
            <Heading>
              <button
                id={buttonId}
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpen(isOpen ? null : i)}
                className="group flex w-full items-start justify-between gap-24 py-24 text-left transition-colors hover:text-violet-core"
              >
                <span className="type-subheading font-medium">{item.question}</span>
                <span
                  aria-hidden="true"
                  className="relative mt-4 flex h-20 w-20 shrink-0 items-center justify-center"
                >
                  <span className="absolute h-1 w-12 rounded-full bg-current transition-opacity duration-200" />
                  <span
                    className={`absolute h-1 w-12 rounded-full bg-current transition-transform duration-300 ${
                      isOpen ? "rotate-0" : "rotate-90"
                    }`}
                  />
                </span>
              </button>
            </Heading>
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              hidden={!isOpen}
              className="pb-24"
            >
              <p className="type-body max-w-[720px] text-ink-muted">{item.answer}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
