import type { Metadata } from "next";
import Link from "next/link";
import { Wrench, ShieldCheck, HeartHandshake, Zap, Clock, Check, ArrowRight } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageHero } from "@/components/sections/PageHero";
import { RevealWrapper } from "@/components/ui/RevealWrapper";
import { SectionLabel } from "@/components/ui/SectionLabel";

export const metadata: Metadata = {
  title: "Annual Maintenance Contracts (AMC) for Enterprise IT",
  description:
    "Proactive, SLA-backed Annual Maintenance Contracts (AMC) for enterprise servers, networks, storage arrays, and end-user computing fleets.",
};

const AMC_BENEFITS = [
  {
    icon: Clock,
    title: "SLA-Backed Response",
    desc: "Guaranteed on-site engineer dispatch times (2-hour, 4-hour, or next business day options) to keep your operational downtime to a absolute minimum.",
  },
  {
    icon: Wrench,
    title: "Preventive Health Audits",
    desc: "Routine on-site visits to inspect equipment thermals, clean server intakes, review firmware levels, and replace components showing signs of wear.",
  },
  {
    icon: ShieldCheck,
    title: "Genuine Parts Support",
    desc: "We source and install certified, genuine OEM parts (Dell, HP, Lenovo, Cisco) backed by direct channel distribution pathways.",
  },
  {
    icon: HeartHandshake,
    title: "Dedicated Support Engineers",
    desc: "Get assigned certified primary and secondary engineers who understand your exact network layout and physical configuration details.",
  },
];

const PLANS = [
  {
    tier: "Basic",
    desc: "Essential coverage for small office servers",
    price: "Custom Pricing",
    features: [
      "Business hours support (9am–6pm)",
      "Next business day response SLA",
      "Quarterly preventive site visits",
      "Remote diagnostics via phone/email",
      "OEM hardware warranty pass-through",
    ],
    highlighted: false,
    cta: "Request Basic Quote",
  },
  {
    tier: "Standard",
    desc: "Full-coverage for mid-size data centres",
    price: "Custom Pricing",
    features: [
      "Extended support hours (8am–8pm)",
      "Guaranteed 4-hour on-site response",
      "Monthly preventive site visits",
      "24/7 remote sensor monitoring",
      "Critical spare parts buffer stored on-site",
      "Quarterly health & SLA compliance reports",
    ],
    highlighted: true,
    badge: "Most Popular",
    cta: "Get Standard Quote",
  },
  {
    tier: "Enterprise",
    desc: "Mission-critical 24/7/365 coverage",
    price: "Custom Pricing",
    features: [
      "24/7/365 dedicated engineer support",
      "Guaranteed 2-hour on-site response",
      "Weekly preventive inspections",
      "Dedicated primary engineer assigned",
      "Full hardware parts replacement included",
      "Real-time sensor monitoring dashboard",
    ],
    highlighted: false,
    cta: "Get Enterprise Quote",
  },
];

export default function AMCPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHero
          badge="Services / AMC"
          title={
            <>
              SLA-Backed IT Maintenance &amp; <span className="text-gradient-blue font-extrabold">AMC Solutions</span>
            </>
          }
          subtitle="Proactive, not reactive. Comprehensive Annual Maintenance Contracts (AMC) for servers, storage, enterprise networks, and client fleets."
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Services", href: "/services" },
            { label: "AMC Plans" },
          ]}
          actions={
            <>
              <Link href="/contact#quote" className="btn-accent btn btn-lg">Get Custom Quote</Link>
              <a href="#plans" className="btn-outline-white btn btn-lg">Browse Plans</a>
            </>
          }
        />

        {/* ── Overview Section ── */}
        <section className="py-24 bg-white" aria-labelledby="overview-title">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <RevealWrapper>
                <SectionLabel>Maintenance Philosophy</SectionLabel>
                <h2 id="overview-title" className="font-display font-extrabold text-display-md text-gray-900 mb-6 text-balance">
                  Preventing Failures Before They Cost You Uptime
                </h2>
                <p className="text-gray-500 text-lg leading-relaxed mb-6">
                  Waiting for server drives to fail or switches to overheat before acting is a costly strategy. Comptech's AMC plans focus heavily on proactive, preventative care: monitoring temperatures, reviewing logs, and scheduling maintenance outside peak hours.
                </p>
                <p className="text-gray-500 leading-relaxed mb-8">
                  With 15+ years of maintenance experience, we support legacy hardware configurations that have gone end-of-life (EOL) with the manufacturer, keeping your capital assets running smoothly.
                </p>
                <div className="flex gap-4">
                  <div className="flex items-center gap-2">
                    <Zap className="text-blue-700 w-5 h-5" />
                    <span className="text-sm font-semibold text-gray-700">200+ Active SLA Contracts</span>
                  </div>
                </div>
              </RevealWrapper>

              <RevealWrapper delay={150}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {AMC_BENEFITS.map((b) => {
                    const Icon = b.icon;
                    return (
                      <div key={b.title} className="p-6 bg-gray-50 border border-gray-100 rounded-2xl">
                        <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center mb-4">
                          <Icon size={20} className="text-blue-700" />
                        </div>
                        <h3 className="font-display font-bold text-sm text-gray-900 mb-2">{b.title}</h3>
                        <p className="text-xs text-gray-400 leading-relaxed">{b.desc}</p>
                      </div>
                    );
                  })}
                </div>
              </RevealWrapper>
            </div>
          </div>
        </section>

        {/* ── Plans Section ── */}
        <section id="plans" className="py-24 bg-gray-50 border-t border-b border-gray-100" aria-labelledby="plans-title">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <RevealWrapper className="text-center mb-16">
              <SectionLabel className="justify-center">Pricing Tiers</SectionLabel>
              <h2 id="plans-title" className="font-display font-extrabold text-display-md text-gray-900">
                SLA Maintenance Plans
              </h2>
              <p className="mt-4 text-lg text-gray-500 max-w-xl mx-auto">
                Select a plan level that matches the business critical nature of your hardware stack.
              </p>
            </RevealWrapper>

            <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto items-stretch">
              {PLANS.map((plan, i) => (
                <RevealWrapper key={plan.tier} delay={i * 100}>
                  <div className={`rounded-3xl p-8 h-full flex flex-col relative ${
                    plan.highlighted
                      ? "bg-blue-700 text-white shadow-blue"
                      : "bg-white border border-gray-200"
                  }`}>
                    {plan.badge && (
                      <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-red-500 text-white text-[10px] font-bold px-3.5 py-1 rounded-full uppercase tracking-wider">
                        {plan.badge}
                      </span>
                    )}
                    <h3 className={`font-display font-extrabold text-xl mb-1 ${plan.highlighted ? "text-white" : "text-gray-900"}`}>
                      {plan.tier}
                    </h3>
                    <p className={`text-xs mb-4 ${plan.highlighted ? "text-blue-200" : "text-gray-400"}`}>{plan.desc}</p>
                    <div className="mb-6">
                      <span className={`font-display font-black text-2xl ${plan.highlighted ? "text-white" : "text-gray-900"}`}>
                        {plan.price}
                      </span>
                    </div>
                    <ul className="flex flex-col gap-3 mb-8 flex-1">
                      {plan.features.map((f) => (
                        <li key={f} className="flex items-start gap-2.5 text-sm">
                          <Check size={16} className={`flex-shrink-0 mt-0.5 ${plan.highlighted ? "text-blue-200" : "text-blue-700"}`} />
                          <span className={plan.highlighted ? "text-blue-100" : "text-gray-600"}>{f}</span>
                        </li>
                      ))}
                    </ul>
                    <Link
                      href="/contact#quote"
                      className={`btn btn-lg w-full justify-center text-sm ${
                        plan.highlighted
                          ? "bg-white text-blue-700 hover:bg-blue-50"
                          : "btn-outline"
                      }`}
                    >
                      {plan.cta}
                    </Link>
                  </div>
                </RevealWrapper>
              ))}
            </div>
          </div>
        </section>

        
      </main>
      <Footer />
    </>
  );
}
