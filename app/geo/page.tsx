import type { Metadata } from "next";
import Link from "next/link";
import {
  CheckCircle2,
  ArrowRight,
  Search,
  MessageSquare,
  Lightbulb,
  TrendingUp,
  Zap,
  Shield,
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
  alternates: { canonical: "/geo" },
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: "Comptech Enterprises",
    title: "GEO Services — Generative Engine Optimization | Comptech Enterprises",
    description:
      "Get your brand cited, recommended, and ranked inside ChatGPT, Google Gemini, Perplexity, and Claude.",
    images: [{ url: "/images/logo.webp" }],
  },
};

const AI_ENGINES = [
  { name: "OpenAI", Logo: OpenAILogo, color: "#10A37F" },
  { name: "Anthropic", Logo: AnthropicLogo, color: "#D97706" },
  { name: "Google Gemini", Logo: GeminiLogo, color: "#4285F4" },
  { name: "Perplexity", Logo: PerplexityLogo, color: "#1A1A2E" },
  { name: "Grok", Logo: GrokLogo, color: "#000000" },
  { name: "Meta AI", Logo: MetaAILogo, color: "#0668E1" },
];

const WHAT_IS_GEO = [
  {
    icon: Search,
    title: "Beyond Traditional SEO",
    desc: "SEO optimizes for Google's link-based results. GEO optimizes for AI engines that synthesize answers from multiple sources and cite brands directly in their responses.",
  },
  {
    icon: MessageSquare,
    title: "AI-First Discovery",
    desc: "Millions of users now ask ChatGPT, Perplexity, and Gemini instead of searching Google. If your brand isn't in those answers, you're invisible to a growing audience.",
  },
  {
    icon: TrendingUp,
    title: "Citation Over Clicks",
    desc: "In AI search, the goal isn't a blue link — it's being the brand that AI engines name, recommend, and cite when users ask about your industry or product category.",
  },
];


const PROCESS_STEPS = [
  { step: "01", title: "AI Visibility Audit", desc: "We query all major AI engines with your industry keywords and map where your brand is cited, missed, or misrepresented." },
  { step: "02", title: "Content & Authority Gap Analysis", desc: "Identify what content and authority signals are missing that prevent AI engines from citing you." },
  { step: "03", title: "GEO Strategy & Execution", desc: "Execute content restructuring, schema implementation, authority building, and entity optimization." },
  { step: "04", title: "Monitor & Optimize", desc: "Continuous monitoring across all AI engines with monthly reports and iterative optimization." },
];

const WHY_COMPTECH = [
  { icon: Zap, title: "AI-Native Team", desc: "Our GEO specialists work with LLMs daily and understand how these models select, rank, and cite sources." },
  { icon: Shield, title: "Data-Driven Approach", desc: "Every recommendation backed by real citation data from live AI engine queries — not guesswork." },
  { icon: Lightbulb, title: "Full-Stack AI Expertise", desc: "As an AI company ourselves, we understand the technology behind generative engines — not just the marketing layer." },
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
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-base font-bold text-white shadow-xl hover:scale-105 transition-all duration-200"
              style={{
                background: "linear-gradient(135deg, #5C0F26 0%, #E8435A 100%)",
                boxShadow: "0 10px 30px rgba(92, 15, 38, 0.25)",
              }}
            >
              Get a GEO Audit <ArrowRight size={16} />
            </Link>
            <a
              href="#what-is-geo"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-base font-semibold text-gray-700 border border-gray-200 bg-white hover:border-gray-300 hover:bg-gray-50 transition-all duration-200"
            >
              Learn More
            </a>
          </>
        }
      />

      {/* ChatGPT-style mock demo */}
      <section className="py-12 lg:py-16 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="text-center text-xs font-semibold text-gray-400 uppercase tracking-widest mb-8">
            This Is What GEO Looks Like in Action
          </p>
          <ChatMock />
        </div>
      </section>

      {/* ── AI Engines Ticker ── */}
      <section className="py-10 bg-gray-50 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="text-center text-xs font-semibold text-gray-400 uppercase tracking-widest mb-6">
            Optimize for Every Major AI Engine
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {AI_ENGINES.map((engine) => {
              const Logo = engine.Logo;
              return (
                <div
                  key={engine.name}
                  className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-white border border-gray-200 shadow-sm"
                >
                  <Logo className="w-5 h-5" />
                  <span className="text-sm font-semibold text-gray-700">{engine.name}</span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <main>
        {/* ── What is GEO ── */}
        <section id="what-is-geo" className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <RevealWrapper className="text-center mb-14">
              <SectionLabel className="justify-center">What is GEO?</SectionLabel>
              <h2 className="font-display font-extrabold text-display-md text-gray-900">
                The Next Evolution of Search Optimization
              </h2>
              <p className="mt-4 text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed">
                Generative Engine Optimization is the practice of optimizing your brand, content, and digital presence to be cited and recommended by AI-powered search engines.
              </p>
            </RevealWrapper>

            <div className="grid md:grid-cols-3 gap-6">
              {WHAT_IS_GEO.map((item, i) => {
                const Icon = item.icon;
                return (
                  <RevealWrapper key={item.title} delay={i * 100}>
                    <div className="bg-gray-50 border border-gray-200 rounded-3xl p-8 h-full card-lift">
                      <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5" style={{ background: "#FDF4F6" }}>
                        <Icon size={22} className="text-[#5C0F26]" />
                      </div>
                      <h3 className="font-display font-bold text-lg text-gray-900 mb-3">{item.title}</h3>
                      <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
                    </div>
                  </RevealWrapper>
                );
              })}
            </div>
          </div>
        </section>



        <GEOStats />

        {/* ── Process ── */}
        <section className="py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <RevealWrapper className="text-center mb-14">
              <SectionLabel className="justify-center">Our Process</SectionLabel>
              <h2 className="font-display font-extrabold text-display-md text-gray-900">
                How We Make AI Engines Cite Your Brand
              </h2>
            </RevealWrapper>

            <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {PROCESS_STEPS.map((step, i) => (
                <RevealWrapper key={step.step} delay={i * 100}>
                  <div className="text-center">
                    <div className="w-14 h-14 rounded-2xl bg-[#5C0F26] text-white font-display font-extrabold text-lg flex items-center justify-center mx-auto mb-5">
                      {step.step}
                    </div>
                    <h3 className="font-display font-bold text-base text-gray-900 mb-2">{step.title}</h3>
                    <p className="text-sm text-gray-500 leading-relaxed">{step.desc}</p>
                  </div>
                </RevealWrapper>
              ))}
            </div>
          </div>
        </section>

        {/* ── Why Comptech ── */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <RevealWrapper>
                <SectionLabel>Why Comptech for GEO</SectionLabel>
                <h2 className="font-display font-extrabold text-display-md text-gray-900 mb-5">
                  GEO by an AI Company, Not a Marketing Agency
                </h2>
                <p className="text-lg text-gray-500 leading-relaxed mb-8">
                  Most agencies treat GEO as repackaged SEO. Comptech builds AI agents and trains enterprise teams on LLMs — we understand how these models work from the inside, not just the marketing surface.
                </p>
                <Link
                  href="/contact#quote"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-base font-bold text-white shadow-xl hover:scale-105 transition-all duration-200"
                  style={{
                    background: "linear-gradient(135deg, #5C0F26 0%, #E8435A 100%)",
                    boxShadow: "0 10px 30px rgba(92, 15, 38, 0.25)",
                  }}
                >
                  Start GEO Audit <ArrowRight size={16} />
                </Link>
              </RevealWrapper>

              <RevealWrapper delay={150} className="flex flex-col gap-4">
                {WHY_COMPTECH.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={item.title}
                      className="p-6 rounded-3xl bg-gray-50 border border-gray-200 flex items-start gap-4 transition-all duration-200 hover:bg-white hover:shadow-md hover:border-gray-300"
                    >
                      <div className="w-12 h-12 rounded-2xl flex items-center justify-center shrink-0" style={{ background: "#FDF4F6" }}>
                        <Icon size={22} className="text-[#5C0F26]" />
                      </div>
                      <div>
                        <h3 className="font-display font-bold text-gray-900 text-lg mb-1">{item.title}</h3>
                        <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </RevealWrapper>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}
