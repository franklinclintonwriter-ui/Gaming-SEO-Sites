import { BlogCard } from "@/components/blog/BlogCard";
import { CtaSection } from "@/components/sections/CtaSection";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { Container } from "@/components/ui/Container";
import { buildMetadata } from "@/lib/metadata";
import { BreadcrumbJsonLd } from "@/lib/schema";
import { getAllPosts } from "@/lib/blog";

export const metadata = buildMetadata({
  title: "Amar Club blog — in-depth gaming guides, tips, and walkthroughs",
  description:
    "Read Amar Club blog articles: step-by-step guides on login, app download, mobile play, bonuses, features, and beginner tips — all written in plain English.",
  path: "/blog",
});

export default function BlogIndexPage() {
  const posts = getAllPosts();

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Blog", path: "/blog" },
        ]}
      />
      <section className="py-14 sm:py-16">
        <Container>
          <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Blog" }]} />
          <h1 className="mt-6 font-[family-name:var(--font-display)] text-2xl font-semibold tracking-tight text-[var(--color-foreground)] sm:text-3xl lg:text-4xl">
            Amar Club blog — in-depth gaming guides and tips
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-[var(--color-muted)]">
            Practical reads on Amar Club login habits, safe app downloads, playing
            on your phone, and understanding bonuses—each piece stands on its own
            and links to related guides when you want to dig deeper.
          </p>
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {posts.map((p) => (
              <BlogCard
                key={p.slug}
                href={`/blog/${p.slug}`}
                title={p.title}
                excerpt={p.description}
                date={p.datePublished}
              />
            ))}
          </div>
        </Container>
      </section>
      <CtaSection
        title="Want quick answers first?"
        description="Try the FAQ for short replies, or start with how to play if you prefer a simple path through the basics."
        primaryHref="/faq"
        primaryLabel="Open FAQ"
        secondaryHref="/how-to-play"
        secondaryLabel="How to play"
      />
    </>
  );
}
