"use client";

import { useEffect, useState } from "react";
import { announcements } from "@/data/site";

/**
 * Navy promise bar above the header. Desktop shows three promises at once;
 * small screens rotate through all of them. Rotation pauses on hover/focus
 * and is skipped entirely under reduced motion.
 */
export function AnnouncementBar() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const timer = window.setInterval(
      () => setIndex((i) => (i + 1) % announcements.length),
      4200,
    );
    return () => window.clearInterval(timer);
  }, [paused]);

  return (
    <div
      className="bg-navy text-white"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="shell flex h-9 items-center justify-center text-[0.8125rem] font-medium">
        {/* Desktop: three static promises */}
        <ul className="hidden items-center gap-6 lg:flex">
          {announcements.slice(0, 3).map((text, i) => (
            <li key={text} className="flex items-center gap-6">
              {i > 0 && (
                <span aria-hidden="true" className="h-1 w-1 rotate-45 bg-gold-light" />
              )}
              {text}
            </li>
          ))}
        </ul>

        {/* Mobile: one at a time */}
        <p className="lg:hidden" aria-live="off">
          <span key={index} className="inline-block animate-[fade-up_0.5s_ease]">
            {announcements[index]}
          </span>
        </p>
      </div>
    </div>
  );
}
