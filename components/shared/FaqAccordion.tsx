"use client";

import { useId, useState } from "react";
import type { Faq } from "@/data/faqs";

export function FaqAccordion({
  items,
  onDark = false,
  defaultOpen,
}: {
  items: Faq[];
  onDark?: boolean;
  /** Index to open on load; omit to start fully collapsed */
  defaultOpen?: number;
}) {
  const [open, setOpen] = useState<number | null>(defaultOpen ?? null);
  const baseId = useId();

  return (
    <ul className={onDark ? "border-t border-line-dark" : "divide-y divide-line overflow-hidden rounded-card border border-line bg-white"}>
      {items.map((item, index) => {
        const isOpen = open === index;
        const panelId = `${baseId}-panel-${index}`;
        const buttonId = `${baseId}-button-${index}`;

        return (
          <li
            key={item.question}
            className={onDark ? "hair-b-dark" : ""}
          >
            <h3>
              <button
                type="button"
                id={buttonId}
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpen(isOpen ? null : index)}
                className={`flex w-full items-start justify-between gap-6 px-5 py-5 text-start transition-colors duration-200 lg:px-6 ${
                  onDark
                    ? "text-on-dark hover:text-champagne"
                    : "text-navy hover:text-gold-deep"
                }`}
              >
                <span className="text-[1rem] font-semibold leading-snug lg:text-[1.0625rem]">
                  {item.question}
                </span>

                <span
                  aria-hidden="true"
                  className={`relative mt-1.5 h-3 w-3 shrink-0 ${
                    onDark ? "text-gold-light" : "text-gold-deep"
                  }`}
                >
                  <span className="absolute top-1/2 block h-0.5 w-3 -translate-y-1/2 bg-current" />
                  <span
                    className={`absolute start-1/2 block h-3 w-0.5 -translate-x-1/2 bg-current transition-transform duration-500 rtl:translate-x-1/2 ${
                      isOpen ? "scale-y-0" : "scale-y-100"
                    }`}
                  />
                </span>
              </button>
            </h3>

            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              hidden={!isOpen}
              className="px-5 pb-6 lg:px-6"
            >
              <p
                className={`max-w-2xl text-[0.9375rem] leading-relaxed ${
                  onDark ? "text-on-dark-muted" : "text-body"
                }`}
              >
                {item.answer}
              </p>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
