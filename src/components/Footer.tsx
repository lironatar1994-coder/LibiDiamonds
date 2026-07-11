import Link from "next/link";
import { site, waLink, defaultWaMessage } from "@/lib/site";
import { WhatsAppIcon, InstagramIcon } from "@/components/icons";
import BrandLogo from "@/components/BrandLogo";

export default function Footer() {
  return (
    <footer className="footer-warm border-t border-line">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-10 lg:px-8 lg:py-14">
        <div className="mx-auto flex max-w-xl flex-col items-center text-center">
          <BrandLogo size="footer" className="footer-logo-centered mx-auto" />
          <p className="mx-auto mt-4 hidden max-w-[18rem] text-sm leading-relaxed text-stone sm:block">
            יהלומי מעבדה בזהב 14K/18K. בחירה אישית, תעודה ואחריות.
          </p>
          <div className="mt-4 flex justify-center gap-4 sm:mt-5">
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

        <div className="mt-7 grid grid-cols-2 gap-x-6 gap-y-7 border-t border-line pt-7 sm:mt-10 sm:grid-cols-3 sm:gap-8 sm:pt-8 lg:mx-auto lg:max-w-4xl lg:gap-12">
          <div>
            <h3 className="text-sm font-semibold tracking-wider">הקולקציה</h3>
            <ul className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2.5 text-sm text-stone sm:block sm:space-y-2.5">
              <li><Link className="hover:text-gold" href="/jewelry/rings">טבעות</Link></li>
              <li><Link className="hover:text-gold" href="/jewelry/earrings">עגילים</Link></li>
              <li><Link className="hover:text-gold" href="/jewelry/necklaces">שרשראות</Link></li>
              <li><Link className="hover:text-gold" href="/jewelry/bracelets">צמידים</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold tracking-wider">מידע</h3>
            <ul className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2.5 text-sm text-stone sm:block sm:space-y-2.5">
              <li><Link className="hover:text-gold" href="/about">הסיפור שלנו</Link></li>
              <li><Link className="hover:text-gold" href="/service">משלוחים, אחריות והחזרות</Link></li>
              <li><Link className="hover:text-gold" href="/contact">צור קשר</Link></li>
            </ul>
          </div>

          <div className="col-span-2 border-t border-line pt-6 sm:col-span-1 sm:border-0 sm:pt-0">
            <h3 className="text-sm font-semibold tracking-wider">ייעוץ אישי</h3>
            <ul className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2.5 text-sm text-ink-soft sm:block sm:space-y-2.5">
              <li>
                <a className="hover:text-gold" href={waLink(defaultWaMessage)} target="_blank" rel="noopener noreferrer">
                  וואטסאפ: {site.phoneDisplay}
                </a>
              </li>
              <li>
                <a className="hover:text-gold" href={`mailto:${site.email}`}>{site.email}</a>
              </li>
              <li className="col-span-2 pt-1 text-xs leading-relaxed">
                א׳–ה׳ 9:00–19:00 · ו׳ 9:00–13:00
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-7 border-t border-line pt-5 text-center text-xs text-stone sm:mt-10 sm:pt-6">
          <p>© {new Date().getFullYear()} {site.name} · כל הזכויות שמורות</p>
        </div>
      </div>
    </footer>
  );
}
