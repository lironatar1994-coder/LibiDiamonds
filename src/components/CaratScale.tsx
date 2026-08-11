import type { CaratOption } from "@/data/products";

/** Millimetres to on-screen pixels. Fixed, so the circles stay true to each
 *  other — a 2.00ct really does read as bigger than a 1.00ct by the right
 *  proportion, which a number alone never conveys. */
const PX_PER_MM = 7.6;

export default function CaratScale({
  options,
  selectedIndex,
}: {
  options: CaratOption[];
  selectedIndex: number;
}) {
  const sized = options.filter((option) => option.stoneMm);
  if (sized.length < 2) return null;

  const selected = options[selectedIndex];
  const largest = Math.max(...sized.map((option) => option.stoneMm!));

  return (
    <figure className="mt-5 border border-line bg-white px-4 py-5 sm:px-5">
      <figcaption className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
        <span className="text-xs font-semibold tracking-[0.1em] text-ink-soft">
          גודל האבן, בקנה מידה
        </span>
        {selected?.stoneMm && (
          <span className="text-xs text-stone">
            קוטר משוער: ‎{selected.stoneMm} מ״מ
          </span>
        )}
      </figcaption>

      <div
        className="mt-4 flex flex-wrap items-end gap-x-5 gap-y-4 sm:gap-x-7"
        style={{ minHeight: largest * PX_PER_MM + 26 }}
      >
        {options.map((option, index) => {
          if (!option.stoneMm) return null;
          const size = option.stoneMm * PX_PER_MM;
          const isSelected = index === selectedIndex;

          return (
            <div key={option.label} className="flex flex-col items-center gap-2">
              <span
                aria-hidden
                style={{ width: size, height: size }}
                className={`block rounded-full transition-all duration-500 ${
                  isSelected
                    ? "border-2 border-gold-deep bg-[radial-gradient(circle_at_32%_28%,#ffffff_0%,#f0ece0_55%,#ded6c2_100%)] shadow-[0_2px_10px_rgba(134,113,63,0.22)]"
                    : "border border-line bg-white/70"
                }`}
              />
              <span
                className={`text-[0.68rem] tabular-nums transition-colors ${
                  isSelected ? "font-semibold text-ink" : "text-stone"
                }`}
              >
                {option.label.split(" ")[0]}
              </span>
            </div>
          );
        })}
      </div>

      <p className="mt-4 text-[0.7rem] leading-5 text-stone">
        הקטרים משוערים ומיועדים להשוואה בין האפשרויות. המידה המדויקת מופיעה בתעודה
        הגמולוגית של האבן שנבחרה.
      </p>
    </figure>
  );
}
