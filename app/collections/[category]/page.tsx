import { notFound } from "next/navigation";
import Link from "next/link";
import { categories, getCategory } from "@/data/categories";
import { productsByCategory } from "@/data/products";
import { PageHero } from "@/components/ui/PageHero";
import { ProductCard } from "@/components/product/ProductCard";
import { Reveal } from "@/components/ui/Reveal";
import { LuxButton } from "@/components/ui/LuxButton";
import { JsonLd } from "@/components/ui/JsonLd";
import { breadcrumbJsonLd } from "@/lib/jsonld";
import { buildMetadata } from "@/lib/seo";
import { categoryWhatsApp } from "@/lib/contact";
import { WhatsAppIcon } from "@/components/ui/Icons";

type Params = { category: string };

export function generateStaticParams(): Params[] {
  return categories.map((category) => ({ category: category.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}) {
  const { category: slug } = await params;
  const category = getCategory(slug);
  if (!category) return {};

  return buildMetadata({
    title: category.metaTitle,
    description: category.metaDescription,
    path: `/collections/${category.slug}/`,
    imageId: category.imageId,
  });
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { category: slug } = await params;
  const category = getCategory(slug);
  if (!category) notFound();

  const items = productsByCategory(category.slug);
  const others = categories.filter((c) => c.slug !== category.slug);

  const crumbs = [
    { name: "בית", path: "/" },
    { name: category.name, path: `/collections/${category.slug}/` },
  ];

  return (
    <>
      <PageHero
        kicker="קולקציה"
        title={category.name}
        lede={category.teaser}
        imageId={category.imageId}
        crumbs={crumbs}
      />

      {/* Pieces first — this is a shop window, the essay can wait */}
      <section className="section">
        <div className="shell">
          {items.length > 0 ? (
            <>
              <div className="flex flex-wrap items-baseline justify-between gap-3 border-b border-line pb-4">
                <p className="text-[0.9375rem] font-semibold text-navy">
                  {items.length === 1 ? "דגם אחד" : `${items.length} דגמים`}
                </p>
                <p className="text-[0.875rem] text-muted">
                  כל דגם נבנה מחדש סביב האבן, המתכת והמידה שלכם.
                </p>
              </div>

              <div className="mt-8 grid grid-cols-2 gap-x-3 gap-y-10 lg:grid-cols-3 lg:gap-x-6 xl:grid-cols-4">
                {items.map((product, index) => (
                  <Reveal key={product.slug} delay={(index % 4) * 70}>
                    <ProductCard
                      product={product}
                      sizes="(min-width: 1280px) 25vw, (min-width: 1024px) 33vw, 50vw"
                    />
                  </Reveal>
                ))}
              </div>
            </>
          ) : (
            <p className="text-[1.0625rem] text-muted">
              הקולקציה הזו נבנית בהזמנה בלבד. ספרו לנו מה אתם מחפשים ונחזור
              אליכם עם אפשרויות מוחשיות.
            </p>
          )}

          {/* Contact card — the conversion point on every category page */}
          <Reveal>
            <div className="mt-14 flex flex-col items-start justify-between gap-6 rounded-card bg-blush p-6 lg:flex-row lg:items-center lg:p-10">
              <div className="max-w-xl">
                <h2 className="text-(length:--text-display-sm) leading-tight">
                  לא מצאתם בדיוק את מה שחיפשתם?
                </h2>
                <p className="mt-2 text-[0.9375rem] leading-relaxed text-muted">
                  מה שמופיע כאן הוא נקודת פתיחה, לא הקטלוג המלא. רוב התכשיטים
                  נבנים מאפס לפי בקשה — תארו לנו מה בראש שלכם.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <LuxButton href={categoryWhatsApp(category.name)} variant="whatsapp" external>
                  <WhatsAppIcon />
                  הצעה בוואטסאפ
                </LuxButton>
                <LuxButton href="/contact/" variant="outline">
                  קביעת פגישה
                </LuxButton>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Editorial intro — keeps category pages from being thin listings */}
      <section className="section-tight border-t border-line bg-pearl">
        <div className="shell">
          <div className="grid gap-6 lg:grid-cols-12 lg:gap-16">
            <h2 className="text-[1.5rem] lg:col-span-4 lg:text-[1.75rem]">
              על {category.name}
            </h2>
            <div className="space-y-4 lg:col-span-8">
              {category.intro.map((paragraph) => (
                <p
                  key={paragraph.slice(0, 24)}
                  className="max-w-3xl text-[1rem] leading-relaxed text-body"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

          {/* Cross-links keep crawl depth shallow and help discovery */}
          <div className="mt-10 border-t border-line pt-6">
            <p className="text-[0.9375rem] font-semibold text-navy">קולקציות נוספות</p>
            <ul className="mt-3 flex flex-wrap gap-2">
              {others.map((other) => (
                <li key={other.slug}>
                  <Link
                    href={`/collections/${other.slug}/`}
                    className="inline-flex min-h-10 items-center rounded-full border border-line-strong bg-white px-4 text-[0.875rem] font-medium text-navy transition-colors hover:border-navy hover:bg-navy hover:text-white"
                  >
                    {other.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <JsonLd data={breadcrumbJsonLd(crumbs)} />
    </>
  );
}
