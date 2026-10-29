import Link from "next/link";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { FaqAccordion } from "@/components/shared/FaqAccordion";
import { Reveal } from "@/components/ui/Reveal";
import { LuxButton } from "@/components/ui/LuxButton";
import { JsonLd } from "@/components/ui/JsonLd";
import { breadcrumbJsonLd, faqPageJsonLd } from "@/lib/jsonld";
import { buildMetadata } from "@/lib/seo";
import { allFaqs, faqGroups } from "@/data/faqs";
import { generalWhatsApp } from "@/lib/contact";

export const metadata = buildMetadata({
  title: "שאלות נפוצות",
  description:
    "התשובות לשאלות שנשאלות בכל פגישה: איך רואים תכשיט בלי חנות, מה ההבדל בין יהלום טבעי למעבדה, מה כוללת האחריות ואיך עובד תהליך ההזמנה.",
  path: "/faq/",
});

export default function FaqPage() {
  const crumbs = [
    { name: "בית", path: "/" },
    { name: "שאלות נפוצות", path: "/faq/" },
  ];

  return (
    <>
      <div className="shell pt-8 pb-10 lg:pt-10">
        <Breadcrumbs items={crumbs} />
      </div>

      <section className="shell pb-14">
        <Reveal>
          <p className="kicker">שאלות נפוצות</p>
          <h1 className="mt-5 max-w-3xl text-(length:--text-display) font-light leading-[1.1] text-graphite">
            כל מה שנשאלנו, כולל מה שלא נוח לענות עליו
          </h1>
          <p className="mt-6 max-w-2xl text-[1.0625rem] leading-relaxed text-body">
            ריכזנו כאן את השאלות שחוזרות בכל פגישה ראשונה — כולל השאלות הקשות על
            שמירת ערך של יהלומי מעבדה ועל קנייה ממותג שלא הכרתם. אם משהו חסר,
            פשוט שאלו.
          </p>
        </Reveal>
      </section>

      {/* Quick jump */}
      <section className="shell pb-16">
        <Reveal delay={80}>
          <nav aria-label="ניווט בין נושאים" className="border-y border-line py-5">
            <ul className="flex flex-wrap gap-x-8 gap-y-2.5">
              {faqGroups.map((group) => (
                <li key={group.id}>
                  <Link
                    href={`#${group.id}`}
                    className="link-draw text-muted transition-colors duration-300 hover:text-champagne-deep"
                  >
                    {group.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </Reveal>
      </section>

      {/* Groups */}
      <section className="shell pb-8">
        <div className="space-y-16 lg:space-y-20">
          {faqGroups.map((group) => (
            <div key={group.id} id={group.id} className="scroll-mt-28">
              <div className="grid gap-8 lg:grid-cols-12 lg:gap-16">
                <Reveal className="lg:col-span-4">
                  <h2 className="font-(family-name:--font-display) text-(length:--text-display-sm) font-light leading-tight text-graphite">
                    {group.title}
                  </h2>
                </Reveal>

                <Reveal delay={90} className="lg:col-span-8">
                  <FaqAccordion items={group.items} />
                </Reveal>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Still have a question */}
      <section className="section-tight mt-8 border-t border-line bg-cream/50">
        <div className="shell">
          <Reveal>
            <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
              <div className="max-w-xl">
                <h2 className="font-(family-name:--font-display) text-(length:--text-display-sm) font-light leading-tight text-graphite">
                  נשארה שאלה?
                </h2>
                <p className="mt-4 text-[0.9375rem] leading-relaxed text-muted">
                  שאלו אותה ישירות. אנחנו עונים גם על שאלות שלא נגמרות ברכישה, וגם
                  על שאלות שכבר שאלתם פעם.
                </p>
              </div>
              <div className="flex flex-wrap gap-4">
                <LuxButton href={generalWhatsApp} variant="solid" external>
                  שליחת שאלה בוואטסאפ
                </LuxButton>
                <LuxButton href="/contact/" variant="outline">
                  תיאום פגישה
                </LuxButton>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <JsonLd data={faqPageJsonLd(allFaqs)} />
      <JsonLd data={breadcrumbJsonLd(crumbs)} />
    </>
  );
}
