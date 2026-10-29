import Link from "next/link";
import type { ReactNode } from "react";

type Variant =
  | "solid"
  | "gold"
  | "outline"
  | "outline-light"
  | "light"
  | "whatsapp"
  | "quiet";

type Size = "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full font-semibold transition-[background-color,color,border-color,box-shadow,transform] duration-300 active:translate-y-px";

const sizes: Record<Size, string> = {
  md: "min-h-12 px-6 text-[0.9375rem]",
  lg: "min-h-14 px-8 text-[1rem]",
};

const variants: Record<Variant, string> = {
  // Navy fill — the primary action on light surfaces
  solid: "bg-navy text-white hover:bg-navy-soft hover:shadow-lift",
  // Gold fill — reserved for one hero-level action per view
  gold: "bg-gold-light text-navy hover:bg-gold hover:text-white",
  // Hairline on light surfaces
  outline:
    "border border-navy/25 bg-white/60 text-navy hover:border-navy hover:bg-navy hover:text-white",
  // Hairline on navy surfaces
  "outline-light":
    "border border-white/40 text-white hover:border-white hover:bg-white hover:text-navy",
  // White fill on navy surfaces
  light: "bg-white text-navy hover:bg-blush",
  // WhatsApp — deep green so white text clears AA
  whatsapp: "bg-whatsapp text-white hover:bg-whatsapp-hover hover:shadow-lift",
  // Text-only, for tertiary actions
  quiet: "min-h-0 px-0 text-gold-deep underline-offset-4 hover:underline",
};

type LuxButtonProps = {
  href: string;
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  className?: string;
  /** External links (wa.me, tel:) skip next/link */
  external?: boolean;
  ariaLabel?: string;
};

export function LuxButton({
  href,
  children,
  variant = "solid",
  size = "md",
  className = "",
  external = false,
  ariaLabel,
}: LuxButtonProps) {
  const classes = `${base} ${variant === "quiet" ? "" : sizes[size]} ${variants[variant]} ${className}`;
  const isExternal = external || /^(https?:|tel:|mailto:)/.test(href);

  if (isExternal) {
    return (
      <a
        href={href}
        className={classes}
        aria-label={ariaLabel}
        {...(href.startsWith("http")
          ? { target: "_blank", rel: "noopener noreferrer" }
          : {})}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes} aria-label={ariaLabel}>
      {children}
    </Link>
  );
}
