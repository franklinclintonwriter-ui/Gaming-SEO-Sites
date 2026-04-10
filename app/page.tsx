import Link from "next/link";
import { BlogCard } from "@/components/blog/BlogCard";
import { CtaSection } from "@/components/sections/CtaSection";
import { FaqSection } from "@/components/sections/FaqSection";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { FeatureCard } from "@/components/ui/FeatureCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { homeFaqPreview } from "@/lib/faq-content";
import { buildMetadata } from "@/lib/metadata";
import { BreadcrumbJsonLd } from "@/lib/schema";
import { getAllPosts } from "@/lib/blog";

export const metadata = buildMetadata({
  title: "Amar Club — online gaming guides for app, login, bonus & mobile play",
  description:
    "Your independent Amar Club resource: step-by-step guides on the Amar Club app, login, download, bonus offers, mobile tips, and FAQs — all in plain English.",
  path: "/",
});

export default function HomePage() {
  const latest = getAllPosts().slice(0, 3);

  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "Home", path: "/" }]} />
      <section className="hero-grid relative overflow-hidden border-b border-[var(--color-border)]">
        <Container className="relative py-16 sm:py-20 lg:py-24">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="space-y-6">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[var(--color-accent-2)]">
                Amar Club · online gaming guides
              </p>
              <h1 className="font-[family-name:var(--font-display)] text-2xl font-semibold leading-tight tracking-tight text-[var(--color-foreground)] sm:text-4xl lg:text-[3.25rem]">
                Amar Club online gaming{" "}
                <span className="gradient-text">guides</span> — play smarter, not harder
              </h1>
              <p className="max-w-xl text-base leading-relaxed text-[var(--color-muted)] sm:text-lg">
                Straightforward explainers on Amar Club app use, sign-in basics,
                playing on your phone, and how bonus wording usually works—written
                for real people first, in plain international English.
              </p>
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                <ButtonLink href="/how-to-play">Read how to play</ButtonLink>
                <ButtonLink href="/features" variant="secondary">
                  Explore Amar Club features
                </ButtonLink>
              </div>
              <p className="text-xs leading-relaxed text-[var(--color-muted)]">
                Editorial site: no accounts, no payments, no downloads hosted
                here—only structured guides and responsible-play reminders.
              </p>
            </div>

            <div className="relative mx-auto w-full max-w-md overflow-hidden">
              <div
                aria-hidden
                className="absolute inset-0 -m-6 rounded-[2rem] bg-gradient-to-br from-[rgba(250,204,21,0.2)] via-transparent to-[rgba(34,197,94,0.15)] blur-2xl"
              />
              <div className="relative overflow-hidden rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-5 shadow-[var(--shadow-card)] sm:rounded-[1.75rem] sm:p-8">
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <p className="text-[10px] font-medium text-[var(--color-muted)] sm:text-xs">
                      Amar Club platform snapshot
                    </p>
                    <p className="mt-0.5 font-[family-name:var(--font-display)] text-sm font-semibold text-[var(--color-foreground)] sm:mt-1 sm:text-lg">
                      Fast · focused · mobile-ready
                    </p>
                  </div>
                  <div className="h-10 w-10 shrink-0 rounded-xl bg-[var(--color-accent-soft)] ring-1 ring-white/10 sm:h-12 sm:w-12 sm:rounded-2xl" />
                </div>
                <div className="mt-5 space-y-2 sm:mt-8 sm:space-y-3">
                  {[
                    "Step-by-step guides for common questions",
                    "Readable on small screens and slow connections",
                    "Each page has a clear purpose",
                  ].map((t) => (
                    <div
                      key={t}
                      className="flex items-start gap-2.5 rounded-lg border border-white/5 bg-white/[0.03] px-3 py-2.5 text-xs text-[var(--color-muted)] sm:gap-3 sm:rounded-xl sm:px-4 sm:py-3 sm:text-sm"
                    >
                      <span className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-accent-2)] sm:h-2 sm:w-2" />
                      <span>{t}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-5 rounded-xl border border-dashed border-white/10 p-3 text-[11px] text-[var(--color-muted)] sm:mt-8 sm:rounded-2xl sm:p-4 sm:text-xs">
                  Quick to load — simple graphics and readable type for everyday
                  phones and data plans.
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container>
          <SectionHeading
            eyebrow="Why readers stay"
            title="Amar Club guides that answer real questions"
            description="Every section here answers a different kind of question: using the app, installing safely, understanding bonuses, or getting comfortable on mobile. You get one honest topic per page, not the same paragraph with a new title."
          />
          <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
            {[
              {
                t: "Mobile-first guides",
                d: "Thumb-friendly structure, short paragraphs, strong headings.",
              },
              {
                t: "Fast access literacy",
                d: "Login and session patterns explained clearly.",
              },
              {
                t: "Feature clarity",
                d: "Scan Amar Club platform ideas quickly.",
              },
              {
                t: "Connected guides",
                d: "Articles and FAQs link to each other.",
              },
            ].map((x) => (
              <div
                key={x.t}
                className="rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-3.5 shadow-[var(--shadow-soft)] sm:rounded-2xl sm:p-6"
              >
                <h3 className="font-[family-name:var(--font-display)] text-sm font-semibold text-[var(--color-foreground)] sm:text-lg">
                  {x.t}
                </h3>
                <p className="mt-1 text-xs leading-relaxed text-[var(--color-muted)] sm:mt-2 sm:text-sm">
                  {x.d}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-y border-[var(--color-border)] bg-[#080914]/80 py-16 sm:py-20">
        <Container>
          <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
            <SectionHeading
              eyebrow="About Amar Club"
              title="What is Amar Club — and why this guide site exists"
              description="We use Amar Club as the brand anchor for a modern online casino and gaming-style experience—explained through independent educational pages."
            />
            <div className="space-y-4 text-base leading-relaxed text-[var(--color-muted)]">
              <p>
                People look up Amar Club for different reasons—some need app or
                download help, others want sign-in peace of mind, and many want a
                calm read on how promotions are worded. We split those needs into
                separate guides so you land on the right explanation, not a wall of
                repeated text.
              </p>
              <p>
                We use plain international English and a mobile-first layout so
                the site stays readable on everyday phones and typical data
                connections—wherever you are, always follow the gambling laws that
                apply to you.
              </p>
              <p>
                If you are comparing Amar Club vs other brands, use these pages
                as a vocabulary primer—then confirm anything financial or
                account-related with official operator sources.
              </p>
              <p>
                Continue to the{" "}
                <Link
                  className="font-semibold text-[var(--color-accent-2)] underline-offset-4 hover:underline"
                  href="/about"
                >
                  About Amar Club
                </Link>{" "}
                page for editorial standards, or jump to{" "}
                <Link
                  className="font-semibold text-[var(--color-accent-2)] underline-offset-4 hover:underline"
                  href="/features"
                >
                  Amar Club features
                </Link>{" "}
                for a scannable breakdown.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container>
          <SectionHeading
            eyebrow="Amar Club features"
            title="Amar Club platform features explained simply"
            description="Not buzzwords—practical benefits like readable navigation, consistent mobile layouts, and transparent promotional literacy."
            align="center"
          />
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <FeatureCard
              icon={<span aria-hidden>◎</span>}
              title="Calm information design"
            >
              Clear sectioning so you can learn Amar Club platform vocabulary
              without walls of noisy text blocks.
            </FeatureCard>
            <FeatureCard
              icon={<span aria-hidden>◇</span>}
              title="Guides that respect your time"
            >
              Short routes to Amar Club download and Amar Club app topics—plus
              deep posts when you want more nuance.
            </FeatureCard>
            <FeatureCard
              icon={<span aria-hidden>✦</span>}
              title="Clear writing, obvious structure"
            >
              Headings and links are there to help you skim and jump between
              topics—like a well-organized help site, not a wall of filler.
            </FeatureCard>
            <FeatureCard
              icon={<span aria-hidden>☆</span>}
              title="Mobile ergonomics"
            >
              Large tap targets, stable spacing at 320px width, and readable line
              length for Amar Club mobile sessions.
            </FeatureCard>
            <FeatureCard
              icon={<span aria-hidden>→</span>}
              title="Bonus literacy, not hype"
            >
              We discuss Amar Club bonus topics as informational reading—always
              steering you back to official terms for specifics.
            </FeatureCard>
            <FeatureCard
              icon={<span aria-hidden>✓</span>}
              title="Trust cues baked into layout"
            >
              Premium dark theme, disciplined gradients, and no fake dashboards
              pretending to be “live systems.”
            </FeatureCard>
          </div>
        </Container>
      </section>

      <section className="border-y border-[var(--color-border)] bg-[var(--color-surface)] py-16 sm:py-20">
        <Container>
          <SectionHeading
            eyebrow="How it works"
            title="How to get started with Amar Club — 4 simple steps"
            description="Four steps we recommend for anyone evaluating Amar Club online gaming content."
            align="center"
          />
          <ol className="mx-auto grid max-w-4xl gap-3 sm:gap-4">
            {[
              {
                s: "Pick your intent",
                b: "Open the guide that matches what you need — app, login, or bonus.",
              },
              {
                s: "Read it once calmly",
                b: "Skim headings, then return to details. Reduces mistaken clicks.",
              },
              {
                s: "Cross-check official sources",
                b: "Use operator help for account-specific answers.",
              },
              {
                s: "Bookmark what you reuse",
                b: "Save the FAQ, mobile guide, or features page.",
              },
            ].map((step, i) => (
              <li
                key={step.s}
                className="flex gap-3 rounded-xl border border-[var(--color-border)] bg-[#0f111a] p-3.5 sm:gap-4 sm:rounded-2xl sm:p-5"
              >
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[var(--color-accent-soft)] font-[family-name:var(--font-display)] text-xs font-bold text-[var(--color-foreground)] sm:h-10 sm:w-10 sm:rounded-xl sm:text-sm">
                  {i + 1}
                </div>
                <div className="min-w-0">
                  <h3 className="font-[family-name:var(--font-display)] text-sm font-semibold text-[var(--color-foreground)] sm:text-lg">
                    {step.s}
                  </h3>
                  <p className="mt-0.5 text-xs leading-relaxed text-[var(--color-muted)] sm:mt-1 sm:text-sm">
                    {step.b}
                  </p>
                </div>
              </li>
            ))}
          </ol>
          <div className="mt-10 flex flex-col items-start justify-center gap-3 sm:flex-row sm:items-center">
            <ButtonLink href="/how-to-play">Open the how-to-play guide</ButtonLink>
            <ButtonLink href="/login" variant="secondary">
              Read the Amar Club login guide
            </ButtonLink>
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container>
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <SectionHeading
                eyebrow="Amar Club mobile"
                title="Amar Club mobile experience — built for phone-first players"
                description="Amar Club mobile traffic deserves readable typography, stable cards, and navigation that does not punish small screens."
              />
              <ul className="mt-6 space-y-3 text-sm leading-relaxed text-[var(--color-muted)]">
                <li className="flex gap-3">
                  <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-[var(--color-accent-2)]" />
                  Explore the{" "}
                  <Link
                    className="font-semibold text-[var(--color-foreground)] underline-offset-4 hover:underline"
                    href="/app"
                  >
                    Amar Club app
                  </Link>{" "}
                  page for product-style notes on app access.
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-[var(--color-accent-2)]" />
                  Pair with{" "}
                  <Link
                    className="font-semibold text-[var(--color-foreground)] underline-offset-4 hover:underline"
                    href="/download"
                  >
                    Amar Club download
                  </Link>{" "}
                  guidance when you want install hygiene tips.
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-[var(--color-accent-2)]" />
                  Go deeper with the{" "}
                  <Link
                    className="font-semibold text-[var(--color-foreground)] underline-offset-4 hover:underline"
                    href="/blog/amar-club-mobile-guide"
                  >
                    Amar Club mobile guide
                  </Link>{" "}
                  article.
                </li>
              </ul>
            </div>
            <div className="rounded-2xl border border-[var(--color-border)] bg-gradient-to-br from-[#141827] to-[#0a0c14] p-5 shadow-[var(--shadow-card)] sm:rounded-3xl sm:p-8">
              <h3 className="font-[family-name:var(--font-display)] text-base font-semibold text-[var(--color-foreground)] sm:text-xl">
                Practical mobile checklist
              </h3>
              <ol className="mt-3 space-y-2 text-xs text-[var(--color-muted)] sm:mt-4 sm:space-y-3 sm:text-sm">
                <li>1. Stabilize brightness and font scaling.</li>
                <li>2. Prefer official apps and verified listings.</li>
                <li>3. Keep sessions short — fatigue drives mistakes.</li>
                <li>4. Use FAQs for quick topic pivots.</li>
              </ol>
              <div className="mt-4 sm:mt-6">
                <ButtonLink href="/faq">View Amar Club FAQ</ButtonLink>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-y border-[var(--color-border)] bg-[#080914]/70 py-16 sm:py-20">
        <Container>
          <SectionHeading
            eyebrow="Amar Club bonus"
            title="Amar Club bonus offers — understand before you claim"
            description="We discuss Amar Club bonus topics as education: eligibility thinking, time windows, and why headlines are not contracts."
          />
          <div className="grid gap-3 sm:gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-4 sm:rounded-2xl sm:p-6">
              <h3 className="font-[family-name:var(--font-display)] text-sm font-semibold text-[var(--color-foreground)] sm:text-lg">
                Read terms first
              </h3>
              <p className="mt-1 text-xs leading-relaxed text-[var(--color-muted)] sm:mt-2 sm:text-sm">
                Start with official rules — not forum rumors.
              </p>
            </div>
            <div className="rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-4 sm:rounded-2xl sm:p-6">
              <h3 className="font-[family-name:var(--font-display)] text-sm font-semibold text-[var(--color-foreground)] sm:text-lg">
                Compare constraints
              </h3>
              <p className="mt-1 text-xs leading-relaxed text-[var(--color-muted)] sm:mt-2 sm:text-sm">
                A smaller offer with transparent rules can beat noisy headlines.
              </p>
            </div>
            <div className="rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-4 sm:col-span-2 sm:rounded-2xl sm:p-6 lg:col-span-1">
              <h3 className="font-[family-name:var(--font-display)] text-sm font-semibold text-[var(--color-foreground)] sm:text-lg">
                Go deeper responsibly
              </h3>
              <p className="mt-1 text-xs leading-relaxed text-[var(--color-muted)] sm:mt-2 sm:text-sm">
                Read the bonus page and blog guide for calmer detail.
              </p>
              <div className="mt-2.5 flex flex-col gap-1.5 sm:mt-4 sm:gap-2">
                <Link
                  className="text-xs font-semibold text-[var(--color-accent-2)] underline-offset-4 hover:underline sm:text-sm"
                  href="/bonus"
                >
                  Amar Club bonus info
                </Link>
                <Link
                  className="text-xs font-semibold text-[var(--color-accent-2)] underline-offset-4 hover:underline sm:text-sm"
                  href="/blog/amar-club-bonus-guide"
                >
                  Bonus guide (blog)
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <FaqSection
        title="Amar Club FAQ preview"
        description="Short answers with a premium tone—tap through to the full FAQ for depth."
        items={homeFaqPreview}
        ctaHref="/faq"
        ctaLabel="Read the full Amar Club FAQ"
      />

      <section className="py-16 sm:py-20">
        <Container>
          <SectionHeading
            eyebrow="Amar Club guide"
            title="Latest Amar Club articles and gaming guides"
            description="In-depth pieces you can finish in one sitting—each one links to related guides when you want to go further."
          />
          <div className="grid gap-4 md:grid-cols-3">
            {latest.map((p) => (
              <BlogCard
                key={p.slug}
                href={`/blog/${p.slug}`}
                title={p.title}
                excerpt={p.description}
                date={p.datePublished}
              />
            ))}
          </div>
          <div className="mt-8">
            <ButtonLink href="/blog" variant="secondary">
              View the blog index
            </ButtonLink>
          </div>
        </Container>
      </section>

      <CtaSection
        title="Ready to explore Amar Club online, calmly?"
        description="Start with how to play, then branch into app, download, and bonus literacy pages. Every route is written to be useful on a phone, fast on LTE, and honest about what we can—and cannot—provide."
        primaryHref="/how-to-play"
        primaryLabel="Begin with how to play"
        secondaryHref="/blog"
        secondaryLabel="Browse guides"
      />
    </>
  );
}
