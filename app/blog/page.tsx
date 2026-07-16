"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageHero } from "@/components/sections/PageHero";
import { RevealWrapper } from "@/components/ui/RevealWrapper";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { ArrowRight, Clock, Calendar } from "lucide-react";

const CATEGORIES = ["All", "Infrastructure", "AI", "Cloud", "Networking", "Security", "AMC"];

const CATEGORY_COLORS: Record<string, string> = {
  AI: "bg-purple-600",
  Infrastructure: "bg-blue-700",
  Cloud: "bg-sky-500",
  Networking: "bg-green-600",
  Security: "bg-orange-500",
  AMC: "bg-gray-600",
};

const posts = [
  {
    category: "AI",
    title: "5 AI Use Cases Delivering Real ROI in Indian Enterprises",
    excerpt: "From predictive maintenance to intelligent document processing — the AI applications generating measurable returns across sectors.",
    readTime: "5 min",
    date: "Dec 8, 2024",
  },
  {
    category: "Security",
    title: "Why Analog CCTV is a Security Liability in 2025",
    excerpt: "IP cameras with AI analytics aren't just better — they're essential. Here's what you're risking with legacy surveillance systems.",
    readTime: "4 min",
    date: "Nov 28, 2024",
  },
  {
    category: "Infrastructure",
    title: "HCI vs 3-Tier Architecture: Which is Right for Your Workloads?",
    excerpt: "Hyper-converged infrastructure promises simplicity; traditional 3-tier delivers flexibility. How to choose for your specific needs.",
    readTime: "6 min",
    date: "Nov 18, 2024",
  },
  {
    category: "AMC",
    title: "Proactive vs Reactive IT Maintenance: The Cost of Waiting",
    excerpt: "Reactive maintenance costs 3–5x more than preventive AMC. The data behind why enterprise IT leaders are switching models.",
    readTime: "5 min",
    date: "Nov 5, 2024",
  },
  {
    category: "Networking",
    title: "Wi-Fi 6E in 2025: What Enterprises Need to Know",
    excerpt: "The 6 GHz band changes everything. Higher throughput, lower latency, and why your campus network is due for an upgrade.",
    readTime: "4 min",
    date: "Oct 25, 2024",
  },
];

export default function BlogPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHero
          badge="Blog & Resources"
          title="Enterprise IT Insights"
          subtitle="Expert articles, implementation guides, and technology comparisons from Comptech's certified engineers."
          breadcrumbs={[{ label: "Home", href: "/" }, { label: "Blog" }]}
        />

        {/* Category Filters */}
        <section className="bg-white py-8 border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="flex gap-2 flex-wrap">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  className={`rounded-full px-5 py-2 text-sm font-medium transition-colors ${
                    cat === "All"
                      ? "bg-blue-700 text-white"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Post */}
        <section className="bg-white py-16">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <RevealWrapper className="mb-8">
              <SectionLabel>Featured Article</SectionLabel>
            </RevealWrapper>
            <RevealWrapper>
              <div className="grid lg:grid-cols-5 gap-0 rounded-3xl overflow-hidden border border-gray-200 shadow-md">
                {/* Left visual */}
                <div
                  className="lg:col-span-3 h-64 lg:h-auto flex flex-col justify-end p-8 min-h-[280px]"
                  style={{ background: "linear-gradient(135deg, #001A57 0%, #003DA5 100%)" }}
                >
                  <span className="inline-block text-xs font-semibold bg-white/15 border border-white/20 text-white px-3 py-1 rounded-full mb-4 w-fit">
                    Cloud
                  </span>
                  <h2 className="font-display font-extrabold text-2xl text-white leading-snug text-balance">
                    Azure vs AWS for Indian Enterprises: A 2025 Comparison
                  </h2>
                </div>

                {/* Right content */}
                <div className="lg:col-span-2 bg-gray-50 p-8 flex flex-col justify-between">
                  <div>
                    <span className="inline-block text-xs font-semibold text-blue-700 bg-blue-50 border border-blue-100 px-3 py-1 rounded-full mb-5">
                      Featured Article
                    </span>
                    <h3 className="font-display font-bold text-xl text-gray-900 mb-3 leading-snug">
                      Azure vs AWS for Indian Enterprises: A 2025 Comparison
                    </h3>
                    <p className="text-sm text-gray-500 leading-relaxed mb-5">
                      Cost, compliance, latency, and support — the factors that actually matter when choosing a cloud platform for Indian enterprise workloads.
                    </p>
                    <div className="flex items-center gap-3 text-xs text-gray-400 mb-6">
                      <span className="flex items-center gap-1"><Clock size={12} /> 7 min read</span>
                      <span className="flex items-center gap-1"><Calendar size={12} /> Dec 15, 2024</span>
                    </div>
                  </div>
                  <a href="#" className="btn-primary btn inline-flex w-fit">
                    Read Article <ArrowRight size={16} className="btn-arrow" />
                  </a>
                </div>
              </div>
            </RevealWrapper>
          </div>
        </section>

        {/* Blog Grid */}
        <section className="bg-gray-50 py-24">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <RevealWrapper className="mb-12">
              <h2 className="font-display font-extrabold text-display-md text-gray-900">
                Latest Articles
              </h2>
            </RevealWrapper>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {posts.map((post, i) => (
                <RevealWrapper key={post.title} delay={i * 70}>
                  <article className="card-lift bg-white border border-gray-200 rounded-3xl overflow-hidden h-full flex flex-col">
                    {/* Colored top band */}
                    <div className={`h-1.5 ${CATEGORY_COLORS[post.category] ?? "bg-blue-700"}`} />

                    {/* Image placeholder */}
                    <div className="bg-gray-100 h-44 flex items-center justify-center">
                      <span className={`text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full text-white ${CATEGORY_COLORS[post.category] ?? "bg-blue-700"}`}>
                        {post.category}
                      </span>
                    </div>

                    {/* Body */}
                    <div className="p-6 flex flex-col flex-1">
                      <div className="flex items-center gap-3 text-xs text-gray-400 mb-3">
                        <span className="flex items-center gap-1"><Clock size={11} /> {post.readTime} read</span>
                        <span className="flex items-center gap-1"><Calendar size={11} /> {post.date}</span>
                      </div>
                      <h3 className="font-display font-bold text-gray-900 text-base leading-snug mb-3">
                        {post.title}
                      </h3>
                      <p className="text-sm text-gray-500 leading-relaxed mb-5 flex-1">
                        {post.excerpt}
                      </p>
                      <a href="#" className="inline-flex items-center gap-1.5 text-blue-700 text-sm font-semibold group">
                        Read Article
                        <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                      </a>
                    </div>
                  </article>
                </RevealWrapper>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter */}
        <section className="bg-blue-900 py-20">
          <div className="max-w-2xl mx-auto px-6 text-center">
            <RevealWrapper>
              <h2 className="font-display font-extrabold text-display-sm text-white mb-4">
                Stay Ahead of Enterprise IT
              </h2>
              <p className="text-white/65 text-lg leading-relaxed mb-8">
                Monthly insights on infrastructure, AI, cloud, and networking — delivered to your inbox.
              </p>
              <form
                className="flex gap-3 max-w-md mx-auto"
                onSubmit={(e) => e.preventDefault()}
              >
                <input
                  type="email"
                  required
                  placeholder="Work email address"
                  className="flex-1 bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-sm text-white placeholder:text-white/40 focus:outline-none focus:border-white/50 transition-colors"
                />
                <button
                  type="submit"
                  className="btn-accent btn px-6 py-3 shrink-0"
                >
                  Subscribe
                </button>
              </form>
              <p className="text-xs text-white/40 mt-4">No spam. Unsubscribe anytime.</p>
            </RevealWrapper>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
