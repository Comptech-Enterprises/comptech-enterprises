import type { Metadata } from "next";
import Link from "next/link";
import {
  CheckCircle2,
  ArrowRight,
  Lightbulb,
  Zap,
  Shield,
  Sparkles,
  Bot,
} from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageHero } from "@/components/sections/PageHero";
import { RevealWrapper } from "@/components/ui/RevealWrapper";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { ChatMock } from "@/components/geo/ChatMock";
import { GEOStats } from "@/components/geo/GEOStats";
import {
  OpenAILogo,
  AnthropicLogo,
  GeminiLogo,
  PerplexityLogo,
  GrokLogo,
  MetaAILogo,
} from "@/components/geo/AIEngineLogos";
import { GEOTrustStrip } from "@/components/geo/GEOTrustStrip";
import { GEOFAQ } from "@/components/geo/GEOFAQ";
import TechText from "@/components/reactbits/TechText";
import OptionWheel from "@/components/reactbits/OptionWheel";
import LogoLoop from "@/components/reactbits/LogoLoop";
import { GEOCarouselSection } from "@/components/geo/GEOCarouselSection";
import { GEOAuditFolder } from "@/components/geo/GEOAuditFolder";

export const metadata: Metadata = {
  title: "GEO Services — Generative Engine Optimization",
  description:
    "Get your brand cited, recommended, and ranked inside ChatGPT, Google Gemini, Perplexity, and Claude. Comptech's GEO services optimize your digital presence for AI search engines.",
  keywords: [
    "GEO",
    "Generative Engine Optimization",
    "AI SEO",
    "ChatGPT ranking",
    "AI search optimization",
    "Perplexity optimization",
    "Google AI Overviews",
  ],
  alternates: { canonical: "https://comptech.in/geo" },
  openGraph: {
    title: "GEO Services — Generative Engine Optimization | Comptech Enterprises",
    description:
      "Get your brand cited, recommended, and ranked inside ChatGPT, Google Gemini, Perplexity, and Claude.",
    siteName: "Comptech Enterprises",
    locale: "en_IN",
    images: [{ url: "/images/logo.webp" }],
  },
};

const AI_ENGINES = [
  { name: "OpenAI", Logo: OpenAILogo },
  { name: "Anthropic", Logo: AnthropicLogo },
  { name: "Google Gemini", Logo: GeminiLogo },
  { name: "Perplexity", Logo: PerplexityLogo },
  { name: "Grok", Logo: GrokLogo },
  { name: "Meta AI", Logo: MetaAILogo },
];

const WHY_COMPTECH = [
  {
    id: "ai-native",
    iconName: "zap",
    title: "AI-Native Team",
    tag: "Autonomous Agent Builders",
    desc: "Our engineers build autonomous LLM agents and multi-agent workflows daily. We understand how transformer architectures calculate attention, rank semantic similarity, and select cited sources from the inside out.",
    metric: "100% In-House AI Engineers",
  },
  {
    id: "data-backed",
    iconName: "shield",
    title: "Data-Backed Citation Engineering",
    tag: "Empirical Multi-LLM Testing",
    desc: "Every recommendation is grounded in live prompt testing and citation frequency data across 6 major AI engines — OpenAI, Gemini, Perplexity, Claude, Grok, and Meta AI. No generic marketing guesswork.",
    metric: "6 Major AI Engines Tested",
  },
  {
    id: "full-stack",
    iconName: "lightbulb",
    title: "Full-Stack AI Authority",
    tag: "Knowledge Graph Architecture",
    desc: "As an enterprise AI company, we combine technical schema, knowledge graph engineering, vector database indexing, and brand entity positioning into a complete end-to-end GEO citation engine.",
    metric: "Full Knowledge Graph Integration",
  },
];

export default function GEOPage() {
  return (
    <>
      <Navbar />
      <PageHero
        light
        badge="GEO Services"
        title={
          <>
            Get Your Brand Cited by{" "}
            <span
              className="text-transparent bg-clip-text"
              style={{ backgroundImage: "linear-gradient(135deg, #5C0F26, #E8435A)" }}
            >
              AI Search Engines
            </span>
          </>
        }
        subtitle="Generative Engine Optimization (GEO) ensures your brand is recommended, cited, and ranked inside ChatGPT, Google Gemini, Perplexity, and every AI-powered search engine."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "AI Solutions", href: "/ai-solutions" }, { label: "GEO" }]}
        actions={
          <>
            <Link
              href="/contact#quote"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-base font-bold text-white shadow-xl hover:scale-105 hover:shadow-2xl transition-all duration-300"
              style={{
                background: "linear-gradient(135deg, #5C0F26 0%, #E8435A 100%)",
                boxShadow: "0 10px 30px rgba(92, 15, 38, 0.25)",
              }}
            >
              Get a GEO Audit <ArrowRight size={16} />
            </Link>
            <a
              href="#methodology"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-base font-semibold text-gray-700 border border-gray-200 bg-white hover:border-gray-300 hover:bg-gray-50 hover:shadow-md transition-all duration-300"
            >
              Learn How GEO Works
            </a>
          </>
        }
      />

      {/* ChatGPT-style interactive mock demo */}
      <section className="py-12 lg:py-16 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-8">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold text-gray-500 bg-gray-100 border border-gray-200/60 uppercase tracking-widest mb-3">
              <Bot size={14} className="text-[#5C0F26]" />
              Live Simulation
            </span>
            <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-gray-900 tracking-tight">
              This Is What GEO Looks Like in Action
            </h2>
            <p className="text-sm text-gray-500 max-w-xl mx-auto mt-2 mb-3">
              When prospective clients query AI about your industry, GEO ensures your brand is the verified, cited answer.
            </p>

            {/* Interactive TechText Canvas Reveal */}
            <div className="w-full h-[65px] sm:h-[85px] relative max-w-xs sm:max-w-md mx-auto mb-3">
              <TechText
                text="AI SEARCH"
                fontWeight={800}
                fontSize={64}
                color="#5C0F26"
                accentColor="#E8435A"
                lineStyle="solid"
                reveal="letter"
                specks={0}
              />
            </div>
          </div>
          <ChatMock />
        </div>
      </section>

      {/* ── AI Engines Logo Strip (ReactBits LogoLoop) ── */}
      <section className="py-12 sm:py-14 bg-gradient-to-b from-white via-gray-50/70 to-white border-y border-gray-100 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-xs font-bold text-gray-400 uppercase tracking-[0.18em] mb-7 sm:mb-9">
            Optimize for Every Major AI Engine
          </p>

          <LogoLoop speed={32} gap={20} pauseOnHover={true} repeat={3}>
            {AI_ENGINES.map((engine) => {
              const Logo = engine.Logo;
              return (
                <div
                  key={engine.name}
                  className="inline-flex items-center gap-3 px-5 py-2.5 sm:px-6 sm:py-3 rounded-full bg-white border border-gray-200/90 shadow-[0_2px_8px_rgba(0,0,0,0.04)] hover:shadow-xl hover:border-gray-400 hover:-translate-y-1 transition-all duration-300 select-none cursor-default group"
                >
                  <Logo className="w-5 h-5 shrink-0 text-gray-900 group-hover:scale-110 transition-transform duration-200" />
                  <span className="text-sm font-semibold text-gray-800 tracking-tight whitespace-nowrap">
                    {engine.name}
                  </span>
                </div>
              );
            })}
          </LogoLoop>

          <p className="text-center text-xs text-gray-400 mt-6">
            Multi-LLM Citation Optimization • Entity Graph Alignment • Real-Time Answer Indexing
          </p>
        </div>
      </section>

      <main>
        {/* ── GEO Market Trends & Impact Stats (with line graph) ── */}
        <GEOStats />

        {/* ── Interactive 3D Methodology Carousel (replaces static 4-step grid) ── */}
        <section id="methodology">
          <GEOCarouselSection />
        </section>

        {/* ── Enterprise Client Trust ── */}
        <GEOTrustStrip />

        {/* ── Why Comptech ── */}
        <section className="py-20 lg:py-28 bg-gray-50/70 border-t border-gray-100">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <RevealWrapper className="text-center max-w-3xl mx-auto mb-12">
              <SectionLabel className="justify-center">Why Comptech for GEO</SectionLabel>

              <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-gray-900 mb-5 leading-tight tracking-tight mt-3">
                GEO Engineered by{" "}
                <span className="text-transparent bg-clip-text" style={{ backgroundImage: "linear-gradient(135deg, #5C0F26, #E8435A)" }}>
                  AI Specialists
                </span>
                , Not a Marketing Agency
              </h2>
              <p className="text-base sm:text-lg text-gray-500 leading-relaxed">
                Most marketing agencies treat GEO as repackaged blog writing. Comptech builds production autonomous agents, fine-tunes LLMs, and trains enterprise teams — we know precisely how LLM attention and retrieval algorithms select their sources.
              </p>
            </RevealWrapper>

            {/* Interactive 3D OptionWheel */}
            <OptionWheel options={WHY_COMPTECH} />

            <div className="text-center mt-12">
              <Link
                href="/contact#quote"
                className="inline-flex items-center gap-2 px-9 py-4 rounded-full text-base font-bold text-white shadow-xl hover:scale-105 hover:shadow-2xl transition-all duration-300"
                style={{
                  background: "linear-gradient(135deg, #5C0F26 0%, #E8435A 100%)",
                  boxShadow: "0 10px 30px rgba(92, 15, 38, 0.25)",
                }}
              >
                Start Your GEO Audit <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </section>

        {/* ── Frequently Asked Questions ── */}
        <GEOFAQ />

        {/* ── High-Converting GEO Audit CTA Banner ── */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div
              className="rounded-4xl p-8 sm:p-12 lg:p-16 text-white relative overflow-hidden shadow-2xl"
              style={{
                background: "linear-gradient(135deg, #3F0A1A 0%, #5C0F26 50%, #7A1534 100%)",
              }}
            >
              {/* Ambient decorative glow */}
              <div
                className="absolute -right-20 -top-20 w-96 h-96 rounded-full pointer-events-none blur-3xl opacity-30"
                style={{ background: "#E8435A" }}
              />
              <div
                className="absolute -left-32 -bottom-32 w-80 h-80 rounded-full pointer-events-none blur-3xl opacity-15"
                style={{ background: "#E8435A" }}
              />

              <div className="relative z-10 grid lg:grid-cols-12 gap-10 items-center">
                <div className="lg:col-span-7">
                  <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-white/10 border border-white/20 mb-6 backdrop-blur-sm">
                    <Sparkles size={13} className="text-pink-300" />
                    Free Strategic Assessment
                  </div>

                  <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight mb-5 leading-tight">
                    Discover Where AI Search Engines Currently{" "}
                    <span className="text-transparent bg-clip-text" style={{ backgroundImage: "linear-gradient(135deg, #FF7B93, #FFB3C1)" }}>
                      Rank Your Brand
                    </span>
                  </h2>

                  <p className="text-base sm:text-lg text-white/80 leading-relaxed mb-8">
                    We will run your top 10 commercial search queries through ChatGPT, Google Gemini, Perplexity, and Claude to deliver a comprehensive AI Visibility Scorecard.
                  </p>

                  <div className="grid sm:grid-cols-3 gap-4 mb-10 pt-4 border-t border-white/15">
                    <div className="flex items-center gap-2.5">
                      <CheckCircle2 size={18} className="text-pink-300 shrink-0" />
                      <span className="text-sm font-semibold text-white/90">Multi-LLM Citation Gap Map</span>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <CheckCircle2 size={18} className="text-pink-300 shrink-0" />
                      <span className="text-sm font-semibold text-white/90">Entity Authority Scorecard</span>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <CheckCircle2 size={18} className="text-pink-300 shrink-0" />
                      <span className="text-sm font-semibold text-white/90">90-Day GEO Action Plan</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-4 items-center">
                    <Link
                      href="/contact#quote"
                      className="inline-flex items-center gap-2 px-9 py-4 rounded-full text-base font-bold text-[#5C0F26] bg-white hover:bg-gray-100 hover:scale-105 shadow-xl hover:shadow-2xl transition-all duration-300"
                    >
                      Claim Your Free GEO Audit <ArrowRight size={17} />
                    </Link>
                    <span className="text-xs text-white/60">
                      No obligations • 48-hour delivery
                    </span>
                  </div>
                </div>

                {/* Right Column: Interactive 3D FolderFloat with zero-gravity audit deliverables */}
                <div className="lg:col-span-5 flex flex-col items-center justify-center pt-6 lg:pt-0">
                  <GEOAuditFolder />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
