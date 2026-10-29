import { LuxButton } from "@/components/ui/LuxButton";
import {
  CardIcon,
  CertificateIcon,
  InfinityIcon,
  PhoneIcon,
  TruckIcon,
  WhatsAppIcon,
} from "@/components/ui/Icons";
import { site } from "@/data/site";
import { productWhatsApp, telHref } from "@/lib/contact";
import { formatPriceFrom } from "@/lib/format";
import type { Product } from "@/data/products";

/**
 * There is no cart. This buy box is the whole conversion mechanism: an honest
 * opening price, then WhatsApp first (how Israeli buyers prefer to start),
 * a meeting second, and the phone for everyone else.
 */
export function ProductCta({ product }: { product: Product }) {
  const promises = [
    { icon: CertificateIcon, text: `תעודת ${product.certificate} לעיון לפני ההחלטה` },
    { icon: TruckIcon, text: "משלוח מבוטח חינם · 14 יום להחזרה" },
    { icon: InfinityIcon, text: "אחריות לכל החיים על הצורפות" },
    { icon: CardIcon, text: "עד 12 תשלומים ללא ריבית" },
  ];

  return (
    <div className="rounded-card border border-line bg-white p-5 shadow-soft lg:p-7">
      <p className="num text-[1.75rem] font-bold leading-none text-navy lg:text-[2rem]">
        {formatPriceFrom(product.priceFrom)}
      </p>

      <p className="mt-3 text-[0.875rem] leading-relaxed text-muted">
        {typeof product.priceFrom === "number"
          ? "המחיר משקף אבן בתעודה בתחתית הטווח המוצע. ההצעה המדויקת נבנית לפי האבן, המתכת והמידה שתבחרו."
          : "הדגם נבנה בהזמנה, ולכן המחיר נקבע לפי האבן והמתכת שתבחרו. נבנה לכם 2–3 אפשרויות בטווח שתגדירו."}
      </p>

      <div className="mt-5 flex flex-col gap-2.5">
        <LuxButton
          href={productWhatsApp(product.name)}
          variant="whatsapp"
          size="lg"
          external
          className="w-full"
        >
          <WhatsAppIcon />
          לקבלת הצעה בוואטסאפ
        </LuxButton>
        <LuxButton href="/contact/" variant="outline" size="lg" className="w-full">
          תיאום פגישת ייעוץ
        </LuxButton>
      </div>

      <p className="mt-4 flex items-center justify-center gap-2 text-[0.875rem] text-muted">
        <PhoneIcon className="h-4 w-4 text-gold-deep" />
        או בטלפון —
        <a href={telHref} className="num font-semibold text-navy hover:text-gold-deep" dir="ltr">
          {site.phoneDisplay}
        </a>
      </p>

      <ul className="mt-5 grid gap-3 border-t border-line pt-5 sm:grid-cols-2">
        {promises.map(({ icon: Icon, text }) => (
          <li key={text} className="flex items-center gap-2.5 text-[0.8125rem] leading-snug text-body">
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blush text-gold-deep">
              <Icon className="h-4 w-4" />
            </span>
            {text}
          </li>
        ))}
      </ul>
    </div>
  );
}
