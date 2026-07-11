import Link from "next/link";
import Image from "next/image";
import type { Product } from "@/data/products";
import { productImage } from "@/data/products";
import { formatPrice } from "@/lib/site";

export default function ProductCard({ product }: { product: Product }) {
  const badge = product.featured && !product.bestseller ? "בחירת הסטודיו" : null;

  return (
    <Link href={`/product/${product.slug}`} className="group block">
      <div className="art-bg product-card-frame relative aspect-square overflow-hidden border border-line/80 bg-ivory transition-colors duration-300 group-hover:border-gold/60">
        {badge && (
          <span className="absolute right-3 top-3 z-10 border border-gold/25 bg-ivory/88 px-3 py-1 text-[0.66rem] font-semibold tracking-[0.1em] text-gold-deep backdrop-blur-sm">
            {badge}
          </span>
        )}
        <Image
          src={productImage(product)}
          alt={product.name}
          fill
          sizes="(min-width: 1024px) 33vw, 50vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.025]"
        />
      </div>
      <div className="px-0.5 pt-3 text-center sm:px-1 sm:pt-5">
        <h3 className="font-display text-[0.95rem] leading-snug transition-colors group-hover:text-gold-deep sm:text-lg">
          {product.name}
        </h3>
        <p className="mt-1.5 font-display text-base font-medium tracking-[0.02em] text-ink sm:mt-2.5 sm:text-[1.08rem]">
          החל מ־{formatPrice(product.priceFrom)}
        </p>
        <p className="product-card-trust mt-1.5 justify-center text-[0.58rem] font-semibold tracking-[0.1em] text-stone/75 sm:mt-2 sm:text-[0.64rem] sm:tracking-[0.13em]">
          תעודה + אחריות
        </p>
      </div>
    </Link>
  );
}
