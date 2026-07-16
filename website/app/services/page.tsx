import Link from "next/link";
import {
  Server, Monitor, Database, Network, ShieldCheck, Cloud, Wrench, Cpu,
  Check, ArrowRight, CheckCircle2, Laptop, Camera, HardDrive,
} from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageHero } from "@/components/sections/PageHero";
import { RevealWrapper } from "@/components/ui/RevealWrapper";
import { SectionLabel } from "@/components/ui/SectionLabel";

const NAV_ITEMS = [
  { label: "Infrastructure",    href: "#infrastructure" },
  { label: "End User Computing",href: "#euc" },
  { label: "Data Centre",       href: "#datacenter" },
  { label: "Networking",        href: "#networking" },
  { label: "CCTV & Security",   href: "#security" },
  { label: "Cloud",             href: "#cloud" },
  { label: "AMC",               href: "#amc" },
  { label: "Repair",            href: "#repair" },
  { label: "AI",                href: "#ai" },
];

const OEM_PARTNERS = [
  { name: "Dell",   color: "#007DB8", role: "Titanium Server Partner",   pct: 95 },
  { name: "HP",     color: "#0096D6", role: "Gold Business Partner",      pct: 88 },
  { name: "Lenovo", color: "#E1251B", role: "Silver Reseller",            pct: 75 },
  { name: "NVIDIA", color: "#76B900", role: "Preferred GPU Partner",      pct: 82 },
];

const EUC_CATEGORIES = [
  { label: "Desktops",    Icon: Monitor },
  { label: "Laptops",     Icon: Monitor },
  { label: "Workstations",Icon: Server },
  { label: "Thin Clients",Icon: Monitor },
  { label: "Monitors",    Icon: Monitor },
  { label: "Peripherals", Icon: Wrench },
];

const DC_CARDS = [
  { title: "Rack & Power",         desc: "APC, Vertiv, and Schneider UPS and PDU systems. Proper rack provisioning and cable management for maximum density and airflow." },
  { title: "Structured Cabling",   desc: "Cat6A/fiber backbone cabling, patch panels, and cable management designed to TIA-568 and IS0 11801 standards." },
  { title: "Cooling & Airflow",    desc: "Precision cooling, in-row cooling units, and hot/cold aisle containment to optimize PUE and prevent thermal events." },
];

const SECURITY_CARDS = [
  { title: "IP CCTV Surveillance", desc: "4K IP cameras, NVR/DVR systems, and centralized VMS for enterprise-grade surveillance across campuses and facilities." },
  { title: "Access Control",        desc: "Card reader, biometric, and multi-factor physical access systems integrated with HR and directory services." },
  { title: "AI Video Analytics",    desc: "AI-powered motion detection, crowd analytics, license plate recognition, and real-time security alerts." },
];

const CLOUD_PLATFORMS = [
  { name: "Microsoft Azure", color: "#00A4EF", features: ["Azure Virtual Machines", "Azure Kubernetes Service", "Azure DevOps", "Microsoft 365 Integration"] },
  { name: "Amazon AWS",      color: "#FF9900", features: ["EC2 & ECS Workloads", "RDS & Aurora", "CloudFront CDN", "IAM & Security Hub"] },
  { name: "Google Cloud",    color: "#4285F4", features: ["GKE & Compute Engine", "BigQuery Analytics", "Cloud SQL", "Anthos Multi-cloud"] },
];

const AMC_TIERS = [
  {
    tier: "Basic",
    desc: "Essential coverage for small deployments",
    features: ["Business hours support (9am–6pm)", "Remote diagnostics", "Quarterly preventive visits", "24h response SLA", "Hardware parts warranty pass-through"],
    cta: "Contact for Pricing",
    highlighted: false,
  },
  {
    tier: "Standard",
    desc: "Full-coverage for mid-size enterprise",
    features: ["Extended support (8am–8pm)", "24/7 remote monitoring", "Monthly preventive visits", "4h response SLA", "Spare parts on-site", "Quarterly health reports"],
    cta: "Get Standard Quote",
    highlighted: true,
    badge: "Most Popular",
  },
  {
    tier: "Enterprise",
    desc: "Mission-critical 24/7 coverage",
    features: ["24/7 dedicated support", "Proactive AI monitoring", "Weekly preventive visits", "2h response SLA", "Dedicated account engineer", "Real-time dashboard access"],
    cta: "Get Enterprise Quote",
    highlighted: false,
  },
];

const REPAIR_CARDS = [
  { title: "Computers & Laptops",  desc: "Component-level diagnostics and repair for desktops, laptops, and workstations across all major OEM brands.", Icon: Laptop },
  { title: "CCTV Systems",         desc: "Camera, DVR/NVR, and cabling repair to get your surveillance systems back online with minimal downtime.", Icon: Camera },
  { title: "Peripherals",          desc: "Printers, scanners, UPS units, and other peripherals serviced and restored by certified technicians.", Icon: HardDrive },
];

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <PageHero
        badge="Our Services"
        title="Enterprise IT Services, Built for Scale"
        subtitle="From infrastructure to AI — Comptech delivers certified, end-to-end IT solutions for enterprise organizations."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Services" }]}
        actions={
          <>
            <Link href="/contact#quote" className="btn-accent btn btn-lg">Get a Quote</Link>
            <a href="#infrastructure" className="btn-outline-white btn btn-lg">Browse Services</a>
          </>
        }
      />

      {/* Sticky secondary nav */}
      <div
        className="bg-white border-b border-gray-200 z-[100]"
        style={{ position: "sticky", top: "var(--nav-height)" }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex overflow-x-auto scrollbar-hide gap-0">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="flex-shrink-0 px-5 py-4 text-sm font-medium text-gray-600 hover:text-blue-700 border-b-2 border-transparent hover:border-blue-700 transition-all duration-150 whitespace-nowrap"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      <main>
        {/* ── Infrastructure ── */}
        <section id="infrastructure" className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <RevealWrapper>
                <SectionLabel>Enterprise Infrastructure</SectionLabel>
                <h2 className="font-display font-extrabold text-display-md text-gray-900 mb-5">
                  Enterprise Server &amp; Storage
                </h2>
                <p className="text-lg text-gray-500 leading-relaxed mb-8">
                  As a Dell Titanium and HP Gold certified partner, Comptech designs and deploys production-grade server and storage infrastructure for organizations that can't afford downtime.
                </p>
                <ul className="flex flex-col gap-3 mb-8">
                  {["Infrastructure sizing & design", "Genuine OEM procurement", "Physical installation & cabling", "OS & virtualization configuration", "24/7 AMC & monitoring support"].map((f) => (
                    <li key={f} className="flex items-center gap-3 text-sm text-gray-600">
                      <CheckCircle2 size={18} className="text-blue-700 flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
                <div className="flex gap-3 flex-wrap">
                  <Link href="/contact#quote" className="btn-accent btn">Get Quote <ArrowRight size={16} className="btn-arrow" /></Link>
                </div>
              </RevealWrapper>

              <RevealWrapper delay={150}>
                <div className="bg-gray-900 rounded-3xl p-8">
                  <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-6">OEM Partner Strength</p>
                  <div className="flex flex-col gap-5">
                    {OEM_PARTNERS.map((p) => (
                      <div key={p.name}>
                        <div className="flex justify-between items-center mb-2">
                          <div>
                            <span className="font-display font-extrabold text-lg" style={{ color: p.color }}>{p.name}</span>
                            <span className="text-xs text-gray-400 ml-3">{p.role}</span>
                          </div>
                          <span className="text-xs font-semibold text-gray-300">{p.pct}%</span>
                        </div>
                        <div className="progress-bar">
                          <div className="progress-fill" style={{ width: `${p.pct}%`, background: p.color + "99" }} />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </RevealWrapper>
            </div>
          </div>
        </section>

        {/* ── EUC ── */}
        <section id="euc" className="py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <RevealWrapper>
                <div className="grid grid-cols-3 gap-3">
                  {EUC_CATEGORIES.map(({ label, Icon }) => (
                    <div key={label} className="bg-white border border-gray-200 rounded-2xl p-5 text-center card-lift">
                      <Icon size={24} className="text-blue-700 mx-auto mb-3" />
                      <p className="text-sm font-semibold text-gray-700">{label}</p>
                    </div>
                  ))}
                </div>
              </RevealWrapper>

              <RevealWrapper delay={150}>
                <SectionLabel>End User Computing</SectionLabel>
                <h2 className="font-display font-extrabold text-display-md text-gray-900 mb-5">
                  Endpoint Computing for Enterprise
                </h2>
                <p className="text-lg text-gray-500 leading-relaxed mb-8">
                  From 10 seats to 10,000 — Comptech sources, deploys, and manages enterprise endpoints from Dell, HP, and Lenovo with full lifecycle management.
                </p>
                <ul className="flex flex-col gap-4">
                  {["Bulk procurement with competitive OEM pricing", "SCCM / Intune device management setup", "Asset tagging, imaging, and deployment"].map((b) => (
                    <li key={b} className="flex items-start gap-3 text-sm text-gray-600">
                      <Check size={18} className="text-blue-700 flex-shrink-0 mt-0.5" />
                      {b}
                    </li>
                  ))}
                </ul>
                <div className="mt-8">
                  <Link href="/contact#quote" className="btn-primary btn">Get EUC Quote <ArrowRight size={16} className="btn-arrow" /></Link>
                </div>
              </RevealWrapper>
            </div>
          </div>
        </section>

        {/* ── Data Centre ── */}
        <section id="datacenter" className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <RevealWrapper className="text-center mb-14">
              <SectionLabel className="justify-center">Data Centre Solutions</SectionLabel>
              <h2 className="font-display font-extrabold text-display-md text-gray-900">
                Complete Data Centre Buildouts
              </h2>
              <p className="mt-4 text-lg text-gray-500 max-w-xl mx-auto leading-relaxed">
                From greenfield builds to legacy modernization — we design, supply, and commission enterprise data centres.
              </p>
            </RevealWrapper>
            <div className="grid md:grid-cols-3 gap-6">
              {DC_CARDS.map((card, i) => (
                <RevealWrapper key={card.title} delay={i * 100}>
                  <div className="service-card-top card-lift bg-gray-50 border border-gray-200 rounded-3xl p-8 h-full">
                    <Database size={28} className="text-blue-700 mb-5" />
                    <h3 className="font-display font-bold text-lg text-gray-900 mb-3">{card.title}</h3>
                    <p className="text-sm text-gray-500 leading-relaxed">{card.desc}</p>
                  </div>
                </RevealWrapper>
              ))}
            </div>
          </div>
        </section>

        {/* ── Networking ── */}
        <section id="networking" className="py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <RevealWrapper>
                <SectionLabel>Networking</SectionLabel>
                <h2 className="font-display font-extrabold text-display-md text-gray-900 mb-5">
                  Enterprise Networking Infrastructure
                </h2>
                <p className="text-lg text-gray-500 leading-relaxed mb-8">
                  Cisco, Juniper, and Aruba certified network engineers delivering LAN, SD-WAN, Wi-Fi 6E, and campus networking solutions.
                </p>
                <ul className="flex flex-col gap-3 mb-8">
                  {["Enterprise LAN / WAN design & deployment", "Wi-Fi 6E campus rollouts", "SD-WAN for multi-branch connectivity", "Network security & firewall integration", "24/7 NOC monitoring"].map((f) => (
                    <li key={f} className="flex items-center gap-3 text-sm text-gray-600">
                      <CheckCircle2 size={18} className="text-blue-700 flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link href="/contact#quote" className="btn-primary btn">Get Network Quote <ArrowRight size={16} className="btn-arrow" /></Link>
              </RevealWrapper>

              <RevealWrapper delay={150}>
                <div className="bg-white border border-gray-200 rounded-3xl p-8">
                  <h3 className="font-semibold text-gray-900 mb-6">Performance Metrics</h3>
                  <div className="flex flex-col gap-6">
                    {[
                      { label: "Network Throughput",     pct: 95  },
                      { label: "Availability SLA",       pct: 99  },
                      { label: "Security Compliance",    pct: 100 },
                    ].map(({ label, pct }) => (
                      <div key={label}>
                        <div className="flex justify-between text-sm mb-2">
                          <span className="font-medium text-gray-700">{label}</span>
                          <span className="font-bold text-blue-700">{pct}%</span>
                        </div>
                        <div className="progress-bar">
                          <div className="progress-fill" style={{ width: `${pct}%` }} />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </RevealWrapper>
            </div>
          </div>
        </section>

        {/* ── Security ── */}
        <section id="security" className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <RevealWrapper className="text-center mb-14">
              <SectionLabel className="justify-center">CCTV &amp; Security</SectionLabel>
              <h2 className="font-display font-extrabold text-display-md text-gray-900">
                Intelligent Physical Security
              </h2>
              <p className="mt-4 text-lg text-gray-500 max-w-xl mx-auto">
                Enterprise-grade surveillance and access control for campuses, offices, and critical facilities.
              </p>
            </RevealWrapper>
            <div className="grid md:grid-cols-3 gap-6">
              {SECURITY_CARDS.map((card, i) => (
                <RevealWrapper key={card.title} delay={i * 100}>
                  <div className="service-card-top card-lift bg-gray-50 border border-gray-200 rounded-3xl p-8 h-full">
                    <ShieldCheck size={28} className="text-blue-700 mb-5" />
                    <h3 className="font-display font-bold text-lg text-gray-900 mb-3">{card.title}</h3>
                    <p className="text-sm text-gray-500 leading-relaxed">{card.desc}</p>
                  </div>
                </RevealWrapper>
              ))}
            </div>
          </div>
        </section>

        {/* ── Cloud ── */}
        <section id="cloud" className="py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              <RevealWrapper>
                <SectionLabel>Cloud Solutions</SectionLabel>
                <h2 className="font-display font-extrabold text-display-md text-gray-900 mb-5">
                  Multi-Cloud &amp; Hybrid Architecture
                </h2>
                <p className="text-lg text-gray-500 leading-relaxed mb-8">
                  Azure, AWS, and GCP certified architects help enterprises migrate, modernize, and manage cloud workloads with security-first design.
                </p>
                <ul className="flex flex-col gap-3 mb-8">
                  {["Cloud readiness assessment", "Lift-and-shift & re-architecture migrations", "Hybrid cloud connectivity (ExpressRoute / Direct Connect)", "FinOps & cost optimization", "24/7 managed cloud operations"].map((f) => (
                    <li key={f} className="flex items-center gap-3 text-sm text-gray-600">
                      <CheckCircle2 size={18} className="text-blue-700 flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link href="/contact#quote" className="btn-primary btn">Get Cloud Quote <ArrowRight size={16} className="btn-arrow" /></Link>
              </RevealWrapper>

              <RevealWrapper delay={150} className="flex flex-col gap-4">
                {CLOUD_PLATFORMS.map((p) => (
                  <div key={p.name} className="bg-white border border-gray-200 rounded-2xl overflow-hidden">
                    <div className="h-2" style={{ background: p.color }} />
                    <div className="p-5">
                      <h3 className="font-display font-bold text-base text-gray-900 mb-3">{p.name}</h3>
                      <div className="flex flex-wrap gap-2">
                        {p.features.map((f) => (
                          <span key={f} className="text-xs bg-gray-50 border border-gray-200 text-gray-600 px-3 py-1 rounded-full">
                            {f}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </RevealWrapper>
            </div>
          </div>
        </section>

        {/* ── AMC ── */}
        <section id="amc" className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <RevealWrapper className="text-center mb-14">
              <SectionLabel className="justify-center">Annual Maintenance Contract</SectionLabel>
              <h2 className="font-display font-extrabold text-display-md text-gray-900">
                AMC Plans for Every Scale
              </h2>
              <p className="mt-4 text-lg text-gray-500 max-w-xl mx-auto">
                Proactive, not reactive. Our AMC teams resolve issues before they become incidents.
              </p>
            </RevealWrapper>

            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {AMC_TIERS.map((tier, i) => (
                <RevealWrapper key={tier.tier} delay={i * 100}>
                  <div className={`rounded-3xl p-8 h-full flex flex-col relative ${
                    tier.highlighted
                      ? "bg-blue-700 text-white shadow-blue"
                      : "bg-gray-50 border border-gray-200"
                  }`}>
                    {tier.badge && (
                      <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-red-500 text-white text-xs font-bold px-4 py-1 rounded-full">
                        {tier.badge}
                      </span>
                    )}
                    <h3 className={`font-display font-extrabold text-xl mb-1 ${tier.highlighted ? "text-white" : "text-gray-900"}`}>
                      {tier.tier}
                    </h3>
                    <p className={`text-sm mb-6 ${tier.highlighted ? "text-blue-200" : "text-gray-500"}`}>{tier.desc}</p>
                    <ul className="flex flex-col gap-3 mb-8 flex-1">
                      {tier.features.map((f) => (
                        <li key={f} className="flex items-start gap-2.5 text-sm">
                          <Check size={16} className={`flex-shrink-0 mt-0.5 ${tier.highlighted ? "text-blue-200" : "text-blue-700"}`} />
                          <span className={tier.highlighted ? "text-blue-100" : "text-gray-600"}>{f}</span>
                        </li>
                      ))}
                    </ul>
                    <Link
                      href="/contact#quote"
                      className={`btn btn-lg w-full justify-center text-sm ${
                        tier.highlighted
                          ? "bg-white text-blue-700 hover:bg-blue-50"
                          : "btn-outline"
                      }`}
                    >
                      {tier.cta}
                    </Link>
                  </div>
                </RevealWrapper>
              ))}
            </div>
          </div>
        </section>

        {/* ── Repair Services ── */}
        <section id="repair" className="py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <RevealWrapper className="text-center mb-14">
              <SectionLabel className="justify-center">Repair Services</SectionLabel>
              <h2 className="font-display font-extrabold text-display-md text-gray-900">
                Fast, Reliable Hardware Repair
              </h2>
              <p className="mt-4 text-lg text-gray-500 max-w-xl mx-auto leading-relaxed">
                We specialize in repairing computers, laptops, CCTV systems, and peripherals — so you can focus on what matters most: your business.
              </p>
            </RevealWrapper>
            <div className="grid md:grid-cols-3 gap-6">
              {REPAIR_CARDS.map((card, i) => (
                <RevealWrapper key={card.title} delay={i * 100}>
                  <div className="service-card-top card-lift bg-white border border-gray-200 rounded-3xl p-8 h-full">
                    <card.Icon size={28} className="text-blue-700 mb-5" />
                    <h3 className="font-display font-bold text-lg text-gray-900 mb-3">{card.title}</h3>
                    <p className="text-sm text-gray-500 leading-relaxed">{card.desc}</p>
                  </div>
                </RevealWrapper>
              ))}
            </div>
            <RevealWrapper delay={300} className="text-center mt-10">
              <Link href="/contact#quote" className="btn-primary btn btn-lg inline-flex">
                Get Repair Quote <ArrowRight size={16} className="btn-arrow" />
              </Link>
            </RevealWrapper>
          </div>
        </section>

        {/* ── AI Highlight ── */}
        <section
          id="ai"
          className="py-20 relative overflow-hidden"
          style={{ background: "linear-gradient(135deg, #0D0A2E 0%, #0A1E5E 40%, #001B7A 70%, #0D0A2E 100%)" }}
        >
          <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 text-center">
            <RevealWrapper>
              <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 text-xs font-semibold text-white/80 uppercase tracking-widest mb-6">
                AI Solutions
              </div>
              <h2 className="font-display font-extrabold text-display-md text-white mb-5 text-balance max-w-2xl mx-auto">
                Enterprise AI, <span className="text-gradient-purple">Made Accessible</span>
              </h2>
              <p className="text-lg text-white/60 max-w-xl mx-auto mb-8 leading-relaxed">
                GPU infrastructure, AI workshops, and no-code AI builder — Comptech's AI division helps enterprises adopt AI without complexity.
              </p>
              <Link href="/ai-solutions" className="btn-outline-white btn btn-lg inline-flex">
                Explore AI Solutions <ArrowRight size={18} className="btn-arrow" />
              </Link>
            </RevealWrapper>
          </div>
        </section>

        
      </main>

      <Footer />
    </>
  );
}
