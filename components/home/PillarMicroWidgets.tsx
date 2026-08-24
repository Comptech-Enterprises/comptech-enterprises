"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Terminal, Activity, CheckCircle2, ShieldCheck, Zap } from "lucide-react";

/**
 * 1. AI Interactive Micro-Demo:
 * Live AI agent task runner with interactive prompt pills & simulated instant outputs.
 */
export function AIMicroDemo() {
  const tasks = [
    {
      id: "agent",
      label: "AI Agent",
      prompt: "Triage 500 support tickets",
      output: "✨ Triaged in 1.2s · 98% automated resolution",
      badge: "Autonomous",
    },
    {
      id: "rag",
      label: "Custom RAG",
      prompt: "Query company SOP knowledge base",
      output: "📄 Extracted exact clause · Cited 3 documents",
      badge: "Private LLM",
    },
    {
      id: "training",
      label: "AI Training",
      prompt: "Upskill sales team on GenAI tools",
      output: "🚀 40 employees certified · 3x productivity",
      badge: "Workshops",
    },
  ];

  const [activeTask, setActiveTask] = useState(0);

  return (
    <div className="w-full bg-[#FDF4F6] border border-[#5C0F26]/15 rounded-2xl p-3.5 mb-5 select-none">
      <div className="flex items-center justify-between mb-2.5">
        <span className="flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-[#5C0F26]">
          <Sparkles size={13} className="text-[#5C0F26] animate-pulse" />
          Interactive AI Sandbox
        </span>
        <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-[#5C0F26]/10 text-[#5C0F26]">
          {tasks[activeTask].badge}
        </span>
      </div>

      {/* Task selector pills */}
      <div className="flex gap-1.5 mb-2.5">
        {tasks.map((task, i) => (
          <button
            key={task.id}
            type="button"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              setActiveTask(i);
            }}
            className={`flex-1 py-1 px-2 text-[11px] font-semibold rounded-lg transition-all text-center ${
              activeTask === i
                ? "bg-[#5C0F26] text-white shadow-xs"
                : "bg-white/80 text-gray-600 hover:bg-white border border-gray-200/60"
            }`}
          >
            {task.label}
          </button>
        ))}
      </div>

      {/* Simulated Live Agent Output */}
      <div className="bg-white rounded-xl p-2.5 border border-[#5C0F26]/10">
        <div className="text-[11px] text-gray-500 font-medium mb-1 truncate">
          <span className="text-gray-400 font-mono">&gt; </span>
          {tasks[activeTask].prompt}
        </div>
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTask}
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.2 }}
            className="text-xs font-bold text-[#5C0F26] leading-tight flex items-center gap-1.5"
          >
            <CheckCircle2 size={13} className="text-[#5C0F26] shrink-0" />
            <span className="truncate">{tasks[activeTask].output}</span>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

/**
 * 2. Software Interactive Micro-Demo:
 * Live API / ERP architecture stack switcher with real-time response metrics.
 */
export function SoftwareMicroDemo() {
  const modules = [
    {
      id: "erp",
      name: "ERP & CRM",
      status: "Syncing 10k orders/min",
      latency: "18ms",
      type: "PostgreSQL · Redis",
    },
    {
      id: "web",
      name: "Web & Mobile",
      status: "Next.js 15 · Native Mobile",
      latency: "99.9% uptime",
      type: "Full-Stack",
    },
    {
      id: "api",
      name: "API Pipelines",
      status: "Automated webhook sync",
      latency: "200 OK",
      type: "REST & GraphQL",
    },
  ];

  const [activeModule, setActiveModule] = useState(0);

  return (
    <div className="w-full bg-[#EFF6FF] border border-[#1D4ED8]/15 rounded-2xl p-3.5 mb-5 select-none">
      <div className="flex items-center justify-between mb-2.5">
        <span className="flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-[#1D4ED8]">
          <Terminal size={13} className="text-[#1D4ED8]" />
          Live Architecture
        </span>
        <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded-full bg-[#1D4ED8]/10 text-[#1D4ED8]">
          {modules[activeModule].latency}
        </span>
      </div>

      {/* Module selector pills */}
      <div className="flex gap-1.5 mb-2.5">
        {modules.map((mod, i) => (
          <button
            key={mod.id}
            type="button"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              setActiveModule(i);
            }}
            className={`flex-1 py-1 px-2 text-[11px] font-semibold rounded-lg transition-all text-center ${
              activeModule === i
                ? "bg-[#1D4ED8] text-white shadow-xs"
                : "bg-white/80 text-gray-600 hover:bg-white border border-gray-200/60"
            }`}
          >
            {mod.name}
          </button>
        ))}
      </div>

      {/* Live System Metric Output */}
      <div className="bg-white rounded-xl p-2.5 border border-[#1D4ED8]/10">
        <div className="text-[11px] text-gray-500 font-medium mb-1 truncate">
          <span className="text-blue-400 font-mono">&gt; </span>
          Stack: {modules[activeModule].type}
        </div>
        <AnimatePresence mode="wait">
          <motion.div
            key={activeModule}
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.2 }}
            className="text-xs font-bold text-[#1D4ED8] leading-tight flex items-center gap-1.5"
          >
            <Zap size={13} className="text-[#1D4ED8] shrink-0" />
            <span className="truncate">{modules[activeModule].status}</span>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

/**
 * 3. Hardware Interactive Micro-Demo:
 * Live infrastructure telemetry & SLA monitor with switchable nodes.
 */
export function HardwareMicroDemo() {
  const nodes = [
    {
      id: "servers",
      label: "Servers & Storage",
      spec: "Dell · HP · Lenovo Enterprise",
      metric: "99.99% Hardware SLA",
      color: "#1E3A8A",
    },
    {
      id: "network",
      label: "Network & CCTV",
      spec: "Cisco · Aruba · Prama 4K",
      metric: "Zero Packet Loss",
      color: "#5C0F26",
    },
    {
      id: "amc",
      label: "24/7 AMC Support",
      spec: "50+ Certified Field Engineers",
      metric: "< 2hr Response Time",
      color: "#1E3A8A",
    },
  ];

  const [activeNode, setActiveNode] = useState(0);

  return (
    <div className="w-full bg-[#F8FAFC] border border-gray-200 rounded-2xl p-3.5 mb-5 select-none">
      <div className="flex items-center justify-between mb-2.5">
        <span className="flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-gray-800">
          <Activity size={13} className="text-emerald-600 animate-pulse" />
          Infrastructure SLA
        </span>
        <span className="flex items-center gap-1 text-[10px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
          Live
        </span>
      </div>

      {/* Node selector pills */}
      <div className="flex gap-1.5 mb-2.5">
        {nodes.map((node, i) => (
          <button
            key={node.id}
            type="button"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              setActiveNode(i);
            }}
            className={`flex-1 py-1 px-1.5 text-[10px] sm:text-[11px] font-semibold rounded-lg transition-all text-center ${
              activeNode === i
                ? "bg-gray-900 text-white shadow-xs"
                : "bg-white text-gray-600 hover:bg-gray-100 border border-gray-200/80"
            }`}
          >
            {node.label}
          </button>
        ))}
      </div>

      {/* Live SLA Output */}
      <div className="bg-white rounded-xl p-2.5 border border-gray-200/80">
        <div className="text-[11px] text-gray-500 font-medium mb-1 truncate">
          <span className="text-gray-400 font-mono">&gt; </span>
          {nodes[activeNode].spec}
        </div>
        <AnimatePresence mode="wait">
          <motion.div
            key={activeNode}
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.2 }}
            className="text-xs font-bold text-gray-900 leading-tight flex items-center gap-1.5"
          >
            <ShieldCheck size={13} className="text-emerald-600 shrink-0" />
            <span className="truncate">{nodes[activeNode].metric}</span>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
