import Link from "next/link";
import { CtaSection } from "@/components/sections/CtaSection";
import { FaqSection } from "@/components/sections/FaqSection";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";
import { buildMetadata } from "@/lib/metadata";
import { BreadcrumbJsonLd, FaqJsonLd } from "@/lib/schema";

const appFaqs = [
  {
    question: "Is the Amar Club app safe to use?",
    answer:
      "Yes, when downloaded from official sources like Google Play or the App Store. Always verify the publisher name before installing.",
  },
  {
    question: "Does the Amar Club app work without internet?",
    answer:
      "Some features may be available offline, but real-money gaming and account management require an active internet connection.",
  },
  {
    question: "How much storage does the Amar Club app need?",
    answer:
      "The app requires about 45-52 MB for installation plus approximately 50 MB for cached data. We recommend having at least 200 MB free for optimal performance.",
  },
  {
    question: "Can I use the same account on the app and browser?",
    answer:
      "Yes, your Amar Club account works across all platforms. Log in with the same credentials on the app, mobile browser, or desktop.",
  },
] as const;

export const metadata = buildMetadata({
  title: "Amar Club App \u2014 Mobile Gaming Experience for Android & iOS",
  description:
    "Explore the Amar Club app: features, screenshots, performance specs, user ratings, and why mobile players prefer the app over browser access.",
  path: "/app",
});

export default function AppPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "App", path: "/app" },
        ]}
      />
      <FaqJsonLd faqs={appFaqs} />

      {/* Hero */}
      <section className="hero-grid relative overflow-hidden border-b border-[var(--color-border)]">
        <Container className="relative py-14 sm:py-20 lg:py-24">
          <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Amar Club app" }]} />
          <div className="mt-8 grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <div className="space-y-6">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[var(--color-accent-2)]">
                Mobile gaming &middot; Android &amp; iOS
              </p>
              <h1 className="font-[family-name:var(--font-display)] text-2xl font-semibold leading-tight tracking-tight text-[var(--color-foreground)] sm:text-4xl lg:text-5xl">
                The <span className="gradient-text">Amar Club</span> app &mdash;
                gaming in your pocket
              </h1>
              <p className="max-w-xl text-base leading-relaxed text-[var(--color-muted)] sm:text-lg">
                Faster load times, optimized touch controls, push notifications,
                and a UI designed for one-handed play. The Amar Club app brings the
                full gaming experience to your phone.
              </p>
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                <ButtonLink href="/download">Download now</ButtonLink>
                <ButtonLink href="#app-features" variant="secondary">
                  Explore features
                </ButtonLink>
              </div>
              <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-[var(--color-muted)]">
                <span className="flex items-center gap-1">
                  <span className="text-[var(--color-accent)]">&#9733;&#9733;&#9733;&#9733;</span>
                  <span>&#9733;</span>
                  <span className="font-semibold text-[var(--color-foreground)]">4.6</span>
                </span>
                <span className="hidden sm:inline">|</span>
                <span>50K+ downloads</span>
                <span className="hidden sm:inline">|</span>
                <span>Free</span>
              </div>
            </div>
            <div className="relative mx-auto w-full max-w-xs overflow-hidden">
              <div
                aria-hidden
                className="absolute inset-0 -m-8 rounded-[2rem] bg-gradient-to-br from-[rgba(250,204,21,0.15)] via-transparent to-[rgba(34,197,94,0.12)] blur-2xl"
              />
              <div className="relative aspect-[9/19] overflow-hidden rounded-[2rem] border-2 border-[var(--color-border)] bg-[var(--color-surface)] shadow-[var(--shadow-card)]">
                {/* IMAGE: App hero mockup - replace src later */}
                <div className="flex h-full w-full items-center justify-center text-sm text-[var(--color-muted)]">
                  <span className="rounded-xl border border-dashed border-[var(--color-border)] px-6 py-4">
                    App mockup
                  </span>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* App Stats */}
      <section className="border-b border-[var(--color-border)] bg-[var(--color-surface)]">
        <Container>
          <div className="grid grid-cols-4 divide-x divide-[var(--color-border)]">
            {[
              { value: "4.6", label: "Rating" },
              { value: "50K+", label: "Downloads" },
              { value: "45 MB", label: "Size" },
              { value: "v3.2", label: "Version" },
            ].map((stat) => (
              <div key={stat.label} className="px-2 py-4 text-center sm:px-6 sm:py-6">
                <p className="font-[family-name:var(--font-display)] text-lg font-bold text-[var(--color-accent)] sm:text-2xl lg:text-3xl">
                  {stat.value}
                </p>
                <p className="mt-0.5 text-[10px] font-medium text-[var(--color-muted)] sm:mt-1 sm:text-xs">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Screenshots Gallery */}
      <section className="py-14 sm:py-20">
        <Container>
          <h2 className="text-center font-[family-name:var(--font-display)] text-xl font-semibold tracking-tight text-[var(--color-foreground)] sm:text-3xl">
            Amar Club app screenshots
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-center text-base leading-relaxed text-[var(--color-muted)]">
            Take a look at the Amar Club app interface. Clean design, intuitive
            navigation, and gaming controls optimized for mobile screens.
          </p>
          <div className="mt-8 flex gap-3 overflow-x-auto pb-3 sm:mt-10 sm:gap-4 sm:pb-4">
            {[
              "Game lobby",
              "Live games",
              "Dashboard",
              "Bonus",
              "Settings",
            ].map((label) => (
              <div key={label} className="w-32 shrink-0 sm:w-44 lg:w-52">
                <div className="aspect-[9/16] overflow-hidden rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] shadow-[var(--shadow-soft)] sm:rounded-2xl">
                  {/* IMAGE: {label} screenshot - replace src later */}
                  <div className="flex h-full w-full items-center justify-center text-[10px] text-[var(--color-muted)] sm:text-xs">
                    {label}
                  </div>
                </div>
                <p className="mt-1.5 text-center text-[10px] font-medium text-[var(--color-muted)] sm:mt-2 sm:text-xs">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* App Features */}
      <section id="app-features" className="border-y border-[var(--color-border)] bg-[var(--color-surface)] py-14 sm:py-20">
        <Container>
          <h2 className="text-center font-[family-name:var(--font-display)] text-xl font-semibold tracking-tight text-[var(--color-foreground)] sm:text-3xl">
            Why players choose the Amar Club app
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-center text-base leading-relaxed text-[var(--color-muted)]">
            Real advantages for mobile players &mdash; not just marketing buzzwords.
          </p>
          <div className="mt-8 grid gap-3 grid-cols-2 sm:mt-10 sm:gap-4 lg:grid-cols-3">
            {[
              {
                icon: "\u26A1",
                title: "Instant launch",
                desc: "One tap from your home screen. No browser, no URLs.",
              },
              {
                icon: "\uD83D\uDD14",
                title: "Smart notifications",
                desc: "Bonuses, results, and account alerts. Mute anytime.",
              },
              {
                icon: "\uD83D\uDD12",
                title: "Biometric login",
                desc: "Face ID, Touch ID, or fingerprint sign-in.",
              },
              {
                icon: "\uD83D\uDCF1",
                title: "Touch controls",
                desc: "Buttons and controls designed for thumbs.",
              },
              {
                icon: "\uD83C\uDF10",
                title: "Mobile data ready",
                desc: "Low data usage on 4G/5G connections.",
              },
              {
                icon: "\uD83D\uDEE1\uFE0F",
                title: "App security",
                desc: "Encrypted connections and auto-logout.",
              },
            ].map((feature) => (
              <div
                key={feature.title}
                className="rounded-xl border border-[var(--color-border)] bg-[var(--color-elevated)] p-3.5 sm:rounded-2xl sm:p-6"
              >
                <span className="text-xl sm:text-2xl" aria-hidden>{feature.icon}</span>
                <h3 className="mt-2 font-[family-name:var(--font-display)] text-sm font-semibold text-[var(--color-foreground)] sm:mt-3 sm:text-lg">
                  {feature.title}
                </h3>
                <p className="mt-1 text-xs leading-relaxed text-[var(--color-muted)] sm:mt-2 sm:text-sm">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Technical specs */}
      <section className="py-10 sm:py-14 lg:py-20">
        <Container>
          <div className="grid gap-6 sm:gap-10 lg:grid-cols-2 lg:items-start">
            <div>
              <h2 className="font-[family-name:var(--font-display)] text-xl font-semibold tracking-tight text-[var(--color-foreground)] sm:text-3xl">
                Amar Club app technical specifications
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-[var(--color-muted)] sm:mt-3 sm:text-base">
                Full technical details to help you decide if the Amar Club app is
                right for your device.
              </p>
              <div className="mt-4 overflow-x-auto rounded-xl border border-[var(--color-border)] sm:mt-6 sm:rounded-2xl">
                <table className="w-full text-xs sm:text-sm">
                  <tbody className="divide-y divide-[var(--color-border)]">
                    {[
                      { label: "App name", value: "Amar Club" },
                      { label: "Developer", value: "Amar Club Ent." },
                      { label: "Version", value: "3.2.1" },
                      { label: "Released", value: "Jan 2024" },
                      { label: "Updated", value: "Apr 2026" },
                      { label: "Android size", value: "45 MB" },
                      { label: "iOS size", value: "52 MB" },
                      { label: "Android min", value: "8.0 (Oreo)" },
                      { label: "iOS min", value: "14.0" },
                      { label: "RAM min", value: "2 GB" },
                      { label: "Category", value: "Casino & Gaming" },
                      { label: "Languages", value: "14 supported" },
                      { label: "Price", value: "Free (IAP)" },
                      { label: "Rating", value: "18+" },
                    ].map((row) => (
                      <tr key={row.label} className="odd:bg-[var(--color-surface)] even:bg-[var(--color-elevated)]">
                        <td className="px-3 py-2.5 font-medium text-[var(--color-foreground)] sm:px-5 sm:py-3">
                          {row.label}
                        </td>
                        <td className="px-3 py-2.5 text-right text-[var(--color-muted)] sm:px-5 sm:py-3">
                          {row.value}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-1 sm:gap-4">
              <div className="relative overflow-hidden rounded-xl border border-[var(--color-border)] bg-[var(--color-elevated)] sm:rounded-2xl">
                {/* IMAGE: App performance visual - replace src later */}
                <div className="flex aspect-square w-full items-center justify-center text-[10px] text-[var(--color-muted)] sm:text-sm">
                  <span className="rounded-lg border border-dashed border-[var(--color-border)] px-3 py-2 sm:rounded-xl sm:px-6 sm:py-4">
                    Performance
                  </span>
                </div>
              </div>
              <div className="relative overflow-hidden rounded-xl border border-[var(--color-border)] bg-[var(--color-elevated)] sm:rounded-2xl">
                {/* IMAGE: App UI detail visual - replace src later */}
                <div className="flex aspect-square w-full items-center justify-center text-[10px] text-[var(--color-muted)] sm:aspect-video sm:text-sm">
                  <span className="rounded-lg border border-dashed border-[var(--color-border)] px-3 py-2 sm:rounded-xl sm:px-6 sm:py-4">
                    UI detail
                  </span>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* FAQ */}
      <FaqSection
        eyebrow="App FAQ"
        title="Amar Club app FAQ &mdash; common questions"
        items={[...appFaqs]}
      />

      {/* Related */}
      <section className="py-14 sm:py-20">
        <Container>
          <h2 className="text-center font-[family-name:var(--font-display)] text-xl font-semibold tracking-tight text-[var(--color-foreground)] sm:text-3xl">
            Continue exploring Amar Club
          </h2>
          <div className="mt-6 grid grid-cols-2 gap-3 sm:mt-8 sm:gap-4 lg:grid-cols-4">
            {[
              { href: "/download", title: "Download guide", desc: "Install for Android & iOS" },
              { href: "/login", title: "Login guide", desc: "Safe sign-in tips" },
              { href: "/features", title: "Features", desc: "Platform breakdown" },
              { href: "/blog/amar-club-mobile-guide", title: "Mobile guide", desc: "Phone gaming tips" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="group rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-3.5 transition hover:border-[var(--color-accent)]/30 hover:shadow-[var(--shadow-soft)] sm:rounded-2xl sm:p-5"
              >
                <h3 className="font-[family-name:var(--font-display)] text-sm font-semibold text-[var(--color-foreground)] group-hover:text-[var(--color-accent)] sm:text-base">
                  {link.title}
                </h3>
                <p className="mt-0.5 text-xs text-[var(--color-muted)] sm:mt-1 sm:text-sm">{link.desc}</p>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <CtaSection
        title="Get the Amar Club app today"
        description="Free download for Android and iOS. Better performance, easier navigation, and a mobile-first gaming experience."
        primaryHref="/download"
        primaryLabel="Download Amar Club"
        secondaryHref="/blog/amar-club-app-download-guide"
        secondaryLabel="Read installation guide"
      />
    </>
  );
}
