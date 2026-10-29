import type { MetadataRoute } from "next";
import { site } from "@/data/site";
import { categories } from "@/data/categories";
import { products } from "@/data/products";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const url = (path: string) => new URL(path, site.baseUrl).toString();

  const staticPaths: {
    path: string;
    priority: number;
    changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
  }[] = [
    { path: "/", priority: 1, changeFrequency: "weekly" },
    { path: "/guide/", priority: 0.8, changeFrequency: "monthly" },
    { path: "/contact/", priority: 0.8, changeFrequency: "yearly" },
    { path: "/about/", priority: 0.7, changeFrequency: "yearly" },
    { path: "/faq/", priority: 0.7, changeFrequency: "monthly" },
    { path: "/accessibility/", priority: 0.2, changeFrequency: "yearly" },
  ];

  return [
    ...staticPaths.map((entry) => ({
      url: url(entry.path),
      priority: entry.priority,
      changeFrequency: entry.changeFrequency,
    })),
    ...categories.map((category) => ({
      url: url(`/collections/${category.slug}/`),
      priority: 0.9,
      changeFrequency: "weekly" as const,
    })),
    ...products.map((product) => ({
      url: url(`/jewelry/${product.slug}/`),
      priority: 0.7,
      changeFrequency: "monthly" as const,
    })),
  ];
}
