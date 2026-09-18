"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  Newspaper,
  Mail,
  Send,
  RefreshCw,
  CheckCircle2,
  Cpu,
  ChevronRight,
  Activity,
  Zap,
  Building2,
  UserCheck,
  Check,
  Radio,
  Play,
  Pause,
  Calendar,
} from "lucide-react";

export const STAGES = [
  {
    id: "discovery",
    number: "01",
    name: "Lead Discovery",
    desc: "Finding potential customers for you according to your business and target criteria.",
    metrics: "2000 leads found",
    icon: Search,
    color: "#5C0F26", // Brand Burgundy
    accentColor: "#E8435A",
    lightBg: "#FDF4F6",
    borderColor: "#F3D8DF",
  },
  {
    id: "intelligence",
    number: "02",
    name: "News Intelligence",
    desc: "Analyzes real-time press releases, funding rounds, and hiring shifts to find timely, irresistible conversation triggers.",
    metrics: "94% Buying Intent · Trigger: $32M Series B",
    icon: Newspaper,
    color: "#7C3AED", // Purple
    accentColor: "#9333EA",
    lightBg: "#FAF5FF",
    borderColor: "#E9D5FF",
  },
  {
    id: "extraction",
    number: "03",
    name: "Contact Search",
    desc: "Found top three contacts from the lead company.",
    metrics: "3 verified contacts found",
    icon: Mail,
    color: "#0284C7", // Sky/Blue
    accentColor: "#0EA5E9",
    lightBg: "#F0F9FF",
    borderColor: "#BAE6FD",
  },
  {
    id: "outreach",
    number: "04",
    name: "Outreach Generation",
    desc: "Drafts emails referencing recent company news, pain points, and specific value propositions in real-time, showing how our company can help this lead.",
    metrics: "Generated 200 emails today",
    icon: Send,
    color: "#D97706", // Amber
    accentColor: "#F59E0B",
    lightBg: "#FFFBEB",
    borderColor: "#FDE68A",
  },
  {
    id: "followup",
    number: "05",
    name: "Smart Follow-ups",
    desc: "Executes polite, multi-touch follow-ups, detects positive replies, and syncs directly to your CRM.",
    metrics: "Reply Detected · Auto-Synced to CRM",
    icon: RefreshCw,
    color: "#059669", // Emerald
    accentColor: "#10B981",
    lightBg: "#ECFDF5",
    borderColor: "#A7F3D0",
  },
];

export function SalesWorkflowVisualizer() {
  const [activeStage, setActiveStage] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  useEffect(() => {
    if (!isPlaying) return;
    timerRef.current = setInterval(() => {
      setActiveStage((prev) => (prev + 1) % STAGES.length);
    }, 6500);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPlaying]);

  useEffect(() => {
    if (tabRefs.current[activeStage]) {
      tabRefs.current[activeStage]?.scrollIntoView({
        behavior: "smooth",
        inline: "nearest",
        block: "nearest",
      });
    }
  }, [activeStage]);

  const stage = STAGES[activeStage];

  return (
    <div className="relative w-full max-w-6xl mx-auto my-4 sm:my-6">
      {/* Ambient background glow matching site brand palette */}
      <div className="absolute -inset-3 bg-gradient-to-r from-[#5C0F26]/10 via-[#E8435A]/5 to-purple-500/10 rounded-[36px] blur-2xl opacity-60 pointer-events-none" />

      {/* Main Light Theme HUD Console */}
      <div
        className="relative bg-white border border-gray-200/90 rounded-2xl sm:rounded-3xl shadow-xl overflow-hidden"
        onMouseEnter={() => setIsPlaying(false)}
        onMouseLeave={() => setIsPlaying(true)}
      >
        {/* Top Telemetry & Control Bar */}
        <div className="flex items-center justify-between px-3.5 sm:px-6 py-3 border-b border-gray-100 bg-gray-50/80 gap-2">
          <div className="flex items-center gap-2 sm:gap-3 min-w-0">
            <span className="relative flex h-2.5 w-2.5 shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
            </span>
            <span className="text-[11px] sm:text-xs font-mono font-bold uppercase tracking-wider text-gray-800 flex items-center gap-1.5 sm:gap-2 truncate">
              <Cpu size={14} className="text-[#5C0F26] shrink-0" />
              <span className="truncate">Sales AI Agent · Live Simulation</span>
            </span>
          </div>

          {/* Telemetry Chips & Controls */}
          <div className="flex items-center gap-2 sm:gap-4 text-[11px] font-mono text-gray-500 shrink-0">
            <div className="hidden md:flex items-center gap-1.5 bg-white px-2.5 py-1 rounded-lg border border-gray-200 shadow-xs">
              <Activity size={12} className="text-emerald-600 animate-pulse" />
              <span>Throughput: <strong className="text-gray-900">185 tok/s</strong></span>
            </div>
            <div className="hidden md:flex items-center gap-1.5 bg-white px-2.5 py-1 rounded-lg border border-gray-200 shadow-xs">
              <Zap size={12} className="text-amber-500" />
              <span>Latency: <strong className="text-gray-900">14ms</strong></span>
            </div>
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              aria-label={isPlaying ? "Pause autoplay" : "Start autoplay"}
              className="flex items-center gap-1.5 bg-white hover:bg-gray-100 text-gray-700 px-2.5 py-1 rounded-lg border border-gray-200 shadow-xs transition-colors cursor-pointer text-xs font-medium"
            >
              {isPlaying ? <Pause size={12} className="text-[#5C0F26]" /> : <Play size={12} className="text-[#5C0F26]" />}
              <span className="text-[11px] font-semibold">{isPlaying ? "Pause" : "Auto-Play"}</span>
            </button>
          </div>
        </div>

        {/* Step Navigation Rail - Mobile Horizontal Scrollable / Desktop Grid */}
        <div className="flex overflow-x-auto scrollbar-hide border-b border-gray-200 bg-gray-50/50 sm:grid sm:grid-cols-5 snap-x">
          {STAGES.map((s, idx) => {
            const SIcon = s.icon;
            const isActive = activeStage === idx;
            return (
              <button
                key={s.id}
                ref={(el) => {
                  tabRefs.current[idx] = el;
                }}
                onClick={() => {
                  setActiveStage(idx);
                  setIsPlaying(false);
                }}
                className={`relative px-3.5 sm:px-4 py-3 sm:py-4 text-left transition-all duration-300 border-r border-gray-200/70 last:border-r-0 flex flex-col justify-between shrink-0 min-w-[135px] sm:min-w-0 sm:shrink snap-start cursor-pointer ${
                  isActive ? "bg-white shadow-xs" : "hover:bg-white/60 opacity-70 hover:opacity-100"
                }`}
              >
                <div className="flex items-center justify-between mb-1.5 gap-1.5">
                  <span
                    className="text-[10px] sm:text-[11px] font-mono font-bold whitespace-nowrap"
                    style={{ color: isActive ? s.color : "#6B7280" }}
                  >
                    PHASE {s.number}
                  </span>
                  <SIcon
                    size={14}
                    className="shrink-0"
                    style={{ color: isActive ? s.color : "#9CA3AF" }}
                  />
                </div>
                <div
                  className={`text-xs sm:text-sm font-bold whitespace-nowrap sm:whitespace-normal sm:truncate transition-colors ${
                    isActive ? "text-gray-900 font-extrabold" : "text-gray-600"
                  }`}
                >
                  {s.name}
                </div>

                {/* Active Underline Beam in Brand Color */}
                {isActive && (
                  <motion.div
                    layoutId="activeTabBeamLight"
                    className="absolute bottom-0 left-0 right-0 h-0.5"
                    style={{ background: s.color }}
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* Main Stage Viewport (Split: Left Story + Right Visual Hyperframe) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[380px] sm:min-h-[460px]">
          
          {/* Left: Phase Narrative & Controller */}
          <div className="lg:col-span-5 p-5 sm:p-8 lg:p-10 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-gray-100 bg-white">
            <div>
              <h3 className="font-display font-extrabold text-xl sm:text-2xl lg:text-3xl text-gray-900 tracking-tight mb-2.5 sm:mb-3">
                {stage.name}
              </h3>

              <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-5 sm:mb-6">
                {stage.desc}
              </p>

              {/* Live Metric Pill in Light Brand Theme */}
              <div
                className="rounded-xl sm:rounded-2xl p-3.5 sm:p-4 mb-5 sm:mb-6 border transition-all"
                style={{
                  backgroundColor: stage.lightBg,
                  borderColor: stage.borderColor,
                }}
              >
                <div className="text-[10px] font-mono uppercase tracking-widest text-gray-500 mb-1 flex items-center gap-1.5 font-bold">
                  <Radio size={12} className="text-emerald-600 animate-ping" />
                  Live Execution Result
                </div>
                <div className="text-xs sm:text-sm font-bold text-gray-900 flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-emerald-600 shrink-0" />
                  <span>{stage.metrics}</span>
                </div>
              </div>
            </div>

            {/* Quick Navigation Buttons */}
            <div className="flex items-center justify-between pt-4 border-t border-gray-100 gap-2">
              <div className="text-xs font-mono text-gray-500">
                Step <strong className="text-gray-900 font-bold">{activeStage + 1}</strong> of {STAGES.length}
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => {
                    setActiveStage((prev) => (prev - 1 + STAGES.length) % STAGES.length);
                    setIsPlaying(false);
                  }}
                  className="px-3 sm:px-3.5 py-1.5 text-xs font-semibold rounded-xl bg-gray-100 hover:bg-gray-200 text-gray-700 border border-gray-200 transition-colors cursor-pointer"
                >
                  Prev
                </button>
                <button
                  onClick={() => {
                    setActiveStage((prev) => (prev + 1) % STAGES.length);
                    setIsPlaying(false);
                  }}
                  className="px-3.5 sm:px-4 py-1.5 text-xs font-bold rounded-xl text-white transition-all flex items-center gap-1 shadow-md hover:opacity-95 cursor-pointer"
                  style={{
                    background: `linear-gradient(135deg, ${stage.color}, ${stage.accentColor})`,
                  }}
                >
                  Next Phase <ChevronRight size={14} />
                </button>
              </div>
            </div>
          </div>

          {/* Right: The Light Theme Hyperframe Screen */}
          <div className="lg:col-span-7 p-4 sm:p-8 lg:p-10 flex flex-col justify-center bg-gray-50/70 relative overflow-hidden">
            {/* Subtle light cyber grid */}
            <div
              className="absolute inset-0 opacity-40 pointer-events-none"
              style={{
                backgroundImage: "linear-gradient(rgba(0,0,0,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.05) 1px, transparent 1px)",
                backgroundSize: "24px 24px",
              }}
            />

            {/* Soft Ambient Aurora behind hyperframe */}
            <div
              className="absolute w-72 h-72 rounded-full blur-[90px] opacity-15 pointer-events-none transition-all duration-700"
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
      className="relative z-10 w-full bg-white border border-gray-200/90 rounded-2xl p-4 sm:p-6 shadow-lg"
    >
      {/* Top Scanner Line */}
      <div className="flex items-center justify-between pb-3 mb-4 border-b border-gray-100 text-xs font-mono gap-2">
        <span className="text-[#5C0F26] font-bold flex items-center gap-1.5 truncate">
          <Search size={14} className="animate-spin text-[#5C0F26] shrink-0" />
          <span className="truncate">Autonomous Query Engine</span>
        </span>
        <span className="text-emerald-700 bg-emerald-50 px-2 sm:px-2.5 py-0.5 rounded-full border border-emerald-200 font-bold text-[10px] sm:text-[11px] shrink-0">
          Match Active
        </span>
      </div>

      {/* Discovered Lead Cards */}
      <div className="space-y-2.5">
        {[
          { name: "FinEdge Systems", location: "San Francisco, CA", size: "180 Emp", funding: "Series B $32M", match: "99% ICP Match", badgeBg: "bg-emerald-50 text-emerald-700 border-emerald-200" },
          { name: "Apex Logistics AI", location: "New York, NY", size: "320 Emp", funding: "Series A $14M", match: "97% ICP Match", badgeBg: "bg-blue-50 text-blue-700 border-blue-200" },
          { name: "Nova Health Tech", location: "Boston, MA", size: "95 Emp", funding: "Seed $4.5M", match: "94% ICP Match", badgeBg: "bg-purple-50 text-purple-700 border-purple-200" },
        ].map((lead, i) => (
          <motion.div
            key={lead.name}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.15 + 0.1 }}
            className="flex flex-col xs:flex-row xs:items-center justify-between p-3 sm:p-3.5 rounded-xl bg-gray-50/80 border border-gray-200/80 hover:bg-white hover:border-[#5C0F26]/30 hover:shadow-xs transition-all gap-2"
          >
            <div className="flex items-center gap-2.5 sm:gap-3 min-w-0">
              <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-[#FDF4F6] border border-[#F3D8DF] flex items-center justify-center text-[#5C0F26] shrink-0">
                <Building2 size={16} className="sm:w-[18px] sm:h-[18px]" />
              </div>
              <div className="min-w-0">
                <div className="text-xs sm:text-sm font-bold text-gray-900 flex flex-wrap items-center gap-1.5 sm:gap-2">
                  <span className="truncate">{lead.name}</span>
                  <span className="text-[10px] font-mono text-gray-500 font-normal">{lead.location}</span>
                </div>
                <div className="text-[11px] text-gray-500 flex items-center gap-1.5 sm:gap-2 mt-0.5">
                  <span>{lead.size}</span>
                  <span>•</span>
                  <span>{lead.funding}</span>
                </div>
              </div>
            </div>

            <span className={`text-[10px] font-mono font-bold px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-lg border self-start xs:self-center shrink-0 ${lead.badgeBg}`}>
              {lead.match}
            </span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

/* ------------------------------------------------------------------ */
/*  Hyperframe 02: News Intelligence (NLP Semantic Scan)              */
/* ------------------------------------------------------------------ */

function StageIntelligence() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96, y: 15 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.96, y: -15 }}
      transition={{ duration: 0.4 }}
      className="relative z-10 w-full bg-white border border-purple-200 rounded-2xl p-4 sm:p-6 shadow-lg overflow-hidden"
    >
      {/* Animated Laser Scanning Line */}
      <motion.div
        animate={{ y: [0, 180, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
        className="absolute left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-purple-500 to-transparent shadow-[0_0_10px_rgba(168,85,247,0.4)] z-20 pointer-events-none"
      />

      <div className="flex items-center justify-between pb-3 mb-4 border-b border-gray-100 text-xs font-mono gap-2">
        <span className="text-purple-700 font-bold flex items-center gap-1.5 truncate">
          <Newspaper size={14} className="text-purple-600 shrink-0" />
          <span className="truncate">Latest News About Leads</span>
        </span>
        <span className="text-purple-700 bg-purple-50 px-2 sm:px-2.5 py-0.5 rounded-full border border-purple-200 text-[10px] sm:text-[11px] font-bold shrink-0">
          High Intent
        </span>
      </div>

      {/* Extracted Trigger Signals */}
      <div className="space-y-3">
        <div className="p-3 sm:p-3.5 rounded-xl bg-purple-50/60 border border-purple-200 text-xs leading-relaxed text-gray-800">
          <div className="flex items-center gap-2 mb-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shrink-0" />
            <span className="font-mono font-bold text-purple-900 uppercase text-[10px] tracking-wider">Trigger #1: Capital Expansion</span>
          </div>
          &ldquo;FinEdge Systems secures <strong className="text-purple-950 bg-purple-100/90 font-bold px-1.5 py-0.5 rounded border border-purple-200">Series B $32M funding</strong> to accelerate enterprise infrastructure.&rdquo;
        </div>

        <div className="p-3 sm:p-3.5 rounded-xl bg-blue-50/60 border border-blue-200 text-xs leading-relaxed text-gray-800">
          <div className="flex items-center gap-2 mb-1.5">
            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse shrink-0" />
            <span className="font-mono font-bold text-blue-900 uppercase text-[10px] tracking-wider">Trigger #2: Executive Hire</span>
          </div>
          &ldquo;Appoints new <strong className="text-blue-950 bg-blue-100/90 font-bold px-1.5 py-0.5 rounded border border-blue-200">VP of Technology Alex Rivera</strong> to overhaul cloud security &amp; automated workflows.&rdquo;
        </div>
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
      className="relative z-10 w-full bg-white border border-sky-200 rounded-2xl p-4 sm:p-6 shadow-lg"
    >
      <div className="flex items-center justify-between pb-3 mb-4 border-b border-gray-100 text-xs font-mono">
        <span className="text-sky-700 font-bold flex items-center gap-1.5">
          <UserCheck size={14} className="text-sky-600 shrink-0" />
          Contact Search
        </span>
      </div>

      {/* Contact Cards */}
      <div className="space-y-2.5">
        {[
          { name: "Alex Rivera", role: "VP of Tech / CTO", email: "alex.rivera@finedge.io", company: "FinEdge Systems" },
          { name: "Sarah Chen", role: "Head of Infrastructure", email: "sarah.chen@apexflow.ai", company: "ApexFlow AI" },
          { name: "Marcus Vance", role: "Director of IT Ops", email: "m.vance@cloudscale.net", company: "CloudScale Tech" },
        ].map((contact, i) => (
          <motion.div
            key={contact.email}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.15 + 0.1 }}
            className="flex flex-col sm:flex-row sm:items-center justify-between p-3 sm:p-3.5 rounded-xl bg-gray-50/80 border border-gray-200 hover:border-sky-300 hover:bg-white transition-all gap-2"
          >
            <div className="min-w-0">
              <div className="text-xs sm:text-sm font-bold text-gray-900 flex flex-wrap items-center gap-1.5 sm:gap-2">
                <span>{contact.name}</span>
                <span className="text-[10px] font-mono text-sky-800 bg-sky-100/90 font-bold px-2 py-0.5 rounded border border-sky-200">
                  {contact.role}
                </span>
              </div>
              <div className="text-[11px] font-mono text-gray-500 mt-0.5 break-all sm:break-normal">{contact.email}</div>
            </div>

            <div className="flex items-center gap-2 shrink-0 self-start sm:self-center">
              <span className="text-[10px] sm:text-[11px] font-mono text-gray-700 bg-white border border-gray-200 px-2 sm:px-2.5 py-1 rounded-lg flex items-center gap-1.5 shadow-xs">
                <Building2 size={12} className="text-sky-600 shrink-0" />
                <span className="truncate">{contact.company}</span>
              </span>
            </div>
          </motion.div>
        ))}
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
      className="relative z-10 w-full bg-white border border-amber-200 rounded-2xl p-4 sm:p-6 shadow-lg"
    >
      <div className="flex items-center justify-between pb-3 mb-3 border-b border-gray-100 text-xs font-mono">
        <span className="text-amber-800 font-bold flex items-center gap-1.5">
          <Send size={14} className="text-amber-600 shrink-0" />
          Outreach Generation
        </span>
        <span className="text-amber-800 bg-amber-50 px-2.5 py-0.5 rounded-full border border-amber-200 text-[11px] font-bold">
          Score: 98/100
        </span>
      </div>

      {/* Email Mock Header */}
      <div className="bg-gray-50 rounded-xl p-2.5 sm:p-3 border border-gray-200 text-[11px] font-mono space-y-1 mb-3 text-gray-700 break-words">
        <div><strong className="text-gray-500">To:</strong> Alex Rivera &lt;alex.rivera@finedge.io&gt;</div>
        <div><strong className="text-gray-500">Subject:</strong> FinEdge&apos;s $32M Series B &amp; scaling IT infrastructure</div>
      </div>

      {/* Email Body Preview with Contextual Tokens */}
      <div className="p-3.5 sm:p-4 rounded-xl bg-amber-50/30 border border-amber-200 text-xs sm:text-sm text-gray-800 leading-relaxed font-sans space-y-2.5">
        <p>
          Hi Alex, congrats on FinEdge&apos;s <span className="bg-amber-100 text-amber-900 font-semibold px-1.5 py-0.5 rounded font-mono text-xs border border-amber-200">Series B $32M round</span> and your new role heading engineering.
        </p>
        <p>
          Saw you&apos;re expanding into London. Fast-growing FinTech teams usually face severe staging bottlenecks and server deployment latency during global scale-up.
        </p>
        <p className="text-gray-700 font-medium">
          Would you be open to a 10-min intro next Tuesday at 2 PM to see how we automate deployment?
        </p>
        <p className="text-amber-900 text-xs bg-amber-50 border border-amber-200 rounded-lg p-2.5 font-medium">
          Here is how our company can help this lead: We streamline enterprise cloud deployment and automate infrastructure scaling so your team accelerates go-to-market with zero downtime.
        </p>
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
      className="relative z-10 w-full bg-white border border-emerald-200 rounded-2xl p-4 sm:p-6 shadow-lg"
    >
      <div className="flex items-center justify-between pb-3 mb-4 border-b border-gray-100 text-xs font-mono">
        <span className="text-emerald-800 font-bold flex items-center gap-1.5">
          <RefreshCw size={14} className="text-emerald-600 shrink-0" />
          Automated Sequence
        </span>
        <span className="text-emerald-800 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200 font-bold text-[11px]">
          Conversion: Won 🚀
        </span>
      </div>

      {/* Multi-Touch Sequence Progression */}
      <div className="space-y-3">
        {/* Step 1: Initial */}
        <div className="flex items-center justify-between p-2.5 sm:p-3 rounded-xl bg-gray-50 border border-gray-200 text-xs text-gray-700">
          <div className="flex items-center gap-2">
            <span className="w-6 h-6 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center font-mono font-bold text-[10px] shrink-0">D1</span>
            <span>Initial Outreach Delivered</span>
          </div>
          <span className="text-emerald-600 font-bold text-xs shrink-0">✓ Opened</span>
        </div>

        {/* Step 2: Incoming Positive Reply */}
        <div className="p-3 sm:p-3.5 rounded-xl bg-emerald-50/80 border border-emerald-300 text-xs text-gray-900">
          <div className="flex items-center justify-between mb-1.5 gap-2">
            <span className="font-mono font-bold text-emerald-800 text-[10px] uppercase flex items-center gap-1 tracking-wider">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping shrink-0" />
              Incoming Reply (Alex Rivera)
            </span>
            <span className="text-gray-500 text-[10px] font-mono shrink-0">10m ago</span>
          </div>
          <p className="italic text-gray-800 font-medium">
            &ldquo;Thanks for reaching out. Perfect timing — let&apos;s connect on Thursday at 2:30 PM. Sending invite.&rdquo;
          </p>
        </div>

        {/* Auto Actions */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[11px] font-mono text-gray-800">
          <div className="p-2 sm:p-2.5 rounded-xl bg-white border border-gray-200 flex items-center gap-2 shadow-xs">
            <Check size={14} className="text-emerald-600 shrink-0" />
            <span className="truncate font-semibold">Google Calendar Synced</span>
          </div>
          <div className="p-2 sm:p-2.5 rounded-xl bg-white border border-gray-200 flex items-center gap-2 shadow-xs">
            <Check size={14} className="text-emerald-600 shrink-0" />
            <span className="truncate font-semibold">HubSpot CRM Updated</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
