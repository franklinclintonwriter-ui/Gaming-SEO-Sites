import Link from "next/link";
import { CtaSection } from "@/components/sections/CtaSection";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { ProsePage } from "@/components/layout/ProsePage";
import { buildMetadata } from "@/lib/metadata";
import { BreadcrumbJsonLd } from "@/lib/schema";

export const metadata = buildMetadata({
  title: "Amar Club privacy policy — how this gaming guide site handles data",
  description:
    "Read the Amar Club privacy policy: what data we collect, cookies, analytics, third-party links, and how to contact us about privacy questions.",
  path: "/privacy-policy",
});

export default function PrivacyPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Privacy Policy", path: "/privacy-policy" },
        ]}
      />
      <ProsePage>
        <Breadcrumb
          items={[{ label: "Home", href: "/" }, { label: "Amar Club privacy policy" }]}
        />
        <h1 className="mt-6 font-[family-name:var(--font-display)] text-2xl font-semibold tracking-tight text-[var(--color-foreground)] sm:text-3xl lg:text-4xl">
          Amar Club privacy policy
        </h1>
        <p className="mt-4 text-sm text-[var(--color-muted)]">Last updated: April 10, 2026</p>
        <p className="mt-4 text-base leading-relaxed text-[var(--color-muted)]">
          This privacy policy explains how this Amar Club informational website
          handles data. We are an independent guide site—not an official Amar Club
          operator—and we take a minimal approach to data collection. For the rules
          governing your use of the site, read the{" "}
          <Link className="font-semibold text-[var(--color-accent)] underline-offset-4 hover:underline" href="/terms">
            terms of use
          </Link>.
        </p>

        <h2 className="mt-10 text-2xl font-semibold text-[var(--color-foreground)]">
          What information this Amar Club site collects
        </h2>
        <p className="mt-3 text-base leading-relaxed text-[var(--color-muted)]">
          The{" "}
          <Link className="font-semibold text-[var(--color-accent)] underline-offset-4 hover:underline" href="/contact">
            contact form
          </Link>{" "}
          is a frontend demo and does not transmit messages unless you connect it
          to a backend or email provider. If you do activate the form in production,
          you must disclose what you collect, your legal basis, and how long you
          retain the data.
        </p>

        <h2 className="mt-10 text-2xl font-semibold text-[var(--color-foreground)]">
          Automatically collected data and analytics
        </h2>
        <p className="mt-3 text-base leading-relaxed text-[var(--color-muted)]">
          A production deployment may log basic technical events—IP address, browser
          type, and timestamps—through hosting infrastructure or analytics tools.
          If you enable third-party analytics, disclose the vendor name, offer clear
          opt-out options, and specify data storage regions in this policy section.
        </p>

        <h2 className="mt-10 text-2xl font-semibold text-[var(--color-foreground)]">
          Cookies on this Amar Club guide website
        </h2>
        <p className="mt-3 text-base leading-relaxed text-[var(--color-muted)]">
          This static demo does not set non-essential cookies. If you add
          advertising, analytics, or tracking cookies in production, implement a
          consent banner consistent with GDPR, ePrivacy, or the laws in your
          visitors&apos; jurisdictions.
        </p>

        <h2 className="mt-10 text-2xl font-semibold text-[var(--color-foreground)]">
          Third-party links and Amar Club official resources
        </h2>
        <p className="mt-3 text-base leading-relaxed text-[var(--color-muted)]">
          Our guides—such as the{" "}
          <Link className="font-semibold text-[var(--color-accent)] underline-offset-4 hover:underline" href="/app">
            Amar Club app page
          </Link>{" "}
          and the{" "}
          <Link className="font-semibold text-[var(--color-accent)] underline-offset-4 hover:underline" href="/download">
            download guide
          </Link>
          —may reference official operator websites. We are not responsible for the
          privacy practices or content of external sites. Review their own privacy
          policies before submitting any personal data.
        </p>

        <h2 className="mt-10 text-2xl font-semibold text-[var(--color-foreground)]">
          Children and age restrictions
        </h2>
        <p className="mt-3 text-base leading-relaxed text-[var(--color-muted)]">
          This content is intended for adults of legal gambling age in their
          jurisdiction. We do not knowingly collect personal data from minors. If
          you believe a minor has submitted data through this site, contact us
          immediately for removal.
        </p>

        <h2 className="mt-10 text-2xl font-semibold text-[var(--color-foreground)]">
          Contact us about privacy
        </h2>
        <p className="mt-3 text-base leading-relaxed text-[var(--color-muted)]">
          For privacy questions related to this Amar Club guide site, use the{" "}
          <Link className="font-semibold text-[var(--color-accent)] underline-offset-4 hover:underline" href="/contact">
            contact page
          </Link>. Replace the placeholder email address with a real inbox before
          going live.
        </p>
      </ProsePage>
      <CtaSection
        title="Explore Amar Club guides"
        description="Learn about Amar Club features, mobile access, bonuses, and more—written for real readers, not algorithms."
        primaryHref="/features"
        primaryLabel="Amar Club features"
        secondaryHref="/blog"
        secondaryLabel="Browse guides"
      />
    </>
  );
}
