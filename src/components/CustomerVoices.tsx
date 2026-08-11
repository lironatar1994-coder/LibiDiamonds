import type { Review } from "@/data/reviews";

export default function CustomerVoices({ reviews }: { reviews: Review[] }) {
  const hasOnlyRealReviews = reviews.length > 0 && reviews.every((review) => !review.isDemo);
  const canRender = process.env.NODE_ENV !== "production" || hasOnlyRealReviews;

  if (!canRender) return null;

  return (
    <section className="section-gallery py-11 sm:py-14 lg:py-18" aria-labelledby="customer-voices-title">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-5 sm:gap-7">
          <h2
            id="customer-voices-title"
            className="shrink-0 font-display text-[2rem] font-medium leading-none sm:text-4xl"
          >
            מהלקוחות שלנו.
          </h2>
          <span className="h-px flex-1 bg-gradient-to-l from-gold/55 to-transparent" aria-hidden />
        </div>
        {/* On phones this is a snap rail — stacking three full quotes cost
            about a screen and a half of scrolling. From sm up it is the
            three-column editorial grid. */}
        <div className="mt-7 border-t border-line lg:mt-9">
          <ul className="no-scrollbar -mx-4 flex snap-x snap-mandatory scroll-px-4 overflow-x-auto px-4 sm:mx-0 sm:grid sm:grid-cols-3 sm:overflow-visible sm:px-0">
            {reviews.map((review) => (
              <li
                key={`${review.name}-${review.product}`}
                className="w-[84%] shrink-0 snap-start sm:w-auto"
              >
                <figure className="flex h-full flex-col border-l border-line py-7 ps-0 pe-5 last:border-l-0 sm:px-7 sm:first:pr-0 lg:px-10">
                  <span className="mb-5 block h-px w-8 bg-gold/45" aria-hidden />
                  <blockquote className="flex-1 font-display text-lg leading-relaxed text-ink sm:text-[1.35rem]">
                    ״{review.quote}״
                  </blockquote>
                  <figcaption className="mt-6 border-t border-line/70 pt-4 text-xs leading-6 text-stone">
                    <span className="font-semibold tracking-[0.04em] text-ink-soft">
                      {review.name}, {review.location}
                    </span>
                    <span className="block">{review.product}</span>
                  </figcaption>
                </figure>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
