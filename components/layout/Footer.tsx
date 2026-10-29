import Link from "next/link";
import { Logo } from "./Logo";
import { categories } from "@/data/categories";
import { secondaryNav, site } from "@/data/site";
import { generalWhatsApp, mailHref, telHref } from "@/lib/contact";
import {
  CardIcon,
  CertificateIcon,
  FacebookIcon,
  InfinityIcon,
  InstagramIcon,
  PhoneIcon,
  TruckIcon,
  WhatsAppIcon,
} from "@/components/ui/Icons";

const currentYear = 2026;

const promises = [
  { icon: CertificateIcon, label: "תעודת GIA / IGI לכל יהלום" },
  { icon: TruckIcon, label: "משלוח מבוטח חינם" },
  { icon: InfinityIcon, label: "אחריות לכל החיים" },
  { icon: CardIcon, label: "עד 12 תשלומים ללא ריבית" },
];

const linkClass =
  "text-[0.9375rem] text-body transition-colors duration-200 hover:text-gold-deep";

export function Footer() {
  return (
    <footer className="mt-auto">
      {/* Pre-footer: the one action every page should end on */}
      <section aria-label="ייעוץ אישי" className="bg-blush">
        <div className="shell flex flex-col items-center gap-6 py-12 text-center lg:flex-row lg:justify-between lg:py-10 lg:text-start">
          <div>
            <h2 className="text-[1.625rem] lg:text-[2rem]">
              מחפשים את היהלום הנכון?
            </h2>
            <p className="mt-1.5 text-muted">
              ספרו לנו מה אתם מחפשים — ונחזור אליכם עם 2–3 אפשרויות אבן באותו
              תקציב, בלי התחייבות.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            <a
              href={generalWhatsApp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-12 items-center gap-2 rounded-full bg-whatsapp px-6 font-semibold text-white transition-colors hover:bg-whatsapp-hover"
            >
              <WhatsAppIcon />
              כתבו לנו בוואטסאפ
            </a>
            <a
              href={telHref}
              className="inline-flex min-h-12 items-center gap-2 rounded-full border border-navy/20 bg-white px-6 font-semibold text-navy transition-colors hover:border-navy"
            >
              <PhoneIcon className="h-[1.125rem] w-[1.125rem]" />
              <span className="num" dir="ltr">
                {site.phoneDisplay}
              </span>
            </a>
          </div>
        </div>
      </section>

      <div className="bg-pearl">
        {/* Promise strip */}
        <div className="border-b border-line">
          <ul className="shell grid grid-cols-2 gap-x-4 gap-y-5 py-7 lg:grid-cols-4">
            {promises.map(({ icon: Icon, label }) => (
              <li key={label} className="flex items-center gap-3 text-[0.875rem] font-medium text-navy">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-gold-deep">
                  <Icon className="h-5 w-5" />
                </span>
                {label}
              </li>
            ))}
          </ul>
        </div>

        <div className="shell grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-4">
            <Logo size="lg" />
            <p className="mt-5 max-w-xs text-[0.9375rem] leading-relaxed text-muted">
              יהלומים טבעיים ויהלומי מעבדה בתעודות GIA ו־IGI. בלי חלון ראווה
              ובלי תקורה מיותרת — עם ליווי אישי מהשיחה הראשונה ועד המסירה.
            </p>
            <div className="mt-6 flex gap-2">
              <a
                href={site.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="ליבי דיאמונדס באינסטגרם"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-navy transition-colors hover:bg-navy hover:text-white"
              >
                <InstagramIcon />
              </a>
              <a
                href={site.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="ליבי דיאמונדס בפייסבוק"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-navy transition-colors hover:bg-navy hover:text-white"
              >
                <FacebookIcon />
              </a>
            </div>
          </div>

          {/* Collections */}
          <nav aria-label="קולקציות" className="lg:col-span-3">
            <h2 className="font-(family-name:--font-body) text-[0.9375rem] font-bold text-navy">
              קולקציות
            </h2>
            <ul className="mt-4 space-y-2.5">
              {categories.map((category) => (
                <li key={category.slug}>
                  <Link href={`/collections/${category.slug}/`} className={linkClass}>
                    {category.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Info */}
          <nav aria-label="מידע" className="lg:col-span-2">
            <h2 className="font-(family-name:--font-body) text-[0.9375rem] font-bold text-navy">
              מידע
            </h2>
            <ul className="mt-4 space-y-2.5">
              {secondaryNav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className={linkClass}>
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/contact/" className={linkClass}>
                  יצירת קשר
                </Link>
              </li>
              <li>
                <Link href="/accessibility/" className={linkClass}>
                  הצהרת נגישות
                </Link>
              </li>
            </ul>
          </nav>

          {/* Contact */}
          <div className="lg:col-span-3">
            <h2 className="font-(family-name:--font-body) text-[0.9375rem] font-bold text-navy">
              דברו איתנו
            </h2>
            <ul className="mt-4 space-y-2.5">
              <li>
                <a href={telHref} className={linkClass}>
                  <span className="num" dir="ltr">
                    {site.phoneDisplay}
                  </span>
                </a>
              </li>
              <li>
                <a href={generalWhatsApp} target="_blank" rel="noopener noreferrer" className={linkClass}>
                  וואטסאפ
                </a>
              </li>
              <li>
                <a href={mailHref} className={linkClass} dir="ltr">
                  {site.email}
                </a>
              </li>
            </ul>

            <h3 className="mt-7 font-(family-name:--font-body) text-[0.9375rem] font-bold text-navy">
              שעות מענה
            </h3>
            <ul className="mt-3 space-y-1.5 text-[0.875rem] text-muted">
              {site.hours.map((entry) => (
                <li key={entry.days} className="flex max-w-xs justify-between gap-4">
                  <span>{entry.days}</span>
                  <span className="num" dir="ltr">
                    {entry.time}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-line">
          <div className="shell flex flex-col gap-2 py-6 text-[0.8125rem] text-muted sm:flex-row sm:items-center sm:justify-between">
            <p>
              © {currentYear} {site.legalName}. כל הזכויות שמורות.
            </p>
            <p>רכישה בליווי אישי · תשלום מאובטח · משלוח מבוטח</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
