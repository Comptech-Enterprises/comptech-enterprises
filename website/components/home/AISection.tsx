"use client";

import Link from "next/link";
import { ArrowRight, BrainCircuit, GraduationCap, Blocks, LineChart, CheckCircle2 } from "lucide-react";
import { SectionLabel } from "@/components/ui/SectionLabel";

const AI_FEATURES = [
  { Icon: BrainCircuit, title: "NVIDIA GPU Infrastructure",  desc: "OEM-certified GPU servers for ML, deep learning, and inference workloads." },
  { Icon: GraduationCap, title: "AI Enablement Workshops",   desc: "Train your teams on LLMs, RAG, and AI agent frameworks." },
  { Icon: Blocks,        title: "No-Code AI Platform",       desc: "Private, self-hosted AI builder — secure chatbots inside your network." },
  { Icon: LineChart,     title: "Document Intelligence",     desc: "OCR, data extraction, and workflow automation on your local data." },
];

const STATS = [
  { value: "50+",  label: "AI Projects" },
  { value: "400+", label: "Hours Saved/mo" },
  { value: "100%", label: "On-Premise" },
  { value: "24/7", label: "AI Support" },
];

const BULLETS = [
  "Fully private — your data never leaves your network",
  "Certified NVIDIA infrastructure partners",
  "Custom AI workshops for leadership & engineering",
  "Deployed in 200+ enterprise environments",
];

export function AISection() {
  return (
    <section className="py-24 lg:py-32 bg-white" aria-labelledby="ai-title">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Top label */}
        <SectionLabel className="mb-4">AI Division</SectionLabel>

        {/* Main split layout */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">

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
              We help enterprises adopt Generative AI and machine learning securely — inside your own network, with your own data. From GPU hardware to team enablement.
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

        {/* Stats bar */}
        <div
          className="grid grid-cols-2 md:grid-cols-4 rounded-2xl overflow-hidden"
          style={{ background: "#1D4ED8" }}
        >
          {STATS.map(({ value, label }, i) => (
            <div
              key={label}
              className="px-8 py-7 text-center"
              style={{ borderRight: i < STATS.length - 1 ? "1px solid rgba(255,255,255,0.15)" : "none" }}
            >
              <p className="font-display font-extrabold text-white text-3xl mb-1">{value}</p>
              <p className="text-xs font-medium text-white/60 uppercase tracking-widest">{label}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
