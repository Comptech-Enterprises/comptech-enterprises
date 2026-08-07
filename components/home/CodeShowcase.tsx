"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Check, Copy } from "lucide-react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { RevealWrapper } from "@/components/ui/RevealWrapper";

interface Snippet {
  id: string;
  label: string;
  file: string;
  code: string;
}

const SNIPPETS: Snippet[] = [
  {
    id: "python",
    label: "Python",
    file: "support_agent.py",
    code: `# Comptech AI — deploy a support agent
from comptech import Agent, Knowledge

kb = Knowledge.from_docs("./company-policies")
agent = Agent(model="claude", tools=["crm", "email"])

reply = agent.run(
    "Draft a proposal for a 3-site CCTV rollout",
    knowledge=kb,
)

print(reply.summary)`,
  },
  {
    id: "javascript",
    label: "JavaScript",
    file: "lead_agent.js",
    code: `// Comptech AI — lead qualification agent
import { Agent } from "@comptech/ai";

const agent = new Agent({ model: "claude" });

const result = await agent.run({
  input: "Qualify this inbound enquiry",
  tools: ["crm", "calendar"],
});

console.log(result.nextStep);`,
  },
  {
    id: "curl",
    label: "cURL",
    file: "request.sh",
    code: `# Comptech AI — call the assistant API
curl https://api.comptech.in/v1/agents/run \\
  -H "Authorization: Bearer $COMPTECH_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "agent": "sales-assistant",
    "input": "Book a site survey next week"
  }'`,
  },
];

// Lightweight, controlled syntax highlighting for our own static snippets.
function highlight(code: string): string {
  const esc = code
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
  return esc.replace(
    /(#[^\n]*|\/\/[^\n]*)|("(?:[^"\\]|\\.)*"|'(?:[^'\\]|\\.)*'|`(?:[^`\\]|\\.)*`)|\b(import|from|const|let|var|await|async|def|return|new|class|function|print|curl)\b|\b(\d+(?:\.\d+)?)\b/g,
    (m, comment, str, kw, num) => {
      if (comment) return `<span class="text-slate-500">${comment}</span>`;
      if (str) return `<span class="text-emerald-300">${str}</span>`;
      if (kw) return `<span class="text-violet-300">${kw}</span>`;
      if (num) return `<span class="text-amber-300">${num}</span>`;
      return m;
    },
  );
}

export function CodeShowcase() {
  const [active, setActive] = useState(SNIPPETS[0].id);
  const [copied, setCopied] = useState(false);

  const current = SNIPPETS.find((s) => s.id === active)!;

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(current.code);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      /* clipboard unavailable */
    }
  };

  return (
    <section className="py-16 lg:py-28" aria-labelledby="code-title">
      <div className="max-w-6xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        {/* Left — copy */}
        <RevealWrapper direction="left" className="max-w-xl">
          <SectionLabel>Software &amp; AI Engineering</SectionLabel>
          <h2
            id="code-title"
            className="font-display font-extrabold text-gray-900 tracking-tight mt-3"
            style={{ fontSize: "clamp(1.9rem, 3.7vw, 2.9rem)" }}
          >
            We write the{" "}
            <span
              className="text-transparent bg-clip-text"
              style={{ backgroundImage: "linear-gradient(135deg, #5C0F26, #E8435A)" }}
            >
              software behind it
            </span>
          </h2>
          <p className="mt-4 text-lg text-gray-500 leading-relaxed">
            Beyond hardware, our engineers build the custom software, integrations, and AI agents
            that make your systems work together — from CRMs and dashboards to autonomous assistants.
          </p>
          <ul className="mt-7 space-y-3">
            {[
              "Custom software & business applications",
              "AI agents wired into your tools (CRM, email, calendar)",
              "Secure APIs and system integrations",
            ].map((point) => (
              <li key={point} className="flex items-start gap-3">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0" style={{ background: "#5C0F26" }} />
                <span className="text-[15px] text-gray-700">{point}</span>
              </li>
            ))}
          </ul>
          <Link
            href="/services#software"
            className="mt-8 inline-flex items-center gap-2 rounded-full px-7 py-3.5 font-semibold text-white text-sm transition-all duration-300 hover:-translate-y-px"
            style={{ background: "#5C0F26", boxShadow: "0 8px 24px rgba(92,15,38,0.25)" }}
          >
            Explore software solutions <ArrowRight size={16} />
          </Link>
        </RevealWrapper>

        {/* Right — code panel */}
        <RevealWrapper delay={80}>
          <div className="rounded-2xl overflow-hidden shadow-2xl border border-white/10" style={{ background: "#0D1117" }}>
            {/* Title bar */}
            <div className="flex items-center gap-2 px-4 py-3 border-b border-white/10">
              <span className="w-3 h-3 rounded-full" style={{ background: "#FF5F56" }} />
              <span className="w-3 h-3 rounded-full" style={{ background: "#FFBD2E" }} />
              <span className="w-3 h-3 rounded-full" style={{ background: "#27C93F" }} />
              <span className="ml-3 text-xs font-mono text-slate-400">{current.file}</span>
              <button
                onClick={copy}
                className="ml-auto flex items-center gap-1.5 text-xs font-medium text-slate-400 hover:text-slate-200 transition-colors"
                aria-label="Copy code"
              >
                {copied ? <Check size={13} /> : <Copy size={13} />}
                {copied ? "Copied" : "Copy"}
              </button>
            </div>

            {/* Tabs */}
            <div className="flex border-b border-white/10 px-2">
              {SNIPPETS.map((s) => (
                <button
                  key={s.id}
                  onClick={() => setActive(s.id)}
                  className={`px-4 py-2.5 text-xs font-semibold transition-colors relative ${
                    active === s.id ? "text-white" : "text-slate-500 hover:text-slate-300"
                  }`}
                >
                  {s.label}
                  {active === s.id && (
                    <span className="absolute left-2 right-2 bottom-0 h-[2px] rounded-full" style={{ background: "#E8435A" }} />
                  )}
                </button>
              ))}
            </div>

            {/* Code */}
            <pre className="p-5 text-[13px] leading-relaxed overflow-x-auto font-mono text-slate-200">
              <code dangerouslySetInnerHTML={{ __html: highlight(current.code) }} />
            </pre>
          </div>
        </RevealWrapper>
      </div>
    </section>
  );
}
