import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { LuxButton } from "@/components/ui/LuxButton";
import { ArrowIcon } from "@/components/ui/Icons";
import { ProductCard } from "@/components/product/ProductCard";
import { getProduct, type Product } from "@/data/products";

/** Hand-picked running order: a ring first, then mix categories. */
const bestsellerSlugs = [
  "solitaire-classic-natural",
  "halo-oval-lab",
  "tennis-bracelet-4ct-lab",
  "studs-solitaire-lab",
  "three-stone-emerald-natural",
  "eternity-pave-lab",
  "pendant-solitaire-natural",
  "hoops-pave-lab",
];

export function FeaturedPieces() {
  const pieces = bestsellerSlugs
    .map((slug) => getProduct(slug))
    .filter((p): p is Product => Boolean(p));

  return (
    <section className="section bg-pearl">
      <div className="shell">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <SectionHeading
              kicker="הנבחרים שלנו"
              title="הדגמים שכולם שואלים עליהם"
              lede="נקודת פתיחה, לא קטלוג סגור — כל דגם נבנה מחדש סביב האבן, המתכת והמידה שלכם."
            />
            <div className="hidden sm:block">
              <LuxButton href="/collections/engagement-rings/" variant="outline">
                לכל הדגמים
                <ArrowIcon />
              </LuxButton>
            </div>
          </div>
        </Reveal>

        <div className="mt-10 grid grid-cols-2 gap-x-3 gap-y-9 lg:grid-cols-4 lg:gap-x-6">
          {pieces.map((product, index) => (
            <Reveal key={product.slug} delay={(index % 4) * 70}>
              <ProductCard product={product} />
            </Reveal>
          ))}
        </div>

        <p className="mt-10 text-center text-[0.875rem] text-muted">
          המחירים הם נקודת פתיחה אמיתית לאבן בתעודה. את ההצעה המדויקת נבנה יחד —
          עם 2–3 אפשרויות אבן באותו תקציב.
        </p>

        <div className="mt-6 flex justify-center sm:hidden">
          <LuxButton href="/collections/engagement-rings/" variant="outline">
            לכל הדגמים
            <ArrowIcon />
          </LuxButton>
        </div>
      </div>
    </section>
  );
}
