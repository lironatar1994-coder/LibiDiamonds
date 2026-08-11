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
        <div className="mt-7 grid border-t border-line sm:grid-cols-3 lg:mt-9">
          {reviews.map((review) => (
            <figure
              key={`${review.name}-${review.product}`}
              className="flex flex-col border-b border-line py-7 sm:border-b-0 sm:border-l sm:px-7 sm:first:pr-0 sm:last:border-l-0 lg:px-10"
            >
              <span className="mb-5 block h-px w-8 bg-gold/45" aria-hidden />
              <blockquote className="flex-1 font-display text-xl leading-relaxed text-ink sm:text-[1.35rem]">
                ״{review.quote}״
              </blockquote>
              <figcaption className="mt-6 border-t border-line/70 pt-4 text-xs leading-6 text-stone">
                <span className="font-semibold tracking-[0.04em] text-ink-soft">
                  {review.name}, {review.location}
                </span>
                <span className="block">{review.product}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
