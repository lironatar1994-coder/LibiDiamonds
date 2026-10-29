import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { LuxButton } from "@/components/ui/LuxButton";
import { ArrowIcon, WhatsAppIcon } from "@/components/ui/Icons";
import { FaqAccordion } from "@/components/shared/FaqAccordion";
import { featuredFaqs } from "@/data/faqs";
import { generalWhatsApp } from "@/lib/contact";

export function FaqTeaser() {
  return (
    <section className="section">
      <div className="shell grid gap-10 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-4">
          <Reveal>
            <SectionHeading
              kicker="שאלות נפוצות"
              size="sm"
              title="כל מה ששואלים אותנו בפגישה הראשונה"
              lede="ריכזנו את הנפוצות ביותר. השאלה שלכם לא כאן? פשוט כתבו לנו."
            />
            <div className="mt-7 flex flex-wrap gap-3">
              <LuxButton href="/faq/" variant="outline">
                לכל השאלות
                <ArrowIcon />
              </LuxButton>
              <LuxButton href={generalWhatsApp} variant="whatsapp" external>
                <WhatsAppIcon />
                שאלה בוואטסאפ
              </LuxButton>
            </div>
          </Reveal>
        </div>

        <div className="lg:col-span-8">
          <Reveal delay={100}>
            <FaqAccordion items={featuredFaqs.slice(0, 5)} defaultOpen={0} />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
