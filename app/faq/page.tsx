import { CtaSection } from "@/components/sections/CtaSection";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { ProsePage } from "@/components/layout/ProsePage";
import { buildMetadata } from "@/lib/metadata";
import { BreadcrumbJsonLd, FaqJsonLd } from "@/lib/schema";
import { globalFaqs } from "@/lib/faq-content";

export const metadata = buildMetadata({
  title: "Amar Club FAQ — frequently asked questions about gaming, login & bonus",
  description:
    "Amar Club FAQ: get clear answers about login help, app access, bonus rules, mobile play, responsible gambling, and more — with links to in-depth guides.",
  path: "/faq",
});

export default function FaqPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "FAQ", path: "/faq" },
        ]}
      />
      <FaqJsonLd faqs={globalFaqs} />
      <ProsePage>
        <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Amar Club FAQ" }]} />
        <h1 className="mt-6 font-[family-name:var(--font-display)] text-2xl font-semibold tracking-tight text-[var(--color-foreground)] sm:text-3xl lg:text-4xl">
          Amar Club FAQ — answers to the most common gaming questions
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-[var(--color-muted)]">
          Short answers to the questions we hear most often. Each one points to a
          longer guide when you want more detail—same facts, less repetition.
        </p>
        <div className="mt-10 space-y-4">
          {globalFaqs.map((f) => (
            <details
              key={f.question}
              className="group rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-5 open:border-white/15"
            >
              <summary className="cursor-pointer list-none font-semibold text-[var(--color-foreground)] marker:content-none [&::-webkit-details-marker]:hidden">
                <span className="flex items-start justify-between gap-4">
                  <span>{f.question}</span>
                  <span
                    aria-hidden
                    className="mt-0.5 shrink-0 text-[var(--color-muted)] transition group-open:rotate-45"
                  >
                    +
                  </span>
                </span>
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-[var(--color-muted)]">
                {f.answer}
              </p>
            </details>
          ))}
        </div>
      </ProsePage>
      <CtaSection
        title="Want narrative explanations?"
        description="Try the blog’s Amar Club FAQ guide article for a guided tour, or jump into mobile and app posts."
        primaryHref="/blog/amar-club-faq-guide"
        primaryLabel="Read FAQ guide article"
        secondaryHref="/blog"
        secondaryLabel="Blog index"
      />
    </>
  );
}
