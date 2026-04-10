import type { ReactNode } from "react";

export function FeatureCard({
  icon,
  title,
  children,
}: {
  icon: ReactNode;
  title: string;
  children: ReactNode;
}) {
  return (
    <div className="rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-4 shadow-[var(--shadow-soft)] transition hover:border-white/12 sm:rounded-2xl sm:p-6">
      <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[var(--color-accent-soft)] text-base sm:h-11 sm:w-11 sm:rounded-xl sm:text-lg">
        {icon}
      </div>
      <h3 className="mt-2.5 font-[family-name:var(--font-display)] text-sm font-semibold text-[var(--color-foreground)] sm:mt-4 sm:text-lg">
        {title}
      </h3>
      <div className="mt-1 text-xs leading-relaxed text-[var(--color-muted)] sm:mt-2 sm:text-sm">
        {children}
      </div>
    </div>
  );
}
