"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { site, waLink, defaultWaMessage } from "@/lib/site";
import { WhatsAppIcon, InstagramIcon } from "@/components/icons";
import BrandLogo from "@/components/BrandLogo";

const collectionNav = [
  { href: "/jewelry/rings", label: "טבעות" },
  { href: "/jewelry/earrings", label: "עגילים" },
  { href: "/jewelry/necklaces", label: "שרשראות" },
  { href: "/jewelry/bracelets", label: "צמידים" },
];

const brandNav = [
  { href: "/journal", label: "מדריכים" },
  { href: "/about", label: "אודות" },
  { href: "/contact", label: "צור קשר" },
];

const navItems = [...collectionNav, ...brandNav];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  // a link is "current" for its own page and for anything nested beneath it
  const isCurrent = (href: string) =>
    pathname === href || pathname.startsWith(`${href}/`);

  // lock page scroll while the full-screen menu is open, and let Escape close it
  useEffect(() => {
    if (!open) return;

    document.body.style.overflow = "hidden";
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  // the header lifts off the page once it stops sitting on the hero
  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 8);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  const close = () => {
    setOpen(false);
    // send focus back to the control that opened the menu
    menuButtonRef.current?.focus();
  };

  return (
    <>
      {/* single-row maison header */}
      <header
        data-scrolled={scrolled}
        className="site-header sticky top-0 z-50 border-b border-line bg-white/90 backdrop-blur-sm"
      >
        <div className="mx-auto grid h-[60px] max-w-7xl grid-cols-[1fr_auto_1fr] items-center px-4 sm:h-auto sm:px-6 sm:py-3 lg:px-8 lg:py-4">
          {/* start (right in RTL): collections nav / mobile burger */}
          <div className="flex items-center justify-start">
            <button
              ref={menuButtonRef}
              type="button"
              onClick={() => setOpen(true)}
              className="-ms-2 flex h-11 w-11 items-center justify-center transition-colors hover:text-gold-deep lg:hidden"
              aria-label="פתיחת תפריט"
              aria-expanded={open}
            >
              <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M3 6h16M3 11h16M3 16h16" />
              </svg>
            </button>
            <nav className="hidden lg:block" aria-label="קולקציה">
              <ul className="flex items-center gap-8">
                {collectionNav.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="nav-link"
                      aria-current={isCurrent(item.href) ? "page" : undefined}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <BrandLogo />

          {/* end (left in RTL): brand nav + whatsapp */}
          <div className="flex items-center justify-end gap-8">
            <nav className="hidden lg:block" aria-label="מותג">
              <ul className="flex items-center gap-8">
                {brandNav.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="nav-link"
                      aria-current={isCurrent(item.href) ? "page" : undefined}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            <a
              href={waLink(defaultWaMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="-me-2 flex h-11 w-11 items-center justify-center text-ink transition-colors hover:text-gold-deep"
              aria-label={`בדיקת זמינות ומחיר בוואטסאפ עם ${site.name}`}
              title="בדיקת זמינות ומחיר בוואטסאפ"
            >
              <WhatsAppIcon className="h-5 w-5" />
            </a>
          </div>
        </div>
      </header>

      {/* full-screen mobile menu */}
      {open && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="ניווט ראשי"
          /* dvh rather than inset-0 so the bottom CTA stays clear of a
             collapsing mobile browser toolbar */
          className="fixed inset-x-0 top-0 z-[60] flex h-[100dvh] flex-col bg-white lg:hidden"
        >
          <div className="flex items-center justify-between border-b border-line px-4 py-3">
            <button
              type="button"
              onClick={close}
              autoFocus
              className="-ms-2 flex h-11 w-11 items-center justify-center transition-colors hover:text-gold-deep"
              aria-label="סגירת תפריט"
            >
              <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M4 4l14 14M18 4L4 18" />
              </svg>
            </button>
            <BrandLogo onClick={() => setOpen(false)} />
            <span className="h-11 w-11" aria-hidden />
          </div>

          <nav className="flex-1 overflow-y-auto px-6 py-8" aria-label="ניווט ראשי">
            <ul>
              {navItems.map((item, i) => (
                <li
                  key={item.href}
                  className="menu-item border-b border-line/60 last:border-0"
                  style={{ animationDelay: `${80 + i * 55}ms` }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    aria-current={isCurrent(item.href) ? "page" : undefined}
                    className="font-display flex items-center justify-between py-4 text-3xl font-medium text-ink transition-colors active:text-gold-deep"
                  >
                    {item.label}
                    {isCurrent(item.href) && (
                      <span className="h-1.5 w-1.5 rotate-45 bg-gold" aria-hidden />
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div
            className="menu-item border-t border-line px-6 pb-8 pt-6"
            style={{ animationDelay: `${80 + navItems.length * 55}ms` }}
          >
            <a
              href={waLink(defaultWaMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary w-full"
            >
              <WhatsAppIcon className="h-4 w-4" />
              בדיקת זמינות ומחיר בוואטסאפ
            </a>
            <div className="mt-5 flex items-center justify-between text-xs text-stone">
              <a
                href={site.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
                aria-label="אינסטגרם"
              >
                <InstagramIcon className="h-4 w-4" />
                libidiamonds@
              </a>
              <span>א׳–ה׳ 9:00–19:00 · ו׳ 9:00–13:00</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
