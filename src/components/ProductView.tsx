"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { metalNames, productImages, type Product, type Metal } from "@/data/products";
import { formatPrice, waLink } from "@/lib/site";
import { WhatsAppIcon } from "@/components/icons";

const METAL_SWATCH: Record<Metal, string> = {
  yellow: "#c9a35e",
  white: "#c4c8cd",
  rose: "#d6a289",
};

const confidenceItems = ["IGI/GIA", "משלוח מבוטח", "התאמת מידה ראשונה"];

const serviceItems = [
  {
    title: "משלוח ואספקה",
    detail:
      "משלוח מבוטח עד הבית בכל הארץ, באריזת מתנה מוקפדת. אספקה תוך 7–14 ימי עסקים; פריטים בהתאמה אישית — 3–4 שבועות.",
  },
  {
    title: "תעודה ואחריות",
    detail:
      "היהלום המרכזי מגיע עם תעודה גמולוגית בינלאומית (IGI/GIA). על התכשיט חלה אחריות מלאה על השיבוץ והמתכת, והתאמת מידה ראשונה כלולה.",
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
  const [selectedImage, setSelectedImage] = useState(0);
  const [showStickyCta, setShowStickyCta] = useState(false);

  const carat = product.carats[caratIdx];
  const images = productImages(product);
  const message = `היי, אשמח לפרטים על ${product.name} — ${carat.label}, ${metalNames[metal]} (${formatPrice(carat.price)})`;

  useEffect(() => {
    const update = () => setShowStickyCta(window.scrollY > 360);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  return (
    <>
      <div className="grid gap-9 pb-24 lg:grid-cols-[minmax(0,1.15fr)_minmax(23rem,0.85fr)] lg:items-start lg:gap-16 lg:pb-0 xl:gap-20">
        <section className="lg:sticky lg:top-28">
          <div className="art-bg relative aspect-square overflow-hidden bg-[#f7f6f1]">
            <Image
              key={images[selectedImage].src}
              src={images[selectedImage].src}
              alt={images[selectedImage].alt}
              fill
              priority
              sizes="(min-width: 1024px) 56vw, 100vw"
              className="animate-fade-up object-cover"
            />
          </div>

          {images.length > 1 && (
            <div className="mt-3 flex gap-3 sm:mt-4">
              {images.map((image, index) => (
                <button
                  key={image.src}
                  type="button"
                  onClick={() => setSelectedImage(index)}
                  aria-label={`הצגת תמונה ${index + 1} של ${product.name}`}
                  aria-pressed={selectedImage === index}
                  className={`relative aspect-square w-20 overflow-hidden bg-[#f7f6f1] transition-all sm:w-24 ${
                    selectedImage === index
                      ? "ring-1 ring-ink ring-offset-2 ring-offset-ivory"
                      : "opacity-70 hover:opacity-100"
                  }`}
                >
                  <Image src={image.src} alt="" fill sizes="96px" className="object-cover" />
                </button>
              ))}
            </div>
          )}
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
            <div className="mt-3 grid grid-cols-2 gap-2.5 sm:grid-cols-3">
              {product.metals.map((option) => (
                <button
                  key={option}
                  type="button"
                  onClick={() => setMetal(option)}
                  aria-label={metalNames[option]}
                  aria-pressed={metal === option}
                  className={`flex min-h-12 items-center gap-2.5 border px-3 py-2 text-sm transition-colors ${
                    metal === option
                      ? "border-gold-deep bg-[#f1ecdf] text-ink"
                      : "border-line bg-ivory text-ink-soft hover:border-stone"
                  }`}
                >
                  <span
                    className="h-4 w-4 shrink-0 rounded-full border border-black/10 shadow-inner"
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
            <div className="mt-3 grid grid-cols-2 gap-2.5 sm:grid-cols-3" dir="rtl">
              {product.carats.map((option, index) => (
                <button
                  key={option.label}
                  type="button"
                  onClick={() => setCaratIdx(index)}
                  aria-pressed={index === caratIdx}
                  className={`min-h-[82px] border px-3 py-3 text-right transition-colors sm:px-4 ${
                    index === caratIdx
                      ? "border-ink bg-ink text-ivory"
                      : "border-line bg-ivory text-ink hover:border-gold"
                  }`}
                >
                  <span className="block font-display text-lg leading-tight">{option.label}</span>
                  <span className={`mt-2 block text-sm font-semibold tracking-wide ${index === caratIdx ? "text-ivory" : "text-ink"}`}>
                    {formatPrice(option.price)}
                  </span>
                </button>
              ))}
            </div>
          </section>

          <div className="mt-8 border-t border-line pt-6 lg:mt-9">
            <a href={waLink(message)} target="_blank" rel="noopener noreferrer" className="btn-primary w-full">
              <WhatsAppIcon className="h-4 w-4" />
              בדיקת זמינות ומחיר בוואטסאפ
            </a>
            <p className="mt-3 text-center text-xs text-stone">ליווי אישי בבחירת האבן, הזהב והמידה.</p>
          </div>

          <section className="mt-9 border-y border-line py-6 lg:mt-10 lg:py-7">
            <dl className="grid grid-cols-2 gap-x-5 gap-y-5 sm:grid-cols-4">
              {[
                ["צבע", product.specs.color],
                ["ניקיון", product.specs.clarity],
                ["ליטוש", product.specs.cut],
                ["תעודה", product.specs.cert],
              ].map(([label, value]) => (
                <div key={label}>
                  <dt className="text-[0.68rem] font-semibold tracking-[0.09em] text-stone">{label}</dt>
                  <dd className="mt-1.5 text-sm font-semibold text-ink">{value}</dd>
                </div>
              ))}
            </dl>
            <p className="mt-7 max-w-xl text-sm leading-7 text-stone sm:text-[0.98rem]">{product.description}</p>
          </section>

          <div className="border-b border-line">
            {serviceItems.map((item) => (
              <details key={item.title} className="faq-item border-t border-line">
                <summary className="flex items-center justify-between gap-4 py-4">
                  <span className="text-sm font-semibold">{item.title}</span>
                  <span className="faq-icon text-lg text-gold" aria-hidden>
                    +
                  </span>
                </summary>
                <p className="max-w-xl pb-5 text-sm leading-7 text-stone">{item.detail}</p>
              </details>
            ))}
          </div>
        </section>
      </div>

      {showStickyCta && (
        <div className="fixed inset-x-0 bottom-0 z-40 border-t border-line bg-ivory/95 px-4 py-3 shadow-[0_-8px_24px_rgba(33,30,24,0.08)] backdrop-blur lg:hidden">
          <div className="mx-auto flex max-w-md items-center gap-3">
            <div className="min-w-0 flex-1">
              <p className="truncate text-xs text-stone">{product.name}</p>
              <p className="font-semibold tracking-wide">{formatPrice(carat.price)}</p>
            </div>
            <a
              href={waLink(message)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex shrink-0 items-center justify-center gap-2 bg-ink px-4 py-3 text-sm text-ivory"
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
