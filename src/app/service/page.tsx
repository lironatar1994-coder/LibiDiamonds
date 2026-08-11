import type { Metadata } from "next";
import { waLink, defaultWaMessage } from "@/lib/site";
import { WhatsAppIcon } from "@/components/icons";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "משלוחים, אחריות והחזרות",
  description:
    "כל פרטי השירות של LIBI DIAMONDS: משלוח מבוטח, אחריות מלאה, תעודות גמולוגיות ומדיניות החזרות הוגנת.",
  path: "/service",
});

const sections = [
  {
    title: "משלוחים",
    items: [
      "משלוח מבוטח עד הבית בכל רחבי הארץ, באריזת מתנה מוקפדת.",
      "פריטים מהקולקציה נשלחים תוך 7–14 ימי עסקים.",
      "פריטים בהתאמה אישית (מידה מיוחדת, אבן לפי בקשה, עיצוב אישי) — 3–4 שבועות.",
      "צריכים את התכשיט לתאריך מסוים? כתבו לנו ונעשה כל מאמץ להקדים.",
    ],
  },
  {
    title: "תעודה גמולוגית",
    items: [
      "כל יהלום מרכזי מגיע עם תעודה של מעבדה גמולוגית בינלאומית — IGI או GIA.",
      "התעודה מתעדת את משקל האבן, צבעה, ניקיונה ואיכות הליטוש, וכן את היותה יהלום מעבדה.",
      "מספר התעודה חרוט בלייזר על חגורת היהלום ברוב האבנים — לזיהוי ודאי.",
    ],
  },
  {
    title: "אחריות",
    items: [
      "אחריות יצרן מלאה על עבודת הצורפות: שיבוץ, מתכת וציפוי.",
      "התאמת מידה ראשונה לטבעת — ללא עלות.",
      "ניקוי והברקה של התכשיט — כלולים לכל החיים, בתיאום מראש.",
    ],
  },
  {
    title: "החזרות והחלפות",
    items: [
      "ניתן להחזיר או להחליף פריט מהקולקציה תוך 14 יום מקבלתו, במצבו המקורי ובצירוף התעודה.",
      "החזר כספי מתבצע לאמצעי התשלום המקורי, בהתאם להוראות חוק הגנת הצרכן.",
      "פריטים שיוצרו בהתאמה אישית ניתנים להחלפה בתיאום מראש בלבד.",
    ],
  },
];

export default function ServicePage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-14 sm:px-6">
      <header className="border-b border-line pb-8 sm:pb-10">
        <p className="eyebrow">שירות ומדיניות</p>
        <h1 className="mt-3 font-display text-4xl font-medium leading-tight sm:text-5xl">
          משלוחים, אחריות והחזרות
        </h1>
        <p className="mt-5 leading-8 text-stone">
          קנייה של תכשיט יהלום צריכה להרגיש בטוחה מהרגע הראשון. אלה
          ההתחייבויות שלנו אליכם.
        </p>
      </header>

      {/* numbered, rule-separated — same rhythm as the product standard list */}
      <div className="mt-10 sm:mt-12">
        {sections.map((s, index) => (
          <section
            key={s.title}
            className="grid gap-x-6 gap-y-4 border-b border-line py-8 sm:grid-cols-[minmax(9rem,0.4fr)_minmax(0,1fr)] sm:py-10"
          >
            <div className="flex items-baseline gap-3">
              <span className="font-display text-sm text-gold-deep" aria-hidden>
                {String(index + 1).padStart(2, "0")}
              </span>
              <h2 className="font-display text-2xl font-medium leading-tight">{s.title}</h2>
            </div>
            <ul className="space-y-3">
              {s.items.map((item) => (
                <li key={item} className="flex gap-3 leading-7 text-ink-soft">
                  <span className="mt-3 h-1 w-1 shrink-0 rounded-full bg-gold" aria-hidden />
                  {item}
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>

      <div className="mt-14 border border-line bg-cream p-8 text-center sm:p-10">
        <h2 className="font-display text-xl">שאלה שלא מופיעה כאן?</h2>
        <a
          href={waLink(defaultWaMessage)}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary mt-5"
        >
          <WhatsAppIcon className="h-4 w-4" />
          שאלו אותנו בוואטסאפ
        </a>
      </div>
    </div>
  );
}
