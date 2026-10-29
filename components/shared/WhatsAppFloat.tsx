"use client";

import { useEffect, useState } from "react";
import { generalWhatsApp } from "@/lib/contact";
import { WhatsAppIcon } from "@/components/ui/Icons";

/**
 * Floating WhatsApp button — the channel most Israeli buyers reach for first.
 * Appears once the visitor scrolls past the first screen; on wide screens it
 * carries a label so its purpose never has to be guessed.
 */
export function WhatsAppFloat() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 480);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <a
      href={generalWhatsApp}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="שליחת הודעה בוואטסאפ"
      className={`fixed bottom-5 z-40 flex h-14 items-center gap-2 rounded-full bg-whatsapp ps-4 pe-4 text-white shadow-lift transition-[opacity,transform,background-color] duration-300 hover:bg-whatsapp-hover md:pe-5 ${
        visible
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-3 opacity-0"
      }`}
      style={{ insetInlineEnd: "1.25rem" }}
    >
      <WhatsAppIcon className="h-6 w-6" />
      <span className="hidden text-[0.9375rem] font-semibold md:inline">
        שאלה? כתבו לנו
      </span>
    </a>
  );
}
