"use client";

import { useState } from "react";
import Link from "next/link";
import type { StaticImageData } from "next/image";
import { Photo } from "./Photo";

export type CenterItem = { slug: string; name: string; price: string; photo: StaticImageData };

/**
 * X Lab-style product carousel: five pieces floating on white, the centre one
 * enlarged, its name and price beneath a thin gold rule, gold arrows either side.
 */
export function CenterCarousel({ items, gold, ink }: { items: CenterItem[]; gold: string; ink: string }) {
  const [active, setActive] = useState(0);
  const n = items.length;
  const at = (offset: number) => items[(active + offset + n * 10) % n];
  const current = items[active];

  return (
    <div>
      <div className="relative flex h-[15rem] items-center justify-center overflow-hidden lg:h-[20rem]" aria-live="polite">
        {[-2, -1, 0, 1, 2].map((offset) => {
          const item = at(offset);
          const size = offset === 0 ? "w-[58%] lg:w-[24%]" : Math.abs(offset) === 1 ? "w-[34%] lg:w-[15%]" : "hidden lg:block lg:w-[11%]";
          // RTL: positive offsets sit toward the inline end (left)
          const shift = offset === 0 ? "" : "opacity-90";
          return (
            <Link
              key={`${item.slug}-${offset}`}
              href={`/jewelry/${item.slug}/`}
              tabIndex={offset === 0 ? 0 : -1}
              aria-hidden={offset !== 0}
              className={`mx-[1%] shrink-0 transition-all duration-500 ${size} ${shift}`}
              style={{ order: offset + 2 }}
            >
              <Photo src={item.photo} alt={offset === 0 ? item.name : ""} sizes="(min-width: 1024px) 24vw, 58vw" className="aspect-square w-full" fit="contain" />
            </Link>
          );
        })}
      </div>

      <div className="mx-auto mt-6 flex max-w-md items-center justify-between gap-4 px-4">
        <button type="button" onClick={() => setActive((active - 1 + n) % n)} aria-label="הקודם" style={{ color: gold }} className="p-2">
          <svg viewBox="0 0 48 16" className="h-4 w-12" fill="none" stroke="currentColor" strokeWidth="1.2" aria-hidden="true"><path d="M0 8h46M40 2l6 6-6 6" /></svg>
        </button>
        <div className="text-center">
          <span className="mx-auto mb-3 block h-px w-24" style={{ backgroundColor: gold }} />
          <p className="text-[1rem]" style={{ color: ink }}>{current.name}</p>
          <p className="mt-1 text-[1rem] [unicode-bidi:plaintext]" style={{ color: ink }}>{current.price}</p>
        </div>
        <button type="button" onClick={() => setActive((active + 1) % n)} aria-label="הבא" style={{ color: gold }} className="p-2">
          <svg viewBox="0 0 48 16" className="h-4 w-12" fill="none" stroke="currentColor" strokeWidth="1.2" aria-hidden="true"><path d="M48 8H2M8 2 2 8l6 6" /></svg>
        </button>
      </div>
    </div>
  );
}
