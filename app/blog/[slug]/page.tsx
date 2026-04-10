import { notFound } from "next/navigation";
import { BlogArticle } from "@/components/blog/BlogArticle";
import { Container } from "@/components/ui/Container";
import { buildArticleMetadata } from "@/lib/metadata";
import { BlogPostingJsonLd, BreadcrumbJsonLd } from "@/lib/schema";
import { getAllSlugs, getPostBySlug } from "@/lib/blog";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return { title: "Not found" };
  return buildArticleMetadata({
    title: post.title,
    description: post.description,
    path: `/blog/${post.slug}`,
    publishedTime: post.datePublished,
    modifiedTime: post.dateModified,
  });
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  return (
    <>
      <BlogPostingJsonLd post={post} />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Blog", path: "/blog" },
          { name: post.title, path: `/blog/${post.slug}` },
        ]}
      />
      <section className="py-14 sm:py-16">
        <Container>
          <BlogArticle
            post={post}
            crumbs={[
              { label: "Home", href: "/" },
              { label: "Blog", href: "/blog" },
              { label: post.title },
            ]}
          />
        </Container>
      </section>
    </>
  );
}
