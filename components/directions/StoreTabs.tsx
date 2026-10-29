"use client";

import { useId, useState } from "react";
import Link from "next/link";
import type { StaticImageData } from "next/image";
import { Photo } from "./Photo";

export type StoreItem = {
  slug: string;
  name: string;
  teaser: string;
  origin: string;
  certificate: string;
  price: string;
  monthly?: string;
  photo: StaticImageData;
};

/**
 * Bestseller tabs for direction C. Proper tablist semantics with roving
 * arrow-key focus; every panel is a plain product grid.
 */
export function StoreTabs({ tabs }: { tabs: { label: string; items: StoreItem[] }[] }) {
  const [active, setActive] = useState(0);
  const id = useId();

  const onKey = (event: React.KeyboardEvent<HTMLButtonElement>, index: number) => {
    // RTL: ArrowLeft moves forward through the tabs
    const delta = event.key === "ArrowLeft" ? 1 : event.key === "ArrowRight" ? -1 : 0;
    if (!delta) return;
    event.preventDefault();
    const next = (index + delta + tabs.length) % tabs.length;
    setActive(next);
    document.getElementById(`${id}-tab-${next}`)?.focus();
  };

  return (
    <div>
      <div role="tablist" aria-label="סינון לפי קטגוריה" className="flex gap-2 overflow-x-auto pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {tabs.map((tab, index) => {
          const selected = index === active;
          return (
            <button
              key={tab.label}
              id={`${id}-tab-${index}`}
              type="button"
              role="tab"
              aria-selected={selected}
              aria-controls={`${id}-panel-${index}`}
              tabIndex={selected ? 0 : -1}
              onClick={() => setActive(index)}
              onKeyDown={(event) => onKey(event, index)}
              className={`min-h-10 shrink-0 whitespace-nowrap rounded-full border px-4 text-[0.875rem] font-medium transition-colors ${
                selected
                  ? "border-[#0e1116] bg-[#0e1116] text-white"
                  : "border-[#d9dce1] bg-white text-[#0e1116] hover:border-[#0e1116]"
              }`}
            >
              {tab.label}
            </button>
          );
        })}
      </div>

      {tabs.map((tab, index) => (
        <div
          key={tab.label}
          id={`${id}-panel-${index}`}
          role="tabpanel"
          aria-labelledby={`${id}-tab-${index}`}
          hidden={index !== active}
          className="mt-6"
        >
          <ul className="grid grid-cols-2 gap-x-3 gap-y-8 md:grid-cols-3 lg:grid-cols-4 lg:gap-x-5">
            {tab.items.map((item) => (
              <li key={item.slug}>
                <Link href={`/jewelry/${item.slug}/`} className="group block">
                  <div className="relative overflow-hidden rounded-xl bg-[#f3f4f6]">
                    <Photo src={item.photo} alt={item.name} sizes="(min-width: 1024px) 24vw, 50vw" className="aspect-square w-full transition-transform duration-700 group-hover:scale-[1.04]" />
                    <span className="absolute top-2.5 start-2.5 rounded-md bg-white/95 px-2 py-0.5 text-[0.6875rem] font-medium text-[#0e1116]">
                      {item.origin}
                    </span>
                  </div>
                  <div className="mt-3 flex items-start justify-between gap-2">
                    <h3 className="text-[0.9375rem] font-medium leading-snug text-[#0e1116] lg:text-[1rem]">{item.name}</h3>
                    <span className="mt-0.5 shrink-0 text-[0.6875rem] font-bold tracking-wide text-[#8a6420]">{item.certificate}</span>
                  </div>
                  <p className="mt-0.5 line-clamp-1 text-[0.8125rem] text-[#5b6270]">{item.teaser}</p>
                  <p className="mt-2 text-[1.0625rem] font-extrabold text-[#0e1116] [unicode-bidi:plaintext]">{item.price}</p>
                  {item.monthly && (
                    <p className="text-[0.75rem] text-[#5b6270] [unicode-bidi:plaintext]">{item.monthly}</p>
                  )}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
