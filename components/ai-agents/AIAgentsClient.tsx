"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  MessageSquare,
  Calendar,
  ArrowRight,
  Zap,
  Target,
  TrendingUp,
  Clock,
} from "lucide-react";
import { AgentVideoPlayer } from "./AgentVideoPlayer";
import Link from "next/link";

/* ------------------------------------------------------------------ */
/*  Other agents — cards                                               */
/* ------------------------------------------------------------------ */

const OTHER_AGENTS = [
  {
    id: "social-agent",
    icon: MessageSquare,
    title: "Social Media AI Agent",
    description:
      "Monitors brand mentions, drafts on-brand replies, schedules content, and analyzes engagement — across every platform.",
    status: "Live in Production",
    href: "/social-media-ai-agent",
    gradient: "from-pink-500 to-rose-600",
  },
  {
    id: "meeting-agent",
    icon: Calendar,
    title: "Google Meet AI Agent",
    description:
      "Coordinates scheduling, sends agendas, takes meeting notes, extracts action items, and follows up — automatically.",
    status: "Coming Soon",
    href: "#",
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

interface AIAgentsClientProps {
  onBookLiveDemo?: () => void;
}

export function AIAgentsClient({ onBookLiveDemo }: AIAgentsClientProps = {}) {
  const statsRef = useRef<HTMLDivElement>(null);
  const statsInView = useInView(statsRef, { once: true, margin: "-40px" });

  return (
    <>
      {/* ── Sales AI Agent Video Showcase ── */}
      <section id="sales-agent-interactive" className="relative py-12 sm:py-20 lg:py-24 bg-white overflow-hidden border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-8 sm:mb-12">
            <h2
              className="font-display font-extrabold text-gray-900 tracking-tight mt-2 sm:mt-3 mb-3 sm:mb-4"
              style={{ fontSize: "clamp(1.65rem, 5vw, 2.8rem)" }}
            >
              Watch Our Sales AI Agent in{" "}
              <span className="text-transparent bg-clip-text" style={{ backgroundImage: "linear-gradient(135deg, #5C0F26, #E8435A 60%, #7C3AED)" }}>
                Action
              </span>
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto leading-relaxed text-sm sm:text-base lg:text-lg px-2">
              Watch how our autonomous agent qualifies leads, parses intents, enriches CRM data, and books sales appointments live.
            </p>
          </div>

          {/* Cinematic Interactive Video Player with Sales Agent Video */}
          <AgentVideoPlayer src="/sales-ai-agent.mp4" />

          {/* Call to Action */}
          <div className="mt-8 sm:mt-12 flex items-center justify-center">
            <button
              type="button"
              onClick={onBookLiveDemo}
              className="inline-flex items-center gap-2.5 px-8 sm:px-9 py-3.5 sm:py-4 rounded-2xl text-sm sm:text-base font-bold text-white transition-all duration-200 hover:scale-105 active:scale-95 shadow-xl cursor-pointer"
              style={{
                background: "linear-gradient(135deg, #5C0F26, #E8435A)",
                boxShadow: "0 8px 30px rgba(92,15,38,0.35)",
              }}
            >
              Book a Live Demo <ArrowRight size={17} />
            </button>
          </div>
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

      {/* ── Other Agents — Coming Soon / Explore ── */}
      <section id="more-agents" className="py-16 lg:py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2
              className="font-display font-extrabold text-gray-900 tracking-tight mt-3"
              style={{ fontSize: "clamp(1.6rem, 2.8vw, 2.2rem)" }}
            >
              Introducing More AI Employees
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
                <Link href={agent.href} className="block h-full">
                  <div className="glass-card rounded-2xl p-7 sm:p-9 h-full relative transition-all duration-200 group-hover:-translate-y-1 group-hover:shadow-lg">
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

                    <h3 className="font-display font-bold text-xl text-gray-900 mb-3 group-hover:text-[#5C0F26] transition-colors">
                      {agent.title}
                    </h3>
                    <p className="text-sm text-gray-500 leading-relaxed">
                      {agent.description}
                    </p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
