import Link from "next/link";
import { SmartImage } from "@/components/ui/SmartImage";
import { WhatsAppIcon } from "@/components/ui/Icons";
import { formatPriceFrom } from "@/lib/format";
import { productWhatsApp } from "@/lib/contact";
import { originLabel, type Product } from "@/data/products";

/**
 * Product tile. The whole card links to the product page (stretched link on
 * the title), while the WhatsApp quick-ask sits above it as its own control —
 * no nested interactive elements.
 */
export function ProductCard({
  product,
  sizes = "(min-width: 1024px) 25vw, 50vw",
}: {
  product: Product;
  sizes?: string;
}) {
  return (
    <article className="group relative flex h-full flex-col">
      <div className="zoom-frame relative overflow-hidden rounded-card bg-pearl">
        <SmartImage
          id={product.imageId}
          ratio="1 / 1"
          sizes={sizes}
          className="w-full"
        />

        <span
          className={`absolute top-2.5 start-2.5 rounded-full px-2.5 py-1 text-[0.6875rem] font-semibold ${
            product.origin === "lab"
              ? "bg-blush text-gold-deep"
              : "bg-white text-navy"
          }`}
        >
          {originLabel[product.origin]}
        </span>
      </div>

      <div className="flex flex-1 flex-col pt-3.5">
        <h3 className="text-[1.0625rem] leading-snug text-navy lg:text-[1.1875rem]">
          <Link
            href={`/jewelry/${product.slug}/`}
            className="after:absolute after:inset-0 after:content-[''] group-hover:text-gold-deep"
          >
            {product.name}
          </Link>
        </h3>

        <p className="mt-1 line-clamp-2 flex-1 text-[0.8125rem] leading-snug text-muted lg:text-[0.875rem]">
          {product.teaser}
        </p>

        <div className="mt-3 flex items-center justify-between gap-2">
          <span className="num text-[0.9375rem] font-bold text-navy">
            {formatPriceFrom(product.priceFrom)}
          </span>
          <span className="rounded border border-line px-1.5 py-0.5 text-[0.625rem] font-bold tracking-wider text-muted">
            {product.certificate}
          </span>
        </div>

        <a
          href={productWhatsApp(product.name)}
          target="_blank"
          rel="noopener noreferrer"
          className="relative z-10 mt-3 inline-flex min-h-10 items-center justify-center gap-1.5 rounded-full border border-whatsapp/30 text-[0.8125rem] font-semibold text-whatsapp transition-colors hover:bg-whatsapp hover:text-white"
        >
          <WhatsAppIcon className="h-4 w-4" />
          לפרטים בוואטסאפ
        </a>
      </div>
    </article>
  );
}
