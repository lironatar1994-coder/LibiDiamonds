import { SmartImage } from "@/components/ui/SmartImage";
import { Breadcrumbs, type Crumb } from "@/components/ui/Breadcrumbs";

/**
 * Shared interior-page masthead: pearl band with breadcrumbs and title on the
 * inline-start side and a rounded photo on the other. Compact, so interior
 * pages reach their content quickly.
 */
export function PageHero({
  kicker,
  title,
  lede,
  imageId,
  crumbs,
}: {
  kicker?: string;
  title: string;
  lede?: string;
  imageId: string;
  crumbs: Crumb[];
}) {
  return (
    <section className="bg-pearl">
      <div className="shell grid items-center gap-8 py-8 lg:grid-cols-12 lg:gap-12 lg:py-12">
        <div className="lg:col-span-6 xl:col-span-5">
          <Breadcrumbs items={crumbs} />

          {kicker && <p className="kicker mt-6">{kicker}</p>}

          <h1
            className={`${kicker ? "mt-3" : "mt-6"} text-(length:--text-display) leading-[1.12]`}
          >
            {title}
          </h1>

          {lede && (
            <p className="mt-4 max-w-xl text-[1.0625rem] leading-relaxed text-muted">
              {lede}
            </p>
          )}
        </div>

        <div className="lg:col-span-6 xl:col-span-7">
          <SmartImage
            id={imageId}
            ratio="16 / 9"
            priority
            sizes="(min-width: 1024px) 55vw, 100vw"
            className="w-full rounded-card"
          />
        </div>
      </div>
    </section>
  );
}
