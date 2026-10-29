import fs from "node:fs";
import path from "node:path";
import Image from "next/image";
import { getImage, stockUrl } from "@/data/images";

/**
 * Resolves an image manifest entry to the best available source:
 *
 *   1. the brand's own photo in /public (always wins),
 *   2. the interim Unsplash still life from the manifest,
 *   3. a soft pearl placeholder with the identical aspect ratio.
 *
 * Server component — the fs check runs at build/export time only.
 */

type SmartImageProps = {
  /** Image manifest id from data/images.ts */
  id: string;
  /** CSS aspect-ratio override, e.g. "3 / 4". Defaults to the manifest dimensions. */
  ratio?: string;
  className?: string;
  /** Fetch priority for above-the-fold images */
  priority?: boolean;
  sizes?: string;
  /** Kept for API compatibility; placeholders no longer print their id */
  showLabel?: boolean;
  /** Fill the parent element instead of holding its own aspect ratio */
  fillParent?: boolean;
  /** object-fit for the photo. "contain" suits product shots on a pale stage. */
  fit?: "cover" | "contain";
};

const STOCK_WIDTHS = [480, 720, 960, 1280, 1680, 2200];

function fileExists(src: string): boolean {
  try {
    return fs.existsSync(path.join(process.cwd(), "public", src));
  } catch {
    return false;
  }
}

export function SmartImage({
  id,
  ratio,
  className = "",
  priority = false,
  sizes = "100vw",
  fillParent = false,
  fit = "cover",
}: SmartImageProps) {
  const entry = getImage(id);
  const exists = fileExists(entry.src);

  const wrapperStyle = fillParent
    ? undefined
    : { aspectRatio: ratio ?? `${entry.width} / ${entry.height}` };
  const wrapperClass = fillParent
    ? `absolute inset-0 overflow-hidden ${className}`
    : `relative overflow-hidden ${className}`;
  const fitClass = fit === "contain" ? "object-contain" : "object-cover";

  if (exists) {
    return (
      <div className={wrapperClass} style={wrapperStyle}>
        <Image
          src={entry.src}
          alt={entry.alt}
          fill
          priority={priority}
          sizes={sizes}
          className={fitClass}
          style={entry.focus ? { objectPosition: entry.focus } : undefined}
        />
      </div>
    );
  }

  if (entry.stock) {
    const stock = entry.stock;
    const srcSet = STOCK_WIDTHS.map((w) => `${stockUrl(stock, w)} ${w}w`).join(
      ", ",
    );

    return (
      <div className={wrapperClass} style={wrapperStyle}>
        {/* Remote CDN image with its own responsive srcset; next/image adds
            nothing here under `images.unoptimized`. */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={stockUrl(stock, 1280)}
          srcSet={srcSet}
          sizes={sizes}
          alt={entry.alt}
          loading={priority ? "eager" : "lazy"}
          fetchPriority={priority ? "high" : "auto"}
          decoding="async"
          className={`absolute inset-0 h-full w-full ${fitClass}`}
          style={entry.focus ? { objectPosition: entry.focus } : undefined}
        />
      </div>
    );
  }

  return (
    <div
      className={wrapperClass}
      style={wrapperStyle}
      role="img"
      aria-label={entry.alt}
    >
      <div className="ph">
        <svg
          viewBox="0 0 64 64"
          fill="none"
          aria-hidden="true"
          className="absolute start-1/2 top-1/2 h-10 w-10 -translate-x-1/2 -translate-y-1/2 text-gold/60 rtl:translate-x-1/2"
        >
          <path
            d="M12 24 32 6l20 18-20 34L12 24Z"
            stroke="currentColor"
            strokeWidth="1"
          />
          <path
            d="M12 24h40M32 6l-8 18 8 34 8-34-8-18"
            stroke="currentColor"
            strokeWidth="0.6"
          />
        </svg>
      </div>
    </div>
  );
}
