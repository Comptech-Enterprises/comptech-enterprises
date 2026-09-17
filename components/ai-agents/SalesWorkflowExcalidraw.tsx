"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  MousePointer,
  Square,
  Diamond,
  ArrowRight,
  Pencil,
  Type,
  StickyNote,
  Eraser,
  Play,
  Pause,
  RotateCcw,
  Calendar,
  ZoomIn,
  ZoomOut,
  Lock,
} from "lucide-react";

/* ------------------------------------------------------------------ */
/*  Workflow Steps Data in Excalidraw / Sketch Style                  */
/* ------------------------------------------------------------------ */

interface SketchStep {
  id: string;
  stepNumber: string;
  title: string;
  subtitle: string;
  tag: string;
  handwrittenNote: string;
  annotation: string;
  arrowText: string;
  color: {
    bg: string;
    border: string;
    text: string;
    badge: string;
    highlight: string;
    stroke: string;
  };
  details: {
    heading: string;
    summary: string;
    bullets: string[];
    sampleOutput: {
      type: "list" | "card" | "email" | "calendar";
      title: string;
      items?: { label: string; value: string; badge?: string }[];
      emailData?: { to: string; subject: string; body: string };
      calendarData?: { event: string; with: string; time: string; status: string };
    };
  };
}

const SKETCH_STEPS: SketchStep[] = [
  {
    id: "discovery",
    stepNumber: "01",
    title: "Prospect Discovery",
    subtitle: "Autonomous ICP Scanner",
    tag: "Target Filter Node",
    handwrittenNote: "Scans 1,400+ companies matching exact ICP criteria in minutes!",
    annotation: "Zero manual LinkedIn scraping ⚡",
    arrowText: "Sends filtered leads",
    color: {
      bg: "#EFF6FF",
      border: "#3B82F6",
      text: "#1E40AF",
      badge: "#DBEAFE",
      highlight: "#FEF08A",
      stroke: "#2563EB",
    },
    details: {
      heading: "1. Automated ICP Prospecting",
      summary: "The agent queries LinkedIn Sales Navigator, Crunchbase, and MCA databases using fuzzy AI matching.",
      bullets: [
        "Headcount: 50 – 500 employees",
        "Geography: India / APAC / US Tier-1",
        "Recent trigger: Series A/B funding or executive hires",
      ],
      sampleOutput: {
        type: "list",
        title: "Discovered Accounts (Top Matches)",
        items: [
          { label: "FinEdge Systems", value: "99% ICP Match", badge: "FinTech · Series B" },
          { label: "Apex Logistics AI", value: "97% ICP Match", badge: "Supply Chain · Series A" },
          { label: "Nova Health Tech", value: "94% ICP Match", badge: "Health · Seed $4.5M" },
        ],
      },
    },
  },
  {
    id: "intelligence",
    stepNumber: "02",
    title: "News & Signal Radar",
    subtitle: "Live Web & PR Analysis",
    tag: "Context Engine",
    handwrittenNote: "Finds real trigger events (new funding, product launch) to hook the prospect!",
    annotation: "100% relevant conversation openers 📰",
    arrowText: "Injects context signals",
    color: {
      bg: "#FAF5FF",
      border: "#9333EA",
      text: "#6B21A8",
      badge: "#F3E8FF",
      highlight: "#E9D5FF",
      stroke: "#7E22CE",
    },
    details: {
      heading: "2. Real-Time Signal Intelligence",
      summary: "Performs instant sentiment & news mining to find the exact reason to reach out today.",
      bullets: [
        "Extracted: 'FinEdge expands digital lending to APAC'",
        "Pain Point: Scaling sales & compliance operations",
        "Decision Maker: VP of Engineering / Head of Sales",
      ],
      sampleOutput: {
        type: "list",
        title: "Extracted Trigger Signals",
        items: [
          { label: "PR Article", value: "APAC expansion announcement", badge: "2 days ago" },
          { label: "Hiring Signal", value: "14 new AE & SDR roles posted", badge: "Active" },
          { label: "Tech Stack", value: "Next.js, Python, AWS detected", badge: "Verified" },
        ],
      },
    },
  },
  {
    id: "enrichment",
    stepNumber: "03",
    title: "Biometric Contact Lock",
    subtitle: "Verified Decision Maker",
    tag: "Enrichment API",
    handwrittenNote: "Guaranteed deliverability — no bounced emails, no junk mail filters!",
    annotation: "99.2% verified direct emails & mobile 🎯",
    arrowText: "Feeds verified contact",
    color: {
      bg: "#FFFBEB",
      border: "#D97706",
      text: "#92400E",
      badge: "#FEF3C7",
      highlight: "#FEF08A",
      stroke: "#B45309",
    },
    details: {
      heading: "3. Direct Contact Extraction",
      summary: "Multi-vendor waterfall enrichment ensures zero bounce rate and direct decision-maker routing.",
      bullets: [
        "Identified: Rahul Mehta (VP of Product & Tech)",
        "Direct email: rahul.m@finedgesys.com (SMTP Validated)",
        "LinkedIn: linkedin.com/in/rahul-mehta-ai",
      ],
      sampleOutput: {
        type: "card",
        title: "Contact Card Locked",
        items: [
          { label: "Full Name", value: "Rahul Mehta" },
          { label: "Verified Email", value: "rahul.m@finedgesys.com", badge: "100% Valid" },
          { label: "Direct Phone", value: "+91 98712 •••••", badge: "Opt-in Safe" },
          { label: "Timezone", value: "IST (UTC +5:30) · Active now" },
        ],
      },
    },
  },
  {
    id: "outreach",
    stepNumber: "04",
    title: "Tailored AI Outreach",
    subtitle: "Hyper-Personalized Copy",
    tag: "LLM Writer",
    handwrittenNote: "Drafts a bespoke message citing their exact news & tech challenges.",
    annotation: "Never sounds robotic or spammy ✍️",
    arrowText: "Prospect responds & books",
    color: {
      bg: "#FDF2F8",
      border: "#DB2777",
      text: "#9D174D",
      badge: "#FCE7F3",
      highlight: "#FBCFE8",
      stroke: "#BE185D",
    },
    details: {
      heading: "4. Hyper-Personalized AI Email",
      summary: "Synthesizes company intelligence into a human-crafted, 3-sentence high-converting pitch.",
      bullets: [
        "Subject line tailored to APAC expansion",
        "Clear 15-minute low-friction value ask",
        "Sent from dedicated warm email infrastructure",
      ],
      sampleOutput: {
        type: "email",
        title: "Live Generated Email Draft",
        emailData: {
          to: "rahul.m@finedgesys.com",
          subject: "Quick question on FinEdge's APAC lending expansion",
          body: "Hi Rahul — saw FinEdge's recent APAC launch announcement. Congrats! As you scale lending volume, how are you handling automated lead triage and KYC processing? We helped a peer cut onboarding response from 4hrs to 90sec with autonomous AI agents. Open to a quick 12-min chat this Thursday at 3 PM?",
        },
      },
    },
  },
  {
    id: "booking",
    stepNumber: "05",
    title: "Calendar Booking",
    subtitle: "Automated Calendar Sync",
    tag: "Outcome Hub",
    handwrittenNote: "Meeting booked right into your rep's Google / Outlook calendar automatically!",
    annotation: "Sales rep only has to show up! 📅",
    arrowText: "Sales Rep closes deal 🎉",
    color: {
      bg: "#ECFDF5",
      border: "#059669",
      text: "#065F46",
      badge: "#D1FAE5",
      highlight: "#A7F3D0",
      stroke: "#047857",
    },
    details: {
      heading: "5. Confirmed Sales Meeting",
      summary: "Agent parses reply intent, handles scheduling back-and-forth, and creates the calendar event.",
      bullets: [
        "Positive reply detected ('Let's talk Thursday 3pm')",
        "Google Meet / Zoom link generated automatically",
        "Meeting dossier & briefing note sent to account exec",
      ],
      sampleOutput: {
        type: "calendar",
        title: "Calendar Event Confirmed",
        calendarData: {
          event: "Comptech AI Intro · Rahul Mehta (FinEdge)",
          with: "Rahul Mehta & Deepak Negi",
          time: "Thursday · 3:00 PM - 3:15 PM IST",
          status: "Google Meet Link Attached · Confirmed",
        },
      },
    },
  },
];

/* ------------------------------------------------------------------ */
/*  Main Excalidraw Workflow Component                                */
/* ------------------------------------------------------------------ */

export function SalesWorkflowExcalidraw() {
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [activeTool, setActiveTool] = useState<string>("select");

  const currentStep = SKETCH_STEPS[activeStepIndex];

  // Auto-play / Sketch walkthrough animation
  useEffect(() => {
    if (!isPlaying) return;
    const timer = setInterval(() => {
      setActiveStepIndex((prev) => (prev + 1) % SKETCH_STEPS.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [isPlaying]);

  return (
    <div className="w-full relative">
      {/* ── Excalidraw Whiteboard Canvas Container ── */}
      <div className="w-full bg-[#FAFAFA] rounded-3xl border-2 border-gray-300/80 shadow-2xl overflow-hidden relative select-none">
        
        {/* Subtle dot-grid canvas background */}
        <div
          className="absolute inset-0 pointer-events-none opacity-40"
          style={{
            backgroundImage: "radial-gradient(#94A3B8 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />

        {/* ── Canvas Top Toolbar (Excalidraw Style) ── */}
        <div className="relative z-20 border-b border-gray-200/80 bg-white/90 backdrop-blur-md px-3 sm:px-6 py-2.5 flex items-center justify-between gap-2">
          
          {/* Left: Lock & Canvas Name */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center text-gray-600 border border-gray-200">
              <Lock size={15} />
            </div>
            <div className="hidden sm:block">
              <span className="font-handwritten text-xl font-bold text-gray-800 tracking-wide">
                Sales_AI_Agent_Architecture.excalidraw
              </span>
            </div>
          </div>

          {/* Center: Excalidraw Tool Palette */}
          <div className="flex items-center bg-gray-100/90 p-1 rounded-xl border border-gray-200 shadow-inner gap-0.5">
            {[
              { id: "select", icon: MousePointer, label: "Selection (V)" },
              { id: "rect", icon: Square, label: "Rectangle (R)" },
              { id: "diamond", icon: Diamond, label: "Diamond (D)" },
              { id: "arrow", icon: ArrowRight, label: "Arrow (A)" },
              { id: "draw", icon: Pencil, label: "Draw (P)" },
              { id: "text", icon: Type, label: "Text (T)" },
              { id: "sticky", icon: StickyNote, label: "Sticky Note (S)" },
              { id: "eraser", icon: Eraser, label: "Eraser (E)" },
            ].map((tool) => (
              <button
                key={tool.id}
                onClick={() => setActiveTool(tool.id)}
                title={tool.label}
                className={`p-1.5 sm:p-2 rounded-lg text-xs font-medium transition-all ${
                  activeTool === tool.id
                    ? "bg-[#6965DB] text-white shadow-sm"
                    : "text-gray-600 hover:bg-gray-200/80 hover:text-gray-900"
                }`}
              >
                <tool.icon size={15} />
              </button>
            ))}
          </div>

          {/* Right: Auto Play Simulation & Reset */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold font-handwritten transition-all shadow-sm ${
                isPlaying
                  ? "bg-rose-500 text-white animate-pulse"
                  : "bg-white text-gray-800 border border-gray-300 hover:border-gray-400"
              }`}
            >
              {isPlaying ? <Pause size={14} /> : <Play size={14} />}
              <span className="text-base">{isPlaying ? "Pause Demo" : "Auto-Draw Tour"}</span>
            </button>

            <button
              onClick={() => setActiveStepIndex(0)}
              title="Reset to Step 1"
              className="p-1.5 rounded-lg bg-gray-100 text-gray-600 hover:bg-gray-200 border border-gray-200"
            >
              <RotateCcw size={14} />
            </button>
          </div>
        </div>

        {/* ── Main Interactive Whiteboard Canvas Area ── */}
        <div className="relative z-10 p-5 sm:p-8 lg:p-12 min-h-[620px]">
          
          {/* Excalidraw Sketch Title Annotation */}
          <div className="text-center mb-10 relative max-w-4xl mx-auto">
            <div className="inline-block relative">
              <span className="font-handwritten text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-wide">
                Sales AI Agent — How It Works Under The Hood
              </span>
              
              {/* Hand-drawn underline stroke */}
              <svg className="w-full h-3.5 mt-1 text-[#6965DB]" viewBox="0 0 300 12" fill="none" preserveAspectRatio="none">
                <path
                  d="M2 9C50 2 150 11 298 5"
                  stroke="currentColor"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                />
              </svg>
            </div>
            
            <p className="font-handwritten text-xl sm:text-2xl text-gray-600 mt-2">
              (Click any sketched step or watch the automated workflow journey)
            </p>

            {/* Hand-drawn floating sticky annotation */}
            <div className="hidden xl:block absolute -top-3 -right-28 rotate-3 bg-[#FEF08A] p-3 rounded-lg shadow-md border border-amber-300 max-w-[220px] text-left">
              <span className="font-handwritten text-base leading-tight font-bold text-amber-950 block">
                ✏️ &quot;Runs 24/7 autonomously without human intervention!&quot;
              </span>
              <span className="text-[10px] text-amber-800/80 font-sans mt-0.5 block">— Excalidraw Schema</span>
            </div>
          </div>

          {/* ── Step-by-Step Hand-Drawn Flow Nodes (Interactive Timeline) ── */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 lg:gap-6 mb-12">
            {SKETCH_STEPS.map((step, idx) => {
              const isActive = activeStepIndex === idx;
              return (
                <div key={step.id} className="relative flex flex-col items-center">
                  
                  {/* Clickable Hand-Drawn Node Box */}
                  <motion.button
                    onClick={() => {
                      setActiveStepIndex(idx);
                      setIsPlaying(false);
                    }}
                    whileHover={{ scale: 1.03, rotate: idx % 2 === 0 ? 1 : -1 }}
                    whileTap={{ scale: 0.98 }}
                    className={`w-full text-left p-4 sm:p-5 rounded-2xl relative transition-all duration-300 ${
                      isActive
                        ? "shadow-xl ring-2 ring-offset-2"
                        : "bg-white/80 hover:bg-white shadow-md border-2 border-dashed border-gray-300"
                    }`}
                    style={{
                      backgroundColor: isActive ? step.color.bg : "white",
                      borderColor: isActive ? step.color.border : "#CBD5E1",
                      boxShadow: isActive ? `0 12px 28px -6px ${step.color.border}35` : undefined,
                    }}
                  >
                    {/* Hand-drawn sketchy border simulation SVG */}
                    {isActive && (
                      <svg
                        className="absolute inset-0 w-full h-full pointer-events-none rounded-2xl"
                        style={{ overflow: "visible" }}
                      >
                        <rect
                          x="2"
                          y="2"
                          width="calc(100% - 4px)"
                          height="calc(100% - 4px)"
                          rx="14"
                          fill="none"
                          stroke={step.color.stroke}
                          strokeWidth="2.5"
                          strokeDasharray="4 2"
                        />
                      </svg>
                    )}

                    {/* Step number badge (Handwritten circle) */}
                    <div className="flex items-center justify-between mb-3">
                      <span
                        className="w-8 h-8 rounded-full flex items-center justify-center font-handwritten text-lg font-bold border"
                        style={{
                          backgroundColor: step.color.badge,
                          borderColor: step.color.border,
                          color: step.color.text,
                        }}
                      >
                        {step.stepNumber}
                      </span>
                      <span
                        className="text-[11px] font-mono uppercase tracking-wider px-2 py-0.5 rounded-md border"
                        style={{
                          backgroundColor: step.color.badge,
                          borderColor: `${step.color.border}40`,
                          color: step.color.text,
                        }}
                      >
                        {step.tag}
                      </span>
                    </div>

                    {/* Node Title */}
                    <h3 className="font-handwritten text-2xl font-bold text-gray-900 leading-tight mb-1">
                      {step.title}
                    </h3>
                    <p className="text-xs text-gray-500 font-sans font-medium">
                      {step.subtitle}
                    </p>

                    {/* Status Pill */}
                    <div className="mt-3 pt-2 border-t border-gray-200/60 flex items-center gap-1.5">
                      <span
                        className={`w-2 h-2 rounded-full ${isActive ? "animate-ping" : ""}`}
                        style={{ backgroundColor: step.color.border }}
                      />
                      <span className="font-handwritten text-sm text-gray-700 font-semibold">
                        {isActive ? "Active Node ✍️" : "Click to view"}
                      </span>
                    </div>
                  </motion.button>

                  {/* Connecting Arrow between nodes on desktop */}
                  {idx < SKETCH_STEPS.length - 1 && (
                    <div className="hidden md:block absolute -right-3.5 top-1/2 -translate-y-1/2 z-20 pointer-events-none">
                      <svg className="w-7 h-7 text-gray-400" viewBox="0 0 24 24" fill="none">
                        <path
                          d="M4 12C9 10 14 14 20 12M15 7L20 12L15 17"
                          stroke="currentColor"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* ── Active Node Hand-Drawn Blueprint Detail Section ── */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentStep.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start"
            >
              {/* Left Column: Sketchy Blueprint Explanation */}
              <div className="lg:col-span-5 bg-white p-6 sm:p-7 rounded-3xl border-2 border-gray-300 shadow-lg relative">
                
                {/* Top tape piece effect */}
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-28 h-6 bg-amber-100/90 border border-amber-200/80 shadow-xs rotate-1 pointer-events-none" />

                <div className="flex items-center gap-2 mb-3">
                  <span className="px-3 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-gray-100 text-gray-700 border border-gray-200">
                    Phase {currentStep.stepNumber} of 05
                  </span>
                  <span className="font-handwritten text-lg font-bold text-[#6965DB]">
                    Step Blueprint
                  </span>
                </div>

                <h4 className="font-handwritten text-3xl font-extrabold text-gray-900 mb-2">
                  {currentStep.details.heading}
                </h4>

                <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-5 font-sans">
                  {currentStep.details.summary}
                </p>

                {/* Handwritten Bullet Checks */}
                <div className="space-y-2.5 mb-6">
                  {currentStep.details.bullets.map((bullet, bIdx) => (
                    <div key={bIdx} className="flex items-start gap-2.5">
                      <span className="mt-0.5 text-emerald-600 font-bold font-handwritten text-xl">
                        ✓
                      </span>
                      <span className="font-handwritten text-xl font-bold text-gray-800 leading-snug">
                        {bullet}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Sticky note annotation callout */}
                <div
                  className="p-4 rounded-2xl border relative rotate-[-1deg]"
                  style={{
                    backgroundColor: currentStep.color.highlight,
                    borderColor: `${currentStep.color.border}60`,
                  }}
                >
                  <p className="font-handwritten text-xl font-bold text-gray-900 leading-snug">
                    📌 {currentStep.handwrittenNote}
                  </p>
                  <span className="text-xs font-mono text-gray-600 mt-1 block">
                    {currentStep.annotation}
                  </span>
                </div>

                {/* Next / Prev Step Controls */}
                <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-between">
                  <button
                    onClick={() =>
                      setActiveStepIndex((prev) => (prev > 0 ? prev - 1 : SKETCH_STEPS.length - 1))
                    }
                    className="px-4 py-2 rounded-xl text-xs font-bold font-handwritten text-gray-700 bg-gray-100 hover:bg-gray-200 transition-colors"
                  >
                    ← Previous Step
                  </button>
                  <span className="font-mono text-xs text-gray-400">
                    {activeStepIndex + 1} / {SKETCH_STEPS.length}
                  </span>
                  <button
                    onClick={() =>
                      setActiveStepIndex((prev) => (prev + 1) % SKETCH_STEPS.length)
                    }
                    className="px-4 py-2 rounded-xl text-xs font-bold font-handwritten text-white transition-all shadow-md"
                    style={{ backgroundColor: currentStep.color.border }}
                  >
                    Next Step →
                  </button>
                </div>
              </div>

              {/* Right Column: Hand-Drawn Live Simulated Output Card */}
              <div className="lg:col-span-7 bg-[#FCFCFD] p-6 sm:p-7 rounded-3xl border-2 border-gray-300 shadow-lg relative overflow-hidden">
                
                {/* Sketchy header bar */}
                <div className="flex items-center justify-between pb-4 border-b border-gray-200 mb-5">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-400" />
                    <div className="w-3 h-3 rounded-full bg-yellow-400" />
                    <div className="w-3 h-3 rounded-full bg-green-400" />
                    <span className="font-mono text-xs text-gray-500 ml-2">
                      sim_output_{currentStep.id}.json
                    </span>
                  </div>
                  <span className="font-handwritten text-lg font-bold text-gray-600">
                    ✏️ Real-time Live Result
                  </span>
                </div>

                {/* Case 1: Discovered Account List */}
                {currentStep.details.sampleOutput.type === "list" && (
                  <div className="space-y-3">
                    <h5 className="font-handwritten text-2xl font-bold text-gray-900 mb-3">
                      {currentStep.details.sampleOutput.title}
                    </h5>
                    {currentStep.details.sampleOutput.items?.map((item, iIdx) => (
                      <div
                        key={iIdx}
                        className="p-3.5 rounded-2xl bg-white border border-gray-200 shadow-xs flex items-center justify-between gap-3 hover:border-blue-300 transition-all"
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold text-xs border border-blue-100">
                            {iIdx + 1}
                          </div>
                          <div>
                            <span className="font-sans font-bold text-gray-900 text-sm block">
                              {item.label}
                            </span>
                            <span className="font-mono text-xs text-gray-500">
                              {item.badge}
                            </span>
                          </div>
                        </div>
                        <span className="font-handwritten text-lg font-bold text-emerald-600 bg-emerald-50 px-3 py-1 rounded-xl border border-emerald-200">
                          {item.value}
                        </span>
                      </div>
                    ))}
                  </div>
                )}

                {/* Case 2: Contact Card Lock */}
                {currentStep.details.sampleOutput.type === "card" && (
                  <div className="bg-white p-5 rounded-2xl border border-amber-200 shadow-xs">
                    <div className="flex items-center gap-3 mb-4 pb-3 border-b border-gray-100">
                      <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-800 flex items-center justify-center font-handwritten text-2xl font-black">
                        RM
                      </div>
                      <div>
                        <span className="font-handwritten text-2xl font-bold text-gray-900 block leading-tight">
                          Rahul Mehta
                        </span>
                        <span className="font-sans text-xs text-gray-500">
                          VP of Product &amp; Technology @ FinEdge Systems
                        </span>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {currentStep.details.sampleOutput.items?.map((field, fIdx) => (
                        <div key={fIdx} className="p-3 rounded-xl bg-amber-50/50 border border-amber-100">
                          <span className="text-[11px] font-mono text-gray-500 uppercase block">
                            {field.label}
                          </span>
                          <span className="font-sans font-semibold text-sm text-gray-900 block mt-0.5">
                            {field.value}
                          </span>
                          {field.badge && (
                            <span className="inline-block mt-1 font-handwritten text-sm font-bold text-amber-700 bg-amber-100 px-2 py-0.5 rounded-md">
                              ✓ {field.badge}
                            </span>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Case 3: Email Draft Preview */}
                {currentStep.details.sampleOutput.type === "email" && currentStep.details.sampleOutput.emailData && (
                  <div className="bg-white p-5 rounded-2xl border border-pink-200 shadow-xs">
                    <div className="space-y-2 mb-4 pb-3 border-b border-gray-100 text-xs font-mono text-gray-600">
                      <div className="flex items-center gap-2">
                        <span className="text-gray-400 w-14">To:</span>
                        <span className="font-bold text-gray-900 bg-pink-50 px-2 py-0.5 rounded border border-pink-200">
                          {currentStep.details.sampleOutput.emailData.to}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-gray-400 w-14">Subject:</span>
                        <span className="font-semibold text-gray-800">
                          {currentStep.details.sampleOutput.emailData.subject}
                        </span>
                      </div>
                    </div>

                    <div className="p-4 rounded-xl bg-pink-50/30 border border-dashed border-pink-200">
                      <p className="font-handwritten text-xl font-semibold text-gray-800 leading-relaxed whitespace-pre-line">
                        {currentStep.details.sampleOutput.emailData.body}
                      </p>
                    </div>

                    <div className="mt-3 flex items-center justify-between text-xs text-gray-500 font-sans">
                      <span>⚡ Personalization Score: <strong className="text-pink-600">98/100</strong></span>
                      <span className="font-handwritten text-base font-bold text-pink-700">✍️ Ready to auto-send</span>
                    </div>
                  </div>
                )}

                {/* Case 4: Calendar Meeting Confirmed */}
                {currentStep.details.sampleOutput.type === "calendar" && currentStep.details.sampleOutput.calendarData && (
                  <div className="bg-white p-6 rounded-2xl border-2 border-emerald-200 shadow-xs">
                    <div className="flex items-center gap-3 mb-5">
                      <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center">
                        <Calendar size={24} />
                      </div>
                      <div>
                        <span className="font-handwritten text-2xl font-bold text-gray-900 block leading-tight">
                          {currentStep.details.sampleOutput.calendarData.event}
                        </span>
                        <span className="font-sans text-xs text-emerald-700 font-bold">
                          ✓ {currentStep.details.sampleOutput.calendarData.status}
                        </span>
                      </div>
                    </div>

                    <div className="space-y-3 bg-emerald-50/50 p-4 rounded-xl border border-emerald-100 mb-4 font-sans text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-500">Attendees:</span>
                        <strong className="text-gray-900">{currentStep.details.sampleOutput.calendarData.with}</strong>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-500">Scheduled Time:</span>
                        <strong className="text-emerald-800 font-mono">{currentStep.details.sampleOutput.calendarData.time}</strong>
                      </div>
                    </div>

                    <div className="p-3 bg-[#FEF08A] rounded-xl border border-amber-300 text-center rotate-1">
                      <span className="font-handwritten text-xl font-extrabold text-amber-950">
                        🎉 Meeting placed directly on Sales AE&apos;s Calendar!
                      </span>
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          </AnimatePresence>

          {/* ── Excalidraw Footer Canvas Watermark ── */}
          <div className="mt-10 pt-4 border-t border-gray-200/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-gray-400 text-xs">
            {/* Zoom Controls */}
            <div className="flex items-center gap-2 bg-white px-3 py-1.5 rounded-xl border border-gray-200 shadow-xs">
              <button className="hover:text-gray-700 p-1"><ZoomOut size={14} /></button>
              <span className="font-mono font-medium text-gray-600">100%</span>
              <button className="hover:text-gray-700 p-1"><ZoomIn size={14} /></button>
            </div>

            {/* Hand-drawn message */}
            <div className="font-handwritten text-xl font-bold text-gray-600">
              ⚡ Comptech AI Agent Engine · Fully Autonomous Architecture
            </div>

            {/* Help & Shortcuts */}
            <div className="font-sans text-xs text-gray-500">
              Whiteboard mode · Hand-drawn vector rendering
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
