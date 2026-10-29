import Link from "next/link";
import type { Metadata } from "next";
import type { StaticImageData } from "next/image";
import { Heebo, Jost } from "next/font/google";
import { Photo } from "@/components/directions/Photo";
import { ScrollRail } from "@/components/directions/ScrollRail";
import { pick, productPhoto } from "@/components/directions/media";
import { shapes } from "@/components/home/ShopByShape";
import { stock } from "@/lib/stock";
import { originLabel, type Product } from "@/data/products";
import { testimonials } from "@/data/testimonials";
import { site } from "@/data/site";
import { formatPrice } from "@/lib/format";
import { buildWhatsAppUrl, generalWhatsApp, telHref } from "@/lib/contact";
import { PhoneIcon, StarIcon, WhatsAppIcon } from "@/components/ui/Icons";

/*
 * DIRECTION A — modelled on greendiamonds.co.il (measured 2026-10-15):
 * page #EFEFEF, ink #1C1C1C, Jost with ~0.14em tracking (Hebrew falls back to
 * a plain sans), black square buttons, teal prices, rounded image tiles, a
 * dark #222 reviews band, sage-green comparison table, green #307A07 band.
 */

const latin = Jost({ subsets: ["latin"], weight: ["400", "500"], variable: "--gd-latin" });
const hebrew = Heebo({ subsets: ["hebrew", "latin"], weight: ["300", "400", "600"], variable: "--gd-he" });

export const metadata: Metadata = { title: "כיוון א׳", robots: { index: false, follow: false } };

const font = "font-[family-name:var(--gd-latin),var(--gd-he)]";
const track = "tracking-[0.14em]";
const ink = "text-[#1c1c1c]";
const muted = "text-[#1c1c1c]/65";
const teal = "text-[#00796e]";

const nav = [
  { label: "טבעות אירוסין", href: "/collections/engagement-rings/" },
  { label: "עגילי יהלומים", href: "/collections/earrings/" },
  { label: "צמידי טניס", href: "/collections/tennis-bracelets/" },
  { label: "שרשראות יהלום", href: "/collections/pendants/" },
  { label: "טבעות נישואין", href: "/collections/wedding-bands/" },
  { label: "מידע מקצועי", href: "/guide/" },
  { label: "צור קשר", href: "/contact/" },
];

function BlackButton({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link href={href} className={`inline-flex min-h-11 items-center justify-center bg-[#1c1c1c] px-7 text-[0.8125rem] ${track} text-white transition-colors hover:bg-[#3a3a3a]`}>
      {children}
    </Link>
  );
}

function SectionTitle({ children, sub }: { children: React.ReactNode; sub?: string }) {
  return (
    <div className="text-center">
      <h2 className={`text-[1.5rem] font-normal leading-snug ${track} ${ink} lg:text-[2rem]`}>{children}</h2>
      {sub && <p className={`mt-3 text-[0.8125rem] ${track} ${muted}`}>{sub}</p>}
    </div>
  );
}

function ProductCard({ product }: { product: Product }) {
  return (
    <li className="snap-start">
      <Link href={`/jewelry/${product.slug}/`} className="group block h-full rounded-md border border-[#e3e3e3] bg-white p-3">
        <div className="overflow-hidden bg-white">
          <Photo src={productPhoto[product.slug]} alt={product.name} sizes="(min-width: 1024px) 22vw, 70vw" className="aspect-square w-full transition-transform duration-500 group-hover:scale-[1.04]" />
        </div>
        <p className={`mt-3 text-center text-[0.8125rem] leading-relaxed ${track} ${ink}`}>
          {product.name} · {originLabel[product.origin]}
        </p>
        <p className={`mt-1 text-center text-[0.9375rem] font-semibold ${track} ${teal} [unicode-bidi:plaintext]`}>
          {product.priceFrom ? `${formatPrice(product.priceFrom)}` : "מחיר בתיאום אישי"}
        </p>
        <p className={`mt-1 text-center text-[0.75rem] ${track} ${muted}`}>תעודת {product.certificate}</p>
      </Link>
    </li>
  );
}

function ProductRail({ title, products, href, cta }: { title: string; products: Product[]; href: string; cta: string }) {
  return (
    <section className="mx-auto max-w-[90rem] px-4 py-14 lg:px-12 lg:py-20">
      <SectionTitle>{title}</SectionTitle>
      <ScrollRail
        label={title}
        className="mt-10"
        listClassName="auto-cols-[72%] gap-3 sm:auto-cols-[40%] lg:auto-cols-[calc((100%-3*1rem)/4)] lg:gap-4"
        arrowClassName={`h-10 w-10 items-center justify-center ${teal} -mx-10`}
      >
        {products.map((p) => <ProductCard key={p.slug} product={p} />)}
      </ScrollRail>
      <div className="mt-10 flex justify-center">
        <BlackButton href={href}>{cta}</BlackButton>
      </div>
    </section>
  );
}

function CategoryTile({ href, photo, label }: { href: string; photo: StaticImageData; label: string }) {
  return (
    <li className="snap-start">
      <Link href={href} className="group relative block overflow-hidden rounded-lg">
        <Photo src={photo} alt="" sizes="(min-width: 1024px) 22vw, 75vw" className="aspect-[6/7] w-full transition-transform duration-700 group-hover:scale-[1.04]" />
        <span className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_top,rgba(0,0,0,0.55),rgba(0,0,0,0)_45%)]" />
        <span className={`absolute bottom-5 start-6 text-[1.125rem] ${track} text-white lg:text-[1.25rem]`}>{label}</span>
      </Link>
    </li>
  );
}

const compareRows: [string, string, string][] = [
  ["החומר ממנו עשוי", "פחמן גבישי טהור", "פחמן גבישי טהור"],
  ["דרגת קשיות", "10/10 בסולם מוס", "10/10 בסולם מוס"],
  ["דירוג איכות האבן", "גוון / ניקיון / ליטוש / משקל", "גוון / ניקיון / ליטוש / משקל"],
  ["ברק ונצנוץ", "מקדם שבירה 2.42", "מקדם שבירה 2.42"],
  ["תעודה גמולוגית", "IGI לכל אבן", "GIA לכל אבן"],
  ["מחיר", "אבן גדולה פי 2 ומעלה באותו תקציב", "מחיר מלא"],
  ["שמירת ערך", "נמוכה יותר", "גבוהה לאורך זמן"],
];

export default function DirectionA() {
  const rings = pick(["solitaire-classic-natural", "halo-oval-lab", "three-stone-emerald-natural", "eternity-pave-lab"]);
  const earringsAndTennis = pick(["studs-solitaire-lab", "hoops-pave-lab", "tennis-bracelet-4ct-lab", "tennis-bracelet-graduated-natural"]);
  const pendantsAndStones = pick(["pendant-solitaire-natural", "pendant-initial-lab", "natural-round-brilliant", "lab-round-brilliant"]);

  return (
    <div dir="rtl" data-direction="a" className={`overflow-x-clip ${latin.variable} ${hebrew.variable} ${font} bg-[#efefef] text-[0.875rem] font-light ${track} ${ink}`}>
      {/* Header */}
      <header className="sticky top-0 z-40 border-b border-[#dddddd] bg-[#efefef]">
        <div className="mx-auto grid h-16 max-w-[90rem] grid-cols-[1fr_auto_1fr] items-center px-4 lg:h-[5.5rem] lg:grid-cols-[auto_1fr_auto] lg:gap-10 lg:px-12">
          <details className="group lg:hidden">
            <summary aria-label="תפריט" className="flex h-11 w-11 cursor-pointer list-none items-center [&::-webkit-details-marker]:hidden">
              <span className="flex flex-col gap-[6px]" aria-hidden="true">
                <span className="block h-px w-6 bg-[#1c1c1c]" /><span className="block h-px w-6 bg-[#1c1c1c]" /><span className="block h-px w-6 bg-[#1c1c1c]" />
              </span>
            </summary>
            <nav className="absolute inset-x-0 top-full z-50 h-[calc(100svh-4rem)] overflow-y-auto bg-[#efefef] px-5 pt-2">
              <ul>
                {nav.map((n) => (
                  <li key={n.href} className="border-b border-[#dddddd]">
                    <Link href={n.href} className={`block py-4 text-[1rem] ${track}`}>{n.label}</Link>
                  </li>
                ))}
              </ul>
            </nav>
          </details>

          <Link href="/directions/a/" aria-label="ליבי דיאמונדס" className="flex items-center gap-2 justify-self-center lg:justify-self-start" dir="ltr">
            <svg viewBox="0 0 64 64" className="h-7 w-7 text-[#3e7a5f]" fill="none" stroke="currentColor" aria-hidden="true">
              <path d="M12 24 32 6l20 18-20 34L12 24Z" strokeWidth="2.6" strokeLinejoin="round" />
              <path d="M12 24h40M32 6l-8 18 8 34 8-34-8-18" strokeWidth="1.6" strokeLinejoin="round" />
            </svg>
            <span className="font-[family-name:var(--gd-latin)] text-[1.25rem] font-normal uppercase tracking-[0.06em] text-[#2c2c2c] lg:text-[1.375rem]">Libi Diamonds</span>
          </Link>

          <nav aria-label="ניווט ראשי" className="hidden justify-center lg:flex">
            <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-1">
              {nav.map((n) => (
                <li key={n.href}><Link href={n.href} className={`text-[0.875rem] ${track} hover:underline hover:underline-offset-8`}>{n.label}</Link></li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center justify-end gap-1">
            <a href={telHref} aria-label={`טלפון ${site.phoneDisplay}`} className="flex h-11 w-11 items-center justify-center"><PhoneIcon className="h-5 w-5" /></a>
            <a href={generalWhatsApp} target="_blank" rel="noopener noreferrer" aria-label="וואטסאפ" className="flex h-11 w-11 items-center justify-center"><WhatsAppIcon className="h-5 w-5" /></a>
          </div>
        </div>
      </header>

      <main>
        {/* Hero — full-width slide with the statement set in tracked type */}
        <section className="relative">
          <Photo src={stock.cushionHaloBridalSet} alt="סט טבעת אירוסין עם הילה וטבעת נישואין משובצת" priority sizes="100vw" position="18% 55%" className="aspect-[4/5] w-full bg-[#dedede] sm:aspect-[16/9] lg:aspect-auto lg:h-[34rem]" />
          <div className="absolute inset-0 hidden bg-[linear-gradient(to_left,rgba(239,239,239,0.92)_0%,rgba(239,239,239,0.75)_34%,rgba(239,239,239,0)_60%)] lg:block" />
          <div className="relative bg-[#efefef] px-5 pb-10 pt-8 lg:absolute lg:inset-y-0 lg:start-0 lg:flex lg:w-[44%] lg:items-center lg:bg-transparent lg:px-16 lg:py-0">
            <div>
              <h1 className={`text-[1.75rem] font-light leading-[1.45] ${track} lg:text-[2.25rem]`}>
                תכשיטי יהלומים: מבית LIBI DIAMONDS ישירות מהמלטשה
              </h1>
              <p className={`mt-4 max-w-md text-[0.9375rem] leading-[1.9] ${track} ${muted}`}>
                קנייה חכמה ובטוחה, בליווי אישי. כל יהלום עם תעודה גמולוגית ואחריות לכל
                החיים. בחרו איך לקנות: משלוח מבוטח עד הבית, או בפגישת ייעוץ אישית.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <BlackButton href="/collections/engagement-rings/">לטבעות האירוסין</BlackButton>
                <a href={generalWhatsApp} target="_blank" rel="noopener noreferrer" className={`inline-flex min-h-11 items-center gap-2 border border-[#1c1c1c] px-6 text-[0.8125rem] ${track} hover:bg-[#1c1c1c] hover:text-white`}>
                  <WhatsAppIcon className="h-4 w-4" />ייעוץ בוואטסאפ
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Categories */}
        <section className="mx-auto max-w-[90rem] px-4 pt-14 lg:px-12 lg:pt-20">
          <SectionTitle sub="ישירות מהמלטשה, בליווי אישי">תכשיטי יהלומים: ליבי דיאמונדס</SectionTitle>
          <ScrollRail label="קטגוריות" className="mt-10" listClassName="auto-cols-[78%] gap-3 sm:auto-cols-[45%] lg:auto-cols-[calc((100%-3*1.5rem)/4)] lg:gap-6">
            <CategoryTile href="/collections/engagement-rings/" photo={stock.emeraldSolitaireGold} label="טבעות אירוסין" />
            <CategoryTile href="/collections/earrings/" photo={stock.haloStudsLilac} label="עגילי יהלום" />
            <CategoryTile href="/collections/tennis-bracelets/" photo={stock.tennisBraceletOpen} label="צמידי טניס" />
            <CategoryTile href="/collections/pendants/" photo={stock.cushionPendant} label="שרשרת יהלום" />
          </ScrollRail>
        </section>

        {/* Reviews — dark band */}
        <section className="pt-14 lg:pt-20">
          <SectionTitle>חוות דעת של לקוחות</SectionTitle>
          <div className="mt-8 bg-[#222222] py-10">
            <ScrollRail
              label="חוות דעת"
              className="mx-auto max-w-[90rem] px-4 lg:px-16"
              listClassName="auto-cols-[82%] gap-3 sm:auto-cols-[45%] lg:auto-cols-[calc((100%-3*1rem)/4)] lg:gap-4"
              arrowClassName="h-10 w-10 items-center justify-center text-white"
            >
              {testimonials.map((t) => (
                <li key={t.name} className="snap-start">
                  <figure className="h-full rounded-lg bg-[#333333] p-5 text-white">
                    <figcaption className="flex items-center gap-3">
                      <span aria-hidden="true" className="flex h-9 w-9 items-center justify-center rounded-full bg-[#3e7a5f] text-[0.875rem]">{t.name.charAt(0)}</span>
                      <span className="text-[0.8125rem] font-semibold tracking-normal">{t.name} · {t.city}</span>
                    </figcaption>
                    <div className="mt-3 flex gap-0.5 text-[#f5b301]" aria-hidden="true">{Array.from({ length: 5 }, (_, i) => <StarIcon key={i} className="h-4 w-4" />)}</div>
                    <blockquote className="mt-3 text-[0.8125rem] leading-relaxed tracking-normal text-white/90">{t.quote}</blockquote>
                  </figure>
                </li>
              ))}
            </ScrollRail>
          </div>
        </section>

        <ProductRail title="טבעות אירוסין משובצות יהלום ✦ אחריות לכל החיים" products={rings} href="/collections/engagement-rings/" cta="לכל טבעות האירוסין" />

        {/* Natural vs lab — the comparison block */}
        <section className="mx-auto max-w-[78rem] px-4 py-14 lg:px-12 lg:py-20">
          <h2 className="mx-auto max-w-2xl text-center text-[1.5rem] font-semibold leading-snug tracking-[0.06em] lg:text-[2rem]">
            יהלום טבעי ו<span className="text-[#3e7a5f]">יהלום מעבדה</span>: <span className="text-[#3e7a5f]">אותו חומר</span>, אותן תכונות
          </h2>
          <div className="mx-auto mt-6 max-w-xl border-y border-[#c9b27c] py-4 text-center">
            <p className={`text-[0.9375rem] leading-relaxed ${track}`}>״שניהם פחמן גבישי טהור, בקשיות 10 — וגם שמאי מקצועי עם לופה לא יבחין ביניהם״</p>
            <p className={`mt-1 text-[0.75rem] ${muted}`}>מתוך מדריך היהלומים של ליבי</p>
          </div>
          <div className="mt-10 grid gap-10 lg:grid-cols-2 lg:items-start lg:gap-16">
            <div className={`space-y-6 text-center text-[0.875rem] leading-[1.9] ${track}`}>
              <div>
                <h3 className="text-[1.125rem] font-semibold">מה ההבדל בפועל?</h3>
                <p className="mt-2">מבחינה כימית ופיזיקלית — אין. ההבדל הוא בהיסטוריה: יהלום טבעי נוצר בעומק האדמה לפני מיליארד שנה, ויהלום מעבדה בתהליך מבוקר בתוך שבועות.</p>
              </div>
              <div>
                <h3 className="text-[1.125rem] font-semibold">איך בוחרים?</h3>
                <p className="mt-2">אם המטרה היא נכס לאורך זמן — יהלום טבעי. אם המטרה היא התכשיט המרשים ביותר בתקציב נתון — יהלום מעבדה, בפער גדול.</p>
              </div>
              <Link href="/guide/#natural-vs-lab" className="inline-flex items-center gap-2 border-b-2 border-[#c9b27c] pb-1 text-[0.8125rem] font-semibold">
                המדריך המלא לטבעי מול מעבדה
                <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="m15 6-6 6 6 6" /></svg>
              </Link>
            </div>
            <div className="overflow-hidden rounded-lg border border-[#dcdcdc] bg-[#f7f7f5] lg:order-first">
              <table className="w-full text-[0.8125rem]">
                <thead>
                  <tr>
                    <th scope="col" className="w-[34%] p-3"><span className="sr-only">מאפיין</span></th>
                    <th scope="col" className="bg-[#6f8f72] p-3 text-start font-semibold text-white">יהלום מעבדה</th>
                    <th scope="col" className={`p-3 text-start font-normal ${muted}`}>יהלום טבעי</th>
                  </tr>
                </thead>
                <tbody>
                  {compareRows.map(([label, lab, natural]) => (
                    <tr key={label} className="border-t border-[#e2e2e2]">
                      <th scope="row" className="bg-[#eaf1e6] p-3 text-start font-semibold">{label}</th>
                      <td className="border-x border-[#e2e2e2] bg-[#f3f7f1] p-3">
                        {lab}
                        {lab === natural && <span className="ms-2 inline-block rounded-full border border-[#cfcfcf] bg-white px-2 text-[0.6875rem]">זהה</span>}
                      </td>
                      <td className="p-3">{natural}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <ProductRail title="עגילי יהלום וצמידי טניס" products={earringsAndTennis} href="/collections/earrings/" cta="לכל העגילים" />

        {/* Shapes */}
        <section className="mx-auto max-w-[78rem] px-4 py-14 lg:px-12 lg:py-20">
          <SectionTitle>צורות וחיתוכים של יהלומים</SectionTitle>
          <p className={`mx-auto mt-5 max-w-3xl text-center text-[0.875rem] leading-[1.9] ${track} ${muted}`}>
            כל יהלום — טבעי או מעבדה — זמין במגוון צורות: עגול, אובל, אמרלד, טיפה, כרית ועוד. לחצו על צורה ונשלח
            לכם בוואטסאפ 2–3 אבנים בתעודה, באותו תקציב.
          </p>
          <ul className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4 lg:gap-6">
            {shapes.map((shape) => (
              <li key={shape.name}>
                <a href={buildWhatsAppUrl(`היי, הגעתי מהאתר של ליבי דיאמונדס ואשמח לאפשרויות ליהלום בליטוש ${shape.name}.`)} target="_blank" rel="noopener noreferrer" className="group block">
                  <span className="flex aspect-square items-center justify-center rounded-md bg-[#b9b9b9] transition-colors group-hover:bg-[#a9a9a9]">
                    <svg viewBox="0 0 64 64" fill="none" stroke="#ffffff" strokeWidth="1.1" strokeLinejoin="round" aria-hidden="true" className="h-[55%] w-[55%]">{shape.art}</svg>
                  </span>
                  <span className={`mt-3 flex min-h-10 items-center justify-center bg-[#1c1c1c] px-3 text-center text-[0.75rem] ${track} text-white`}>יהלום {shape.name}</span>
                </a>
              </li>
            ))}
          </ul>
        </section>

        <ProductRail title="תליונים ויהלומים בודדים" products={pendantsAndStones} href="/collections/pendants/" cta="לכל התליונים" />

        {/* Brand story */}
        <section className="mx-auto grid max-w-[78rem] items-center gap-10 px-4 py-14 lg:grid-cols-2 lg:gap-16 lg:px-12 lg:py-20">
          <Photo src={stock.looseDiamondsBlush} alt="יהלומים מלוטשים" sizes="(min-width: 1024px) 40vw, 100vw" className="aspect-[4/3] w-full rounded-xl" />
          <div className={`text-[0.875rem] leading-[1.9] ${track}`}>
            <h2 className="text-[1.375rem] font-normal leading-snug lg:text-[1.75rem]">ליבי דיאמונדס — יהלומים בלי חלון ראווה</h2>
            <p className={`mt-4 ${muted}`}>בלי שכירות בקניון ובלי מלאי שצריך למכור. אנחנו מאתרים את האבן אחרי שהבנו מה אתם מחפשים — ולכן אותו תקציב קונה כאן אבן טובה יותר.</p>
            <ul className={`mt-5 space-y-2 ${muted}`}>
              <li>• <b className="font-semibold text-[#1c1c1c]">תעודה לכל יהלום:</b> GIA ליהלום טבעי, IGI ליהלום מעבדה.</li>
              <li>• <b className="font-semibold text-[#1c1c1c]">משלוח מבוטח חינם:</b> עד הדלת, בחתימה אישית.</li>
              <li>• <b className="font-semibold text-[#1c1c1c]">עד 12 תשלומים:</b> ללא ריבית בכרטיס אשראי.</li>
              <li>• <b className="font-semibold text-[#1c1c1c]">אחריות לכל החיים:</b> על הצורפות והשיבוץ.</li>
            </ul>
          </div>
        </section>

        {/* Green band */}
        <section className="grid lg:grid-cols-2">
          <div className="flex flex-col items-center justify-center bg-[#307a07] px-6 py-14 text-center text-white">
            <p className={`text-[0.8125rem] ${track} text-white/80`}>ייעוץ אישי</p>
            <h2 className={`mt-2 text-[1.5rem] font-normal ${track} lg:text-[1.875rem]`}>מחפשים יהלום? דברו איתנו</h2>
            <p className={`mt-3 max-w-md text-[0.875rem] leading-relaxed ${track} text-white/85`}>2–3 אפשרויות אבן בתעודה, באותו תקציב — בלי התחייבות.</p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <a href={generalWhatsApp} target="_blank" rel="noopener noreferrer" className={`inline-flex min-h-11 items-center gap-2 bg-white px-6 text-[0.8125rem] ${track} text-[#1c1c1c]`}><WhatsAppIcon className="h-4 w-4" />וואטסאפ</a>
              <a href={telHref} className={`inline-flex min-h-11 items-center gap-2 border border-white px-6 text-[0.8125rem] ${track}`} dir="ltr">{site.phoneDisplay}</a>
            </div>
          </div>
          <Photo src={stock.roundSolitaireSet} alt="" sizes="(min-width: 1024px) 50vw, 100vw" className="aspect-[16/9] w-full lg:aspect-auto lg:h-full" />
        </section>
      </main>

      <footer className="border-t border-[#dddddd] bg-[#efefef]">
        <div className="mx-auto grid max-w-[90rem] gap-8 px-4 py-12 sm:grid-cols-2 lg:grid-cols-4 lg:px-12">
          <div>
            <p className="font-[family-name:var(--gd-latin)] text-[1.25rem] uppercase tracking-[0.06em]" dir="ltr">Libi Diamonds</p>
            <p className={`mt-3 text-[0.8125rem] leading-relaxed ${muted}`}>יהלומים טבעיים ויהלומי מעבדה בתעודה, בליווי אישי.</p>
          </div>
          <nav aria-label="קטגוריות"><p className="text-[0.875rem] font-semibold">קטגוריות</p><ul className={`mt-3 space-y-2 text-[0.8125rem] ${muted}`}>{nav.slice(0, 5).map((n) => <li key={n.href}><Link href={n.href} className="hover:text-[#1c1c1c]">{n.label}</Link></li>)}</ul></nav>
          <nav aria-label="מידע"><p className="text-[0.875rem] font-semibold">מידע</p><ul className={`mt-3 space-y-2 text-[0.8125rem] ${muted}`}><li><Link href="/guide/">מדריך היהלומים</Link></li><li><Link href="/faq/">שאלות נפוצות</Link></li><li><Link href="/about/">אודותינו</Link></li><li><Link href="/accessibility/">הצהרת נגישות</Link></li></ul></nav>
          <div><p className="text-[0.875rem] font-semibold">יצירת קשר</p><ul className={`mt-3 space-y-2 text-[0.8125rem] ${muted}`}><li><a href={telHref} dir="ltr">{site.phoneDisplay}</a></li><li><a href={generalWhatsApp} target="_blank" rel="noopener noreferrer">וואטסאפ</a></li>{site.hours.map((h) => <li key={h.days}>{h.days}: <span dir="ltr">{h.time}</span></li>)}</ul></div>
        </div>
        <p className={`border-t border-[#dddddd] py-5 text-center text-[0.75rem] ${muted}`}>© 2026 {site.legalName}</p>
      </footer>

      <a href={generalWhatsApp} target="_blank" rel="noopener noreferrer" aria-label="שליחת הודעה בוואטסאפ" className="fixed bottom-5 z-40 flex h-12 w-12 items-center justify-center rounded-full bg-[#25d366] text-white shadow-[0_6px_18px_-6px_rgba(0,0,0,0.4)]" style={{ insetInlineEnd: "1.25rem" }}>
        <WhatsAppIcon className="h-7 w-7" />
      </a>
    </div>
  );
}
