import { site } from "@/data/site";

/**
 * All outbound contact happens through here so the channel can be swapped
 * (e.g. to a real form backend) in one place.
 */

export const telHref = `tel:${site.phoneHref}`;
export const mailHref = `mailto:${site.email}`;

export function buildWhatsAppUrl(message?: string): string {
  const base = `https://wa.me/${site.whatsappNumber}`;
  if (!message) return base;
  return `${base}?text=${encodeURIComponent(message)}`;
}

/** Generic opener used by header/footer/floating button */
export const generalWhatsApp = buildWhatsAppUrl(
  "היי, הגעתי מהאתר של ליבי דיאמונדס ואשמח לתאם פגישת ייעוץ.",
);

/** Product-specific opener — pre-fills what the visitor was looking at */
export function productWhatsApp(productName: string): string {
  return buildWhatsAppUrl(
    `היי, הגעתי מהאתר של ליבי דיאמונדס ואשמח לקבל פרטים על ${productName}.`,
  );
}

export function categoryWhatsApp(categoryName: string): string {
  return buildWhatsAppUrl(
    `היי, הגעתי מהאתר של ליבי דיאמונדס ואשמח לקבל הצעה בקטגוריית ${categoryName}.`,
  );
}

export type ConsultationDraft = {
  name: string;
  phone: string;
  interest: string;
  budget: string;
  notes: string;
  preferredContact: string;
};

/** Composes the consultation form into a single readable WhatsApp message. */
export function buildConsultationMessage(draft: ConsultationDraft): string {
  const lines = [
    "היי, הגעתי מהאתר של ליבי דיאמונדס ואשמח לתאם פגישת ייעוץ.",
    "",
    `שם: ${draft.name || "—"}`,
    `טלפון: ${draft.phone || "—"}`,
  ];

  if (draft.interest) lines.push(`מתעניין ב: ${draft.interest}`);
  if (draft.budget) lines.push(`טווח תקציב: ${draft.budget}`);
  if (draft.preferredContact)
    lines.push(`דרך התקשרות מועדפת: ${draft.preferredContact}`);
  if (draft.notes) lines.push("", `הערות: ${draft.notes}`);

  return lines.join("\n");
}
