import type { Review } from "@/data/reviews";

export default function CustomerVoices({ reviews }: { reviews: Review[] }) {
  const hasOnlyRealReviews = reviews.length > 0 && reviews.every((review) => !review.isDemo);
  const canRender = process.env.NODE_ENV !== "production" || hasOnlyRealReviews;

  if (!canRender) return null;

  return (
    <section className="section-gallery py-11 sm:py-14 lg:py-18" aria-labelledby="customer-voices-title">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 id="customer-voices-title" className="font-display text-[2rem] font-medium sm:text-4xl">
          מהלקוחות שלנו.
        </h2>
        <div className="mt-7 grid border-t border-line sm:grid-cols-3 lg:mt-9">
          {reviews.map((review) => (
            <figure
              key={`${review.name}-${review.product}`}
              className="border-b border-line py-7 sm:border-b-0 sm:border-l sm:px-7 sm:first:pr-0 sm:last:border-l-0 lg:px-10"
            >
              <blockquote className="font-display text-xl leading-relaxed text-ink sm:text-[1.35rem]">
                ״{review.quote}״
              </blockquote>
              <figcaption className="mt-5 text-xs leading-6 text-stone">
                <span className="font-semibold text-ink-soft">{review.name}, {review.location}</span>
                <span className="block">{review.product}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
