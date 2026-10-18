import type { MetadataRoute } from "next";
import { allUrls } from "@/content";
import { SITE } from "@/content/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return allUrls().map((path) => ({
    url: `${SITE.url}${path}`,
    lastModified: now,
    changeFrequency: path === "/" ? ("monthly" as const) : ("yearly" as const),
    priority: path === "/" ? 1 : 0.7,
  }));
}
