/**
 * Single source of truth for brand + contact details.
 * Replace the placeholder phone/email/social values before launch.
 */

export const site = {
  name: "ליבי דיאמונדס",
  nameLatin: "LIBI DIAMONDS",
  tagline: "יהלומים טבעיים ויהלומי מעבדה",
  shortDescription:
    "יהלומים טבעיים ויהלומי מעבדה, בתעודות GIA ו-IGI, בליווי אישי ובמחיר שנקבע ביהלום עצמו — לא בשכירות של חלון ראווה.",

  baseUrl: "https://www.libidiamonds.co.il",

  // E.164 without the plus, for wa.me links
  whatsappNumber: "972500000000",
  // Display + tel: form
  phoneDisplay: "050-000-0000",
  phoneHref: "+972500000000",
  email: "hello@libidiamonds.co.il",

  hours: [
    { days: "ראשון – חמישי", time: "09:00 – 19:00" },
    { days: "שישי", time: "09:00 – 13:00" },
    { days: "שבת", time: "סגור" },
  ],

  social: {
    instagram: "https://instagram.com/libidiamonds",
    facebook: "https://facebook.com/libidiamonds",
  },

  legalName: "ליבי דיאמונדס בע״מ",
} as const;

/**
 * Service promises shown in the announcement bar. Each one is backed by an
 * answer in data/faqs.ts — keep the two in sync if a policy changes.
 */
export const announcements: string[] = [
  "משלוח מבוטח עד הבית — ללא עלות",
  "עד 12 תשלומים ללא ריבית",
  "תעודת GIA או IGI לכל יהלום",
  "אחריות לכל החיים על הצורפות והשיבוץ",
  "14 יום להחזרה · שינוי מידה ראשון חינם",
];

export type NavItem = {
  label: string;
  href: string;
  description?: string;
  /** Small pill after the label, e.g. a value cue */
  badge?: string;
};

export const primaryNav: NavItem[] = [
  { label: "טבעות אירוסין", href: "/collections/engagement-rings/" },
  { label: "טבעות נישואין", href: "/collections/wedding-bands/" },
  { label: "צמידי טניס", href: "/collections/tennis-bracelets/" },
  { label: "עגילים", href: "/collections/earrings/" },
  { label: "תליונים", href: "/collections/pendants/" },
  { label: "יהלומים טבעיים", href: "/collections/natural-diamonds/" },
  { label: "יהלומי מעבדה", href: "/collections/lab-diamonds/", badge: "משתלם" },
];

export const secondaryNav: NavItem[] = [
  { label: "מדריך היהלומים", href: "/guide/" },
  { label: "הסיפור שלנו", href: "/about/" },
  { label: "שאלות נפוצות", href: "/faq/" },
];
