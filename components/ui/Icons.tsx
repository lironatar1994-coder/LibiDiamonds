/**
 * Small inline icon set. All decorative (aria-hidden) — every icon sits next
 * to a visible or aria label that carries the meaning.
 */

type IconProps = { className?: string };

export function WhatsAppIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.46 1.32 4.96L2 22l5.25-1.38a9.9 9.9 0 0 0 4.79 1.22h.01c5.46 0 9.91-4.45 9.91-9.91C21.96 6.45 17.5 2 12.04 2Zm5.8 14.09c-.24.68-1.4 1.3-1.93 1.35-.53.05-1.03.24-3.47-.72-2.94-1.16-4.78-4.22-4.92-4.42-.14-.2-1.16-1.55-1.16-2.96 0-1.4.73-2.09 1-2.38.26-.29.58-.36.77-.36.19 0 .39.002.56.01.18.008.42-.068.66.5.24.58.82 2 .89 2.15.07.14.12.31.02.5-.1.2-.15.32-.29.5-.15.17-.31.38-.44.51-.14.15-.29.3-.12.59.17.29.75 1.24 1.61 2.01 1.1.98 2.03 1.29 2.32 1.43.29.15.46.12.63-.07.17-.2.72-.85.92-1.14.19-.29.39-.24.65-.15.27.1 1.7.8 1.99.95.29.14.48.22.55.34.07.12.07.7-.17 1.38Z" />
    </svg>
  );
}

export function PhoneIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M5 4h3.2l1.6 4-2 1.3a10.5 10.5 0 0 0 4.9 4.9l1.3-2 4 1.6V17a2 2 0 0 1-2 2A15 15 0 0 1 3 6a2 2 0 0 1 2-2Z" />
    </svg>
  );
}

/** Points toward reading direction — in RTL that is left. */
export function ArrowIcon({ className = "h-4 w-4" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={`${className} rtl:-scale-x-100`} fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

export function StarIcon({ className = "h-4 w-4" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="m12 2.8 2.8 5.9 6.4.8-4.7 4.4 1.2 6.4L12 17.2l-5.7 3.1 1.2-6.4-4.7-4.4 6.4-.8L12 2.8Z" />
    </svg>
  );
}

/** Brand facet — the diamond outline used as an ornament throughout. */
export function DiamondIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg viewBox="0 0 64 64" className={className} fill="none" stroke="currentColor" aria-hidden="true">
      <path d="M12 24 32 6l20 18-20 34L12 24Z" strokeWidth="2.4" strokeLinejoin="round" />
      <path d="M12 24h40M32 6l-8 18 8 34 8-34-8-18" strokeWidth="1.5" strokeLinejoin="round" />
    </svg>
  );
}

export function CertificateIcon({ className = "h-6 w-6" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 3 4 7v6c0 4.2 3.3 7.4 8 8.5 4.7-1.1 8-4.3 8-8.5V7l-8-4Z" />
      <path d="m9 12.5 2.2 2.2L15.5 10" />
    </svg>
  );
}

export function TruckIcon({ className = "h-6 w-6" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M3 8.5 12 4l9 4.5v7L12 20l-9-4.5v-7Z" />
      <path d="M3 8.5 12 13l9-4.5M12 13v7" />
    </svg>
  );
}

export function InfinityIcon({ className = "h-6 w-6" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="10" r="6" />
      <path d="M9 15.5 8 21l4-2 4 2-1-5.5" />
    </svg>
  );
}

export function CardIcon({ className = "h-6 w-6" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="3" y="5.5" width="18" height="13" rx="2" />
      <path d="M3 10h18M7 15h4" />
    </svg>
  );
}

export function ChatIcon({ className = "h-6 w-6" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M20 13.5c0 3.6-3.6 6.5-8 6.5-.9 0-1.8-.1-2.6-.3L5 21l1.2-3.2C4.8 16.6 4 15.1 4 13.5 4 9.9 7.6 7 12 7s8 2.9 8 6.5Z" />
    </svg>
  );
}

export function InstagramIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="17.2" cy="6.8" r="1.1" fill="currentColor" />
    </svg>
  );
}

export function FacebookIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden="true">
      <path
        d="M14.5 8.5h2.2V5.6h-2.4c-2.3 0-3.6 1.4-3.6 3.7v1.6H8.6v2.9h2.1V21h3v-7.2h2.2l.4-2.9h-2.6V9.6c0-.7.3-1.1 1.2-1.1Z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
    </svg>
  );
}
