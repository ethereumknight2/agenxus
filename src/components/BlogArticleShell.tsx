// components/BlogArticleShell.tsx
"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

type Crumb = { label: string; href?: string };
type Meta = {
  title: string;
  description?: string;
  author?: string;
  dateISO?: string;
  readingTime?: string;
  tags?: string[];
};

type PrevNext = {
  prev?: { href: string; title: string };
  next?: { href: string; title: string };
};

type TocItem = { id: string; text: string; level: "h2" | "h3" };

type Props = {
  breadcrumbs: Crumb[];
  meta: Meta;
  summary?: string;
  hero?: string; // e.g. "/images/blog/hero.jpg"
  children: React.ReactNode;
  enableShare?: boolean;
  prevNext?: PrevNext;
};

export default function BlogArticleShell({
  breadcrumbs,
  meta,
  summary,
  hero,
  children,
  enableShare = true,
  prevNext,
}: Props) {
  const contentRef = useRef<HTMLDivElement | null>(null);

  // UI state
  const [tocOpen, setTocOpen] = useState(true);
  const [summaryOpen, setSummaryOpen] = useState(!!summary);
  const [activeId, setActiveId] = useState<string | null>(null);
  const [progress, setProgress] = useState(0);

  // Table of Contents state
  const [toc, setToc] = useState<TocItem[]>([]);

  // Build/refresh TOC after mount and whenever children change
  useEffect(() => {
    if (!contentRef.current) return;

    const buildToc = () => {
      const root = contentRef.current!;
      const nodes = Array.from(
        root.querySelectorAll<HTMLHeadingElement>("h2, h3")
      );

      const items: TocItem[] = nodes.map((n) => {
        if (!n.id) {
          const base =
            (n.textContent ?? "")
              .toLowerCase()
              .trim()
              .replace(/[^\w\s-]/g, "")
              .replace(/\s+/g, "-") || "section";
          let candidate = base;
          let i = 1;
          while (document.getElementById(candidate))
            candidate = `${base}-${i++}`;
          n.id = candidate;
        }
        const level = n.tagName.toLowerCase() as "h2" | "h3";
        return { id: n.id, text: n.textContent || "", level };
      });

      setToc(items);
    };

    const raf = requestAnimationFrame(buildToc);

    // MutationObserver: rebuild TOC if headings change after hydration (MDX/CMS, async)
    const mo = new MutationObserver(() => {
      // Debounce via rAF to avoid thrashing
      requestAnimationFrame(buildToc);
    });
    mo.observe(contentRef.current, {
      childList: true,
      subtree: true,
      characterData: true,
    });

    return () => {
      cancelAnimationFrame(raf);
      mo.disconnect();
    };
  }, [children]);

  // Scroll spy for active heading
  useEffect(() => {
    if (!contentRef.current || toc.length === 0) return;

    const headings = Array.from(
      contentRef.current.querySelectorAll<HTMLElement>("h2, h3")
    );

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) =>
            a.boundingClientRect.top > b.boundingClientRect.top ? 1 : -1
          );
        const target = visible[0]?.target as HTMLElement | undefined;
        if (target?.id) setActiveId(target.id);
      },
      // rootMargin pushes the "active" point down the viewport for nicer highlighting
      { rootMargin: "0px 0px -70% 0px", threshold: [0, 1] }
    );

    headings.forEach((h) => observer.observe(h));
    return () => observer.disconnect();
  }, [toc.length]);

  // Reading progress across the article
  useEffect(() => {
    const onScroll = () => {
      const el = contentRef.current;
      if (!el) return;

      // Document-based measurement that works even if the article is taller than the viewport
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const articleTop = el.getBoundingClientRect().top + window.scrollY;
      const articleHeight = el.scrollHeight;
      const max = Math.max(articleTop + articleHeight - window.innerHeight, 1);
      const scrolled = Math.min(
        Math.max(window.scrollY - articleTop, 0),
        max - articleTop
      );

      // Fallback to document height if article measurements get funky
      const pct =
        articleHeight > 0
          ? (scrolled / (articleHeight - window.innerHeight)) * 100
          : (window.scrollY / Math.max(docHeight, 1)) * 100;

      setProgress(Number.isFinite(pct) ? Math.max(0, Math.min(pct, 100)) : 0);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  // Keyboard navigation between headings (J/K)
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const tag = (e.target as HTMLElement)?.tagName;
      if (tag === "INPUT" || tag === "TEXTAREA") return;
      if (!contentRef.current || toc.length === 0) return;

      const key = e.key.toLowerCase();
      if (key !== "j" && key !== "k") return;

      const ids = toc.map((t) => t.id);
      const idx = activeId ? ids.indexOf(activeId) : -1;
      const next =
        key === "j" ? Math.min(idx + 1, ids.length - 1) : Math.max(idx - 1, 0);
      const el = document.getElementById(ids[next]);
      el?.scrollIntoView({ behavior: "smooth", block: "start" });
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [toc, activeId]);

  const onCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
    } catch {
      // noop
    }
  };

  const onShare = async () => {
    if (!enableShare) return;
    if (navigator.share) {
      try {
        await navigator.share({
          title: meta.title,
          text: meta.description,
          url: window.location.href,
        });
      } catch {
        // noop
      }
    } else {
      await onCopyLink();
    }
  };

  const onBackToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <div className="relative">
      {/* Top reading progress bar */}
      <div
        className="fixed left-0 top-0 h-1 bg-cyan-400/80 z-40 transition-[width]"
        style={{ width: `${progress}%` }}
      />

      {/* Background aesthetic (to match your site) */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute top-24 left-12 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-24 right-12 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto px-4 py-8 md:py-12">
        {/* Breadcrumbs */}
        <nav className="sticky top-2 z-30 mb-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl px-3 py-2 text-sm text-gray-300">
          <ol className="flex flex-wrap items-center gap-2">
            {breadcrumbs.map((c, i) => (
              <li key={`${c.label}-${i}`} className="flex items-center gap-2">
                {c.href ? (
                  <Link
                    href={c.href}
                    className="hover:text-white transition-colors"
                  >
                    {c.label}
                  </Link>
                ) : (
                  <span className="text-gray-400">{c.label}</span>
                )}
                {i < breadcrumbs.length - 1 && (
                  <span className="opacity-50">/</span>
                )}
              </li>
            ))}
          </ol>
        </nav>

        {/* Header card */}
        <header className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8 mb-6">
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-3">
            {meta.title}
          </h1>
          {meta.description && (
            <p className="text-gray-300 text-base md:text-lg leading-relaxed">
              {meta.description}
            </p>
          )}
          <div className="mt-5 flex flex-wrap items-center gap-3 text-sm text-gray-400">
            {meta.author && (
              <span className="inline-flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-cyan-400/70" />
                {meta.author}
              </span>
            )}
            {meta.dateISO && (
              <>
                <span>•</span>
                <time dateTime={meta.dateISO}>
                  {new Date(meta.dateISO).toLocaleDateString(undefined, {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                  })}
                </time>
              </>
            )}
            {meta.readingTime && (
              <>
                <span>•</span>
                <span>{meta.readingTime}</span>
              </>
            )}
            {!!meta.tags?.length && (
              <>
                <span>•</span>
                <div className="flex flex-wrap gap-2">
                  {meta.tags!.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-1 rounded-full bg-white/5 border border-white/10 text-gray-300"
                    >
                      #{t}
                    </span>
                  ))}
                </div>
              </>
            )}
          </div>
        </header>

        {/* Hero image */}
        {hero && (
          <div className="relative mb-10 rounded-2xl overflow-hidden border border-white/10">
            {/* Using <img> here avoids width/height requirements in a client component */}
            <img
              src={hero}
              alt={meta.title}
              className="w-full h-auto object-cover"
            />
          </div>
        )}

        {/* Layout: Sidebar TOC + Main content */}
        <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-6 items-start">
          {/* Sidebar */}
          <aside className="lg:sticky lg:top-20 self-start">
            {/* Summary accordion */}
            {summary && (
              <div className="mb-4 bg-white/5 border border-white/10 rounded-xl">
                <button
                  onClick={() => setSummaryOpen((v) => !v)}
                  className="w-full flex items-center justify-between px-4 py-3 text-sm text-gray-200 hover:text-white"
                >
                  <span className="font-medium">Article Summary</span>
                  <span className="text-gray-400">
                    {summaryOpen ? "–" : "+"}
                  </span>
                </button>
                {summaryOpen && (
                  <div className="px-4 pb-4 text-sm text-gray-300 leading-relaxed">
                    {summary}
                  </div>
                )}
              </div>
            )}

            {/* TOC */}
            <div className="bg-white/5 border border-white/10 rounded-xl">
              <button
                onClick={() => setTocOpen((v) => !v)}
                className="w-full flex items-center justify-between px-4 py-3 text-sm text-gray-2 00 hover:text-white"
              >
                <span className="font-medium">Table of Contents</span>
                <span className="text-gray-400">{tocOpen ? "–" : "+"}</span>
              </button>
              {tocOpen && (
                <nav className="px-3 pb-3 max-h-[60vh] overflow-auto">
                  <ul className="text-sm">
                    {toc.map((item) => (
                      <li key={item.id}>
                        <a
                          href={`#${item.id}`}
                          className={[
                            "block px-2 py-1 rounded-md text-gray-300 hover:text-white hover:bg-white/5 transition-colors",
                            item.level === "h3" ? "ml-3" : "",
                            activeId === item.id
                              ? "bg-white/10 text-white"
                              : "",
                          ].join(" ")}
                        >
                          {item.text}
                        </a>
                      </li>
                    ))}
                  </ul>
                </nav>
              )}
            </div>

            {/* Actions */}
            <div className="mt-4 flex flex-wrap gap-2">
              <button
                onClick={onShare}
                className="px-3 py-2 text-sm rounded-lg border border-white/15 bg-white/5 hover:bg-white/10 text-cyan-300"
              >
                Share
              </button>
              <button
                onClick={onCopyLink}
                className="px-3 py-2 text-sm rounded-lg border border-white/15 bg-white/5 hover:bg-white/10 text-gray-200"
              >
                Copy link
              </button>
              <button
                onClick={onBackToTop}
                className="px-3 py-2 text-sm rounded-lg border border-white/15 bg-white/5 hover:bg-white/10 text-gray-200"
              >
                Back to top
              </button>
            </div>
          </aside>

          {/* Main content */}
          <main
            ref={contentRef}
            className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8 prose prose-invert max-w-none"
          >
            {children}

            {/* Prev / Next */}
            {(prevNext?.prev || prevNext?.next) && (
              <div className="mt-10 pt-6 border-t border-white/10 grid gap-3 md:grid-cols-2">
                {prevNext?.prev ? (
                  <Link
                    href={prevNext.prev.href}
                    className="group block px-4 py-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
                  >
                    <div className="text-xs uppercase tracking-wide text-gray-400 mb-1">
                      ← Previous
                    </div>
                    <div className="text-gray-200 group-hover:text-white font-medium">
                      {prevNext.prev.title}
                    </div>
                  </Link>
                ) : (
                  <div />
                )}
                {prevNext?.next ? (
                  <Link
                    href={prevNext.next.href}
                    className="group block px-4 py-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors text-right"
                  >
                    <div className="text-xs uppercase tracking-wide text-gray-400 mb-1">
                      Next →
                    </div>
                    <div className="text-gray-200 group-hover:text-white font-medium">
                      {prevNext.next.title}
                    </div>
                  </Link>
                ) : (
                  <div />
                )}
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
}
