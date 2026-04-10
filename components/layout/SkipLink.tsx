export function SkipLink() {
  return (
    <a
      href="#main-content"
      className="fixed left-4 top-0 z-[100] -translate-y-[140%] rounded-xl border border-[var(--color-border)] bg-[var(--color-elevated)] px-4 py-2 text-sm font-semibold text-[var(--color-foreground)] shadow-[var(--shadow-card)] transition-transform focus:translate-y-4 focus:outline-none"
    >
      Skip to content
    </a>
  );
}
