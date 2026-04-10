import Link from "next/link";
import { CtaSection } from "@/components/sections/CtaSection";
import { FaqSection } from "@/components/sections/FaqSection";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";
import { buildMetadata } from "@/lib/metadata";
import { BreadcrumbJsonLd, FaqJsonLd } from "@/lib/schema";

const downloadFaqs = [
  {
    question: "Is the Amar Club app free to download?",
    answer:
      "The Amar Club app is typically free to download from official app stores. In-app purchases and real-money gameplay are separate from the download itself.",
  },
  {
    question: "Can I download Amar Club on iPhone and Android?",
    answer:
      "Amar Club is generally available on both iOS (App Store) and Android (Google Play or official APK). Always verify the publisher before installing.",
  },
  {
    question: "How do I know if the Amar Club APK is safe?",
    answer:
      "Only download from the official website or verified app store listings. Check the publisher name, read recent reviews, and never disable security settings to install an APK from unknown sources.",
  },
  {
    question: "What happens to my account if I reinstall the app?",
    answer:
      "Your account data is stored server-side. After reinstalling, simply log in with your existing credentials to restore your account. No progress is lost.",
  },
  {
    question: "Where can I find the Amar Club APK download for Android?",
    answer:
      "The safest Amar Club APK download is from the Google Play Store or the official Amar Club website. Never download APK files from third-party sites or file-sharing platforms.",
  },
  {
    question: "Does the Amar Club app work on Ethio Telecom mobile data?",
    answer:
      "Yes, the Amar Club app is optimized for mobile data connections including Ethio Telecom networks. The app caches interface elements locally to reduce data usage.",
  },
  {
    question: "How long does the Amar Club app download take?",
    answer:
      "On a stable 4G connection, the 45 MB Android download typically completes in under 2 minutes. The 52 MB iOS version takes a similar amount of time via the App Store.",
  },
  {
    question: "Can I update the Amar Club app without losing my data?",
    answer:
      "Yes, updating the app preserves all your account data, settings, and game history. Updates only replace the app files, not your personal data.",
  },
] as const;

export const metadata = buildMetadata({
  title: "Amar Club APK Download \u2014 Free App for Android & iOS (2026)",
  description:
    "Amar Club app download guide: APK size, device requirements, installation steps for Android & iOS, safety tips, and everything Ethiopian players need to know before downloading.",
  path: "/download",
});

export default function DownloadPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Download", path: "/download" },
        ]}
      />
      <FaqJsonLd faqs={downloadFaqs} />

      {/* Hero */}
      <section className="hero-grid relative overflow-hidden border-b border-[var(--color-border)]">
        <Container className="relative py-14 sm:py-20 lg:py-24">
          <Breadcrumb
            items={[{ label: "Home", href: "/" }, { label: "Download Amar Club" }]}
          />
          <div className="mt-8 grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <div className="space-y-6">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[var(--color-accent-2)]">
                Free download &middot; Android &amp; iOS
              </p>
              <h1 className="font-[family-name:var(--font-display)] text-2xl font-semibold leading-tight tracking-tight text-[var(--color-foreground)] sm:text-4xl lg:text-5xl">
                <span className="gradient-text">Amar Club</span> app download &mdash; APK for Android &amp; iOS
              </h1>
              <p className="max-w-xl text-base leading-relaxed text-[var(--color-muted)] sm:text-lg">
                Looking for the Amar Club APK download or the official Amar Club
                app download link? This page covers everything Ethiopian and
                international players need: file size, device requirements, step-by-step
                installation, and how to verify you are downloading the real app.
              </p>
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                <ButtonLink href="#installation-guide">How to install</ButtonLink>
                <ButtonLink href="#device-requirements" variant="secondary">
                  Check device requirements
                </ButtonLink>
              </div>
              <p className="text-xs leading-relaxed text-[var(--color-muted)]">
                This is an informational guide &mdash; no binaries are hosted here.
                Always download from official sources.
              </p>
            </div>
            <div className="relative mx-auto w-full max-w-sm overflow-hidden">
              <div
                aria-hidden
                className="absolute inset-0 -m-6 rounded-[2rem] bg-gradient-to-br from-[rgba(250,204,21,0.2)] via-transparent to-[rgba(34,197,94,0.15)] blur-2xl"
              />
              <div className="relative aspect-[9/16] overflow-hidden rounded-[1.75rem] border border-[var(--color-border)] bg-[var(--color-surface)] shadow-[var(--shadow-card)]">
                {/* IMAGE: Hero app screenshot - replace src later */}
                <div className="flex h-full w-full items-center justify-center text-sm text-[var(--color-muted)]">
                  <span className="rounded-xl border border-dashed border-[var(--color-border)] px-6 py-4">
                    App screenshot
                  </span>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* About the Amar Club Download */}
      <section className="py-14 sm:py-20">
        <Container>
          <div className="mx-auto max-w-3xl space-y-6 text-base leading-relaxed text-[var(--color-muted)]">
            <h2 className="font-[family-name:var(--font-display)] text-xl font-semibold tracking-tight text-[var(--color-foreground)] sm:text-3xl">
              Why thousands of players search for the Amar Club app download every day
            </h2>
            <p>
              The Amar Club app download has become one of the most searched topics
              among Ethiopian online gaming enthusiasts, and for good reason. Whether
              you are in Addis Ababa, Bahir Dar, Hawassa, or anywhere with a decent
              mobile connection, the Amar Club app gives you instant access to a full
              casino and gaming experience right from your phone. No more typing URLs
              into a browser, no more losing your session when you accidentally close
              a tab.
            </p>
            <p>
              Many players specifically look for the Amar Club APK download because
              they want the Android version that they can install directly. The APK
              file is lightweight at just 45 MB, which means even on slower Ethiopian
              mobile networks like Ethio Telecom&apos;s data plans, the Amar Club app
              download finishes quickly. For iPhone users, the iOS version is
              available on the App Store at 52 MB and installs just as easily.
            </p>
            <p>
              What makes the Amar Club download popular is how well the app is
              optimized for the phones most people actually use. You do not need the
              latest flagship device. If your phone runs Android 8.0 or iOS 14 and
              has at least 2 GB of RAM, you can run the Amar Club app smoothly. That
              covers phones like the Samsung Galaxy A series, Tecno, Infinix, and
              other brands that are common in Ethiopia and East Africa.
            </p>

            <h2 className="font-[family-name:var(--font-display)] text-xl font-semibold tracking-tight text-[var(--color-foreground)] sm:text-3xl">
              Amar Club APK download vs App Store download &mdash; what is the difference?
            </h2>
            <p>
              When people search for &ldquo;Amar Club APK download,&rdquo; they are
              usually looking for the Android package file that lets them install the
              app outside of the Google Play Store. This is common in regions where
              the Play Store listing might not be available yet, or where players
              prefer to download directly from the official website.
            </p>
            <p>
              The Amar Club app download from the Play Store and the APK download
              from the official site contain the same application. The difference is
              the delivery method. With the Play Store, updates happen automatically.
              With a direct APK download, you may need to check for updates manually.
              Either way, always verify you are downloading from an official source
              before you install.
            </p>
            <p>
              For iOS users, there is no APK equivalent. The Amar Club app download
              for iPhone happens exclusively through Apple&apos;s App Store. Search
              for &ldquo;Amar Club&rdquo; in the App Store, verify the publisher is
              &ldquo;Amar Club Entertainment,&rdquo; and tap &ldquo;Get.&rdquo;
              That is the only safe way to download on iPhone and iPad.
            </p>

            {/* IMAGE: APK vs Store comparison visual - replace src later */}
            <div className="overflow-hidden rounded-2xl border border-[var(--color-border)] bg-[var(--color-elevated)]">
              <div className="flex aspect-[21/9] w-full items-center justify-center text-sm text-[var(--color-muted)]">
                <span className="rounded-xl border border-dashed border-[var(--color-border)] px-6 py-4">
                  APK vs App Store comparison image
                </span>
              </div>
            </div>

            <h2 className="font-[family-name:var(--font-display)] text-xl font-semibold tracking-tight text-[var(--color-foreground)] sm:text-3xl">
              What you get after the Amar Club app download
            </h2>
            <p>
              Once you complete the Amar Club download and open the app for the
              first time, you will find a clean lobby organized by game category.
              The interface is designed for one-handed use, so everything important
              is within thumb reach. The app remembers your preferences, loads
              your favourite games faster than a browser ever could, and lets you
              receive notifications about new bonuses and promotions.
            </p>
            <p>
              Ethiopian players especially appreciate that the Amar Club app works
              well on mobile data. The app uses less bandwidth than a browser session
              because it caches interface elements locally. This means even on a 3G
              connection, you can navigate the lobby and access your account without
              frustrating load times.
            </p>
            <p>
              The Amar Club app also supports Amharic and multiple other languages,
              making it accessible to a wider audience. Account management, deposit
              and withdrawal screens, and customer support are all available within
              the app, so you never need to switch to a browser for basic tasks.
            </p>

            <h2 className="font-[family-name:var(--font-display)] text-xl font-semibold tracking-tight text-[var(--color-foreground)] sm:text-3xl">
              Common mistakes when downloading Amar Club &mdash; and how to avoid them
            </h2>
            <p>
              The biggest risk with any Amar Club APK download is accidentally
              installing a fake or modified version. Scammers create lookalike apps
              with names like &ldquo;Amar Club Pro&rdquo; or &ldquo;Amar Club
              Mod&rdquo; that can steal your login credentials or install malware
              on your phone. The rule is simple: if it is not from the official
              website or the official app store listing, do not install it.
            </p>
            <p>
              Another common mistake is ignoring device storage. The Amar Club app
              download needs about 100 MB of free space when you include cached
              data. If your phone is nearly full, the installation might fail
              silently or the app might crash on launch. Before downloading, check
              your available storage in Settings and clear unnecessary files if needed.
            </p>
            <p>
              Finally, make sure your operating system is up to date before you
              start the Amar Club download. Outdated Android or iOS versions can
              cause compatibility issues and leave your device vulnerable to
              security threats. A quick software update before installing the app
              can prevent most problems.
            </p>

            <div className="rounded-2xl border border-[var(--color-accent)]/20 bg-[var(--color-accent-soft)] p-6">
              <p className="text-sm font-semibold text-[var(--color-foreground)]">
                Quick tip for Ethiopian players
              </p>
              <p className="mt-2 text-sm text-[var(--color-muted)]">
                If you are using Ethio Telecom data, try to download the Amar Club
                app during off-peak hours (early morning or late evening) for
                faster speeds. The 45 MB APK download typically completes in under
                2 minutes on a stable 4G connection. Connect to Wi-Fi at a caf&eacute;
                or home network if available for the best experience.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* App Info Card + Specs */}
      <section className="border-t border-[var(--color-border)] py-10 sm:py-14 lg:py-20">
        <Container>
          <div className="grid gap-5 sm:gap-6 lg:grid-cols-3">
            {/* Main app card */}
            <div className="lg:col-span-2">
              <div className="overflow-hidden rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] shadow-[var(--shadow-card)] sm:rounded-3xl">
                {/* App header */}
                <div className="flex items-start gap-3 p-4 sm:gap-5 sm:p-6 lg:p-8">
                  <div className="h-14 w-14 shrink-0 overflow-hidden rounded-xl border border-[var(--color-border)] bg-[var(--color-elevated)] sm:h-20 sm:w-20 sm:rounded-2xl">
                    {/* IMAGE: App icon - replace src later */}
                    <div className="flex h-full w-full items-center justify-center text-[10px] text-[var(--color-muted)] sm:text-xs">
                      Icon
                    </div>
                  </div>
                  <div className="min-w-0 flex-1">
                    <h2 className="font-[family-name:var(--font-display)] text-base font-semibold leading-snug text-[var(--color-foreground)] sm:text-xl lg:text-2xl">
                      Amar Club &mdash; Online Gaming
                    </h2>
                    <p className="mt-0.5 text-xs text-[var(--color-accent-2)] sm:mt-1 sm:text-sm">Amar Club Entertainment</p>
                    <div className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-[var(--color-muted)] sm:mt-3 sm:gap-x-4 sm:text-sm">
                      <span className="flex items-center gap-1">
                        <span className="text-[var(--color-accent)]">&#9733;&#9733;&#9733;&#9733;</span>
                        <span>&#9733;</span>
                        <span className="font-semibold text-[var(--color-foreground)]">4.6</span>
                      </span>
                      <span>50K+</span>
                      <span className="rounded-full border border-[var(--color-border)] px-1.5 py-0.5 text-[10px] sm:px-2 sm:text-xs">18+</span>
                    </div>
                  </div>
                </div>
                {/* Screenshots strip */}
                <div className="border-t border-[var(--color-border)] bg-[var(--color-elevated)]/50 px-4 py-4 sm:px-6 sm:py-5 lg:px-8">
                  <h3 className="mb-2 text-[10px] font-semibold uppercase tracking-wide text-[var(--color-muted)] sm:mb-3 sm:text-xs">
                    App screenshots
                  </h3>
                  <div className="-mx-1 flex gap-2 overflow-x-auto px-1 pb-2 sm:gap-3">
                    {[1, 2, 3, 4].map((n) => (
                      <div
                        key={n}
                        className="h-36 w-[4.5rem] shrink-0 overflow-hidden rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] sm:h-56 sm:w-28 sm:rounded-xl"
                      >
                        {/* IMAGE: Screenshot {n} - replace src later */}
                        <div className="flex h-full w-full items-center justify-center text-[10px] text-[var(--color-muted)] sm:text-xs">
                          {n}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Side panels — stack on mobile, 2-col on sm, single col on lg */}
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
              <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-4 shadow-[var(--shadow-soft)] sm:p-6">
                <h3 className="font-[family-name:var(--font-display)] text-base font-semibold text-[var(--color-foreground)] sm:text-lg">
                  Amar Club app details
                </h3>
                <dl className="mt-3 space-y-2 text-xs sm:mt-4 sm:space-y-3 sm:text-sm">
                  {[
                    { label: "Version", value: "3.2.1 (2026)" },
                    { label: "Android size", value: "45 MB" },
                    { label: "iOS size", value: "52 MB" },
                    { label: "Category", value: "Casino & Gaming" },
                    { label: "Price", value: "Free" },
                    { label: "In-app purchases", value: "Yes" },
                    { label: "Languages", value: "EN, AM, +12" },
                    { label: "Developer", value: "Amar Club Ent." },
                    { label: "Updated", value: "April 2026" },
                  ].map((item) => (
                    <div key={item.label} className="flex items-baseline justify-between gap-2">
                      <dt className="text-[var(--color-muted)]">{item.label}</dt>
                      <dd className="text-right font-medium text-[var(--color-foreground)]">{item.value}</dd>
                    </div>
                  ))}
                </dl>
              </div>
              <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-4 shadow-[var(--shadow-soft)] sm:p-6">
                <h3 className="font-[family-name:var(--font-display)] text-base font-semibold text-[var(--color-foreground)] sm:text-lg">
                  Compatibility
                </h3>
                <dl className="mt-3 space-y-2 text-xs sm:mt-4 sm:space-y-3 sm:text-sm">
                  {[
                    { label: "Android", value: "8.0+" },
                    { label: "iOS", value: "14.0+" },
                    { label: "RAM", value: "2 GB min" },
                    { label: "Storage", value: "100 MB free" },
                    { label: "Internet", value: "Required" },
                  ].map((item) => (
                    <div key={item.label} className="flex items-baseline justify-between gap-2">
                      <dt className="text-[var(--color-muted)]">{item.label}</dt>
                      <dd className="text-right font-medium text-[var(--color-foreground)]">{item.value}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* What's New */}
      <section className="border-y border-[var(--color-border)] bg-[var(--color-surface)] py-14 sm:py-20">
        <Container>
          <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
            <div>
              <h2 className="font-[family-name:var(--font-display)] text-xl font-semibold tracking-tight text-[var(--color-foreground)] sm:text-3xl">
                What&apos;s new in Amar Club app v3.2
              </h2>
              <p className="mt-3 text-base leading-relaxed text-[var(--color-muted)]">
                Each update improves performance, security, and the mobile gaming
                experience. Here are the latest highlights.
              </p>
              <ul className="mt-6 space-y-3 text-sm leading-relaxed text-[var(--color-muted)]">
                {[
                  "Improved login speed and session stability on mobile networks",
                  "Redesigned game lobby with faster category filtering",
                  "Enhanced touch controls for one-handed play",
                  "Better notification management \u2014 mute during sessions",
                  "Security patches and two-factor authentication improvements",
                  "Reduced app size by 15% for faster downloads",
                ].map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-[var(--color-accent-2)]" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative overflow-hidden rounded-2xl border border-[var(--color-border)] bg-[var(--color-elevated)]">
              {/* IMAGE: Update highlights visual - replace src later */}
              <div className="flex aspect-video w-full items-center justify-center text-sm text-[var(--color-muted)]">
                <span className="rounded-xl border border-dashed border-[var(--color-border)] px-6 py-4">
                  Update highlights image
                </span>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Installation Guide */}
      <section id="installation-guide" className="py-14 sm:py-20">
        <Container>
          <h2 className="text-center font-[family-name:var(--font-display)] text-xl font-semibold tracking-tight text-[var(--color-foreground)] sm:text-3xl">
            How to download and install Amar Club app
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-center text-base leading-relaxed text-[var(--color-muted)]">
            Follow these simple steps to get the Amar Club app running on your
            device. The process takes less than 2 minutes.
          </p>
          <div className="mt-8 grid gap-4 sm:mt-10 sm:gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-4 sm:rounded-3xl sm:p-6 lg:p-8">
              <div className="flex items-center gap-2.5 sm:gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[var(--color-accent-soft)] text-base sm:h-10 sm:w-10 sm:rounded-xl sm:text-lg">
                  <span aria-hidden>&#129302;</span>
                </div>
                <h3 className="font-[family-name:var(--font-display)] text-base font-semibold text-[var(--color-foreground)] sm:text-xl">
                  Download for Android
                </h3>
              </div>
              <div className="mt-3 overflow-hidden rounded-lg border border-[var(--color-border)] bg-[var(--color-elevated)] sm:mt-4 sm:rounded-xl">
                {/* IMAGE: Android install graphic - replace src later */}
                <div className="flex aspect-[16/9] w-full items-center justify-center text-xs text-[var(--color-muted)] sm:text-sm">
                  <span className="rounded-lg border border-dashed border-[var(--color-border)] px-3 py-2 sm:px-4 sm:py-3">
                    Android install guide image
                  </span>
                </div>
              </div>
              <ol className="mt-4 space-y-2.5 text-xs leading-relaxed text-[var(--color-muted)] sm:mt-5 sm:space-y-3 sm:text-sm">
                {[
                  "Open the Google Play Store on your Android device",
                  "Search for \u201cAmar Club\u201d and verify the publisher name",
                  "Tap \u201cInstall\u201d and wait for the 45 MB download",
                  "Open the app, log in or create an account",
                ].map((step, i) => (
                  <li key={i} className="flex gap-2.5 sm:gap-3">
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-md bg-[var(--color-accent-soft)] text-[10px] font-bold text-[var(--color-foreground)] sm:h-6 sm:w-6 sm:rounded-lg sm:text-xs">
                      {i + 1}
                    </span>
                    {step}
                  </li>
                ))}
              </ol>
              <p className="mt-3 rounded-lg border border-[var(--color-border)] bg-[var(--color-elevated)] p-2.5 text-[11px] text-[var(--color-muted)] sm:mt-4 sm:rounded-xl sm:p-3 sm:text-xs">
                <strong className="text-[var(--color-foreground)]">Min:</strong>{" "}
                Android 8.0+, 2 GB RAM, 100 MB storage
              </p>
            </div>
            <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-4 sm:rounded-3xl sm:p-6 lg:p-8">
              <div className="flex items-center gap-2.5 sm:gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[var(--color-accent-soft)] text-base sm:h-10 sm:w-10 sm:rounded-xl sm:text-lg">
                  <span aria-hidden>&#127822;</span>
                </div>
                <h3 className="font-[family-name:var(--font-display)] text-base font-semibold text-[var(--color-foreground)] sm:text-xl">
                  Download for iOS
                </h3>
              </div>
              <div className="mt-3 overflow-hidden rounded-lg border border-[var(--color-border)] bg-[var(--color-elevated)] sm:mt-4 sm:rounded-xl">
                {/* IMAGE: iOS install graphic - replace src later */}
                <div className="flex aspect-[16/9] w-full items-center justify-center text-xs text-[var(--color-muted)] sm:text-sm">
                  <span className="rounded-lg border border-dashed border-[var(--color-border)] px-3 py-2 sm:px-4 sm:py-3">
                    iOS install guide image
                  </span>
                </div>
              </div>
              <ol className="mt-4 space-y-2.5 text-xs leading-relaxed text-[var(--color-muted)] sm:mt-5 sm:space-y-3 sm:text-sm">
                {[
                  "Open the App Store on your iPhone or iPad",
                  "Search for \u201cAmar Club\u201d and check the developer",
                  "Tap \u201cGet\u201d and authenticate with Face ID / Touch ID",
                  "52 MB app installs automatically \u2014 open and sign in",
                ].map((step, i) => (
                  <li key={i} className="flex gap-2.5 sm:gap-3">
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-md bg-[var(--color-accent-soft)] text-[10px] font-bold text-[var(--color-foreground)] sm:h-6 sm:w-6 sm:rounded-lg sm:text-xs">
                      {i + 1}
                    </span>
                    {step}
                  </li>
                ))}
              </ol>
              <p className="mt-3 rounded-lg border border-[var(--color-border)] bg-[var(--color-elevated)] p-2.5 text-[11px] text-[var(--color-muted)] sm:mt-4 sm:rounded-xl sm:p-3 sm:text-xs">
                <strong className="text-[var(--color-foreground)]">Min:</strong>{" "}
                iOS 14.0+, iPhone 8+, 100 MB storage
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Device Requirements */}
      <section id="device-requirements" className="border-y border-[var(--color-border)] bg-[#080914]/70 py-14 sm:py-20">
        <Container>
          <h2 className="text-center font-[family-name:var(--font-display)] text-xl font-semibold tracking-tight text-[var(--color-foreground)] sm:text-3xl">
            Amar Club app device requirements and supported phones
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-center text-base leading-relaxed text-[var(--color-muted)]">
            Make sure your device meets these requirements for the best gaming
            experience. Older devices may run the app with reduced performance.
          </p>
          <div className="mt-8 grid gap-3 sm:mt-10 sm:gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: "\uD83D\uDCF1",
                title: "Android devices",
                items: ["Samsung Galaxy S10+", "Google Pixel 4+", "OnePlus 7+", "Xiaomi, Oppo, Vivo (2020+)", "Any Android 8.0+ device"],
              },
              {
                icon: "\uD83D\uDCF1",
                title: "iOS devices",
                items: ["iPhone 8 and newer", "iPhone SE (2nd gen+)", "iPad Air 3+", "iPad mini 5+", "iOS 14.0 or later"],
              },
              {
                icon: "\u2699\uFE0F",
                title: "Recommended specs",
                items: ["4 GB RAM or more", "Stable Wi-Fi or 4G/5G", "200 MB+ free storage", "Brightness 50%+", "Latest OS version"],
              },
            ].map((block) => (
              <div key={block.title} className="rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-4 sm:rounded-2xl sm:p-6">
                <div className="flex items-center gap-2.5 sm:gap-3">
                  <span className="text-xl sm:text-2xl" aria-hidden>{block.icon}</span>
                  <h3 className="font-[family-name:var(--font-display)] text-sm font-semibold text-[var(--color-foreground)] sm:text-lg">
                    {block.title}
                  </h3>
                </div>
                <ul className="mt-3 space-y-1.5 text-xs text-[var(--color-muted)] sm:mt-4 sm:space-y-2 sm:text-sm">
                  {block.items.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-accent-2)]" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Safety Tips */}
      <section className="py-14 sm:py-20">
        <Container>
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div className="relative overflow-hidden rounded-2xl border border-[var(--color-border)] bg-[var(--color-elevated)]">
              {/* IMAGE: Download safety visual - replace src later */}
              <div className="flex aspect-video w-full items-center justify-center text-sm text-[var(--color-muted)]">
                <span className="rounded-xl border border-dashed border-[var(--color-border)] px-6 py-4">
                  Download safety image
                </span>
              </div>
            </div>
            <div>
              <h2 className="font-[family-name:var(--font-display)] text-xl font-semibold tracking-tight text-[var(--color-foreground)] sm:text-3xl">
                How to download Amar Club safely &mdash; avoid fake apps
              </h2>
              <p className="mt-3 text-base leading-relaxed text-[var(--color-muted)]">
                Fake gaming apps are common. Protect yourself with these
                verification habits every time you download or update.
              </p>
              <ul className="mt-6 space-y-3 text-sm leading-relaxed text-[var(--color-muted)]">
                {[
                  "Only download from Google Play, App Store, or the official Amar Club website",
                  "Check the publisher name matches \u2014 look for Amar Club Entertainment",
                  "Read recent reviews \u2014 legitimate apps have steady, mixed feedback over time",
                  "Never disable security settings to sideload an APK from unknown sources",
                  "Keep automatic updates enabled for the latest security patches",
                  "If a site promises modified or unlimited versions, it is a scam",
                ].map((tip) => (
                  <li key={tip} className="flex gap-3">
                    <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-[var(--color-accent)]" />
                    {tip}
                  </li>
                ))}
              </ul>
              <div className="mt-6">
                <Link
                  className="text-sm font-semibold text-[var(--color-accent-2)] underline-offset-4 hover:underline"
                  href="/blog/amar-club-app-download-guide"
                >
                  Read the full Amar Club download safety guide &rarr;
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* App vs Browser */}
      <section className="border-y border-[var(--color-border)] bg-[var(--color-surface)] py-14 sm:py-20">
        <Container>
          <h2 className="text-center font-[family-name:var(--font-display)] text-xl font-semibold tracking-tight text-[var(--color-foreground)] sm:text-3xl">
            Amar Club app vs browser &mdash; which is better?
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-center text-base leading-relaxed text-[var(--color-muted)]">
            Both options work, but the app offers advantages for regular players.
            Here&apos;s a side-by-side comparison.
          </p>
          <div className="mx-auto mt-10 max-w-3xl overflow-x-auto rounded-2xl border border-[var(--color-border)]">
            <table className="min-w-[420px] w-full text-sm">
              <thead>
                <tr className="border-b border-[var(--color-border)] bg-[var(--color-elevated)]">
                  <th className="px-3 py-3 text-left font-semibold text-[var(--color-foreground)] sm:px-6">Feature</th>
                  <th className="px-3 py-3 text-center font-semibold text-[var(--color-accent)] sm:px-4">App</th>
                  <th className="px-3 py-3 text-center font-semibold text-[var(--color-muted)] sm:px-4">Browser</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[var(--color-border)]">
                {[
                  { f: "Launch speed", a: "Instant", b: "Slower" },
                  { f: "Push notifications", a: "\u2713", b: "Limited" },
                  { f: "Touch optimization", a: "Full", b: "Partial" },
                  { f: "Offline access", a: "Some features", b: "None" },
                  { f: "Auto-updates", a: "Yes", b: "N/A" },
                  { f: "Storage needed", a: "~100 MB", b: "None" },
                  { f: "Security", a: "App-level", b: "Browser-level" },
                  { f: "No download needed", a: "\u2717", b: "\u2713" },
                ].map((row) => (
                  <tr key={row.f} className="bg-[var(--color-surface)]">
                    <td className="px-3 py-3 text-[var(--color-foreground)] sm:px-6">{row.f}</td>
                    <td className="px-3 py-3 text-center text-[var(--color-accent-2)] sm:px-4">{row.a}</td>
                    <td className="px-3 py-3 text-center text-[var(--color-muted)] sm:px-4">{row.b}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mx-auto mt-6 max-w-2xl text-center text-sm text-[var(--color-muted)]">
            For the best experience, we recommend the app. Read the{" "}
            <Link className="font-semibold text-[var(--color-accent-2)] underline-offset-4 hover:underline" href="/app">
              Amar Club app page
            </Link>{" "}
            for a deeper comparison.
          </p>
        </Container>
      </section>

      <FaqSection
        eyebrow="Download FAQ"
        title="Amar Club download FAQ &mdash; common questions answered"
        items={[...downloadFaqs]}
      />

      {/* Related Guides */}
      <section className="py-14 sm:py-20">
        <Container>
          <h2 className="text-center font-[family-name:var(--font-display)] text-xl font-semibold tracking-tight text-[var(--color-foreground)] sm:text-3xl">
            Related Amar Club guides
          </h2>
          <div className="mt-6 grid gap-3 grid-cols-2 sm:mt-8 sm:gap-4 lg:grid-cols-4">
            {[
              { href: "/app", title: "Amar Club app", desc: "Features & mobile tips" },
              { href: "/login", title: "Amar Club login", desc: "Safe sign-in guide" },
              { href: "/blog/amar-club-mobile-guide", title: "Mobile guide", desc: "Phone gaming tips" },
              { href: "/blog/amar-club-app-download-guide", title: "Download guide", desc: "In-depth install article" },
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

      {/* Final summary content */}
      <section className="border-t border-[var(--color-border)] py-14 sm:py-20">
        <Container>
          <div className="mx-auto max-w-3xl space-y-6 text-base leading-relaxed text-[var(--color-muted)]">
            <h2 className="font-[family-name:var(--font-display)] text-xl font-semibold tracking-tight text-[var(--color-foreground)] sm:text-3xl">
              Final thoughts on the Amar Club app download
            </h2>
            <p>
              The Amar Club download process is straightforward once you know where
              to look and what to verify. Whether you search for &ldquo;Amar Club
              APK download&rdquo; on Android or &ldquo;Amar Club app download&rdquo;
              on iOS, the steps are simple: find the official source, check the
              publisher, tap install, and log in. The entire process takes less than
              five minutes from start to playing your first game.
            </p>
            <p>
              For our Ethiopian readers and players across East Africa, the Amar Club
              app is built to work reliably on the phones and networks you actually
              use every day. The small file size, low RAM requirements, and efficient
              data usage mean you do not need expensive hardware or unlimited data
              plans to enjoy a smooth gaming experience.
            </p>
            <p>
              Remember: only download from official sources, keep your app updated,
              and always gamble responsibly. If you have questions about the Amar
              Club app download that are not answered on this page, check our{" "}
              <Link className="font-semibold text-[var(--color-accent-2)] underline-offset-4 hover:underline" href="/faq">
                FAQ section
              </Link>{" "}
              or read the{" "}
              <Link className="font-semibold text-[var(--color-accent-2)] underline-offset-4 hover:underline" href="/blog/amar-club-app-download-guide">
                detailed download guide
              </Link>{" "}
              on our blog.
            </p>
          </div>
        </Container>
      </section>

      <CtaSection
        title="Ready to explore Amar Club on mobile?"
        description="Download the app, check features, or read the FAQ \u2014 everything Ethiopian players need to start gaming confidently."
        primaryHref="/features"
        primaryLabel="Explore Amar Club features"
        secondaryHref="/faq"
        secondaryLabel="Read FAQ"
      />
    </>
  );
}
