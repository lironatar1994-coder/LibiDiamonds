import Link from "next/link";
import { SmartImage } from "@/components/ui/SmartImage";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { LuxButton } from "@/components/ui/LuxButton";
import { ArrowIcon, WhatsAppIcon } from "@/components/ui/Icons";
import { buildWhatsAppUrl } from "@/lib/contact";

const columns = [
  {
    imageId: "home-natural",
    tag: "יהלום טבעי",
    title: "נדירות שלא ניתן לשחזר",
    points: [
      "נוצר בעומק האדמה לפני מיליארד שנה ומעלה — כל אבן חד־פעמית",
      "מחזיק ערך לאורך זמן, כי הנדירות שלו לא תלויה בייצור",
      "תעודת GIA מלאה — המעבדה המחמירה בעולם",
    ],
    footnote: "למי שמחפש נכס, ולא רק תכשיט",
    href: "/collections/natural-diamonds/",
    cta: "ליהלומים טבעיים",
    tone: "bg-pearl",
  },
  {
    imageId: "home-lab",
    tag: "יהלום מעבדה",
    title: "אותו יהלום, תקציב אחר",
    points: [
      "פחמן גבישי טהור, קשיות 10 — לא חיקוי, יהלום לכל דבר",
      "אותו תקציב קונה אבן גדולה, לבנה ונקייה יותר — לרוב פי שניים ומעלה",
      "תעודת IGI מלאה, המציינת במפורש שזה יהלום מעבדה",
    ],
    footnote: "למי שרוצה את התכשיט המרשים ביותר בתקציב שיש",
    href: "/collections/lab-diamonds/",
    cta: "ליהלומי מעבדה",
    tone: "bg-blush",
  },
];

export function NaturalVsLab() {
  return (
    <section className="section">
      <div className="shell">
        <Reveal>
          <SectionHeading
            align="center"
            kicker="טבעי או מעבדה?"
            title="שני יהלומים אמיתיים. ההחלטה שלכם."
            lede="שניהם בתעודה, ושניהם נראים זהים לחלוטין גם בלופה. אנחנו מציגים את שתי האפשרויות זו לצד זו — ומסבירים את שתיהן בגלוי."
          />
        </Reveal>

        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:mt-12 lg:gap-6">
          {columns.map((column, index) => (
            <Reveal key={column.tag} delay={index * 100}>
              <article className={`flex h-full flex-col overflow-hidden rounded-card ${column.tone}`}>
                <SmartImage
                  id={column.imageId}
                  ratio="16 / 9"
                  sizes="(min-width: 768px) 45vw, 100vw"
                  className="w-full"
                />
                <div className="flex flex-1 flex-col p-6 lg:p-8">
                  <span className="self-start rounded-full bg-white px-3 py-1 text-[0.75rem] font-bold text-gold-deep">
                    {column.tag}
                  </span>
                  <h3 className="mt-3 text-[1.625rem] lg:text-[1.875rem]">{column.title}</h3>
                  <ul className="mt-4 flex-1 space-y-2.5">
                    {column.points.map((point) => (
                      <li key={point} className="flex gap-3 text-[0.9375rem] leading-relaxed text-body">
                        <svg viewBox="0 0 20 20" className="mt-1 h-4 w-4 shrink-0 text-gold-deep" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <path d="m4.5 10.5 3.5 3.5 7.5-8" />
                        </svg>
                        {point}
                      </li>
                    ))}
                  </ul>
                  <p className="mt-5 border-t border-navy/10 pt-4 text-[0.9375rem] font-medium text-navy">
                    {column.footnote}
                  </p>
                  <div className="mt-5">
                    <LuxButton href={column.href}>
                      {column.cta}
                      <ArrowIcon />
                    </LuxButton>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="mx-auto mt-8 flex max-w-3xl flex-col items-center justify-between gap-4 rounded-card border border-line px-6 py-5 text-center sm:flex-row sm:text-start">
            <p className="text-[0.9375rem] text-body">
              <strong className="font-semibold text-navy">עדיין מתלבטים?</strong>{" "}
              נציג לכם אבן טבעית ואבן מעבדה באותו תקציב, זו מול זו.{" "}
              <Link href="/guide/#natural-vs-lab" className="link-draw text-gold-deep">
                או קראו במדריך
              </Link>
            </p>
            <LuxButton
              href={buildWhatsAppUrl(
                "היי, הגעתי מהאתר של ליבי דיאמונדס ואשמח להשוואה בין יהלום טבעי ליהלום מעבדה באותו תקציב.",
              )}
              variant="whatsapp"
              external
              className="shrink-0"
            >
              <WhatsAppIcon />
              להשוואה אישית
            </LuxButton>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
