import { Reveal } from "@/components/ui/Reveal";
import { LuxButton } from "@/components/ui/LuxButton";
import { PhoneIcon, WhatsAppIcon } from "@/components/ui/Icons";
import { site } from "@/data/site";
import { generalWhatsApp, telHref } from "@/lib/contact";

/**
 * How buying works, end to end — the one navy band on the page, so the
 * process (and its reassurances) reads as the centre of the story.
 */
const steps = [
  {
    title: "שיחה ראשונה",
    body: "בווידאו, בטלפון או בוואטסאפ. מבינים סגנון, שימוש יומיומי ותקציב אמיתי — בלי דמי ייעוץ.",
  },
  {
    title: "אבנים ותעודות",
    body: "מציגים 2–3 אבנים באותו תקציב, עם התעודה וצילום מקרו של האבן עצמה — לפני כל החלטה.",
  },
  {
    title: "הדמיה לאישור",
    body: "שולחים הדמיה של התכשיט המלא. לא מייצרים לפני שאמרתם כן, ואין סגירה בלחץ.",
  },
  {
    title: "מסירה מבוטחת",
    body: "משלוח מבוטח עד הדלת ללא עלות, עם תעודה, אחריות לכל החיים ו־14 יום להחזרה.",
  },
];

export function ConsultationInvite() {
  return (
    <section className="section bg-navy text-on-dark">
      <div className="shell">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <Reveal className="max-w-2xl">
            <p className="kicker kicker-on-dark">איך זה עובד</p>
            <h2 className="mt-3 text-(length:--text-display) !text-white">
              מהשיחה הראשונה ועד הקופסה —
              <span className="block text-gold-light">בארבעה צעדים פשוטים.</span>
            </h2>
            <p className="mt-4 text-[1.0625rem] leading-relaxed text-on-dark-muted">
              רוב הלקוחות מגיעים בלי להחליט כלום, וזה בסדר גמור. השיחה הראשונה
              היא רק שיחה — אין התחייבות ואף אחד לא ינסה לסגור אתכם.
            </p>
          </Reveal>

          <Reveal delay={100} className="flex flex-col gap-3 sm:flex-row lg:shrink-0">
            <LuxButton href={generalWhatsApp} variant="whatsapp" size="lg" external>
              <WhatsAppIcon />
              מתחילים בוואטסאפ
            </LuxButton>
            <LuxButton href="/contact/" variant="light" size="lg">
              קביעת פגישה
            </LuxButton>
          </Reveal>
        </div>

        <ol className="mt-12 grid gap-4 sm:grid-cols-2 lg:mt-14 lg:grid-cols-4">
          {steps.map((step, index) => (
            <Reveal as="li" key={step.title} delay={index * 90}>
              <div className="h-full rounded-card border border-white/10 bg-white/[0.04] p-6">
                <span
                  aria-hidden="true"
                  className="num flex h-10 w-10 items-center justify-center rounded-full bg-gold-light text-[1rem] font-bold text-navy"
                >
                  {index + 1}
                </span>
                <h3 className="mt-4 text-[1.25rem] !text-white">{step.title}</h3>
                <p className="mt-2 text-[0.9375rem] leading-relaxed text-on-dark-muted">
                  {step.body}
                </p>
              </div>
            </Reveal>
          ))}
        </ol>

        <p className="mt-8 flex items-center gap-2 text-[0.9375rem] text-on-dark-muted">
          <PhoneIcon className="h-4 w-4 text-gold-light" />
          מעדיפים לדבר? התקשרו —{" "}
          <a href={telHref} className="num font-semibold text-white underline-offset-4 hover:underline" dir="ltr">
            {site.phoneDisplay}
          </a>
        </p>
      </div>
    </section>
  );
}
