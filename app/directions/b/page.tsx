import Link from "next/link";
import type { Metadata } from "next";
import type { StaticImageData } from "next/image";
import { Assistant, Jost, Tenor_Sans } from "next/font/google";
import { Photo } from "@/components/directions/Photo";
import { pick, productPhoto } from "@/components/directions/media";
import { stock } from "@/lib/stock";
import { originLabel, type Product } from "@/data/products";
import { site } from "@/data/site";
import { formatPrice } from "@/lib/format";
import { generalWhatsApp, telHref } from "@/lib/contact";
import { InstagramIcon, PhoneIcon, WhatsAppIcon } from "@/components/ui/Icons";

/*
 * DIRECTION B — modelled on shlomitofir.com (measured 2026-10-15):
 * page #F7F6F5, ink #4D4D4D, brown announcement bar #94604B, sand strip
 * #D4C5B3, Tenor Sans uppercase titles with ~0.08em tracking, Jost body,
 * square dark buttons #4D4D4D, edge-to-edge image tiles with white labels.
 */

const display = Tenor_Sans({ subsets: ["latin"], weight: "400", variable: "--so-display" });
const body = Jost({ subsets: ["latin"], weight: ["400", "500"], variable: "--so-body" });
const hebrew = Assistant({ subsets: ["hebrew"], weight: ["300", "400", "600"], variable: "--so-he" });

export const metadata: Metadata = { title: "כיוון ב׳", robots: { index: false, follow: false } };

const titleFont = "font-[family-name:var(--so-display),var(--so-he)]";
const bodyFont = "font-[family-name:var(--so-body),var(--so-he)]";
const ink = "text-[#4d4d4d]";
const soft = "text-[#4d4d4d]/70";

const nav = [
  { label: "טבעות אירוסין", href: "/collections/engagement-rings/" },
  { label: "עגילים", href: "/collections/earrings/" },
  { label: "שרשראות", href: "/collections/pendants/" },
  { label: "צמידים", href: "/collections/tennis-bracelets/" },
  { label: "טבעות נישואין", href: "/collections/wedding-bands/" },
  { label: "יהלומים טבעיים", href: "/collections/natural-diamonds/" },
  { label: "יהלומי מעבדה", href: "/collections/lab-diamonds/" },
  { label: "מדריך", href: "/guide/" },
];

function DarkButton({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link href={href} className={`inline-flex min-h-11 items-center justify-center bg-[#4d4d4d] px-8 ${titleFont} text-[0.8125rem] tracking-[0.12em] text-white transition-colors hover:bg-[#333333]`}>
      {children}
    </Link>
  );
}

function Title({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <h2 className={`${titleFont} text-[1.5rem] font-normal tracking-[0.08em] ${ink} lg:text-[1.925rem] ${className}`}>{children}</h2>;
}

function ProductTile({ product }: { product: Product }) {
  return (
    <li>
      <Link href={`/jewelry/${product.slug}/`} className="group block">
        <div className="relative overflow-hidden bg-white">
          <Photo src={productPhoto[product.slug]} alt={product.name} sizes="(min-width: 1024px) 23vw, 50vw" className="aspect-[4/5] w-full transition-transform duration-700 group-hover:scale-[1.04]" />
          <span className={`absolute top-3 start-3 bg-[#94604b] px-1.5 py-0.5 ${bodyFont} text-[0.6875rem] tracking-[0.06em] text-white`}>{originLabel[product.origin]}</span>
          <svg viewBox="0 0 24 24" className="absolute top-3 end-3 h-5 w-5 text-[#4d4d4d]" fill="none" stroke="currentColor" strokeWidth="1.3" aria-hidden="true">
            <path d="M12 20s-7-4.4-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.6-7 10-7 10Z" />
          </svg>
        </div>
        <h3 className={`mt-4 text-center ${titleFont} text-[0.8125rem] font-normal tracking-[0.1em] ${ink}`}>{product.name}</h3>
        <p className={`mt-1 text-center ${bodyFont} text-[0.875rem] tracking-[0.06em] ${soft} [unicode-bidi:plaintext]`}>
          {product.priceFrom ? `החל מ־${formatPrice(product.priceFrom)}` : "מחיר בתיאום"}
        </p>
      </Link>
    </li>
  );
}

function EdgeTile({ href, photo, label, ratio = "aspect-[3/4]" }: { href: string; photo: StaticImageData; label: string; ratio?: string }) {
  return (
    <Link href={href} className="group relative block overflow-hidden">
      <Photo src={photo} alt="" sizes="(min-width: 1024px) 25vw, 50vw" className={`${ratio} w-full transition-transform duration-[1.2s] group-hover:scale-[1.05]`} />
      <span className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_top,rgba(0,0,0,0.4),rgba(0,0,0,0)_40%)]" />
      <span className={`absolute inset-x-0 bottom-5 text-center ${titleFont} text-[0.9375rem] tracking-[0.12em] text-white underline decoration-1 underline-offset-[6px]`}>{label}</span>
    </Link>
  );
}

export default function DirectionB() {
  const newIn = pick(["solitaire-classic-natural", "halo-oval-lab", "studs-solitaire-lab", "pendant-solitaire-natural"]);
  const earrings = pick(["studs-solitaire-lab", "hoops-pave-lab", "pendant-initial-lab", "tennis-bracelet-4ct-lab", "eternity-pave-lab"]);
  const marquee = ["משלוח מבוטח חינם", "עד 12 תשלומים ללא ריבית", "תעודה לכל יהלום", "אחריות לכל החיים"];

  return (
    <div dir="rtl" data-direction="b" className={`overflow-x-clip ${display.variable} ${body.variable} ${hebrew.variable} ${bodyFont} bg-[#f7f6f5] text-[0.875rem] tracking-[0.06em] ${ink}`}>
      {/* Announcement */}
      <div className={`flex h-11 items-center justify-center gap-8 bg-[#94604b] ${titleFont} text-[0.75rem] tracking-[0.1em] text-white`}>
        <span aria-hidden="true" className="opacity-70">‹</span>
        <span>משלוח מבוטח חינם עד הבית · עד 12 תשלומים</span>
        <span aria-hidden="true" className="opacity-70">›</span>
      </div>

      {/* Header */}
      <header className="sticky top-0 z-40 bg-[#f7f6f5]/97 backdrop-blur">
        <div className="mx-auto grid h-16 max-w-[90rem] grid-cols-[1fr_auto_1fr] items-center px-4 lg:h-[6.5rem] lg:grid-cols-[auto_1fr_auto] lg:gap-14 lg:px-12">
          <details className="group lg:hidden">
            <summary aria-label="תפריט" className="flex h-11 w-11 cursor-pointer list-none items-center [&::-webkit-details-marker]:hidden">
              <span className="flex flex-col gap-[6px]" aria-hidden="true"><span className="block h-px w-6 bg-[#4d4d4d]" /><span className="block h-px w-6 bg-[#4d4d4d]" /><span className="block h-px w-6 bg-[#4d4d4d]" /></span>
            </summary>
            <nav className="absolute inset-x-0 top-full z-50 h-[calc(100svh-4rem)] overflow-y-auto bg-[#f7f6f5] px-6 pt-4">
              <ul>{nav.map((n) => <li key={n.href} className="border-b border-[#e4e4e4]"><Link href={n.href} className={`block py-4 ${titleFont} text-[1rem] tracking-[0.1em]`}>{n.label}</Link></li>)}</ul>
            </nav>
          </details>

          <Link href="/directions/b/" aria-label="ליבי דיאמונדס" className="justify-self-center lg:justify-self-start" dir="ltr">
            <span className="font-[family-name:var(--so-display)] text-[1.0625rem] uppercase tracking-[0.14em] text-[#2b2b2b] sm:text-[1.375rem] sm:tracking-[0.2em] lg:text-[1.625rem]">Libi Diamonds</span>
          </Link>

          <nav aria-label="ניווט ראשי" className="hidden lg:block">
            <ul className="grid grid-cols-4 gap-x-10 gap-y-3">
              {nav.map((n) => <li key={n.href}><Link href={n.href} className={`${titleFont} text-[0.825rem] tracking-[0.08em] hover:underline hover:underline-offset-4`}>{n.label}</Link></li>)}
            </ul>
          </nav>

          <div className="flex items-center justify-end gap-1">
            <a href={telHref} aria-label={`טלפון ${site.phoneDisplay}`} className="flex h-11 w-11 items-center justify-center"><PhoneIcon className="h-5 w-5" /></a>
            <a href={generalWhatsApp} target="_blank" rel="noopener noreferrer" aria-label="וואטסאפ" className="flex h-11 w-11 items-center justify-center"><WhatsAppIcon className="h-5 w-5" /></a>
          </div>
        </div>
        <div className={`flex h-12 items-center justify-center gap-6 bg-[#d4c5b3]/60 ${titleFont} text-[0.75rem] tracking-[0.12em]`}>
          <span>ייעוץ אישי ללא עלות</span>
          <span className="hidden sm:inline">·</span>
          <span className="hidden sm:inline">ראשון–חמישי 09:00–19:00</span>
        </div>
      </header>

      <main>
        {/* Hero */}
        <section className="relative overflow-hidden">
          <Photo src={stock.solitaireBlushMarble} alt="טבעת סוליטר בזהב צהוב לצד יהלום מלוטש" priority sizes="100vw" position="15% 60%" className="aspect-[4/5] w-full bg-[#e9e1dc] sm:aspect-[16/9] lg:aspect-auto lg:h-[34rem]" />
          <div className="absolute inset-0 flex items-end justify-center pb-10 lg:items-center lg:justify-start lg:pb-0 lg:pe-[55%] lg:ps-[6%]">
            <div className="text-center">
              <p className={`${titleFont} text-[3rem] leading-none tracking-[0.04em] text-[#94604b] [text-shadow:0_1px_18px_rgba(255,255,255,0.6)] lg:text-[4.75rem]`}>אירוסין</p>
              <p className={`mt-3 ${titleFont} text-[0.9375rem] tracking-[0.2em] text-[#94604b]`}>טבעות יהלום בהתאמה אישית</p>
              <Link href="/collections/engagement-rings/" className={`mt-6 inline-block border-b border-[#94604b] pb-1 ${titleFont} text-[1.125rem] tracking-[0.24em] text-[#94604b]`}>לקולקציה</Link>
            </div>
          </div>
        </section>

        {/* Sand marquee */}
        <div className={`overflow-hidden bg-[#d4c5b3] py-3 ${titleFont} text-[0.9375rem] tracking-[0.16em] text-[#4d4d4d]`}>
          <div className="flex w-max animate-[so-marquee_40s_linear_infinite] gap-12 motion-reduce:animate-none">
            {[...marquee, ...marquee, ...marquee].map((m, i) => (
              <span key={i} className="flex items-center gap-12 whitespace-nowrap">{m}<span aria-hidden="true">✦</span></span>
            ))}
          </div>
          <style>{`@keyframes so-marquee{from{transform:translateX(0)}to{transform:translateX(33.333%)}}`}</style>
        </div>

        {/* New in */}
        <section className="mx-auto max-w-[90rem] px-4 py-14 lg:px-12 lg:py-16">
          <Title className="text-center">חדשים בקולקציה</Title>
          <ul className="mt-10 grid grid-cols-2 gap-x-3 gap-y-10 lg:grid-cols-4 lg:gap-x-6">
            {newIn.map((p) => <ProductTile key={p.slug} product={p} />)}
          </ul>
          <div className="mt-12 flex justify-center"><DarkButton href="/collections/engagement-rings/">לכל התכשיטים</DarkButton></div>
        </section>

        {/* Editorial split */}
        <section className="grid items-center lg:grid-cols-2">
          <Photo src={stock.ovalHaloRoseGold} alt="טבעת אירוסין בזהב ורוד עם יהלום אובלי בהילה" sizes="(min-width: 1024px) 50vw, 100vw" className="aspect-[4/3] w-full lg:aspect-[5/4]" />
          <div className="px-6 py-14 text-center lg:px-20">
            <p className={`${titleFont} text-[0.75rem] tracking-[0.18em] ${soft}`}>האבן קודם, התכשיט אחריה</p>
            <h2 className={`mt-4 ${titleFont} text-[1.75rem] tracking-[0.1em] lg:text-[2rem]`}>הכירו את ההילה האובלית</h2>
            <p className={`mx-auto mt-5 max-w-md leading-[1.9] ${soft}`}>
              יהלום אובלי בהילת פאווה, שמגדילה את הקוטר הנראה של האבן. זמינה בזהב ורוד ולבן, ביהלום מעבדה או טבעי — ונבנית סביב האבן שתבחרו.
            </p>
            <Link href="/jewelry/halo-oval-lab/" className={`mt-8 inline-flex min-h-11 items-center border border-[#4d4d4d]/40 px-8 ${titleFont} text-[0.8125rem] tracking-[0.14em] hover:border-[#4d4d4d]`}>לגלות את הטבעת</Link>
          </div>
        </section>

        {/* Four edge tiles */}
        <section className="mt-2 grid grid-cols-2 gap-0.5 lg:grid-cols-4">
          <EdgeTile href="/collections/tennis-bracelets/" photo={stock.tennisBraceletOpen} label="צמידים" />
          <EdgeTile href="/collections/pendants/" photo={stock.cushionPendant} label="שרשראות" />
          <EdgeTile href="/collections/earrings/" photo={stock.goldHoopsBaguette} label="עגילים" />
          <EdgeTile href="/collections/engagement-rings/" photo={stock.emeraldSolitaireGold} label="טבעות" />
        </section>

        {/* Two large tiles */}
        <section className="mx-auto grid max-w-[90rem] gap-4 px-4 py-14 lg:grid-cols-2 lg:gap-6 lg:px-12 lg:py-16">
          {[
            { href: "/collections/wedding-bands/", photo: stock.twistedEternityBand, label: "טבעות נישואין משובצות" },
            { href: "/collections/lab-diamonds/", photo: stock.looseDiamondsBlush, label: "יהלומי מעבדה" },
          ].map((t) => (
            <Link key={t.href} href={t.href} className="group relative block overflow-hidden">
              <Photo src={t.photo} alt="" sizes="(min-width: 1024px) 45vw, 100vw" className="aspect-square w-full transition-transform duration-[1.2s] group-hover:scale-[1.04]" />
              <span className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_top,rgba(0,0,0,0.42),rgba(0,0,0,0)_45%)]" />
              <span className="absolute bottom-8 start-8 text-white">
                <span className={`block ${titleFont} text-[1.25rem] tracking-[0.14em]`}>{t.label}</span>
                <span className={`mt-1 inline-block border-b border-white ${titleFont} text-[0.75rem] tracking-[0.12em]`}>לקולקציה</span>
              </span>
            </Link>
          ))}
        </section>

        {/* Dark about band */}
        <section className="grid bg-[#1c1c1c] text-white lg:grid-cols-[1fr_1.2fr]">
          <Photo src={stock.diamondTweezers} alt="יהלום מוחזק בפינצטה" sizes="(min-width: 1024px) 45vw, 100vw" className="aspect-[16/10] w-full grayscale lg:aspect-auto lg:h-full" />
          <div className="flex items-center px-6 py-14 lg:px-20">
            <div>
              <h2 className={`${titleFont} text-[1.5rem] tracking-[0.12em] lg:text-[1.875rem]`}>יהלומים בלי חלון ראווה</h2>
              <p className="mt-5 max-w-lg leading-[1.9] text-white/85">
                ליבי דיאמונדס עובדת ישירות מול מלטשות ומול הבורסה. בלי שכירות בקניון ובלי מלאי שצריך למכור — ולכן אותו תקציב קונה כאן אבן טובה יותר, בתעודת GIA או IGI.
              </p>
              <Link href="/about/" className={`mt-8 inline-block border-b border-white pb-1 ${titleFont} text-[0.8125rem] tracking-[0.14em]`}>לסיפור שלנו</Link>
            </div>
          </div>
        </section>

        {/* Mix & match row */}
        <section className="bg-white py-12 lg:py-14">
          <ul className="mx-auto grid max-w-[80rem] grid-cols-3 items-end gap-4 px-4 sm:grid-cols-5 lg:px-12">
            {earrings.map((p, i) => (
              <li key={p.slug} className={i > 2 ? "hidden sm:block" : ""}>
                <Link href={`/jewelry/${p.slug}/`} className="block">
                  <Photo src={productPhoto[p.slug]} alt={p.name} sizes="20vw" className="mx-auto aspect-square w-full max-w-[9rem]" fit="contain" />
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-6 text-center">
            <Title>עגילים, תליונים וצמידים</Title>
            <Link href="/collections/earrings/" className={`mt-2 inline-block border-b border-[#4d4d4d] ${titleFont} text-[0.8125rem] tracking-[0.14em]`}>לקולקציה</Link>
          </div>
        </section>

        {/* Visit / consult */}
        <section className="mx-auto grid max-w-[80rem] items-center gap-10 px-4 py-14 lg:grid-cols-2 lg:gap-16 lg:px-12 lg:py-20">
          <div>
            <Title>פגישת ייעוץ אישית</Title>
            <p className={`mt-4 max-w-md leading-[1.9] ${soft}`}>יהלום נראה טוב יותר כשמסבירים אותו. בווידאו, בטלפון או פנים אל פנים — נציג לכם כמה אבנים באותו תקציב, עם התעודות.</p>
            <div className="mt-7"><DarkButton href="/contact/">קביעת פגישה</DarkButton></div>
          </div>
          <div className="grid grid-cols-[1.2fr_1fr] items-end gap-3">
            <Photo src={stock.cushionHaloBridalSet} alt="" sizes="30vw" className="aspect-[4/5] w-full" />
            <Photo src={stock.goldDiamondRingsStack} alt="" sizes="25vw" className="mb-8 aspect-square w-full" />
          </div>
        </section>

        {/* Inspiration strip */}
        <section className="pb-2">
          <a href={site.social.instagram} target="_blank" rel="noopener noreferrer" className={`flex items-center justify-center gap-2 pb-5 ${titleFont} text-[0.9375rem] tracking-[0.14em]`}>
            <InstagramIcon className="h-4 w-4" />
            השראה <span dir="ltr" className="underline underline-offset-4">@LIBIDIAMONDS</span>
          </a>
          <ul className="grid grid-cols-3 lg:grid-cols-6">
            {[stock.roseSolitaireLinen, stock.haloStudsWhite, stock.stackedRings, stock.roseDiamondBand, stock.pendantsPair, stock.channelEternityBand].map((p, i) => (
              <li key={i}><Photo src={p} alt="" sizes="(min-width: 1024px) 16vw, 33vw" className="aspect-square w-full" /></li>
            ))}
          </ul>
        </section>
      </main>

      <footer className="bg-[#f7f6f5]">
        <div className="mx-auto grid max-w-[90rem] gap-10 px-4 py-14 sm:grid-cols-2 lg:grid-cols-[auto_1fr_1fr_1fr_1.4fr] lg:px-12">
          <div className="flex h-24 w-16 items-center justify-center rounded-full border border-[#4d4d4d]/50" dir="ltr">
            <span className="font-[family-name:var(--so-display)] text-[1.5rem] tracking-[0.04em]">LD</span>
          </div>
          {[
            { h: "עזרה", items: [["שאלות נפוצות", "/faq/"], ["משלוחים והחזרות", "/faq/"], ["צור קשר", "/contact/"]] },
            { h: "אודות", items: [["הסיפור שלנו", "/about/"], ["מדריך היהלומים", "/guide/"]] },
            { h: "מידע", items: [["אחריות", "/faq/"], ["הצהרת נגישות", "/accessibility/"]] },
          ].map((col) => (
            <nav key={col.h} aria-label={col.h}>
              <p className={`${titleFont} text-[0.8125rem] tracking-[0.14em]`}>{col.h}</p>
              <ul className={`mt-4 space-y-2.5 text-[0.8125rem] ${soft}`}>{col.items.map(([l, h]) => <li key={l}><Link href={h} className="hover:text-[#4d4d4d]">{l}</Link></li>)}</ul>
            </nav>
          ))}
          <div>
            <p className={`${titleFont} text-[0.8125rem] tracking-[0.14em]`}>נשארים בקשר</p>
            <p className={`mt-4 text-[0.8125rem] ${soft}`}>שאלה על יהלום? כתבו לנו ונחזור עם אפשרויות.</p>
            <div className="mt-4 flex">
              <a href={telHref} className="flex min-h-11 flex-1 items-center border border-[#d6d6d6] bg-white px-3 text-[0.8125rem]" dir="ltr">{site.phoneDisplay}</a>
              <a href={generalWhatsApp} target="_blank" rel="noopener noreferrer" className={`flex min-h-11 items-center bg-[#4d4d4d] px-4 ${titleFont} text-[0.75rem] tracking-[0.12em] text-white`}>וואטסאפ</a>
            </div>
          </div>
        </div>
        <p className={`border-t border-[#e4e4e4] py-5 text-center text-[0.75rem] ${soft}`}>© 2026 {site.legalName}</p>
      </footer>

      <a href={generalWhatsApp} target="_blank" rel="noopener noreferrer" aria-label="שליחת הודעה בוואטסאפ" className="fixed bottom-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#d4c5b3] text-[#4d4d4d] shadow-[0_8px_20px_-8px_rgba(0,0,0,0.35)]" style={{ insetInlineEnd: "1.25rem" }}>
        <WhatsAppIcon className="h-6 w-6" />
      </a>
    </div>
  );
}
