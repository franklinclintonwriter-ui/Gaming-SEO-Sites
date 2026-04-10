import Link from "next/link";
import { ContactForm } from "@/components/contact/ContactForm";
import { CtaSection } from "@/components/sections/CtaSection";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { ProsePage } from "@/components/layout/ProsePage";
import { buildMetadata } from "@/lib/metadata";
import { BreadcrumbJsonLd } from "@/lib/schema";

export const metadata = buildMetadata({
  title: "Contact Amar Club — reach our editorial team for questions",
  description:
    "Get in touch with the Amar Club guide team for editorial questions, content corrections, partnerships, or licensing. Find our email and contact form here.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Contact", path: "/contact" },
        ]}
      />
      <ProsePage>
        <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Contact Amar Club" }]} />
        <h1 className="mt-6 font-[family-name:var(--font-display)] text-2xl font-semibold tracking-tight text-[var(--color-foreground)] sm:text-3xl lg:text-4xl">
          Contact the Amar Club guide team
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-[var(--color-muted)]">
          Whether you have a question about one of our{" "}
          <Link className="font-semibold text-[var(--color-accent)] underline-offset-4 hover:underline" href="/blog">
            Amar Club guides
          </Link>
          , spotted an error, or want to discuss content licensing, this page is
          where to start. We are an editorial team—not the Amar Club operator—so
          we cannot help with account access, deposits, or withdrawals. For those,
          contact the official platform directly.
        </p>

        <h2 className="mt-10 text-2xl font-semibold text-[var(--color-foreground)]">
          What we can help with
        </h2>
        <ul className="mt-4 list-disc space-y-2 pl-5 text-[var(--color-muted)]">
          <li>Questions about our Amar Club guides and articles</li>
          <li>
            Content corrections—if something in the{" "}
            <Link className="font-semibold text-[var(--color-accent)] underline-offset-4 hover:underline" href="/faq">
              Amar Club FAQ
            </Link>{" "}
            or{" "}
            <Link className="font-semibold text-[var(--color-accent)] underline-offset-4 hover:underline" href="/features">
              features page
            </Link>{" "}
            is outdated
          </li>
          <li>Partnership or advertising inquiries</li>
          <li>
            Privacy questions (see our{" "}
            <Link className="font-semibold text-[var(--color-accent)] underline-offset-4 hover:underline" href="/privacy-policy">
              privacy policy
            </Link>)
          </li>
        </ul>

        <h2 className="mt-10 text-2xl font-semibold text-[var(--color-foreground)]">
          Send us a message
        </h2>
        <div className="mt-6 rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 sm:p-8">
          <div className="mb-6 grid gap-4 sm:grid-cols-2">
            <div className="rounded-xl border border-[var(--color-border)] bg-[var(--color-elevated)] p-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-[var(--color-muted)]">Email</p>
              <p className="mt-1 text-sm text-[var(--color-foreground)]">hello@amarclub.example</p>
            </div>
            <div className="rounded-xl border border-[var(--color-border)] bg-[var(--color-elevated)] p-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-[var(--color-muted)]">Response time</p>
              <p className="mt-1 text-sm text-[var(--color-foreground)]">Usually within 48 hours</p>
            </div>
          </div>
          <ContactForm />
        </div>

        <h2 className="mt-10 text-2xl font-semibold text-[var(--color-foreground)]">
          Before you write — check these Amar Club resources
        </h2>
        <p className="mt-3 text-base leading-relaxed text-[var(--color-muted)]">
          Many common questions are already answered:
        </p>
        <ul className="mt-3 list-disc space-y-2 pl-5 text-[var(--color-muted)]">
          <li>
            <Link className="font-semibold text-[var(--color-accent)] underline-offset-4 hover:underline" href="/faq">
              Amar Club FAQ
            </Link>{" "}
            — quick answers on login, apps, bonuses, and more
          </li>
          <li>
            <Link className="font-semibold text-[var(--color-accent)] underline-offset-4 hover:underline" href="/how-to-play">
              How to play
            </Link>{" "}
            — beginner walkthrough
          </li>
          <li>
            <Link className="font-semibold text-[var(--color-accent)] underline-offset-4 hover:underline" href="/blog/amar-club-login-guide">
              Amar Club login guide
            </Link>{" "}
            — sign-in troubleshooting
          </li>
        </ul>
      </ProsePage>
      <CtaSection
        title="Explore our Amar Club gaming guides"
        description="Detailed articles on Amar Club features, mobile access, bonuses, and beginner tips—built for phones, written for humans."
        primaryHref="/blog"
        primaryLabel="Browse all guides"
        secondaryHref="/features"
        secondaryLabel="Amar Club features"
      />
    </>
  );
}
