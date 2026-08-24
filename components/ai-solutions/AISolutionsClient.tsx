"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Bot,
  Brain,
  GraduationCap,
  Shield,
  Workflow,
  Sparkles,
  CheckCircle2,
  ArrowRight,
  Zap,
  Users,
  Target,
  Megaphone,
  Video,
  TrendingUp,
  Globe,
} from "lucide-react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { SpotlightCard } from "@/components/home/BorderBeamCard";
import { AIArchitecturePipeline } from "./AIArchitecturePipeline";
import { AIUseCaseExplorer } from "./AIUseCaseExplorer";

const AI_OFFERINGS = [
  {
    id: "sales-agent",
    icon: Target,
    title: "Sales AI Agent",
    badge: "Revenue & Pipeline",
    beamFrom: "#5C0F26",
    beamTo: "#E8435A",
    spotlight: "rgba(92, 15, 38, 0.12)",
    iconBg: "#FDF4F6",
    iconColor: "#5C0F26",
    desc: "Autonomous 24/7 lead qualification, multi-channel outreach, CRM auto-sync, and instant meeting booking across WhatsApp, email & web.",
    points: [
      "Instant 24/7 multi-turn lead qualification over WhatsApp & Web",
      "Automatic lead scoring, data enrichment & CRM sync (Zoho / HubSpot)",
      "Smart objection handling with custom enterprise pricing knowledge",
      "Direct calendar integration for instant demo & consultation bookings",
      "Automated multi-touch follow-up sequences that prevent cold leads",
    ],
    stats: [
      { value: "3x", label: "Pipeline conversion rate" },
      { value: "< 10s", label: "Instant inbound response time" },
    ],
  },
  {
    id: "social-agent",
    icon: Megaphone,
    title: "Social Media AI Agent",
    badge: "Content & Brand Growth",
    beamFrom: "#1D4ED8",
    beamTo: "#38BDF8",
    spotlight: "rgba(29, 78, 216, 0.12)",
    iconBg: "#EFF6FF",
    iconColor: "#1D4ED8",
    desc: "Autonomous content engine that plans editorial calendars, drafts on-brand copy, generates creative ideas, and schedules across platforms.",
    points: [
      "Automated monthly content calendar planning & multi-channel drafting",
      "Fine-tuned to your exact brand tone, industry guidelines & voice",
      "Direct integration with LinkedIn, Twitter/X, and Instagram",
      "Real-time trending topic monitoring & audience sentiment tracking",
      "Visual asset brief generation & hashtag engagement optimization",
    ],
    stats: [
      { value: "10x", label: "Faster content production" },
      { value: "100%", label: "Brand voice compliance" },
    ],
  },
  {
    id: "meeting-agent",
    icon: Video,
    title: "Meeting AI Agent",
    badge: "Voice & Productivity",
    beamFrom: "#7C3AED",
    beamTo: "#C4B5FD",
    spotlight: "rgba(124, 58, 237, 0.12)",
    iconBg: "#FAF5FF",
    iconColor: "#7C3AED",
    desc: "Autonomous voice-enabled assistant that joins your calls, records and transcribes conversations, and actively speaks live in the meeting to answer questions or brief the team when needed.",
    points: [
      "Auto-joins Zoom, Google Meet & Microsoft Teams as an active participant",
      "Live Voice Interaction: Speaks in the call to answer queries & look up data in real time",
      "High-accuracy audio/video recording with speaker IDs & Indian accent tuning",
      "Automated decision summaries & structured action item extraction",
      "Direct sync to Slack, Trello, Jira, Asana & automated email minutes",
    ],
    stats: [
      { value: "Live Voice", label: "Interactive in-call speaking" },
      { value: "5+ hrs", label: "Saved per executive / week" },
    ],
  },
];

const AI_CAPABILITIES = [
  {
    title: "AI Trainings & Workshops",
    desc: "Comprehensive hands-on training for corporate teams, executive leadership, and academic institutions to master practical GenAI tools and workflows.",
    icon: GraduationCap,
    color: "#5C0F26",
    bg: "#FDF4F6",
  },
  {
    title: "Deploy Autonomous AI Agents",
    desc: "Custom multi-step AI agents designed around your private enterprise data to automate sales, customer support, document processing, and ERP actions.",
    icon: Bot,
    color: "#1D4ED8",
    bg: "#EFF6FF",
  },
  {
    title: "Generative Engine Optimization (GEO)",
    desc: "Next-generation optimization ensuring your brand, products, and services rank and are cited directly inside ChatGPT, Perplexity, Claude, and Google AI Overviews.",
    icon: Globe,
    color: "#7C3AED",
    bg: "#FAF5FF",
  },
];

export function AISolutionsClient() {
  return (
    <>
      {/* ── AI Hero Section ── */}
      <section className="relative min-h-[90vh] flex items-center justify-center pt-28 pb-20 overflow-hidden bg-gradient-to-b from-[#11051A] via-[#1A0A26] to-[#0D0414] text-white">
        {/* Glowing Neural Orbs */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-1/4 -left-20 w-[500px] h-[500px] rounded-full blur-[120px] opacity-25 bg-[#5C0F26]" />
          <div className="absolute bottom-1/4 -right-20 w-[500px] h-[500px] rounded-full blur-[120px] opacity-25 bg-[#1D4ED8]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-[140px] opacity-15 bg-[#7C3AED]" />
        </div>

        {/* Ambient Grid Pattern */}
        <div className="absolute inset-0 bg-grid-white/[0.03] bg-[size:32px_32px] pointer-events-none" />

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Tag badge */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-purple-500/30 bg-purple-950/40 text-purple-200 text-xs sm:text-sm font-semibold tracking-wide mb-6 shadow-inner backdrop-blur-md"
          >
            <Sparkles size={14} className="text-purple-400 animate-pulse" />
            Comptech AI Division · Enterprise &amp; Academia Enablement
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-display font-extrabold text-white tracking-tight leading-[1.1] mb-6 max-w-4xl mx-auto"
            style={{ fontSize: "clamp(2.3rem, 5vw, 4.2rem)" }}
          >
            Practical AI for Enterprises:{" "}
            <span
              className="text-transparent bg-clip-text"
              style={{ backgroundImage: "linear-gradient(120deg, #F0A6B9, #C4B5FD, #93C5FD)" }}
            >
              Train Your Team. Automate With Agents.
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-base sm:text-xl text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed font-light"
          >
            Empowering Indian organizations to adopt AI with confidence. We deliver accredited corporate workshops and engineer custom, secure autonomous AI agents.
          </motion.p>

          {/* Action CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link
              href="/contact#quote"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-base font-bold text-white shadow-xl hover:scale-105 transition-all duration-200"
              style={{
                background: "linear-gradient(135deg, #5C0F26 0%, #E8435A 100%)",
                boxShadow: "0 10px 30px rgba(92, 15, 38, 0.4)",
              }}
            >
              Book an AI Training <ArrowRight size={16} />
            </Link>
            <a
              href="#offerings"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-base font-semibold text-white/90 border border-white/20 bg-white/5 hover:bg-white/10 hover:border-white/40 transition-all duration-200 backdrop-blur-md"
            >
              Explore AI Offerings
            </a>
          </motion.div>
        </div>
      </section>

      {/* ── Why Comptech AI & Trust Pillars ── */}
      <section className="py-20 bg-white relative overflow-hidden" aria-labelledby="why-ai-title">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            
            {/* Left Narrative */}
            <div>
              <SectionLabel>Core AI Pillars</SectionLabel>
              <h2
                id="why-ai-title"
                className="font-display font-extrabold text-gray-900 tracking-tight mt-2 sm:mt-3 leading-tight mb-4"
                style={{ fontSize: "clamp(1.85rem, 3.5vw, 2.9rem)" }}
              >
                We train teams, deploy AI agents &amp;{" "}
                <span
                  className="text-transparent bg-clip-text"
                  style={{ backgroundImage: "linear-gradient(135deg, #5C0F26, #E8435A)" }}
                >
                  optimize for Generative AI
                </span>
              </h2>
              <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-4">
                Comptech provides a complete 360° enterprise AI roadmap — from upskilling your personnel with hands-on workshops to engineering custom autonomous agents and optimizing your brand to rank directly inside modern AI search engines.
              </p>
              <p className="text-gray-500 text-sm sm:text-base leading-relaxed mb-8">
                Every agent and training session is led by practicing engineers with strict data security, private air-gapped hosting, and verifiable business ROI.
              </p>

              <div className="flex flex-wrap gap-6 pt-4 border-t border-gray-100">
                <div className="flex items-center gap-3">
                  <span className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-sm font-bold text-gray-800">100% Private &amp; Air-Gapped</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="w-3 h-3 rounded-full bg-[#1D4ED8] animate-pulse" />
                  <span className="text-sm font-bold text-gray-800">Practitioner-Led Engineering</span>
                </div>
              </div>
            </div>

            {/* Right Capability Cards */}
            <div className="flex flex-col gap-4">
              {AI_CAPABILITIES.map((cap) => {
                const Icon = cap.icon;
                return (
                  <div
                    key={cap.title}
                    className="p-6 rounded-3xl glass-card bg-gray-50/80 border border-gray-200/80 flex items-start gap-4 transition-all duration-200 hover:bg-white hover:shadow-md hover:border-gray-300"
                  >
                    <div
                      className="w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 shadow-xs"
                      style={{ background: cap.bg }}
                    >
                      <Icon size={22} style={{ color: cap.color }} />
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-gray-900 text-lg mb-1">{cap.title}</h3>
                      <p className="text-sm text-gray-500 leading-relaxed">{cap.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>
        </div>
      </section>

      {/* ── Top AI Products (Spotlight Cards with Border Beams) ── */}
      <section id="offerings" className="py-20 lg:py-28 bg-[#F8FAFC] relative overflow-hidden" aria-labelledby="products-title">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
            <SectionLabel className="justify-center">Flagship AI Agents</SectionLabel>
            <h2
              id="products-title"
              className="font-display font-extrabold text-gray-900 tracking-tight mt-2 sm:mt-3 leading-tight"
              style={{ fontSize: "clamp(1.85rem, 3.5vw, 2.9rem)" }}
            >
              Our top{" "}
              <span
                className="text-transparent bg-clip-text"
                style={{ backgroundImage: "linear-gradient(135deg, #5C0F26, #E8435A)" }}
              >
                AI products
              </span>
            </h2>
            <p className="mt-3 text-base sm:text-lg text-gray-500 leading-relaxed">
              Pre-engineered, enterprise-ready autonomous AI agents tailored to your business data and workflows.
            </p>
          </div>

          {/* 3 Pillars Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
            {AI_OFFERINGS.map((off) => {
              const Icon = off.icon;
              return (
                <SpotlightCard
                  key={off.id}
                  beamFrom={off.beamFrom}
                  beamTo={off.beamTo}
                  spotlightColor={off.spotlight}
                  beamDuration={4.5}
                  className="h-full group hover:-translate-y-1.5"
                >
                  {/* Top Badge + Icon */}
                  <div className="flex items-center justify-between mb-5">
                    <div
                      className="w-12 h-12 rounded-2xl flex items-center justify-center shadow-xs"
                      style={{ background: off.iconBg }}
                    >
                      <Icon size={22} style={{ color: off.iconColor }} />
                    </div>
                    <span
                      className="text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full border"
                      style={{
                        borderColor: `${off.beamFrom}25`,
                        background: off.iconBg,
                        color: off.iconColor,
                      }}
                    >
                      {off.badge}
                    </span>
                  </div>

                  <h3 className="font-display font-extrabold text-gray-900 text-2xl leading-tight mb-3">
                    {off.title}
                  </h3>

                  <p className="text-gray-600 text-sm leading-relaxed mb-6">
                    {off.desc}
                  </p>

                  {/* Stats snippet */}
                  <div className="grid grid-cols-2 gap-2 mb-6">
                    {off.stats.map((st) => (
                      <div key={st.label} className="p-3 rounded-xl bg-gray-50 border border-gray-100">
                        <p className="font-display font-extrabold text-xl text-gray-900 leading-none mb-1" style={{ color: off.iconColor }}>
                          {st.value}
                        </p>
                        <p className="text-[10px] text-gray-500 font-medium leading-tight">{st.label}</p>
                      </div>
                    ))}
                  </div>

                  {/* Bullet points */}
                  <ul className="flex flex-col gap-2.5 mb-8">
                    {off.points.map((p) => (
                      <li key={p} className="flex items-start gap-2.5">
                        <CheckCircle2 size={15} className="shrink-0 mt-0.5" style={{ color: off.iconColor }} />
                        <span className="text-xs sm:text-sm text-gray-700 font-medium leading-relaxed">{p}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <div className="mt-auto pt-2">
                    <Link
                      href="/contact#quote"
                      className="inline-flex items-center justify-center gap-2 text-sm font-bold w-full py-3 rounded-2xl transition-all duration-200 group/btn"
                      style={{
                        background: off.iconBg,
                        color: off.iconColor,
                      }}
                    >
                      Deploy {off.title}
                      <ArrowRight size={15} className="group-hover/btn:translate-x-1 transition-transform duration-200" />
                    </Link>
                  </div>
                </SpotlightCard>
              );
            })}
          </div>

        </div>
      </section>

      {/* ── Interactive Architecture Pipeline ── */}
      <AIArchitecturePipeline />

      {/* ── Industry Use-Case Explorer ── */}
      <AIUseCaseExplorer />

      {/* ── Final High-Impact CTA Banner ── */}
      <section className="py-20 lg:py-24 bg-gradient-to-br from-[#160C2E] via-[#2A1140] to-[#3F0A1A] text-white relative overflow-hidden text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-white/10 border border-white/15 mb-6">
            <Bot className="w-7 h-7 text-purple-300" />
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white mb-5 tracking-tight">
            Ready to deploy practical AI in your business?
          </h2>
          <p className="text-gray-300 text-base sm:text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
            Whether upskilling 50 employees or building a private multi-step agent pipeline, our engineers are ready to scope your project.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/contact#quote"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-base font-bold text-white shadow-xl hover:scale-105 transition-all duration-200"
              style={{ background: "linear-gradient(135deg, #5C0F26, #E8435A)" }}
            >
              Book AI Training &amp; Consult <ArrowRight size={16} />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-base font-semibold text-white/90 border border-white/20 bg-white/5 hover:bg-white/10 transition-all duration-200 backdrop-blur-md"
            >
              Contact AI Team
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
