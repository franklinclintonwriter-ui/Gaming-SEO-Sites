import type { MetadataRoute } from "next";
import { getAllSlugs } from "@/lib/blog";
import { siteConfig } from "@/lib/site-config";

const staticPaths = [
  "/",
  "/about",
  "/login",
  "/app",
  "/download",
  "/bonus",
  "/features",
  "/how-to-play",
  "/faq",
  "/contact",
  "/privacy-policy",
  "/terms",
  "/blog",
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url.replace(/\/$/, "");
  const lastModified = new Date("2026-04-10");

  const entries: MetadataRoute.Sitemap = [
    ...staticPaths.map((path) => ({
      url: `${base}${path}`,
      lastModified,
      changeFrequency: "weekly" as const,
      priority: path === "/" ? 1 : 0.75,
    })),
    ...getAllSlugs().map((slug) => ({
      url: `${base}/blog/${slug}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.65,
    })),
  ];

  return entries;
}
