import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export function CtaSection({
  title,
  description,
  primaryHref,
  primaryLabel,
  secondaryHref,
  secondaryLabel,
}: {
  title: string;
  description: string;
  primaryHref: string;
  primaryLabel: string;
  secondaryHref?: string;
  secondaryLabel?: string;
}) {
  return (
    <section className="py-16 sm:py-20">
      <Container>
        <div className="relative overflow-hidden rounded-2xl border border-[var(--color-border)] bg-gradient-to-br from-[#111827] via-[#0B0F1A] to-[#070a12] px-5 py-8 sm:rounded-3xl sm:px-10 sm:py-14">
          <div
            aria-hidden
            className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-[var(--color-glow)] blur-3xl"
          />
          <div className="relative max-w-2xl space-y-3 sm:space-y-4">
            <h2 className="font-[family-name:var(--font-display)] text-lg font-semibold tracking-tight text-[var(--color-foreground)] sm:text-2xl lg:text-3xl">
              {title}
            </h2>
            <p className="text-sm leading-relaxed text-[var(--color-muted)] sm:text-base">
              {description}
            </p>
            <div className="flex flex-col gap-2.5 pt-1 sm:flex-row sm:items-center sm:gap-3 sm:pt-2">
              <ButtonLink href={primaryHref}>{primaryLabel}</ButtonLink>
              {secondaryHref && secondaryLabel ? (
                <ButtonLink href={secondaryHref} variant="secondary">
                  {secondaryLabel}
                </ButtonLink>
              ) : null}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
