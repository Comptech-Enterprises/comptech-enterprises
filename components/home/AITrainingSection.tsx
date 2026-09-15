"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowRight, ChevronLeft, ChevronRight, GraduationCap, Users, Sparkles, CheckCircle2, Clock, Award, Laptop, ShieldCheck } from "lucide-react";
import { SectionLabel } from "@/components/ui/SectionLabel";

interface TrainingProgram {
  id: string;
  title: string;
  target: string;
  format: string;
  duration: string;
  desc: string;
  topics: string[];
  tags: string[];
  themeColor: string;
  accentBg: string;
  badge: string;
  imagePlaceholderText: string;
  imageSubtext: string;
  icon: React.ElementType;
}

const TRAINING_PROGRAMS: TrainingProgram[] = [
  {
    id: "executive",
    title: "Executive AI Strategy & ROI Masterclass",
    target: "C-Suite, Directors & Business Unit Heads",
    format: "In-Person or Virtual Workshop",
    duration: "1-Day Intensive or 2x Half-Day",
    desc: "Cut through the AI hype. Learn how to identify high-ROI AI use cases, evaluate vendor solutions, calculate payback periods, and build board-ready AI roadmaps.",
    topics: [
      "Enterprise AI landscape & real ROI benchmarks",
      "Identifying high-impact automation opportunities",
      "Vendor vs. In-house build decision frameworks",
      "Risk, governance, and IP protection policies"
    ],
    tags: ["Leadership", "Strategy & ROI", "Governance"],
    themeColor: "#5C0F26",
    accentBg: "linear-gradient(135deg, #5C0F26 0%, #8B1E3F 100%)",
    badge: "Most Popular for Leadership",
    imagePlaceholderText: "Executive AI Briefing Room",
    imageSubtext: "Frameworks & Strategic Case Studies",
    icon: Award,
  },
  {
    id: "agents",
    title: "Autonomous AI Agents & Enterprise RAG Bootcamp",
    target: "Software Engineers, Architects & Tech Leads",
    format: "Hands-on Technical Lab",
    duration: "2 to 3 Days (Live Coding)",
    desc: "A code-first deep dive into building production-ready autonomous agents, function calling, vector database retrieval, and private enterprise RAG pipelines.",
    topics: [
      "Building multi-step autonomous agentic workflows",
      "Vector embeddings & semantic hybrid search",
      "Tool calling & API integrations with enterprise databases",
      "Evaluation, latency optimization & prompt caching"
    ],
    tags: ["Engineering", "LangChain / LlamaIndex", "Vector DBs"],
    themeColor: "#0891B2",
    accentBg: "linear-gradient(135deg, #0891B2 0%, #0E7490 100%)",
    badge: "Technical Hands-on Lab",
    imagePlaceholderText: "Agent Architecture & Live Code Lab",
    imageSubtext: "Production RAG & Tool Calling",
    icon: Laptop,
  },
  {
    id: "prompting",
    title: "Generative AI & Workflow Automation for Operations",
    target: "Operations, Sales, HR & Product Teams",
    format: "Interactive Corporate Workshop",
    duration: "1-Day Applied Workshop",
    desc: "Empower non-technical teams to 10x productivity. Master advanced prompt engineering, structured document analysis, automated reporting, and custom workflow tooling.",
    topics: [
      "Advanced prompt engineering (CoT, few-shot, system prompts)",
      "Automating document parsing, summarization & reporting",
      "Building customized team GPTs and internal knowledge bots",
      "Data hygiene and avoiding hallucinations in workflows"
    ],
    tags: ["Operations", "Workflow Automation", "Prompt Engineering"],
    themeColor: "#D97706",
    accentBg: "linear-gradient(135deg, #D97706 0%, #B45309 100%)",
    badge: "Immediate Team Productivity",
    imagePlaceholderText: "Applied Workflow Automation Lab",
    imageSubtext: "Document Intelligence & Team GPTs",
    icon: Sparkles,
  },
  {
    id: "governance",
    title: "Enterprise AI Security, Privacy & Compliance",
    target: "IT Directors, CISOs & Compliance Officers",
    format: "Interactive Security Briefing",
    duration: "Half-Day or 1-Day Seminar",
    desc: "Ensure enterprise data integrity. Learn how to deploy private self-hosted LLM gateways, prevent data leakage to public models, and comply with emerging AI regulations.",
    topics: [
      "Private LLM deployment models & air-gapped options",
      "Preventing sensitive data leakage (PII & IP shielding)",
      "Role-based access control (RBAC) for vector stores",
      "Compliance audit prep & ethical AI guardrails"
    ],
    tags: ["Security & CISO", "Data Privacy", "Compliance"],
    themeColor: "#059669",
    accentBg: "linear-gradient(135deg, #059669 0%, #047857 100%)",
    badge: "Security & Governance",
    imagePlaceholderText: "Enterprise AI Security & Data Gateway",
    imageSubtext: "Zero Data Retention & Compliance",
    icon: ShieldCheck,
  },
];

export function AITrainingSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % TRAINING_PROGRAMS.length);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + TRAINING_PROGRAMS.length) % TRAINING_PROGRAMS.length);
  };

  useEffect(() => {
    if (isPaused) return;
    timerRef.current = setInterval(() => {
      nextSlide();
    }, 6000);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPaused, activeIndex]);

  const activeProgram = TRAINING_PROGRAMS[activeIndex];
  const ProgramIcon = activeProgram.icon;

  return (
    <section
      id="ai-training"
      className="relative py-16 sm:py-20 lg:py-28 overflow-hidden"
      aria-labelledby="ai-training-title"
    >
      {/* Background tint matching AI theme */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(circle at 80% 20%, rgba(92, 15, 38, 0.05) 0%, rgba(245, 243, 255, 0.6) 50%, rgba(253, 244, 246, 0.8) 100%)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div>
            <SectionLabel>Corporate AI Training & Workshops</SectionLabel>
            <h2
              id="ai-training-title"
              className="font-display font-extrabold text-gray-900 tracking-tight mt-2 sm:mt-3 leading-tight"
              style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.8rem)" }}
            >
              Upskill Your Workforce with{" "}
              <span
                className="text-transparent bg-clip-text"
                style={{ backgroundImage: "linear-gradient(135deg, #5C0F26, #E8435A 60%, #7C3AED)" }}
              >
                Hands-on AI Training
              </span>
            </h2>
            <p className="mt-2 sm:mt-3 text-base sm:text-lg text-gray-500 max-w-2xl leading-relaxed">
              Custom-tailored masterclasses and practical bootcamps led by enterprise AI practitioners — built around your real tools, workflows, and business goals.
            </p>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={prevSlide}
              aria-label="Previous training program"
              className="w-11 h-11 rounded-2xl border border-gray-200 bg-white/90 hover:bg-white text-gray-700 hover:text-[#5C0F26] hover:border-[#5C0F26]/30 flex items-center justify-center transition-all shadow-sm hover:shadow active:scale-95"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={nextSlide}
              aria-label="Next training program"
              className="w-11 h-11 rounded-2xl border border-gray-200 bg-white/90 hover:bg-white text-gray-700 hover:text-[#5C0F26] hover:border-[#5C0F26]/30 flex items-center justify-center transition-all shadow-sm hover:shadow active:scale-95"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* Interactive Main Carousel Card */}
        <div
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          className="relative rounded-3xl border border-white/60 bg-white/90 shadow-xl overflow-hidden backdrop-blur-md transition-all duration-300"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12">
            
            {/* Left Column: Workshop Details */}
            <div className="lg:col-span-7 p-6 sm:p-8 lg:p-12 flex flex-col justify-between">
              <div>
                
                {/* Badge & Target */}
                <div className="flex flex-wrap items-center gap-2.5 mb-5">
                  <span
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold tracking-wide text-white shadow-sm"
                    style={{ background: activeProgram.accentBg }}
                  >
                    <GraduationCap size={14} />
                    {activeProgram.badge}
                  </span>
                  <span className="text-xs font-semibold text-gray-500 bg-gray-100 px-3 py-1 rounded-full flex items-center gap-1">
                    <Users size={12} className="text-gray-400" />
                    {activeProgram.target}
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-gray-900 leading-tight mb-4">
                  {activeProgram.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-6">
                  {activeProgram.desc}
                </p>

                {/* Workshop Key Takeaways */}
                <div className="mb-8">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-3.5">
                    What Your Team Will Master
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {activeProgram.topics.map((topic, i) => (
                      <div key={i} className="flex items-start gap-2 text-sm text-gray-700">
                        <CheckCircle2 size={16} className="shrink-0 mt-0.5" style={{ color: activeProgram.themeColor }} />
                        <span className="leading-snug">{topic}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tags & Duration Info */}
                <div className="flex flex-wrap items-center gap-3 pt-6 border-t border-gray-100 mb-8">
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-gray-600 bg-gray-50 border border-gray-200 px-3 py-1.5 rounded-xl">
                    <Clock size={13} className="text-gray-400" />
                    {activeProgram.duration}
                  </div>
                  {activeProgram.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-medium text-gray-600 bg-white border border-gray-200 px-3 py-1.5 rounded-xl"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap gap-4 items-center">
                <Link
                  href="/contact#quote"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-bold text-white transition-all duration-200 hover:opacity-95 hover:-translate-y-px shadow-lg"
                  style={{
                    background: activeProgram.accentBg,
                    boxShadow: `0 4px 20px ${activeProgram.themeColor}33`,
                  }}
                >
                  Book This Workshop <ArrowRight size={15} />
                </Link>
                <Link
                  href="/ai-solutions"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold text-gray-700 border border-gray-200 bg-white hover:border-[#5C0F26]/30 hover:text-[#5C0F26] transition-all"
                >
                  View All AI Programs
                </Link>
              </div>

            </div>

            {/* Right Column: Visual Carousel Image Placeholder */}
            <div className="lg:col-span-5 p-6 sm:p-8 lg:p-12 lg:pl-0 flex flex-col justify-center">
              <div
                className="relative w-full h-[320px] sm:h-[380px] rounded-3xl overflow-hidden shadow-inner flex flex-col justify-between p-6 sm:p-8 text-white transition-all duration-500"
                style={{
                  background: activeProgram.accentBg,
                }}
              >
                {/* Decorative background grid pattern */}
                <div
                  className="absolute inset-0 opacity-15 pointer-events-none"
                  style={{
                    backgroundImage: "linear-gradient(rgba(255,255,255,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.2) 1px, transparent 1px)",
                    backgroundSize: "32px 32px",
                  }}
                />

                {/* Floating ambient circle */}
                <div className="absolute top-1/2 right-1/4 w-48 h-48 rounded-full bg-white/10 blur-2xl pointer-events-none" />

                {/* Top header on image placeholder */}
                <div className="relative z-10 flex items-center justify-between">
                  <span className="text-[11px] font-mono font-bold tracking-widest uppercase bg-black/25 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/20">
                    Workshop Module {activeIndex + 1} of {TRAINING_PROGRAMS.length}
                  </span>
                  <div className="w-10 h-10 rounded-2xl bg-white/15 backdrop-blur-md border border-white/20 flex items-center justify-center">
                    <ProgramIcon size={20} className="text-white" />
                  </div>
                </div>

                {/* Center visual representation placeholder */}
                <div className="relative z-10 text-center my-auto py-4">
                  <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <GraduationCap size={32} className="text-white" />
                  </div>
                  <h4 className="font-display font-extrabold text-xl sm:text-2xl text-white tracking-tight leading-snug max-w-xs mx-auto">
                    {activeProgram.imagePlaceholderText}
                  </h4>
                  <p className="text-white/80 text-xs sm:text-sm mt-1.5 font-medium">
                    {activeProgram.imageSubtext}
                  </p>
                </div>

                {/* Bottom info badge */}
                <div className="relative z-10 bg-black/30 backdrop-blur-md border border-white/15 rounded-2xl p-3 flex items-center justify-between text-xs">
                  <span className="text-white/90 font-medium flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                    Live Instructor-Led
                  </span>
                  <span className="text-white/70 font-mono">
                    {activeProgram.format}
                  </span>
                </div>
              </div>
            </div>

          </div>

          {/* Carousel Progress & Indicator Dots Strip */}
          <div className="bg-gray-50/80 border-t border-gray-100 px-6 sm:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              {TRAINING_PROGRAMS.map((program, idx) => (
                <button
                  key={program.id}
                  onClick={() => setActiveIndex(idx)}
                  aria-label={`Go to slide ${idx + 1}: ${program.title}`}
                  className="group py-1 focus:outline-none"
                >
                  <div
                    className={`h-2 rounded-full transition-all duration-300 ${
                      activeIndex === idx
                        ? "w-8 bg-[#5C0F26]"
                        : "w-2 bg-gray-300 group-hover:bg-gray-400"
                    }`}
                  />
                </button>
              ))}
            </div>

            <p className="text-xs text-gray-500 font-medium">
              Hover over carousel to pause auto-rotation · <span className="font-semibold text-gray-700">{activeIndex + 1} of {TRAINING_PROGRAMS.length}</span> programs
            </p>
          </div>

        </div>

        {/* Feature Highlights Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
          {[
            { value: "500+", label: "Professionals Trained", sub: "Across India & Global teams" },
            { value: "100%", label: "Custom Curriculum", sub: "Tailored to your tech stack" },
            { value: "4.9 / 5", label: "Workshop Satisfaction", sub: "Verified participant rating" },
            { value: "Hands-on", label: "Live Labs & Sandbox", sub: "Real code & business cases" },
          ].map((stat, i) => (
            <div
              key={i}
              className="rounded-2xl p-5 border border-white/60 bg-white/70 backdrop-blur-sm text-center shadow-xs"
            >
              <p className="font-display font-extrabold text-2xl sm:text-3xl leading-none mb-1" style={{ color: "#5C0F26" }}>
                {stat.value}
              </p>
              <p className="text-xs sm:text-sm font-bold text-gray-900 leading-snug">{stat.label}</p>
              <p className="text-[11px] text-gray-500 mt-0.5">{stat.sub}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
