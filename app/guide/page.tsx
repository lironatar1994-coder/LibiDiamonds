import Link from "next/link";
import { PageHero } from "@/components/ui/PageHero";
import { SmartImage } from "@/components/ui/SmartImage";
import { Reveal } from "@/components/ui/Reveal";
import { LuxButton } from "@/components/ui/LuxButton";
import { JsonLd } from "@/components/ui/JsonLd";
import { breadcrumbJsonLd } from "@/lib/jsonld";
import { buildMetadata } from "@/lib/seo";
import { generalWhatsApp } from "@/lib/contact";

export const metadata = buildMetadata({
  title: "מדריך היהלומים — ארבעת ה־C, טבעי מול מעבדה ותעודות",
  description:
    "מדריך יהלומים מלא בעברית: ליטוש, גוון, ניקיון ומשקל, ההבדל בין יהלום טבעי ליהלום מעבדה, איך קוראים תעודת GIA ו־IGI, ואיפה באמת כדאי לחסוך.",
  path: "/guide/",
  imageId: "guide-hero",
});

const toc = [
  { id: "cut", label: "ליטוש — Cut" },
  { id: "color", label: "גוון — Color" },
  { id: "clarity", label: "ניקיון — Clarity" },
  { id: "carat", label: "משקל — Carat" },
  { id: "shapes", label: "צורות ליטוש" },
  { id: "natural-vs-lab", label: "טבעי מול מעבדה" },
  { id: "certificates", label: "תעודות" },
  { id: "where-to-save", label: "איפה כדאי לחסוך" },
];

function SectionShell({
  id,
  kicker,
  title,
  children,
  imageId,
}: {
  id: string;
  kicker: string;
  title: string;
  children: React.ReactNode;
  imageId?: string;
}) {
  return (
    <section id={id} className="scroll-mt-28 border-t border-line py-14 lg:py-20">
      <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
        <Reveal className="lg:col-span-4">
          <p className="kicker">{kicker}</p>
          <h2 className="mt-5 font-(family-name:--font-display) text-(length:--text-display-sm) font-light leading-tight text-graphite">
            {title}
          </h2>
          {imageId && (
            <div className="mt-8">
              <SmartImage
                id={imageId}
                ratio="4 / 3"
                sizes="(min-width: 1024px) 30vw, 100vw"
                showLabel={false}
                className="w-full rounded-card"
              />
            </div>
          )}
        </Reveal>

        <Reveal delay={90} className="lg:col-span-8">
          <div className="max-w-3xl space-y-5 text-[1.0625rem] leading-relaxed text-body">
            {children}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default function GuidePage() {
  const crumbs = [
    { name: "בית", path: "/" },
    { name: "מדריך היהלומים", path: "/guide/" },
  ];

  return (
    <>
      <PageHero
        kicker="מדריך"
        title="מדריך היהלומים"
        lede="כל מה שצריך לדעת לפני שקונים — כולל הדברים שמוכרים בדרך כלל לא ממהרים לספר."
        imageId="guide-hero"
        crumbs={crumbs}
      />

      <div className="shell">
        {/* Intro + TOC */}
        <section className="py-14 lg:py-16">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
            <Reveal className="lg:col-span-7">
              <p className="font-(family-name:--font-display) text-[1.375rem] font-light leading-relaxed text-graphite">
                כמעט כל מי שקונה יהלום בפעם הראשונה משלם יותר מדי על פרמטר אחד
                ופחות מדי על אחר. המדריך הזה קיים כדי שזה לא יקרה לכם.
              </p>
              <p className="mt-6 text-[1.0625rem] leading-relaxed text-body">
                יהלום מדורג לפי ארבעה פרמטרים שנקראים ארבעת ה־C. הם לא שווים
                בחשיבותם — אחד מהם משפיע על איך שהאבן נראית יותר מכל השאר יחד,
                ושניים מהם משפיעים בעיקר על מה שכתוב בתעודה. ההבנה הזאת היא
                ההבדל בין לשלם על יהלום ובין לשלם על נייר.
              </p>
            </Reveal>

            <Reveal delay={90} className="lg:col-span-5">
              <nav
                aria-label="תוכן המדריך"
                className="rounded-card bg-pearl p-6 lg:p-7"
              >
                <p className="kicker">בתוך המדריך</p>
                <ol className="mt-5 space-y-2.5">
                  {toc.map((item, index) => (
                    <li key={item.id} className="flex gap-3">
                      <span
                        aria-hidden="true"
                        className="num text-[0.75rem] text-champagne-deep/70"
                      >
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <Link
                        href={`#${item.id}`}
                        className="text-[0.9375rem] text-graphite transition-colors duration-300 hover:text-champagne-deep"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ol>
              </nav>
            </Reveal>
          </div>
        </section>

        <SectionShell
          id="cut"
          kicker="הפרמטר החשוב ביותר"
          title="ליטוש — Cut"
          imageId="guide-cut"
        >
          <p>
            הליטוש הוא הפרמטר היחיד מארבעת ה־C שנקבע על ידי אדם ולא על ידי הטבע,
            והוא זה שקובע כמה מהאור שנכנס לאבן חוזר לעין. יהלום מלוטש נכון מחזיר
            את האור למעלה; יהלום מלוטש עמוק מדי או שטוח מדי מדליף אותו דרך הצדדים
            והתחתית, ואז האבן נראית עמומה — גם אם היא לבנה לחלוטין ונקייה לחלוטין.
          </p>
          <p>
            הסולם של GIA הוא Excellent, Very Good, Good, Fair, Poor. ההמלצה שלנו
            פשוטה: אל תרדו מ־Very Good, ובאבן עגולה שאפו ל־Excellent. זה הפרמטר
            שבו התפשרות נראית מיד, בכל תאורה, לכל אחד.
          </p>
          <p className="border-s-2 border-champagne/50 ps-5 text-graphite">
            אבן בליטוש Excellent בגוון G תיראה לבנה ובוהקת יותר מאבן בליטוש Good
            בגוון E — למרות שעל הנייר הגוון שלה נחות. זו הטעות היחידה שעולה לרוב
            הקונים הכי הרבה כסף.
          </p>
        </SectionShell>

        <SectionShell
          id="color"
          kicker="מקום טוב לחסוך"
          title="גוון — Color"
          imageId="guide-color"
        >
          <p>
            הגוון נמדד בסולם מ־D עד Z, כאשר D הוא לבן צח לחלוטין ו־Z הוא גוון
            צהבהב בולט. הקבוצות המקובלות הן D–F (חסר צבע), G–J (כמעט חסר צבע),
            K–M (גוון קלוש) והמשך.
          </p>
          <p>
            הנקודה החשובה: את הדירוג הזה קובעים במעבדה, כשהאבן מונחת הפוכה על רקע
            לבן — מצב שבו רואים הבדלים שלא רואים אחר כך. אחרי שיבוץ, בתאורה
            רגילה, ההבדל בין D ל־G כמעט לא ניתן לזיהוי גם לעין מאומנת.
          </p>
          <p>
            מה שכן משנה: המתכת. בזהב לבן ובפלטינה כדאי להישאר בטווח D–H, כי המתכת
            הבהירה מדגישה גוון צהוב באבן. בזהב צהוב או ורוד אפשר לרדת בנוחות
            ל־I–K — המתכת החמה בולעת את הגוון, ואף אחד לא ישים לב. שם החיסכון
            אמיתי.
          </p>
        </SectionShell>

        <SectionShell
          id="clarity"
          kicker="מקום נוסף לחסוך"
          title="ניקיון — Clarity"
          imageId="guide-clarity"
        >
          <p>
            הניקיון מתאר כמה כלולים פנימיים ופגמים חיצוניים יש באבן, וכמה הם
            בולטים. הסולם: FL (חסר פגם), IF, VVS1–VVS2, VS1–VS2, SI1–SI2,
            I1–I3.
          </p>
          <p>
            הדירוג נעשה בהגדלה פי 10, בלופה. בעין בלתי מזוינת, אבן VS2 נראית
            נקייה לגמרי — בדיוק כמו אבן VVS1 שעולה משמעותית יותר. לכן ברוב
            התכשיטים אין הצדקה כלכלית לעלות מעל VS.
          </p>
          <p>
            יש חריג אחד חשוב: ליטושים פתוחים כמו אמרלד ואשר. באבנים האלה הפאות
            רחבות והאבן שקופה כמו חלון, ולכן כלולים נראים בהן בקלות רבה יותר. שם
            נמליץ על VS1 ומעלה, גם במחיר של ירידה במשקל.
          </p>
        </SectionShell>

        <SectionShell
          id="carat"
          kicker="משקל, לא גודל"
          title="משקל — Carat"
          imageId="guide-carat"
        >
          <p>
            קראט הוא יחידת משקל (0.2 גרם), לא יחידת גודל. שתי אבנים באותו משקל
            יכולות להיראות שונות בקוטר לגמרי, תלוי בליטוש: אבן שמלוטשת עמוק
            &quot;מחביאה&quot; משקל בתחתית ונראית קטנה יותר מלמעלה.
          </p>
          <p>
            המחיר לא עולה באופן קווי אלא במדרגות, סביב משקלים עגולים — 0.50,
            0.70, 1.00, 1.50, 2.00. הקפיצה בין 0.95 קראט ל־1.00 קראט יכולה להיות
            עשרות אחוזים במחיר, בזמן שההפרש בקוטר הוא פחות מחצי מילימטר ואינו
            נראה בעין.
          </p>
          <p className="border-s-2 border-champagne/50 ps-5 text-graphite">
            אבן של 0.92–0.97 קראט היא אחת ההמלצות הטובות ביותר שאנחנו נותנים.
            היא נראית זהה לקראט שלם ועולה משמעותית פחות, פשוט כי היא לא חוצה מספר
            עגול.
          </p>
        </SectionShell>

        <SectionShell
          id="shapes"
          kicker="צורות"
          title="צורות ליטוש"
          imageId="guide-shapes"
        >
          <p>
            הליטוש העגול המבריק הוא היחיד שעבורו קיים דירוג ליטוש רשמי מלא, והוא
            גם המחזיר את הכי הרבה אור — ולכן גם היקר ביותר לקראט. כל השאר נקראים
            &quot;ליטושי פנסי&quot;.
          </p>
          <ul className="space-y-3">
            {[
              ["אובל", "מאריך את האצבע ונראה גדול יותר מהמשקל שלו. אחת הבחירות הפופולריות ביותר כיום."],
              ["אמרלד", "לוחות אור רחבים במקום נצנוץ. קו נקי ומאופק — אבל דורש ניקיון גבוה יותר."],
              ["פאר (טיפה)", "אלגנטי ומאריך, אך רגיש לסימטריה ולאפקט העניבה בפאה המרכזית."],
              ["מרקיזה", "מקסימום נראות לקראט. דרמטי, ולא לכל יד."],
              ["כרית (Cushion)", "מרוכך ורומנטי, מחזיר אור בניצוצות גדולים יותר מעגול."],
              ["רדיאנט", "משלב מסגרת מרובעת עם ברק של עגול. בוהק מאוד."],
              ["פרינסס", "מרובע וחד־קווי, מנצל את חומר הגלם בצורה יעילה ולכן משתלם."],
              ["אשר", "אמרלד מרובע, ארט־דקו במובהק. דורש ניקיון גבוה."],
            ].map(([name, note]) => (
              <li key={name} className="flex gap-3.5">
                <span
                  aria-hidden="true"
                  className="mt-2.5 h-1 w-1 shrink-0 rotate-45 bg-champagne"
                />
                <span>
                  <strong className="font-normal text-graphite">{name}</strong>{" "}
                  — {note}
                </span>
              </li>
            ))}
          </ul>
        </SectionShell>

        <SectionShell
          id="natural-vs-lab"
          kicker="ההחלטה הגדולה"
          title="יהלום טבעי מול יהלום מעבדה"
        >
          <p>
            מבחינה כימית ופיזיקלית מדובר באותו דבר בדיוק: פחמן גבישי טהור, קשיות
            10 בסולם מוס, אותו מקדם שבירת אור, אותו ברק. יהלום מעבדה אינו חיקוי
            ואינו זירקוניה — הוא יהלום. גם שמאי עם לופה לא יכול להבחין ביניהם;
            הזיהוי דורש מכשור שבודק סימני תהליך גדילה, לא איכות.
          </p>
          <p>
            ההבדל האמיתי הוא במחיר ובמה שקורה לו לאורך זמן. יהלום טבעי נשען על
            נדירות גיאולוגית שאינה ניתנת לשחזור, ולכן שומר על ערכו טוב יותר.
            יהלום מעבדה מיוצר לפי ביקוש, ומחירו ירד משמעותית בעשור האחרון — וסביר
            שימשיך.
          </p>
          <p>
            בפועל, אותו תקציב שקונה חצי קראט טבעי יקנה קראט וחצי במעבדה, בגוון
            לבן יותר ובניקיון גבוה יותר. אז מה נכון לכם?
          </p>
          <ul className="space-y-3">
            <li className="flex gap-3.5">
              <span aria-hidden="true" className="mt-2.5 h-1 w-1 shrink-0 rotate-45 bg-champagne" />
              <span>
                <strong className="font-normal text-graphite">טבעי</strong> — אם
                חשוב לכם נכס שישמור ערך, אם התכשיט מיועד לעבור בין דורות, או אם
                עצם הנדירות היא חלק מהמשמעות.
              </span>
            </li>
            <li className="flex gap-3.5">
              <span aria-hidden="true" className="mt-2.5 h-1 w-1 shrink-0 rotate-45 bg-champagne" />
              <span>
                <strong className="font-normal text-graphite">מעבדה</strong> — אם
                המטרה היא התכשיט המרשים ביותר בתקציב שיש, או אם אתם רוצים אבן
                גדולה שפשוט לא בהישג יד בטבעי.
              </span>
            </li>
          </ul>
          <p>
            אנחנו מוכרים את שניהם ולא מעדיפים אף אחד מהם. מה שאנחנו כן מתחייבים
            לו: אף פעם לא נמכור לכם אבן אחת בתור השנייה, וכל יהלום מעבדה מגיע
            בתעודה שמציינת זאת במפורש ובסימון חרוט על הקמר.
          </p>
        </SectionShell>

        <SectionShell id="certificates" kicker="אימות" title="תעודות — GIA ו־IGI">
          <p>
            תעודה היא חוות דעת של מעבדה בלתי תלויה על האבן. בלעדיה, כל מה שנאמר
            לכם על הגוון והניקיון הוא הבטחה בעל פה.
          </p>
          <p>
            <strong className="font-normal text-graphite">GIA</strong> נחשבת
            למחמירה והעקבית ביותר בעולם, והיא תקן הזהב ליהלומים טבעיים. אבן GIA
            תדורג לרוב שמרנית יותר מאותה אבן במעבדה אחרת — וזו בדיוק הסיבה שהיא
            שווה יותר.
          </p>
          <p>
            <strong className="font-normal text-graphite">IGI</strong> היא המעבדה
            המובילה בתחום יהלומי המעבדה ומספקת עבורם תעודות מלאות ומפורטות,
            הכוללות ציון מפורש שמדובר ביהלום שגודל במעבדה.
          </p>
          <p>
            כל תעודה נושאת מספר, ואת המספר הזה אפשר להזין באתר של GIA או IGI
            ולראות את הדוח המקורי. אנחנו שולחים את התעודה לפני ההחלטה בדיוק כדי
            שתעשו את הבדיקה הזאת בעצמכם.
          </p>
        </SectionShell>

        <SectionShell
          id="where-to-save"
          kicker="לסיכום"
          title="איפה כדאי לחסוך — ואיפה לא"
        >
          <p>
            אם תזכרו רק דבר אחד מכל המדריך, שיהיה זה: שלמו על ליטוש, חסכו על
            נייר.
          </p>
          <ul className="space-y-3">
            {[
              ["אל תתפשרו על ליטוש", "Very Good ומעלה, ובעגול שאפו ל־Excellent. זה מה שכולם רואים."],
              ["חסכו בגוון לפי המתכת", "בזהב צהוב או ורוד אפשר לרדת ל־I–K בנוחות ולחסוך אלפים."],
              ["אל תשלמו על VVS", "מ־VS2 ומעלה אף אחד לא רואה הבדל בעין. החריג: אמרלד ואשר."],
              ["בחרו משקל שלא חוצה מספר עגול", "0.92–0.97 קראט נראה כמו קראט שלם ועולה פחות."],
              ["דרשו תעודה תמיד", "בלי תעודה, אין דרך לדעת אם מה שנאמר לכם נכון."],
            ].map(([title, note]) => (
              <li key={title} className="flex gap-3.5">
                <span
                  aria-hidden="true"
                  className="mt-2.5 h-1 w-1 shrink-0 rotate-45 bg-champagne"
                />
                <span>
                  <strong className="font-normal text-graphite">{title}</strong>{" "}
                  — {note}
                </span>
              </li>
            ))}
          </ul>
        </SectionShell>
      </div>

      {/* Close */}
      <section className="section-tight border-t border-line bg-cream/50">
        <div className="shell">
          <Reveal>
            <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
              <div className="max-w-xl">
                <h2 className="font-(family-name:--font-display) text-(length:--text-display-sm) font-light leading-tight text-graphite">
                  נעבור על זה יחד על אבנים אמיתיות
                </h2>
                <p className="mt-4 text-[0.9375rem] leading-relaxed text-muted">
                  התיאוריה מועילה, אבל ההבדל בין שתי אבנים נראה בעיניים. בפגישה
                  נציג שתיים־שלוש אפשרויות באותו תקציב ונסביר על כל אחת.
                </p>
              </div>
              <div className="flex flex-wrap gap-4">
                <LuxButton href="/contact/" variant="solid">
                  תיאום פגישת ייעוץ
                </LuxButton>
                <LuxButton href={generalWhatsApp} variant="outline" external>
                  שאלה בוואטסאפ
                </LuxButton>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <JsonLd data={breadcrumbJsonLd(crumbs)} />
    </>
  );
}
