"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import type { ProductGalleryImage } from "@/data/products";

/**
 * Phones get a swipeable snap rail with dots — tapping 80px thumbnails is a
 * poor way to browse jewellery on a small screen. From lg up it is the
 * conventional large image plus a thumbnail row.
 */
export default function ProductGallery({
  images,
  productName,
}: {
  images: ProductGalleryImage[];
  productName: string;
}) {
  const [selected, setSelected] = useState(0);
  const [railIndex, setRailIndex] = useState(0);
  const railRef = useRef<HTMLDivElement>(null);

  // track which slide the rail has settled on, for the dots
  useEffect(() => {
    const rail = railRef.current;
    if (!rail) return;

    const onScroll = () => {
      const width = rail.clientWidth;
      if (!width) return;
      // scrollLeft runs negative in RTL, so compare on magnitude
      const index = Math.round(Math.abs(rail.scrollLeft) / width);
      setRailIndex(Math.min(index, images.length - 1));
    };

    rail.addEventListener("scroll", onScroll, { passive: true });
    return () => rail.removeEventListener("scroll", onScroll);
  }, [images.length]);

  const scrollToSlide = (index: number) => {
    const rail = railRef.current;
    if (!rail) return;
    const direction = getComputedStyle(rail).direction === "rtl" ? -1 : 1;
    rail.scrollTo({ left: direction * index * rail.clientWidth, behavior: "smooth" });
  };

  return (
    <>
      {/* ── phones: swipe rail ─────────────────────────────── */}
      <div className="lg:hidden">
        <div
          ref={railRef}
          className="no-scrollbar art-bg -mx-4 flex snap-x snap-mandatory overflow-x-auto sm:mx-0"
          role="group"
          aria-label={`תמונות של ${productName}`}
        >
          {images.map((image, index) => (
            <div key={image.src} className="relative aspect-square w-full shrink-0 snap-center">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                priority={index === 0}
                fetchPriority={index === 0 ? "high" : "auto"}
                sizes="100vw"
                className="object-cover"
              />
            </div>
          ))}
        </div>

        {images.length > 1 && (
          <div className="mt-4 flex items-center justify-center gap-2">
            {images.map((image, index) => (
              <button
                key={image.src}
                type="button"
                onClick={() => scrollToSlide(index)}
                aria-label={`תמונה ${index + 1} מתוך ${images.length}`}
                aria-current={index === railIndex ? "true" : undefined}
                className="flex h-9 w-6 items-center justify-center"
              >
                <span
                  className={`block h-1.5 rounded-full transition-all duration-300 ${
                    index === railIndex ? "w-5 bg-gold-deep" : "w-1.5 bg-line"
                  }`}
                />
              </button>
            ))}
          </div>
        )}
      </div>

      {/* ── lg and up: main image + thumbnails ─────────────── */}
      <div className="hidden lg:block">
        <div className="art-bg relative aspect-square overflow-hidden bg-mist">
          <Image
            key={images[selected].src}
            src={images[selected].src}
            alt={images[selected].alt}
            fill
            priority
            fetchPriority="high"
            sizes="56vw"
            className="animate-fade-up object-cover"
          />
        </div>

        {images.length > 1 && (
          <div className="mt-4 flex gap-3">
            {images.map((image, index) => (
              <button
                key={image.src}
                type="button"
                onClick={() => setSelected(index)}
                aria-label={`הצגת תמונה ${index + 1} של ${productName}`}
                aria-pressed={selected === index}
                className={`relative aspect-square w-24 overflow-hidden bg-mist transition-all duration-300 ${
                  selected === index
                    ? "ring-1 ring-ink ring-offset-2 ring-offset-ivory"
                    : "opacity-65 hover:opacity-100 hover:ring-1 hover:ring-gold/50 hover:ring-offset-2 hover:ring-offset-ivory"
                }`}
              >
                <Image src={image.src} alt="" fill sizes="96px" className="object-cover" />
              </button>
            ))}
          </div>
        )}
      </div>
    </>
  );
}
