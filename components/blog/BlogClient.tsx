"use client";

import { useState, useMemo, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { BLOG_POSTS, BLOG_CATEGORIES, BlogPost } from "@/lib/blog-data";

const ACCENT = "#5C0F26";

function Meta({ post }: { post: BlogPost }) {
  return (
    <div className="flex flex-wrap items-center gap-x-2 gap-y-2 text-[13px] text-[#5f6368]">
      <span>{post.publishDate}</span>
      <span aria-hidden>·</span>
      <span>{post.readTime}</span>
      <span className="rounded-full bg-[#f1f3f4] px-2.5 py-0.5 text-xs text-[#3c4043]">
        {post.category}
      </span>
    </div>
  );
}

function ReadButton({ slug }: { slug: string }) {
  return (
    <Link
      href={`/blog/${slug}`}
      className="inline-flex w-fit items-center rounded-full bg-[#f1f3f4] px-5 py-3 text-[15px] text-[#121317] transition-colors hover:bg-[#e4e6e8]"
    >
      Read blog
    </Link>
  );
}

export function BlogClient() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  // Magnetic scrolling: when scrolling settles, glide to the nearest snap target
  // (featured block, tabs bar, each card row).
  useEffect(() => {
    const OFFSET = 96; // fixed navbar clearance
    let timer: ReturnType<typeof setTimeout>;
    let animating = false;

    const settle = () => {
      const targets = Array.from(document.querySelectorAll<HTMLElement>("[data-snap]"));
      if (!targets.length) return;
      const maxY = document.documentElement.scrollHeight - window.innerHeight;
      const y = window.scrollY;
      const stops = [0, ...targets.map((t) => t.getBoundingClientRect().top + y - OFFSET), maxY]
        .map((v) => Math.min(Math.max(v, 0), maxY));
      const nearest = stops.reduce((best, v) => (Math.abs(v - y) < Math.abs(best - y) ? v : best), stops[0]);
      if (Math.abs(nearest - y) < 2) return;
      animating = true;
      window.scrollTo({ top: nearest, behavior: "smooth" });
      setTimeout(() => (animating = false), 600);
    };

    const onScroll = () => {
      if (animating) return;
      clearTimeout(timer);
      timer = setTimeout(settle, 140);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      clearTimeout(timer);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const featured = useMemo(
    () => BLOG_POSTS.find((p) => p.featured) || BLOG_POSTS[0],
    []
  );

  const posts = useMemo(
    () =>
      BLOG_POSTS.filter(
        (p) => selectedCategory === "All" || p.category === selectedCategory
      ),
    [selectedCategory]
  );

  return (
    <main className="min-h-screen bg-white text-[#121317]">
      {/* .grid-container.blog: 40px gutters, 205px top, 120px bottom */}
      <div className="mx-auto max-w-[1440px] px-5 pb-[120px] pt-32 sm:px-10 md:pt-[205px]">
        {/* Featured: text left, wide 16:9 media right */}
        {featured && (
          <section data-snap className="grid grid-cols-1 items-center gap-10 md:grid-cols-2">
            <div className="flex flex-col">
              <h2
                className="text-[48px] leading-[1] tracking-[-0.03em] md:text-[72px]"
                style={{ fontWeight: 450 }}
              >
                Featured
              </h2>
              <Link
                href={`/blog/${featured.slug}`}
                className="mt-8 block max-w-[560px] text-[28px] leading-[1.1] tracking-[-0.02em] md:text-[40px]"
                style={{ fontWeight: 450 }}
              >
                {featured.title}
              </Link>
              <div className="mt-8 flex flex-col gap-5">
                <Meta post={featured} />
                <ReadButton slug={featured.slug} />
              </div>
            </div>
            <Link
              href={`/blog/${featured.slug}`}
              className="relative block aspect-video w-full overflow-hidden rounded-3xl bg-[#121317]"
            >
              <Image
                src={featured.coverImage}
                alt={featured.title}
                fill
                priority
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover"
              />
            </Link>
          </section>
        )}

        {/* Latest: toolbar + single-column card grid */}
        <section className="mt-24">
          <div data-snap className="flex items-center justify-between gap-4 border-b border-[rgba(33,34,38,0.06)]">
            <ul
              className="flex overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
              role="tablist"
            >
              {BLOG_CATEGORIES.map((cat) => {
                const active = selectedCategory === cat;
                return (
                  <li key={cat} role="presentation">
                    <button
                      role="tab"
                      aria-selected={active}
                      onClick={() => setSelectedCategory(cat)}
                      className={`-mb-px whitespace-nowrap border-b-2 px-5 py-3 text-base transition-colors ${
                        active
                          ? "text-[#121317]"
                          : "border-transparent text-[#5f6368] hover:text-[#121317]"
                      }`}
                      style={active ? { borderColor: ACCENT } : undefined}
                    >
                      {cat}
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-x-12 gap-y-12 lg:grid-cols-2">
            {posts.map((post) => (
              <div key={post.slug} data-snap>
                <div className="flex items-center justify-between gap-12 border-b border-[rgba(33,34,38,0.06)] pb-9">
                  <div className="flex max-w-[440px] flex-col gap-6">
                    <Link href={`/blog/${post.slug}`}>
                      <h3
                        className="text-[24px] leading-[1.15] tracking-[-0.01em] text-[#2f3034] lg:text-[28px]"
                        style={{ fontWeight: 450 }}
                      >
                        {post.title}
                      </h3>
                    </Link>
                    <div className="flex flex-col gap-4">
                      <Meta post={post} />
                      <ReadButton slug={post.slug} />
                    </div>
                  </div>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="relative block h-[100px] w-[100px] shrink-0 overflow-hidden rounded-2xl bg-[#121317] sm:h-[160px] sm:w-[160px]"
                  >
                    <Image
                      src={post.coverImage}
                      alt={post.title}
                      fill
                      sizes="160px"
                      className="object-cover"
                    />
                  </Link>
                </div>
              </div>
            ))}
            {posts.length === 0 && (
              <p className="py-20 text-center text-[#5f6368]">
                No posts in this category yet.
              </p>
            )}
          </div>
        </section>
      </div>
    </main>
  );
}
