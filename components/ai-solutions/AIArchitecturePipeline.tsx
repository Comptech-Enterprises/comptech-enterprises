"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Database, ShieldCheck, Cpu, Zap, ArrowRight, CheckCircle2, Server, Layers } from "lucide-react";
import { SectionLabel } from "@/components/ui/SectionLabel";

const PIPELINE_STEPS = [
  {
    id: "data",
    step: "01",
    title: "Data Ingestion & Indexing",
    icon: Database,
    color: "#5C0F26",
    summary: "Ingest structured and unstructured enterprise knowledge safely.",
    details: [
      "PDFs, SOP documents, spreadsheets & policy archives",
      "Live database connections (PostgreSQL, MongoDB, SQL Server)",
      "Continuous synchronization via webhook triggers",
      "Chunking & embedding with zero data retention risk",
    ],
    badge: "Input Layer",
  },
  {
    id: "rag",
    step: "02",
    title: "Private Vector RAG & Guardrails",
    icon: ShieldCheck,
    color: "#1D4ED8",
    summary: "Air-gapped semantic search ensuring zero hallucination.",
    details: [
      "Enterprise vector storage (Qdrant / Milvus / Pinecone)",
      "Strict role-based access control (RBAC) per department",
      "Prompt injection defense & PII redaction filters",
      "100% on-premise or private VPC deployment options",
    ],
    badge: "Security & Context",
  },
  {
    id: "agent",
    step: "03",
    title: "Multi-Agent Reasoning Core",
    icon: Cpu,
    color: "#7C3AED",
    summary: "Coordinated autonomous LLM agents executing multi-step logic.",
    details: [
      "Task decomposition into parallel agent routines",
      "Model routing (OpenAI, Claude 3.5, LLaMA 3, Custom fine-tuned)",
      "Memory retention across multi-turn complex workflows",
      "Self-correction and validation loops before execution",
    ],
    badge: "Intelligence Layer",
  },
  {
    id: "action",
    step: "04",
    title: "Automated Execution & Tools",
    icon: Zap,
    color: "#E8435A",
    summary: "Taking real actions across your enterprise business stack.",
    details: [
      "ERP / CRM live updates (SAP, Tally, Zoho, Salesforce)",
      "Automated email & WhatsApp notifications",
      "PDF proposal and invoice auto-generation",
      "Human-in-the-loop signoff dashboard with audit trails",
    ],
    badge: "Output & Action",
  },
];

export function AIArchitecturePipeline() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section className="py-20 lg:py-28 bg-[#FBFBFE] relative overflow-hidden" aria-labelledby="pipeline-title">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
          <SectionLabel className="justify-center">System Blueprint</SectionLabel>
          <h2
            id="pipeline-title"
            className="font-display font-extrabold text-gray-900 tracking-tight mt-2 sm:mt-3 leading-tight"
            style={{ fontSize: "clamp(1.85rem, 3.5vw, 2.9rem)" }}
          >
            How our enterprise{" "}
            <span
              className="text-transparent bg-clip-text"
              style={{ backgroundImage: "linear-gradient(135deg, #5C0F26, #E8435A)" }}
            >
              AI architecture works
            </span>
          </h2>
          <p className="mt-3 text-base sm:text-lg text-gray-500 leading-relaxed">
            From raw organizational documents to production-grade autonomous agent execution — private, secure, and compliant.
          </p>
        </div>

        {/* 4 Steps Interactive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {PIPELINE_STEPS.map((step, idx) => {
            const Icon = step.icon;
            const isActive = activeStep === idx;

            return (
              <button
                key={step.id}
                onClick={() => setActiveStep(idx)}
                className={`text-left p-6 rounded-3xl transition-all duration-300 relative flex flex-col border ${
                  isActive
                    ? "bg-white shadow-xl border-gray-300 scale-[1.02]"
                    : "bg-white/70 hover:bg-white border-gray-200/70 opacity-80 hover:opacity-100"
                }`}
              >
                {/* Active Indicator Top Bar */}
                {isActive && (
                  <motion.div
                    layoutId="activePipelineBar"
                    className="absolute top-0 left-6 right-6 h-1 rounded-full"
                    style={{ background: step.color }}
                  />
                )}

                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono font-bold text-gray-400">
                    STEP {step.step}
                  </span>
                  <span
                    className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full"
                    style={{ background: `${step.color}15`, color: step.color }}
                  >
                    {step.badge}
                  </span>
                </div>

                <div
                  className="w-11 h-11 rounded-2xl flex items-center justify-center mb-3.5 shadow-xs"
                  style={{ background: `${step.color}15` }}
                >
                  <Icon size={20} style={{ color: step.color }} />
                </div>

                <h3 className="font-display font-extrabold text-gray-900 text-lg leading-tight mb-2">
                  {step.title}
                </h3>
                <p className="text-xs text-gray-500 leading-relaxed">
                  {step.summary}
                </p>
              </button>
            );
          })}
        </div>

        {/* Interactive Active Step Deep-Dive Showcase */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-gray-200/80 shadow-lg relative overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeStep}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
              className="grid lg:grid-cols-12 gap-8 items-center"
            >
              {/* Left explanation */}
              <div className="lg:col-span-7">
                <div className="flex items-center gap-2 mb-3">
                  <span
                    className="text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full text-white"
                    style={{ background: PIPELINE_STEPS[activeStep].color }}
                  >
                    Deep Dive · Step {PIPELINE_STEPS[activeStep].step}
                  </span>
                </div>
                <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-gray-900 mb-3">
                  {PIPELINE_STEPS[activeStep].title}
                </h3>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-6">
                  {PIPELINE_STEPS[activeStep].summary} Built with enterprise-level isolation so no internal data is shared with public LLMs.
                </p>

                <div className="grid sm:grid-cols-2 gap-3">
                  {PIPELINE_STEPS[activeStep].details.map((point) => (
                    <div key={point} className="flex items-start gap-2.5 p-3 rounded-2xl bg-gray-50 border border-gray-100">
                      <CheckCircle2 size={16} className="text-[#1D4ED8] shrink-0 mt-0.5" />
                      <span className="text-xs text-gray-700 font-medium leading-relaxed">{point}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Visual Architecture Box */}
              <div className="lg:col-span-5 bg-gray-950 rounded-2xl p-6 text-white font-mono text-xs shadow-inner">
                <div className="flex items-center justify-between border-b border-gray-800 pb-3 mb-4">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500" />
                    <span className="w-2.5 h-2.5 rounded-full bg-yellow-500" />
                    <span className="w-2.5 h-2.5 rounded-full bg-green-500" />
                  </div>
                  <span className="text-[11px] text-gray-400">comptech-ai-pipeline.json</span>
                </div>
                <div className="space-y-2 text-gray-300">
                  <p><span className="text-purple-400">"step"</span>: <span className="text-emerald-400">"{PIPELINE_STEPS[activeStep].step}"</span>,</p>
                  <p><span className="text-purple-400">"layer"</span>: <span className="text-emerald-400">"{PIPELINE_STEPS[activeStep].badge}"</span>,</p>
                  <p><span className="text-purple-400">"isolation"</span>: <span className="text-emerald-400">"Air-Gapped / Private VPC"</span>,</p>
                  <p><span className="text-purple-400">"latency_sla"</span>: <span className="text-emerald-400">"&lt; 1500ms"</span>,</p>
                  <p><span className="text-purple-400">"status"</span>: <span className="text-blue-400">"ACTIVE_PRODUCTION"</span></p>
                </div>
                <div className="mt-5 pt-3 border-t border-gray-800 flex items-center justify-between text-[11px] text-gray-400">
                  <span className="flex items-center gap-1 text-emerald-400">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                    Live System Active
                  </span>
                  <span>Comptech Engine v2.4</span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
