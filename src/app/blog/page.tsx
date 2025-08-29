// app/blog/page.tsx
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { POSTS } from "./posts";

const SITE_URL = "https://www.agenxus.com";
const BRAND = "Agenxus";

export const metadata: Metadata = {
  title: `Blog | ${BRAND}`,
  description:
    "Insights on AI voice agents, chatbots, video agents, and process automation—built for real business impact.",
  alternates: { canonical: `${SITE_URL}/blog` },
  openGraph: {
    title: `Blog | ${BRAND}`,
    description:
      "Insights on AI voice agents, chatbots, video agents, and process automation—built for real business impact.",
    url: `${SITE_URL}/blog`,
    siteName: BRAND,
  },
  twitter: {
    card: "summary_large_image",
    title: `Blog | ${BRAND}`,
    description:
      "Insights on AI voice agents, chatbots, video agents, and process automation—built for real business impact.",
  },
};

export const revalidate = 60 * 60 * 6; // 6 hours

export default function BlogIndexPage() {
  const posts = [...POSTS].sort(
    (a, b) => +new Date(b.date) - +new Date(a.date)
  );

  return (
    <div className="relative">
      {/* Soft gradient orbs to match site aesthetic */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute top-24 left-12 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-24 right-12 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl" />
      </div>

      <section className="max-w-6xl mx-auto px-4 py-16">
        {/* Header card */}
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 mb-10">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Blog
          </h1>
          <p className="text-gray-300 text-lg leading-relaxed">
            Deep dives, playbooks, and real-world lessons on AI voice, chat,
            video, and workflow automation. Built for operators who want
            results.
          </p>
        </div>

        {/* Posts grid */}
        <div className="grid gap-8 md:grid-cols-2">
          {posts.map((post) => {
            const published = new Date(post.date);
            return (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group relative overflow-hidden bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:bg-white/10 transition-all duration-300"
              >
                {/* Hero */}
                {post.hero ? (
                  <div className="relative h-56 w-full overflow-hidden border-b border-white/10">
                    <Image
                      src={post.hero}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(min-width: 1024px) 600px, 100vw"
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  </div>
                ) : null}

                {/* Card content */}
                <div className="p-6">
                  <div className="flex flex-wrap items-center gap-3 text-xs text-gray-400 mb-3">
                    <span className="inline-flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400/70" />
                      {post.author}
                    </span>
                    <span>•</span>
                    <time dateTime={post.date}>
                      {published.toLocaleDateString(undefined, {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      })}
                    </time>
                    {post.readingTime ? (
                      <>
                        <span>•</span>
                        <span>{post.readingTime}</span>
                      </>
                    ) : null}
                    {post.tags?.length ? (
                      <>
                        <span>•</span>
                        <div className="flex flex-wrap gap-1">
                          {post.tags.slice(0, 3).map((t) => (
                            <span
                              key={t}
                              className="px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-gray-300"
                            >
                              #{t}
                            </span>
                          ))}
                          {post.tags.length > 3 && (
                            <span className="text-gray-500">
                              +{post.tags.length - 3}
                            </span>
                          )}
                        </div>
                      </>
                    ) : null}
                  </div>

                  <h2 className="text-xl md:text-2xl font-bold text-white mb-2 leading-snug">
                    {post.title}
                  </h2>
                  <p className="text-gray-300 line-clamp-3">
                    {post.description}
                  </p>

                  <div className="mt-5 inline-flex items-center gap-2 text-cyan-400 group-hover:text-cyan-300 transition-colors">
                    <span className="text-sm font-medium">Read article</span>
                    <svg
                      className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M10.293 3.293a1 1 0 011.414 0l5 5a1 1 0 01-1.414 1.414L12 6.414V17a1 1 0 11-2 0V6.414L5.707 9.707A1 1 0 114.293 8.293l5-5z" />
                    </svg>
                  </div>
                </div>

                {/* subtle hover glow */}
                <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 blur-lg rounded-2xl" />
                </div>
              </Link>
            );
          })}
        </div>
      </section>
    </div>
  );
}
