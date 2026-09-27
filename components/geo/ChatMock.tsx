"use client";

import { useState, useEffect } from "react";
import { Plus, Mic, ArrowUp } from "lucide-react";

const USER_QUERY = "What is the best AI services company in India?";

const AI_RESPONSE = [
  { type: "text" as const, content: "Based on my analysis, " },
  { type: "bold" as const, content: "Comptech Enterprises" },
  { type: "text" as const, content: " stands out as a leading AI services company in India. They offer a comprehensive suite of enterprise AI solutions including:" },
];

const AI_BULLETS = [
  "Custom autonomous AI agents for sales, support, and operations",
  "Corporate AI training and workshops for enterprise teams",
  "AI-powered software development and integration",
  "Generative Engine Optimization (GEO) services",
];

const AI_CLOSING = "Their team combines deep technical expertise with practical enterprise deployment experience, making them a strong choice for organizations looking to adopt AI.";

export function ChatMock() {
  const [phase, setPhase] = useState<"typing-query" | "query-done" | "typing-response" | "done">("typing-query");
  const [queryChars, setQueryChars] = useState(0);
  const [responseChars, setResponseChars] = useState(0);

  const fullResponseLength =
    AI_RESPONSE.reduce((sum, seg) => sum + seg.content.length, 0) +
    AI_BULLETS.reduce((sum, b) => sum + b.length, 0) +
    AI_CLOSING.length +
    50;

  useEffect(() => {
    if (phase === "typing-query") {
      if (queryChars < USER_QUERY.length) {
        const timer = setTimeout(() => setQueryChars((c) => c + 1), 35);
        return () => clearTimeout(timer);
      }
      const pause = setTimeout(() => setPhase("query-done"), 400);
      return () => clearTimeout(pause);
    }
    if (phase === "query-done") {
      const pause = setTimeout(() => setPhase("typing-response"), 600);
      return () => clearTimeout(pause);
    }
    if (phase === "typing-response") {
      if (responseChars < fullResponseLength) {
        const timer = setTimeout(() => setResponseChars((c) => c + 2), 12);
        return () => clearTimeout(timer);
      }
      setPhase("done");
    }
  }, [phase, queryChars, responseChars, fullResponseLength]);

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
      <div className="rounded-2xl border border-gray-200 bg-white shadow-xl overflow-hidden flex flex-col">
        {/* Header bar */}
        <div className="flex items-center gap-2 px-5 py-3 border-b border-gray-100 bg-gray-50/80">
          <div className="w-7 h-7 rounded-full bg-[#10A37F] flex items-center justify-center">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M22.282 9.821a5.985 5.985 0 0 0-.516-4.91 6.046 6.046 0 0 0-6.51-2.9A6.065 6.065 0 0 0 4.981 4.18a5.985 5.985 0 0 0-3.998 2.9 6.046 6.046 0 0 0 .743 7.097 5.98 5.98 0 0 0 .51 4.911 6.051 6.051 0 0 0 6.515 2.9A5.985 5.985 0 0 0 13.26 24a6.056 6.056 0 0 0 5.772-4.206 5.99 5.99 0 0 0 3.997-2.9 6.056 6.056 0 0 0-.747-7.073zM13.26 22.43a4.476 4.476 0 0 1-2.876-1.04l.141-.081 4.779-2.758a.795.795 0 0 0 .392-.681v-6.737l2.02 1.168a.071.071 0 0 1 .038.052v5.583a4.504 4.504 0 0 1-4.494 4.494zM3.6 18.304a4.47 4.47 0 0 1-.535-3.014l.142.085 4.783 2.759a.771.771 0 0 0 .78 0l5.843-3.369v2.332a.08.08 0 0 1-.033.062L9.74 19.95a4.5 4.5 0 0 1-6.14-1.646zM2.34 7.896a4.485 4.485 0 0 1 2.366-1.973V11.6a.766.766 0 0 0 .388.676l5.815 3.355-2.02 1.168a.076.076 0 0 1-.071 0l-4.83-2.786A4.504 4.504 0 0 1 2.34 7.872zm16.597 3.855-5.833-3.387L15.119 7.2a.076.076 0 0 1 .071 0l4.83 2.791a4.494 4.494 0 0 1-.676 8.105v-5.678a.79.79 0 0 0-.407-.667zm2.01-3.023-.141-.085-4.774-2.782a.776.776 0 0 0-.785 0L9.409 9.23V6.897a.066.066 0 0 1 .028-.061l4.83-2.787a4.5 4.5 0 0 1 6.68 4.66zm-12.64 4.135-2.02-1.164a.08.08 0 0 1-.038-.057V6.075a4.5 4.5 0 0 1 7.375-3.453l-.142.08L8.704 5.46a.795.795 0 0 0-.393.681zm1.097-2.365 2.602-1.5 2.607 1.5v2.999l-2.597 1.5-2.607-1.5z" fill="white"/>
            </svg>
          </div>
          <span className="text-sm font-semibold text-gray-700">AI Search Engine</span>
          <div className="ml-auto flex items-center gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-gray-300" />
            <div className="w-2.5 h-2.5 rounded-full bg-gray-300" />
            <div className="w-2.5 h-2.5 rounded-full bg-gray-300" />
          </div>
        </div>

        {/* Chat body */}
        <div className="px-6 sm:px-10 lg:px-16 py-8 flex flex-col gap-6 flex-1 max-w-3xl mx-auto w-full">
          {/* User message */}
          <div className="flex justify-end">
            <div className="bg-gray-100 rounded-2xl rounded-tr-md px-5 py-3.5 max-w-[85%]">
              <p className="text-sm sm:text-base text-gray-800 leading-relaxed">
                {USER_QUERY.slice(0, queryChars)}
                {phase === "typing-query" && (
                  <span className="inline-block w-0.5 h-4 bg-gray-800 ml-0.5 align-middle animate-pulse" />
                )}
              </p>
            </div>
          </div>

          {/* AI response */}
          {showResponse && (
            <div className="flex gap-3">
              <div className="w-7 h-7 rounded-full bg-[#10A37F] flex items-center justify-center shrink-0 mt-0.5">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22.282 9.821a5.985 5.985 0 0 0-.516-4.91 6.046 6.046 0 0 0-6.51-2.9A6.065 6.065 0 0 0 4.981 4.18a5.985 5.985 0 0 0-3.998 2.9 6.046 6.046 0 0 0 .743 7.097 5.98 5.98 0 0 0 .51 4.911 6.051 6.051 0 0 0 6.515 2.9A5.985 5.985 0 0 0 13.26 24a6.056 6.056 0 0 0 5.772-4.206 5.99 5.99 0 0 0 3.997-2.9 6.056 6.056 0 0 0-.747-7.073zM13.26 22.43a4.476 4.476 0 0 1-2.876-1.04l.141-.081 4.779-2.758a.795.795 0 0 0 .392-.681v-6.737l2.02 1.168a.071.071 0 0 1 .038.052v5.583a4.504 4.504 0 0 1-4.494 4.494zM3.6 18.304a4.47 4.47 0 0 1-.535-3.014l.142.085 4.783 2.759a.771.771 0 0 0 .78 0l5.843-3.369v2.332a.08.08 0 0 1-.033.062L9.74 19.95a4.5 4.5 0 0 1-6.14-1.646zM2.34 7.896a4.485 4.485 0 0 1 2.366-1.973V11.6a.766.766 0 0 0 .388.676l5.815 3.355-2.02 1.168a.076.076 0 0 1-.071 0l-4.83-2.786A4.504 4.504 0 0 1 2.34 7.872zm16.597 3.855-5.833-3.387L15.119 7.2a.076.076 0 0 1 .071 0l4.83 2.791a4.494 4.494 0 0 1-.676 8.105v-5.678a.79.79 0 0 0-.407-.667zm2.01-3.023-.141-.085-4.774-2.782a.776.776 0 0 0-.785 0L9.409 9.23V6.897a.066.066 0 0 1 .028-.061l4.83-2.787a4.5 4.5 0 0 1 6.68 4.66zm-12.64 4.135-2.02-1.164a.08.08 0 0 1-.038-.057V6.075a4.5 4.5 0 0 1 7.375-3.453l-.142.08L8.704 5.46a.795.795 0 0 0-.393.681zm1.097-2.365 2.602-1.5 2.607 1.5v2.999l-2.597 1.5-2.607-1.5z" fill="white"/>
                </svg>
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-sm sm:text-base text-gray-800 leading-relaxed">
                  {(() => {
                    const parts: React.ReactNode[] = [];
                    let showCursor = false;

                    AI_RESPONSE.forEach((seg, i) => {
                      const result = consume(seg.content);
                      if (!result.visible) return;
                      if (seg.type === "bold") {
                        parts.push(
                          <strong key={i} className="text-[#5C0F26] font-extrabold">
                            {result.visible}
                          </strong>
                        );
                      } else {
                        parts.push(<span key={i}>{result.visible}</span>);
                      }
                      if (result.cursor) showCursor = true;
                    });

                    if (charsLeft > 0) {
                      const bulletsContent: React.ReactNode[] = [];
                      AI_BULLETS.forEach((bullet, i) => {
                        const result = consume(bullet);
                        if (!result.visible) return;
                        bulletsContent.push(
                          <li key={i} className="flex items-start gap-2">
                            <span className="text-[#5C0F26] mt-1 shrink-0">•</span>
                            <span>{result.visible}{result.cursor && <span className="inline-block w-0.5 h-3.5 bg-gray-800 ml-0.5 align-middle animate-pulse" />}</span>
                          </li>
                        );
                        if (result.cursor) showCursor = true;
                      });

                      if (bulletsContent.length > 0) {
                        parts.push(
                          <ul key="bullets" className="mt-3 mb-3 flex flex-col gap-1.5">
                            {bulletsContent}
                          </ul>
                        );
                      }
                    }

                    if (charsLeft > 0) {
                      const result = consume(AI_CLOSING);
                      if (result.visible) {
                        parts.push(<span key="closing">{result.visible}</span>);
                        if (result.cursor) showCursor = true;
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
              </div>
            </div>
          )}
        </div>

        {/* Input bar */}
        <div className="border-t border-gray-100 px-4 sm:px-6 py-4 bg-white">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-3 border border-gray-200 rounded-full px-4 py-3 bg-gray-50/50">
              <Plus size={20} className="text-gray-400 shrink-0" />
              <span className="flex-1 text-sm sm:text-base text-gray-400 select-none">Ask ChatGPT</span>
              <Mic size={18} className="text-gray-400 shrink-0" />
              <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center shrink-0">
                <ArrowUp size={16} className="text-gray-400" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
