import Link from "next/link";
import type { Metadata } from "next";
import type { StaticImageData } from "next/image";
import { Cinzel, Rubik } from "next/font/google";
import { Photo } from "@/components/directions/Photo";
import { CenterCarousel } from "@/components/directions/CenterCarousel";
import { pick, productPhoto } from "@/components/directions/media";
import { stock } from "@/lib/stock";
import { testimonials } from "@/data/testimonials";
import { site } from "@/data/site";
import { formatPrice } from "@/lib/format";
import { generalWhatsApp, telHref } from "@/lib/contact";
import {
  CardIcon,
  CertificateIcon,
  FacebookIcon,
  InfinityIcon,
  InstagramIcon,
  PhoneIcon,
  StarIcon,
  TruckIcon,
  WhatsAppIcon,
} from "@/components/ui/Icons";

/*
 * DIRECTION C — modelled on xlabdiamonds.co.il (measured 2026-10-15):
 * white page, Rubik light (300) headings at 32px in warm grey #4E4B4B, gold
 * #BD8D44 logo/rules/arrows, deep green #154733 for actions and the closing
 * bar, a #F5F5F5 service band with hairline-divided icons, full-bleed hero
 * with the header laid over it.
 */

const rubik = Rubik({ subsets: ["hebrew", "latin"], weight: ["300", "400", "500"], variable: "--xl-sans" });
const cinzel = Cinzel({ subsets: ["latin"], weight: ["400", "500"], variable: "--xl-logo" });

export const metadata: Metadata = { title: "כיוון ג׳", robots: { index: false, follow: false } };

const GOLD = "#bd8d44";
const GREEN = "#154733";
const INK = "#4e4b4b";
const ink = "text-[#4e4b4b]";

const nav = [
  { label: "טבעות אירוסין", href: "/collections/engagement-rings/" },
  { label: "טבעות נישואין", href: "/collections/wedding-bands/" },
  { label: "עגילים", href: "/collections/earrings/" },
  { label: "צמידים", href: "/collections/tennis-bracelets/" },
  { label: "שרשראות", href: "/collections/pendants/" },
  { label: "יהלומים", href: "/collections/natural-diamonds/" },
  { label: "אודות", href: "/about/" },
  { label: "צרו קשר", href: "/contact/" },
];

function Logo({ light = false, size = "md" }: { light?: boolean; size?: "md" | "lg" }) {
  return (
    <span className="inline-flex items-end leading-none" dir="ltr" style={{ color: GOLD }}>
      <span className={`font-[family-name:var(--xl-logo)] ${size === "lg" ? "text-[3.25rem]" : "text-[2.25rem] lg:text-[2.75rem]"}`} style={{ lineHeight: 0.8 }}>L</span>
      <span className={`font-[family-name:var(--xl-logo)] uppercase ${size === "lg" ? "text-[1rem]" : "text-[0.8125rem] lg:text-[1.0625rem]"}`} style={{ letterSpacing: "0.08em" }}>
        IBI Diamonds
      </span>
      {light && <span className="sr-only">ליבי דיאמונדס</span>}
    </span>
  );
}

function Title({ children }: { children: React.ReactNode }) {
  return <h2 className={`text-center text-[1.625rem] font-light ${ink} lg:text-[2rem]`}>{children}</h2>;
}

function OutlineButton({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link href={href} className="inline-flex min-h-11 min-w-[12.5rem] items-center justify-center border px-6 text-[1rem] font-light transition-colors hover:bg-[#154733] hover:text-white" style={{ borderColor: GREEN, color: GREEN }}>
      <span className="relative">{children}</span>
    </Link>
  );
}

function ImageTile({ href, photo, label }: { href: string; photo: StaticImageData; label: string }) {
  return (
    <Link href={href} className="group relative block overflow-hidden">
      <Photo src={photo} alt="" sizes="(min-width: 1024px) 25vw, 50vw" className="aspect-[3/4] w-full transition-transform duration-700 group-hover:scale-[1.04]" />
      <span className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_top,rgba(0,0,0,0.5),rgba(0,0,0,0)_45%)]" />
      <span className="absolute bottom-4 start-4 text-[1.375rem] font-light text-white lg:text-[1.75rem]">{label}</span>
    </Link>
  );
}

const services = [
  { icon: CertificateIcon, label: "תעודה גמולוגית לכל יהלום" },
  { icon: InfinityIcon, label: "אחריות לכל החיים" },
  { icon: CardIcon, label: "עד 12 תשלומים ללא ריבית" },
  { icon: TruckIcon, label: "משלוח מבוטח חינם" },
  { icon: CertificateIcon, label: "14 יום להחזרה" },
  { icon: InfinityIcon, label: "שינוי מידה ראשון חינם" },
];

export default function DirectionC() {
  const rings = pick(["solitaire-classic-natural", "halo-oval-lab", "three-stone-emerald-natural", "eternity-pave-lab", "classic-comfort-band"]).map((p) => ({
    slug: p.slug,
    name: p.name,
    price: p.priceFrom ? `החל מ־${formatPrice(p.priceFrom)}` : "מחיר בתיאום אישי",
    photo: productPhoto[p.slug],
  }));

  return (
    <div dir="rtl" data-direction="c" className={`overflow-x-clip ${rubik.variable} ${cinzel.variable} bg-white font-[family-name:var(--xl-sans)] text-[1rem] font-light ${ink}`}>
      {/* Hero with header overlaid */}
      <section className="relative h-[88svh] min-h-[34rem] overflow-hidden bg-[#1a1a1a] lg:h-[50rem]">
        <Photo src={stock.roseSolitaireLinen} alt="טבעת סוליטר בזהב ורוד עם יהלום על בד פשתן" priority sizes="100vw" position="50% 45%" className="absolute inset-0 h-full w-full" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.55)_0%,rgba(0,0,0,0.05)_30%,rgba(0,0,0,0.05)_60%,rgba(0,0,0,0.5)_100%)]" />

        <header className="absolute inset-x-0 top-0 z-30 text-white">
          <div className="mx-auto grid h-16 max-w-[90rem] grid-cols-[1fr_auto_1fr] items-center px-4 lg:h-20 lg:px-16">
            <div className="flex items-center gap-4 text-[0.9375rem] font-normal">
              <details className="group lg:hidden">
                <summary aria-label="תפריט" className="flex h-11 w-11 cursor-pointer list-none items-center [&::-webkit-details-marker]:hidden">
                  <span className="flex flex-col gap-[6px]" aria-hidden="true"><span className="block h-0.5 w-6 bg-white" /><span className="block h-0.5 w-6 bg-white" /><span className="block h-0.5 w-6 bg-white" /></span>
                </summary>
                <nav className="fixed inset-x-0 top-16 z-50 h-[calc(100svh-4rem)] overflow-y-auto bg-white px-5 pt-2 text-[#4e4b4b]">
                  <ul>{nav.map((n) => <li key={n.href} className="border-b border-[#eeeeee]"><Link href={n.href} className="block py-4 text-[1.0625rem] font-normal">{n.label}</Link></li>)}</ul>
                </nav>
              </details>
              <a href={telHref} className="hidden items-center gap-2 lg:inline-flex"><PhoneIcon className="h-4 w-4" /><span dir="ltr">{site.phoneDisplay}</span></a>
            </div>
            <Link href="/directions/c/" aria-label="ליבי דיאמונדס"><Logo /></Link>
            <div className="flex items-center justify-end gap-2">
              <a href={generalWhatsApp} target="_blank" rel="noopener noreferrer" aria-label="וואטסאפ" className="flex h-11 w-11 items-center justify-center"><WhatsAppIcon className="h-5 w-5" /></a>
              <a href={telHref} aria-label="טלפון" className="flex h-11 w-11 items-center justify-center lg:hidden"><PhoneIcon className="h-5 w-5" /></a>
            </div>
          </div>
          <nav aria-label="ניווט ראשי" className="hidden lg:block">
            <ul className="flex items-center justify-center gap-8 text-[1rem] font-normal">
              {nav.map((n) => <li key={n.href}><Link href={n.href} className="hover:text-[#e2c08a]">{n.label}</Link></li>)}
            </ul>
          </nav>
        </header>

        <div className="absolute inset-x-0 bottom-24 z-10 px-6 text-center text-white">
          <h1 className="text-[2rem] font-light leading-tight lg:text-[3.25rem]">טבעות אירוסין שנבנות סביב היהלום</h1>
          <p className="mx-auto mt-3 max-w-xl text-[1rem] text-white/90 lg:text-[1.125rem]">יהלום טבעי או מעבדה, בתעודת GIA או IGI — בליווי אישי</p>
        </div>
        <a href="#collection" aria-label="גללו לקולקציה" className="absolute bottom-6 start-1/2 z-10 flex -translate-x-1/2 flex-col items-center text-white rtl:translate-x-1/2">
          <span className="block h-8 w-px bg-white" />
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-black/40">
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true"><path d="M12 5v14M6 13l6 6 6-6" /></svg>
          </span>
        </a>
      </section>

      <main>
        {/* Engagement carousel */}
        <section id="collection" className="pt-10 lg:pt-12">
          <Title>קולקציית טבעות האירוסין שלנו</Title>
          <div className="mt-6">
            <CenterCarousel items={rings} gold={GOLD} ink={INK} />
          </div>
          <div className="mt-8 flex justify-center"><OutlineButton href="/collections/engagement-rings/">לכל טבעות האירוסין</OutlineButton></div>
        </section>

        {/* Reviews */}
        <section className="mx-auto max-w-[80rem] px-4 py-14 lg:px-12">
          <div className="grid gap-6 lg:grid-cols-[14rem_1fr] lg:items-center">
            <div className="text-center lg:text-start">
              <p className="text-[1.125rem] font-normal" style={{ color: GREEN }}>ליבי דיאמונדס</p>
              <div className="mt-1 flex justify-center gap-0.5 text-[#f5a623] lg:justify-start" aria-hidden="true">{Array.from({ length: 5 }, (_, i) => <StarIcon key={i} className="h-5 w-5" />)}</div>
              <p className="mt-1 text-[0.875rem]">המלצות הלקוחות שלנו</p>
            </div>
            <ul className="grid snap-x snap-mandatory auto-cols-[85%] grid-flow-col gap-4 overflow-x-auto pb-2 [scrollbar-width:none] sm:auto-cols-[45%] lg:auto-cols-[calc((100%-2rem)/3)] [&::-webkit-scrollbar]:hidden">
              {testimonials.map((t) => (
                <li key={t.name} className="snap-start">
                  <figure className="h-full rounded-lg bg-white p-5 shadow-[0_2px_12px_rgba(0,0,0,0.08)]">
                    <figcaption className="flex items-center gap-3">
                      <span aria-hidden="true" className="flex h-9 w-9 items-center justify-center rounded-full text-[0.875rem] text-white" style={{ backgroundColor: GOLD }}>{t.name.charAt(0)}</span>
                      <span className="text-[0.875rem] font-medium text-[#222]">{t.name}<span className="block text-[0.75rem] font-light text-[#777]">{t.city}</span></span>
                    </figcaption>
                    <div className="mt-3 flex gap-0.5 text-[#f5a623]" aria-hidden="true">{Array.from({ length: 5 }, (_, i) => <StarIcon key={i} className="h-4 w-4" />)}</div>
                    <blockquote className="mt-2 line-clamp-4 text-[0.875rem] leading-relaxed text-[#444]">{t.quote}</blockquote>
                  </figure>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Service band */}
        <section className="bg-[#f5f5f5]">
          <ul className="mx-auto grid max-w-[80rem] grid-cols-2 px-4 py-6 sm:grid-cols-3 lg:grid-cols-6 lg:px-12">
            {services.map(({ icon: Icon, label }, i) => (
              <li key={label} className={`flex flex-col items-center gap-2 px-3 py-4 text-center text-[0.875rem] ${i % 6 !== 5 ? "lg:border-e lg:border-[#dddddd]" : ""}`}>
                <Icon className="h-8 w-8 text-[#777777]" />
                {label}
              </li>
            ))}
          </ul>
        </section>

        {/* Promo banner */}
        <section className="mx-auto max-w-[90rem] px-4 pt-14 lg:px-12">
          <Link href="/collections/tennis-bracelets/" className="group grid overflow-hidden lg:grid-cols-2" style={{ backgroundColor: GREEN }}>
            <div className="flex flex-col justify-center px-6 py-10 text-white lg:px-14">
              <p className="font-[family-name:var(--xl-logo)] text-[1.75rem] text-[#e2c08a] lg:text-[2.75rem]" dir="ltr">Tennis Collection</p>
              <h2 className="mt-2 text-[1.75rem] font-light lg:text-[2.5rem]">צמידי טניס יהלומים</h2>
              <p className="mt-2 text-[1.125rem] font-light text-white/85 [unicode-bidi:plaintext]">החל מ־{formatPrice(8900)} · מ־1 עד 10 קראט</p>
              <span className="mt-6 inline-block w-fit border border-[#e2c08a] px-6 py-2.5 text-[0.9375rem] text-[#e2c08a]">לקולקציה</span>
            </div>
            <Photo src={stock.tennisBraceletOpen} alt="צמיד טניס יהלומים" sizes="(min-width: 1024px) 45vw, 100vw" className="aspect-[16/10] w-full lg:aspect-auto lg:min-h-[22rem]" />
          </Link>
        </section>

        {/* Two feature tiles */}
        <section className="mx-auto grid max-w-[90rem] gap-4 px-4 pt-4 lg:grid-cols-2 lg:px-12">
          {[
            { href: "/guide/", photo: stock.diamondTweezers, label: "מדריך היהלומים" },
            { href: "/contact/", photo: stock.goldDiamondRingsStack, label: "פגישת ייעוץ בווידאו" },
          ].map((t) => (
            <Link key={t.href} href={t.href} className="group relative block overflow-hidden">
              <Photo src={t.photo} alt="" sizes="(min-width: 1024px) 45vw, 100vw" className="aspect-[16/9] w-full transition-transform duration-700 group-hover:scale-[1.03]" />
              <span className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_top,rgba(0,0,0,0.55),rgba(0,0,0,0)_50%)]" />
              <span className="absolute inset-x-0 bottom-6 text-center text-[1.5rem] font-light text-white lg:text-[2rem]">{t.label}</span>
            </Link>
          ))}
        </section>

        {/* Category tiles */}
        <section className="mx-auto grid max-w-[90rem] grid-cols-2 gap-2 px-4 pt-4 lg:grid-cols-4 lg:gap-4 lg:px-12">
          <ImageTile href="/collections/pendants/" photo={stock.cushionPendant} label="שרשראות יהלום" />
          <ImageTile href="/collections/tennis-bracelets/" photo={stock.tennisBraceletLine} label="צמידים" />
          <ImageTile href="/collections/engagement-rings/" photo={stock.ovalHaloRoseGold} label="טבעות יהלום" />
          <ImageTile href="/collections/earrings/" photo={stock.goldHoopsBaguette} label="עגילים" />
        </section>

        {/* Brand text */}
        <section className="mx-auto grid max-w-[80rem] items-center gap-10 px-4 py-16 lg:grid-cols-2 lg:px-12 lg:py-20">
          <Photo src={stock.looseDiamondsBlush} alt="יהלומים מלוטשים" sizes="(min-width: 1024px) 40vw, 100vw" className="aspect-[4/3] w-full" />
          <div className="text-center">
            <Logo size="lg" />
            <h2 className="mt-4 text-[1.5rem] font-light lg:text-[1.875rem]">ליבי דיאמונדס — יהלומים טבעיים ויהלומי מעבדה</h2>
            <p className="mx-auto mt-4 max-w-lg text-[0.9375rem] leading-[1.9] text-[#555555]">
              אנחנו עובדים ישירות מול מלטשות ומול הבורסה, בלי חלון ראווה ובלי מלאי שצריך למכור. כל יהלום מגיע בתעודת GIA או IGI, וכל תכשיט נבנה סביב האבן שבחרתם — עם אחריות לכל החיים.
            </p>
          </div>
        </section>

        {/* Club-style contact */}
        <section className="border-t border-[#eeeeee]">
          <div className="mx-auto grid max-w-[80rem] items-center gap-8 px-4 py-14 lg:grid-cols-2 lg:px-12">
            <div className="flex items-start gap-4">
              <span className="font-[family-name:var(--xl-logo)] text-[3.5rem] leading-none" style={{ color: GOLD }} aria-hidden="true">L</span>
              <div>
                <h2 className="text-[1.5rem] font-light lg:text-[1.75rem]">מחפשים יהלום? דברו איתנו</h2>
                <p className="mt-2 text-[0.9375rem] text-[#555555]">השאירו מספר בוואטסאפ ונחזור אליכם עם 2–3 אפשרויות אבן באותו תקציב.</p>
              </div>
            </div>
            <div className="flex">
              <a href={telHref} className="flex min-h-12 flex-1 items-center border border-[#cccccc] px-4 text-[0.9375rem] text-[#777777]" dir="ltr">{site.phoneDisplay}</a>
              <a href={generalWhatsApp} target="_blank" rel="noopener noreferrer" className="flex min-h-12 items-center gap-2 px-6 text-[0.9375rem] font-normal text-white" style={{ backgroundColor: GREEN }}><WhatsAppIcon className="h-4 w-4" />וואטסאפ</a>
            </div>
          </div>
        </section>
      </main>

      <footer className="relative overflow-hidden border-t border-[#eeeeee]">
        <p aria-hidden="true" className="pointer-events-none absolute -top-2 start-1/2 -translate-x-1/2 whitespace-nowrap font-[family-name:var(--xl-logo)] text-[6rem] uppercase leading-none opacity-[0.07] rtl:translate-x-1/2 lg:text-[10rem]" style={{ color: GOLD }} dir="ltr">Libi Diamonds</p>
        <div className="relative mx-auto grid max-w-[80rem] gap-8 px-4 py-14 sm:grid-cols-2 lg:grid-cols-5 lg:px-12">
          <div className="text-center lg:text-start">
            <Logo size="lg" />
            <div className="mt-5 flex justify-center gap-3 text-[#333333] lg:justify-start">
              <a href={site.social.instagram} target="_blank" rel="noopener noreferrer" aria-label="אינסטגרם"><InstagramIcon /></a>
              <a href={site.social.facebook} target="_blank" rel="noopener noreferrer" aria-label="פייסבוק"><FacebookIcon /></a>
            </div>
          </div>
          {[
            { h: "ליבי דיאמונדס", items: [["אודות", "/about/"], ["מדריך היהלומים", "/guide/"], ["שאלות נפוצות", "/faq/"]] },
            { h: "תכשיטי יהלומים", items: [["טבעות אירוסין", "/collections/engagement-rings/"], ["עגילים", "/collections/earrings/"], ["צמידי טניס", "/collections/tennis-bracelets/"], ["שרשראות", "/collections/pendants/"]] },
            { h: "יהלומים", items: [["יהלומים טבעיים", "/collections/natural-diamonds/"], ["יהלומי מעבדה", "/collections/lab-diamonds/"]] },
            { h: "יצירת קשר", items: [["צרו קשר", "/contact/"], ["הצהרת נגישות", "/accessibility/"]] },
          ].map((col) => (
            <nav key={col.h} aria-label={col.h} className="border-t border-[#e5d3b3] pt-4">
              <p className="text-[0.9375rem] font-normal text-[#222222]">{col.h}</p>
              <ul className="mt-3 space-y-2 text-[0.875rem] text-[#666666]">{col.items.map(([l, h]) => <li key={l}><Link href={h} className="hover:text-[#bd8d44]">{l}</Link></li>)}</ul>
            </nav>
          ))}
        </div>
        <div className="py-4 text-center text-[0.8125rem] text-white" style={{ backgroundColor: GREEN }}>© 2026 {site.legalName} · תשלום מאובטח · עד 12 תשלומים</div>
      </footer>

      <a href={generalWhatsApp} target="_blank" rel="noopener noreferrer" aria-label="שליחת הודעה בוואטסאפ" className="fixed bottom-5 z-40 flex h-12 w-12 items-center justify-center rounded-full bg-[#25d366] text-white shadow-[0_6px_18px_-6px_rgba(0,0,0,0.4)]" style={{ insetInlineEnd: "1.25rem" }}>
        <WhatsAppIcon className="h-7 w-7" />
      </a>
    </div>
  );
}
