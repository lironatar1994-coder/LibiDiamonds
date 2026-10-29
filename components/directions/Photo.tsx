import Image, { type StaticImageData } from "next/image";

/**
 * Local photo with intrinsic blur placeholder. Fills its wrapper; the wrapper
 * owns aspect ratio and background so a frame is never empty while loading.
 */
export function Photo({
  src,
  alt,
  className = "",
  sizes = "100vw",
  priority = false,
  position,
  fit = "cover",
}: {
  src: StaticImageData;
  alt: string;
  className?: string;
  sizes?: string;
  priority?: boolean;
  /** CSS object-position, e.g. "50% 40%" */
  position?: string;
  fit?: "cover" | "contain";
}) {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        priority={priority}
        placeholder="blur"
        className={fit === "contain" ? "object-contain" : "object-cover"}
        style={position ? { objectPosition: position } : undefined}
      />
    </div>
  );
}
