"use client";

import { useState } from "react";
import { waLink } from "@/lib/site";
import { WhatsAppIcon } from "@/components/icons";

const interests = ["טבעת אירוסין", "עגילים", "שרשרת", "צמיד", "עיצוב אישי", "אחר"];

export default function ContactForm() {
  const [name, setName] = useState("");
  const [interest, setInterest] = useState(interests[0]);
  const [budget, setBudget] = useState("");
  const [notes, setNotes] = useState("");

  const message = [
    `היי, אני ${name || "מתעניין/ת"} ואשמח לייעוץ.`,
    `מה מחפשים: ${interest}`,
    budget && `תקציב משוער: ${budget}`,
    notes && `עוד פרטים: ${notes}`,
  ]
    .filter(Boolean)
    .join("\n");

  const inputCls = "field";
  const labelCls =
    "mb-2 block text-[0.7rem] font-semibold tracking-[0.12em] text-ink-soft";

  return (
    <form
      className="space-y-6"
      onSubmit={(e) => {
        e.preventDefault();
        window.open(waLink(message), "_blank", "noopener,noreferrer");
      }}
    >
      <div>
        <label htmlFor="name" className={labelCls}>
          שם
        </label>
        <input
          id="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className={inputCls}
          placeholder="איך קוראים לכם?"
        />
      </div>

      <div>
        <label htmlFor="interest" className={labelCls}>
          מה מחפשים?
        </label>
        <select
          id="interest"
          value={interest}
          onChange={(e) => setInterest(e.target.value)}
          className={inputCls}
        >
          {interests.map((i) => (
            <option key={i} value={i}>
              {i}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="budget" className={labelCls}>
          תקציב משוער <span className="font-normal tracking-[0.08em] text-stone">(לא חובה)</span>
        </label>
        <input
          id="budget"
          type="text"
          value={budget}
          onChange={(e) => setBudget(e.target.value)}
          className={inputCls}
          placeholder="למשל: 5,000–8,000 ₪"
        />
      </div>

      <div>
        <label htmlFor="notes" className={labelCls}>
          מה עוד כדאי שנדע? <span className="font-normal tracking-[0.08em] text-stone">(לא חובה)</span>
        </label>
        <textarea
          id="notes"
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          rows={3}
          className={inputCls}
          placeholder="מועד, סגנון מועדף, מידה..."
        />
      </div>

      <button type="submit" className="btn-primary w-full">
        <WhatsAppIcon className="h-4 w-4" />
        שליחה בוואטסאפ
      </button>
      <p className="text-center text-xs text-stone">
        הטופס נפתח כהודעת וואטסאפ מוכנה — שולחים, ואנחנו עונים במהירות.
      </p>
    </form>
  );
}
