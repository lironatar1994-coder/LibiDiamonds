import Link from "next/link";
import type { Metadata } from "next";
import { Photo } from "@/components/directions/Photo";
import { stock } from "@/lib/stock";

export const metadata: Metadata = {
  title: "שלושה כיוונים לעיצוב",
  robots: { index: false, follow: false },
};

const directions = [
  {
    href: "/directions/a/",
    letter: "א",
    name: "ברוח Green Diamonds",
    like: "greendiamonds.co.il — אפור בהיר, אותיות מרווחות, כפתורים שחורים",
    body: "אותו מבנה ואותם צבעים: קטגוריות בתמונות, ביקורות על רקע כהה, טבלת טבעי מול מעבדה, צורות יהלום.",
    photo: stock.cushionHaloBridalSet,
  },
  {
    href: "/directions/b/",
    letter: "ב",
    name: "ברוח שלומית אופיר",
    like: "shlomitofir.com — פס חום, רצועת חול, אותיות דקות",
    body: "אותו מבנה ואותם צבעים: מוצרים חדשים, אריחי קטגוריה מקצה לקצה, פס כהה על המותג, השראה.",
    photo: stock.solitaireBlushMarble,
  },
  {
    href: "/directions/c/",
    letter: "ג",
    name: "ברוח X Lab Diamonds",
    like: "xlabdiamonds.co.il — לבן, זהב וירוק כהה",
    body: "אותו מבנה ואותם צבעים: Hero מלא עם תפריט עליו, קרוסלת טבעות במרכז, פס שירותים, באנר ירוק.",
    photo: stock.roseSolitaireLinen,
  },
];

export default function DirectionsIndex() {
  return (
    <div dir="rtl" className="min-h-svh bg-white px-5 py-10 lg:px-10 lg:py-16">
      <div className="mx-auto max-w-6xl">
        <h1 className="font-[family-name:var(--font-display)] text-[2rem] text-[#111] lg:text-[3rem]">
          ליבי דיאמונדס — שלושה כיוונים
        </h1>
        <p className="mt-2 text-[1rem] text-[#5c5c5c]">
          כל כיוון הוא דף בית מלא. פתחו כל אחד, גללו עד הסוף ובחרו.
        </p>
        <ul className="mt-8 grid gap-6 md:grid-cols-3">
          {directions.map((d) => (
            <li key={d.href}>
              <Link href={d.href} className="group block">
                <div className="overflow-hidden rounded-xl bg-[#f3f3f2]">
                  <Photo src={d.photo} alt="" sizes="(min-width: 768px) 33vw, 100vw" className="aspect-[4/3] w-full transition-transform duration-700 group-hover:scale-[1.03]" />
                </div>
                <h2 className="mt-4 font-[family-name:var(--font-body)] text-[1.25rem] font-bold text-[#111]">
                  כיוון {d.letter}׳ — {d.name}
                </h2>
                <p className="text-[0.875rem] text-[#7a6236]">{d.like}</p>
                <p className="mt-2 text-[0.9375rem] leading-relaxed text-[#4a4a4a]">{d.body}</p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
