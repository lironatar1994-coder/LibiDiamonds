"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Logo } from "./Logo";
import { MobileMenu } from "./MobileMenu";
import { primaryNav, site } from "@/data/site";
import { generalWhatsApp, telHref } from "@/lib/contact";
import { PhoneIcon, WhatsAppIcon } from "@/components/ui/Icons";

/**
 * White sticky header: contact on the inline-start edge, centred wordmark,
 * consultation CTA on the inline-end edge, and the category nav underneath.
 * On phones it collapses to menu · logo · WhatsApp/phone.
 */
export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 border-b bg-white/95 backdrop-blur-md transition-shadow duration-300 ${
        scrolled ? "border-transparent shadow-soft" : "border-line"
      }`}
    >
      <div className="shell grid h-16 grid-cols-[1fr_auto_1fr] items-center gap-4 lg:h-20">
        {/* Inline-start: menu on phones, direct contact on desktop */}
        <div className="flex items-center gap-5">
          <div className="lg:hidden">
            <MobileMenu />
          </div>
          <a
            href={telHref}
            className="hidden items-center gap-2 text-[0.875rem] font-medium text-navy transition-colors hover:text-gold-deep lg:inline-flex"
          >
            <PhoneIcon className="h-[1.125rem] w-[1.125rem] text-gold-deep" />
            <span className="num" dir="ltr">
              {site.phoneDisplay}
            </span>
          </a>
          <a
            href={generalWhatsApp}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-2 text-[0.875rem] font-medium text-navy transition-colors hover:text-whatsapp lg:inline-flex"
          >
            <WhatsAppIcon className="h-[1.125rem] w-[1.125rem] text-whatsapp" />
            וואטסאפ
          </a>
        </div>

        <Logo size="md" />

        {/* Inline-end: consultation on desktop, quick contact on phones */}
        <div className="flex items-center justify-end gap-2 lg:gap-6">
          <Link
            href="/guide/"
            className="hidden text-[0.875rem] font-medium text-navy transition-colors hover:text-gold-deep xl:inline"
          >
            מדריך היהלומים
          </Link>
          <Link
            href="/contact/"
            className="hidden min-h-11 items-center rounded-full bg-navy px-5 text-[0.875rem] font-semibold text-white transition-colors hover:bg-navy-soft lg:inline-flex"
          >
            קביעת פגישת ייעוץ
          </Link>

          <a
            href={telHref}
            aria-label={`התקשרו אלינו: ${site.phoneDisplay}`}
            className="flex h-11 w-11 items-center justify-center rounded-full text-navy transition-colors hover:bg-pearl lg:hidden"
          >
            <PhoneIcon />
          </a>
          <a
            href={generalWhatsApp}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="שליחת הודעה בוואטסאפ"
            className="-me-1.5 flex h-11 w-11 items-center justify-center rounded-full text-whatsapp transition-colors hover:bg-pearl lg:hidden"
          >
            <WhatsAppIcon className="h-6 w-6" />
          </a>
        </div>
      </div>

      {/* Category nav — desktop */}
      <nav aria-label="ניווט ראשי" className="hidden border-t border-line lg:block">
        <ul className="shell flex h-12 items-center justify-center gap-6 xl:gap-9">
          {primaryNav.map((item) => {
            const active = pathname.startsWith(item.href);
            return (
              <li key={item.href} className="h-full">
                <Link
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={`relative flex h-full items-center text-[0.9375rem] font-medium transition-colors hover:text-gold-deep after:absolute after:inset-x-0 after:bottom-0 after:h-0.5 after:bg-gold after:transition-transform after:duration-300 ${
                    active
                      ? "text-gold-deep after:scale-x-100"
                      : "text-navy after:scale-x-0 hover:after:scale-x-100"
                  }`}
                >
                  {item.label}
                  {item.badge && (
                    <span className="ms-1.5 rounded-full bg-blush px-2 py-0.5 text-[0.6875rem] font-semibold text-gold-deep">
                      {item.badge}
                    </span>
                  )}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
