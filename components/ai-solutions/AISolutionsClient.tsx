"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Bot, Brain, GraduationCap, Shield, Workflow, Sparkles, CheckCircle2, ArrowRight } from "lucide-react";
import { PageHero } from "@/components/sections/PageHero";
import { SectionLabel } from "@/components/ui/SectionLabel";

const AI_OFFERINGS = [
  {
    icon: GraduationCap,
    title: "AI Training & Workshops",
    badge: "Education & Enablement",
    desc: "We design and deliver training programs that build lasting AI capability inside your organisation — from executive strategy sessions to developer deep-dives and hands-on workshops. Our curriculum is built by practitioners who ship real AI, not generic course content.",
    points: [
      "Hands-on workshops and seminars for educational institutions and professionals",
      "Custom AI training programs tailored to your industry and business requirements",
      "One-on-one mentorship from practising AI engineers",
      "Corporate training that empowers teams to use AI effectively and safely",
      "Executive briefings on AI strategy, ROI, and adoption roadmaps",
      "Applied LLM, RAG, and prompt-engineering bootcamps for developers",
      "Train-the-trainer programs to build in-house AI champions",
      "Practical courses on building and operating AI agents",
    ],
    stats: [
      { value: "500+", label: "Professionals trained" },
      { value: "60+", label: "Workshops delivered" },
    ],
  },
  {
    icon: Bot,
    title: "Custom AI Agents",
    badge: "Agents & Automation",
    desc: "We build custom AI agents that plug into your business — automating repetitive work, answering questions from your own knowledge, and taking real actions across your tools. Every agent is designed around your workflows and runs securely on your terms.",
    points: [
      "Custom AI agents built around your specific workflows and data",
      "Task-automation agents that draft, summarise, classify, and route work",
      "Knowledge assistants grounded in your internal documents (RAG)",
      "Multi-step agents that take actions across your existing tools & APIs",
      "Customer-facing chat agents for support and lead qualification",
      "Human-in-the-loop controls, guardrails, and full audit logging",
    ],
  },
  {
    icon: Brain,
    title: "AI Software & Integration",
    badge: "Software & Integration",
    desc: "Beyond agents, we deliver AI software across the full lifecycle — building bespoke models and weaving AI capabilities into the enterprise systems your teams already use every day.",
    points: [
      "Custom-built AI models for industry-specific use cases",
      "Machine learning tools that automate decision-making",
      "AI integration into your existing systems and workflows",
      "Retrieval-augmented generation (RAG) over your knowledge bases",
      "API-first architecture for embedding AI into any workflow",
      "Tailored software that meets your unique business needs",
    ],
  },
];

const AI_CAPABILITIES = [
  {
    title: "Data Privacy First",
    desc: "All AI workloads, agents, and models can be deployed within your secure enterprise perimeter — your data never has to leave your network.",
    icon: Shield,
  },
  {
    title: "Built Around Your Workflows",
    desc: "Every agent, model, and training program is tailored to how your teams actually work — not generic, off-the-shelf tooling.",
    icon: Workflow,
  },
  {
    title: "Rapid Implementation",
    desc: "Get a working proof-of-concept agent or workshop running in weeks, not months, using pre-validated blueprints.",
    icon: Sparkles,
  },
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
            AI Training &amp;{" "}
            <span className="text-gradient-purple font-extrabold">
              Custom AI Agents
            </span>
          </>
        }
        subtitle="We help Indian enterprises put AI to work — upskilling your teams with hands-on workshops and building custom AI agents that automate real work, securely, with your own data."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "AI Solutions" }]}
        dark
        actions={
          <>
            <Link href="/contact#quote" className="btn-accent btn btn-lg">
              Talk to Our AI Team
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
                  From First Workshop to Production AI Agent
                </h2>
                <p className="text-gray-500 text-lg leading-relaxed mb-4">
                  Comptech helps enterprises adopt AI end to end — training your people to use it confidently, then designing and building custom AI agents that automate real work inside your business.
                </p>
                <p className="text-gray-500 leading-relaxed mb-6">
                  We focus on practical outcomes: teams that can build with AI, agents that take work off your plate, and software that fits neatly into the systems you already run — all deployed with your data privacy front and centre.
                </p>
                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center gap-3">
                    <span className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
                    <span className="text-sm font-semibold text-gray-700">Practitioner-led, outcome-focused</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
                    <span className="text-sm font-semibold text-gray-700">Private, on-premise deployment</span>
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
              Training, custom agents, and software integration — we cover every layer so you can focus on building with AI, not figuring it out.
            </p>
          </motion.div>
        </section>

        {/* ── Offerings: horizontal timeline ── */}
        <section className="pb-16 lg:pb-20 bg-white" aria-label="AI offerings timeline">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <div className="relative grid lg:grid-cols-3 gap-6 lg:gap-8 items-stretch">
              {/* Connecting line, spans between the 3 circle centers on large screens */}
              <div className="hidden lg:block absolute top-7 left-[16.666%] right-[16.666%] h-px bg-gray-200" aria-hidden="true" />

              {AI_OFFERINGS.map((off, idx) => {
                const Icon = off.icon;
                const isTraining = off.title === "AI Training & Workshops";
                const shownPoints = off.points.slice(0, 4);
                return (
                  <motion.div
                    key={off.title}
                    className="relative flex flex-col items-start rounded-3xl border border-gray-100 bg-white shadow-sm p-6 sm:p-8 lg:p-0 lg:rounded-none lg:border-0 lg:shadow-none lg:bg-transparent"
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
                      <div className="flex w-full gap-3 mb-5">
                        {off.stats.map((s) => (
                          <div
                            key={s.label}
                            className="flex-1 rounded-xl bg-blue-50/70 border border-blue-100 px-4 py-3"
                          >
                            <p className="font-display font-extrabold text-2xl text-blue-700 leading-none mb-1.5">
                              {s.value}
                            </p>
                            <p className="text-[11px] text-gray-500 leading-tight">{s.label}</p>
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

                    <div className="flex flex-col sm:flex-row w-full lg:w-auto flex-wrap gap-3 mt-auto">
                      {isTraining && (
                        <Link href="/contact#quote" className="btn-accent btn btn-sm inline-flex justify-center">
                          Register <ArrowRight size={14} className="btn-arrow" />
                        </Link>
                      )}
                      <Link
                        href="/contact#quote"
                        className={`${isTraining ? "btn-outline" : "btn-accent"} btn btn-sm inline-flex justify-center`}
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

        {/* ── Custom Agents CTA ── */}
        <section className="py-16 lg:py-20 bg-gray-900 relative overflow-hidden" aria-labelledby="agents-cta-title">
          <div className="absolute inset-0 bg-grid-lines opacity-10" />
          <AIOrbs />
          <div className="max-w-5xl mx-auto px-6 lg:px-8 relative z-10 text-center">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-white/10 border border-white/15 mb-6">
                <Bot className="w-7 h-7 text-white" />
              </div>
              <h2 id="agents-cta-title" className="font-display font-extrabold text-2xl lg:text-4xl text-white mb-4 text-balance">
                Have a workflow in mind? We&rsquo;ll build the agent.
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto mb-8 leading-relaxed">
                Tell us the task that&rsquo;s eating your team&rsquo;s time — from answering repetitive questions to processing documents or coordinating across tools. We&rsquo;ll design, build, and deploy a custom AI agent tailored to exactly how you work, with your data kept private.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Link href="/contact#quote" className="btn-accent btn btn-lg">
                  Build a Custom Agent <ArrowRight size={16} className="btn-arrow" />
                </Link>
                <Link href="/contact" className="btn-outline-white btn btn-lg">
                  Talk to Our AI Team
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </>
  );
}
