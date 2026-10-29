import Link from "next/link";
import { SmartImage } from "@/components/ui/SmartImage";
import { LuxButton } from "@/components/ui/LuxButton";
import { ArrowIcon, WhatsAppIcon } from "@/components/ui/Icons";
import { generalWhatsApp } from "@/lib/contact";
import { formatPriceFrom } from "@/lib/format";
import { getProduct } from "@/data/products";

/**
 * Split hero on a blush wash: the promise and two actions on the
 * inline-start side, the hero still life on the other with a shoppable
 * price tag. On phones the photo leads and the copy follows.
 */
export function Hero() {
  const featured = getProduct("solitaire-classic-natural");

  return (
    <section className="relative overflow-hidden bg-[linear-gradient(180deg,var(--color-blush)_0%,#fbf4f1_100%)]">
      <div className="grid lg:min-h-[min(calc(100svh-9.25rem),40rem)] lg:grid-cols-2">
        {/* Copy */}
        <div className="flex items-center px-4 pb-12 pt-8 sm:px-6 lg:py-16 lg:pe-12 lg:ps-[max(2.5rem,calc((100vw-84rem)/2+2.5rem))] xl:pe-16">
          <div className="max-w-xl">
            <p className="kicker">יהלומים טבעיים ויהלומי מעבדה</p>

            <h1 className="mt-4 text-(length:--text-display-lg) leading-[1.08]">
              את היהלום בוחרים פעם אחת.
              <span className="block text-gold-deep">כדאי לבחור אותו נכון.</span>
            </h1>

            <p className="mt-5 text-[1.0625rem] leading-relaxed text-body lg:text-[1.1875rem]">
              טבעות אירוסין, צמידי טניס ועגילי יהלום בתעודת GIA או IGI. בלי
              חלון ראווה ובלי תקורה — ולכן אותו תקציב קונה כאן אבן טובה יותר.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <LuxButton href="/collections/engagement-rings/" size="lg">
                לטבעות האירוסין
                <ArrowIcon />
              </LuxButton>
              <LuxButton href={generalWhatsApp} variant="whatsapp" size="lg" external>
                <WhatsAppIcon />
                ייעוץ חינם בוואטסאפ
              </LuxButton>
            </div>

            <p className="mt-5 flex items-center gap-2 text-[0.875rem] text-muted">
              <span aria-hidden="true" className="h-1.5 w-1.5 rotate-45 bg-gold" />
              שיחת ייעוץ ללא עלות וללא התחייבות
            </p>
          </div>
        </div>

        {/* Photo */}
        <div className="relative order-first aspect-[4/3] sm:aspect-[16/10] lg:order-none lg:aspect-auto">
          <SmartImage
            id="home-hero"
            fillParent
            priority
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="lg:rounded-es-[2.5rem]"
          />

          {featured && (
            <Link
              href={`/jewelry/${featured.slug}/`}
              className="group absolute bottom-3 end-3 flex items-center gap-2.5 rounded-xl bg-white/92 px-3 py-2 shadow-lift backdrop-blur-sm transition-transform duration-300 hover:-translate-y-0.5 sm:gap-3 sm:rounded-2xl sm:px-4 sm:py-3 lg:bottom-8 lg:end-8"
            >
              <span>
                <span className="hidden text-[0.75rem] text-muted sm:block">בתמונה</span>
                <span className="block text-[0.875rem] font-semibold text-navy sm:text-[0.9375rem]">
                  {featured.name}
                </span>
                <span className="num block text-[0.8125rem] font-semibold text-gold-deep">
                  {formatPriceFrom(featured.priceFrom)}
                </span>
              </span>
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-navy text-white transition-colors group-hover:bg-gold-deep sm:h-9 sm:w-9">
                <ArrowIcon />
              </span>
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
