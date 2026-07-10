"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Cpu, Brain, GraduationCap, Shield, Activity, Sparkles, CheckCircle2, ArrowRight } from "lucide-react";
import { PageHero } from "@/components/sections/PageHero";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { AnimatedCounter } from "@/components/ai-solutions/AnimatedCounter";

const AI_OFFERINGS = [
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
    ],
  },
  {
    icon: GraduationCap,
    title: "AI Teaching & Training",
    badge: "Education & Enablement",
    desc: "We design and deliver training programs that build lasting AI capability inside your organisation — from executive strategy sessions to developer deep-dives and hands-on workshops.",
    points: [
      "Hands-on workshops and seminars for educational institutions and professionals",
      "Custom AI Training Programs tailored to your industry and business requirements",
      "One-on-one mentorship from industry experts",
      "Corporate training empowering teams to leverage AI effectively",
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
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12 relative z-10">
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
        <section id="overview" className="py-24 bg-white relative overflow-hidden" aria-labelledby="overview-title">
          <div className="absolute -top-40 -right-40 w-[32rem] h-[32rem] rounded-full pointer-events-none animate-orb-float"
            style={{ background: "radial-gradient(circle, rgba(139,92,246,0.06) 0%, transparent 70%)" }}
            aria-hidden="true"
          />
          <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              >
                <SectionLabel>Why Comptech AI</SectionLabel>
                <h2 id="overview-title" className="font-display font-extrabold text-display-md text-gray-900 mb-6 text-balance">
                  End-to-End AI Enablement for Indian Enterprises
                </h2>
                <p className="text-gray-500 text-lg leading-relaxed mb-6">
                  Comptech delivers a complete AI stack — sourcing and configuring the right GPU hardware, building and integrating custom AI software, and training your teams to use it all effectively. One partner for the full journey.
                </p>
                <p className="text-gray-500 leading-relaxed mb-8">
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
                className="grid grid-cols-1 gap-6"
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
        <section id="offerings" className="pt-24 pb-4 bg-white" aria-labelledby="offerings-title">
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
            <p className="mt-4 text-lg text-gray-500 max-w-xl mx-auto">
              Hardware, software, and training — we cover every layer so you can focus on building with AI, not figuring it out.
            </p>
          </motion.div>
        </section>

        {/* ── Offerings: big stacked sections ── */}
        {AI_OFFERINGS.map((off, idx) => {
          const Icon = off.icon;
          const isEven = idx % 2 === 0;
          const bg = isEven ? "bg-white" : "bg-indigo-50/40";
          return (
            <section
              key={off.title}
              className={`${bg} py-20 lg:py-28 relative overflow-hidden`}
              aria-labelledby={`offering-${idx}-title`}
            >
              {!isEven && <div className="absolute inset-0 bg-grid-purple opacity-30 pointer-events-none" aria-hidden="true" />}
              <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
                <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
                  {/* Icon + copy */}
                  <motion.div
                    className={`lg:col-span-5 ${isEven ? "lg:order-1" : "lg:order-2"}`}
                    initial={{ opacity: 0, y: 32 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <motion.div
                      className="w-20 h-20 rounded-3xl bg-blue-700 text-white flex items-center justify-center mb-7 relative"
                      whileHover={{ scale: 1.08, rotate: 4 }}
                      transition={{ type: "spring", stiffness: 300, damping: 15 }}
                    >
                      <span className="absolute inset-0 rounded-3xl bg-blue-700 animate-pulse-glow" aria-hidden="true" />
                      <Icon size={34} className="relative z-10" />
                    </motion.div>
                    <span className="inline-block text-xs font-bold text-blue-700 bg-blue-50 border border-blue-100 px-3.5 py-1.5 rounded-full mb-4 uppercase tracking-widest">
                      {off.badge}
                    </span>
                    <h3 id={`offering-${idx}-title`} className="font-display font-extrabold text-3xl lg:text-4xl text-gray-900 mb-4">
                      {off.title}
                    </h3>
                    <p className="text-gray-500 text-lg leading-relaxed mb-8">{off.desc}</p>
                    <Link href="/contact#quote" className="btn-accent btn btn-lg inline-flex">
                      Inquire about {off.title.split(" ")[0]} <ArrowRight size={16} className="btn-arrow" />
                    </Link>
                  </motion.div>

                  {/* Checklist */}
                  <motion.div
                    className={`lg:col-span-7 ${isEven ? "lg:order-2" : "lg:order-1"}`}
                    initial={{ opacity: 0, y: 32 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-5">What&apos;s Included</p>
                    <div className="grid sm:grid-cols-2 gap-x-8 gap-y-5">
                      {off.points.map((p, pIdx) => (
                        <motion.div
                          key={p}
                          className="flex items-start gap-3"
                          initial={{ opacity: 0, x: -12 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true, amount: 0.5 }}
                          transition={{ duration: 0.4, delay: pIdx * 0.07 }}
                        >
                          <CheckCircle2 size={20} className="text-blue-700 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-600 leading-relaxed">{p}</span>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </div>
            </section>
          );
        })}

        {/* ── Partner Strip ── */}
        <section className="py-20 bg-gray-900 relative overflow-hidden" aria-labelledby="partner-title">
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
