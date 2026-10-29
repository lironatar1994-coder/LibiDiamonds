import Link from "next/link";
import { SmartImage } from "@/components/ui/SmartImage";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { ArrowIcon } from "@/components/ui/Icons";
import { getCategory, type CategorySlug } from "@/data/categories";
import { productsByCategory } from "@/data/products";
import { formatPriceFrom } from "@/lib/format";

const tiles: { slug: CategorySlug; label?: string }[] = [
  { slug: "engagement-rings" },
  { slug: "wedding-bands" },
  { slug: "tennis-bracelets" },
  { slug: "earrings" },
  { slug: "pendants", label: "תליונים" },
  { slug: "natural-diamonds", label: "יהלומים בודדים" },
];

/** Lowest real opening price in a category, so tiles can show "from ₪…". */
function lowestPrice(slug: CategorySlug): number | undefined {
  const prices = productsByCategory(slug)
    .map((p) => p.priceFrom)
    .filter((p): p is number => typeof p === "number");
  return prices.length ? Math.min(...prices) : undefined;
}

export function CategoryShowcase() {
  return (
    <section className="section">
      <div className="shell">
        <Reveal>
          <SectionHeading
            align="center"
            kicker="הקולקציות"
            title="מה תרצו לחפש היום?"
            lede="כל דגם נבנה סביב היהלום שנבחר עבורו — טבעי או מעבדה, במתכת ובמידה שלכם."
          />
        </Reveal>

        <ul className="mt-10 grid grid-cols-2 gap-x-3 gap-y-7 sm:grid-cols-3 lg:mt-12 lg:grid-cols-6 lg:gap-x-5">
          {tiles.map(({ slug, label }, index) => {
            const category = getCategory(slug)!;
            const from = lowestPrice(slug);
            return (
              <Reveal as="li" key={slug} delay={index * 60}>
                <Link href={`/collections/${slug}/`} className="group block">
                  <div className="zoom-frame overflow-hidden rounded-card bg-pearl">
                    <SmartImage
                      id={category.imageId}
                      ratio="1 / 1"
                      sizes="(min-width: 1024px) 16vw, (min-width: 640px) 33vw, 50vw"
                      className="w-full"
                    />
                  </div>
                  <h3 className="mt-3 flex items-center justify-center gap-1.5 text-center text-[1.0625rem] text-navy transition-colors group-hover:text-gold-deep lg:text-[1.125rem]">
                    {label ?? category.name}
                    <ArrowIcon className="h-3.5 w-3.5 text-gold transition-transform duration-300 group-hover:-translate-x-0.5" />
                  </h3>
                  {from && (
                    <p className="num mt-0.5 text-center text-[0.8125rem] text-muted">
                      {formatPriceFrom(from)}
                    </p>
                  )}
                </Link>
              </Reveal>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
