"use client";

import Link from "next/link";
import { ArrowRight, Bot, GraduationCap, Blocks, LineChart, CheckCircle2 } from "lucide-react";
import { SectionLabel } from "@/components/ui/SectionLabel";

const AI_FEATURES = [
  { Icon: GraduationCap, title: "AI Training & Workshops",   desc: "Hands-on workshops that upskill your leadership and engineers on LLMs, RAG, and AI agents." },
  { Icon: Bot,           title: "Custom AI Agents",          desc: "Bespoke agents that automate workflows and act across your tools — built around your business." },
  { Icon: Blocks,        title: "AI Software & Integration", desc: "Custom models and RAG pipelines integrated securely into your existing systems." },
  { Icon: LineChart,     title: "Document Intelligence",     desc: "OCR, data extraction, and workflow automation on your own private data." },
];

const BULLETS = [
  "Fully private — your data never leaves your network",
  "Custom AI agents tailored to your workflows",
  "Hands-on AI workshops for leadership & engineering",
  "Trusted across 200+ enterprise environments",
];

export function AISection() {
  return (
    <section className="py-24 lg:py-32 bg-white" aria-labelledby="ai-title">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Top label */}
        <SectionLabel className="mb-4">AI Division</SectionLabel>

        {/* Main split layout */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left — text */}
          <div>
            <h2
              id="ai-title"
              className="font-display font-extrabold text-gray-900 tracking-tight mb-5"
              style={{ fontSize: "clamp(2rem, 3.5vw, 3rem)" }}
            >
              Enterprise AI,{" "}
              <span style={{ color: "#1D4ED8" }}>built for India.</span>
            </h2>
            <p className="text-gray-500 text-base leading-relaxed mb-8 max-w-lg">
              We help enterprises adopt Generative AI securely — training your teams, building custom AI agents, and integrating them into your own systems, with your own data.
            </p>

            <ul className="flex flex-col gap-3 mb-10">
              {BULLETS.map((b) => (
                <li key={b} className="flex items-start gap-3 text-sm text-gray-700">
                  <CheckCircle2 size={17} className="shrink-0 mt-0.5" style={{ color: "#1D4ED8" }} />
                  {b}
                </li>
              ))}
            </ul>

            <Link
              href="/ai-solutions"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-white transition-all duration-200 hover:opacity-90"
              style={{ background: "#1D4ED8" }}
            >
              Explore AI Solutions <ArrowRight size={15} />
            </Link>
          </div>

          {/* Right — feature cards 2x2 */}
          <div className="grid grid-cols-2 gap-4">
            {AI_FEATURES.map(({ Icon, title, desc }, i) => (
              <div
                key={title}
                className="rounded-2xl p-5 flex flex-col gap-3 transition-all duration-200 hover:shadow-md hover:-translate-y-0.5"
                style={{
                  background: i % 2 === 0 ? "#EFF6FF" : "#F5F7FA",
                  border: "1px solid #E5E7EB",
                }}
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                  style={{ background: "#1D4ED8" }}
                >
                  <Icon size={18} className="text-white" />
                </div>
                <h3 className="font-display font-bold text-gray-900 text-sm leading-snug">{title}</h3>
                <p className="text-xs text-gray-500 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
