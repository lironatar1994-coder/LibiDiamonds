import Link from "next/link";

/**
 * Typographic lockup — Hebrew wordmark in the display serif, with the Latin
 * name tracked out beneath it between two gold facets. No image asset.
 */
export function Logo({
  onDark = false,
  size = "md",
  asLink = true,
}: {
  onDark?: boolean;
  size?: "sm" | "md" | "lg";
  asLink?: boolean;
}) {
  const wordmarkSize = {
    sm: "text-[1.5rem]",
    md: "text-[1.875rem] lg:text-[2.125rem]",
    lg: "text-[2.375rem]",
  }[size];

  const latinSize = {
    sm: "text-[0.5rem]",
    md: "text-[0.5625rem] lg:text-[0.625rem]",
    lg: "text-[0.6875rem]",
  }[size];

  const content = (
    <span className="inline-flex flex-col items-center leading-none">
      <span
        className={`font-(family-name:--font-display) font-medium ${wordmarkSize} ${
          onDark ? "text-white" : "text-navy"
        }`}
        style={{ letterSpacing: "0.02em" }}
      >
        ליבי
      </span>
      <span
        className={`mt-1 inline-flex items-center gap-1.5 ${latinSize} font-semibold uppercase ${
          onDark ? "text-gold-light" : "text-gold-deep"
        }`}
        style={{ letterSpacing: "0.34em" }}
        dir="ltr"
      >
        <span aria-hidden="true" className="h-1 w-1 rotate-45 bg-gold" />
        <span className="-me-[0.34em]">Diamonds</span>
        <span aria-hidden="true" className="h-1 w-1 rotate-45 bg-gold" />
      </span>
    </span>
  );

  if (!asLink) return content;

  return (
    <Link
      href="/"
      aria-label="ליבי דיאמונדס — לדף הבית"
      className="inline-block"
    >
      {content}
    </Link>
  );
}
