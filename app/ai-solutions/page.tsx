import type { Metadata } from "next";
import Link from "next/link";
import { Cpu, Brain, Bot, Sparkles, Shield, Activity, CheckCircle2, ArrowRight } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageHero } from "@/components/sections/PageHero";
import { RevealWrapper } from "@/components/ui/RevealWrapper";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { CTABanner } from "@/components/home/CTABanner";

export const metadata: Metadata = {
  title: "AI Solutions",
  description:
    "Enterprise AI solutions by Comptech Enterprises. NVIDIA GPU compute nodes, AI Enablement Workshops, and custom no-code AI builder deployment.",
};

const AI_OFFERINGS = [
  {
    icon: Cpu,
    title: "NVIDIA GPU Infrastructure",
    badge: "Hardware & Cloud",
    desc: "We supply and configure high-performance NVIDIA GPU infrastructure (H100, A100, L40S, and RTX 6000 Ada) tailored for deep learning, LLM training, and high-density inference workloads.",
    points: [
      "OEM-certified server integration (Dell, HP, Lenovo)",
      "High-speed InfiniBand & networking setup",
      "CUDA, PyTorch, and TensorFlow optimization",
      "On-premise or hybrid GPU cloud deployment"
    ]
  },
  {
    icon: Brain,
    title: "AI Enablement Workshops",
    badge: "Consulting & Training",
    desc: "Empower your workforce with custom training programs. We conduct hands-on developer and leadership workshops covering Generative AI, Retrieval-Augmented Generation (RAG), and agentic workflows.",
    points: [
      "Leadership strategy & ROI workshops",
      "Developer training for LLM APIs & frameworks",
      "Best practices for secure enterprise data integration",
      "Post-workshop roadmap & deployment support"
    ]
  },
  {
    icon: Bot,
    title: "No-Code AI Builder Platform",
    badge: "Software Deployment",
    desc: "Deploy a private, secure, no-code AI application builder inside your enterprise network. Let business users create chatbots, extract document data, and automate workflows with zero coding.",
    points: [
      "Self-hosted LLMs for 100% data privacy",
      "Drag-and-drop workspace for custom prompt engineering",
      "Pre-built connectors for databases, PDFs, and Sharepoint",
      "Enterprise access controls & audit logs"
    ]
  }
];

const AI_CAPABILITIES = [
  {
    title: "Data Privacy First",
    desc: "All AI workloads and LLMs are deployed within your secure enterprise perimeter. No data leaves your network to train public models.",
    icon: Shield
  },
  {
    title: "OEM-Grade Performance",
    desc: "Fully optimized hardware builds backed by our certified Dell Titanium and HP Gold server engineering expertise.",
    icon: Activity
  },
  {
    title: "Rapid Implementation",
    desc: "Get proof-of-concept AI applications up and running in weeks, not months, utilizing pre-validated blueprints.",
    icon: Sparkles
  }
];

export default function AISolutionsPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHero
          badge="AI Division"
          title={
            <>
              Enterprise AI Solutions, <span className="text-gradient-purple font-extrabold">Accelerated</span>
            </>
          }
          subtitle="Empowering Indian enterprises to adopt machine learning and Generative AI securely. From high-density GPU servers to private no-code AI platforms."
          breadcrumbs={[{ label: "Home", href: "/" }, { label: "AI Solutions" }]}
          dark
          actions={
            <>
              <Link href="/contact#quote" className="btn-accent btn btn-lg">Request AI Quote</Link>
              <a href="#offerings" className="btn-outline-white btn btn-lg">Explore Solutions</a>
            </>
          }
        />

        {/* ── Overview Section ── */}
        <section id="overview" className="py-24 bg-white" aria-labelledby="overview-title">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <RevealWrapper>
                <SectionLabel>Why Comptech AI</SectionLabel>
                <h2 id="overview-title" className="font-display font-extrabold text-display-md text-gray-900 mb-6 text-balance">
                  Bridge the Gap Between GPU Silicon and Enterprise ROI
                </h2>
                <p className="text-gray-500 text-lg leading-relaxed mb-6">
                  While GPU hardware is hard to source and AI models are complex, Comptech provides a complete turn-key solution. We configure the silicon, train your team, and deploy self-hosted software platforms so you can generate immediate business value safely.
                </p>
                <p className="text-gray-500 leading-relaxed mb-8">
                  By partnering with NVIDIA, Dell, and leading LLM providers, we ensure that your infrastructure is highly available, optimized for throughput, and compliant with enterprise security standards.
                </p>
                <div className="flex gap-4">
                  <div className="flex items-center gap-3">
                    <span className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
                    <span className="text-sm font-semibold text-gray-700">NVIDIA Preferred GPU Partner</span>
                  </div>
                </div>
              </RevealWrapper>

              <RevealWrapper delay={150}>
                <div className="grid grid-cols-1 gap-6">
                  {AI_CAPABILITIES.map((cap, i) => {
                    const Icon = cap.icon;
                    return (
                      <div key={cap.title} className="flex gap-5 p-6 rounded-2xl bg-gray-50 border border-gray-100 hover:border-blue-200 transition-colors duration-300">
                        <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center flex-shrink-0">
                          <Icon className="text-blue-700 w-6 h-6" />
                        </div>
                        <div>
                          <h3 className="font-display font-bold text-gray-900 mb-1">{cap.title}</h3>
                          <p className="text-sm text-gray-500 leading-relaxed">{cap.desc}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </RevealWrapper>
            </div>
          </div>
        </section>

        {/* ── Offerings Section ── */}
        <section id="offerings" className="py-24 bg-gray-50 border-t border-b border-gray-100" aria-labelledby="offerings-title">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <RevealWrapper className="text-center mb-16">
              <SectionLabel className="justify-center">Core AI Deliverables</SectionLabel>
              <h2 id="offerings-title" className="font-display font-extrabold text-display-md text-gray-900">
                End-to-End AI Enablement
              </h2>
              <p className="mt-4 text-lg text-gray-500 max-w-xl mx-auto">
                We handle the hardware provisioning, software deployment, and team training to ensure your AI success.
              </p>
            </RevealWrapper>

            <div className="flex flex-col gap-16">
              {AI_OFFERINGS.map((off, idx) => {
                const Icon = off.icon;
                const isEven = idx % 2 === 0;
                return (
                  <RevealWrapper key={off.title} delay={idx * 100}>
                    <div className="bg-white border border-gray-200 rounded-3xl p-8 lg:p-12 grid lg:grid-cols-2 gap-10 items-center card-lift">
                      <div className={isEven ? "lg:order-1" : "lg:order-2"}>
                        <span className="inline-block text-xs font-bold text-blue-700 bg-blue-50 border border-blue-100 px-3.5 py-1.5 rounded-full mb-5 uppercase tracking-widest">
                          {off.badge}
                        </span>
                        <h3 className="font-display font-extrabold text-2xl lg:text-3xl text-gray-900 mb-4">{off.title}</h3>
                        <p className="text-gray-500 leading-relaxed mb-6">{off.desc}</p>
                        <Link href="/contact#quote" className="btn-accent btn btn-sm inline-flex">
                          Inquire about {off.title.split(" ")[0]} <ArrowRight size={16} className="btn-arrow" />
                        </Link>
                      </div>

                      <div className={`bg-gray-50 rounded-2xl p-6 lg:p-8 ${isEven ? "lg:order-2" : "lg:order-1"}`}>
                        <div className="w-12 h-12 rounded-xl bg-blue-700 text-white flex items-center justify-center mb-6">
                          <Icon size={24} />
                        </div>
                        <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-4">What's Included</p>
                        <ul className="flex flex-col gap-3">
                          {off.points.map((p) => (
                            <li key={p} className="flex items-start gap-3 text-sm text-gray-600">
                              <CheckCircle2 size={18} className="text-blue-700 flex-shrink-0 mt-0.5" />
                              <span>{p}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </RevealWrapper>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── Partner Strip ── */}
        <section className="py-20 bg-gray-900 relative overflow-hidden" aria-labelledby="partner-title">
          <div className="absolute inset-0 bg-grid-lines opacity-10" />
          <div className="max-w-5xl mx-auto px-6 lg:px-8 relative z-10 text-center">
            <RevealWrapper>
              <h2 id="partner-title" className="font-display font-extrabold text-2xl lg:text-3xl text-white mb-4">
                Powered by NVIDIA
              </h2>
              <p className="text-gray-400 max-w-xl mx-auto mb-8 text-sm leading-relaxed">
                As a Preferred Partner in the NVIDIA Partner Network, we design GPU configurations using NVIDIA HGX, DGX, and RTX reference architectures, validated on Dell PowerEdge &amp; HPE ProLiant nodes.
              </p>
              <div className="inline-flex items-center gap-6 justify-center flex-wrap">
                <span className="text-white font-display font-black text-2xl tracking-tight">NVIDIA<span className="text-green-500 font-sans">®</span> Partner</span>
                <span className="w-px h-6 bg-white/20" />
                <span className="text-gray-300 font-semibold text-sm">Preferred GPU Computing Partner</span>
              </div>
            </RevealWrapper>
          </div>
        </section>

        <CTABanner />
      </main>
      <Footer />
    </>
  );
}
