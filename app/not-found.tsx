import Link from "next/link";
import { Container } from "@/components/ui/Container";

export default function NotFound() {
  return (
    <section className="py-24">
      <Container>
        <h1 className="font-[family-name:var(--font-display)] text-3xl font-semibold text-[var(--color-foreground)]">
          Page not found
        </h1>
        <p className="mt-3 max-w-lg text-[var(--color-muted)]">
          The page you requested does not exist. Start from the home page or open
          the blog index.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Link
            className="inline-flex min-h-11 items-center justify-center rounded-xl bg-gradient-to-r from-[#FACC15] to-[#22C55E] px-5 py-2.5 text-sm font-semibold text-[#0B0F1A]"
            href="/"
          >
            Home
          </Link>
          <Link
            className="inline-flex min-h-11 items-center justify-center rounded-xl border border-[var(--color-border)] bg-[var(--color-elevated)] px-5 py-2.5 text-sm font-semibold text-[var(--color-foreground)]"
            href="/blog"
          >
            Blog
          </Link>
        </div>
      </Container>
    </section>
  );
}
