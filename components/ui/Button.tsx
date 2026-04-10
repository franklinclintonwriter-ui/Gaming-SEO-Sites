import Link from "next/link";
import type { ButtonHTMLAttributes, ReactNode } from "react";

const base =
  "inline-flex min-h-11 min-w-[44px] items-center justify-center gap-2 rounded-xl px-5 py-2.5 text-sm font-semibold transition duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2";

const variants = {
  primary:
    "bg-gradient-to-r from-[#FACC15] to-[#22C55E] text-[#0B0F1A] shadow-[0_0_20px_rgba(34,197,94,0.3)] hover:shadow-[0_0_30px_rgba(34,197,94,0.5)] hover:brightness-110 active:brightness-95",
  secondary:
    "border border-[var(--color-border)] bg-[var(--color-elevated)] text-[var(--color-foreground)] hover:border-[#FACC15]/40 hover:bg-white/5",
  ghost: "text-[var(--color-muted)] hover:text-[var(--color-accent)]",
} as const;

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className = "",
  prefetch = true,
}: {
  href: string;
  children: ReactNode;
  variant?: keyof typeof variants;
  className?: string;
  prefetch?: boolean;
}) {
  return (
    <Link
      href={href}
      prefetch={prefetch}
      className={`${base} ${variants[variant]} ${className}`}
    >
      {children}
    </Link>
  );
}

export function ButtonNative({
  children,
  variant = "primary",
  className = "",
  type = "button",
  ...rest
}: {
  children: ReactNode;
  variant?: keyof typeof variants;
  className?: string;
  type?: "button" | "submit";
} & ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      type={type}
      className={`${base} ${variants[variant]} ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
}
