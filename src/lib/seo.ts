import type { Metadata } from "next";
import { absoluteUrl, site } from "@/lib/site";

interface PageMetadataInput {
  title: string;
  description: string;
  path: string;
  image?: string;
  imageAlt?: string;
  type?: "website" | "article";
}

export function pageMetadata({
  title,
  description,
  path,
  image = site.socialImage,
  imageAlt = site.tagline,
  type = "website",
}: PageMetadataInput): Metadata {
  const canonical = absoluteUrl(path);
  const socialImage = absoluteUrl(image);

  return {
    title,
    description,
    alternates: {
      canonical,
      languages: {
        "he-IL": canonical,
        "x-default": canonical,
      },
    },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: site.name,
      locale: site.locale,
      type,
      images: [{ url: socialImage, alt: imageAlt, width: 1536, height: 1024 }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [socialImage],
    },
  };
}

export interface BreadcrumbItem {
  name: string;
  path: string;
}

export function breadcrumbJsonLd(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function onlineStoreJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "OnlineStore",
    "@id": `${site.domain}/#organization`,
    name: site.name,
    alternateName: site.nameHe,
    url: site.domain,
    logo: absoluteUrl(site.logo),
    image: absoluteUrl(site.socialImage),
    description: site.tagline,
    email: site.email,
    areaServed: {
      "@type": "Country",
      name: site.serviceArea,
    },
    sameAs: [site.instagram],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer service",
      email: site.email,
      availableLanguage: ["Hebrew"],
      areaServed: site.country,
    },
  };
}
