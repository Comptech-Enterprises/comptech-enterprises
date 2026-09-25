"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Search,
  Eye,
  BarChart3,
  Target,
  Zap,
  Globe,
  TrendingUp,
  MessageSquare,
  Shield,
  ArrowRight,
  Check,
  Sparkles,
  Bot,
  FileText,
  ChevronRight,
} from "lucide-react";
import { RevealWrapper } from "@/components/ui/RevealWrapper";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { COMPANY } from "@/lib/constants";

/* ─── Animated counter ─── */
function AnimatedNumber({ value, suffix = "" }: { value: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = useState(0);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setStarted(true);
          obs.unobserve(el);
        }
      },
      { threshold: 0.3 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;
    const dur = 1600;
    const start = performance.now();
    const step = (now: number) => {
      const t = Math.min((now - start) / dur, 1);
      const ease = 1 - Math.pow(1 - t, 3);
      setDisplay(Math.round(value * ease));
      if (t < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [started, value]);

  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  );
}

/* ─── Scroll-progress bar (Semrush style) ─── */
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

/* ─── Animated visibility bar chart (mock data viz) ─── */
function VisibilityChart() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setVisible(true); obs.unobserve(el); }
    }, { threshold: 0.2 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const bars = [
    { label: "ChatGPT", pct: 85, color: "#10B981" },
    { label: "Gemini", pct: 72, color: "#3B82F6" },
    { label: "Perplexity", pct: 68, color: "#8B5CF6" },
    { label: "Copilot", pct: 58, color: "#F59E0B" },
    { label: "Claude", pct: 52, color: "#EC4899" },
  ];

  return (
    <div ref={ref} className="space-y-4">
      {bars.map((b, i) => (
        <div key={b.label} className="space-y-1.5">
          <div className="flex justify-between text-sm">
            <span className="font-semibold text-gray-800">{b.label}</span>
            <span className="font-bold" style={{ color: b.color }}>
              {visible ? b.pct : 0}%
            </span>
          </div>
          <div className="h-3 rounded-full bg-gray-100 overflow-hidden">
            <div
              className="h-full rounded-full transition-all duration-1000 ease-out"
              style={{
                width: visible ? `${b.pct}%` : "0%",
                backgroundColor: b.color,
                transitionDelay: `${i * 120}ms`,
              }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}

/* ─── Animated citation score ring ─── */
function CitationRing({ score, label }: { score: number; label: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setVisible(true); obs.unobserve(el); }
    }, { threshold: 0.3 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const r = 54;
  const circ = 2 * Math.PI * r;
  const offset = circ - (score / 100) * circ;

  return (
    <div ref={ref} className="flex flex-col items-center gap-3">
      <div className="relative w-32 h-32">
        <svg viewBox="0 0 120 120" className="w-full h-full -rotate-90">
          <circle cx="60" cy="60" r={r} fill="none" stroke="#E5E7EB" strokeWidth="8" />
          <circle
            cx="60" cy="60" r={r} fill="none" stroke="url(#grad)" strokeWidth="8"
            strokeLinecap="round"
            strokeDasharray={circ}
            strokeDashoffset={visible ? offset : circ}
            style={{ transition: "stroke-dashoffset 1.2s ease-out" }}
          />
          <defs>
            <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#10B981" />
              <stop offset="100%" stopColor="#06B6D4" />
            </linearGradient>
          </defs>
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-2xl font-extrabold text-gray-900">
            <AnimatedNumber value={score} />
          </span>
        </div>
      </div>
      <span className="text-sm font-semibold text-gray-500 uppercase tracking-wider">{label}</span>
    </div>
  );
}

/* ─── AI engines marquee ─── */
const AI_ENGINES = [
  "ChatGPT", "Google Gemini", "Perplexity", "Microsoft Copilot",
  "Claude", "Meta AI", "Google SGE", "Bing Chat",
];

function EngineMarquee() {
  return (
    <div className="overflow-hidden py-6">
      <div className="flex gap-8 w-max animate-[marquee_20s_linear_infinite]">
        {[...AI_ENGINES, ...AI_ENGINES].map((name, i) => (
          <div
            key={`${name}-${i}`}
            className="flex items-center gap-2 px-6 py-3 rounded-full border border-gray-200 bg-white/80 backdrop-blur-sm whitespace-nowrap"
          >
            <Bot size={18} className="text-emerald-600" />
            <span className="text-sm font-semibold text-gray-700">{name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ─── Process steps ─── */
const PROCESS_STEPS = [
  {
    icon: Search,
    title: "AI Visibility Audit",
    desc: "We scan how your brand appears across ChatGPT, Gemini, Perplexity, and other AI engines — identifying gaps, inaccuracies, and missed opportunities.",
    color: "#10B981",
  },
  {
    icon: FileText,
    title: "Content Restructuring",
    desc: "Restructure your content for AI comprehension — entity-rich copy, structured data, authoritative sourcing, and citation-optimized formatting.",
    color: "#3B82F6",
  },
  {
    icon: Globe,
    title: "Knowledge Graph Optimization",
    desc: "Build and strengthen your entity footprint across Wikipedia, Wikidata, Google Knowledge Graph, and domain-specific databases.",
    color: "#8B5CF6",
  },
  {
    icon: Target,
    title: "Citation Engineering",
    desc: "Strategic placement of authoritative, crawlable content that AI models will cite when answering queries in your domain.",
    color: "#F59E0B",
  },
  {
    icon: BarChart3,
    title: "Tracking & Reporting",
    desc: "Monitor your brand's AI visibility score, citation frequency, sentiment, and share-of-voice across all major generative engines.",
    color: "#EC4899",
  },
];

/* ─── Service tiers ─── */
const TIERS = [
  {
    name: "Starter",
    price: "Get Quote",
    desc: "For brands starting their AI visibility journey",
    features: [
      "AI visibility audit (5 engines)",
      "Monthly citation report",
      "Content recommendations",
      "Basic entity optimization",
      "Email support",
    ],
  },
  {
    name: "Growth",
    price: "Get Quote",
    desc: "For brands serious about AI-first discovery",
    popular: true,
    features: [
      "Everything in Starter",
      "Full content restructuring",
      "Knowledge graph optimization",
      "Bi-weekly strategy calls",
      "Citation engineering (10 pages/mo)",
      "Competitor benchmarking",
      "Priority support",
    ],
  },
  {
    name: "Enterprise",
    price: "Custom",
    desc: "For market leaders who need to dominate",
    features: [
      "Everything in Growth",
      "Unlimited content optimization",
      "Custom AI agent monitoring",
      "Real-time alert dashboard",
      "Dedicated GEO strategist",
      "API access to visibility data",
      "SLA-backed support",
    ],
  },
];

/* ─── Stats ─── */
const GEO_STATS = [
  { value: 40, suffix: "%", label: "of searches", desc: "will be answered by AI by 2026" },
  { value: 62, suffix: "%", label: "of Gen-Z", desc: "prefer AI answers over traditional search" },
  { value: 3, suffix: "x", label: "more clicks", desc: "for brands cited in AI responses" },
  { value: 0, suffix: "", label: "organic reach", desc: "if AI engines can't find you", special: true },
];

/* ════════════════════════════════════
   MAIN COMPONENT
   ════════════════════════════════════ */
export function GEOClient() {
  return (
    <main className="relative overflow-hidden">
      <ScrollProgress />

      {/* ─── HERO ─── */}
      <section className="relative min-h-[90vh] flex items-center bg-gradient-to-br from-gray-950 via-gray-900 to-emerald-950 overflow-hidden">
        {/* Animated grid background */}
        <div className="absolute inset-0 opacity-20">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "linear-gradient(rgba(16,185,129,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(16,185,129,0.15) 1px, transparent 1px)",
              backgroundSize: "60px 60px",
            }}
          />
        </div>

        {/* Gradient orbs */}
        <div className="absolute top-20 -left-32 w-96 h-96 bg-emerald-500/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-20 -right-32 w-96 h-96 bg-cyan-500/15 rounded-full blur-[120px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-teal-500/10 rounded-full blur-[160px]" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-32 lg:py-40">
          <div className="max-w-4xl">
            <RevealWrapper>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 mb-8">
                <Sparkles size={14} className="text-emerald-400" />
                <span className="text-xs font-bold uppercase tracking-widest text-emerald-400">
                  Generative Engine Optimization
                </span>
              </div>
            </RevealWrapper>

            <RevealWrapper delay={100}>
              <h1
                className="font-display font-extrabold tracking-tight leading-[0.95]"
                style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)" }}
              >
                <span className="text-white">Be the answer.</span>
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400">
                  Not just a result.
                </span>
              </h1>
            </RevealWrapper>

            <RevealWrapper delay={200}>
              <p className="mt-6 text-lg lg:text-xl text-gray-400 max-w-2xl leading-relaxed">
                When people ask ChatGPT, Gemini, or Perplexity about your industry — does your brand come up?
                GEO ensures you get cited, recommended, and ranked in every AI-generated answer.
              </p>
            </RevealWrapper>

            <RevealWrapper delay={300}>
              <div className="mt-10 flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-bold text-base hover:shadow-lg hover:shadow-emerald-500/25 transition-all duration-300"
                >
                  Get Your AI Visibility Score
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <a
                  href="#how-it-works"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-xl border border-white/20 text-white/90 font-semibold text-base hover:bg-white/5 transition-all duration-300"
                >
                  How it works
                </a>
              </div>
            </RevealWrapper>
          </div>

          {/* Hero data card */}
          <RevealWrapper delay={400} direction="right">
            <div className="hidden lg:block absolute top-1/2 right-8 xl:right-16 -translate-y-1/2 w-[340px]">
              <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 space-y-5">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/20 flex items-center justify-center">
                    <TrendingUp size={20} className="text-emerald-400" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 font-medium">AI Visibility Score</p>
                    <p className="text-2xl font-extrabold text-white">87<span className="text-emerald-400">/100</span></p>
                  </div>
                </div>
                <div className="h-px bg-white/10" />
                <div className="space-y-3">
                  {[
                    { engine: "ChatGPT", status: "Cited", color: "text-emerald-400" },
                    { engine: "Gemini", status: "Recommended", color: "text-blue-400" },
                    { engine: "Perplexity", status: "Top 3", color: "text-purple-400" },
                    { engine: "Copilot", status: "Mentioned", color: "text-amber-400" },
                  ].map((row) => (
                    <div key={row.engine} className="flex items-center justify-between">
                      <span className="text-sm text-gray-400">{row.engine}</span>
                      <span className={`text-sm font-bold ${row.color}`}>{row.status}</span>
                    </div>
                  ))}
                </div>
                <div className="h-px bg-white/10" />
                <p className="text-[11px] text-gray-600 text-center">Sample GEO Dashboard</p>
              </div>
            </div>
          </RevealWrapper>
        </div>
      </section>

      {/* ─── AI ENGINE MARQUEE ─── */}
      <section className="py-8 bg-gray-50 border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="text-center text-xs font-bold uppercase tracking-widest text-gray-400 mb-4">
            Optimize for every AI engine
          </p>
          <EngineMarquee />
        </div>
      </section>

      {/* ─── WHY GEO (stats) ─── */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <RevealWrapper>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <SectionLabel>Why GEO matters</SectionLabel>
              <h2
                className="font-display font-extrabold text-gray-900 tracking-tight mt-3"
                style={{ fontSize: "clamp(2rem, 3.5vw, 3rem)" }}
              >
                Search is changing.{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-500">
                  Are you ready?
                </span>
              </h2>
              <p className="mt-4 text-gray-500 text-lg leading-relaxed">
                Traditional SEO optimizes for links. GEO optimizes for answers. AI engines don&apos;t rank pages — they cite sources.
                If your content isn&apos;t structured for AI comprehension, you&apos;re invisible.
              </p>
            </div>
          </RevealWrapper>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {GEO_STATS.map((s, i) => (
              <RevealWrapper key={s.label} delay={i * 100}>
                <div className="glass-card rounded-2xl p-6 text-center group hover:shadow-lg transition-shadow duration-300">
                  <p className="font-display font-extrabold text-4xl lg:text-5xl text-gray-900 leading-none mb-2">
                    {s.special ? (
                      <span className="text-red-500">0</span>
                    ) : (
                      <span style={{ color: "#059669" }}>
                        <AnimatedNumber value={s.value} suffix={s.suffix} />
                      </span>
                    )}
                  </p>
                  <p className="text-sm font-bold text-gray-700 mb-1">{s.label}</p>
                  <p className="text-xs text-gray-400">{s.desc}</p>
                </div>
              </RevealWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* ─── VISIBILITY DASHBOARD ─── */}
      <section className="py-20 lg:py-28 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            {/* Left — text */}
            <div className="flex-1">
              <RevealWrapper>
                <SectionLabel>AI Visibility Dashboard</SectionLabel>
                <h2
                  className="font-display font-extrabold text-gray-900 tracking-tight mt-3"
                  style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)" }}
                >
                  See exactly where your brand{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-500">
                    gets cited
                  </span>
                </h2>
                <p className="mt-4 text-gray-500 text-base leading-relaxed max-w-lg">
                  Track your citation frequency, sentiment, and share-of-voice across every major AI engine.
                  Know which queries mention you — and which don&apos;t yet.
                </p>
              </RevealWrapper>

              <RevealWrapper delay={150}>
                <div className="mt-8 grid grid-cols-3 gap-4">
                  <CitationRing score={87} label="Visibility" />
                  <CitationRing score={72} label="Citations" />
                  <CitationRing score={94} label="Accuracy" />
                </div>
              </RevealWrapper>
            </div>

            {/* Right — bar chart */}
            <div className="flex-1 w-full">
              <RevealWrapper delay={200} direction="right">
                <div className="glass-card rounded-2xl p-8 bg-white shadow-lg">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="font-bold text-gray-900">Brand Visibility by Engine</h3>
                    <span className="text-xs font-semibold text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full">
                      Live
                    </span>
                  </div>
                  <VisibilityChart />
                </div>
              </RevealWrapper>
            </div>
          </div>
        </div>
      </section>

      {/* ─── HOW IT WORKS (process) ─── */}
      <section id="how-it-works" className="py-20 lg:py-28 bg-gray-950 text-white scroll-mt-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <RevealWrapper>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <SectionLabel>Our Process</SectionLabel>
              <h2
                className="font-display font-extrabold tracking-tight mt-3"
                style={{ fontSize: "clamp(2rem, 3.5vw, 3rem)" }}
              >
                How we make you{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
                  AI-visible
                </span>
              </h2>
            </div>
          </RevealWrapper>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {PROCESS_STEPS.map((step, i) => (
              <RevealWrapper key={step.title} delay={i * 100}>
                <div className="group relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-7 hover:border-emerald-500/30 hover:bg-white/[0.08] transition-all duration-300 h-full">
                  <div className="flex items-start gap-4 mb-4">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                      style={{ backgroundColor: `${step.color}20` }}
                    >
                      <step.icon size={22} style={{ color: step.color }} />
                    </div>
                    <span className="text-5xl font-extrabold text-white/5 absolute top-4 right-6 select-none">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{step.title}</h3>
                  <p className="text-sm text-gray-400 leading-relaxed">{step.desc}</p>
                </div>
              </RevealWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SEO vs GEO comparison ─── */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <RevealWrapper>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <SectionLabel>SEO vs GEO</SectionLabel>
              <h2
                className="font-display font-extrabold text-gray-900 tracking-tight mt-3"
                style={{ fontSize: "clamp(2rem, 3.5vw, 3rem)" }}
              >
                Same goal. Different game.
              </h2>
            </div>
          </RevealWrapper>

          <RevealWrapper delay={100}>
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-3 gap-0 rounded-2xl overflow-hidden border border-gray-200">
                {/* Header */}
                <div className="p-5 bg-gray-50 border-b border-r border-gray-200">
                  <span className="text-sm font-bold text-gray-400 uppercase tracking-wider">Aspect</span>
                </div>
                <div className="p-5 bg-gray-50 border-b border-r border-gray-200 text-center">
                  <span className="text-sm font-bold text-gray-600 uppercase tracking-wider">Traditional SEO</span>
                </div>
                <div className="p-5 bg-emerald-50 border-b border-gray-200 text-center">
                  <span className="text-sm font-bold text-emerald-700 uppercase tracking-wider">GEO</span>
                </div>
                {/* Rows */}
                {[
                  ["Optimizes for", "Search engine crawlers", "Large language models"],
                  ["Goal", "Rank on page 1", "Be cited in AI answers"],
                  ["Content focus", "Keywords & backlinks", "Entities & authority signals"],
                  ["Measurement", "Rankings & CTR", "Citations & visibility score"],
                  ["Competition", "10 blue links", "Single AI-generated answer"],
                  ["Speed of impact", "3–6 months", "Weeks to first citation"],
                ].map(([aspect, seo, geo], i) => (
                  <div key={aspect} className="contents">
                    <div className={`p-4 border-r border-gray-200 ${i % 2 === 0 ? "bg-white" : "bg-gray-50/50"} ${i < 5 ? "border-b border-gray-200" : ""}`}>
                      <span className="text-sm font-semibold text-gray-700">{aspect}</span>
                    </div>
                    <div className={`p-4 border-r border-gray-200 text-center ${i % 2 === 0 ? "bg-white" : "bg-gray-50/50"} ${i < 5 ? "border-b border-gray-200" : ""}`}>
                      <span className="text-sm text-gray-500">{seo}</span>
                    </div>
                    <div className={`p-4 text-center ${i % 2 === 0 ? "bg-emerald-50/50" : "bg-emerald-50/30"} ${i < 5 ? "border-b border-gray-200" : ""}`}>
                      <span className="text-sm font-semibold text-emerald-700">{geo}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </RevealWrapper>
        </div>
      </section>

      {/* ─── PRICING TIERS ─── */}
      <section className="py-20 lg:py-28 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <RevealWrapper>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <SectionLabel>Plans</SectionLabel>
              <h2
                className="font-display font-extrabold text-gray-900 tracking-tight mt-3"
                style={{ fontSize: "clamp(2rem, 3.5vw, 3rem)" }}
              >
                Choose your{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-500">
                  visibility level
                </span>
              </h2>
            </div>
          </RevealWrapper>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
            {TIERS.map((tier, i) => (
              <RevealWrapper key={tier.name} delay={i * 120}>
                <div
                  className={`relative rounded-2xl p-7 h-full flex flex-col transition-shadow duration-300 ${
                    tier.popular
                      ? "bg-gray-950 text-white shadow-2xl shadow-emerald-500/10 ring-2 ring-emerald-500/40"
                      : "glass-card bg-white hover:shadow-lg"
                  }`}
                >
                  {tier.popular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 text-xs font-bold text-white uppercase tracking-wider">
                      Most Popular
                    </div>
                  )}
                  <h3 className={`text-xl font-bold mb-1 ${tier.popular ? "text-white" : "text-gray-900"}`}>
                    {tier.name}
                  </h3>
                  <p className={`text-sm mb-5 ${tier.popular ? "text-gray-400" : "text-gray-500"}`}>
                    {tier.desc}
                  </p>
                  <p className={`text-3xl font-extrabold mb-6 ${tier.popular ? "text-emerald-400" : "text-gray-900"}`}>
                    {tier.price}
                  </p>
                  <ul className="space-y-3 mb-8 flex-1">
                    {tier.features.map((f) => (
                      <li key={f} className="flex items-start gap-2.5 text-sm">
                        <Check size={16} className={`shrink-0 mt-0.5 ${tier.popular ? "text-emerald-400" : "text-emerald-600"}`} />
                        <span className={tier.popular ? "text-gray-300" : "text-gray-600"}>{f}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/contact"
                    className={`w-full py-3.5 rounded-xl text-center text-sm font-bold transition-all duration-300 block ${
                      tier.popular
                        ? "bg-gradient-to-r from-emerald-500 to-teal-500 text-white hover:shadow-lg hover:shadow-emerald-500/25"
                        : "border-2 border-gray-200 text-gray-700 hover:border-emerald-500 hover:text-emerald-700"
                    }`}
                  >
                    Contact Us
                  </Link>
                </div>
              </RevealWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="py-20 lg:py-28 bg-gradient-to-br from-gray-950 via-emerald-950 to-gray-950 relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "radial-gradient(circle at 1px 1px, rgba(16,185,129,0.3) 1px, transparent 0)",
              backgroundSize: "40px 40px",
            }}
          />
        </div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-emerald-500/10 rounded-full blur-[150px]" />

        <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <RevealWrapper>
            <h2
              className="font-display font-extrabold text-white tracking-tight"
              style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}
            >
              Ready to be the{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
                AI&apos;s first answer?
              </span>
            </h2>
          </RevealWrapper>
          <RevealWrapper delay={100}>
            <p className="mt-5 text-lg text-gray-400 max-w-2xl mx-auto">
              Get a free AI visibility audit. We&apos;ll show you exactly how your brand appears in ChatGPT, Gemini, Perplexity, and more — and what to fix.
            </p>
          </RevealWrapper>
          <RevealWrapper delay={200}>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 px-10 py-4 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-bold text-base hover:shadow-lg hover:shadow-emerald-500/25 transition-all duration-300"
              >
                Get Free Audit
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href={`https://wa.me/${COMPANY.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-10 py-4 rounded-xl border border-white/20 text-white/90 font-semibold text-base hover:bg-white/5 transition-all duration-300"
              >
                <MessageSquare size={18} />
                WhatsApp Us
              </a>
            </div>
          </RevealWrapper>
        </div>
      </section>

      {/* Marquee keyframe */}
      <style jsx global>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </main>
  );
}
