import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import { site, waLink, defaultWaMessage } from "@/lib/site";
import { WhatsAppIcon, InstagramIcon } from "@/components/icons";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "צור קשר וייעוץ אישי",
  description:
    "נשמח ללוות אתכם בבחירת תכשיט היהלום — בוואטסאפ, במייל או בפגישה אישית. מענה מהיר ואישי.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
      <header className="max-w-2xl border-b border-line pb-8 sm:pb-10">
        <p className="eyebrow">צור קשר</p>
        <h1 className="mt-3 font-display text-4xl font-medium leading-tight sm:text-5xl">
          נשמח לדבר
        </h1>
        <p className="mt-5 max-w-xl leading-8 text-stone">
          מתלבטים? רוצים לראות אבנים? מחפשים משהו שלא באתר? הדרך הכי מהירה
          אלינו היא וואטסאפ — אבל כל דרך אחרת עובדת גם.
        </p>
      </header>

      <div className="mt-10 grid gap-10 sm:mt-12 lg:grid-cols-[minmax(0,1.05fr)_minmax(19rem,0.95fr)] lg:gap-16 xl:gap-24">
        <div className="max-w-xl">
          <h2 className="font-display text-2xl font-medium">כתבו לנו</h2>
          <p className="mb-7 mt-2 text-sm leading-6 text-stone">
            ממלאים את מה שרלוונטי — השאר יגיע בשיחה.
          </p>
          <ContactForm />
        </div>

        <div className="space-y-6">
          <div className="border border-line bg-cream p-7 sm:p-8">
            <h2 className="font-display text-xl">דרכים נוספות</h2>
            <span className="mt-3 block h-px w-8 bg-gold/55" aria-hidden />
            <ul className="mt-4 space-y-1 text-sm">
              <li>
                <a
                  href={waLink(defaultWaMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex min-h-11 items-center gap-3 text-ink-soft transition-colors hover:text-gold"
                >
                  <WhatsAppIcon className="h-5 w-5 text-gold" />
                  וואטסאפ: {site.phoneDisplay}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="flex min-h-11 items-center gap-3 text-ink-soft transition-colors hover:text-gold"
                >
                  <span className="text-gold">@</span>
                  {site.email}
                </a>
              </li>
              <li>
                <a
                  href={site.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex min-h-11 items-center gap-3 text-ink-soft transition-colors hover:text-gold"
                >
                  <InstagramIcon className="h-5 w-5 text-gold" />
                  libidiamonds@
                </a>
              </li>
            </ul>
          </div>

          <div className="border border-line p-7 sm:p-8">
            <h2 className="font-display text-xl">שעות מענה</h2>
            <span className="mt-3 block h-px w-8 bg-gold/55" aria-hidden />
            <dl className="mt-5 divide-y divide-line/70 text-sm text-ink-soft">
              {[
                ["ראשון–חמישי", "9:00–19:00"],
                ["שישי וערבי חג", "9:00–13:00"],
                ["שבת", "סגור"],
              ].map(([day, hours]) => (
                <div key={day} className="flex items-baseline justify-between gap-4 py-2.5 first:pt-0 last:pb-0">
                  <dt>{day}</dt>
                  <dd className="tabular-nums text-ink">{hours}</dd>
                </div>
              ))}
            </dl>
            <p className="mt-5 border-t border-line pt-5 text-xs leading-relaxed text-stone">
              פגישות אישיות להתרשמות מהאבנים — בתיאום מראש.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
