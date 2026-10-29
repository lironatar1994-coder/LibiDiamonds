import { PageHero } from "@/components/ui/PageHero";
import { SmartImage } from "@/components/ui/SmartImage";
import { Reveal } from "@/components/ui/Reveal";
import { LuxButton } from "@/components/ui/LuxButton";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { JsonLd } from "@/components/ui/JsonLd";
import { breadcrumbJsonLd } from "@/lib/jsonld";
import { buildMetadata } from "@/lib/seo";
import { generalWhatsApp } from "@/lib/contact";

export const metadata = buildMetadata({
  title: "הסיפור שלנו — למה אין לנו חנות",
  description:
    "ליבי דיאמונדס נבנה בכוונה בלי חלון ראווה. הסיפור מאחורי ההחלטה, איך זה משפיע על המחיר שאתם משלמים, ואיך אנחנו בונים אמון בלי ויטרינה.",
  path: "/about/",
  imageId: "about-hero",
});

const principles = [
  {
    title: "האבן קודמת לתכשיט",
    body: "בחנות תכשיטים מתחילים ממה שיש בוויטרינה. אנחנו מתחילים מהשאלה מה חשוב לכם, ורק אחר כך מאתרים את האבן. זה הופך את הסדר, ובדרך כלל גם את התוצאה.",
  },
  {
    title: "המידע לפני הכסף",
    body: "התעודה, הדירוגים והחסרונות — הכל על השולחן לפני שמשלמים. אם יהלום מעבדה פחות טוב לכם מבחינת שמירת ערך, נאמר את זה בפירוש, גם אם זו העסקה הגדולה יותר.",
  },
  {
    title: "אף אחד לא סוגר בפגישה",
    body: "אין דמי ייעוץ, אין הצעה שפג תוקפה ואין שיחת מכירה חוזרת. תהליכים אצלנו לוקחים לפעמים חודשים, וזה בסדר גמור.",
  },
  {
    title: "אותו איש קשר, מהתחלה לסוף",
    body: "לא מוקד, לא נציג משמרת. מי שמדבר איתכם בשיחה הראשונה הוא מי שמלווה את התכשיט עד המסירה — ואחריה.",
  },
];

export default function AboutPage() {
  const crumbs = [
    { name: "בית", path: "/" },
    { name: "הסיפור שלנו", path: "/about/" },
  ];

  return (
    <>
      <PageHero
        kicker="הסיפור שלנו"
        title="בנינו חנות יהלומים בלי חנות"
        lede="לא כדי להיות זולים. כדי שהכסף שלכם ילך למקום שבאמת נשאר איתכם."
        imageId="about-hero"
        crumbs={crumbs}
      />

      {/* Opening narrative */}
      <section className="section">
        <div className="shell">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
            <Reveal className="lg:col-span-4">
              <p className="kicker">איך זה התחיל</p>
            </Reveal>

            <Reveal delay={80} className="lg:col-span-8">
              <div className="space-y-6 text-[1.0625rem] leading-relaxed text-body">
                <p className="font-(family-name:--font-display) text-[1.375rem] font-light leading-relaxed text-graphite">
                  השאלה שהתחילה את הכל הייתה פשוטה: למה טבעת אירוסין באותה
                  איכות בדיוק עולה בקניון כמעט כפול ממה שהיא עולה בבורסה?
                </p>
                <p>
                  התשובה, כשמפרקים אותה, לא קשורה כמעט בכלל ליהלום. היא קשורה
                  בשכירות בקומת הקרקע, בעיצוב החנות, בביטוח מלאי, בצוות מכירה
                  בשתי משמרות ובמלאי גדול שצריך למכור. כל אלה עלויות אמיתיות של
                  עסק אמיתי — אבל הן לא נשארות אצלכם. הן נשארות בתפאורה.
                </p>
                <p>
                  ליבי דיאמונדס נבנה במודע בלי כל השכבה הזאת. אנחנו עובדים ישירות
                  מול מלטשות ומול הבורסה, מאתרים אבן ספציפית לכל לקוח, ומייצרים
                  את התכשיט סביבה. אין לנו מדפים שצריך לפנות, ולכן אף פעם לא
                  נדחוף לכם אבן שנוח לנו למכור.
                </p>
                <p>
                  זה גם אומר שאנחנו לא מתאימים לכל אחד. מי שרוצה להיכנס לחנות,
                  למדוד שלוש טבעות ולצאת עם אחת — עדיף לו בקניון, וזה לגיטימי.
                  מי שמוכן להשקיע שיחה אחת כדי להבין מה הוא קונה, בדרך כלל יוצא
                  מכאן עם אבן טובה יותר ממה שתכנן.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Selection imagery + principles */}
      <section className="bg-ink text-on-dark">
        <div className="grid lg:grid-cols-2">
          <Reveal className="relative min-h-[20rem] lg:min-h-[40rem]">
            <SmartImage
              id="about-selection"
              fillParent
              showLabel={false}
              sizes="(min-width: 1024px) 50vw, 100vw"
            />
          </Reveal>

          <div className="flex items-center px-6 py-16 md:px-12 lg:px-16 lg:py-24">
            <div>
              <Reveal>
                <SectionHeading
                  kicker="איך אנחנו עובדים"
                  title="ארבעה כללים שלא זזים"
                  onDark
                  size="sm"
                />
              </Reveal>

              <Reveal delay={110}>
                <ul className="mt-11 space-y-8">
                  {principles.map((principle, index) => (
                    <li key={principle.title} className="flex gap-5">
                      <span
                        aria-hidden="true"
                        className="num mt-1.5 shrink-0 font-(family-name:--font-display) text-[0.8125rem] text-champagne/70"
                      >
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <div className="hair-t-dark pt-1">
                        <h3 className="font-(family-name:--font-display) text-[1.125rem] font-light text-on-dark">
                          {principle.title}
                        </h3>
                        <p className="mt-2 text-[0.9375rem] leading-relaxed text-on-dark-muted">
                          {principle.body}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* What replaces the showroom */}
      <section className="section">
        <div className="shell">
          <Reveal>
            <SectionHeading
              align="center"
              kicker="במקום ויטרינה"
              title="מה מחליף את החנות בפועל"
              lede="השאלה הראשונה שאנחנו נשאלים היא איך רואים תכשיט בלי להיכנס לחנות. אלה ארבעת התחליפים, וכולם קורים לפני שמשלמים."
            />
          </Reveal>

          <div className="mt-14 grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                step: "01",
                title: "שיחת וידאו עם האבנים",
                body: "אנחנו מציגים את האבנים במקרו מול המצלמה, מסתובבים איתן באור, ומראים את ההבדלים בין שתי אבנים באותו תקציב.",
              },
              {
                step: "02",
                title: "התעודה מראש",
                body: "התעודה המלאה של האבן הספציפית נשלחת לעיון. אפשר לאמת אותה מול מסד הנתונים של GIA או IGI באופן עצמאי.",
              },
              {
                step: "03",
                title: "צילום מקרו של האבן שלכם",
                body: "לא תמונת קטלוג. צילום של האבן שנבחרה, בהגדלה, כדי שתראו בדיוק מה נכנס לטבעת.",
              },
              {
                step: "04",
                title: "הדמיה לאישור",
                body: "לפני שמייצרים, תקבלו הדמיה של התכשיט המלא. אין ייצור בלי אישור מפורש שלכם.",
              },
            ].map((item, index) => (
              <Reveal key={item.step} delay={index * 90}>
                <div className="border-t border-line pt-6">
                  <span
                    aria-hidden="true"
                    className="num font-(family-name:--font-display) text-[0.75rem] text-champagne-deep/70"
                  >
                    {item.step}
                  </span>
                  <h3 className="mt-3 font-(family-name:--font-display) text-[1.0625rem] font-light leading-snug text-graphite">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-[0.875rem] leading-relaxed text-muted">
                    {item.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Packaging / delivery close */}
      <section className="section-tight border-t border-line bg-cream/50">
        <div className="shell">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <Reveal>
              <SmartImage
                id="about-packaging"
                ratio="4 / 3"
                sizes="(min-width: 1024px) 48vw, 100vw"
                showLabel={false}
                className="w-full rounded-card"
              />
            </Reveal>

            <Reveal delay={100}>
              <p className="kicker">המסירה</p>
              <h2 className="mt-6 text-(length:--text-display-sm) font-light leading-tight text-graphite">
                גם בלי חנות, הרגע הזה נשאר טקס
              </h2>
              <p className="mt-6 text-[1.0625rem] leading-relaxed text-body">
                התכשיט מגיע בקופסה שנבחרה בקפידה, עם התעודה המקורית, אישור אחריות
                ובקבוקון ניקוי. המשלוח מבוטח עד הדלת ובחתימה אישית, ובאזור המרכז
                אפשר גם מסירה אישית בתיאום.
              </p>
              <p className="mt-4 text-[0.9375rem] leading-relaxed text-muted">
                אם מדובר בהצעת נישואין — אמרו לנו. נתאם את המסירה כך שההפתעה
                תישמר, כולל שעות ואופן יצירת קשר שנוחים לכם.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <LuxButton href="/contact/" variant="solid">
                  תיאום פגישת ייעוץ
                </LuxButton>
                <LuxButton href={generalWhatsApp} variant="outline" external>
                  בוואטסאפ
                </LuxButton>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <JsonLd data={breadcrumbJsonLd(crumbs)} />
    </>
  );
}
