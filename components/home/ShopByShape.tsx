import Link from "next/link";
import type { ReactNode } from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { WhatsAppIcon } from "@/components/ui/Icons";
import { buildWhatsAppUrl } from "@/lib/contact";

/**
 * Diamond-shape picker. Each shape opens WhatsApp with the shape pre-filled,
 * so one tap turns browsing into a request for real, certified options.
 * Facet drawings are simplified line art on a 64×64 grid.
 */
export const shapes: { name: string; art: ReactNode }[] = [
  {
    name: "עגול",
    art: (
      <>
        <circle cx="32" cy="32" r="26" />
        <path d="M43.1 36.6 36.6 43.1h-9.2l-6.5-6.5v-9.2l6.5-6.5h9.2l6.5 6.5Z" />
        <path d="M43.1 36.6 56 42M36.6 43.1 42 56M27.4 43.1 22 56M20.9 36.6 8 42M20.9 27.4 8 22M27.4 20.9 22 8M36.6 20.9 42 8M43.1 27.4 56 22" />
      </>
    ),
  },
  {
    name: "אובל",
    art: (
      <>
        <ellipse cx="32" cy="32" rx="19" ry="27" />
        <path d="M40.3 37 35.4 44h-6.8l-4.9-7v-10l4.9-7h6.8l4.9 7Z" />
        <path d="M40.3 37 49.6 42.3M35.4 44l3.9 12.9M28.6 44l-3.9 12.9M23.7 37l-9.3 5.3M23.7 27l-9.3-5.3M28.6 20l-3.9-12.9M35.4 20l3.9-12.9M40.3 27l9.3-5.3" />
      </>
    ),
  },
  {
    name: "פרינסס",
    art: (
      <>
        <rect x="10" y="10" width="44" height="44" />
        <rect x="22" y="22" width="20" height="20" />
        <path d="m10 10 12 12M54 10 42 22M54 54 42 42M10 54l12-12M32 10l-10 12M32 10l10 12M54 32 42 22M54 32 42 42M32 54l10-12M32 54 22 42M10 32l12 10M10 32l12-10" />
      </>
    ),
  },
  {
    name: "כרית",
    art: (
      <>
        <rect x="10" y="10" width="44" height="44" rx="13" />
        <rect x="22" y="22" width="20" height="20" rx="5" />
        <path d="m13.8 13.8 9.7 9.7M50.2 13.8l-9.7 9.7M50.2 50.2l-9.7-9.7M13.8 50.2l9.7-9.7M32 10v12M54 32H42M32 54V42M10 32h12" />
      </>
    ),
  },
  {
    name: "אמרלד",
    art: (
      <>
        <path d="M22 7h20l7 7v36l-7 7H22l-7-7V14Z" />
        <path d="M25 12h14l5 5v30l-5 5H25l-5-5V17Z" />
        <path d="M28 17h8l3 3v24l-3 3h-8l-3-3V20Z" />
        <path d="m18.5 10.5 8 8M45.5 10.5l-8 8M45.5 53.5l-8-8M18.5 53.5l8-8" />
      </>
    ),
  },
  {
    name: "טיפה",
    art: (
      <>
        <path d="M32 6c8 12 18 22 18 34a18 18 0 0 1-36 0c0-12 10-22 18-34Z" />
        <path d="M32 24c4 5 9 10 9 16a9 9 0 0 1-18 0c0-6 5-11 9-16Z" />
        <path d="M32 6v18M50 40h-9M14 40h9M32 58v-9M44.7 52.7l-6.3-6.3M19.3 52.7l6.3-6.3" />
      </>
    ),
  },
  {
    name: "מרקיזה",
    art: (
      <>
        <path d="M32 4c16 12 16 44 0 56C16 48 16 16 32 4Z" />
        <path d="M32 20c7 6 7 18 0 24-7-6-7-18 0-24Z" />
        <path d="M32 4v16M32 60V44M44 32h-6.8M20 32h6.8" />
      </>
    ),
  },
  {
    name: "רדיאנט",
    art: (
      <>
        <path d="M19 8h26l6 6v36l-6 6H19l-6-6V14Z" />
        <path d="M26 20h12l3 3v18l-3 3H26l-3-3V23Z" />
        <path d="m16 11 8.5 10.5M48 11l-8.5 10.5M48 53l-8.5-10.5M16 53l8.5-10.5M32 8l-6 12M32 8l6 12M32 56l-6-12M32 56l6-12M13 32l10-9M13 32l10 9M51 32l-10-9M51 32l-10 9" />
      </>
    ),
  },
];

export function ShopByShape() {
  return (
    <section className="section">
      <div className="shell">
        <Reveal>
          <SectionHeading
            align="center"
            kicker="בחירה לפי צורה"
            title="איזה יהלום מדבר אליכם?"
            lede={
              <>
                לחצו על צורה — ונשלח לכם בוואטסאפ 2–3 אפשרויות אבן בתעודה, באותו
                תקציב. לא בטוחים?{" "}
                <Link href="/guide/#shapes" className="link-draw text-gold-deep">
                  ההבדלים בין הצורות במדריך
                </Link>
              </>
            }
          />
        </Reveal>

        <Reveal delay={80}>
          <ul className="mx-auto mt-10 grid max-w-5xl grid-cols-4 gap-2.5 sm:gap-4 lg:grid-cols-8">
            {shapes.map((shape) => (
              <li key={shape.name}>
                <a
                  href={buildWhatsAppUrl(
                    `היי, הגעתי מהאתר של ליבי דיאמונדס ואשמח לקבל אפשרויות ליהלום בליטוש ${shape.name}.`,
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`קבלת אפשרויות ליהלום בליטוש ${shape.name} בוואטסאפ`}
                  className="group flex flex-col items-center rounded-card border border-line bg-white px-1 pb-3 pt-4 transition-[border-color,box-shadow,transform] duration-300 hover:-translate-y-0.5 hover:border-gold hover:shadow-soft"
                >
                  <svg
                    viewBox="0 0 64 64"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.3"
                    strokeLinejoin="round"
                    aria-hidden="true"
                    className="h-12 w-12 text-navy transition-colors group-hover:text-gold-deep sm:h-14 sm:w-14"
                  >
                    {shape.art}
                  </svg>
                  <span className="mt-2 text-[0.875rem] font-semibold text-navy">
                    {shape.name}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </Reveal>

        <p className="mt-6 flex items-center justify-center gap-2 text-[0.8125rem] text-muted">
          <WhatsAppIcon className="h-4 w-4 text-whatsapp" />
          אפשרויות אמיתיות עם תעודות — בלי התחייבות
        </p>
      </div>
    </section>
  );
}
