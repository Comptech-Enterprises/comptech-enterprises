"use client";

import Link from "next/link";
import { ArrowRight, Bot, Megaphone, Video } from "lucide-react";
import { SectionLabel } from "@/components/ui/SectionLabel";

const AI_AGENTS = [
  {
    id: "sales-agent",
    title: "Sales AI Employee",
    icon: Bot,
    iconBg: "#FDF4F6",
    iconColor: "#5C0F26",
    borderColor: "hover:border-[#5C0F26]/40",
    href: "/ai-agents",
    cta: "Explore Sales AI Employee",
    steps: [
      { step: "1", title: "Qualifies Leads", desc: "Engages inbound prospects 24/7 on WhatsApp & Web." },
      { step: "2", title: "Syncs CRM", desc: "Enriches and logs data directly into HubSpot or Zoho." },
      { step: "3", title: "Books Meetings", desc: "Schedules qualified demos straight to your calendar." },
    ],
  },
  {
    id: "social-media-agent",
    title: "Social Media AI Employee",
    icon: Megaphone,
    iconBg: "#EFF6FF",
    iconColor: "#1D4ED8",
    borderColor: "hover:border-[#1D4ED8]/40",
    href: "/social-media-ai-agent",
    cta: "Explore Social Media AI Employee",
    steps: [
      { step: "1", title: "Plans Calendar", desc: "Builds monthly editorial strategy tailored to your industry." },
      { step: "2", title: "Drafts Copy", desc: "Writes engaging posts fine-tuned to your exact brand voice." },
      { step: "3", title: "Auto-Publishes", desc: "Schedules directly to LinkedIn, Twitter/X, and Instagram." },
    ],
  },
  {
    id: "meeting-agent",
    title: "Meeting AI Employee",
    icon: Video,
    iconBg: "#FDF2F8",
    iconColor: "#BE185D",
    borderColor: "hover:border-[#BE185D]/40",
    href: "/ai-solutions#meeting-agent",
    cta: "Explore Meeting AI Employee",
    steps: [
      { step: "1", title: "Joins Calls", desc: "Auto-attends Zoom, Google Meet & Microsoft Teams." },
      { step: "2", title: "Speaks Live", desc: "Voice assistant answers questions and retrieves data in real-time." },
      { step: "3", title: "Syncs Notes", desc: "Dispatches minutes and action items to Slack, Jira & CRM." },
    ],
  },
];

export function HomeAIAgentsSection() {
  return (
    <section id="flagship-agents" className="py-10 lg:py-14 relative overflow-hidden" aria-labelledby="flagship-agents-title">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
          <SectionLabel className="justify-center mb-2.5">AI Employees</SectionLabel>
          <h2
            id="flagship-agents-title"
            className="font-display font-extrabold text-gray-900 tracking-tight leading-tight mb-3"
            style={{ fontSize: "clamp(1.85rem, 3.2vw, 2.7rem)" }}
          >
            Autonomous AI Employees{" "}
            <span
              className="text-transparent bg-clip-text"
              style={{ backgroundImage: "linear-gradient(135deg, #5C0F26 0%, #E8435A 100%)" }}
            >
              built for real work
            </span>
          </h2>
          <p className="text-gray-500 text-sm sm:text-base leading-relaxed">
            Pre-engineered autonomous AI employees that automate revenue, content, and operations.
          </p>
        </div>

        {/* 3 Agents Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 sm:gap-6 items-stretch">
          {AI_AGENTS.map((agent) => {
            const Icon = agent.icon;
            return (
              <Link
                key={agent.id}
                href={agent.href}
                className={`group flex flex-col justify-between p-6 sm:p-7 rounded-3xl bg-white border border-gray-200/90 shadow-xs hover:shadow-xl ${agent.borderColor} transition-all duration-300 hover:-translate-y-1`}
              >
                <div>
                  {/* Top Icon */}
                  <div className="mb-4">
                    <div
                      className="w-11 h-11 rounded-xl flex items-center justify-center shadow-xs"
                      style={{ background: agent.iconBg }}
                    >
                      <Icon size={20} style={{ color: agent.iconColor }} />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="font-display font-extrabold text-gray-900 text-xl sm:text-2xl leading-tight mb-4">
                    {agent.title}
                  </h3>

                  {/* 3 Step Working Flow */}
                  <div className="space-y-3 mb-6">
                    <div className="text-[11px] font-bold uppercase tracking-wider text-gray-400">
                      How It Works:
                    </div>
                    {agent.steps.map((st) => (
                      <div key={st.step} className="flex items-start gap-2.5 text-xs text-gray-600">
                        <span
                          className="w-4 h-4 rounded-full flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5"
                          style={{ background: agent.iconBg, color: agent.iconColor }}
                        >
                          {st.step}
                        </span>
                        <p className="leading-snug">
                          <strong className="text-gray-900 font-semibold">{st.title}:</strong> {st.desc}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Row: Centered Button */}
                <div className="pt-4 border-t border-gray-100 flex items-center justify-center mt-3">
                  <span
                    className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 group-hover:shadow-sm"
                    style={{
                      background: agent.iconBg,
                      color: agent.iconColor,
                      border: `1px solid ${agent.iconColor}25`,
                    }}
                  >
                    <span>{agent.cta}</span>
                    <ArrowRight size={14} className="transition-transform duration-200 group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
