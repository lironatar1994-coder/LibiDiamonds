import type { ReactNode } from "react";

type SectionHeadingProps = {
  kicker?: string;
  title: ReactNode;
  lede?: ReactNode;
  /** Center the block (default is start-aligned) */
  align?: "start" | "center";
  onDark?: boolean;
  className?: string;
  /** Heading level — sections use h2, page heroes use h1 */
  as?: "h1" | "h2" | "h3";
  size?: "sm" | "md" | "lg";
};

const sizeClasses = {
  sm: "text-(length:--text-display-sm)",
  md: "text-(length:--text-display)",
  lg: "text-(length:--text-display-lg)",
};

export function SectionHeading({
  kicker,
  title,
  lede,
  align = "start",
  onDark = false,
  className = "",
  as: Tag = "h2",
  size = "md",
}: SectionHeadingProps) {
  const isCenter = align === "center";

  return (
    <div
      className={`${isCenter ? "mx-auto max-w-2xl text-center" : "max-w-2xl"} ${className}`}
    >
      {kicker && (
        <p
          className={`kicker ${onDark ? "kicker-on-dark" : ""} ${
            isCenter ? "justify-center" : ""
          }`}
        >
          {kicker}
        </p>
      )}

      <Tag
        className={`${sizeClasses[size]} ${kicker ? "mt-3" : ""} ${
          onDark ? "!text-white" : "text-navy"
        }`}
      >
        {title}
      </Tag>

      {lede && (
        <div
          className={`mt-4 text-[1.0625rem] leading-relaxed ${
            onDark ? "text-on-dark-muted" : "text-muted"
          }`}
        >
          {lede}
        </div>
      )}
    </div>
  );
}
