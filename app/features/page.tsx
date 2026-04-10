import Link from "next/link";
import { CtaSection } from "@/components/sections/CtaSection";
import { FeatureCard } from "@/components/ui/FeatureCard";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { ProsePage } from "@/components/layout/ProsePage";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { buildMetadata } from "@/lib/metadata";
import { BreadcrumbJsonLd } from "@/lib/schema";

export const metadata = buildMetadata({
  title: "Amar Club features — what the platform offers in plain language",
  description:
    "Explore Amar Club features: mobile-first navigation, account tools, transparent promotions, and responsible play controls — explained without hype.",
  path: "/features",
});

export default function FeaturesPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Features", path: "/features" },
        ]}
      />
      <ProsePage>
        <Breadcrumb
          items={[{ label: "Home", href: "/" }, { label: "Amar Club features" }]}
        />
        <h1 className="mt-6 font-[family-name:var(--font-display)] text-2xl font-semibold tracking-tight text-[var(--color-foreground)] sm:text-3xl lg:text-4xl">
          Amar Club features: what “feature-rich” should feel like
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-[var(--color-muted)]">
          Amar Club platform discussions often mention a feature-rich experience.
          Here, we translate that phrase into practical benefits: less hunting,
          clearer controls, and fewer surprises—especially on Amar Club mobile
          screens where mistakes are costly.
        </p>
        <h2 className="mt-10 text-2xl font-semibold text-[var(--color-foreground)]">
          How Amar Club features connect to other guides on this site
        </h2>
        <p className="mt-3 text-base leading-relaxed text-[var(--color-muted)]">
          Use{" "}
          <Link className="font-semibold text-[var(--color-accent-2)] underline-offset-4 hover:underline" href="/how-to-play">
            how to play
          </Link>{" "}
          for a beginner flow,{" "}
          <Link className="font-semibold text-[var(--color-accent-2)] underline-offset-4 hover:underline" href="/bonus">
            bonus
          </Link>{" "}
          for promotional literacy, and{" "}
          <Link className="font-semibold text-[var(--color-accent-2)] underline-offset-4 hover:underline" href="/blog/amar-club-features-overview">
            Amar Club features overview
          </Link>{" "}
          on the blog for a narrative walkthrough.
        </p>
      </ProsePage>

      <section className="pb-16 sm:pb-20">
        <Container>
          <SectionHeading
            eyebrow="Scan quickly"
            title="Amar Club feature highlights you can scan in one pass"
            description="Written for phone screens: short paragraphs, strong headings, and no fake UI screenshots pretending to be live systems."
          />
          <div className="grid gap-4 md:grid-cols-2">
            <FeatureCard icon={<span aria-hidden>☰</span>} title="Coherent information architecture">
              Strong platforms reduce time-to-task: fewer mystery menus, clearer
              paths to account tools, and predictable settings placement.
            </FeatureCard>
            <FeatureCard icon={<span aria-hidden>📱</span>} title="Mobile-first readability">
              Amar Club mobile readers deserve stable spacing, large tap targets,
              and typography that does not rely on pinch-zoom.
            </FeatureCard>
            <FeatureCard icon={<span aria-hidden>✶</span>} title="Transparent promotional language">
              Good products separate marketing banners from account realities—so
              you can make decisions without ambiguity.
            </FeatureCard>
            <FeatureCard icon={<span aria-hidden>⚑</span>} title="Responsible play awareness">
              Features that support limits, reality checks, and session reminders
              are part of a modern baseline—not a bonus flex.
            </FeatureCard>
          </div>
        </Container>
      </section>

      <CtaSection
        title="Continue with Amar Club online guides"
        description="Pick a lane—app access, download hygiene, or FAQs—and read one page fully before jumping around."
        primaryHref="/app"
        primaryLabel="Amar Club app"
        secondaryHref="/download"
        secondaryLabel="Download guide"
      />
    </>
  );
}
