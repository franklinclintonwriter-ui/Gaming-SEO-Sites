import Link from "next/link";
import { CtaSection } from "@/components/sections/CtaSection";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { ProsePage } from "@/components/layout/ProsePage";
import { buildMetadata } from "@/lib/metadata";
import { BreadcrumbJsonLd } from "@/lib/schema";

export const metadata = buildMetadata({
  title: "How to play Amar Club — beginner guide to online gaming",
  description:
    "Learn how to play on Amar Club step by step: sign-in basics, mobile tips, bonus literacy, and when to check official sources — perfect for beginners.",
  path: "/how-to-play",
});

export default function HowToPlayPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "How to play", path: "/how-to-play" },
        ]}
      />
      <ProsePage>
        <Breadcrumb
          items={[{ label: "Home", href: "/" }, { label: "How to play" }]}
        />
        <h1 className="mt-6 font-[family-name:var(--font-display)] text-2xl font-semibold tracking-tight text-[var(--color-foreground)] sm:text-3xl lg:text-4xl">
          How to play Amar Club online — a beginner-friendly guide
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-[var(--color-muted)]">
          This guide is not a cheat sheet for winning. It is a calm orientation
          map for Amar Club gaming readers who want to understand navigation,
          vocabulary, and where official help should take over.
        </p>
        <h2 className="mt-10 text-2xl font-semibold text-[var(--color-foreground)]">
          Step 1 — decide what you want to learn about Amar Club
        </h2>
        <p className="mt-3 text-base leading-relaxed text-[var(--color-muted)]">
          Are you trying to install an app, understand a promotion, or learn
          session behavior? Your next click should match that intent. If you start
          with{" "}
          <Link className="font-semibold text-[var(--color-accent-2)] underline-offset-4 hover:underline" href="/login">
            Amar Club login
          </Link>{" "}
          questions, do not drift into bonus pages until you understand basic
          authentication hygiene.
        </p>
        <h2 className="mt-10 text-2xl font-semibold text-[var(--color-foreground)]">
          Step 2 — read one Amar Club guide from start to finish
        </h2>
        <p className="mt-3 text-base leading-relaxed text-[var(--color-muted)]">
          Skimming ten tabs creates false confidence. A single thorough pass of{" "}
          <Link className="font-semibold text-[var(--color-accent-2)] underline-offset-4 hover:underline" href="/blog/how-to-use-amar-club">
            how to use Amar Club
          </Link>{" "}
          beats fragmented scrolling.
        </p>
        <h2 className="mt-10 text-2xl font-semibold text-[var(--color-foreground)]">
          Step 3 — verify Amar Club deposit and withdrawal details officially
        </h2>
        <p className="mt-3 text-base leading-relaxed text-[var(--color-muted)]">
          For deposits, withdrawals, or verification, use official operator
          channels. This Amar Club guide site is editorial, not transactional.
        </p>
        <h2 className="mt-10 text-2xl font-semibold text-[var(--color-foreground)]">
          Step 4 — optimize your Amar Club mobile experience
        </h2>
        <p className="mt-3 text-base leading-relaxed text-[var(--color-muted)]">
          If you primarily play on a phone, prioritize{" "}
          <Link className="font-semibold text-[var(--color-accent-2)] underline-offset-4 hover:underline" href="/blog/amar-club-mobile-guide">
            Amar Club mobile
          </Link>{" "}
          guidance and short sessions.
        </p>
      </ProsePage>
      <CtaSection
        title="Continue exploring Amar Club casino vocabulary"
        description="Move into features and FAQs when you want structured answers—not random forum threads."
        primaryHref="/features"
        primaryLabel="Amar Club features"
        secondaryHref="/faq"
        secondaryLabel="FAQ"
      />
    </>
  );
}
