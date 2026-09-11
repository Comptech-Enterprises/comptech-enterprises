"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GraduationCap, Building2, ShoppingBag, Hotel, Check, ArrowRight } from "lucide-react";
import Link from "next/link";
import { SectionLabel } from "@/components/ui/SectionLabel";

const INDUSTRIES = [
  {
    id: "education",
    name: "Education & Academia",
    icon: GraduationCap,
    partners: ["SRCC", "IIT Delhi", "LBSIM", "St. Cecilia School"],
    title: "AI Training & Faculty Enablement",
    desc: "Hands-on GenAI workshops for faculty and students, teaching practical tools, prompt architecture, and ethical AI development.",
    useCases: [
      "Faculty upskilling on GenAI tools for research & automated grading",
      "Student workshops on building full-stack AI agents and RAG pipelines",
      "Campus knowledge base search over academic archives",
      "Official certificate programs validated by industry AI engineers",
    ],
    metric: "500+ Students & Faculty Trained",
  },
  {
    id: "corporate",
    name: "Corporate & Enterprises",
    icon: Building2,
    partners: ["Anthem", "HL Mando", "Canara Bank"],
    title: "Workflow Automation & Private LLMs",
    desc: "Autonomous internal agents that triage support tickets, draft proposals, and extract intelligence from private ERP and CRM systems.",
    useCases: [
      "Automated customer support routing and email drafting agents",
      "Private RAG assistants querying internal compliance & HR manuals",
      "Automated document classification and invoice processing",
      "Executive AI strategy roadmap & ROI alignment workshops",
    ],
    metric: "3x Productivity Multiplier",
  },
  {
    id: "hospitality",
    name: "Hospitality & Travel",
    icon: Hotel,
    partners: ["Shervani Hotels", "Summit Hotels"],
    title: "24/7 Guest Concierge & Booking Intelligence",
    desc: "Conversational WhatsApp and web booking assistants providing instant multi-lingual guest support, dining suggestions, and direct reservations.",
    useCases: [
      "24/7 instant WhatsApp concierge for reservations & room service",
      "Automated guest review sentiment analysis & instant response drafts",
      "Multi-property inventory & dynamic pricing insights",
      "Staff onboarding and SOP training via conversational agents",
    ],
    metric: "98% Instant Resolution Rate",
  },
  {
    id: "retail",
    name: "Retail & F&B Brands",
    icon: ShoppingBag,
    partners: ["Beanly Coffee", "Rebel Foods", "Fabstract Clothing"],
    title: "Omnichannel Brand Agents & Lead Capture",
    desc: "Social media and marketing AI workflows that draft campaigns, qualify wholesale leads, and automate multichannel order sync.",
    useCases: [
      "AI social content engines tailored to brand voice across channels",
      "Wholesale B2B inquiry qualification and CRM lead handoff",
      "Automated inventory restock alert pipelines",
      "Customer feedback clustering and product roadmap prioritization",
    ],
    metric: "24/7 Zero Lead Drop",
  },
];

export function AIUseCaseExplorer() {
  const [activeTab, setActiveTab] = useState(0);
  const ind = INDUSTRIES[activeTab];
  const Icon = ind.icon;

  return (
    <section className="py-20 lg:py-28 bg-white relative overflow-hidden" aria-labelledby="usecases-title">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <SectionLabel className="justify-center">Industry Blueprints</SectionLabel>
          <h2
            id="usecases-title"
            className="font-display font-extrabold text-gray-900 tracking-tight mt-2 sm:mt-3 leading-tight"
            style={{ fontSize: "clamp(1.85rem, 3.5vw, 2.9rem)" }}
          >
            Practical AI built for{" "}
            <span
              className="text-transparent bg-clip-text"
              style={{ backgroundImage: "linear-gradient(135deg, #5C0F26, #E8435A)" }}
            >
              your sector
            </span>
          </h2>
          <p className="mt-3 text-base sm:text-lg text-gray-500 leading-relaxed">
            Real deployments powering colleges, hotels, consumer brands, and enterprise teams across India.
          </p>
        </div>

        {/* Industry Category Navigation Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-10">
          {INDUSTRIES.map((tab, i) => {
            const TabIcon = tab.icon;
            const isCurrent = activeTab === i;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(i)}
                className={`flex items-center gap-2 px-4 sm:px-6 py-3 rounded-full text-xs sm:text-sm font-bold transition-all duration-200 ${
                  isCurrent
                    ? "bg-[#5C0F26] text-white shadow-md scale-105"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                <TabIcon size={16} />
                {tab.name}
              </button>
            );
          })}
        </div>

        {/* Active Industry Deep-Dive Card */}
        <div className="max-w-5xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="glass-card rounded-3xl p-7 sm:p-10 border border-gray-200/90 shadow-xl bg-white/95"
            >
              <div className="grid lg:grid-cols-12 gap-8 items-start">
                
                {/* Left side details */}
                <div className="lg:col-span-7">
                  <div className="flex items-center gap-2.5 mb-4">
                    <div className="w-10 h-10 rounded-2xl flex items-center justify-center bg-blue-50 text-[#1D4ED8] shadow-xs">
                      <Icon size={20} />
                    </div>
                    <div>
                      <span className="text-xs font-bold text-gray-400 uppercase tracking-widest block">
                        Validated Solution
                      </span>
                      <h3 className="font-display font-extrabold text-2xl text-gray-900 leading-tight">
                        {ind.title}
                      </h3>
                    </div>
                  </div>

                  <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-6">
                    {ind.desc}
                  </p>

                  <div className="space-y-2.5 mb-8">
                    {ind.useCases.map((uc) => (
                      <div key={uc} className="flex items-start gap-2.5">
                        <div className="w-5 h-5 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5">
                          <Check size={12} strokeWidth={3} />
                        </div>
                        <span className="text-sm text-gray-700 font-medium leading-relaxed">{uc}</span>
                      </div>
                    ))}
                  </div>

                  <Link
                    href="/contact#quote"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-bold text-white transition-transform hover:scale-105 shadow-md"
                    style={{ background: "linear-gradient(135deg, #5C0F26, #E8435A)" }}
                  >
                    Request {ind.name} Proposal <ArrowRight size={15} />
                  </Link>
                </div>

                {/* Right side partner badge & metrics */}
                <div className="lg:col-span-5 flex flex-col gap-4">
                  <div className="rounded-2xl p-6 bg-gradient-to-br from-gray-900 to-gray-800 text-white shadow-lg">
                    <p className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">
                      Trusted Partners in this Sector
                    </p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {ind.partners.map((p) => (
                        <span key={p} className="px-3 py-1 rounded-lg bg-white/10 text-xs font-semibold text-white border border-white/15">
                          {p}
                        </span>
                      ))}
                    </div>
                    <div className="pt-4 border-t border-white/15">
                      <p className="text-[11px] uppercase tracking-widest text-emerald-400 font-bold mb-1">
                        Impact Result
                      </p>
                      <p className="font-display font-extrabold text-2xl text-white">
                        {ind.metric}
                      </p>
                    </div>
                  </div>
                </div>

              </div>
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
