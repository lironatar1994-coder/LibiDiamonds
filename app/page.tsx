import { Hero } from "@/components/home/Hero";
import { TrustBar } from "@/components/home/TrustBar";
import { CategoryShowcase } from "@/components/home/CategoryShowcase";
import { FeaturedPieces } from "@/components/home/FeaturedPieces";
import { ShopByShape } from "@/components/home/ShopByShape";
import { ValueStory } from "@/components/home/ValueStory";
import { NaturalVsLab } from "@/components/home/NaturalVsLab";
import { ConsultationInvite } from "@/components/home/ConsultationInvite";
import { Testimonials } from "@/components/home/Testimonials";
import { FaqTeaser } from "@/components/home/FaqTeaser";
import { LookbookStrip } from "@/components/home/LookbookStrip";
import { JsonLd } from "@/components/ui/JsonLd";
import { faqPageJsonLd } from "@/lib/jsonld";
import { featuredFaqs } from "@/data/faqs";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "ליבי דיאמונדס — טבעות אירוסין ותכשיטי יהלומים, טבעי ומעבדה",
  description:
    "טבעות אירוסין, צמידי טניס, עגילים ותליוני יהלום — יהלום טבעי או מעבדה בתעודת GIA ו־IGI. משלוח מבוטח חינם, עד 12 תשלומים ואחריות לכל החיים, בליווי אישי.",
  path: "/",
});

/**
 * Section order follows the Israeli diamond houses that convert best online:
 * promise + action, trust, browse by category, bestsellers with prices,
 * shape picker, why-us, natural vs lab, the buying process, proof, answers.
 */
export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustBar />
      <CategoryShowcase />
      <FeaturedPieces />
      <ShopByShape />
      <ValueStory />
      <NaturalVsLab />
      <ConsultationInvite />
      <Testimonials />
      <FaqTeaser />
      <LookbookStrip />
      <JsonLd data={faqPageJsonLd(featuredFaqs)} />
    </>
  );
}
