"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Logo } from "./Logo";
import { primaryNav, secondaryNav, site } from "@/data/site";
import { generalWhatsApp, telHref } from "@/lib/contact";
import { ArrowIcon, PhoneIcon, WhatsAppIcon } from "@/components/ui/Icons";

export function MobileMenu() {
  const [open, setOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  // Lock scroll, trap focus, close on Escape
  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        triggerRef.current?.focus();
        return;
      }

      if (event.key !== "Tab") return;

      const focusables = panelRef.current?.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled])',
      );
      if (!focusables || focusables.length === 0) return;

      const first = focusables[0];
      const last = focusables[focusables.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    const timer = window.setTimeout(() => {
      panelRef.current
        ?.querySelector<HTMLElement>("a[href], button:not([disabled])")
        ?.focus();
    }, 60);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
      window.clearTimeout(timer);
    };
  }, [open]);

  return (
    <>
      <button
        ref={triggerRef}
        type="button"
        onClick={() => setOpen(true)}
        aria-expanded={open}
        aria-controls="mobile-menu-panel"
        aria-label="פתיחת תפריט"
        className="-ms-2 flex h-11 w-11 items-center justify-center rounded-full text-navy transition-colors hover:bg-pearl"
      >
        <span className="flex flex-col gap-[5px]" aria-hidden="true">
          <span className="block h-0.5 w-6 rounded-full bg-current" />
          <span className="block h-0.5 w-6 rounded-full bg-current" />
          <span className="block h-0.5 w-4 rounded-full bg-current" />
        </span>
      </button>

      {/* Scrim */}
      <div
        onClick={() => setOpen(false)}
        aria-hidden="true"
        className={`fixed inset-0 z-[60] bg-navy/40 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      />

      {/* Panel — slides in from the inline-start edge (right in RTL) */}
      <div
        ref={panelRef}
        id="mobile-menu-panel"
        role="dialog"
        aria-modal="true"
        aria-label="תפריט ניווט"
        onClick={(event) => {
          if ((event.target as HTMLElement).closest("a")) setOpen(false);
        }}
        className={`fixed inset-y-0 start-0 z-[70] flex w-[min(22rem,90vw)] flex-col bg-white shadow-lift transition-transform duration-300 lg:hidden ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between border-b border-line px-5 py-3">
          <Logo size="sm" />
          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label="סגירת תפריט"
            className="flex h-11 w-11 items-center justify-center rounded-full text-navy hover:bg-pearl"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden="true">
              <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
            </svg>
          </button>
        </div>

        <nav aria-label="ניווט ראשי בנייד" className="flex-1 overflow-y-auto px-5 py-5">
          <p className="kicker">קולקציות</p>
          <ul className="mt-3">
            {primaryNav.map((item) => (
              <li key={item.href} className="border-b border-line">
                <Link
                  href={item.href}
                  className="flex items-center justify-between py-3.5 text-[1.0625rem] font-medium text-navy transition-colors hover:text-gold-deep"
                >
                  <span className="flex items-center gap-2">
                    {item.label}
                    {item.badge && (
                      <span className="rounded-full bg-blush px-2 py-0.5 text-[0.6875rem] font-semibold text-gold-deep">
                        {item.badge}
                      </span>
                    )}
                  </span>
                  <ArrowIcon className="h-4 w-4 text-gold" />
                </Link>
              </li>
            ))}
          </ul>

          <p className="kicker mt-8">מידע</p>
          <ul className="mt-3 space-y-1">
            {secondaryNav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="block py-2 text-[0.9375rem] text-body transition-colors hover:text-gold-deep"
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/contact/" className="block py-2 text-[0.9375rem] text-body transition-colors hover:text-gold-deep">
                יצירת קשר
              </Link>
            </li>
          </ul>
        </nav>

        <div className="space-y-2.5 border-t border-line bg-pearl px-5 py-5">
          <a
            href={generalWhatsApp}
            target="_blank"
            rel="noopener noreferrer"
            className="flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-whatsapp px-6 text-[0.9375rem] font-semibold text-white"
          >
            <WhatsAppIcon />
            ייעוץ מהיר בוואטסאפ
          </a>
          <a
            href={telHref}
            className="flex min-h-12 w-full items-center justify-center gap-2 rounded-full border border-navy/20 bg-white px-6 text-[0.9375rem] font-semibold text-navy"
          >
            <PhoneIcon className="h-[1.125rem] w-[1.125rem]" />
            <span className="num" dir="ltr">
              {site.phoneDisplay}
            </span>
          </a>
        </div>
      </div>
    </>
  );
}
