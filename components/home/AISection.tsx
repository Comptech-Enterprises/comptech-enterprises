"use client";

import Link from "next/link";
import { ArrowRight, Bot, GraduationCap, Blocks, LineChart, Sparkles } from "lucide-react";
import { SectionLabel } from "@/components/ui/SectionLabel";

const CLIENTS = [
  "Diageo",
  "BCG",
  "DLF",
  "Casio",
  "ITC",
  "Starbucks India",
  "Zomato",
  "Pernod Ricard",
  "Leela Hotels",
  "Urban Company",
  "Bata India",
  "SRCC",
  "IIT Delhi",
  "Beanly Coffee",
  "Rebel Foods",
  "Coca-Cola",
  "HL Mando",
  "Shervani Hotels",
  "Summit Hotels",
  "William Grant & Sons",
  "Radico Khaitan",
  "Stanley",
  "Canara Bank",
  "Fabstract",
];

const AI_FEATURES = [
  {
    Icon: Bot,
    title: "Custom AI Agents",
    desc: "Bespoke autonomous agents that automate workflows and act across your tools — built specifically around your business.",
    tag: "Autonomous Workflows",
  },
  {
    Icon: GraduationCap,
    title: "AI Training & Workshops",
    desc: "Hands-on corporate workshops that upskill leadership and engineering teams on LLMs, RAG, and agentic systems.",
    tag: "Enterprise Enablement",
  },
  {
    Icon: Blocks,
    title: "AI Software & Integration",
    desc: "Custom models and RAG pipelines integrated securely into your existing systems with private, air-gapped hosting.",
    tag: "Private & Secure",
  },
  {
    Icon: LineChart,
    title: "Document Intelligence",
    desc: "Intelligent data extraction, OCR, and workflow automation applied directly to your own proprietary enterprise data.",
    tag: "Custom Intelligence",
  },
];

const BULLETS = [
  "Fully private — your data never leaves your network",
  "Custom AI agents tailored to your exact workflows",
  "Hands-on AI workshops for leadership & engineering",
  "Trusted across 200+ enterprise environments",
];

export function AISection() {
  return (
    <section className="py-20 lg:py-28 relative overflow-hidden" aria-labelledby="ai-title">
      {/* ── Customer Ticker (Single line, bigger size, no dots) ── */}
      <div className="w-full overflow-hidden mb-16 lg:mb-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-7">
          <div className="flex items-center gap-4">
            <div className="flex-1 h-px bg-gray-200/80" />
            <p className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.24em] text-gray-400 whitespace-nowrap">
              Organizations Working With Us
            </p>
            <div className="flex-1 h-px bg-gray-200/80" />
          </div>
        </div>

        <div className="relative overflow-hidden py-2">
          {/* Gradient Edge Masks for seamless infinite scroll */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-20 sm:w-36 bg-gradient-to-r from-[#F5F5F9] via-[#F5F5F9]/80 to-transparent z-10" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-20 sm:w-36 bg-gradient-to-l from-[#F5F5F9] via-[#F5F5F9]/80 to-transparent z-10" />

          {/* Single Continuous Big Ticker */}
          <div
            className="flex w-max gap-4 sm:gap-5 hover:[animation-play-state:paused]"
            style={{
              animation: "ticker-scroll 55s linear infinite",
            }}
          >
            {CLIENTS.concat(CLIENTS).map((client, i) => (
              <span
                key={`${client}-${i}`}
                className="shrink-0 inline-flex items-center px-8 sm:px-11 py-4 sm:py-5 rounded-full text-base sm:text-lg lg:text-xl font-bold text-gray-800 glass-card bg-white/80 border border-white/90 shadow-sm hover:border-gray-300 hover:bg-white hover:shadow-md transition-all whitespace-nowrap"
              >
                {client}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* ── AI Solutions Content (Matching Screenshot) ── */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header directly matching screenshot */}
        <div className="mb-14 max-w-3xl">
          <SectionLabel className="mb-3">AI SOLUTIONS</SectionLabel>
          <h2
            id="ai-title"
            className="font-display font-extrabold text-gray-900 tracking-tight leading-[1.12] mb-5"
            style={{ fontSize: "clamp(2.1rem, 4vw, 3.4rem)" }}
          >
            Tailored AI Solutions{" "}
            <span
              className="text-transparent bg-clip-text"
              style={{ backgroundImage: "linear-gradient(135deg, #8B1130 0%, #C0264A 55%, #7C3AED 100%)" }}
            >
              built around your business
            </span>
          </h2>
          <p className="text-gray-500 text-base sm:text-lg leading-relaxed max-w-2xl">
            Custom AI built around how you work — not off-the-shelf tools, not generic playbooks.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {AI_FEATURES.map(({ Icon, title, desc, tag }) => (
            <div
              key={title}
              className="glass-card rounded-3xl p-6 flex flex-col justify-between border border-white/70 bg-white/50 backdrop-blur-md shadow-xs hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div
                    className="w-12 h-12 rounded-2xl flex items-center justify-center shadow-xs"
                    style={{ background: "#FDF4F6" }}
                  >
                    <Icon size={22} style={{ color: "#5C0F26" }} />
                  </div>
                  <span className="text-[11px] font-semibold text-gray-400 uppercase tracking-wider">
                    {tag}
                  </span>
                </div>
                <h3 className="font-display font-bold text-gray-900 text-lg mb-2 leading-snug">
                  {title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Bar: Bullets & CTA */}
        <div className="mt-12 p-6 sm:p-8 rounded-3xl glass-card bg-white/60 border border-white/80 flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="flex flex-wrap items-center gap-x-8 gap-y-3">
            {BULLETS.map((bullet) => (
              <div key={bullet} className="flex items-center gap-2.5 text-xs sm:text-sm font-medium text-gray-700">
                <Sparkles size={15} style={{ color: "#5C0F26" }} className="shrink-0" />
                <span>{bullet}</span>
              </div>
            ))}
          </div>

          <Link
            href="/ai-solutions"
            className="shrink-0 inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-bold text-white shadow-md hover:scale-105 transition-all duration-200"
            style={{
              background: "linear-gradient(135deg, #5C0F26 0%, #E8435A 100%)",
              boxShadow: "0 8px 24px rgba(92, 15, 38, 0.25)",
            }}
          >
            Explore AI Solutions <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
