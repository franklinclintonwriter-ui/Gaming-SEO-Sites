import type { ReactNode } from "react";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
}) {
  const a = align === "center" ? "text-center mx-auto" : "";
  return (
    <div className={`mb-10 max-w-2xl space-y-3 ${a}`}>
      {eyebrow ? (
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-accent-2)]">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="font-[family-name:var(--font-display)] text-xl font-semibold tracking-tight text-[var(--color-foreground)] sm:text-3xl lg:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="text-base leading-relaxed text-[var(--color-muted)] sm:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  );
}
