"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Bot,
  MessageSquare,
  Calendar,
  ArrowRight,
  Zap,
  Target,
  TrendingUp,
  Clock,
} from "lucide-react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { SalesWorkflowVisualizer } from "./SalesWorkflowVisualizer";
import { SalesWorkflowExcalidraw } from "./SalesWorkflowExcalidraw";
import Link from "next/link";

/* ------------------------------------------------------------------ */
/*  Other agents — coming soon cards                                   */
/* ------------------------------------------------------------------ */

const OTHER_AGENTS = [
  {
    id: "social-agent",
    icon: MessageSquare,
    title: "Social AI Agent",
    description:
      "Monitors brand mentions, drafts on-brand replies, schedules content, and analyzes engagement — across every platform.",
    status: "Coming Soon",
    gradient: "from-pink-500 to-rose-600",
  },
  {
    id: "meeting-agent",
    icon: Calendar,
    title: "Meet AI Agent",
    description:
      "Coordinates scheduling, sends agendas, takes meeting notes, extracts action items, and follows up — automatically.",
    status: "Coming Soon",
    gradient: "from-violet-500 to-purple-600",
  },
];

/* ------------------------------------------------------------------ */
/*  Stats                                                              */
/* ------------------------------------------------------------------ */

const STATS = [
  { icon: Clock, value: "10x", label: "Faster Outreach" },
  { icon: Target, value: "3x", label: "More Qualified Leads" },
  { icon: TrendingUp, value: "85%", label: "Reply Rate Lift" },
  { icon: Zap, value: "24/7", label: "Always Running" },
];

/* ------------------------------------------------------------------ */
/*  Main client component                                              */
/* ------------------------------------------------------------------ */

export function AIAgentsClient() {
  const statsRef = useRef<HTMLDivElement>(null);
  const statsInView = useInView(statsRef, { once: true, margin: "-40px" });

  return (
    <>
      {/* ── Sales AI Agent Workflow Visualizer (Technical Live Simulation) ── */}
      <section id="sales-agent" className="relative py-16 lg:py-24 bg-white overflow-hidden border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-10 lg:mb-12">
            <SectionLabel className="justify-center">Sales AI Agent</SectionLabel>
            <h2
              className="font-display font-extrabold text-gray-900 tracking-tight mt-3 mb-4"
              style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)" }}
            >
              From cold list to warm conversation —{" "}
              <span className="text-transparent bg-clip-text" style={{ backgroundImage: "linear-gradient(135deg, #5C0F26, #E8435A 60%, #7C3AED)" }}>
                fully automated
              </span>
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto leading-relaxed text-base sm:text-lg">
              Our Sales AI agent handles the entire top-of-funnel pipeline: prospecting,
              research, outreach, and follow-ups — while you focus on closing deals.
            </p>
          </div>

          {/* Cinematic Interactive Workflow Console */}
          <SalesWorkflowVisualizer />

          {/* Call to Action */}
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact#quote"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl text-sm font-bold text-white transition-all duration-200 hover:opacity-90 hover:scale-[1.02] shadow-xl"
              style={{
                background: "linear-gradient(135deg, #5C0F26, #E8435A)",
                boxShadow: "0 4px 24px rgba(92,15,38,0.35)",
              }}
            >
              Deploy Sales AI for Your Team <ArrowRight size={16} />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl text-sm font-semibold text-gray-700 border border-gray-200 bg-white hover:border-[#5C0F26]/30 hover:text-[#5C0F26] transition-all shadow-sm"
            >
              Book a Live Demo
            </Link>
          </div>
        </div>
      </section>

      {/* ── Sales AI Agent: Excalidraw Whiteboard Architecture ── */}
      <section id="sales-agent-whiteboard" className="relative py-16 lg:py-24 bg-gradient-to-b from-gray-50 via-white to-gray-50/60 overflow-hidden border-b border-gray-100">
        <div className="w-full max-w-[1720px] mx-auto px-3 sm:px-6 lg:px-10 relative z-10">
          <div className="text-center mb-10 lg:mb-12 max-w-3xl mx-auto">
            <SectionLabel className="justify-center">System Architecture</SectionLabel>
            <h2
              className="font-display font-extrabold text-gray-900 tracking-tight mt-3 mb-3"
              style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)" }}
            >
              Visualized in{" "}
              <span className="font-handwritten text-[#6965DB] text-4xl sm:text-5xl lg:text-6xl font-bold ml-1">
                Excalidraw Style
              </span>
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto leading-relaxed text-base sm:text-lg">
              Explore the end-to-end data pipeline from initial prospect scanning to the final booked calendar invite in a hand-drawn whiteboard view.
            </p>
          </div>

          {/* Excalidraw Interactive Canvas Component */}
          <SalesWorkflowExcalidraw />
        </div>
      </section>

      {/* ── Stats bar ── */}
      <section className="py-14 bg-gray-50 border-y border-gray-100">
        <div ref={statsRef} className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {STATS.map((stat, i) => (
              <motion.div
                key={stat.label}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={statsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: i * 0.1 }}
              >
                <stat.icon size={20} className="mx-auto mb-2 text-[#5C0F26]/60" />
                <div className="font-display font-extrabold text-2xl sm:text-3xl text-gray-900">
                  {stat.value}
                </div>
                <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider mt-1">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Other Agents — Coming Soon ── */}
      <section id="more-agents" className="py-16 lg:py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <SectionLabel className="justify-center">More Agents</SectionLabel>
            <h2
              className="font-display font-extrabold text-gray-900 tracking-tight mt-3"
              style={{ fontSize: "clamp(1.6rem, 2.8vw, 2.2rem)" }}
            >
              The fleet is growing
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {OTHER_AGENTS.map((agent, i) => (
              <motion.div
                key={agent.title}
                id={agent.id}
                className="relative rounded-2xl overflow-hidden group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
              >
                <div className="glass-card rounded-2xl p-7 sm:p-9 h-full relative">
                  {/* Status badge */}
                  <div className="absolute top-5 right-5">
                    <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider text-white bg-gradient-to-r ${agent.gradient}`}>
                      <span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse" />
                      {agent.status}
                    </span>
                  </div>

                  <div className="w-12 h-12 rounded-xl bg-[#FDF4F6] flex items-center justify-center mb-5">
                    <agent.icon size={22} className="text-[#5C0F26]" />
                  </div>

                  <h3 className="font-display font-bold text-xl text-gray-900 mb-3">
                    {agent.title}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed">
                    {agent.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-16 lg:py-20" style={{ background: "linear-gradient(135deg, #5C0F26 0%, #3F0A1A 100%)" }}>
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Bot size={36} className="mx-auto mb-5 text-white/60" />
            <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-white mb-4">
              Ready to put AI agents to work?
            </h2>
            <p className="text-white/60 mb-8 max-w-lg mx-auto">
              Tell us your workflow bottleneck. We&apos;ll show you what an agent can do in a live demo.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-semibold bg-white text-[#5C0F26] hover:bg-gray-100 transition-colors"
            >
              Talk to an Expert <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
