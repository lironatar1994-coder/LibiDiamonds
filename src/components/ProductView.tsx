"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import CaratScale from "@/components/CaratScale";
import ProductGallery from "@/components/ProductGallery";
import { metalNames, productImages, shapeNames, type Product, type Metal } from "@/data/products";
import { assetPath, formatPrice, waLink } from "@/lib/site";
import { WhatsAppIcon } from "@/components/icons";

const METAL_SWATCH: Record<Metal, string> = {
  yellow: "#c9a35e",
  white: "#c4c8cd",
  rose: "#d6a289",
};

const confidenceItems = ["IGI/GIA", "משלוח מבוטח", "התאמת מידה ראשונה"];

const libiStandardItems = [
  {
    title: "בחירה לפי המראה, לא רק לפי המספרים",
    detail:
      "אנחנו מחברים בין נתוני האבן לבין התוצאה על היד: קראט, צבע, ניקיון וליטוש נבחנים לצד מבנה השיבוץ, גוון הזהב והתקציב.",
  },
  {
    title: "התאמה לפני תחילת העבודה",
    detail:
      "משקל האבן, גוון הזהב והמידה נסגרים יחד, כדי שהפרופורציות, גובה השיבוץ ונוחות הענידה יתאימו לבחירה הסופית.",
  },
  {
    title: "שקיפות מלאה בהזמנה",
    detail:
      "לפני האישור מקבלים סיכום ברור של האבן והתכשיט, המחיר הסופי, סוג התעודה ומועד האספקה המשוער — בלי פרטים שנשארים פתוחים.",
  },
  {
    title: "ליווי גם אחרי המסירה",
    detail:
      "התכשיט מגיע עם תעודה גמולוגית לאבן המרכזית, אחריות על השיבוץ והמתכת, משלוח מבוטח והתאמת מידה ראשונה.",
  },
];

const serviceItems = [
  {
    title: "משלוח ואספקה",
    detail:
      "משלוח מבוטח עד הבית בכל הארץ, באריזת מתנה מוקפדת. אספקה תוך 7–14 ימי עסקים; פריטים בהתאמה אישית — 3–4 שבועות.",
  },
  {
    title: "החזרות והחלפות",
    detail:
      "ניתן להחזיר או להחליף פריט מהקולקציה תוך 14 יום מקבלתו, במצבו המקורי. פריטים בהתאמה אישית — בתיאום מראש.",
  },
];

export default function ProductView({ product }: { product: Product }) {
  const [metal, setMetal] = useState<Metal>(product.metals[0]);
  const [caratIdx, setCaratIdx] = useState(0);
  const [showStickyCta, setShowStickyCta] = useState(false);

  const carat = product.carats[caratIdx];
  const images = productImages(product);
  const isRing = product.category === "rings";
  const message = [
    `היי, אשמח לפרטים על ${product.name}.`,
    `משקל: ${carat.label}`,
    `גוון: ${metalNames[metal]}`,
    `מחיר באתר: ${formatPrice(carat.price)}`,
    isRing ? "מידה: (עדיין לא בטוח/ה)" : null,
  ]
    .filter(Boolean)
    .join("\n");

  useEffect(() => {
    const update = () => setShowStickyCta(window.scrollY > 360);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  return (
    <>
      <div className="grid gap-9 lg:grid-cols-[minmax(0,1.15fr)_minmax(23rem,0.85fr)] lg:items-start lg:gap-16 xl:gap-20">
        <section className="lg:sticky lg:top-28">
          <ProductGallery images={images} productName={product.name} />
        </section>

        <section className="min-w-0">
          <header className="border-b border-line pb-6 lg:pb-7">
            <h1 className="font-display text-[2.15rem] font-medium leading-[1.1] sm:text-5xl lg:text-[3.15rem]">
              {product.name}
            </h1>
            <p className="mt-3 text-sm tracking-[0.03em] text-stone sm:text-base">{product.subtitle}</p>
            <div className="mt-7 lg:mt-9">
              <div>
                <p className="text-xs font-semibold tracking-[0.12em] text-stone">החל מ־</p>
                <p className="mt-1 font-display text-3xl font-medium tracking-wide text-ink sm:text-4xl">
                  {formatPrice(carat.price)}
                </p>
              </div>
            </div>
          </header>

          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 border-b border-line py-4 text-[0.7rem] font-semibold tracking-[0.08em] text-ink-soft sm:gap-x-5 sm:text-xs">
            {confidenceItems.map((item, index) => (
              <span key={item} className="flex items-center gap-x-4 sm:gap-x-5">
                {index > 0 && <span className="h-1 w-1 rotate-45 bg-gold/70" aria-hidden />}
                {item}
              </span>
            ))}
          </div>

          <section className="pt-7 lg:pt-8">
            <div className="flex items-baseline justify-between gap-4">
              <p className="text-sm font-semibold">גוון הזהב</p>
              <p className="text-xs text-stone">{metalNames[metal]}</p>
            </div>
            {/* three-up on phones too — two-up stranded the third swatch */}
            <div className="mt-3 grid grid-cols-3 gap-2 sm:gap-2.5">
              {product.metals.map((option) => (
                <button
                  key={option}
                  type="button"
                  onClick={() => setMetal(option)}
                  aria-label={metalNames[option]}
                  aria-pressed={metal === option}
                  className={`flex min-h-12 items-center justify-center gap-2 border px-2 py-2 text-[0.82rem] transition-colors sm:justify-start sm:gap-2.5 sm:px-3 sm:text-sm ${
                    metal === option
                      ? "border-gold-deep bg-linen text-ink"
                      : "border-line bg-shell text-ink-soft hover:border-stone"
                  }`}
                >
                  <span
                    className="h-3.5 w-3.5 shrink-0 rounded-full border border-black/10 shadow-inner sm:h-4 sm:w-4"
                    style={{ backgroundColor: METAL_SWATCH[option] }}
                    aria-hidden
                  />
                  <span className="whitespace-nowrap">{metalNames[option]}</span>
                </button>
              ))}
            </div>
          </section>

          <section className="pt-7 lg:pt-8">
            <p className="text-sm font-semibold">משקל היהלום</p>
            <div
              /* column count follows the option count so a lone weight is
                 never orphaned on a second row */
              className={`mt-3 grid gap-2.5 ${
                product.carats.length % 3 === 0 ? "grid-cols-3" : "grid-cols-2"
              }`}
              dir="rtl"
            >
              {product.carats.map((option, index) => (
                <button
                  key={option.label}
                  type="button"
                  onClick={() => setCaratIdx(index)}
                  aria-pressed={index === caratIdx}
                  className={`min-h-[82px] border px-3 py-3 text-right transition-colors sm:px-4 ${
                    index === caratIdx
                      ? "border-ink bg-ink text-white"
                      : "border-line bg-shell text-ink hover:border-gold"
                  }`}
                >
                  <span className="block font-display text-lg leading-tight">{option.label}</span>
                  <span className={`mt-2 block text-sm font-semibold tracking-wide ${index === caratIdx ? "text-white" : "text-ink"}`}>
                    {formatPrice(option.price)}
                  </span>
                </button>
              ))}
            </div>

            <CaratScale options={product.carats} selectedIndex={caratIdx} />
          </section>

          <div className="mt-8 border-t border-line pt-6 lg:mt-9">
            {/* what the enquiry will actually say, before it is sent */}
            <dl className="mb-5 border border-line bg-white px-4 py-4 text-sm sm:px-5">
              <div className="flex items-baseline justify-between gap-4 border-b border-line/70 pb-2.5">
                <dt className="text-xs font-semibold tracking-[0.1em] text-stone">הבחירה שלכם</dt>
                <dd className="text-xs text-stone">{product.subtitle}</dd>
              </div>
              <div className="flex items-baseline justify-between gap-4 pt-2.5">
                <dt className="text-ink-soft">{carat.label}</dt>
                <dd className="text-ink-soft">{metalNames[metal]}</dd>
              </div>
              <div className="mt-2.5 flex items-baseline justify-between gap-4 border-t border-line/70 pt-2.5">
                <dt className="text-xs font-semibold tracking-[0.1em] text-stone">מחיר</dt>
                <dd className="font-display text-xl font-medium text-ink">{formatPrice(carat.price)}</dd>
              </div>
            </dl>

            <a href={waLink(message)} target="_blank" rel="noopener noreferrer" className="btn-primary w-full">
              <WhatsAppIcon className="h-4 w-4" />
              בדיקת זמינות ומחיר בוואטסאפ
            </a>
            <p className="mt-3 text-center text-xs leading-5 text-stone">
              ההודעה נפתחת מוכנה עם הבחירה שלכם — בלי התחייבות.
            </p>

            <ul className="mt-5 divide-y divide-line/70 border-y border-line/70 text-xs leading-5">
              <li className="flex items-start gap-2.5 py-3">
                <span className="mt-1.5 h-1 w-1 shrink-0 rotate-45 bg-gold" aria-hidden />
                <span className="text-ink-soft">
                  <strong className="font-semibold text-ink">אספקה תוך 7–14 ימי עסקים</strong> — משלוח מבוטח
                  עד הבית, ללא עלות.
                </span>
              </li>
              {isRing && (
                <li className="flex items-start gap-2.5 py-3">
                  <span className="mt-1.5 h-1 w-1 shrink-0 rotate-45 bg-gold" aria-hidden />
                  <span className="text-ink-soft">
                    <strong className="font-semibold text-ink">עוד לא יודעים מידה?</strong> נמדוד יחד לפני
                    הייצור, והתאמת מידה ראשונה — עלינו.
                  </span>
                </li>
              )}
              <li className="flex items-start gap-2.5 py-3">
                <span className="mt-1.5 h-1 w-1 shrink-0 rotate-45 bg-gold" aria-hidden />
                <span className="text-ink-soft">
                  <strong className="font-semibold text-ink">תעודה גמולוגית</strong> של {product.specs.cert} מצורפת
                  לאבן המרכזית.
                </span>
              </li>
            </ul>
          </div>

          <section className="mt-9 border-y border-line py-6 lg:mt-10 lg:py-7">
            <h2 className="text-sm font-semibold">מפרט</h2>
            <dl className="mt-4 grid grid-cols-2 gap-x-5 gap-y-5 sm:grid-cols-4">
              {[
                ["משקל", carat.label],
                product.diamondShape ? ["צורה", shapeNames[product.diamondShape]] : null,
                ["מתכת", metalNames[metal]],
                carat.stoneMm ? ["קוטר משוער", `${carat.stoneMm} מ״מ`] : null,
                ["צבע", product.specs.color],
                ["ניקיון", product.specs.clarity],
                ["ליטוש", product.specs.cut],
                ["תעודה", product.specs.cert],
              ]
                .filter((row): row is [string, string] => row !== null)
                .map(([label, value]) => (
                  <div key={label}>
                    <dt className="text-[0.68rem] font-semibold tracking-[0.09em] text-stone">{label}</dt>
                    <dd className="mt-1.5 text-sm font-semibold text-ink">{value}</dd>
                  </div>
                ))}
            </dl>
            <p className="mt-7 max-w-xl text-sm leading-7 text-stone sm:text-[0.98rem]">{product.description}</p>
            <Link
              href="/journal/why-choose-a-lab-diamond"
              className="mt-5 inline-flex min-h-9 items-center border-b border-gold/55 pb-1 text-xs font-semibold tracking-[0.06em] text-ink-soft transition-colors hover:border-gold hover:text-ink"
            >
              למה לבחור יהלום מעבדה?
            </Link>
          </section>

          <section className="border-b border-line py-8 lg:py-10" aria-labelledby="order-includes-title">
            <h2 id="order-includes-title" className="font-display text-2xl font-medium sm:text-3xl">
              מה מצורף להזמנה.
            </h2>
            <div className="mt-5 grid gap-5 sm:grid-cols-2">
              <figure>
                <div className="relative aspect-[4/3] overflow-hidden bg-mist">
                  <Image
                    src={assetPath("/images/trust/v1/libi-packaging-mockup.webp")}
                    alt="הדמיה של אריזת LIBI DIAMONDS בגוון שנהב"
                    fill
                    sizes="(min-width: 1024px) 21vw, (min-width: 640px) 46vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <figcaption className="mt-3">
                  <span className="block text-xs font-semibold tracking-[0.08em] text-ink-soft">הדמיית אריזה</span>
                  <span className="mt-1 block text-xs leading-5 text-stone">האריזה הסופית עשויה להשתנות בפרטים הקטנים.</span>
                </figcaption>
              </figure>

              <figure>
                <div className="relative aspect-[4/3] overflow-hidden bg-mist">
                  <Image
                    src={assetPath("/images/trust/v1/certificate-sample-mockup.webp")}
                    alt="דוגמה כללית למבנה של תעודה גמולוגית"
                    fill
                    sizes="(min-width: 1024px) 21vw, (min-width: 640px) 46vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <figcaption className="mt-3">
                  <span className="block text-xs font-semibold tracking-[0.08em] text-ink-soft">דוגמה להמחשה בלבד</span>
                  <span className="mt-1 block text-xs leading-5 text-stone">התעודה בפועל מותאמת ליהלום שנבחר ומצורפת למסירה.</span>
                </figcaption>
              </figure>
            </div>
          </section>

          <div className="border-b border-line">
            {serviceItems.map((item) => (
              <details key={item.title} className="faq-item border-t border-line">
                <summary className="flex items-center justify-between gap-4 py-4">
                  <span className="text-sm font-semibold">{item.title}</span>
                  <span className="faq-icon text-lg text-gold-deep" aria-hidden>
                    +
                  </span>
                </summary>
                <p className="max-w-xl pb-5 text-sm leading-7 text-stone">{item.detail}</p>
              </details>
            ))}
          </div>
        </section>
      </div>

      <section
        className="mt-14 mb-24 border-y border-line py-10 sm:mt-16 sm:py-12 lg:mt-20 lg:mb-0 lg:grid lg:grid-cols-[minmax(15rem,0.72fr)_minmax(0,1.28fr)] lg:gap-16 lg:py-16"
        aria-labelledby="libi-standard-title"
      >
        <div>
          <p className="text-[0.68rem] font-semibold tracking-[0.2em] text-gold-deep">LIBI DIAMONDS</p>
          <h2 id="libi-standard-title" className="mt-3 max-w-xs font-display text-3xl font-medium leading-tight sm:text-4xl">
            הסטנדרט של LIBI.
          </h2>
        </div>

        <ol className="mt-8 border-t border-line lg:mt-0">
          {libiStandardItems.map((item, index) => (
            <li
              key={item.title}
              className="grid grid-cols-[2rem_minmax(0,1fr)] gap-3 border-b border-line py-5 sm:grid-cols-[2.5rem_minmax(10rem,0.72fr)_minmax(0,1.28fr)] sm:gap-5 sm:py-6"
            >
              <span className="pt-0.5 font-display text-sm text-gold-deep" aria-hidden>
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="font-display text-xl font-medium leading-snug sm:text-[1.35rem]">{item.title}</h3>
              <p className="col-start-2 mt-1 text-sm leading-7 text-stone sm:col-start-3 sm:mt-0">{item.detail}</p>
            </li>
          ))}
        </ol>
      </section>

      {showStickyCta && (
        <div className="animate-rise-in fixed inset-x-0 bottom-0 z-40 border-t border-line bg-shell/95 px-4 py-3 shadow-[0_-8px_24px_rgba(33,30,24,0.08)] backdrop-blur lg:hidden">
          <div className="mx-auto flex max-w-md items-center gap-3">
            <div className="min-w-0 flex-1">
              <p className="truncate text-xs text-stone">
                {carat.label} · {metalNames[metal]}
              </p>
              <p className="font-semibold tracking-wide">{formatPrice(carat.price)}</p>
            </div>
            <a
              href={waLink(message)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-12 shrink-0 items-center justify-center gap-2 bg-ink px-4 py-3 text-sm text-white transition-colors hover:bg-gold-deep"
            >
              <WhatsAppIcon className="h-4 w-4" />
              בדיקת זמינות
            </a>
          </div>
        </div>
      )}
    </>
  );
}
