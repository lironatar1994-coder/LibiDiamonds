import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import ProductCard from "@/components/ProductCard";
import CustomerVoices from "@/components/CustomerVoices";
import DiamondShapeSelector from "@/components/DiamondShapeSelector";
import { WhatsAppIcon } from "@/components/icons";
import {
  categories,
  products,
  productImages,
  type ArtType,
  type CategorySlug,
  type Product,
} from "@/data/products";
import { guides } from "@/data/guides";
import { reviews } from "@/data/reviews";
import { site, waLink, defaultWaMessage, assetPath, formatPrice } from "@/lib/site";
import { onlineStoreJsonLd, pageMetadata } from "@/lib/seo";

const featuredJournalGuide = guides.find((guide) => guide.slug === "why-choose-a-lab-diamond")!;
const secondaryJournalGuides = ["what-is-a-lab-diamond", "the-four-cs"].map(
  (slug) => guides.find((guide) => guide.slug === slug)!,
);

export const metadata: Metadata = pageMetadata({
  title: `${site.name} — תכשיטי יהלומי מעבדה וטבעות אירוסין`,
  description:
    "טבעות אירוסין ותכשיטי יהלומי מעבדה בזהב 14K ו־18K, עם תעודה גמולוגית, משלוח מבוטח וליווי אישי בבחירת האבן והמידה.",
  path: "/",
  image: site.socialImage,
  imageAlt: "טבעת סוליטר עם יהלום מעבדה בזהב צהוב מבית LIBI DIAMONDS",
});

const faqs = [
  {
    q: "האם יהלום מעבדה הוא יהלום אמיתי?",
    a: "כן, לחלוטין. יהלום מעבדה זהה כימית, פיזית ואופטית ליהלום שנכרה מהאדמה — אותו פחמן גבישי, אותה קשיחות ואותו ברק. ההבדל היחיד הוא מקום ההיווצרות, וזה גם מה שמאפשר מחיר נגיש משמעותית.",
  },
  {
    q: "מה כוללת התעודה הגמולוגית?",
    a: "כל יהלום מרכזי מגיע עם תעודה של מעבדה גמולוגית בינלאומית (IGI או GIA), המתעדת את משקל האבן, צבעה, רמת הניקיון ואיכות הליטוש — וכן את היותה יהלום מעבדה. התעודה שלכם, לתמיד.",
  },
  {
    q: "מהם זמני האספקה?",
    a: "פריטים מהקולקציה נשלחים תוך 7–14 ימי עסקים בשליחות מבוטחת עד הבית, ללא עלות. הזמנות בהתאמה אישית — בדרך כלל 3–4 שבועות. ממהרים? דברו איתנו ונמצא פתרון.",
  },
  {
    q: "אפשר להתאים תכשיט באופן אישי?",
    a: "בהחלט. אפשר לבחור כל שילוב של גודל אבן, גוון זהב ומידה — ואפשר גם לעצב יחד איתנו פריט חדש מאפס. שלחו לנו הודעה בוואטסאפ ונתחיל.",
  },
  {
    q: "מה קורה אם הטבעת לא מתאימה?",
    a: "התאמת מידה ראשונה — עלינו. ועל כל פריט חלה אחריות יצרן מלאה על השיבוץ והמתכת. הפרטים המלאים בעמוד המשלוחים והאחריות.",
  },
];

function SectionHeading({
  title,
  variant = "editorial",
  className = "",
}: {
  title: string;
  variant?: "editorial" | "centered";
  className?: string;
}) {
  if (variant === "centered") {
    return (
      <div className={`text-center ${className}`}>
        <h2 className="font-display text-[1.7rem] font-medium sm:text-4xl">{title}</h2>
        <span className="mx-auto mt-3 block h-px w-8 bg-gold/55" aria-hidden />
      </div>
    );
  }

  return (
    <div className={`flex items-center gap-5 sm:gap-7 ${className}`}>
      <h2 className="shrink-0 font-display text-[2rem] font-medium leading-none sm:text-4xl">{title}</h2>
      <span className="h-px flex-1 bg-gradient-to-l from-gold/55 to-transparent" aria-hidden />
    </div>
  );
}

function EditorialBestsellers({ items }: { items: Product[] }) {
  const [featured, ...secondary] = items;
  const featuredImages = productImages(featured);
  const featuredImage = featuredImages[1] ?? featuredImages[0];

  return (
    <div className="mt-7 sm:mt-9 lg:mt-10">
      <Link
        href={`/product/${featured.slug}`}
        className="editorial-product-feature group grid overflow-hidden lg:grid-cols-[1.45fr_0.55fr]"
      >
        <div className="relative aspect-[4/3] overflow-hidden lg:aspect-[16/7]">
          <Image
            src={featuredImage.src}
            alt={featuredImage.alt}
            fill
            sizes="(min-width: 1024px) 70vw, 100vw"
            className="object-cover transition-transform duration-1000 ease-out group-hover:scale-[1.018]"
          />
        </div>
        <div className="flex items-center justify-center px-5 py-7 text-center lg:px-8 lg:py-10">
          <div>
            <h3 className="font-display text-2xl font-medium sm:text-3xl">{featured.name}</h3>
            <p className="mt-2 font-display text-lg text-ink-soft">
              החל מ־{formatPrice(featured.priceFrom)}
            </p>
            <span className="mt-5 inline-flex min-h-9 items-center border-b border-gold/60 pb-1 text-xs font-semibold tracking-[0.1em] text-ink-soft transition-colors group-hover:border-gold-deep group-hover:text-ink">
              לצפייה בפריט
            </span>
          </div>
        </div>
      </Link>

      <div className="mt-8 grid grid-cols-2 gap-x-4 gap-y-8 sm:gap-x-5 lg:mt-10 lg:grid-cols-5 lg:gap-x-5 lg:gap-y-0">
        {secondary.map((product, index) => (
          <div key={product.slug} className={index > 3 ? "hidden lg:block" : "block"}>
            <ProductCard product={product} variant="compact" />
          </div>
        ))}
      </div>
    </div>
  );
}

const categoryImages: Record<CategorySlug, string> = {
  rings: assetPath("/images/products/v2/aura-solitaire-ring-primary.webp"),
  earrings: assetPath("/images/products/v2/stella-diamond-studs-primary.webp"),
  necklaces: assetPath("/images/products/v3/riviera-tennis-necklace-primary.webp"),
  bracelets: assetPath("/images/products/v3/icon-tennis-bracelet-primary.webp"),
};

const diamondShapes = [
  {
    name: "עגול",
    note: "קלאסי ומלא אור",
    type: "round",
    image: assetPath("/images/diamond-shapes/round.webp"),
  },
  {
    name: "אובל",
    note: "רך ומוארך",
    type: "oval",
    image: assetPath("/images/diamond-shapes/oval.webp"),
  },
  {
    name: "אמרלד",
    note: "קווים נקיים",
    type: "emerald",
    image: assetPath("/images/diamond-shapes/emerald.webp"),
  },
  {
    name: "קושן",
    note: "רך ורומנטי",
    type: "cushion",
    image: assetPath("/images/diamond-shapes/cushion.webp"),
  },
  {
    name: "טיפה",
    note: "עדין ובעל תנועה",
    type: "pear",
    image: assetPath("/images/diamond-shapes/pear.webp"),
  },
  {
    name: "פרינסס",
    note: "חד ומדויק",
    type: "princess",
    image: assetPath("/images/diamond-shapes/princess.webp"),
  },
] as const;

/* The four classic engagement settings, in ascending price. Each maps to a
   real ring in the catalogue, so the row shops as well as it teaches. */
const ringStyleNotes: Record<string, { label: string; note: string }> = {
  solitaire: { label: "סוליטר", note: "אבן אחת, בלי הסחות דעת" },
  pave: { label: "פאווה", note: "יהלומים משובצים לאורך הזרוע" },
  halo: { label: "היילו", note: "מעטפת אבנים סביב המרכז" },
  "three-stone": { label: "שלוש אבנים", note: "עבר, הווה ועתיד" },
};

const ringStyleOrder: ArtType[] = ["solitaire", "pave", "halo", "three-stone"];

const assurancePanels = [
  {
    title: "ליווי אישי, לא טופס",
    text: "בוחרים יחד את האבן, גוון הזהב והמידה — בשיחה אחת בוואטסאפ. בלי לחץ, בלי התחייבות, ובקצב שלכם.",
  },
  {
    title: "תעודה לכל יהלום",
    text: "כל אבן מרכזית מגיעה עם תעודת IGI או GIA שמתעדת קראט, צבע, ניקיון וליטוש — וגם את היותה יהלום מעבדה.",
  },
  {
    title: "משלוח, אחריות והתאמות",
    text: "משלוח מבוטח עד הבית ללא עלות, אחריות יצרן מלאה על השיבוץ והמתכת, והתאמת מידה ראשונה — עלינו.",
  },
];

export default function HomePage() {
  const bestsellers = products.filter((p) => p.bestseller).slice(0, 6);
  const ringStyles = ringStyleOrder
    .map((art) => {
      const product = products.find((item) => item.category === "rings" && item.art === art);
      return product ? { ...ringStyleNotes[art], product } : null;
    })
    .filter((entry) => entry !== null);
  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${site.domain}/#website`,
    url: site.domain,
    name: site.name,
    alternateName: site.nameHe,
    inLanguage: site.language,
    publisher: { "@id": `${site.domain}/#organization` },
  };

  return (
    <>
      {/* ── Hero ─────────────────────────────────────────── */}
      <section className="hero-editorial relative isolate overflow-hidden">
        {/* One media element for every breakpoint. A <picture> lets the
            browser pick exactly one file — previously both heroes were
            fetched on every device because `priority` preloads regardless of
            whether the wrapper is display:none. CSS moves it from a full
            bleed behind the copy to the left editorial half at lg. */}
        <div className="hero-media absolute inset-0 lg:right-auto lg:w-[52%]">
          <div className="hero-ring-light hidden lg:block" />
          <picture>
            <source
              media="(min-width: 640px)"
              srcSet={assetPath("/images/hero/v2/home-hero-desktop.webp")}
            />
            <img
              src={assetPath("/images/hero/v2/home-hero-mobile.webp")}
              alt="טבעת יהלום מעבדה בזהב צהוב על משטח שיש בהיר"
              fetchPriority="high"
              decoding="async"
              className="hero-settle absolute inset-0 h-full w-full object-cover object-[center_62%] sm:object-[center_38%] lg:object-[72%_center]"
            />
          </picture>
          <div className="hero-scrim absolute inset-0 lg:hidden" />
        </div>

        <div className="relative z-10 mx-auto grid min-h-[calc(74svh-60px)] max-w-7xl items-start px-4 py-4 sm:px-6 lg:min-h-[min(82vh,760px)] lg:grid-cols-[0.86fr_1.14fr] lg:items-center lg:gap-10 lg:px-8 lg:py-14">
          <div className="pt-3 text-center sm:pt-10 lg:order-first lg:max-w-lg lg:pt-0 lg:text-right">
            <h1
              className="cascade mx-auto max-w-[10ch] font-display text-[2.6rem] font-light leading-[1.06] text-ink sm:text-6xl lg:mx-0 xl:text-7xl"
              style={{ animationDelay: "90ms" }}
            >
              מהרגע הזה, והלאה.
            </h1>
            <p
              className="cascade mx-auto mt-3.5 max-w-[26rem] text-[0.82rem] leading-6 tracking-[0.06em] text-stone sm:text-base sm:leading-7 sm:tracking-[0.08em] lg:mx-0 lg:mt-5"
              style={{ animationDelay: "150ms" }}
            >
              טבעות אירוסין ויהלומי מעבדה מוסמכים, בזהב 14K/18K.
            </p>
            <div
              className="cascade mt-5 flex flex-col items-center gap-1 sm:mt-7 sm:gap-3 lg:mt-10 lg:items-start xl:flex-row xl:items-center xl:justify-start"
              style={{ animationDelay: "220ms" }}
            >
              <Link href="/jewelry/rings" className="btn-primary w-full max-w-xs whitespace-nowrap lg:w-auto lg:max-w-none lg:px-14">
                גלו טבעות אירוסין
              </Link>
              {/* on phones the consultation link stays light so it supports the
                  primary CTA instead of competing with it */}
              <a
                href={waLink(defaultWaMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-11 items-center gap-2 text-[0.82rem] font-semibold tracking-[0.06em] text-ink-soft lg:hidden"
              >
                <WhatsAppIcon className="h-4 w-4 text-gold-deep" />
                <span className="border-b border-gold/55 pb-0.5">ייעוץ אישי בוואטסאפ</span>
              </a>
              <a
                href={waLink(defaultWaMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp hero-desktop-inline whitespace-nowrap"
              >
                <WhatsAppIcon className="h-4 w-4" />
                ייעוץ אישי בוואטסאפ
              </a>
            </div>
          </div>

        </div>

        {/* quiet cue that the page continues below the fold */}
        <span
          className="pointer-events-none absolute inset-x-0 bottom-6 z-10 hidden justify-center lg:flex"
          aria-hidden
        >
          <svg
            className="scroll-hint h-5 w-5 text-stone"
            viewBox="0 0 20 20"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M5 7.5 10 12.5l5-5" />
          </svg>
        </span>
      </section>

      {/* ── Bestsellers ───────────────────────────────────── */}
      <section className="section-gallery py-14 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading title="הבחירות של LIBI" />
          <EditorialBestsellers items={bestsellers} />
        </div>
      </section>

      {/* ── Shop by setting style ────────────────────────── */}
      <section className="section-linen py-14 sm:py-16 lg:py-24" aria-labelledby="ring-styles-title">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-5 sm:gap-7">
            <h2
              id="ring-styles-title"
              className="shrink-0 font-display text-[2rem] font-medium leading-none sm:text-4xl"
            >
              לפי סגנון
            </h2>
            <span className="h-px flex-1 bg-gradient-to-l from-gold/55 to-transparent" aria-hidden />
          </div>
          <p className="mt-4 max-w-xl text-sm leading-7 text-stone sm:text-base">
            ארבעה מבנים קלאסיים לטבעת אירוסין — וההבדל ביניהם, בשורה אחת.
          </p>

          <div className="mt-7 grid grid-cols-2 gap-x-4 gap-y-8 sm:mt-9 lg:grid-cols-4 lg:gap-6">
            {ringStyles.map(({ label, note, product }) => (
              <Link key={product.slug} href={`/product/${product.slug}`} className="group block">
                <div className="art-bg relative aspect-square overflow-hidden">
                  <Image
                    src={productImages(product)[0].src}
                    alt={`טבעת ${label} עם יהלום מעבדה`}
                    fill
                    sizes="(min-width: 1024px) 22vw, 50vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                  />
                </div>
                <h3 className="mt-4 font-display text-xl leading-snug transition-colors group-hover:text-gold-deep sm:text-2xl">
                  {label}
                </h3>
                <p className="mt-1 text-xs leading-5 text-stone sm:text-sm">{note}</p>
                <p className="mt-2 text-xs font-semibold tracking-[0.06em] text-ink-soft">
                  החל מ־{formatPrice(product.priceFrom)}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Shop by diamond shape ────────────────────────── */}
      <section className="section-shell py-14 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading title="בחרו את החיתוך" variant="centered" />
          <DiamondShapeSelector shapes={diamondShapes} />
        </div>
      </section>

      {/* ── Categories ───────────────────────────────────── */}
      <section className="section-gallery">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-24">
          <SectionHeading title="הקולקציה" />
          <div className="mt-7 grid grid-cols-2 gap-x-4 gap-y-7 lg:mt-10 lg:grid-cols-5 lg:gap-6">
            {categories.map((cat) => {
              return (
              <Link
                key={cat.slug}
                href={`/jewelry/${cat.slug}`}
                className={`group block ${cat.slug === "rings" ? "lg:col-span-2" : "lg:col-span-1"}`}
              >
                <div className={`art-bg relative overflow-hidden ${cat.slug === "rings" ? "aspect-[4/5] lg:aspect-[8/5]" : "aspect-[4/5]"}`}>
                  <Image
                    src={categoryImages[cat.slug]}
                    alt={cat.name}
                    fill
                    sizes={cat.slug === "rings" ? "(min-width: 1024px) 40vw, 50vw" : "(min-width: 1024px) 20vw, 50vw"}
                    className={`object-cover transition-transform duration-700 ease-out group-hover:scale-[1.035] ${cat.slug === "rings" ? "lg:object-[center_57%]" : ""}`}
                  />
                </div>
                <div className="flex items-center justify-center pt-3 lg:pt-4">
                  <h3 className="font-display text-lg lg:text-xl">{cat.name}</h3>
                </div>
              </Link>
            );
            })}
          </div>
        </div>
      </section>

      <section className="bg-linen" aria-labelledby="bespoke-inspiration-title">
        <div className="mx-auto grid max-w-7xl lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
          <div className="relative aspect-[4/5] overflow-hidden sm:aspect-[16/11] lg:aspect-[4/5]">
            <Image
              src={assetPath("/images/editorial/v2/bespoke-inspiration.webp")}
              alt="טבעת יהלום מזהב צהוב לצד סקיצה בעיפרון"
              fill
              sizes="(min-width: 1024px) 54vw, 100vw"
              className="object-cover"
            />
          </div>

          <div className="px-5 py-10 text-center sm:px-10 sm:py-14 lg:px-14 lg:py-16 lg:text-right xl:px-20">
            <h2
              id="bespoke-inspiration-title"
              className="font-display text-[2rem] font-medium leading-tight sm:text-4xl lg:text-[2.7rem]"
            >
              יש לכם השראה לתכשיט?
            </h2>
            <p className="mx-auto mt-4 max-w-md text-sm leading-7 text-stone sm:text-base sm:leading-8 lg:mx-0">
              שלחו לנו תמונה, סקיצה או רעיון. נתאים יחד את האבן, הזהב והפרופורציות ליצירה אישית משלכם.
            </p>
            <a
              href={waLink("היי, יש לי השראה לתכשיט ואשמח לבדוק אפשרות לעיצוב אישי")}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary mt-7 w-full sm:w-auto"
            >
              <WhatsAppIcon className="h-4 w-4" />
              שליחת ההשראה בוואטסאפ
            </a>
            <p className="mt-4 text-xs leading-5 text-stone">
              העיצוב יותאם אישית ולא יועתק אחד לאחד.
            </p>
          </div>
        </div>
      </section>

      <CustomerVoices reviews={reviews} />

      {/* ── Assurance panel ──────────────────────────────── */}
      {/* shell, not linen: the testimonials above are hidden in production
          until real reviews replace the demo ones, and two warm bands in a
          row would merge into one block */}
      <section className="section-shell border-y border-line" aria-labelledby="assurance-title">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
          <div className="max-w-2xl">
            <p className="eyebrow">קנייה בראש שקט</p>
            <h2
              id="assurance-title"
              className="mt-3 font-display text-[1.9rem] font-medium leading-tight sm:text-4xl"
            >
              מה שמסביב לתכשיט, סגור מראש.
            </h2>
            <p className="mt-4 text-sm leading-7 text-stone sm:text-base">
              ליווי אישי, תעודה לכל אבן ותנאים ברורים — כדי שההתלבטות תישאר על התכשיט עצמו.
            </p>
          </div>

          <div className="mt-9 grid border-t border-line sm:grid-cols-3 lg:mt-11">
            {assurancePanels.map((panel, index) => (
              <article
                key={panel.title}
                className="border-b border-line py-7 sm:border-b-0 sm:border-l sm:px-7 sm:first:pr-0 sm:last:border-l-0 lg:px-10"
              >
                <span className="font-display text-sm text-gold-deep" aria-hidden>
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-3 font-display text-xl font-medium leading-snug sm:text-2xl">
                  {panel.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-stone">{panel.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── Consultation CTA ─────────────────────────────── */}
      {/* Light, not a dark slab. None of the houses this site is measured
          against interrupts a white page with a near-black band; the dark
          button carries the emphasis on its own. */}
      <section className="section-gallery px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-6 text-center lg:flex-row lg:gap-8 lg:text-right">
          <div className="hidden h-px flex-1 bg-gold/30 lg:block" />
          <h2 className="max-w-lg font-display text-[1.9rem] font-medium leading-tight text-ink sm:text-4xl">
            נבחר יחד את היהלום הנכון.
          </h2>
          <span className="hidden h-2 w-2 rotate-45 border border-gold/50 lg:block" aria-hidden />
          <div className="flex w-full flex-col items-center justify-center gap-3 sm:w-auto sm:flex-row">
            <a
              href={waLink("היי, אשמח לייעוץ אישי בבחירת תכשיט")}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary w-full sm:w-auto"
            >
              <WhatsAppIcon className="h-4 w-4" />
              ייעוץ אישי בוואטסאפ
            </a>
            <Link href="/jewelry/rings" className="btn-outline hidden w-full sm:inline-flex sm:w-auto">
              טבעות יהלום
            </Link>
          </div>
        </div>
      </section>

      {/* ── LIBI Journal ───────────────────────────────── */}
      <section className="section-shell py-14 sm:py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between gap-6 border-b border-line pb-5 sm:pb-6">
            <h2 className="font-display text-[2rem] font-medium leading-none sm:text-4xl">לדעת מה בוחרים.</h2>
            <Link
              href="/journal"
              className="inline-flex min-h-9 shrink-0 items-center border-b border-gold/55 pb-1 text-xs font-semibold tracking-[0.05em] text-ink-soft transition-colors hover:border-gold hover:text-ink sm:text-sm"
            >
              לכל המדריכים
            </Link>
          </div>

          <div className="mt-7 grid gap-8 lg:mt-9 lg:grid-cols-[minmax(0,1.45fr)_minmax(18rem,0.55fr)] lg:gap-10">
            <Link href={`/journal/${featuredJournalGuide.slug}`} className="group block">
              <article>
                <div className="relative aspect-[3/2] overflow-hidden bg-mist">
                  <Image
                    src={assetPath(featuredJournalGuide.cover.src)}
                    alt={featuredJournalGuide.cover.alt}
                    fill
                    sizes="(min-width: 1024px) 67vw, 100vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.015]"
                  />
                </div>
                <p className="mt-4 text-[0.68rem] font-semibold tracking-[0.08em] text-stone">
                  {featuredJournalGuide.readingMinutes} דקות קריאה
                </p>
                <h3 className="mt-2 max-w-3xl font-display text-2xl font-medium leading-snug transition-colors group-hover:text-gold-deep sm:text-3xl">
                  {featuredJournalGuide.title}
                </h3>
              </article>
            </Link>

            <div className="border-t border-line lg:border-t-0">
              {secondaryJournalGuides.map((guide) => (
                <Link key={guide.slug} href={`/journal/${guide.slug}`} className="group block border-b border-line py-5 first:pt-5 lg:first:pt-0">
                  <article className="grid grid-cols-[7.25rem_minmax(0,1fr)] items-center gap-4 sm:grid-cols-[9rem_minmax(0,1fr)] lg:grid-cols-1 lg:items-start lg:gap-0">
                    <div className="relative aspect-[4/3] overflow-hidden bg-mist lg:aspect-[3/2]">
                      <Image
                        src={assetPath(guide.cover.src)}
                        alt={guide.cover.alt}
                        fill
                        sizes="(min-width: 1024px) 26vw, 144px"
                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                      />
                    </div>
                    <div className="min-w-0 lg:mt-3">
                      <p className="text-[0.65rem] font-semibold tracking-[0.07em] text-stone">{guide.readingMinutes} דקות קריאה</p>
                      <h3 className="mt-1.5 font-display text-lg font-medium leading-snug transition-colors group-hover:text-gold-deep sm:text-xl">
                        {guide.title}
                      </h3>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────── */}
      <section className="section-gallery py-14 sm:py-16 lg:py-24">
        <div className="mx-auto max-w-2xl px-4 sm:px-6">
          <SectionHeading title="פרטים שכדאי לדעת" variant="centered" />
          <div className="mt-8 border-t border-line sm:mt-10">
            {faqs.map((f) => (
              <details key={f.q} className="faq-item border-b border-line">
                <summary className="flex items-baseline justify-between gap-5 py-4 sm:py-5">
                  <span className="text-[0.95rem] font-semibold leading-7 text-ink">{f.q}</span>
                  <span className="faq-icon shrink-0 text-lg leading-none text-gold-deep" aria-hidden>
                    +
                  </span>
                </summary>
                <p className="max-w-xl pb-6 text-sm leading-7 text-stone sm:text-[0.95rem]">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(onlineStoreJsonLd()) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
      />
    </>
  );
}
