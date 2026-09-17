"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  Newspaper,
  Mail,
  Send,
  RefreshCw,
  Sparkles,
  CheckCircle2,
  Cpu,
  ArrowRight,
  TrendingUp,
  Target,
  ShieldCheck,
  Calendar,
  Activity,
  ChevronRight,
  Zap,
  Building2,
  UserCheck,
  Check,
  Flame,
  Radio,
  Clock,
  Play,
  Pause,
} from "lucide-react";

export const STAGES = [
  {
    id: "discovery",
    number: "01",
    name: "Prospect Discovery",
    tag: "Autonomous ICP Scanner",
    desc: "Scans industry databases, LinkedIn, and corporate registries to pinpoint accounts matching your exact ICP.",
    metrics: "1,420 scanned · 38 high-match leads",
    icon: Search,
    color: "#3B82F6",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    id: "intelligence",
    number: "02",
    name: "News Intelligence",
    tag: "Real-Time NLP Semantic Engine",
    desc: "Analyzes real-time press releases, funding rounds, and hiring shifts to find timely, irresistible conversation triggers.",
    metrics: "94% Buying Intent · Trigger: $32M Series B",
    icon: Newspaper,
    color: "#8B5CF6",
    gradient: "from-purple-500 to-indigo-500",
  },
  {
    id: "extraction",
    number: "03",
    name: "Contact Extraction",
    tag: "Neural Decision-Maker Graph",
    desc: "Identifies key decision-makers, resolves direct verified corporate emails, and verifies deliverability with zero bounce.",
    metrics: "100% SMTP Verified · 3 Key Decision Makers",
    icon: Mail,
    color: "#EC4899",
    gradient: "from-pink-500 to-rose-500",
  },
  {
    id: "outreach",
    number: "04",
    name: "Personalized Outreach",
    tag: "Contextual Generative Pitcher",
    desc: "Drafts hyper-tailored emails referencing recent company news, pain points, and specific value propositions in real-time.",
    metrics: "Generated in 1.2s · 85% Predicted Open Rate",
    icon: Send,
    color: "#F59E0B",
    gradient: "from-amber-500 to-orange-500",
  },
  {
    id: "followup",
    number: "05",
    name: "Smart Follow-ups",
    tag: "Automated Conversion & CRM Sync",
    desc: "Executes polite, multi-touch follow-ups, detects positive replies, schedules calendar bookings, and syncs directly to your CRM.",
    metrics: "Meeting Booked · Auto-Synced to CRM",
    icon: RefreshCw,
    color: "#10B981",
    gradient: "from-emerald-500 to-teal-500",
  },
];

export function SalesWorkflowVisualizer() {
  const [activeStage, setActiveStage] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (!isPlaying) return;
    timerRef.current = setInterval(() => {
      setActiveStage((prev) => (prev + 1) % STAGES.length);
    }, 6500);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPlaying]);

  const stage = STAGES[activeStage];
  const Icon = stage.icon;

  return (
    <div className="relative w-full max-w-6xl mx-auto my-6">
      {/* Ambient background glow & parallax grid */}
      <div className="absolute -inset-4 bg-gradient-to-r from-[#5C0F26]/20 via-purple-900/15 to-blue-900/20 rounded-[36px] blur-2xl opacity-70 pointer-events-none" />

      {/* Main HUD Console */}
      <div
        className="relative bg-[#0A0C12] border border-white/10 rounded-3xl shadow-2xl overflow-hidden backdrop-blur-xl"
        onMouseEnter={() => setIsPlaying(false)}
        onMouseLeave={() => setIsPlaying(true)}
      >
        {/* Top Telemetry & Control Bar */}
        <div className="flex flex-wrap items-center justify-between px-6 py-4 border-b border-white/10 bg-white/[0.02]">
          <div className="flex items-center gap-3">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
            </span>
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-gray-300 flex items-center gap-2">
              <Cpu size={14} className="text-blue-400" />
              Sales AI Agent <span className="text-gray-500">·</span> Live Pipeline Sim
            </span>
          </div>

          {/* Telemetry Chips */}
          <div className="hidden sm:flex items-center gap-4 text-[11px] font-mono text-gray-400">
            <div className="flex items-center gap-1.5 bg-white/5 px-2.5 py-1 rounded-md border border-white/5">
              <Activity size={12} className="text-emerald-400 animate-pulse" />
              <span>Throughput: <strong className="text-gray-200">185 tok/s</strong></span>
            </div>
            <div className="flex items-center gap-1.5 bg-white/5 px-2.5 py-1 rounded-md border border-white/5">
              <Zap size={12} className="text-amber-400" />
              <span>Latency: <strong className="text-gray-200">14ms</strong></span>
            </div>
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              aria-label={isPlaying ? "Pause autoplay" : "Start autoplay"}
              className="flex items-center gap-1.5 bg-white/10 hover:bg-white/15 text-white px-2.5 py-1 rounded-md border border-white/10 transition-colors cursor-pointer"
            >
              {isPlaying ? <Pause size={12} /> : <Play size={12} />}
              <span className="text-[10px]">{isPlaying ? "Pause" : "Auto-Play"}</span>
            </button>
          </div>
        </div>

        {/* Step Navigation Rail */}
        <div className="grid grid-cols-5 border-b border-white/10 bg-black/30">
          {STAGES.map((s, idx) => {
            const SIcon = s.icon;
            const isActive = activeStage === idx;
            return (
              <button
                key={s.id}
                onClick={() => {
                  setActiveStage(idx);
                  setIsPlaying(false);
                }}
                className={`relative px-3 py-3.5 sm:px-4 sm:py-4 text-left transition-all duration-300 border-r border-white/5 last:border-r-0 flex flex-col justify-between ${
                  isActive ? "bg-white/[0.06]" : "hover:bg-white/[0.02] opacity-60 hover:opacity-100"
                }`}
              >
                <div className="flex items-center justify-between mb-1.5">
                  <span
                    className="text-[10px] font-mono font-black"
                    style={{ color: isActive ? s.color : "#9CA3AF" }}
                  >
                    PHASE {s.number}
                  </span>
                  <SIcon
                    size={14}
                    style={{ color: isActive ? s.color : "#6B7280" }}
                  />
                </div>
                <div className="text-xs sm:text-sm font-bold text-gray-200 truncate">
                  {s.name}
                </div>

                {/* Active Underline Beam */}
                {isActive && (
                  <motion.div
                    layoutId="activeTabBeam"
                    className="absolute bottom-0 left-0 right-0 h-0.5"
                    style={{ background: s.color }}
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* Main Stage Viewport (Split: Left Story + Right Visual Hyperframe) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[460px]">
          
          {/* Left: Phase Narrative & Controller */}
          <div className="lg:col-span-5 p-6 sm:p-8 lg:p-10 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-white/10 bg-gradient-to-b from-white/[0.02] to-transparent">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-semibold text-white bg-white/10 border border-white/15 mb-4">
                <Icon size={13} style={{ color: stage.color }} />
                <span>{stage.tag}</span>
              </div>

              <h3 className="font-display font-black text-2xl sm:text-3xl text-white tracking-tight mb-3">
                {stage.name}
              </h3>

              <p className="text-sm sm:text-base text-gray-300 leading-relaxed mb-6">
                {stage.desc}
              </p>

              {/* Live Metric Pill */}
              <div className="bg-white/5 border border-white/10 rounded-2xl p-4 mb-6">
                <div className="text-[10px] font-mono uppercase tracking-widest text-gray-400 mb-1 flex items-center gap-1.5">
                  <Radio size={12} className="text-emerald-400 animate-ping" />
                  Live Execution Result
                </div>
                <div className="text-sm font-bold text-white flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-emerald-400 shrink-0" />
                  <span>{stage.metrics}</span>
                </div>
              </div>
            </div>

            {/* Quick Navigation Buttons */}
            <div className="flex items-center justify-between pt-4 border-t border-white/10">
              <div className="text-xs font-mono text-gray-400">
                Step <strong className="text-white">{activeStage + 1}</strong> of {STAGES.length}
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => {
                    setActiveStage((prev) => (prev - 1 + STAGES.length) % STAGES.length);
                    setIsPlaying(false);
                  }}
                  className="px-3 py-1.5 text-xs font-semibold rounded-lg bg-white/5 hover:bg-white/10 text-gray-300 border border-white/10 transition-colors"
                >
                  Prev
                </button>
                <button
                  onClick={() => {
                    setActiveStage((prev) => (prev + 1) % STAGES.length);
                    setIsPlaying(false);
                  }}
                  className="px-3 py-1.5 text-xs font-semibold rounded-lg text-white transition-all flex items-center gap-1 shadow-sm"
                  style={{ background: stage.color }}
                >
                  Next Phase <ChevronRight size={14} />
                </button>
              </div>
            </div>
          </div>

          {/* Right: The Videographic Hyperframe Screen */}
          <div className="lg:col-span-7 p-6 sm:p-8 lg:p-10 flex flex-col justify-center bg-black/40 relative overflow-hidden">
            {/* Background cyber grid */}
            <div
              className="absolute inset-0 opacity-10 pointer-events-none"
              style={{
                backgroundImage: "linear-gradient(rgba(255,255,255,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.2) 1px, transparent 1px)",
                backgroundSize: "24px 24px",
              }}
            />

            {/* Ambient Aurora behind hyperframe */}
            <div
              className="absolute w-72 h-72 rounded-full blur-[90px] opacity-25 pointer-events-none transition-all duration-700"
              style={{ background: stage.color }}
            />

            {/* Hyperframe Stage Screen */}
            <AnimatePresence mode="wait">
              {activeStage === 0 && <StageDiscovery key="discovery" />}
              {activeStage === 1 && <StageIntelligence key="intelligence" />}
              {activeStage === 2 && <StageExtraction key="extraction" />}
              {activeStage === 3 && <StageOutreach key="outreach" />}
              {activeStage === 4 && <StageFollowup key="followup" />}
            </AnimatePresence>
          </div>

        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Hyperframe 01: Prospect Discovery (Radar + ICP Matcher)           */
/* ------------------------------------------------------------------ */

function StageDiscovery() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96, y: 15 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.96, y: -15 }}
      transition={{ duration: 0.4 }}
      className="relative z-10 w-full bg-[#0F131E] border border-blue-500/30 rounded-2xl p-5 sm:p-6 shadow-2xl"
    >
      {/* Top Scanner Line */}
      <div className="flex items-center justify-between pb-3 mb-4 border-b border-white/10 text-xs font-mono">
        <span className="text-blue-400 flex items-center gap-1.5">
          <Search size={14} className="animate-spin text-blue-400" />
          Autonomous Web & LinkedIn Query
        </span>
        <span className="text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
          Match Engine Active
        </span>
      </div>

      {/* Discovered Lead Cards */}
      <div className="space-y-2.5">
        {[
          { name: "FinEdge Systems", location: "San Francisco, CA", size: "180 Emp", funding: "Series B $32M", match: "99% ICP Match", color: "text-emerald-400", border: "border-emerald-500/30" },
          { name: "Apex Logistics AI", location: "New York, NY", size: "320 Emp", funding: "Series A $14M", match: "97% ICP Match", color: "text-blue-400", border: "border-blue-500/30" },
          { name: "Nova Health Tech", location: "Boston, MA", size: "95 Emp", funding: "Seed $4.5M", match: "94% ICP Match", color: "text-purple-400", border: "border-purple-500/30" },
        ].map((lead, i) => (
          <motion.div
            key={lead.name}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.15 + 0.1 }}
            className={`flex items-center justify-between p-3 rounded-xl bg-white/[0.04] border ${lead.border} hover:bg-white/[0.07] transition-colors`}
          >
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
                <Building2 size={18} />
              </div>
              <div>
                <div className="text-xs sm:text-sm font-bold text-white flex items-center gap-2">
                  {lead.name}
                  <span className="text-[10px] font-mono text-gray-400 font-normal">{lead.location}</span>
                </div>
                <div className="text-[11px] text-gray-400 flex items-center gap-2 mt-0.5">
                  <span>{lead.size}</span>
                  <span>•</span>
                  <span>{lead.funding}</span>
                </div>
              </div>
            </div>
            <span className={`text-[11px] font-mono font-bold ${lead.color} bg-white/5 px-2 py-1 rounded-md shrink-0`}>
              {lead.match}
            </span>
          </motion.div>
        ))}
      </div>

      <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-[10px] font-mono text-gray-400">
        <span>Filters: FinTech · Cloud · 50-500 Employees</span>
        <span className="text-blue-400">Auto-Enriching Metadata...</span>
      </div>
    </motion.div>
  );
}

/* ------------------------------------------------------------------ */
/*  Hyperframe 02: News Intelligence (NLP Laser Scan)                 */
/* ------------------------------------------------------------------ */

function StageIntelligence() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96, y: 15 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.96, y: -15 }}
      transition={{ duration: 0.4 }}
      className="relative z-10 w-full bg-[#0F131E] border border-purple-500/30 rounded-2xl p-5 sm:p-6 shadow-2xl overflow-hidden"
    >
      {/* Animated Laser Scanning Line */}
      <motion.div
        animate={{ y: [0, 180, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
        className="absolute left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-purple-400 to-transparent shadow-[0_0_12px_#A855F7] z-20 pointer-events-none"
      />

      <div className="flex items-center justify-between pb-3 mb-4 border-b border-white/10 text-xs font-mono">
        <span className="text-purple-400 flex items-center gap-1.5">
          <Newspaper size={14} className="text-purple-400" />
          NLP Document Parser & Signal Extractor
        </span>
        <span className="text-purple-300 bg-purple-500/10 px-2 py-0.5 rounded border border-purple-500/20">
          Laser Scan 98%
        </span>
      </div>

      {/* Extracted Trigger Signals */}
      <div className="space-y-3">
        <div className="p-3.5 rounded-xl bg-purple-950/30 border border-purple-500/30 text-xs leading-relaxed text-gray-300">
          <div className="flex items-center gap-2 mb-1">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="font-mono font-bold text-purple-300 uppercase text-[10px]">Trigger Event #1: Capital Expansion</span>
          </div>
          &ldquo;FinEdge Systems secures <strong className="text-white bg-purple-500/20 px-1 py-0.5 rounded">Series B $32M funding</strong> to accelerate enterprise infrastructure & international sales.&rdquo;
        </div>

        <div className="p-3.5 rounded-xl bg-purple-950/30 border border-purple-500/30 text-xs leading-relaxed text-gray-300">
          <div className="flex items-center gap-2 mb-1">
            <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
            <span className="font-mono font-bold text-blue-300 uppercase text-[10px]">Trigger Event #2: Executive Hire</span>
          </div>
          &ldquo;Appoints new <strong className="text-white bg-blue-500/20 px-1 py-0.5 rounded">VP of Technology Alex Rivera</strong> to overhaul cloud security & automated workflows.&rdquo;
        </div>
      </div>

      {/* Semantic Sentiment Tag */}
      <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-[11px] font-mono">
        <span className="text-gray-400">Buying Intent Score:</span>
        <span className="text-emerald-400 font-bold bg-emerald-500/10 px-2.5 py-0.5 rounded-md border border-emerald-500/20 flex items-center gap-1">
          <Flame size={12} /> Extremely High (94%)
        </span>
      </div>
    </motion.div>
  );
}

/* ------------------------------------------------------------------ */
/*  Hyperframe 03: Contact Extraction (Neural Decision Graph)         */
/* ------------------------------------------------------------------ */

function StageExtraction() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96, y: 15 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.96, y: -15 }}
      transition={{ duration: 0.4 }}
      className="relative z-10 w-full bg-[#0F131E] border border-pink-500/30 rounded-2xl p-5 sm:p-6 shadow-2xl"
    >
      <div className="flex items-center justify-between pb-3 mb-4 border-b border-white/10 text-xs font-mono">
        <span className="text-pink-400 flex items-center gap-1.5">
          <UserCheck size={14} className="text-pink-400" />
          Decision Maker Resolution & Email Verification
        </span>
        <span className="text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
          Deliverability: 100%
        </span>
      </div>

      {/* Contact Cards */}
      <div className="space-y-2.5">
        {[
          { name: "Alex Rivera", role: "VP of Technology / CTO", email: "alex.rivera@finedge.io", status: "Verified Primary Target", badge: "SMTP 250 OK" },
          { name: "Sarah Chen", role: "Head of Infrastructure", email: "sarah.chen@finedge.io", status: "Technical Influencer", badge: "SMTP 250 OK" },
          { name: "Marcus Vance", role: "Director of IT Operations", email: "m.vance@finedge.io", status: "Operational Evaluator", badge: "SMTP 250 OK" },
        ].map((contact, i) => (
          <motion.div
            key={contact.email}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.15 + 0.1 }}
            className="flex flex-col sm:flex-row sm:items-center justify-between p-3 rounded-xl bg-white/[0.04] border border-pink-500/20 hover:border-pink-500/40 transition-colors gap-2"
          >
            <div>
              <div className="text-xs sm:text-sm font-bold text-white flex items-center gap-2">
                {contact.name}
                <span className="text-[10px] font-mono text-pink-300 bg-pink-500/10 px-2 py-0.5 rounded">
                  {contact.role}
                </span>
              </div>
              <div className="text-[11px] font-mono text-gray-400 mt-0.5">{contact.email}</div>
            </div>

            <div className="flex items-center gap-2 shrink-0">
              <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded flex items-center gap-1">
                <Check size={10} /> {contact.badge}
              </span>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-[10px] font-mono text-gray-400">
        <span>MX Server: mail.protection.outlook.com</span>
        <span className="text-emerald-400">Zero Spam Trap Risk</span>
      </div>
    </motion.div>
  );
}

/* ------------------------------------------------------------------ */
/*  Hyperframe 04: Personalized Outreach (Live Typewriter Pitch)      */
/* ------------------------------------------------------------------ */

function StageOutreach() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96, y: 15 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.96, y: -15 }}
      transition={{ duration: 0.4 }}
      className="relative z-10 w-full bg-[#0F131E] border border-amber-500/30 rounded-2xl p-5 sm:p-6 shadow-2xl"
    >
      <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/10 text-xs font-mono">
        <span className="text-amber-400 flex items-center gap-1.5">
          <Send size={14} className="text-amber-400" />
          Hyper-Personalized Email Generator
        </span>
        <span className="text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
          Generated in 1.2s
        </span>
      </div>

      {/* Email Mock Header */}
      <div className="bg-white/5 rounded-xl p-3 border border-white/5 text-[11px] font-mono space-y-1 mb-3 text-gray-300">
        <div><strong className="text-gray-400">To:</strong> Alex Rivera &lt;alex.rivera@finedge.io&gt;</div>
        <div><strong className="text-gray-400">Subject:</strong> FinEdge&apos;s $32M Series B &amp; scaling IT infrastructure</div>
      </div>

      {/* Email Body Preview with Contextual Tokens */}
      <div className="p-4 rounded-xl bg-white/[0.03] border border-amber-500/20 text-xs sm:text-sm text-gray-300 leading-relaxed font-sans space-y-2.5">
        <p>
          Hi Alex, congrats on FinEdge&apos;s <span className="bg-amber-500/20 text-amber-300 px-1.5 py-0.5 rounded font-mono text-xs">Series B $32M round</span> and your new role heading engineering.
        </p>
        <p>
          Saw you&apos;re expanding into London. Fast-growing FinTech teams usually face severe staging bottlenecks and server deployment latency during global scale-up.
        </p>
        <p className="text-gray-400 text-xs">
          Would you be open to a 10-min intro next Tuesday at 2 PM to see how we automate deployment?
        </p>
      </div>

      {/* Bottom Send Dispatcher */}
      <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-[11px] font-mono">
        <span className="text-gray-400">Spam Score: 0.01 / 10.0 (Optimal)</span>
        <span className="text-amber-400 font-bold flex items-center gap-1">
          <Zap size={12} /> Auto-Dispatched to Inbox
        </span>
      </div>
    </motion.div>
  );
}

/* ------------------------------------------------------------------ */
/*  Hyperframe 05: Smart Follow-ups & CRM Sync                        */
/* ------------------------------------------------------------------ */

function StageFollowup() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96, y: 15 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.96, y: -15 }}
      transition={{ duration: 0.4 }}
      className="relative z-10 w-full bg-[#0F131E] border border-emerald-500/30 rounded-2xl p-5 sm:p-6 shadow-2xl"
    >
      <div className="flex items-center justify-between pb-3 mb-4 border-b border-white/10 text-xs font-mono">
        <span className="text-emerald-400 flex items-center gap-1.5">
          <Calendar size={14} className="text-emerald-400" />
          Automated Sequence &amp; Calendar Booking
        </span>
        <span className="text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
          Conversion: Won 🚀
        </span>
      </div>

      {/* Multi-Touch Sequence Progression */}
      <div className="space-y-3">
        {/* Step 1: Initial */}
        <div className="flex items-center justify-between p-2.5 rounded-xl bg-white/[0.03] border border-white/5 text-xs text-gray-300">
          <div className="flex items-center gap-2">
            <span className="w-6 h-6 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center font-mono text-[10px]">D1</span>
            <span>Initial Outreach Delivered</span>
          </div>
          <span className="text-gray-400 font-mono text-[10px]">Opened 2x (SF)</span>
        </div>

        {/* Step 2: Incoming Positive Reply */}
        <div className="p-3.5 rounded-xl bg-emerald-950/40 border border-emerald-500/40 text-xs text-white">
          <div className="flex items-center justify-between mb-1.5">
            <span className="font-mono font-bold text-emerald-400 text-[10px] uppercase flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              Incoming Prospect Reply (Alex Rivera)
            </span>
            <span className="text-gray-400 text-[10px] font-mono">10 mins ago</span>
          </div>
          <p className="italic text-gray-200">
            &ldquo;Thanks for reaching out. Perfect timing — let&apos;s connect on Thursday at 2:30 PM. Sending invite.&rdquo;
          </p>
        </div>

        {/* Auto Actions */}
        <div className="grid grid-cols-2 gap-2 text-[11px] font-mono text-gray-300">
          <div className="p-2.5 rounded-lg bg-white/5 border border-white/5 flex items-center gap-2">
            <Check size={14} className="text-emerald-400 shrink-0" />
            <span className="truncate">Google Calendar Synced</span>
          </div>
          <div className="p-2.5 rounded-lg bg-white/5 border border-white/5 flex items-center gap-2">
            <Check size={14} className="text-emerald-400 shrink-0" />
            <span className="truncate">HubSpot / CRM Updated</span>
          </div>
        </div>
      </div>

      <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-[10px] font-mono text-gray-400">
        <span>Follow-up Sequence: Auto-Halted (Reply Detected)</span>
        <span className="text-emerald-400 font-bold">Pipeline Value: +$45,000</span>
      </div>
    </motion.div>
  );
}
