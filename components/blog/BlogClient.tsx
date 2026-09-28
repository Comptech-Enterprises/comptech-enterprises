"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { Search, Sparkles, ArrowRight, Calendar, Clock, Tag, X, Mail, CheckCircle2 } from "lucide-react";
import { RevealWrapper } from "@/components/ui/RevealWrapper";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { BLOG_POSTS, BLOG_CATEGORIES, BlogPost } from "@/lib/blog-data";

export function BlogClient() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [subscribed, setSubscribed] = useState<boolean>(false);
  const [emailInput, setEmailInput] = useState<string>("");

  // Filter posts based on category and search query
  const filteredPosts = useMemo(() => {
    return BLOG_POSTS.filter((post) => {
      const matchesCategory =
        selectedCategory === "All" || post.category === selectedCategory;
      const matchesSearch =
        searchQuery.trim() === "" ||
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  // Featured post (defaults to the first post flagged featured or the first matching post)
  const featuredPost = useMemo(() => {
    if (selectedCategory !== "All" || searchQuery.trim() !== "") return null;
    return BLOG_POSTS.find((p) => p.featured) || BLOG_POSTS[0];
  }, [selectedCategory, searchQuery]);

  // Regular grid posts (excluding featured post when featured hero is active)
  const gridPosts = useMemo(() => {
    if (featuredPost) {
      return filteredPosts.filter((p) => p.slug !== featuredPost.slug);
    }
    return filteredPosts;
  }, [filteredPosts, featuredPost]);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!emailInput.trim()) return;
    setSubscribed(true);
    setEmailInput("");
  };

  return (
    <main className="relative bg-white text-gray-900 min-h-screen pt-28 pb-24 overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[900px] h-[450px] bg-emerald-500/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute top-80 -right-40 w-96 h-96 bg-cyan-400/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* ─── HERO HEADER ─── */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <RevealWrapper>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-emerald-600/20 bg-emerald-50 mb-6">
              <Sparkles size={14} className="text-emerald-700" />
              <span className="text-xs font-bold uppercase tracking-widest text-emerald-800">
                Comptech Blog & Insights
              </span>
            </div>
          </RevealWrapper>

          <RevealWrapper delay={100}>
            <h1
              className="font-display font-extrabold tracking-tight leading-[1.05] text-gray-900"
              style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)" }}
            >
              Ideas, Engineering &amp;{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-700">
                AI Innovations
              </span>
            </h1>
          </RevealWrapper>

          <RevealWrapper delay={200}>
            <p className="mt-5 text-lg text-gray-600 leading-relaxed">
              Stay up to date with the latest from our team — autonomous AI agents, Generative Engine Optimization (GEO), cloud infrastructure, and enterprise tech.
            </p>
          </RevealWrapper>
        </div>

        {/* ─── SEARCH & CATEGORY FILTERS ─── */}
        <RevealWrapper delay={300}>
          <div className="space-y-6 mb-14">
            {/* Search Input Box */}
            <div className="max-w-xl mx-auto relative">
              <Search
                size={18}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
              />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search articles, topics, or keywords..."
                className="w-full pl-12 pr-10 py-3.5 rounded-2xl border border-gray-200 bg-white/90 backdrop-blur-sm shadow-sm text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 p-1"
                >
                  <X size={16} />
                </button>
              )}
            </div>

            {/* Category Filter Chips */}
            <div className="flex flex-wrap items-center justify-center gap-2 max-w-4xl mx-auto">
              {BLOG_CATEGORIES.map((cat) => {
                const isActive = selectedCategory === cat;
                const count =
                  cat === "All"
                    ? BLOG_POSTS.length
                    : BLOG_POSTS.filter((p) => p.category === cat).length;
                return (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold transition-all duration-300 ${
                      isActive
                        ? "bg-emerald-600 text-white shadow-md shadow-emerald-600/20"
                        : "bg-gray-100/80 text-gray-600 hover:bg-gray-200 hover:text-gray-900"
                    }`}
                  >
                    <span>{cat}</span>
                    <span
                      className={`px-1.5 py-0.5 rounded-full text-[10px] ${
                        isActive
                          ? "bg-white/20 text-white font-bold"
                          : "bg-gray-200 text-gray-500"
                      }`}
                    >
                      {count}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </RevealWrapper>

        {/* ─── FEATURED HERO CARD (Shown on 'All' without active search) ─── */}
        {featuredPost && (
          <RevealWrapper delay={400}>
            <div className="mb-16">
              <Link
                href={`/blog/${featuredPost.slug}`}
                className="group relative rounded-3xl border border-gray-200/90 bg-white overflow-hidden shadow-xl shadow-gray-200/60 grid grid-cols-1 lg:grid-cols-12 hover:border-emerald-500/50 transition-all duration-300 block"
              >
                {/* Left Media Banner */}
                <div className="lg:col-span-7 relative min-h-[300px] sm:min-h-[380px] overflow-hidden bg-gray-900">
                  <Image
                    src={featuredPost.coverImage}
                    alt={featuredPost.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700 opacity-90"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-950/70 via-transparent to-transparent lg:hidden" />
                  <div className="absolute top-4 left-4 z-10">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-600 text-white text-xs font-bold uppercase tracking-wider shadow-md">
                      <Sparkles size={12} />
                      Featured Article
                    </span>
                  </div>
                </div>

                {/* Right Content Details */}
                <div className="lg:col-span-5 p-8 sm:p-10 flex flex-col justify-between bg-white">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 text-xs text-gray-500">
                      <span className="font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-200">
                        {featuredPost.category}
                      </span>
                      <span>•</span>
                      <div className="flex items-center gap-1">
                        <Calendar size={13} />
                        <span>{featuredPost.publishDate}</span>
                      </div>
                      <span>•</span>
                      <div className="flex items-center gap-1">
                        <Clock size={13} />
                        <span>{featuredPost.readTime}</span>
                      </div>
                    </div>

                    <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 leading-tight group-hover:text-emerald-700 transition-colors">
                      {featuredPost.title}
                    </h2>

                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed line-clamp-3">
                      {featuredPost.excerpt}
                    </p>
                  </div>

                  <div className="mt-8 pt-6 border-t border-gray-100 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full overflow-hidden relative border border-gray-200">
                        <Image
                          src={featuredPost.author.avatar}
                          alt={featuredPost.author.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <p className="text-xs font-bold text-gray-900">{featuredPost.author.name}</p>
                        <p className="text-[11px] text-gray-400">{featuredPost.author.role}</p>
                      </div>
                    </div>

                    <span className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700 group-hover:translate-x-1 transition-transform">
                      Read Article
                      <ArrowRight size={15} />
                    </span>
                  </div>
                </div>
              </Link>
            </div>
          </RevealWrapper>
        )}

        {/* ─── GRID OF ARTICLES ─── */}
        {gridPosts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {gridPosts.map((post, index) => (
              <RevealWrapper key={post.slug} delay={index * 80}>
                <Link
                  href={`/blog/${post.slug}`}
                  className="group flex flex-col h-full rounded-2xl border border-gray-200/90 bg-white overflow-hidden shadow-sm hover:shadow-xl hover:border-emerald-500/40 transition-all duration-300"
                >
                  {/* Card Cover Image */}
                  <div className="relative h-48 w-full overflow-hidden bg-gray-100">
                    <Image
                      src={post.coverImage}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="px-2.5 py-1 rounded-md bg-white/90 backdrop-blur-md border border-gray-200 text-gray-800 text-[11px] font-bold">
                        {post.category}
                      </span>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                    <div className="space-y-2.5">
                      <div className="flex items-center gap-3 text-[11px] text-gray-400">
                        <div className="flex items-center gap-1">
                          <Calendar size={12} />
                          <span>{post.publishDate}</span>
                        </div>
                        <span>•</span>
                        <div className="flex items-center gap-1">
                          <Clock size={12} />
                          <span>{post.readTime}</span>
                        </div>
                      </div>

                      <h3 className="text-lg font-bold text-gray-900 leading-snug group-hover:text-emerald-700 transition-colors line-clamp-2">
                        {post.title}
                      </h3>

                      <p className="text-xs text-gray-600 leading-relaxed line-clamp-3">
                        {post.excerpt}
                      </p>
                    </div>

                    {/* Author & Footer */}
                    <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                      <div className="flex items-center gap-2.5">
                        <div className="w-7 h-7 rounded-full overflow-hidden relative border border-gray-200">
                          <Image
                            src={post.author.avatar}
                            alt={post.author.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <span className="text-xs font-semibold text-gray-700">
                          {post.author.name}
                        </span>
                      </div>

                      <span className="text-xs font-bold text-emerald-600 group-hover:translate-x-1 transition-transform flex items-center gap-1">
                        Read <ArrowRight size={13} />
                      </span>
                    </div>
                  </div>
                </Link>
              </RevealWrapper>
            ))}
          </div>
        ) : (
          /* Empty Search State */
          <div className="text-center py-20 bg-gray-50 rounded-3xl border border-gray-200 p-8 max-w-xl mx-auto">
            <Search size={36} className="mx-auto text-gray-400 mb-4" />
            <h3 className="text-xl font-bold text-gray-900 mb-2">No articles found</h3>
            <p className="text-sm text-gray-500 mb-6">
              We couldn&apos;t find any articles matching &quot;{searchQuery}&quot; in {selectedCategory}.
            </p>
            <button
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("All");
              }}
              className="px-6 py-2.5 rounded-xl bg-emerald-600 text-white font-bold text-xs uppercase tracking-wider hover:bg-emerald-700 transition-colors"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* ─── NEWSLETTER / RSS SUBSCRIPTION CARD ─── */}
        <RevealWrapper delay={300}>
          <div className="mt-20 rounded-3xl bg-gradient-to-br from-[#5C0F26] via-[#4A0C1F] to-[#2E0713] p-8 sm:p-12 text-white relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-[140px] pointer-events-none" />

            <div className="relative z-10 max-w-2xl mx-auto text-center space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-emerald-300 text-xs font-bold uppercase tracking-widest border border-white/15">
                <Mail size={13} />
                Stay Ahead of the Curve
              </div>

              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                Get Enterprise AI &amp; GEO Insights Delivered Weekly
              </h2>

              <p className="text-sm text-gray-200 leading-relaxed">
                Join 1,200+ enterprise IT leaders, CTOs, and MSME founders receiving practical AI agent frameworks, GEO strategies, and infrastructure benchmarks.
              </p>

              {subscribed ? (
                <div className="p-4 rounded-xl bg-emerald-500/20 border border-emerald-400/40 text-emerald-200 flex items-center justify-center gap-2 font-semibold text-sm animate-fade-in">
                  <CheckCircle2 size={18} className="text-emerald-400" />
                  <span>You&apos;re subscribed! Check your inbox for confirmation.</span>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                  <input
                    type="email"
                    required
                    value={emailInput}
                    onChange={(e) => setEmailInput(e.target.value)}
                    placeholder="Enter your work email..."
                    className="flex-1 px-4 py-3.5 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-gray-300 text-sm focus:outline-none focus:bg-white/20 focus:border-emerald-400 transition-all"
                  />
                  <button
                    type="submit"
                    className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-bold text-sm hover:shadow-lg hover:shadow-emerald-500/30 transition-all shrink-0"
                  >
                    Subscribe Free
                  </button>
                </form>
              )}
            </div>
          </div>
        </RevealWrapper>
      </div>
    </main>
  );
}
