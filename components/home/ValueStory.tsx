import { SmartImage } from "@/components/ui/SmartImage";
import { LuxButton } from "@/components/ui/LuxButton";
import { Reveal } from "@/components/ui/Reveal";
import { ArrowIcon } from "@/components/ui/Icons";

const points = [
  {
    title: "בלי שכירות בקניון",
    body: "חנות במרכז מסחרי משלמת שכירות, ארנונה, ויטרינות וצוות במשמרות — וכל זה נכנס למחיר הטבעת. אצלנו זה פשוט לא קיים.",
  },
  {
    title: "בלי מלאי שצריך למכור",
    body: "אין מדפים לפנות, ולכן אף פעם לא נדחוף לכם אבן מסוימת. מאתרים את האבן אחרי שהבנו מה אתם מחפשים.",
  },
  {
    title: "ישירות מהמלטשה",
    body: "עבודה מול מלטשות ומול הבורסה חוסכת שכבת מתווכים שלמה — וההפרש חוזר אליכם באיכות האבן.",
  },
];

export function ValueStory() {
  return (
    <section className="section bg-blush">
      <div className="shell grid items-center gap-10 lg:grid-cols-12 lg:gap-16">
        <Reveal className="lg:col-span-5">
          <div className="relative">
            <SmartImage
              id="home-value-story"
              ratio="4 / 5"
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="w-full rounded-card"
            />
            {/* Quiet stamp — the one idea of this section, said twice */}
            <div className="absolute -bottom-5 start-5 rounded-2xl bg-white px-5 py-4 shadow-lift lg:-bottom-6 lg:start-auto lg:-end-6">
              <p className="text-[0.75rem] font-semibold text-muted">כל שקל שלא הולך לתפאורה</p>
              <p className="font-(family-name:--font-display) text-[1.375rem] leading-tight text-navy">
                הולך ליהלום.
              </p>
            </div>
          </div>
        </Reveal>

        <div className="pt-4 lg:col-span-7 lg:pt-0">
          <Reveal>
            <p className="kicker">למה ליבי</p>
            <h2 className="mt-3 text-(length:--text-display)">
              אין לנו חלון ראווה.
              <span className="block text-gold-deep">זה בדיוק מה שעושה את ההפרש.</span>
            </h2>
            <p className="mt-4 max-w-xl text-[1.0625rem] leading-relaxed text-body">
              בחנות תכשיטים מסורתית, חלק ניכר ממה שמשלמים בכלל לא נמצא בתכשיט —
              הוא בתקורה. בנינו את ליבי אחרת, ולכן אותו תקציב קונה כאן אבן גדולה,
              לבנה ונקייה יותר.
            </p>
          </Reveal>

          <ul className="mt-8 grid gap-3 sm:grid-cols-3 lg:gap-4">
            {points.map((point, index) => (
              <Reveal as="li" key={point.title} delay={index * 90}>
                <div className="h-full rounded-card bg-white/80 p-5">
                  <span
                    aria-hidden="true"
                    className="num flex h-8 w-8 items-center justify-center rounded-full bg-blush text-[0.8125rem] font-bold text-gold-deep"
                  >
                    {index + 1}
                  </span>
                  <h3 className="mt-3 text-[1.125rem] text-navy">{point.title}</h3>
                  <p className="mt-1.5 text-[0.875rem] leading-relaxed text-muted">
                    {point.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </ul>

          <Reveal delay={200}>
            <div className="mt-8">
              <LuxButton href="/about/" variant="outline">
                הסיפור שלנו
                <ArrowIcon />
              </LuxButton>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
