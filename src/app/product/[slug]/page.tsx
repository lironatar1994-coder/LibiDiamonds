import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import ProductCard from "@/components/ProductCard";
import ProductView from "@/components/ProductView";
import {
  getCategory,
  getProduct,
  products,
  relatedProducts,
} from "@/data/products";
import { site } from "@/lib/site";

interface Props {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) return {};
  return {
    title: product.name,
    description: `${product.subtitle}. ${product.description.slice(0, 140)}`,
  };
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();

  const category = getCategory(product.category)!;
  const related = relatedProducts(product);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.description,
    brand: { "@type": "Brand", name: site.name },
    offers: {
      "@type": "AggregateOffer",
      priceCurrency: "ILS",
      lowPrice: product.carats[0].price,
      highPrice: product.carats[product.carats.length - 1].price,
      availability: "https://schema.org/InStock",
    },
  };

  return (
    <>
      <div className="mx-auto max-w-[88rem] px-4 py-5 sm:px-6 lg:px-8 lg:py-9">
      <nav className="mb-6 hidden text-xs tracking-[0.04em] text-stone md:block lg:mb-9" aria-label="פירורי לחם">
        <Link href="/" className="hover:text-gold">
          ראשי
        </Link>
        <span className="mx-2">/</span>
        <Link href={`/jewelry/${category.slug}`} className="hover:text-gold">
          {category.name}
        </Link>
        <span className="mx-2">/</span>
        <span>{product.name}</span>
      </nav>

      <ProductView product={product} />
      </div>

      <section className="mt-16 bg-[#eef2f2] py-11 lg:mt-24 lg:py-16">
        <div className="mx-auto max-w-[88rem] px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-5 sm:gap-7">
            <h2 className="shrink-0 font-display text-3xl font-medium lg:text-4xl">עוד {category.name} מהקולקציה</h2>
            <span className="h-px flex-1 bg-gradient-to-l from-gold/55 to-transparent" aria-hidden />
          </div>
          <div className="mt-8 grid grid-cols-2 gap-x-4 gap-y-10 lg:mt-10 lg:grid-cols-4 lg:gap-x-6">
            {related.map((p) => (
              <ProductCard key={p.slug} product={p} />
            ))}
          </div>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
}
