import Link from "next/link";
import { site, waLink, defaultWaMessage } from "@/lib/site";
import { WhatsAppIcon, InstagramIcon } from "@/components/icons";
import BrandLogo from "@/components/BrandLogo";

const collectionLinks = [
  { href: "/jewelry/rings", label: "טבעות" },
  { href: "/jewelry/earrings", label: "עגילים" },
  { href: "/jewelry/necklaces", label: "שרשראות" },
  { href: "/jewelry/bracelets", label: "צמידים" },
];

const informationLinks = [
  { href: "/about", label: "הסיפור שלנו" },
  { href: "/service", label: "משלוחים, אחריות והחזרות" },
  { href: "/contact", label: "צור קשר" },
];

export default function Footer() {
  return (
    <footer className="footer-warm border-t border-line">
      <div className="mx-auto max-w-7xl px-4 pb-7 pt-7 sm:px-6 sm:py-10 lg:px-8 lg:py-14">
        <div className="mx-auto flex max-w-xl flex-col items-center text-center">
          <BrandLogo size="footer" className="footer-logo-centered mx-auto" />
          <p className="mx-auto mt-4 hidden max-w-[18rem] text-sm leading-relaxed text-stone sm:block">
            יהלומי מעבדה בזהב 14K/18K. בחירה אישית, תעודה ואחריות.
          </p>
          <div className="mt-3 flex justify-center gap-5 sm:mt-5">
            <a
              href={site.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="אינסטגרם"
              className="text-stone transition-colors hover:text-gold"
            >
              <InstagramIcon className="h-5 w-5" />
            </a>
            <a
              href={waLink(defaultWaMessage)}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="וואטסאפ"
              className="text-stone transition-colors hover:text-gold"
            >
              <WhatsAppIcon className="h-5 w-5" />
            </a>
          </div>
        </div>

        <div className="mt-6 grid grid-cols-2 gap-x-7 gap-y-7 border-t border-line pt-6 sm:mt-10 sm:grid-cols-3 sm:gap-8 sm:pt-8 lg:mx-auto lg:max-w-4xl lg:gap-12">
          <nav aria-label="הקולקציה">
            <h3 className="text-sm font-semibold tracking-wider">הקולקציה</h3>
            <ul className="mt-4 space-y-2.5 text-sm text-stone">
              {collectionLinks.map((link) => (
                <li key={link.href}>
                  <Link className="hover:text-gold" href={link.href}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="מידע">
            <h3 className="text-sm font-semibold tracking-wider">מידע</h3>
            <ul className="mt-4 space-y-2.5 text-sm text-stone">
              {informationLinks.map((link) => (
                <li key={link.href}>
                  <Link className="hover:text-gold" href={link.href}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <section className="col-span-2 border-t border-line pt-6 sm:col-span-1 sm:border-0 sm:pt-0" aria-labelledby="footer-consultation">
            <h3 id="footer-consultation" className="text-sm font-semibold tracking-wider">
              ייעוץ אישי
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-ink-soft">
              <li>
                <a className="inline-flex items-center gap-2 hover:text-gold" href={waLink(defaultWaMessage)} target="_blank" rel="noopener noreferrer">
                  <WhatsAppIcon className="h-4 w-4" />
                  <span>וואטסאפ: {site.phoneDisplay}</span>
                </a>
              </li>
              <li>
                <a className="hover:text-gold" href={`mailto:${site.email}`}>
                  {site.email}
                </a>
              </li>
              <li className="pt-0.5 text-xs leading-relaxed text-stone">א׳–ה׳ 9:00–19:00 · ו׳ 9:00–13:00</li>
            </ul>
          </section>
        </div>

        <div className="mt-7 border-t border-line pt-5 text-center text-xs text-stone sm:mt-10 sm:pt-6">
          <p>© {new Date().getFullYear()} {site.name} · כל הזכויות שמורות</p>
        </div>
      </div>
    </footer>
  );
}
