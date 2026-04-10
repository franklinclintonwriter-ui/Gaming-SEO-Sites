import Link from "next/link";
import { formatDate } from "@/lib/format-date";

export function BlogCard({
  title,
  excerpt,
  href,
  date,
}: {
  title: string;
  excerpt: string;
  href: string;
  date: string;
}) {
  return (
    <article className="group rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-4 shadow-[var(--shadow-card)] transition hover:border-white/15 sm:rounded-2xl sm:p-6">
      <time
        dateTime={date}
        className="text-[10px] font-medium uppercase tracking-wide text-[var(--color-muted)] sm:text-xs"
      >
        {formatDate(date)}
      </time>
      <h3 className="mt-2 font-[family-name:var(--font-display)] text-base font-semibold tracking-tight text-[var(--color-foreground)] group-hover:text-white sm:mt-3 sm:text-xl">
        <Link href={href} className="focus-visible:rounded-sm">
          {title}
        </Link>
      </h3>
      <p className="mt-1.5 line-clamp-3 text-xs leading-relaxed text-[var(--color-muted)] sm:mt-2 sm:text-sm">
        {excerpt}
      </p>
      <Link
        href={href}
        className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-[var(--color-accent-2)] transition group-hover:gap-2 sm:mt-4 sm:text-sm"
      >
        Read guide
        <span aria-hidden>→</span>
      </Link>
    </article>
  );
}
