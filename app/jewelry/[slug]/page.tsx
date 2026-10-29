import { notFound } from "next/navigation";
import Link from "next/link";
import {
  getProduct,
  products,
  relatedProducts,
  originLabel,
} from "@/data/products";
import { getCategory } from "@/data/categories";
import { SmartImage } from "@/components/ui/SmartImage";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { SpecTable } from "@/components/product/SpecTable";
import { ProductCta } from "@/components/product/ProductCta";
import { ProductCard } from "@/components/product/ProductCard";
import { Reveal } from "@/components/ui/Reveal";
import { JsonLd } from "@/components/ui/JsonLd";
import { breadcrumbJsonLd, productJsonLd } from "@/lib/jsonld";
import { buildMetadata } from "@/lib/seo";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) return {};

  return buildMetadata({
    title: `${product.name} — ${originLabel[product.origin]}`,
    description: `${product.teaser} תעודת ${product.certificate}, התאמה אישית מלאה וליווי צמוד. ${
      typeof product.priceFrom === "number" ? "מחיר פתיחה שקוף." : ""
    }`,
    path: `/jewelry/${product.slug}/`,
    imageId: product.imageId,
  });
}

export default async function ProductPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();

  const category = getCategory(product.category);
  const related = relatedProducts(product, 3);

  const crumbs = [
    { name: "בית", path: "/" },
    ...(category
      ? [
          {
            name: category.name,
            path: `/collections/${category.slug}/`,
          },
        ]
      : []),
    { name: product.name, path: `/jewelry/${product.slug}/` },
  ];

  return (
    <>
      <div className="shell pt-6 pb-8 lg:pt-8">
        <Breadcrumbs items={crumbs} />
      </div>

      <section className="shell pb-4">
        <div className="grid gap-8 lg:grid-cols-12 lg:gap-14">
          {/* Gallery */}
          <div className="lg:col-span-7">
            <div className="overflow-hidden rounded-card bg-pearl lg:sticky lg:top-36">
              <SmartImage
                id={product.imageId}
                ratio="1 / 1"
                priority
                sizes="(min-width: 1024px) 58vw, 100vw"
                className="w-full"
              />
            </div>
            <p className="mt-3 text-[0.8125rem] text-muted">
              התמונה להמחשה. בפגישה תקבלו צילום מקרו של האבן הספציפית שנבחרה, לצד
              התעודה שלה.
            </p>
          </div>

          {/* Details */}
          <div className="lg:col-span-5">
            <span
              className={`inline-block rounded-full px-3 py-1 text-[0.75rem] font-bold ${
                product.origin === "lab" ? "bg-blush text-gold-deep" : "bg-pearl text-navy"
              }`}
            >
              {originLabel[product.origin]} · {product.certificate}
            </span>

            <h1 className="mt-3 text-(length:--text-display) leading-[1.1]">
              {product.name}
            </h1>

            <p className="mt-3 text-[1.0625rem] leading-relaxed text-body">
              {product.teaser}
            </p>

            <div className="mt-6">
              <ProductCta product={product} />
            </div>

            <div className="mt-8">
              <h2 className="font-(family-name:--font-body) text-[1rem] font-bold text-navy">
                מפרט
              </h2>
              <div className="mt-3">
                <SpecTable specs={product.specs} />
              </div>
            </div>

            <div className="mt-8">
              <h2 className="font-(family-name:--font-body) text-[1rem] font-bold text-navy">
                אפשרויות התאמה
              </h2>
              <ul className="mt-3 space-y-2">
                {product.options.map((option) => (
                  <li key={option} className="flex gap-2.5 text-[0.9375rem] text-body">
                    <svg viewBox="0 0 20 20" className="mt-1 h-4 w-4 shrink-0 text-gold-deep" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="m4.5 10.5 3.5 3.5 7.5-8" />
                    </svg>
                    {option}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Editorial description */}
      <section className="section">
        <div className="shell">
          <Reveal>
            <div className="grid gap-6 rounded-card bg-pearl p-6 lg:grid-cols-12 lg:gap-16 lg:p-10">
              <h2 className="text-[1.5rem] lg:col-span-4 lg:text-[1.75rem]">על הדגם</h2>
              <div className="space-y-4 lg:col-span-8">
                {product.description.map((paragraph) => (
                  <p
                    key={paragraph.slice(0, 24)}
                    className="max-w-3xl text-[1.0625rem] leading-relaxed text-body"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Related */}
      {related.length > 0 && (
        <section className="section-tight">
          <div className="shell">
            <Reveal>
              <div className="flex flex-wrap items-baseline justify-between gap-4">
                <h2 className="text-[1.5rem] lg:text-[1.875rem]">אולי תאהבו גם</h2>
                {category && (
                  <Link
                    href={`/collections/${category.slug}/`}
                    className="link-draw text-gold-deep"
                  >
                    לכל {category.name}
                  </Link>
                )}
              </div>
            </Reveal>

            <div className="mt-8 grid grid-cols-2 gap-x-3 gap-y-10 lg:grid-cols-3 lg:gap-x-6">
              {related.map((item, index) => (
                <Reveal key={item.slug} delay={index * 90}>
                  <ProductCard
                    product={item}
                    sizes="(min-width: 1024px) 33vw, 50vw"
                  />
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      <JsonLd data={productJsonLd(product)} />
      <JsonLd data={breadcrumbJsonLd(crumbs)} />
    </>
  );
}
