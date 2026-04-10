export const siteConfig = {
  name: "Amar Club",
  description:
    "Independent guides to the Amar Club online gaming brand—apps, sign-in, mobile play, bonuses explained calmly, and responsible gambling reminders.",
  /** Set NEXT_PUBLIC_SITE_URL in production for accurate canonicals and OG URLs */
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.amarclub.com",
  locale: "en_US",
  twitterHandle: "@amarclub",
} as const;

export function absoluteUrl(path: string) {
  const base = siteConfig.url.replace(/\/$/, "");
  const p = path.startsWith("/") ? path : `/${path}`;
  return `${base}${p}`;
}
