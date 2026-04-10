import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import Link from "next/link";

export function FaqSection({
  eyebrow = "FAQ",
  title,
  description,
  items,
  ctaHref,
  ctaLabel,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  items: { question: string; answer: string }[];
  ctaHref?: string;
  ctaLabel?: string;
}) {
  return (
    <section className="py-16 sm:py-20">
      <Container>
        <SectionHeading eyebrow={eyebrow} title={title} description={description} />
        <div className="grid gap-4">
          {items.map((item) => (
            <details
              key={item.question}
              className="group rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-5 open:border-white/15"
            >
              <summary className="cursor-pointer list-none font-semibold text-[var(--color-foreground)] marker:content-none [&::-webkit-details-marker]:hidden">
                <span className="flex items-start justify-between gap-4">
                  <span>{item.question}</span>
                  <span
                    aria-hidden
                    className="mt-0.5 shrink-0 text-[var(--color-muted)] transition group-open:rotate-45"
                  >
                    +
                  </span>
                </span>
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-[var(--color-muted)]">
                {item.answer}
              </p>
            </details>
          ))}
        </div>
        {ctaHref && ctaLabel ? (
          <p className="mt-8 text-sm text-[var(--color-muted)]">
            <Link
              href={ctaHref}
              className="font-semibold text-[var(--color-accent-2)] underline-offset-4 hover:underline"
            >
              {ctaLabel}
            </Link>
          </p>
        ) : null}
      </Container>
    </section>
  );
}
