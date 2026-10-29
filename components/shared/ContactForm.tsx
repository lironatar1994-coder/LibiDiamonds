"use client";

import { useState } from "react";
import {
  buildConsultationMessage,
  buildWhatsAppUrl,
  type ConsultationDraft,
} from "@/lib/contact";

const interests = [
  "טבעת אירוסין",
  "טבעות נישואין",
  "צמיד טניס",
  "עגילים",
  "תליון או שרשרת",
  "יהלום בודד",
  "שיבוץ מחדש של אבן קיימת",
  "עוד לא יודע/ת",
];

const budgets = [
  "עד ₪5,000",
  "₪5,000 – ₪10,000",
  "₪10,000 – ₪20,000",
  "₪20,000 – ₪40,000",
  "מעל ₪40,000",
  "עדיין לא יודע/ת",
];

const contactPreferences = ["וואטסאפ", "שיחת טלפון", "שיחת וידאו"];

const fieldClass =
  "w-full min-h-12 rounded-xl border border-line-strong bg-white px-4 py-3 text-[1rem] text-navy transition-colors duration-200 placeholder:text-muted/70 focus:border-navy focus:outline-none focus:ring-2 focus:ring-navy/10";

const labelClass =
  "block text-[0.875rem] font-semibold text-navy";

/**
 * There is no backend on a static export, so the form composes its fields into
 * a single WhatsApp message. Swapping in a real endpoint later means changing
 * only handleSubmit.
 */
export function ContactForm() {
  const [draft, setDraft] = useState<ConsultationDraft>({
    name: "",
    phone: "",
    interest: "",
    budget: "",
    notes: "",
    preferredContact: contactPreferences[0],
  });
  const [error, setError] = useState<string | null>(null);

  const update = <K extends keyof ConsultationDraft>(
    key: K,
    value: ConsultationDraft[K],
  ) => {
    setDraft((current) => ({ ...current, [key]: value }));
    if (error) setError(null);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!draft.name.trim() || !draft.phone.trim()) {
      setError("נשמח לקבל שם וטלפון כדי שנוכל לחזור אליכם.");
      return;
    }

    const url = buildWhatsAppUrl(buildConsultationMessage(draft));
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-6">
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="cf-name" className={labelClass}>
            שם <span aria-hidden="true">*</span>
          </label>
          <input
            id="cf-name"
            name="name"
            type="text"
            required
            autoComplete="name"
            value={draft.name}
            onChange={(event) => update("name", event.target.value)}
            className={`mt-2 ${fieldClass}`}
            placeholder="השם שלכם"
          />
        </div>

        <div>
          <label htmlFor="cf-phone" className={labelClass}>
            טלפון <span aria-hidden="true">*</span>
          </label>
          <input
            id="cf-phone"
            name="phone"
            type="tel"
            required
            inputMode="tel"
            autoComplete="tel"
            dir="ltr"
            value={draft.phone}
            onChange={(event) => update("phone", event.target.value)}
            className={`mt-2 text-start ${fieldClass}`}
            placeholder="050-000-0000"
          />
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="cf-interest" className={labelClass}>
            מה אתם מחפשים
          </label>
          <select
            id="cf-interest"
            name="interest"
            value={draft.interest}
            onChange={(event) => update("interest", event.target.value)}
            className={`mt-2 ${fieldClass}`}
          >
            <option value="">בחרו אפשרות</option>
            {interests.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="cf-budget" className={labelClass}>
            טווח תקציב
          </label>
          <select
            id="cf-budget"
            name="budget"
            value={draft.budget}
            onChange={(event) => update("budget", event.target.value)}
            className={`mt-2 ${fieldClass}`}
          >
            <option value="">בחרו טווח</option>
            {budgets.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
          <p className="mt-2 text-[0.75rem] text-muted">
            עוזר לנו להציע אפשרויות רלוונטיות מיד. אין כאן מחויבות.
          </p>
        </div>
      </div>

      <fieldset>
        <legend className={labelClass}>איך נוח לכם שנחזור</legend>
        <div className="mt-3 flex flex-wrap gap-3">
          {contactPreferences.map((option) => {
            const selected = draft.preferredContact === option;
            return (
              <label
                key={option}
                className={`inline-flex min-h-11 cursor-pointer items-center rounded-full border px-5 text-[0.9375rem] font-medium transition-colors duration-200 has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-2 has-[:focus-visible]:outline-gold-deep ${
                  selected
                    ? "border-navy bg-navy text-white"
                    : "border-line-strong bg-white text-navy hover:border-navy"
                }`}
              >
                <input
                  type="radio"
                  name="preferredContact"
                  value={option}
                  checked={selected}
                  onChange={() => update("preferredContact", option)}
                  className="sr-only"
                />
                {option}
              </label>
            );
          })}
        </div>
      </fieldset>

      <div>
        <label htmlFor="cf-notes" className={labelClass}>
          פרטים נוספים
        </label>
        <textarea
          id="cf-notes"
          name="notes"
          rows={4}
          value={draft.notes}
          onChange={(event) => update("notes", event.target.value)}
          className={`mt-2 resize-y ${fieldClass}`}
          placeholder="סגנון, מידה, תאריך יעד, או כל דבר אחר שכדאי שנדע"
        />
      </div>

      {error && (
        <p role="alert" className="rounded-xl bg-blush px-4 py-3 text-[0.875rem] font-medium text-navy">
          {error}
        </p>
      )}

      <div className="border-t border-line pt-6">
        <button
          type="submit"
          className="inline-flex min-h-14 w-full items-center justify-center gap-2 rounded-full bg-whatsapp px-8 text-[1rem] font-semibold text-white transition-colors duration-200 hover:bg-whatsapp-hover sm:w-auto"
        >
          שליחת הפרטים בוואטסאפ
        </button>
        <p className="mt-4 text-[0.75rem] leading-relaxed text-muted">
          הכפתור פותח שיחת וואטסאפ עם הפרטים שמילאתם, כדי שתראו בדיוק מה נשלח
          לפני שאתם שולחים. מעדיפים אימייל או טלפון? הפרטים מופיעים כאן למטה.
        </p>
      </div>
    </form>
  );
}
