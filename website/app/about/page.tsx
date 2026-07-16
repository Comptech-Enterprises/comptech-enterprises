import type { Metadata } from "next";
import Link from "next/link";
import { Target, Eye, Heart, Linkedin, CheckCircle2 } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageHero } from "@/components/sections/PageHero";
import { RevealWrapper } from "@/components/ui/RevealWrapper";
import { SectionLabel } from "@/components/ui/SectionLabel";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Comptech Enterprises — India's trusted enterprise IT partner since 1996. 50+ certified engineers, 200+ clients, Dell Titanium & HP Gold Partner.",
};

const TIMELINE = [
  { year: "1996", title: "Founded in Mumbai", desc: "Started with 3 engineers and our first Dell PowerEdge server deployment for a Mumbai SME." },
  { year: "2000", title: "HP Gold Partnership", desc: "Achieved HP Gold Business Partner status, expanding our ProLiant server and storage portfolio." },
  { year: "2005", title: "50 Enterprise Clients", desc: "Crossed the 50-client milestone with deployments spanning healthcare, education, and government." },
  { year: "2010", title: "Networking & Security", desc: "Launched dedicated Networking and CCTV divisions, adding Cisco, Aruba, and CP Plus to our portfolio." },
  { year: "2015", title: "Lenovo Silver Partner", desc: "Achieved Lenovo Silver Reseller status and expanded our engineering team to 30+ certified professionals." },
  { year: "2020", title: "AI Solutions Division", desc: "Launched our AI Infrastructure and No-Code AI Builder services in partnership with NVIDIA." },
  { year: "2025", title: "Dell Titanium Partner", desc: "Achieved Dell Titanium Partner status — the highest tier — with 200+ enterprise clients across India." },
];

const TEAM = [
  { initials: "AS", name: "Ankit Shah", title: "CEO & Founder", bio: "15+ years in enterprise IT. Ankit founded Comptech with a mission to deliver Fortune 500-grade infrastructure to Indian enterprises of all sizes." },
  { initials: "PM", name: "Priya Mehta", title: "Chief Technology Officer", bio: "Dell-certified Solutions Architect and NVIDIA AI specialist. Priya leads our engineering team and oversees all large-scale deployments." },
  { initials: "RG", name: "Rahul Gupta", title: "VP — Enterprise Sales", bio: "Former Dell enterprise sales lead with deep expertise in government and BFSI sector procurement and compliance requirements." },
  { initials: "DK", name: "Deepa Krishnan", title: "Head of Operations", bio: "Runs our 24/7 AMC and support operations. Deepa's team maintains 99.9%+ SLA compliance across 150+ active maintenance contracts." },
];

const CERTIFICATIONS = [
  { name: "Dell", tier: "Titanium Partner", color: "#007DB8", desc: "Highest-tier Dell partnership for servers, storage, and networking." },
  { name: "HP", tier: "Gold Business Partner", color: "#0096D6", desc: "HP Gold status for ProLiant servers, workstations, and enterprise storage." },
  { name: "Lenovo", tier: "Silver Reseller", color: "#E1251B", desc: "Authorized Lenovo reseller for ThinkSystem and ThinkStation products." },
  { name: "Microsoft", tier: "Gold Partner", color: "#00A4EF", desc: "Microsoft Gold Partner for cloud, productivity, and software licensing." },
  { name: "Intel", tier: "Authorized Distributor", color: "#0071C5", desc: "Intel authorized channel partner for processors and enterprise platforms." },
  { name: "NVIDIA", tier: "Preferred Partner", color: "#76B900", desc: "NVIDIA partner for GPU computing, AI infrastructure, and RTX solutions." },
];

const VALUES = ["Integrity", "Excellence", "Innovation", "Partnership", "Reliability"];

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHero
          badge="About Comptech"
          title="30 Years of Enterprise IT Excellence"
          subtitle="From a 3-person team in 1996 to 50+ certified engineers serving 200+ enterprise clients across India."
          breadcrumbs={[{ label: "Home", href: "/" }, { label: "About" }]}
        />

        {/* ── Story ── */}
        <section className="py-24 lg:py-32 bg-white" aria-labelledby="story-title">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
              <RevealWrapper>
                <SectionLabel>Our Story</SectionLabel>
                <h2 id="story-title" className="font-display font-extrabold text-display-md text-gray-900 mb-6 text-balance">
                  Built on Expertise, Driven by Client Success
                </h2>
                <p className="text-gray-500 text-lg leading-relaxed mb-4">
                  Comptech Enterprises was founded in 1996 by Ankit Shah in Mumbai with a simple belief: enterprise-grade IT infrastructure shouldn't be the exclusive privilege of large corporations. Starting with a team of three, we deployed our first Dell PowerEdge rack for a mid-sized manufacturing firm.
                </p>
                <p className="text-gray-500 leading-relaxed mb-4">
                  Over 30 years, we've grown into a 50+ engineer organization serving healthcare systems, universities, government departments, and Fortune 500 subsidiaries. Our approach has always been the same — certified experts, genuine OEM products, and support that doesn't end at handover.
                </p>
                <p className="text-gray-500 leading-relaxed mb-8">
                  Today, with Dell Titanium, HP Gold, Lenovo Silver, and Microsoft Gold partnerships, we're equipped to design, supply, and maintain infrastructure for the most demanding enterprise environments in India.
                </p>
                <div className="flex flex-col gap-3">
                  {["Dell Titanium Partner — highest certification tier", "HP Gold Business Partner for servers & storage"].map((point) => (
                    <div key={point} className="flex items-center gap-3 text-sm font-medium text-gray-700">
                      <CheckCircle2 size={18} className="text-blue-700 flex-shrink-0" />
                      {point}
                    </div>
                  ))}
                </div>
              </RevealWrapper>

              <RevealWrapper delay={200}>
                <div className="bg-gray-50 border border-gray-200 rounded-3xl p-10">
                  <div className="inline-flex items-center gap-2 bg-blue-700 text-white text-xs font-bold px-4 py-1.5 rounded-full mb-8 uppercase tracking-widest">
                    Est. 1996
                  </div>
                  <div className="flex flex-col gap-5">
                    {[
                      { label: "Years Experience",      value: "30+" },
                      { label: "Projects Delivered",    value: "500+" },
                      { label: "Certified Engineers",   value: "50+" },
                      { label: "OEM Certifications",    value: "10+" },
                    ].map(({ label, value }) => (
                      <div key={label} className="flex items-center justify-between py-4 border-b border-gray-100 last:border-0">
                        <span className="text-gray-500 text-sm font-medium">{label}</span>
                        <span className="font-display font-extrabold text-2xl text-red-500">{value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </RevealWrapper>
            </div>
          </div>
        </section>

        {/* ── Mission / Vision / Values ── */}
        <section className="py-24 lg:py-32 bg-gray-50" aria-labelledby="mvv-title">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <RevealWrapper className="text-center mb-14">
              <SectionLabel className="justify-center">What Drives Us</SectionLabel>
              <h2 id="mvv-title" className="font-display font-extrabold text-display-md text-gray-900">
                Mission, Vision & Values
              </h2>
            </RevealWrapper>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Mission */}
              <RevealWrapper delay={0}>
                <div className="card-lift bg-white border border-gray-200 rounded-3xl p-8 h-full">
                  <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center mb-5">
                    <Target size={22} className="text-blue-700" />
                  </div>
                  <h3 className="font-display font-bold text-lg text-gray-900 mb-3">Our Mission</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    To deliver enterprise IT infrastructure that consistently exceeds client expectations — through certified expertise, genuine OEM products, and support that lasts the lifetime of every deployment.
                  </p>
                </div>
              </RevealWrapper>
              {/* Vision */}
              <RevealWrapper delay={80}>
                <div className="card-lift bg-white border border-gray-200 rounded-3xl p-8 h-full">
                  <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center mb-5">
                    <Eye size={22} className="text-blue-700" />
                  </div>
                  <h3 className="font-display font-bold text-lg text-gray-900 mb-3">Our Vision</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    To be India's most trusted enterprise IT partner — the firm that organizations call first when infrastructure decisions matter most, from a single server to a nationwide rollout.
                  </p>
                </div>
              </RevealWrapper>
              {/* Values */}
              <RevealWrapper delay={160}>
                <div className="card-lift bg-white border border-gray-200 rounded-3xl p-8 h-full">
                  <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center mb-5">
                    <Heart size={22} className="text-blue-700" />
                  </div>
                  <h3 className="font-display font-bold text-lg text-gray-900 mb-4">Our Values</h3>
                  <div className="flex flex-wrap gap-2">
                    {VALUES.map((v) => (
                      <span key={v} className="bg-blue-50 text-blue-700 border border-blue-100 text-xs font-semibold px-3 py-1.5 rounded-full">
                        {v}
                      </span>
                    ))}
                  </div>
                </div>
              </RevealWrapper>
            </div>
          </div>
        </section>

        {/* ── Timeline ── */}
        <section className="py-24 lg:py-32 bg-white" aria-labelledby="timeline-title">
          <div className="max-w-5xl mx-auto px-6 lg:px-8">
            <RevealWrapper className="text-center mb-16">
              <SectionLabel className="justify-center">Our Journey</SectionLabel>
              <h2 id="timeline-title" className="font-display font-extrabold text-display-md text-gray-900">
                30 Years of Growth
              </h2>
            </RevealWrapper>

            <div className="relative">
              {/* Center line — desktop only */}
              <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-gray-200 -translate-x-1/2" />

              <div className="flex flex-col gap-8">
                {TIMELINE.map(({ year, title, desc }, i) => {
                  const isLeft = i % 2 === 0;
                  return (
                    <RevealWrapper key={year} delay={i * 60}>
                      <div className={`relative grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 items-center`}>
                        {/* Content — alternates sides on desktop */}
                        <div className={`${isLeft ? "lg:text-right lg:order-1" : "lg:col-start-2 lg:order-2"}`}>
                          <div className={`bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md hover:border-blue-200 transition-all duration-300`}>
                            <h3 className="font-display font-bold text-base text-gray-900 mb-1">{title}</h3>
                            <p className="text-sm text-gray-500 leading-relaxed">{desc}</p>
                          </div>
                        </div>

                        {/* Year badge — center on desktop */}
                        <div className={`hidden lg:flex absolute left-1/2 -translate-x-1/2 z-10 items-center justify-center`}>
                          <div className="w-14 h-14 rounded-full bg-blue-700 text-white font-display font-bold text-xs flex items-center justify-center text-center leading-tight border-4 border-white shadow-blue">
                            {year}
                          </div>
                        </div>

                        {/* Year badge — mobile */}
                        <div className="flex items-center gap-3 lg:hidden">
                          <div className="w-12 h-12 rounded-full bg-blue-700 text-white font-display font-bold text-xs flex items-center justify-center flex-shrink-0">
                            {year}
                          </div>
                          <div className="h-px flex-1 bg-gray-200" />
                        </div>
                      </div>
                    </RevealWrapper>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* ── Team ── */}
        <section className="py-24 lg:py-32 bg-gray-50" aria-labelledby="team-title">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <RevealWrapper className="text-center mb-14">
              <SectionLabel className="justify-center">Leadership Team</SectionLabel>
              <h2 id="team-title" className="font-display font-extrabold text-display-md text-gray-900">
                The People Behind Comptech
              </h2>
            </RevealWrapper>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {TEAM.map(({ initials, name, title, bio }, i) => (
                <RevealWrapper key={name} delay={i * 80}>
                  <div className="card-lift bg-white border border-gray-200 rounded-3xl p-8 text-center h-full flex flex-col">
                    <div
                      className="w-20 h-20 rounded-full flex items-center justify-center font-display font-extrabold text-2xl text-white mx-auto mb-5 flex-shrink-0"
                      style={{ background: "linear-gradient(135deg, #003DA5 0%, #001A57 100%)" }}
                    >
                      {initials}
                    </div>
                    <h3 className="font-display font-bold text-base text-gray-900 mb-1">{name}</h3>
                    <p className="text-xs font-semibold text-red-500 uppercase tracking-wide mb-3">{title}</p>
                    <p className="text-sm text-gray-500 leading-relaxed flex-1">{bio}</p>
                    <a
                      href="#"
                      className="mt-5 inline-flex items-center justify-center gap-2 text-xs text-gray-400 hover:text-blue-700 transition-colors"
                      aria-label={`${name} on LinkedIn`}
                    >
                      <Linkedin size={14} /> LinkedIn
                    </a>
                  </div>
                </RevealWrapper>
              ))}
            </div>
          </div>
        </section>

        {/* ── Certifications ── */}
        <section className="py-24 lg:py-32 bg-white" aria-labelledby="cert-title">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <RevealWrapper className="text-center mb-14">
              <SectionLabel className="justify-center">OEM Certifications</SectionLabel>
              <h2 id="cert-title" className="font-display font-extrabold text-display-md text-gray-900">
                Certified by the World's Best
              </h2>
              <p className="mt-4 text-gray-500 max-w-xl mx-auto leading-relaxed">
                Our partnerships are earned — not bought. Each certification represents trained engineers, audited processes, and genuine product expertise.
              </p>
            </RevealWrapper>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-5">
              {CERTIFICATIONS.map(({ name, tier, color, desc }, i) => (
                <RevealWrapper key={name} delay={i * 60}>
                  <div className="card-lift border border-gray-200 rounded-2xl p-8 text-center hover:border-gray-300 transition-all duration-300">
                    <div className="font-display font-extrabold text-2xl mb-2" style={{ color }}>
                      {name}
                    </div>
                    <div className="inline-block text-xs font-semibold px-3 py-1 rounded-full mb-4"
                         style={{ background: `${color}18`, color, border: `1px solid ${color}30` }}>
                      {tier}
                    </div>
                    <p className="text-sm text-gray-500 leading-relaxed">{desc}</p>
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
