import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { buildMetadata } from "@/lib/seo";
import { site } from "@/data/site";
import { mailHref, telHref } from "@/lib/contact";

export const metadata = buildMetadata({
  title: "הצהרת נגישות",
  description:
    "הצהרת הנגישות של אתר ליבי דיאמונדס, בהתאם לתקן הישראלי ת״י 5568 ולתקנות שוויון זכויות לאנשים עם מוגבלות.",
  path: "/accessibility/",
});

/**
 * Israeli law (IS 5568 + Equal Rights for Persons with Disabilities
 * regulations) expects a published accessibility statement. Update the dates
 * and coordinator details before launch.
 */
export default function AccessibilityPage() {
  return (
    <>
      <div className="shell pt-8 pb-10 lg:pt-10">
        <Breadcrumbs
          items={[
            { name: "בית", path: "/" },
            { name: "הצהרת נגישות", path: "/accessibility/" },
          ]}
        />
      </div>

      <section className="shell pb-20">
        <p className="kicker">נגישות</p>
        <h1 className="mt-5 max-w-3xl text-(length:--text-display) font-light leading-[1.1] text-graphite">
          הצהרת נגישות
        </h1>

        <div className="mt-10 max-w-3xl space-y-6 text-[1.0625rem] leading-relaxed text-body">
          <p>
            אנחנו ב{site.legalName} רואים בנגישות האתר חלק מהשירות עצמו, ופועלים
            כדי שכל אדם יוכל להשתמש בו באופן עצמאי ונוח, ללא תלות בסוג המוגבלות
            או בטכנולוגיה המסייעת שבה הוא משתמש.
          </p>

          <h2 className="pt-4 font-(family-name:--font-display) text-[1.375rem] font-light text-graphite">
            רמת הנגישות באתר
          </h2>
          <p>
            האתר הותאם לדרישות התקן הישראלי ת״י 5568, המבוסס על הנחיות WCAG 2.0
            ברמת AA, ובכלל זה:
          </p>
          <ul className="space-y-2.5">
            {[
              "מבנה סמנטי תקין של כותרות ואזורי תוכן, המאפשר ניווט בקוראי מסך.",
              "אפשרות ניווט מלאה באמצעות מקלדת בלבד, כולל סימון ברור של הפוקוס.",
              "קישור ״דלג לתוכן הראשני״ בראש כל עמוד.",
              "טקסט חלופי לכל התמונות המשמעותיות באתר.",
              "יחסי ניגודיות בין טקסט לרקע העומדים בדרישות התקן.",
              "התאמה למגוון גדלי מסך, כולל טלפונים נידיים.",
              "צמצום אנימציות עבור משתמשים שהגדירו במערכת ההפעלה העדפה לתנועה מופחתת.",
              "תמיכה מלאה בכתיבה מימין לשמאל, בהתאמה לשפה העברית.",
            ].map((line) => (
              <li key={line} className="flex gap-3.5">
                <span
                  aria-hidden="true"
                  className="mt-2.5 h-1 w-1 shrink-0 rotate-45 bg-champagne"
                />
                {line}
              </li>
            ))}
          </ul>

          <h2 className="pt-4 font-(family-name:--font-display) text-[1.375rem] font-light text-graphite">
            החרגות ומגבלות
          </h2>
          <p>
            למרות מאמצינו, ייתכן שיימצאו באתר חלקים או תכנים שטרם הונגשו במלואם.
            אנחנו ממשיכים לשפר את הנגישות באופן שוטף, וכל פנייה בנושא מטופלת.
          </p>

          <h2 className="pt-4 font-(family-name:--font-display) text-[1.375rem] font-light text-graphite">
            נגישות השירות
          </h2>
          <p>
            לחברה אין חנות פיזית או משרד קבלת קהל, ולכן אין דרישת נגישות מבנית.
            השירות ניתן בשיחות טלפון, בהתכתבות ובשיחות וידאו. נשמח להתאים את אופן
            התקשורת לצרכים שלכם — לרבות תמלול, שיחה בקצב מותאם או העברת מידע
            בכתב במקום בשיחה.
          </p>

          <h2 className="pt-4 font-(family-name:--font-display) text-[1.375rem] font-light text-graphite">
            רכז הנגישות
          </h2>
          <p>
            נתקלתם בבעיית נגישות באתר, או שיש לכם בקשה להתאמה? נשמח לשמוע ולתקן.
          </p>
          <ul className="space-y-2">
            <li>
              טלפון:{" "}
              <a
                href={telHref}
                className="num text-champagne-deep underline decoration-champagne/40 underline-offset-4"
                dir="ltr"
              >
                {site.phoneDisplay}
              </a>
            </li>
            <li>
              אימייל:{" "}
              <a
                href={mailHref}
                className="text-champagne-deep underline decoration-champagne/40 underline-offset-4"
                dir="ltr"
              >
                {site.email}
              </a>
            </li>
          </ul>

          <p className="border-t border-line pt-6 text-[0.875rem] text-muted">
            הצהרה זו עודכנה בתאריך 17 באוגוסט 2026.
          </p>
        </div>
      </section>
    </>
  );
}
