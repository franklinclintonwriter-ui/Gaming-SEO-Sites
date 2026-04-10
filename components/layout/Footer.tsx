import Link from "next/link";
import { footerNav, legalNav } from "@/lib/nav";
import { Container } from "@/components/ui/Container";
import { siteConfig } from "@/lib/site-config";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[var(--color-border)] bg-[#05060b] py-14">
      <Container>
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-3">
            <p className="font-[family-name:var(--font-display)] text-lg font-bold">
              {siteConfig.name}
            </p>
            <p className="max-w-sm text-sm leading-relaxed text-[var(--color-muted)]">
              Independent guides and feature overviews for people researching the
              Amar Club online experience—built for clarity, speed, and mobile
              reading.
            </p>
          </div>
          <div>
            <p className="text-sm font-semibold text-[var(--color-foreground)]">
              Explore
            </p>
            <ul className="mt-3 space-y-2 text-sm text-[var(--color-muted)]">
              {footerNav.slice(0, 5).map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="transition hover:text-[var(--color-foreground)]"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-sm font-semibold text-[var(--color-foreground)]">
              Guides
            </p>
            <ul className="mt-3 space-y-2 text-sm text-[var(--color-muted)]">
              {footerNav.slice(5).map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="transition hover:text-[var(--color-foreground)]"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-sm font-semibold text-[var(--color-foreground)]">
              Legal & contact
            </p>
            <ul className="mt-3 space-y-2 text-sm text-[var(--color-muted)]">
              {legalNav.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="transition hover:text-[var(--color-foreground)]"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/contact"
                  className="transition hover:text-[var(--color-foreground)]"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-10 flex flex-col gap-3 border-t border-[var(--color-border)] pt-8 text-xs text-[var(--color-muted)] sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {siteConfig.name}. Educational content only. Gambling can be
            harmful if not controlled—please play responsibly and follow local
            laws.
          </p>
          <p className="text-[var(--color-muted)]/80">
            Not affiliated with any operator. Information may change; verify
            details with official sources.
          </p>
        </div>
      </Container>
    </footer>
  );
}
