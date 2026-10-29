import { SmartImage } from "@/components/ui/SmartImage";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { ContactForm } from "@/components/shared/ContactForm";
import { Reveal } from "@/components/ui/Reveal";
import { JsonLd } from "@/components/ui/JsonLd";
import { breadcrumbJsonLd } from "@/lib/jsonld";
import { buildMetadata } from "@/lib/seo";
import { site } from "@/data/site";
import { generalWhatsApp, mailHref, telHref } from "@/lib/contact";

export const metadata = buildMetadata({
  title: "תיאום פגישת ייעוץ",
  description:
    "תיאום פגישת ייעוץ אישית בווידאו או בטלפון. ללא דמי ייעוץ, ללא התחייבות — נציג אבנים, תעודות ואפשרויות בטווח התקציב שתגדירו.",
  path: "/contact/",
  imageId: "contact-hero",
});

const expectations = [
  {
    title: "מה קורה אחרי שתשלחו",
    body: "נחזור אליכם באותו יום עסקים, בדרך שסימנתם. השיחה הראשונה היא בירור — נשאל מה חשוב לכם ונסביר מה אפשרי בתקציב.",
  },
  {
    title: "כמה זמן זה לוקח",
    body: "פגישת הייעוץ עצמה כ־45 דקות. אין צורך להחליט בה כלום, ורוב הלקוחות באמת לא מחליטים.",
  },
  {
    title: "דיסקרטיות",
    body: "אם מדובר בהצעת נישואין, נתאם שעות ואופן יצירת קשר שלא יחשפו כלום. אמרו לנו והכל יישמר.",
  },
];

export default function ContactPage() {
  const crumbs = [
    { name: "בית", path: "/" },
    { name: "תיאום פגישה", path: "/contact/" },
  ];

  return (
    <>
      <div className="shell pt-8 pb-10 lg:pt-10">
        <Breadcrumbs items={crumbs} />
      </div>

      <section className="shell pb-16 lg:pb-24">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Form column */}
          <div className="lg:col-span-7">
            <Reveal>
              <p className="kicker">פגישת ייעוץ</p>
              <h1 className="mt-5 text-(length:--text-display) font-light leading-[1.1] text-graphite">
                נתחיל בשיחה.
              </h1>
              <p className="mt-6 max-w-xl text-[1.0625rem] leading-relaxed text-body">
                השאירו שם וטלפון ונחזור אליכם. אם תוסיפו מה אתם מחפשים ובאיזה
                טווח תקציב — נגיע לשיחה עם אפשרויות מוחשיות כבר בהתחלה, וזה חוסך
                לכולם זמן.
              </p>
            </Reveal>

            <Reveal delay={110}>
              <div className="mt-11 border-t border-line pt-10">
                <ContactForm />
              </div>
            </Reveal>
          </div>

          {/* Contact rail */}
          <aside className="lg:col-span-5">
            <Reveal delay={80}>
              <SmartImage
                id="contact-hero"
                ratio="4 / 5"
                sizes="(min-width: 1024px) 40vw, 100vw"
                showLabel={false}
                className="w-full rounded-card"
              />
            </Reveal>

            <Reveal delay={140}>
              <div className="mt-6 rounded-card bg-pearl p-6 lg:p-7">
                <p className="kicker">ישירות</p>

                <ul className="mt-5 space-y-4">
                  <li>
                    <a
                      href={generalWhatsApp}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-baseline justify-between gap-4 border-b border-line pb-4"
                    >
                      <span className="text-[0.9375rem] text-graphite transition-colors duration-300 group-hover:text-champagne-deep">
                        וואטסאפ
                      </span>
                      <span className="text-[0.6875rem] track-wide uppercase text-champagne-deep">
                        המהיר ביותר
                      </span>
                    </a>
                  </li>
                  <li>
                    <a
                      href={telHref}
                      className="group flex items-baseline justify-between gap-4 border-b border-line pb-4"
                    >
                      <span className="text-[0.9375rem] text-graphite transition-colors duration-300 group-hover:text-champagne-deep">
                        טלפון
                      </span>
                      <span className="num text-[0.8125rem] text-muted" dir="ltr">
                        {site.phoneDisplay}
                      </span>
                    </a>
                  </li>
                  <li>
                    <a
                      href={mailHref}
                      className="group flex items-baseline justify-between gap-4"
                    >
                      <span className="text-[0.9375rem] text-graphite transition-colors duration-300 group-hover:text-champagne-deep">
                        אימייל
                      </span>
                      <span className="text-[0.8125rem] text-muted" dir="ltr">
                        {site.email}
                      </span>
                    </a>
                  </li>
                </ul>

                <p className="kicker mt-9">שעות מענה</p>
                <ul className="mt-5 space-y-2 text-[0.875rem] text-muted">
                  {site.hours.map((entry) => (
                    <li key={entry.days} className="flex justify-between gap-4">
                      <span>{entry.days}</span>
                      <span className="num" dir="ltr">
                        {entry.time}
                      </span>
                    </li>
                  ))}
                </ul>

                <p className="mt-6 border-t border-line pt-5 text-[0.8125rem] leading-relaxed text-muted">
                  אנחנו פועלים בכל הארץ, ללא חנות פיזית. פגישות נערכות בווידאו או
                  בתיאום אישי מראש.
                </p>
              </div>
            </Reveal>
          </aside>
        </div>
      </section>

      {/* Expectations */}
      <section className="section-tight border-t border-line bg-cream/50">
        <div className="shell">
          <div className="grid gap-10 sm:grid-cols-3">
            {expectations.map((item, index) => (
              <Reveal key={item.title} delay={index * 100}>
                <div className="border-t border-line pt-6">
                  <h2 className="font-(family-name:--font-display) text-[1.0625rem] font-light text-graphite">
                    {item.title}
                  </h2>
                  <p className="mt-3 text-[0.875rem] leading-relaxed text-muted">
                    {item.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <JsonLd data={breadcrumbJsonLd(crumbs)} />
    </>
  );
}
