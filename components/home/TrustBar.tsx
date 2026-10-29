import {
  CardIcon,
  CertificateIcon,
  InfinityIcon,
  TruckIcon,
} from "@/components/ui/Icons";

/** Each promise here is backed by an answer in data/faqs.ts. */
const items = [
  {
    icon: CertificateIcon,
    title: "תעודת GIA או IGI",
    note: "לכל יהלום — לעיון לפני ההחלטה",
  },
  {
    icon: TruckIcon,
    title: "משלוח מבוטח חינם",
    note: "עד הדלת, בחתימה אישית",
  },
  {
    icon: InfinityIcon,
    title: "אחריות לכל החיים",
    note: "על הצורפות והשיבוץ",
  },
  {
    icon: CardIcon,
    title: "עד 12 תשלומים",
    note: "ללא ריבית בכרטיס אשראי",
  },
];

export function TrustBar() {
  return (
    <section aria-label="ההתחייבויות שלנו" className="border-b border-line bg-white">
      <ul className="shell grid grid-cols-2 gap-x-3 gap-y-5 py-6 lg:grid-cols-4 lg:gap-6 lg:py-8">
        {items.map(({ icon: Icon, title, note }) => (
          <li key={title} className="flex items-center gap-3 lg:justify-center">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-blush text-gold-deep lg:h-12 lg:w-12">
              <Icon className="h-5 w-5 lg:h-6 lg:w-6" />
            </span>
            <span>
              <span className="block text-[0.875rem] font-bold leading-tight text-navy lg:text-[0.9375rem]">
                {title}
              </span>
              <span className="mt-0.5 block text-[0.75rem] leading-snug text-muted lg:text-[0.8125rem]">
                {note}
              </span>
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
}
