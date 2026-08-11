const assurances = [
  "משלוח מבוטח — ללא עלות",
  "תעודה גמולוגית לכל יהלום",
  "התאמת מידה ראשונה עלינו",
  "אחריות יצרן מלאה",
];

/**
 * Slim assurance band above the header. All four items are always in the DOM
 * for screen readers; on phones they cross-fade one at a time because four
 * will not fit a 390px line.
 */
export default function AssuranceBar() {
  return (
    <div className="assurance-bar border-b border-line/70 bg-cream">
      <ul className="assurance-list mx-auto flex max-w-7xl items-center justify-center gap-x-6 px-4 py-2 sm:px-6 lg:px-8">
        {assurances.map((item, index) => (
          <li
            key={item}
            className="flex items-center gap-x-6 whitespace-nowrap text-[0.66rem] font-semibold tracking-[0.14em] text-ink-soft"
          >
            {index > 0 && <span className="hidden h-1 w-1 rotate-45 bg-gold/60 md:block" aria-hidden />}
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
