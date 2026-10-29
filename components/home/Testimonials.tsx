import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { StarIcon } from "@/components/ui/Icons";
import { testimonials } from "@/data/testimonials";

/**
 * Review cards. On phones they become a swipeable rail so three quotes don't
 * stack into a wall of text.
 */
export function Testimonials() {
  const shown = testimonials.slice(0, 6);

  return (
    <section className="section bg-pearl">
      <div className="shell">
        <Reveal>
          <SectionHeading
            align="center"
            kicker="לקוחות מספרים"
            title="מה שנשאר אחרי שהתכשיט נמסר"
          />
        </Reveal>

        <ul className="rail -mx-4 mt-10 auto-cols-[82%] px-4 sm:-mx-6 sm:auto-cols-[46%] sm:px-6 lg:mx-0 lg:grid-flow-row lg:grid-cols-3 lg:gap-5 lg:overflow-visible lg:px-0">
          {shown.map((testimonial) => (
            <li key={testimonial.name}>
              <figure className="flex h-full flex-col rounded-card bg-white p-6 shadow-soft">
                <div className="flex gap-0.5 text-gold" aria-hidden="true">
                  {Array.from({ length: 5 }, (_, i) => (
                    <StarIcon key={i} />
                  ))}
                </div>

                <blockquote className="mt-4 flex-1 text-[1rem] leading-relaxed text-body">
                  ״{testimonial.quote}״
                </blockquote>

                <figcaption className="mt-5 flex items-center gap-3 border-t border-line pt-4">
                  <span
                    aria-hidden="true"
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blush font-(family-name:--font-display) text-[1.125rem] text-gold-deep"
                  >
                    {testimonial.name.charAt(0)}
                  </span>
                  <span>
                    <span className="block text-[0.9375rem] font-semibold text-navy">
                      {testimonial.name} · {testimonial.city}
                    </span>
                    <span className="block text-[0.8125rem] text-muted">
                      {testimonial.context}
                    </span>
                  </span>
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
