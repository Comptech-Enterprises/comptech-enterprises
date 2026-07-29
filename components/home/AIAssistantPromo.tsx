"use client";

import Link from "next/link";
import { ArrowRight, CalendarClock, Video, FileText, Sparkles } from "lucide-react";
import { NeuralBall } from "@/components/ui/NeuralBall";
import { RevealWrapper } from "@/components/ui/RevealWrapper";
import { NeuralField } from "@/components/ui/NeuralField";

const CAPABILITIES = [
  { Icon: CalendarClock, title: "Schedules your consults", desc: "Books site surveys and meetings straight into your calendar." },
  { Icon: Video, title: "Joins visual meetings", desc: "Sits in on calls, captures context, and follows up with actions." },
  { Icon: FileText, title: "Summarises & assigns", desc: "Turns every conversation into clear notes and next steps." },
  { Icon: Sparkles, title: "Answers around the clock", desc: "Qualifies leads and helps customers 24/7, in plain language." },
];

export function AIAssistantPromo() {
  return (
    <section
      className="relative overflow-hidden py-20 lg:py-28"
      style={{ background: "linear-gradient(135deg, #160C2E 0%, #2A1140 45%, #3F0A1A 100%)" }}
      aria-labelledby="assistant-title"
    >
      <div className="absolute inset-0">
        <NeuralField color="255, 255, 255" opacity={0.14} density={30} />
      </div>

      {/* Ambient glows */}
      <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full blur-3xl opacity-30 pointer-events-none" style={{ background: "#7C3AED" }} />
      <div className="absolute -bottom-32 right-0 w-96 h-96 rounded-full blur-3xl opacity-25 pointer-events-none" style={{ background: "#E8435A" }} />

      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Left — orb */}
        <RevealWrapper direction="left" className="flex justify-center order-1 lg:order-none">
          <NeuralBall size={440} nodes={120} accent="#8B5CF6" light="#C4B5FD" className="max-w-full h-auto" />
        </RevealWrapper>

        {/* Right — copy */}
        <RevealWrapper direction="right" delay={80}>
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 mb-6">
            <Sparkles size={13} className="text-violet-300" />
            <span className="text-[12px] font-semibold tracking-wide text-violet-200">Comptech AI Assistant</span>
          </div>

          <h2
            id="assistant-title"
            className="font-display font-extrabold text-white leading-[1.1] tracking-tight mb-5"
            style={{ fontSize: "clamp(2rem, 4vw, 3.2rem)" }}
          >
            An AI assistant that{" "}
            <span
              className="text-transparent bg-clip-text"
              style={{ backgroundImage: "linear-gradient(120deg, #C4B5FD, #F0A6B9)" }}
            >
              sits in your meetings
            </span>
          </h2>
          <p className="text-lg text-white/70 leading-relaxed max-w-lg mb-8">
            We design and deploy assistants that schedule consults, join your visual meetings,
            capture notes, and follow up — so nothing slips and every lead gets a fast, human reply.
          </p>

          <div className="grid sm:grid-cols-2 gap-x-6 gap-y-5 mb-9">
            {CAPABILITIES.map(({ Icon, title, desc }) => (
              <div key={title} className="flex gap-3">
                <div className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0 border border-white/10" style={{ background: "rgba(255,255,255,0.05)" }}>
                  <Icon size={17} className="text-violet-200" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-white leading-tight mb-1">{title}</p>
                  <p className="text-[13px] text-white/55 leading-snug">{desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-3">
            <Link
              href="/contact#quote"
              className="inline-flex items-center gap-2 rounded-full px-7 py-3.5 font-semibold text-sm text-white transition-all duration-300 hover:-translate-y-px"
              style={{ background: "linear-gradient(120deg, #7C3AED, #E8435A)", boxShadow: "0 10px 30px rgba(124,58,237,0.35)" }}
            >
              Book a consult <ArrowRight size={16} />
            </Link>
            <Link
              href="/ai-solutions"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-7 py-3.5 font-semibold text-sm text-white hover:bg-white/10 hover:border-white/40 transition-all duration-300"
            >
              See AI solutions
            </Link>
          </div>
        </RevealWrapper>
      </div>
    </section>
  );
}
