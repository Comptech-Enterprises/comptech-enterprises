"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Cpu, Brain, GraduationCap, Shield, Activity, Sparkles, CheckCircle2, ArrowRight } from "lucide-react";
import { PageHero } from "@/components/sections/PageHero";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { AnimatedCounter } from "@/components/ai-solutions/AnimatedCounter";

const AI_OFFERINGS = [
  {
    icon: GraduationCap,
    title: "AI Teaching & Training",
    badge: "Education & Enablement",
    desc: "We design and deliver training programs that build lasting AI capability inside your organisation — from executive strategy sessions to developer deep-dives and hands-on workshops. Our curriculum is built by practitioners who deploy real AI infrastructure, not generic course content.",
    points: [
      "Hands-on workshops and seminars for educational institutions and professionals",
      "Custom AI Training Programs tailored to your industry and business requirements",
      "One-on-one mentorship from industry experts",
      "Corporate training empowering teams to leverage AI effectively",
      "Executive briefings on AI strategy, ROI, and adoption roadmaps",
      "Applied machine learning and deep learning bootcamps for developers",
      "Train-the-trainer programs to build in-house AI champions",
      "Certification-track courses on GPU computing and MLOps practices",
    ],
    stats: [
      { value: 500, suffix: "+", label: "Professionals trained" },
      { value: 60, suffix: "+", label: "Workshops delivered" },
    ],
  },
  {
    icon: Cpu,
    title: "Hardware Solutions",
    badge: "Hardware & Infrastructure",
    desc: "Comptech specializes in sourcing and configuring AI hardware built for the demands of modern machine learning workloads — from deep learning research to large-scale inference in production.",
    points: [
      "High-performance GPUs ideal for deep learning, data processing, and AI training",
      "Custom-built AI systems configured for specific projects",
      "Scalable AI servers and workstations for businesses",
      "On-premise or hybrid deployment with full OEM support",
      "NVIDIA HGX and DGX reference architectures on Dell and HPE nodes",
      "Network fabric design for low-latency, multi-node GPU clusters",
    ],
  },
  {
    icon: Brain,
    title: "AI Software Solutions",
    badge: "Software & Integration",
    desc: "We deliver comprehensive AI software offerings that span the full development lifecycle — from building bespoke models to integrating AI capabilities into your existing enterprise systems.",
    points: [
      "Custom-built AI models for various industries and use cases",
      "Machine learning and deep learning tools for decision-making automation",
      "AI integration services for existing systems",
      "Tailored software meeting unique business needs",
      "Retrieval-augmented generation (RAG) pipelines for enterprise knowledge bases",
      "API-first architecture for embedding AI into existing workflows",
    ],
  },
];

const AI_CAPABILITIES = [
  {
    title: "Data Privacy First",
    desc: "All AI workloads and models are deployed within your secure enterprise perimeter. No data leaves your network.",
    icon: Shield,
  },
  {
    title: "OEM-Grade Performance",
    desc: "Fully optimized hardware builds backed by certified Dell Titanium and HP Gold server engineering expertise.",
    icon: Activity,
  },
  {
    title: "Rapid Implementation",
    desc: "Get proof-of-concept AI applications up and running in weeks, not months, using pre-validated blueprints.",
    icon: Sparkles,
  },
];

const AI_STATS = [
  { value: 40, suffix: "+", label: "AI/GPU deployments" },
  { value: 15, suffix: "x", label: "Faster inference vs. legacy racks" },
  { value: 99, suffix: "%", label: "On-prem data residency" },
  { value: 24, suffix: "/7", label: "Infrastructure support" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
};
const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { type: "spring" as const, stiffness: 90, damping: 18 } },
};

/** Decorative floating gradient orbs, purple/indigo AI theme */
function AIOrbs({ className = "" }: { className?: string }) {
  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`} aria-hidden="true">
      <motion.div
        className="absolute -top-24 -left-16 w-96 h-96 rounded-full"
        style={{ background: "radial-gradient(circle, rgba(139,92,246,0.28) 0%, transparent 70%)" }}
        animate={{ y: [0, -24, 0], scale: [1, 1.08, 1] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-1/3 -right-20 w-[28rem] h-[28rem] rounded-full"
        style={{ background: "radial-gradient(circle, rgba(99,102,241,0.22) 0%, transparent 70%)" }}
        animate={{ y: [0, 28, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}
      />
      <motion.div
        className="absolute bottom-0 left-1/4 w-72 h-72 rounded-full"
        style={{ background: "radial-gradient(circle, rgba(232,67,90,0.14) 0%, transparent 70%)" }}
        animate={{ y: [0, -18, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
      />
    </div>
  );
}

export function AISolutionsClient() {
  return (
    <>
      <PageHero
        backgroundImage="/images/AI_Banner.webp"
        badge="AI Division"
        title={
          <>
            Our AI Vision: From{" "}
            <span className="text-gradient-purple font-extrabold">
              Hardware to Software
            </span>
          </>
        }
        subtitle="Empowering Indian enterprises to adopt machine learning and Generative AI securely — from high-density GPU servers to custom AI models and hands-on team training."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "AI Solutions" }]}
        dark
        actions={
          <>
            <Link href="/contact#quote" className="btn-accent btn btn-lg">
              Request AI Quote
            </Link>
            <a href="#offerings" className="btn-outline-white btn btn-lg">
              Explore Solutions
            </a>
          </>
        }
      >
        <AIOrbs />
        <div className="absolute inset-0 bg-grid-purple opacity-40" />
      </PageHero>

      {/* ── Stats Band ── */}
      <section className="relative bg-gray-950 border-b border-white/10 overflow-hidden" aria-label="AI impact stats">
        <div className="absolute inset-0 bg-ai-gradient opacity-90" />
        <div className="absolute inset-0 bg-grid-purple opacity-30" />
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-10 relative z-10">
          <motion.div
            className="grid grid-cols-2 lg:grid-cols-4 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
          >
            {AI_STATS.map((s) => (
              <motion.div key={s.label} variants={itemVariants} className="text-center">
                <p className="font-display font-extrabold text-3xl lg:text-4xl text-white leading-none mb-2">
                  <AnimatedCounter value={s.value} suffix={s.suffix} />
                </p>
                <p className="text-xs lg:text-sm text-white/60 leading-tight">{s.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <main>
        {/* ── Overview Section ── */}
        <section id="overview" className="py-16 lg:py-20 bg-white relative overflow-hidden" aria-labelledby="overview-title">
          <div className="absolute -top-40 -right-40 w-[32rem] h-[32rem] rounded-full pointer-events-none animate-orb-float"
            style={{ background: "radial-gradient(circle, rgba(139,92,246,0.06) 0%, transparent 70%)" }}
            aria-hidden="true"
          />
          <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              >
                <SectionLabel>Why Comptech AI</SectionLabel>
                <h2 id="overview-title" className="font-display font-extrabold text-display-md text-gray-900 mb-4 text-balance">
                  End-to-End AI Enablement for Indian Enterprises
                </h2>
                <p className="text-gray-500 text-lg leading-relaxed mb-4">
                  Comptech delivers a complete AI stack — sourcing and configuring the right GPU hardware, building and integrating custom AI software, and training your teams to use it all effectively. One partner for the full journey.
                </p>
                <p className="text-gray-500 leading-relaxed mb-6">
                  By partnering with NVIDIA, Dell, and leading AI software providers, we ensure your infrastructure is highly available, your models are production-ready, and your people have the skills to drive ROI from day one.
                </p>
                <div className="flex gap-4">
                  <div className="flex items-center gap-3">
                    <span className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
                    <span className="text-sm font-semibold text-gray-700">NVIDIA Preferred GPU Partner</span>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="grid grid-cols-1 gap-4"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
              >
                {AI_CAPABILITIES.map((cap) => {
                  const Icon = cap.icon;
                  return (
                    <motion.div
                      key={cap.title}
                      variants={itemVariants}
                      whileHover={{ y: -4, borderColor: "rgba(99,102,241,0.4)" }}
                      transition={{ duration: 0.25 }}
                      className="ai-card-hover flex gap-5 p-6 rounded-2xl bg-gray-50 border border-gray-100"
                    >
                      <motion.div
                        className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center flex-shrink-0"
                        whileHover={{ scale: 1.1, rotate: 6 }}
                        transition={{ type: "spring", stiffness: 300, damping: 15 }}
                      >
                        <Icon className="text-blue-700 w-6 h-6" />
                      </motion.div>
                      <div>
                        <h3 className="font-display font-bold text-gray-900 mb-1">{cap.title}</h3>
                        <p className="text-sm text-gray-500 leading-relaxed">{cap.desc}</p>
                      </div>
                    </motion.div>
                  );
                })}
              </motion.div>
            </div>
          </div>
        </section>

        {/* ── Offerings Intro ── */}
        <section id="offerings" className="pt-16 pb-2 bg-white" aria-labelledby="offerings-title">
          <motion.div
            className="max-w-7xl mx-auto px-6 lg:px-8 text-center"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
          >
            <SectionLabel className="justify-center">Core AI Deliverables</SectionLabel>
            <h2 id="offerings-title" className="font-display font-extrabold text-display-md text-gray-900">
              What We Offer
            </h2>
            <p className="mt-3 text-lg text-gray-500 max-w-xl mx-auto">
              Hardware, software, and training — we cover every layer so you can focus on building with AI, not figuring it out.
            </p>
          </motion.div>
        </section>

        {/* ── Offerings: horizontal timeline ── */}
        <section className="pb-16 lg:pb-20 bg-white" aria-label="AI offerings timeline">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <div className="relative grid lg:grid-cols-3 gap-10 lg:gap-8 items-start">
              {/* Connecting line, spans between the 3 circle centers on large screens */}
              <div className="hidden lg:block absolute top-7 left-[16.666%] right-[16.666%] h-px bg-gray-200" aria-hidden="true" />

              {AI_OFFERINGS.map((off, idx) => {
                const Icon = off.icon;
                const isTraining = off.title === "AI Teaching & Training";
                const shownPoints = off.points.slice(0, 4);
                return (
                  <motion.div
                    key={off.title}
                    className="relative flex flex-col items-start"
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.5, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  >
                    {/* Numbered stop */}
                    <motion.div
                      className="relative z-10 flex-shrink-0 w-14 h-14 rounded-full bg-blue-700 text-white flex items-center justify-center font-display font-extrabold border-4 border-white shadow-md mb-5"
                      initial={{ opacity: 0, scale: 0.6 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true, amount: 0.6 }}
                      transition={{ type: "spring", stiffness: 260, damping: 20, delay: idx * 0.1 }}
                    >
                      {String(idx + 1).padStart(2, "0")}
                    </motion.div>

                    <div className="flex items-center gap-3 mb-2">
                      <Icon size={20} className="text-blue-700" />
                      <span className="text-xs font-bold text-blue-700 bg-blue-50 border border-blue-100 px-3 py-1 rounded-full uppercase tracking-widest">
                        {off.badge}
                      </span>
                    </div>
                    <h3 className="font-display font-extrabold text-2xl text-gray-900 mb-2">
                      {off.title}
                    </h3>
                    <p className="text-sm text-gray-500 leading-relaxed mb-4">{off.desc}</p>

                    {off.stats && (
                      <div className="flex gap-6 mb-4">
                        {off.stats.map((s) => (
                          <div key={s.label}>
                            <p className="font-display font-extrabold text-lg text-blue-700 leading-none mb-1">
                              <AnimatedCounter value={s.value} suffix={s.suffix} />
                            </p>
                            <p className="text-[11px] text-gray-500">{s.label}</p>
                          </div>
                        ))}
                      </div>
                    )}

                    <div className="flex flex-col gap-2.5 mb-5">
                      {shownPoints.map((p) => (
                        <div key={p} className="flex items-start gap-2.5">
                          <CheckCircle2 size={16} className="text-blue-700 flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-gray-600 leading-relaxed">{p}</span>
                        </div>
                      ))}
                      {off.points.length > shownPoints.length && (
                        <p className="text-xs text-gray-400 pl-6">+ {off.points.length - shownPoints.length} more included</p>
                      )}
                    </div>

                    <div className="flex flex-wrap gap-3">
                      {isTraining && (
                        <Link href="" className="btn-accent btn btn-sm inline-flex">
                          Register <ArrowRight size={14} className="btn-arrow" />
                        </Link>
                      )}
                      <Link
                        href="/contact#quote"
                        className={isTraining ? "btn-outline btn btn-sm inline-flex" : "btn-accent btn btn-sm inline-flex"}
                      >
                        Inquire <ArrowRight size={14} className="btn-arrow" />
                      </Link>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── Partner Strip ── */}
        <section className="py-16 bg-gray-900 relative overflow-hidden" aria-labelledby="partner-title">
          <div className="absolute inset-0 bg-grid-lines opacity-10" />
          <AIOrbs />
          <div className="max-w-5xl mx-auto px-6 lg:px-8 relative z-10 text-center">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              <h2 id="partner-title" className="font-display font-extrabold text-2xl lg:text-3xl text-white mb-4">
                Powered by NVIDIA
              </h2>
              <p className="text-gray-400 max-w-xl mx-auto mb-8 text-sm leading-relaxed">
                As a Preferred Partner in the NVIDIA Partner Network, we design GPU configurations using NVIDIA HGX, DGX, and RTX reference architectures, validated on Dell PowerEdge &amp; HPE ProLiant nodes.
              </p>
              <div className="inline-flex items-center gap-6 justify-center flex-wrap">
                <span className="text-white font-display font-black text-2xl tracking-tight">
                  NVIDIA<span className="text-green-500 font-sans animate-blink">®</span> Partner
                </span>
                <span className="w-px h-6 bg-white/20" />
                <span className="text-gray-300 font-semibold text-sm">Preferred GPU Computing Partner</span>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </>
  );
}
