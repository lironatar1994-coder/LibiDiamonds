import { site } from "@/data/site";
import type { Product } from "@/data/products";
import type { Faq } from "@/data/faqs";
import { getImage } from "@/data/images";

function absolute(path: string): string {
  return new URL(path, site.baseUrl).toString();
}

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "JewelryStore",
    "@id": absolute("/#organization"),
    name: site.name,
    alternateName: site.nameLatin,
    legalName: site.legalName,
    description: site.shortDescription,
    url: site.baseUrl,
    image: absolute(getImage("og-default").src),
    telephone: site.phoneHref,
    email: site.email,
    priceRange: "₪₪₪",
    currenciesAccepted: "ILS",
    areaServed: { "@type": "Country", name: "IL" },
    address: {
      "@type": "PostalAddress",
      addressCountry: "IL",
    },
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "sales",
      telephone: site.phoneHref,
      email: site.email,
      availableLanguage: ["he", "en", "ru"],
    },
    sameAs: [site.social.instagram, site.social.facebook],
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": absolute("/#website"),
    url: site.baseUrl,
    name: site.name,
    inLanguage: "he-IL",
    publisher: { "@id": absolute("/#organization") },
  };
}

export function productJsonLd(product: Product) {
  const image = getImage(product.imageId);

  const base: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.teaser,
    image: absolute(image.src),
    url: absolute(`/jewelry/${product.slug}/`),
    brand: { "@type": "Brand", name: site.name },
    material:
      product.origin === "lab" ? "יהלום מעבדה" : "יהלום טבעי",
    additionalProperty: [
      {
        "@type": "PropertyValue",
        name: "תעודה",
        value: product.certificate,
      },
      ...product.specs.map((spec) => ({
        "@type": "PropertyValue",
        name: spec.label,
        value: spec.value,
      })),
    ],
  };

  // Only declare an Offer when there is a real opening price.
  if (typeof product.priceFrom === "number") {
    base.offers = {
      "@type": "Offer",
      price: product.priceFrom,
      priceCurrency: "ILS",
      availability: "https://schema.org/InStock",
      url: absolute(`/jewelry/${product.slug}/`),
      seller: { "@id": absolute("/#organization") },
    };
  }

  return base;
}

export function faqPageJsonLd(faqs: Faq[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };
}

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absolute(item.path),
    })),
  };
}
