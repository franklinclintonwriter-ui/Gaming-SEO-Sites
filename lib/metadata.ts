import type { Metadata } from "next";
import { absoluteUrl, siteConfig } from "./site-config";

type PageMeta = {
  title: string;
  description: string;
  path: string;
};

export function buildMetadata({
  title,
  description,
  path,
}: PageMeta): Metadata {
  const url = absoluteUrl(path);
  const fullTitle = path === "/" ? title : `${title} | ${siteConfig.name}`;

  return {
    title: fullTitle,
    description,
    alternates: { canonical: url },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: siteConfig.name,
      locale: siteConfig.locale,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      creator: siteConfig.twitterHandle,
    },
    robots: { index: true, follow: true },
  };
}

export function buildArticleMetadata(args: {
  title: string;
  description: string;
  path: string;
  publishedTime: string;
  modifiedTime?: string;
}): Metadata {
  const base = buildMetadata({
    title: args.title,
    description: args.description,
    path: args.path,
  });
  const url = absoluteUrl(args.path);

  return {
    ...base,
    openGraph: {
      ...base.openGraph,
      type: "article",
      publishedTime: args.publishedTime,
      modifiedTime: args.modifiedTime ?? args.publishedTime,
      url,
    },
  };
}
