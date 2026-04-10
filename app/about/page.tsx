import Link from "next/link";
import { CtaSection } from "@/components/sections/CtaSection";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { ProsePage } from "@/components/layout/ProsePage";
import { buildMetadata } from "@/lib/metadata";
import { BreadcrumbJsonLd } from "@/lib/schema";

export const metadata = buildMetadata({
  title: "About Amar Club — who we are and why we write gaming guides",
  description:
    "Learn about Amar Club: our editorial mission, how we write independent online gaming guides, and why this site is not an official operator.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "About", path: "/about" },
        ]}
      />
      <ProsePage>
        <Breadcrumb
          items={[{ label: "Home", href: "/" }, { label: "About Amar Club" }]}
        />
        <h1 className="mt-6 font-[family-name:var(--font-display)] text-2xl font-semibold tracking-tight text-[var(--color-foreground)] sm:text-3xl lg:text-4xl">
          About Amar Club — independent online gaming guides
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-[var(--color-muted)]">
          Amar Club is the brand we use to talk about a modern online gaming and
          casino-style experience—explained here through calm, mobile-friendly
          guides. We write for adults who want straight answers about apps,
          sign-in, bonuses, and playing on a phone—without stuffing the same
          sentences into every page.
        </p>
        <h2 className="mt-10 text-2xl font-semibold text-[var(--color-foreground)]">
          What you can learn on this Amar Club guide site
        </h2>
        <p className="mt-3 text-base leading-relaxed text-[var(--color-muted)]">
          Topics are split on purpose. Download questions live on the download
          guide; login questions on the login guide—so you are not reading a
          second copy of the homepage with a different title. We never show a
          fake login form or pretend to run the real service.
        </p>
        <ul className="mt-4 list-disc space-y-2 pl-5 text-[var(--color-muted)]">
          <li>
            <Link className="font-semibold text-[var(--color-accent-2)] underline-offset-4 hover:underline" href="/features">
              Amar Club features
            </Link>{" "}
            for a scannable overview of platform strengths in plain language.
          </li>
          <li>
            <Link className="font-semibold text-[var(--color-accent-2)] underline-offset-4 hover:underline" href="/how-to-play">
              How to play
            </Link>{" "}
            for a beginner-friendly flow from first visit to confident browsing.
          </li>
          <li>
            <Link className="font-semibold text-[var(--color-accent-2)] underline-offset-4 hover:underline" href="/blog">
              Blog guides
            </Link>{" "}
            for long-form articles like the Amar Club beginner guide and mobile guide.
          </li>
        </ul>
        <h2 className="mt-10 text-2xl font-semibold text-[var(--color-foreground)]">
          Editorial independence and responsible gambling
        </h2>
        <p className="mt-3 text-base leading-relaxed text-[var(--color-muted)]">
          This project is not an official operator site. We do not process
          payments, manage accounts, or provide customer support on behalf of any
          brand. For Amar Club platform specifics that affect balances,
          verification, or regional legality, rely on official sources and local
          regulations.
        </p>
        <p className="mt-4 text-base leading-relaxed text-[var(--color-muted)]">
          Gambling can be harmful—please play responsibly, set limits where
          available, and seek professional help if you need it.
        </p>
      </ProsePage>
      <CtaSection
        title="Next: explore Amar Club gaming guides"
        description="Move from About into practical routes—features, mobile access, and FAQs—each written as its own useful page."
        primaryHref="/features"
        primaryLabel="Explore features"
        secondaryHref="/faq"
        secondaryLabel="Open FAQ"
      />
    </>
  );
}
