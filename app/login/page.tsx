import Link from "next/link";
import { CtaSection } from "@/components/sections/CtaSection";
import { FaqSection } from "@/components/sections/FaqSection";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { ProsePage } from "@/components/layout/ProsePage";
import { buildMetadata } from "@/lib/metadata";
import { BreadcrumbJsonLd, FaqJsonLd } from "@/lib/schema";

const loginFaqs = [
  {
    question: "Does this page provide Amar Club login access?",
    answer:
      "No. This is an educational guide. Real authentication happens only on official apps and websites operated by the licensed provider.",
  },
  {
    question: "What should I do if a page asks for unusual permissions?",
    answer:
      "Stop. Verify the publisher, URL, and app listing. Legitimate sign-in flows should not require unrelated permissions or sketchy sideloading.",
  },
  {
    question: "Where should I go for password recovery?",
    answer:
      "Use the operator’s official recovery tools. Avoid third-party “unlock” services—those are a common risk.",
  },
] as const;

export const metadata = buildMetadata({
  title: "Amar Club login — how to sign in safely and troubleshoot access",
  description:
    "Amar Club login guide: learn how to sign in safely, handle expired sessions, recover your account, and spot fake login pages — no credentials collected here.",
  path: "/login",
});

export default function LoginGuidePage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Login guide", path: "/login" },
        ]}
      />
      <FaqJsonLd faqs={loginFaqs} />
      <ProsePage>
        <Breadcrumb
          items={[{ label: "Home", href: "/" }, { label: "Amar Club login guide" }]}
        />
        <h1 className="mt-6 font-[family-name:var(--font-display)] text-2xl font-semibold tracking-tight text-[var(--color-foreground)] sm:text-3xl lg:text-4xl">
          Amar Club login — safe sign-in guide and troubleshooting tips
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-[var(--color-muted)]">
          People search for Amar Club login when they want the official entry
          point—or when something changed: a new phone, a browser update, or a
          session that expired faster than expected. This page explains those
          patterns in general terms, without collecting credentials or pretending
          to authenticate you.
        </p>
        <h2 className="mt-10 text-2xl font-semibold text-[var(--color-foreground)]">
          What a safe Amar Club login flow looks like
        </h2>
        <p className="mt-3 text-base leading-relaxed text-[var(--color-muted)]">
          A legitimate Amar Club online sign-in experience should feel consistent:
          familiar branding, predictable fields, and clear error messaging. If you
          are bounced between unrelated domains—or prompted to install unknown
          software—treat that as a warning sign and stop.
        </p>
        <h2 className="mt-10 text-2xl font-semibold text-[var(--color-foreground)]">
          Amar Club mobile login — sessions, apps, and browser access
        </h2>
        <p className="mt-3 text-base leading-relaxed text-[var(--color-muted)]">
          On mobile, sessions may behave differently depending on whether you use
          a browser tab or an installed client. If you are evaluating Amar Club
          app convenience, read the{" "}
          <Link className="font-semibold text-[var(--color-accent-2)] underline-offset-4 hover:underline" href="/app">
            Amar Club app
          </Link>{" "}
          page and the{" "}
          <Link className="font-semibold text-[var(--color-accent-2)] underline-offset-4 hover:underline" href="/download">
            download guide
          </Link>
          —they focus on source verification and update hygiene.
        </p>
        <h2 className="mt-10 text-2xl font-semibold text-[var(--color-foreground)]">
          Amar Club login troubleshooting — where to get help
        </h2>
        <p className="mt-3 text-base leading-relaxed text-[var(--color-muted)]">
          Start with the{" "}
          <Link className="font-semibold text-[var(--color-accent-2)] underline-offset-4 hover:underline" href="/faq">
            FAQ
          </Link>
          , then the long-form{" "}
          <Link className="font-semibold text-[var(--color-accent-2)] underline-offset-4 hover:underline" href="/blog/amar-club-login-guide">
            Amar Club login guide
          </Link>{" "}
          article on the blog for a slower walkthrough.
        </p>
      </ProsePage>
      <FaqSection
        eyebrow="Login questions"
        title="Amar Club login FAQ — quick answers"
        items={[...loginFaqs]}
      />
      <CtaSection
        title="Continue with Amar Club download & app guides"
        description="Pair login literacy with install hygiene and mobile ergonomics—two topics that prevent most preventable mistakes."
        primaryHref="/download"
        primaryLabel="Download guide"
        secondaryHref="/app"
        secondaryLabel="App page"
      />
    </>
  );
}
