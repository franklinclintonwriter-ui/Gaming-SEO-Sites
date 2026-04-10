import Link from "next/link";
import type { BlogPost } from "@/lib/blog";
import { Breadcrumb, type Crumb } from "@/components/ui/Breadcrumb";
import { CtaSection } from "@/components/sections/CtaSection";

export function BlogArticle({
  post,
  crumbs,
}: {
  post: BlogPost;
  crumbs: Crumb[];
}) {
  return (
    <article>
      <header className="space-y-4">
        <Breadcrumb items={crumbs} />
        <p className="text-sm text-[var(--color-muted)]">
          <time dateTime={post.datePublished}>Published {post.datePublished}</time>
          {post.dateModified !== post.datePublished ? (
            <>
              {" "}
              ·{" "}
              <span>Updated {post.dateModified}</span>
            </>
          ) : null}
        </p>
        <h1 className="font-[family-name:var(--font-display)] text-2xl font-semibold tracking-tight text-[var(--color-foreground)] sm:text-3xl lg:text-[2.6rem] lg:leading-tight">
          {post.title}
        </h1>
        <p className="text-lg leading-relaxed text-[var(--color-muted)]">
          {post.description}
        </p>
      </header>

      <div className="prose-article mt-10 space-y-10">
        {post.sections.map((section) => (
          <section key={section.heading} className="space-y-4">
            <h2 className="font-[family-name:var(--font-display)] text-xl font-semibold tracking-tight text-[var(--color-foreground)] sm:text-2xl">
              {section.heading}
            </h2>
            {section.paragraphs.map((p, i) => (
              <p
                key={i}
                className="text-base leading-relaxed text-[var(--color-muted)] sm:text-[1.05rem]"
              >
                {p.split(/(\[[^\]]+\]\([^)]+\))/g).map((part, j) => {
                  const m = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
                  if (m) {
                    return (
                      <Link
                        key={j}
                        href={m[2]}
                        className="font-semibold text-[var(--color-accent-2)] underline-offset-4 hover:underline"
                      >
                        {m[1]}
                      </Link>
                    );
                  }
                  return <span key={j}>{part}</span>;
                })}
              </p>
            ))}
          </section>
        ))}
      </div>

      <div className="mt-12 rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 text-sm leading-relaxed text-[var(--color-muted)]">
        <p>
          Independent editorial note: this article is not affiliated with any
          operator. For official policies and account support, use verified Amar
          Club channels associated with your region.
        </p>
      </div>

      <CtaSection
        title="Explore more Amar Club guides"
        description="Continue with feature overviews, mobile tips, and FAQs—built for fast reading on phones."
        primaryHref="/blog"
        primaryLabel="Back to blog"
        secondaryHref="/faq"
        secondaryLabel="Open FAQ"
      />
    </article>
  );
}
