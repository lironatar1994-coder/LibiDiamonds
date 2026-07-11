import Link from "next/link";
import Image from "next/image";
import ProductCard from "@/components/ProductCard";
import { WhatsAppIcon } from "@/components/icons";
import {
  categories,
  products,
  type CategorySlug,
  type Product,
} from "@/data/products";
import { site, waLink, defaultWaMessage, assetPath } from "@/lib/site";

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

/* Mobile: a composed two-column edit; desktop: the complete grid. */
function ProductRail({
  items,
  desktopCols,
}: {
  items: Product[];
  desktopCols: 3 | 4;
}) {
  return (
        <div
          className={`mt-7 grid grid-cols-2 gap-x-3 gap-y-8 sm:mt-10 sm:gap-x-5 lg:mt-12 lg:gap-x-6 lg:gap-y-10 ${
        desktopCols === 3 ? "lg:grid-cols-3" : "lg:grid-cols-4"
      }`}
    >
      {items.map((p, index) => (
        <div
          key={p.slug}
          className={index > 3 ? "hidden lg:block" : "block"}
        >
          <ProductCard product={p} />
        </div>
      ))}
    </div>
  );
}

const categoryImages: Record<CategorySlug, string> = {
  rings: assetPath("/images/products/aura-solitaire-ring.webp"),
  earrings: assetPath("/images/products/stella-diamond-studs.webp"),
  necklaces: assetPath("/images/products/riviera-tennis-necklace.webp"),
  bracelets: assetPath("/images/products/icon-tennis-bracelet.webp"),
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

export default function HomePage() {
  const bestsellers = products.filter((p) => p.bestseller).slice(0, 6);

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <>
      {/* ── Hero ─────────────────────────────────────────── */}
      <section className="hero-editorial relative isolate overflow-hidden border-b border-line">
        <div className="absolute inset-0 lg:hidden">
          <Image
            src={assetPath("/images/hero/home-hero-ring-mobile-portrait.webp")}
            alt="טבעת יהלום מעבדה בזהב צהוב על שיש בהיר"
            fill
            priority
            unoptimized
            sizes="100vw"
            className="hero-settle object-cover object-[center_58%]"
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(250,248,243,0.9)_0%,rgba(250,248,243,0.7)_34%,rgba(250,248,243,0.08)_62%,rgba(250,248,243,0.78)_100%)]" />
        </div>

        <div className="relative z-10 mx-auto grid min-h-[calc(74svh-60px)] max-w-7xl items-start px-4 py-4 sm:px-6 lg:min-h-[min(82vh,760px)] lg:grid-cols-[0.86fr_1.14fr] lg:items-center lg:gap-10 lg:px-8 lg:py-14">
          <div className="pt-3 text-center sm:pt-10 lg:order-first lg:max-w-lg lg:pt-0 lg:text-right">
            <h1
              className="cascade mx-auto max-w-[8ch] font-display text-[2.75rem] font-light leading-[1.04] text-ink sm:text-6xl lg:mx-0 xl:text-7xl"
              style={{ animationDelay: "90ms" }}
            >
              נוכחות אמיתית.
            </h1>
            <p
              className="cascade mx-auto mt-5 hidden max-w-[26rem] text-sm leading-7 tracking-[0.08em] text-stone sm:text-base lg:mx-0 lg:block"
              style={{ animationDelay: "150ms" }}
            >
              יהלומי מעבדה מוסמכים בזהב 14K/18K.
            </p>
            <div
              className="cascade mt-5 flex flex-col items-center gap-3 sm:mt-7 lg:mt-10 lg:flex-row lg:justify-start"
              style={{ animationDelay: "220ms" }}
            >
              <Link href="/jewelry/rings" className="btn-primary px-14">
                גלו טבעות יהלום
              </Link>
              <a
                href={waLink(defaultWaMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp hero-desktop-inline"
              >
                <WhatsAppIcon className="h-4 w-4" />
                ייעוץ אישי בוואטסאפ
              </a>
            </div>
            <p
              className="cascade mx-auto mt-5 hidden text-xs tracking-[0.12em] text-stone lg:mx-0 lg:block"
              style={{ animationDelay: "280ms" }}
            >
              IGI/GIA · אחריות מלאה · משלוח מבוטח
            </p>
          </div>

          <div className="animate-fade-up relative hidden lg:order-last lg:block lg:min-h-[520px]">
            <div className="hero-ring-light" />
            <div className="absolute left-[48%] top-1/2 z-10 w-[132%] max-w-none -translate-x-1/2 -translate-y-1/2 sm:w-[104%] lg:w-[114%]">
              <Image
                src={assetPath("/images/hero/home-hero-ring-flat-cutout.webp")}
                alt="טבעת יהלום מעבדה מרכזית בזהב צהוב"
                width={1143}
                height={643}
                priority
                unoptimized
                sizes="(min-width: 1024px) 58vw, 100vw"
                className="hero-settle h-auto w-full"
              />
            </div>
          </div>
        </div>

      </section>

      {/* ── Bestsellers ───────────────────────────────────── */}
      <section className="section-gallery border-b border-line py-11 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading title="הבחירות של LIBI" />
          <ProductRail items={bestsellers} desktopCols={3} />
        </div>
      </section>

      {/* ── Shop by diamond shape ────────────────────────── */}
      <section className="section-champagne border-y border-line py-11 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading title="בחרו את החיתוך" variant="centered" />
          <div className="mt-6 grid grid-cols-3 gap-x-2 gap-y-5 sm:mt-8 sm:gap-x-6 sm:gap-y-8 lg:mt-11 lg:grid-cols-6 lg:gap-5">
            {diamondShapes.map((shape) => (
              <a
                key={shape.type}
                href={waLink(`היי, אשמח לבדוק יהלום בצורת ${shape.name}`)}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center justify-center px-1 py-1 text-center transition-colors lg:border-y lg:border-gold/20 lg:px-2 lg:py-7 lg:hover:border-gold/80"
              >
                <div className="relative h-[78px] w-[78px] min-[390px]:h-[86px] min-[390px]:w-[86px] sm:h-[118px] sm:w-[118px] lg:h-[124px] lg:w-[124px]">
                  <Image
                    src={shape.image}
                    alt={`יהלום בחיתוך ${shape.name}`}
                    fill
                    sizes="(min-width: 1024px) 124px, (min-width: 640px) 118px, 92px"
                    className="mix-blend-multiply object-contain transition-transform duration-500 ease-out group-hover:scale-[1.04]"
                  />
                </div>
                <div>
                  <h3 className="mt-2 font-display text-base text-ink sm:mt-3 sm:text-xl">{shape.name}</h3>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── Categories ───────────────────────────────────── */}
      <section className="section-gallery border-b border-line">
        <div className="mx-auto max-w-7xl px-4 py-11 sm:px-6 lg:px-8 lg:py-20">
          <SectionHeading title="הקולקציה" />
          <div className="mt-7 grid grid-cols-2 gap-x-3 gap-y-6 lg:mt-12 lg:grid-cols-4 lg:gap-6">
            {categories.map((cat) => {
              return (
              <Link
                key={cat.slug}
                href={`/jewelry/${cat.slug}`}
                className="group block"
              >
                <div className="art-bg-dark relative aspect-[4/5] overflow-hidden border border-line/70 transition-colors duration-300 group-hover:border-gold/55">
                  <Image
                    src={categoryImages[cat.slug]}
                    alt={cat.name}
                    fill
                    sizes="(min-width: 1024px) 25vw, 50vw"
                    className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
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

      {/* ── Trust strip ──────────────────────────────────── */}
      <section className="section-proof border-y border-line">
        <div className="mx-auto flex max-w-3xl flex-wrap items-center justify-center gap-x-3 gap-y-1 px-5 py-4 text-center sm:px-8 lg:py-6">
          {["יהלומים מוסמכים", "זהב 14K/18K", "משלוח מבוטח", "אחריות מלאה"].map((item, index) => (
            <span key={item} className="flex items-center gap-3 text-[0.7rem] font-semibold tracking-[0.08em] text-ink-soft sm:text-sm">
              {index > 0 && <span className="hidden h-1 w-1 rotate-45 bg-gold/65 sm:block" aria-hidden />}
              {item}
            </span>
          ))}
        </div>
      </section>

      {/* ── Consultation CTA ─────────────────────────────── */}
      <section className="section-cta-signature border-y border-line px-4 py-9 sm:px-6 lg:px-8 lg:py-14">
        <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-5 text-center lg:flex-row lg:gap-8 lg:text-right">
          <div className="hidden h-px flex-1 bg-gold/30 lg:block" />
          <h2 className="max-w-lg font-display text-2xl font-medium leading-tight sm:text-4xl">
            מתלבטים בין דגמים?
          </h2>
          <span className="hidden h-2 w-2 rotate-45 border border-gold/70 lg:block" aria-hidden />
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
            <Link href="/jewelry/rings" className="btn-outline hidden w-full border-ink-soft/65 sm:inline-flex sm:w-auto">
              טבעות יהלום
            </Link>
          </div>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────── */}
      <section className="border-t border-line bg-cream/45 py-8 lg:py-14">
        <div className="mx-auto max-w-2xl px-4 sm:px-6">
          <h2 className="text-center font-display text-xl font-medium sm:text-3xl">
            פרטים שכדאי לדעת
          </h2>
          <div className="mt-5 sm:mt-7">
            {faqs.map((f, index) => (
              <details key={f.q} className={`faq-item border-b border-line ${index > 2 ? "hidden lg:block" : "block"}`}>
                <summary className="flex items-center justify-between gap-4 py-3.5 sm:py-4">
                  <span className="text-sm font-semibold leading-6 text-ink-soft">{f.q}</span>
                  <span className="faq-icon shrink-0 text-base text-gold" aria-hidden>
                    +
                  </span>
                </summary>
                <p className="pb-5 text-sm leading-7 text-stone">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "JewelryStore",
            name: site.name,
            url: site.domain,
            email: site.email,
            description: site.tagline,
          }),
        }}
      />
    </>
  );
}
