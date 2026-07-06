import type { Metadata } from "next";
import Link from "next/link";
import { Cpu, Brain, GraduationCap, Shield, Activity, Sparkles, CheckCircle2, ArrowRight } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageHero } from "@/components/sections/PageHero";
import { RevealWrapper } from "@/components/ui/RevealWrapper";
import { SectionLabel } from "@/components/ui/SectionLabel";

export const metadata: Metadata = {
  title: "AI Solutions",
  description:
    "Enterprise AI solutions by Comptech Enterprises. High-performance GPU hardware, custom AI software, and hands-on AI training programs.",
};

const AI_OFFERINGS = [
  {
    icon: Cpu,
    title: "Hardware Solutions",
    badge: "Hardware & Infrastructure",
    desc: "Comptech specializes in sourcing and configuring AI hardware built for the demands of modern machine learning workloads — from deep learning research to large-scale inference in production.",
    points: [
      "High-performance GPUs ideal for deep learning, data processing, and AI training",
      "Custom-built AI systems configured for specific projects",
      "Scalable AI servers and workstations for businesses",
      "On-premise or hybrid deployment with full OEM support",
    ],
  },
  {
    icon: Brain,
    title: "AI Software Solutions",
    badge: "Software & Integration",
    desc: "We deliver comprehensive AI software offerings that span the full development lifecycle — from building bespoke models to integrating AI capabilities into your existing enterprise systems.",
    points: [
      "Custom-built AI models for various industries and use cases",
      "Machine learning and deep learning tools for decision-making automation",
      "AI integration services for existing systems",
      "Tailored software meeting unique business needs",
    ],
  },
  {
    icon: GraduationCap,
    title: "AI Teaching & Training",
    badge: "Education & Enablement",
    desc: "We design and deliver training programs that build lasting AI capability inside your organisation — from executive strategy sessions to developer deep-dives and hands-on workshops.",
    points: [
      "Hands-on workshops and seminars for educational institutions and professionals",
      "Custom AI Training Programs tailored to your industry and business requirements",
      "One-on-one mentorship from industry experts",
      "Corporate training empowering teams to leverage AI effectively",
    ],
  },
];

const AI_CAPABILITIES = [
  {
    title: "Data Privacy First",
    desc: "All AI workloads and models are deployed within your secure enterprise perimeter. No data leaves your network.",
    icon: Shield,
  },
  {
    title: "OEM-Grade Performance",
    desc: "Fully optimized hardware builds backed by certified Dell Titanium and HP Gold server engineering expertise.",
    icon: Activity,
  },
  {
    title: "Rapid Implementation",
    desc: "Get proof-of-concept AI applications up and running in weeks, not months, using pre-validated blueprints.",
    icon: Sparkles,
  },
];

export default function AISolutionsPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHero
          backgroundImage="/images/AI_Banner.webp"
          badge="AI Division"
          title={
            <>
              Our AI Vision: From{" "}
              <span className="text-gradient-purple font-extrabold">
                Hardware to Software
              </span>
            </>
          }
          subtitle="Empowering Indian enterprises to adopt machine learning and Generative AI securely — from high-density GPU servers to custom AI models and hands-on team training."
          breadcrumbs={[{ label: "Home", href: "/" }, { label: "AI Solutions" }]}
          dark
          actions={
            <>
              <Link href="/contact#quote" className="btn-accent btn btn-lg">
                Request AI Quote
              </Link>
              <a href="#offerings" className="btn-outline-white btn btn-lg">
                Explore Solutions
              </a>
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
                  End-to-End AI Enablement for Indian Enterprises
                </h2>
                <p className="text-gray-500 text-lg leading-relaxed mb-6">
                  Comptech delivers a complete AI stack — sourcing and configuring the right GPU hardware, building and integrating custom AI software, and training your teams to use it all effectively. One partner for the full journey.
                </p>
                <p className="text-gray-500 leading-relaxed mb-8">
                  By partnering with NVIDIA, Dell, and leading AI software providers, we ensure your infrastructure is highly available, your models are production-ready, and your people have the skills to drive ROI from day one.
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
                  {AI_CAPABILITIES.map((cap) => {
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
                What We Offer
              </h2>
              <p className="mt-4 text-lg text-gray-500 max-w-xl mx-auto">
                Hardware, software, and training — we cover every layer so you can focus on building with AI, not figuring it out.
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
                        <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-4">What&apos;s Included</p>
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
                <span className="text-white font-display font-black text-2xl tracking-tight">
                  NVIDIA<span className="text-green-500 font-sans">®</span> Partner
                </span>
                <span className="w-px h-6 bg-white/20" />
                <span className="text-gray-300 font-semibold text-sm">Preferred GPU Computing Partner</span>
              </div>
            </RevealWrapper>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
