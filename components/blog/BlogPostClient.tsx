"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  Calendar,
  Clock,
  Share2,
  Check,
  Copy,
  Linkedin,
  Twitter,
  Sparkles,
  ArrowRight,
  BookOpen,
} from "lucide-react";
import { BlogPost } from "@/lib/blog-data";
import { RevealWrapper } from "@/components/ui/RevealWrapper";

/* ─── Scroll Progress Bar ─── */
function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(h > 0 ? window.scrollY / h : 0);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 h-[3px] z-[1000]">
      <div
        className="h-full bg-gradient-to-r from-emerald-500 via-teal-400 to-cyan-500 transition-[width] duration-75"
        style={{ width: `${progress * 100}%` }}
      />
    </div>
  );
}

export function BlogPostClient({ post, relatedPosts }: { post: BlogPost; relatedPosts: BlogPost[] }) {
  const [copied, setCopied] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  const handleCopyLink = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const shareUrl = typeof window !== "undefined" ? window.location.href : "";

  return (
    <main className="relative bg-white text-gray-900 min-h-screen pt-28 pb-24 overflow-hidden">
      <ScrollProgress />

      {/* Subtle Background Glow */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-emerald-500/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8">
        {/* ─── BACK TO BLOG LINK ─── */}
        <RevealWrapper>
          <div className="mb-8">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-xs font-bold text-gray-600 hover:text-emerald-700 transition-colors uppercase tracking-wider bg-gray-100/80 px-3.5 py-2 rounded-full border border-gray-200"
            >
              <ArrowLeft size={14} />
              Back to Articles
            </Link>
          </div>
        </RevealWrapper>

        {/* ─── POST HEADER ─── */}
        <div className="space-y-6 mb-10">
          <RevealWrapper delay={100}>
            <div className="flex flex-wrap items-center gap-3 text-xs text-gray-500">
              <span className="font-bold text-emerald-800 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200/80">
                {post.category}
              </span>
              <span>•</span>
              <div className="flex items-center gap-1.5 text-gray-600">
                <Calendar size={13} />
                <span>Published {post.publishDate}</span>
              </div>
              <span>•</span>
              <div className="flex items-center gap-1.5 text-gray-600">
                <Clock size={13} />
                <span>{post.readTime}</span>
              </div>
            </div>
          </RevealWrapper>

          <RevealWrapper delay={150}>
            <h1
              className="font-display font-extrabold text-gray-900 tracking-tight leading-[1.12]"
              style={{ fontSize: "clamp(2rem, 4vw, 3.25rem)" }}
            >
              {post.title}
            </h1>
          </RevealWrapper>

          {/* Author & Share Bar */}
          <RevealWrapper delay={200}>
            <div className="pt-4 border-t border-b border-gray-100 py-4 flex flex-wrap items-center justify-between gap-4">
              {/* Author info */}
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-full overflow-hidden relative border border-gray-200 shadow-sm">
                  <Image
                    src={post.author.avatar}
                    alt={post.author.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="text-sm font-bold text-gray-900">{post.author.name}</p>
                  <p className="text-xs text-gray-500">{post.author.role}</p>
                </div>
              </div>

              {/* Share Buttons */}
              <div className="flex items-center gap-2">
                <button
                  onClick={handleCopyLink}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-gray-200 bg-gray-50 hover:bg-white text-xs font-semibold text-gray-700 transition-colors"
                  title="Copy link"
                >
                  {copied ? <Check size={14} className="text-emerald-600" /> : <Copy size={14} />}
                  <span>{copied ? "Copied!" : "Copy Link"}</span>
                </button>

                <a
                  href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(
                    post.title
                  )}&url=${encodeURIComponent(shareUrl)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg border border-gray-200 bg-gray-50 hover:bg-white text-gray-600 hover:text-emerald-600 transition-colors"
                  aria-label="Share on Twitter"
                >
                  <Twitter size={15} />
                </a>

                <a
                  href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
                    shareUrl
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg border border-gray-200 bg-gray-50 hover:bg-white text-gray-600 hover:text-emerald-600 transition-colors"
                  aria-label="Share on LinkedIn"
                >
                  <Linkedin size={15} />
                </a>
              </div>
            </div>
          </RevealWrapper>
        </div>

        {/* ─── HERO COVER IMAGE ─── */}
        <RevealWrapper delay={250}>
          <div className="relative h-[300px] sm:h-[450px] w-full rounded-3xl overflow-hidden mb-12 border border-gray-200 shadow-lg">
            <Image
              src={post.coverImage}
              alt={post.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        </RevealWrapper>

        {/* ─── MAIN CONTENT & SIDEBAR GRID ─── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Main Article Body Column */}
          <div className="lg:col-span-8 space-y-8">
            <RevealWrapper delay={300}>
              <div
                ref={contentRef}
                className="prose prose-lg max-w-none text-gray-700 leading-relaxed font-sans
                  prose-headings:font-display prose-headings:font-extrabold prose-headings:text-gray-900
                  prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4
                  prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3
                  prose-p:mb-5 prose-p:leading-relaxed
                  prose-a:text-emerald-600 prose-a:font-semibold hover:prose-a:underline
                  prose-code:bg-slate-100 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:text-emerald-700 prose-code:font-mono prose-code:text-sm
                  prose-pre:bg-slate-900 prose-pre:text-slate-100 prose-pre:rounded-2xl prose-pre:p-6 prose-pre:shadow-xl
                  prose-ul:list-disc prose-ul:pl-6 prose-ul:mb-6 prose-ul:space-y-2
                  prose-ol:list-decimal prose-ol:pl-6 prose-ol:mb-6 prose-ol:space-y-2
                  prose-blockquote:border-l-4 prose-blockquote:border-emerald-500 prose-blockquote:pl-4 prose-blockquote:italic prose-blockquote:text-gray-600"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
            </RevealWrapper>

            {/* Tags Footer */}
            <div className="pt-6 border-t border-gray-200">
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-xs font-bold text-gray-400 uppercase tracking-wider mr-2">
                  Tags:
                </span>
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-full bg-gray-100 border border-gray-200 text-xs font-semibold text-gray-700"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Author Bio Box */}
            <div className="p-6 sm:p-8 rounded-2xl bg-gray-50 border border-gray-200 flex flex-col sm:flex-row items-start sm:items-center gap-5">
              <div className="w-16 h-16 rounded-full overflow-hidden relative border border-gray-200 shrink-0">
                <Image
                  src={post.author.avatar}
                  alt={post.author.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="space-y-1">
                <p className="text-xs font-bold text-emerald-700 uppercase tracking-wider">
                  Written by
                </p>
                <h3 className="text-base font-bold text-gray-900">{post.author.name}</h3>
                <p className="text-xs text-gray-500 font-medium mb-2">{post.author.role}</p>
                <p className="text-xs text-gray-600 leading-relaxed">{post.author.bio}</p>
              </div>
            </div>
          </div>

          {/* Right Sticky Sidebar Column */}
          <aside className="lg:col-span-4 space-y-8 lg:sticky lg:top-28">
            {/* Quick CTA Card */}
            <div className="rounded-2xl bg-gradient-to-br from-[#5C0F26] to-[#3B0A18] text-white p-6 shadow-xl space-y-4">
              <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-emerald-400">
                <Sparkles size={20} />
              </div>
              <h3 className="font-bold text-lg text-white">Need Custom AI Agents or GEO for Your Brand?</h3>
              <p className="text-xs text-gray-200 leading-relaxed">
                Book a consultation with our AI architects to get cited inside ChatGPT, Gemini, and Perplexity.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-white text-[#5C0F26] font-bold text-xs uppercase tracking-wider hover:bg-gray-100 transition-all shadow-md"
              >
                Schedule Consultation
                <ArrowRight size={14} />
              </Link>
            </div>

            {/* Related Posts Widget */}
            <div className="p-6 rounded-2xl bg-white border border-gray-200 shadow-sm space-y-4">
              <h4 className="font-bold text-gray-900 text-sm flex items-center gap-2">
                <BookOpen size={16} className="text-emerald-600" />
                Recommended Reading
              </h4>
              <div className="space-y-4 pt-2">
                {relatedPosts.map((rel) => (
                  <Link
                    key={rel.slug}
                    href={`/blog/${rel.slug}`}
                    className="group block space-y-1 pb-3 border-b border-gray-100 last:border-0 last:pb-0"
                  >
                    <span className="text-[10px] font-bold text-emerald-600 uppercase tracking-wider">
                      {rel.category}
                    </span>
                    <h5 className="text-xs font-bold text-gray-800 group-hover:text-emerald-700 transition-colors line-clamp-2">
                      {rel.title}
                    </h5>
                    <p className="text-[11px] text-gray-400">{rel.readTime}</p>
                  </Link>
                ))}
              </div>
            </div>
          </aside>
        </div>

        {/* ─── BOTTOM RECOMMENDED ARTICLES ─── */}
        {relatedPosts.length > 0 && (
          <div className="mt-20 pt-12 border-t border-gray-200 space-y-8">
            <div className="flex items-center justify-between">
              <div>
                <span className="text-xs font-bold text-emerald-600 uppercase tracking-widest block mb-1">
                  More from the blog
                </span>
                <h3 className="text-2xl font-extrabold text-gray-900">Recommended Articles</h3>
              </div>
              <Link
                href="/blog"
                className="text-xs font-bold text-emerald-700 hover:underline flex items-center gap-1"
              >
                View all <ArrowRight size={14} />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedPosts.slice(0, 3).map((rel) => (
                <Link
                  key={rel.slug}
                  href={`/blog/${rel.slug}`}
                  className="group rounded-2xl border border-gray-200 bg-white p-5 shadow-sm hover:shadow-md hover:border-emerald-500/40 transition-all flex flex-col justify-between space-y-4"
                >
                  <div className="space-y-2">
                    <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">
                      {rel.category}
                    </span>
                    <h4 className="text-sm font-bold text-gray-900 group-hover:text-emerald-700 transition-colors line-clamp-2">
                      {rel.title}
                    </h4>
                    <p className="text-xs text-gray-500 line-clamp-2">{rel.excerpt}</p>
                  </div>
                  <div className="flex items-center justify-between text-[11px] text-gray-400 pt-3 border-t border-gray-100">
                    <span>{rel.publishDate}</span>
                    <span className="font-semibold text-emerald-600 flex items-center gap-0.5">
                      Read <ArrowRight size={11} />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
