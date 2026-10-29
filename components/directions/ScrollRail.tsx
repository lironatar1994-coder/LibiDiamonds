"use client";

import { useRef, type ReactNode } from "react";

/**
 * Horizontal snap rail with prev/next arrows (desktop) — the carousel pattern
 * the reference stores use. RTL-aware: "next" moves toward the inline end.
 */
export function ScrollRail({
  children,
  className = "",
  listClassName = "",
  arrowClassName = "",
  label,
}: {
  children: ReactNode;
  className?: string;
  listClassName?: string;
  arrowClassName?: string;
  label: string;
}) {
  const ref = useRef<HTMLUListElement>(null);

  const move = (dir: 1 | -1) => {
    const el = ref.current;
    if (!el) return;
    const rtl = getComputedStyle(el).direction === "rtl";
    const step = el.clientWidth * 0.8 * dir;
    el.scrollBy({ left: rtl ? -step : step, behavior: "smooth" });
  };

  return (
    <div className={`relative ${className}`}>
      <ul
        ref={ref}
        aria-label={label}
        className={`grid snap-x snap-mandatory grid-flow-col overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden ${listClassName}`}
      >
        {children}
      </ul>
      <button
        type="button"
        onClick={() => move(-1)}
        aria-label="הקודם"
        className={`absolute top-1/2 start-0 hidden -translate-y-1/2 lg:flex ${arrowClassName}`}
      >
        <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
          <path d="m9 6 6 6-6 6" />
        </svg>
      </button>
      <button
        type="button"
        onClick={() => move(1)}
        aria-label="הבא"
        className={`absolute top-1/2 end-0 hidden -translate-y-1/2 lg:flex ${arrowClassName}`}
      >
        <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
          <path d="m15 6-6 6 6 6" />
        </svg>
      </button>
    </div>
  );
}
