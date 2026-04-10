import Link from "next/link";
import { CtaSection } from "@/components/sections/CtaSection";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { ProsePage } from "@/components/layout/ProsePage";
import { buildMetadata } from "@/lib/metadata";
import { BreadcrumbJsonLd } from "@/lib/schema";

export const metadata = buildMetadata({
  title: "Amar Club terms of use — rules for using this gaming guide site",
  description:
    "Read the Amar Club terms of use: editorial independence, responsible gambling disclaimers, acceptable use rules, and liability limits for this informational site.",
  path: "/terms",
});

export default function TermsPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Terms of Use", path: "/terms" },
        ]}
      />
      <ProsePage>
        <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Amar Club terms of use" }]} />
        <h1 className="mt-6 font-[family-name:var(--font-display)] text-2xl font-semibold tracking-tight text-[var(--color-foreground)] sm:text-3xl lg:text-4xl">
          Amar Club terms of use
        </h1>
        <p className="mt-4 text-sm text-[var(--color-muted)]">Last updated: April 10, 2026</p>
        <p className="mt-4 text-base leading-relaxed text-[var(--color-muted)]">
          These terms govern your use of this Amar Club informational website. By
          continuing to browse, you accept them. For questions about the content or
          how we operate, visit the{" "}
          <Link className="font-semibold text-[var(--color-accent)] underline-offset-4 hover:underline" href="/contact">
            contact page
          </Link>{" "}
          or read our{" "}
          <Link className="font-semibold text-[var(--color-accent)] underline-offset-4 hover:underline" href="/privacy-policy">
            privacy policy
          </Link>.
        </p>

        <h2 className="mt-10 text-2xl font-semibold text-[var(--color-foreground)]">
          Who operates this Amar Club guide site
        </h2>
        <p className="mt-3 text-base leading-relaxed text-[var(--color-muted)]">
          This is an independent editorial resource. It is not the official Amar
          Club website, is not operated by any casino or gambling company, and does
          not provide gambling, payment, or account services. We publish guides
          about the Amar Club platform, the Amar Club app, and topics like{" "}
          <Link className="font-semibold text-[var(--color-accent)] underline-offset-4 hover:underline" href="/login">
            Amar Club login
          </Link>,{" "}
          <Link className="font-semibold text-[var(--color-accent)] underline-offset-4 hover:underline" href="/bonus">
            Amar Club bonus information
          </Link>, and{" "}
          <Link className="font-semibold text-[var(--color-accent)] underline-offset-4 hover:underline" href="/download">
            Amar Club download guidance
          </Link>.
        </p>

        <h2 className="mt-10 text-2xl font-semibold text-[var(--color-foreground)]">
          Content accuracy and no warranties
        </h2>
        <p className="mt-3 text-base leading-relaxed text-[var(--color-muted)]">
          All content on this website is provided &ldquo;as is&rdquo; for general education.
          While we strive for accuracy, we do not guarantee that information is
          complete, current, or error-free. Always verify important details—especially
          anything related to real money, account access, or legal compliance—with
          official operator sources.
        </p>

        <h2 className="mt-10 text-2xl font-semibold text-[var(--color-foreground)]">
          Responsible gambling and legal compliance
        </h2>
        <p className="mt-3 text-base leading-relaxed text-[var(--color-muted)]">
          Online gambling carries real financial risk. You are solely responsible
          for complying with the laws in your country or region. If gambling is not
          legal where you live, or you are under the legal age, do not use gambling
          services. If you need help with gambling-related harm, seek professional
          support in your country.
        </p>

        <h2 className="mt-10 text-2xl font-semibold text-[var(--color-foreground)]">
          Acceptable use of this Amar Club website
        </h2>
        <p className="mt-3 text-base leading-relaxed text-[var(--color-muted)]">
          Do not attempt to disrupt the site, scrape it in ways that violate
          applicable law, reverse-engineer its code for malicious purposes, or
          misuse contact channels for spam or harassment. You may share links to
          individual pages as long as you include proper attribution.
        </p>

        <h2 className="mt-10 text-2xl font-semibold text-[var(--color-foreground)]">
          Limitation of liability
        </h2>
        <p className="mt-3 text-base leading-relaxed text-[var(--color-muted)]">
          To the maximum extent permitted by law, the site owners and contributors
          are not liable for any indirect, incidental, or consequential damages
          arising from your use of the content—including any losses from gambling
          activity. Use the information here as a starting point, not as financial
          or legal advice.
        </p>

        <h2 className="mt-10 text-2xl font-semibold text-[var(--color-foreground)]">
          Changes to these terms
        </h2>
        <p className="mt-3 text-base leading-relaxed text-[var(--color-muted)]">
          We may update these terms from time to time. The &ldquo;last updated&rdquo; date at
          the top of this page reflects the most recent revision. Continued use of
          the site after changes constitutes acceptance of the new terms.
        </p>
      </ProsePage>
      <CtaSection
        title="Have questions about Amar Club?"
        description="Browse our guides for app access, feature breakdowns, and mobile tips—or check the FAQ for quick answers."
        primaryHref="/faq"
        primaryLabel="Read the Amar Club FAQ"
        secondaryHref="/about"
        secondaryLabel="About this site"
      />
    </>
  );
}
