// app/blog/[slug]/page.tsx
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { POSTS, getPostBySlug } from "../posts";
import BlogArticleShell from "@/components/BlogArticleShell";

// ---- Set your production domain here ----
const SITE_URL = "https://www.agenxus.com";
const BRAND = "Agenxus";

export async function generateStaticParams() {
  return POSTS.map((p) => ({ slug: p.slug }));
}

// Use absolute URLs for OG/Twitter so no metadataBase is required.
export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const post = getPostBySlug(params.slug);
  if (!post) return {};

  const url = `${SITE_URL}/blog/${post.slug}`;
  const imageAbs = post.hero ? `${SITE_URL}${post.hero}` : undefined;

  return {
    title: `${post.title} | ${BRAND}`,
    description: post.description,
    alternates: { canonical: url },
    openGraph: {
      title: post.title,
      description: post.description,
      url,
      siteName: BRAND,
      type: "article",
      images: imageAbs ? [{ url: imageAbs }] : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: imageAbs ? [imageAbs] : undefined,
    },
  };
}

export const revalidate = 60 * 60 * 6; // 6 hours

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug);
  if (!post) return notFound();

  const published = new Date(post.date);
  const iso = published.toISOString();

  // JSON-LD (absolute URLs)
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    datePublished: iso,
    dateModified: iso,
    author: [{ "@type": "Person", name: post.author }],
    mainEntityOfPage: `${SITE_URL}/blog/${post.slug}`,
    image: post.hero ? `${SITE_URL}${post.hero}` : undefined,
    publisher: {
      "@type": "Organization",
      name: BRAND,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/images/logo.png`,
      },
    },
  };

  // Prev / Next (based on POSTS order)
  const idx = POSTS.findIndex((p) => p.slug === post.slug);
  const prev =
    idx > 0
      ? { href: `/blog/${POSTS[idx - 1].slug}`, title: POSTS[idx - 1].title }
      : undefined;
  const next =
    idx < POSTS.length - 1
      ? { href: `/blog/${POSTS[idx + 1].slug}`, title: POSTS[idx + 1].title }
      : undefined;

  return (
    <div className="relative">
      {/* Background orbs to match site style */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute top-24 left-12 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-24 right-12 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl" />
      </div>

      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Article shell (breadcrumbs, summary, TOC, hero, actions, prev/next) */}
      <BlogArticleShell
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Blog", href: "/blog" },
          { label: post.title },
        ]}
        meta={{
          title: post.title,
          description: post.description,
          author: post.author,
          dateISO: iso,
          readingTime: post.readingTime,
          tags: post.tags,
        }}
        hero={post.hero}
        summary={
          // Optional: per-post summary (fallback shown here; customize per post if desired)
          "Dealerships win when they answer instantly, qualify leads, and book appointments 24/7. This guide shows how voice, chat, and workflow automation plug into CRM, inventory, and scheduling to lift conversions."
        }
        prevNext={{ prev, next }}
        enableShare
      >
        {post.render()}
      </BlogArticleShell>
    </div>
  );
}
