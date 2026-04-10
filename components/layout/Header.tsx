"use client";

import Link from "next/link";
import { useEffect, useId, useState } from "react";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

const desktopLinks = [
  { href: "/about", label: "About" },
  { href: "/features", label: "Features" },
  { href: "/how-to-play", label: "How to play" },
  { href: "/app", label: "App" },
  { href: "/download", label: "Download" },
  { href: "/blog", label: "Blog" },
  { href: "/faq", label: "FAQ" },
];

function MenuIcon({ open }: { open: boolean }) {
  return (
    <span className="relative block h-3.5 w-[22px] shrink-0" aria-hidden>
      <span
        className={`absolute left-0 top-0 block h-0.5 w-[22px] rounded-full bg-current transition-[transform,opacity,top] duration-200 ease-out ${
          open ? "top-[6px] rotate-45" : ""
        }`}
      />
      <span
        className={`absolute left-0 top-[6px] block h-0.5 w-[22px] rounded-full bg-current transition-opacity duration-200 ease-out ${
          open ? "opacity-0" : "opacity-100"
        }`}
      />
      <span
        className={`absolute left-0 top-3 block h-0.5 w-[22px] rounded-full bg-current transition-[transform,top] duration-200 ease-out ${
          open ? "top-[6px] -rotate-45" : ""
        }`}
      />
    </span>
  );
}

const mobileLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/features", label: "Features" },
  { href: "/how-to-play", label: "How to play" },
  { href: "/app", label: "App" },
  { href: "/download", label: "Download" },
  { href: "/login", label: "Login guide" },
  { href: "/bonus", label: "Bonus" },
  { href: "/faq", label: "FAQ" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

const drawerEase =
  "cubic-bezier(0.32, 0.72, 0, 1)" as const;

export function Header() {
  const [open, setOpen] = useState(false);
  const panelId = useId();

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="sticky top-0 z-50">
      <div className="relative z-[100] border-b border-[var(--color-border)] bg-[var(--color-bg)]/80 backdrop-blur-md">
        <Container className="flex h-16 items-center justify-between gap-4">
          <Link
            href="/"
            className="font-[family-name:var(--font-display)] text-lg font-bold tracking-tight text-[var(--color-foreground)]"
          >
            Amar Club
          </Link>

          <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
            {desktopLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-lg px-3 py-2 text-sm font-medium text-[var(--color-muted)] transition hover:bg-white/5 hover:text-[var(--color-foreground)]"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="rounded-lg px-3 py-2 text-sm font-medium text-[var(--color-muted)] transition hover:bg-white/5 hover:text-[var(--color-foreground)]"
            >
              Contact
            </Link>
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <ButtonLink href="/how-to-play" variant="secondary">
              Start here
            </ButtonLink>
            <ButtonLink href="/blog">Guides</ButtonLink>
          </div>

          <button
            type="button"
            className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] text-[var(--color-foreground)] transition hover:border-white/15 hover:bg-white/[0.04] active:bg-white/[0.06] lg:hidden"
            aria-expanded={open}
            aria-controls={panelId}
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            <MenuIcon open={open} />
          </button>
        </Container>
      </div>

      <div
        className={`lg:hidden fixed inset-0 z-[80] bg-black/55 transition-opacity duration-300 ease-out motion-reduce:transition-none ${
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
        style={{ transitionTimingFunction: drawerEase }}
        aria-hidden={!open}
        onClick={() => setOpen(false)}
      />

      <div
        id={panelId}
        className={`lg:hidden fixed left-0 top-0 z-[90] flex h-full max-h-dvh w-[min(20rem,calc(100vw-2.5rem))] flex-col border-r border-[var(--color-border)] bg-[var(--color-bg)] shadow-[0_0_0_1px_rgba(255,255,255,0.06),24px_0_64px_rgba(0,0,0,0.55)] transition-transform duration-300 ease-out will-change-transform motion-reduce:transition-none motion-reduce:duration-150 ${
          open
            ? "pointer-events-auto translate-x-0"
            : "pointer-events-none -translate-x-full"
        }`}
        style={{ transitionTimingFunction: drawerEase, paddingTop: "4rem" }}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
        aria-hidden={!open}
        inert={!open ? true : undefined}
      >
        <nav
          aria-label="Mobile primary"
          className="mx-auto flex min-h-0 w-full max-w-6xl flex-1 flex-col gap-1 overflow-y-auto overscroll-y-contain px-4 py-4 pb-[max(1.5rem,env(safe-area-inset-bottom))]"
        >
          {mobileLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-xl px-4 py-3 text-base font-medium text-[var(--color-foreground)] transition-colors hover:bg-white/5 active:bg-white/10"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <div className="mt-4 flex flex-col gap-3 border-t border-[var(--color-border)] pt-4">
            <ButtonLink href="/how-to-play" variant="secondary">
              Start here
            </ButtonLink>
            <ButtonLink href="/blog">Browse guides</ButtonLink>
          </div>
        </nav>
      </div>
    </header>
  );
}
