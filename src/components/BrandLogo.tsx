import Link from "next/link";
import { assetPath } from "@/lib/site";

type BrandLogoProps = {
  className?: string;
  onClick?: () => void;
  size?: "header" | "footer";
};

export default function BrandLogo({
  className = "",
  onClick,
  size = "header",
}: BrandLogoProps) {
  return (
    <Link
      href="/"
      onClick={onClick}
      className={`brand-logo brand-logo-${size} ${className}`}
      aria-label="LIBI DIAMONDS"
    >
      <img
        src={assetPath("/brand/libi-diamonds-logo.svg")}
        alt=""
        className="brand-logo-asset"
        width="360"
        height="150"
        aria-hidden="true"
      />
    </Link>
  );
}
