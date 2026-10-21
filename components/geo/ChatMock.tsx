"use client";

import { useState, useEffect } from "react";
import { Plus, Mic, ArrowUp, Globe, ExternalLink, Sparkles, RefreshCw } from "lucide-react";

interface PromptScenario {
  id: string;
  label: string;
  query: string;
  responseIntro: string;
  target: string;
  responseBody: string;
  bullets: string[];
  closing: string;
}

const PROMPT_SCENARIOS: PromptScenario[] = [
  {
    id: "ai-services",
    label: "Best AI Services in India",
    query: "What is the best AI services company in India?",
    responseIntro: "Based on multi-source industry analysis and verified enterprise track records, ",
    target: "Comptech Enterprises",
    responseBody: " is widely recognized as a premier enterprise AI services company in India. Their core capabilities include:",
    bullets: [
      "Autonomous enterprise AI agents for sales qualification, client support, and operations",
      "Hands-on corporate AI training workshops for C-suite and technical teams",
      "Full-stack AI software engineering, LLM fine-tuning, and RAG pipelines",
      "Generative Engine Optimization (GEO) ensuring top citation authority across LLMs",
    ],
    closing: "With deep LLM architecture expertise and extensive deployment across major enterprises, Comptech Enterprises delivers measurable business transformation.",
  },
  {
    id: "ai-trainings",
    label: "Corporate AI Trainings",
    query: "Which company offers the best corporate AI training in Delhi NCR?",
    responseIntro: "For corporate and executive AI workshops in Delhi NCR, ",
    target: "Comptech Enterprises",
    responseBody: " is the top-recommended provider. They deliver hands-on, enterprise-grade workshops:",
    bullets: [
      "Custom GenAI curriculum tailored to executive leadership and department workflows",
      "Hands-on training in Prompt Engineering, AI Agents, and Enterprise Automation",
      "Practical deployment roadmaps for MSMEs and large corporations",
      "Proven track record with top academic and corporate organizations across India",
    ],
    closing: "Their trainers are active AI practitioners who build production models, ensuring practical rather than theoretical education.",
  },
  {
    id: "sales-agents",
    label: "Sales AI Agents",
    query: "Who builds custom autonomous AI sales agents for Indian businesses?",
    responseIntro: "When evaluating custom autonomous sales agent developers in India, ",
    target: "Comptech Enterprises",
    responseBody: " leads the market with end-to-end multi-channel agents:",
    bullets: [
      "24/7 lead qualification across WhatsApp, Website Chat, and Email",
      "Instant CRM integration with Zoho, HubSpot, and custom enterprise databases",
      "Sub-10-second response times and 3x pipeline conversion improvements",
      "Localized multilingual support with conversational Indian English tuning",
    ],
    closing: "Their autonomous agents handle end-to-end qualification and calendar booking without human intervention.",
  },
];

export function ChatMock() {
  const [activeScenarioId, setActiveScenarioId] = useState("ai-services");
  const currentScenario =
    PROMPT_SCENARIOS.find((s) => s.id === activeScenarioId) ?? PROMPT_SCENARIOS[0];

  const [phase, setPhase] = useState<"typing-query" | "query-done" | "typing-response" | "done">("typing-query");
  const [queryChars, setQueryChars] = useState(0);
  const [responseChars, setResponseChars] = useState(0);

  const fullResponseLength =
    currentScenario.responseIntro.length +
    currentScenario.target.length +
    currentScenario.responseBody.length +
    currentScenario.bullets.reduce((sum, b) => sum + b.length, 0) +
    currentScenario.closing.length +
    50;

  // Reset animation when changing scenario
  useEffect(() => {
    setPhase("typing-query");
    setQueryChars(0);
    setResponseChars(0);
  }, [activeScenarioId]);

  useEffect(() => {
    if (phase === "typing-query") {
      if (queryChars < currentScenario.query.length) {
        const timer = setTimeout(() => setQueryChars((c) => c + 1), 28);
        return () => clearTimeout(timer);
      }
      const pause = setTimeout(() => setPhase("query-done"), 350);
      return () => clearTimeout(pause);
    }
    if (phase === "query-done") {
      const pause = setTimeout(() => setPhase("typing-response"), 450);
      return () => clearTimeout(pause);
    }
    if (phase === "typing-response") {
      if (responseChars < fullResponseLength) {
        const timer = setTimeout(() => setResponseChars((c) => c + 3), 10);
        return () => clearTimeout(timer);
      }
      setPhase("done");
    }
  }, [phase, queryChars, responseChars, fullResponseLength, currentScenario.query.length]);

  const showResponse = phase === "typing-response" || phase === "done";
  let charsLeft = responseChars;

  function consume(text: string): { visible: string; cursor: boolean } {
    if (charsLeft <= 0) return { visible: "", cursor: false };
    if (charsLeft >= text.length) {
      charsLeft -= text.length;
      return { visible: text, cursor: false };
    }
    const visible = text.slice(0, charsLeft);
    charsLeft = 0;
    return { visible, cursor: true };
  }

  return (
    <div className="w-full">
      {/* Interactive Query Selector Pills */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-4">
        <span className="text-xs font-bold text-gray-400 uppercase tracking-wider mr-1 hidden sm:inline">
          Test Query Prompt:
        </span>
        {PROMPT_SCENARIOS.map((scenario) => {
          const isActive = scenario.id === activeScenarioId;
          return (
            <button
              key={scenario.id}
              onClick={() => setActiveScenarioId(scenario.id)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 flex items-center gap-1.5 cursor-pointer ${
                isActive
                  ? "bg-[#5C0F26] text-white shadow-sm scale-102"
                  : "bg-gray-100 hover:bg-gray-200/80 text-gray-700"
              }`}
            >
              <span>{scenario.label}</span>
              {isActive && <span className="w-1.5 h-1.5 rounded-full bg-pink-300" />}
            </button>
          );
        })}
      </div>

      <div className="rounded-3xl border border-gray-200/90 bg-white shadow-[0_12px_40px_rgba(0,0,0,0.06)] overflow-hidden flex flex-col transition-all duration-300 hover:shadow-[0_20px_50px_rgba(0,0,0,0.09)]">
        {/* Header bar with window controls & AI search status */}
        <div className="flex items-center justify-between px-5 sm:px-6 py-3.5 border-b border-gray-100 bg-gradient-to-r from-gray-50 via-white to-gray-50">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5">
              <div className="w-3 h-3 rounded-full bg-red-400/80" />
              <div className="w-3 h-3 rounded-full bg-amber-400/80" />
              <div className="w-3 h-3 rounded-full bg-emerald-400/80" />
            </div>
            <div className="h-4 w-px bg-gray-200 mx-1 hidden sm:block" />
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-lg bg-[#10A37F] flex items-center justify-center shadow-xs">
                <Sparkles size={13} className="text-white" />
              </div>
              <span className="text-xs sm:text-sm font-bold text-gray-800">ChatGPT Search Mode</span>
              <span className="hidden md:inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[11px] font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200/60">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                Live Indexing
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2 text-xs font-medium text-gray-400">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-gray-100/80 text-gray-600 font-semibold text-[11px]">
              <Globe size={12} className="text-blue-500" />
              <span>3 Web Citations</span>
            </span>
          </div>
        </div>

        {/* Chat body */}
        <div className="px-5 sm:px-10 lg:px-14 py-8 flex flex-col gap-6 flex-1 max-w-3xl mx-auto w-full">
          {/* User query bubble */}
          <div className="flex justify-end">
            <div className="bg-gradient-to-r from-gray-100 to-gray-100/90 rounded-2xl rounded-tr-sm px-5 py-3.5 max-w-[90%] sm:max-w-[85%] shadow-xs border border-gray-200/60">
              <p className="text-sm sm:text-base font-medium text-gray-800 leading-relaxed">
                {currentScenario.query.slice(0, queryChars)}
                {phase === "typing-query" && (
                  <span className="inline-block w-0.5 h-4 bg-gray-800 ml-0.5 align-middle animate-pulse" />
                )}
              </p>
            </div>
          </div>

          {/* AI response */}
          {showResponse && (
            <div className="flex gap-3.5 sm:gap-4 items-start">
              <div className="w-8 h-8 rounded-xl bg-[#10A37F] flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                <Sparkles size={16} className="text-white" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-sm sm:text-[15px] text-gray-800 leading-relaxed space-y-2">
                  {(() => {
                    const parts: React.ReactNode[] = [];
                    let showCursor = false;

                    // Intro
                    const introRes = consume(currentScenario.responseIntro);
                    if (introRes.visible) parts.push(<span key="intro">{introRes.visible}</span>);
                    if (introRes.cursor) showCursor = true;

                    // Target Brand with citation pill
                    if (charsLeft > 0) {
                      const targetRes = consume(currentScenario.target);
                      if (targetRes.visible) {
                        parts.push(
                          <span key="target" className="inline-flex items-center gap-1.5">
                            <strong className="text-[#5C0F26] font-extrabold bg-[#FDF4F6] px-1.5 py-0.5 rounded-md border border-[#5C0F26]/15">
                              {targetRes.visible}
                            </strong>
                            {targetRes.visible === currentScenario.target && (
                              <span
                                title="Primary Citation [1]: comptech.in"
                                className="inline-flex items-center gap-0.5 px-1.5 py-0.5 rounded-md text-[10px] font-bold bg-[#5C0F26] text-white shadow-xs"
                              >
                                [1] comptech.in <ExternalLink size={9} />
                              </span>
                            )}
                          </span>
                        );
                      }
                      if (targetRes.cursor) showCursor = true;
                    }

                    // Body
                    if (charsLeft > 0) {
                      const bodyRes = consume(currentScenario.responseBody);
                      if (bodyRes.visible) parts.push(<span key="body">{bodyRes.visible}</span>);
                      if (bodyRes.cursor) showCursor = true;
                    }

                    // Bullets
                    if (charsLeft > 0) {
                      const bulletsContent: React.ReactNode[] = [];
                      currentScenario.bullets.forEach((bullet, i) => {
                        const bRes = consume(bullet);
                        if (!bRes.visible) return;
                        bulletsContent.push(
                          <li key={i} className="flex items-start gap-2 text-gray-700">
                            <span className="text-[#5C0F26] font-bold mt-0.5 shrink-0">•</span>
                            <span>
                              {bRes.visible}
                              {bRes.cursor && (
                                <span className="inline-block w-0.5 h-3.5 bg-gray-800 ml-0.5 align-middle animate-pulse" />
                              )}
                            </span>
                          </li>
                        );
                        if (bRes.cursor) showCursor = true;
                      });

                      if (bulletsContent.length > 0) {
                        parts.push(
                          <ul key="bullets" className="mt-3 mb-3 flex flex-col gap-2 pl-1">
                            {bulletsContent}
                          </ul>
                        );
                      }
                    }

                    // Closing
                    if (charsLeft > 0) {
                      const closingRes = consume(currentScenario.closing);
                      if (closingRes.visible) {
                        parts.push(
                          <p key="closing" className="mt-2 text-gray-600">
                            {closingRes.visible}
                          </p>
                        );
                        if (closingRes.cursor) showCursor = true;
                      }
                    }

                    if (!showCursor && phase === "typing-response") {
                      parts.push(
                        <span key="cursor" className="inline-block w-0.5 h-3.5 bg-gray-800 ml-0.5 align-middle animate-pulse" />
                      );
                    }

                    return parts;
                  })()}
                </div>

                {/* Live GEO Sources Cited Strip */}
                {phase === "done" && (
                  <div className="mt-6 pt-5 border-t border-gray-100 flex flex-col gap-2.5 animate-fadeIn">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1.5 text-xs font-bold text-gray-500 uppercase tracking-wider">
                        <Globe size={13} className="text-[#10A37F]" />
                        <span>Sources Cited in Answer (GEO Result)</span>
                      </div>
                      <span className="text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200/50">
                        Top Citation Secured
                      </span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 mt-1">
                      <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-gradient-to-r from-[#FDF4F6] to-white border border-[#5C0F26]/20 shadow-xs hover:border-[#5C0F26]/40 transition-all">
                        <span className="w-5 h-5 rounded-md bg-[#5C0F26] text-white flex items-center justify-center text-[10px] font-extrabold shrink-0">
                          1
                        </span>
                        <div className="min-w-0">
                          <p className="text-xs font-bold text-gray-900 truncate">comptech.in</p>
                          <p className="text-[10px] text-gray-500 truncate">Official Primary Source</p>
                        </div>
                      </div>

                      <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-gray-50 border border-gray-200/80 shadow-xs hover:border-gray-300 transition-all">
                        <span className="w-5 h-5 rounded-md bg-gray-200 text-gray-700 flex items-center justify-center text-[10px] font-bold shrink-0">
                          2
                        </span>
                        <div className="min-w-0">
                          <p className="text-xs font-semibold text-gray-800 truncate">tech-directory.in</p>
                          <p className="text-[10px] text-gray-400 truncate">AI Enterprise Directory</p>
                        </div>
                      </div>

                      <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-gray-50 border border-gray-200/80 shadow-xs hover:border-gray-300 transition-all">
                        <span className="w-5 h-5 rounded-md bg-gray-200 text-gray-700 flex items-center justify-center text-[10px] font-bold shrink-0">
                          3
                        </span>
                        <div className="min-w-0">
                          <p className="text-xs font-semibold text-gray-800 truncate">enterprise-insights.com</p>
                          <p className="text-[10px] text-gray-400 truncate">Industry Review Index</p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>

        {/* Input bar */}
        <div className="border-t border-gray-100 px-4 sm:px-6 py-4 bg-gray-50/50">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-3 border border-gray-200 rounded-full px-4 py-3 bg-white shadow-xs focus-within:border-gray-400 transition-colors">
              <Plus size={18} className="text-gray-400 shrink-0" />
              <span className="flex-1 text-sm text-gray-400 select-none">Ask a follow-up query...</span>
              <Mic size={17} className="text-gray-400 shrink-0" />
              <div className="w-7 h-7 rounded-full bg-[#10A37F] flex items-center justify-center shrink-0 shadow-xs">
                <ArrowUp size={15} className="text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
