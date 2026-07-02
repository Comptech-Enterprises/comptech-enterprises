import Link from "next/link";
import { ArrowRight, BrainCircuit, GraduationCap, Blocks, LineChart } from "lucide-react";
import { RevealWrapper } from "@/components/ui/RevealWrapper";
import { SectionLabel } from "@/components/ui/SectionLabel";

const AI_CARDS = [
  {
    Icon: BrainCircuit,
    title: "NVIDIA GPU Infrastructure",
    desc: "OEM-certified GPU server configurations (Dell PowerEdge, HPE ProLiant) for enterprise machine learning, deep learning, and inference.",
    badge: "Hardware & Compute",
    accent: "#1D4ED8",
    bg: "#EFF6FF",
  },
  {
    Icon: GraduationCap,
    title: "AI Enablement Workshops",
    desc: "Hands-on, custom technical and leadership programs to train your workforce on LLMs, RAG, and AI agent frameworks.",
    badge: "Consulting & Training",
    accent: "#5C0F26",
    bg: "#FDF4F6",
  },
  {
    Icon: Blocks,
    title: "No-Code AI Platform",
    desc: "Deploy a private, self-hosted no-code AI builder inside your network so business teams can build secure local chatbots.",
    badge: "Private Software",
    accent: "#1D4ED8",
    bg: "#EFF6FF",
  },
  {
    Icon: LineChart,
    title: "Document Intelligence",
    desc: "Deploy intelligent search, OCR, data extraction, and workflow automation solutions directly integrated with local databases.",
    badge: "Business Automation",
    accent: "#5C0F26",
    bg: "#FDF4F6",
  },
];

export function AISection() {
  return (
    <section
      className="py-24 lg:py-32 bg-white"
      aria-labelledby="ai-title"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <RevealWrapper className="mb-14 md:flex md:items-end md:justify-between gap-8">
          <div className="max-w-xl">
            <SectionLabel>AI Division</SectionLabel>
            <h2
              id="ai-title"
              className="font-display font-extrabold text-gray-900 text-balance"
              style={{ fontSize: "clamp(1.9rem, 3.5vw, 2.8rem)" }}
            >
              AI that works inside your walls
            </h2>
            <p className="mt-4 text-base text-gray-500 leading-relaxed">
              We help Indian enterprises adopt Generative AI and machine learning securely — inside your own network, with your own data. From hardware to team enablement.
            </p>
          </div>
          <div className="mt-6 md:mt-0 flex-shrink-0">
            <Link href="/ai-solutions" className="btn-accent btn btn-lg inline-flex">
              View AI Platform <ArrowRight size={18} className="btn-arrow" />
            </Link>
          </div>
        </RevealWrapper>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {AI_CARDS.map(({ Icon, title, desc, badge, accent, bg }, i) => (
            <RevealWrapper key={title} delay={i * 80}>
              <div
                className="rounded-2xl bg-white p-6 h-full flex flex-col transition-all duration-300 hover:shadow-md"
                style={{
                  border: "1px solid rgba(0,0,0,0.07)",
                  boxShadow: "0 1px 4px rgba(0,0,0,0.04)",
                }}
              >
                <span
                  className="self-start text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md mb-6"
                  style={{ background: bg, color: accent }}
                >
                  {badge}
                </span>

                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center mb-5"
                  style={{ background: bg }}
                >
                  <Icon size={20} style={{ color: accent }} />
                </div>

                <h3 className="font-display font-bold text-[15px] text-gray-900 mb-2">{title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed flex-1">{desc}</p>
              </div>
            </RevealWrapper>
          ))}
        </div>
      </div>
    </section>
  );
}
