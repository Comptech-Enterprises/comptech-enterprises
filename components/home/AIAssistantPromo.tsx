"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Video, Megaphone, Target, Sparkles } from "lucide-react";
import { NeuralBall } from "@/components/ui/NeuralBall";
import { RevealWrapper } from "@/components/ui/RevealWrapper";
import { NeuralField } from "@/components/ui/NeuralField";

const CARDS = [
  {
    Icon: Video,
    kicker: "AI Assistant",
    title: "AI for meetings",
    desc: "An assistant that sits in your calls, captures context, writes clear notes, and follows up with action items.",
    accent: "#8B5CF6",
  },
  {
    Icon: Megaphone,
    kicker: "AI Social",
    title: "AI for social media",
    desc: "Agents that plan, draft, and schedule content — keeping your brand active and consistent across channels.",
    accent: "#C77DFF",
  },
  {
    Icon: Target,
    kicker: "AI Lead-gen",
    title: "AI for lead generation",
    desc: "Agents that capture, qualify, and follow up on leads around the clock, so none ever go cold.",
    accent: "#E8435A",
  },
];

export function AIAssistantPromo() {
  return (
    <section
      className="relative overflow-hidden py-20 lg:py-24"
      style={{ background: "linear-gradient(135deg, #160C2E 0%, #2A1140 45%, #3F0A1A 100%)" }}
      aria-labelledby="assistant-title"
    >
      <div className="absolute inset-0">
        <NeuralField color="255, 255, 255" opacity={0.14} density={30} />
      </div>
      <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full blur-3xl opacity-30 pointer-events-none" style={{ background: "#7C3AED" }} />
      <div className="absolute -bottom-32 right-0 w-96 h-96 rounded-full blur-3xl opacity-25 pointer-events-none" style={{ background: "#E8435A" }} />

      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8">
        {/* small orb, top-right corner */}
        <div className="hidden lg:block absolute top-0 right-8 pointer-events-none">
          <NeuralBall size={170} nodes={80} accent="#8B5CF6" light="#C4B5FD" className="max-w-full h-auto" />
        </div>

        {/* Heading */}
        <RevealWrapper className="max-w-2xl mb-12 lg:mb-14">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 mb-6">
            <Sparkles size={13} className="text-violet-300" />
            <span className="text-[12px] font-semibold tracking-wide text-violet-200">Comptech AI Assistant</span>
          </div>
          <h2
            id="assistant-title"
            className="font-display font-extrabold text-white leading-[1.1] tracking-tight mb-5"
            style={{ fontSize: "clamp(2rem, 4vw, 3.2rem)" }}
          >
            AI that{" "}
            <span
              className="text-transparent bg-clip-text"
              style={{ backgroundImage: "linear-gradient(120deg, #C4B5FD, #F0A6B9)" }}
            >
              works across your business
            </span>
          </h2>
          <p className="text-lg text-white/70 leading-relaxed">
            Training that upskills your team, social agents that keep your brand active, and
            lead-gen agents that never let a prospect go cold — built and maintained by Comptech.
          </p>
        </RevealWrapper>

        {/* Three cards */}
        <div className="grid gap-6 md:grid-cols-3">
          {CARDS.map((card, i) => {
            const { Icon } = card;
            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: i * 0.12 }}
                className="group relative rounded-3xl border border-white/10 p-7 overflow-hidden transition-colors duration-300 hover:border-white/25"
                style={{ background: "linear-gradient(160deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.02) 100%)" }}
              >
                <div
                  className="pointer-events-none absolute -top-16 -right-16 w-44 h-44 rounded-full blur-3xl opacity-30 group-hover:opacity-50 transition-opacity duration-300"
                  style={{ background: card.accent }}
                />
                <div className="relative flex items-center gap-3 mb-5">
                  <div
                    className="w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 border border-white/10"
                    style={{ background: `${card.accent}22` }}
                  >
                    <Icon size={22} style={{ color: card.accent }} />
                  </div>
                  <span className="text-[11px] font-bold uppercase tracking-[0.16em] text-white/45">
                    {String(i + 1).padStart(2, "0")} · {card.kicker}
                  </span>
                </div>
                <h3 className="relative font-display font-extrabold text-white text-xl lg:text-[1.4rem] leading-tight mb-2.5">
                  {card.title}
                </h3>
                <p className="relative text-[15px] text-white/60 leading-relaxed">{card.desc}</p>
              </motion.div>
            );
          })}
        </div>

        {/* CTAs */}
        <div className="flex flex-wrap gap-3 mt-12">
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
      </div>
    </section>
  );
}
