import Link from "next/link";
import { CtaSection } from "@/components/sections/CtaSection";
import { FaqSection } from "@/components/sections/FaqSection";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { ProsePage } from "@/components/layout/ProsePage";
import { buildMetadata } from "@/lib/metadata";
import { BreadcrumbJsonLd, FaqJsonLd } from "@/lib/schema";
import { bonusFaqs } from "@/lib/faq-content";

export const metadata = buildMetadata({
  title: "Amar Club bonus — understand offers, wagering, and promotions",
  description:
    "Amar Club bonus guide: learn how welcome bonuses, wagering requirements, and promotion terms work — read the fine print before you claim any offer.",
  path: "/bonus",
});

export default function BonusPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Bonus", path: "/bonus" },
        ]}
      />
      <FaqJsonLd faqs={bonusFaqs} />
      <ProsePage>
        <Breadcrumb
          items={[{ label: "Home", href: "/" }, { label: "Amar Club bonus" }]}
        />
        <h1 className="mt-6 font-[family-name:var(--font-display)] text-2xl font-semibold tracking-tight text-[var(--color-foreground)] sm:text-3xl lg:text-4xl">
          Amar Club bonus: informational reading—not a promotion feed
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-[var(--color-muted)]">
          Bonus content is where marketing noise is loudest. The Amar Club bonus
          topic belongs to careful reading: eligibility rules, time windows,
          game restrictions, and regional compliance. This page does not publish
          time-sensitive codes or guaranteed amounts—because those belong in
          official cashier and promo centers.
        </p>
        <h2 className="mt-10 text-2xl font-semibold text-[var(--color-foreground)]">
          Amar Club bonus terms — always read before you claim
        </h2>
        <p className="mt-3 text-base leading-relaxed text-[var(--color-muted)]">
          If you remember one principle, make it this: the headline is advertising;
          the terms are the agreement. For Amar Club online promotions, treat any
          number as hypothetical until you confirm it in an official, timestamped
          source.
        </p>
        <h2 className="mt-10 text-2xl font-semibold text-[var(--color-foreground)]">
          Deeper Amar Club bonus guides and resources
        </h2>
        <p className="mt-3 text-base leading-relaxed text-[var(--color-muted)]">
          Read the long-form{" "}
          <Link className="font-semibold text-[var(--color-accent-2)] underline-offset-4 hover:underline" href="/blog/amar-club-bonus-guide">
            Amar Club bonus guide
          </Link>{" "}
          on the blog, then revisit{" "}
          <Link className="font-semibold text-[var(--color-accent-2)] underline-offset-4 hover:underline" href="/features">
            Amar Club features
          </Link>{" "}
          for vocabulary that helps you scan offers faster.
        </p>
      </ProsePage>
      <FaqSection
        eyebrow="Bonus FAQs"
        title="Amar Club bonus FAQ — straight answers"
        items={[...bonusFaqs]}
      />
      <CtaSection
        title="Stay grounded while browsing Amar Club gaming content"
        description="If you feel rushed by a countdown, pause. Good decisions rarely require panic clicks."
        primaryHref="/faq"
        primaryLabel="Read FAQs"
        secondaryHref="/how-to-play"
        secondaryLabel="How to play"
      />
    </>
  );
}
