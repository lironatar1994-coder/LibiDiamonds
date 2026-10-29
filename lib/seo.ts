import type { Metadata } from "next";
import { site } from "@/data/site";
import { getImage } from "@/data/images";

type BuildMetadataInput = {
  title: string;
  description: string;
  /** Path with trailing slash, e.g. "/about/" */
  path: string;
  /** Image manifest id for the OG image */
  imageId?: string;
};

export function buildMetadata({
  title,
  description,
  path,
  imageId = "og-default",
}: BuildMetadataInput): Metadata {
  const image = getImage(imageId);
  const url = new URL(path, site.baseUrl).toString();

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      locale: "he_IL",
      siteName: site.name,
      title,
      description,
      url,
      images: [
        {
          url: new URL(image.src, site.baseUrl).toString(),
          width: image.width,
          height: image.height,
          alt: image.alt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}
