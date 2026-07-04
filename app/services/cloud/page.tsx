import type { Metadata } from "next";
import Link from "next/link";
import { Cloud, Layers, ShieldAlert, TrendingDown, CheckCircle2, ArrowRight } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageHero } from "@/components/sections/PageHero";
import { RevealWrapper } from "@/components/ui/RevealWrapper";
import { SectionLabel } from "@/components/ui/SectionLabel";

export const metadata: Metadata = {
  title: "Managed Cloud & Hybrid Architecture Solutions",
  description:
    "Certified Microsoft Azure, AWS, and GCP cloud migrations, hybrid cloud design, cost optimization, and managed DevOps operations.",
};

const CLOUD_SOLUTIONS = [
  {
    icon: Cloud,
    title: "Cloud Migration & Setup",
    desc: "Seamless lift-and-shift, replatforming, and refactoring migration methodologies to transfer workloads into Microsoft Azure, AWS, or GCP.",
  },
  {
    icon: Layers,
    title: "Hybrid Cloud Architecture",
    desc: "Seamlessly connect on-premises data centres to public clouds using secure VPNs, Azure ExpressRoute, or AWS Direct Connect paths.",
  },
  {
    icon: TrendingDown,
    title: "FinOps & Cost Optimization",
    desc: "Continuous audit of cloud resources, right-sizing idle VMs, purchasing reserved instances, and reducing redundant software licensing.",
  },
  {
    icon: ShieldAlert,
    title: "Security & Disaster Recovery",
    desc: "Multi-cloud backups, immutable cloud storage, centralized identity validation, and compliance auditing (HIPAA, ISO, SOC2).",
  },
];

export default function CloudSolutionsPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHero
          badge="Services / Cloud"
          title={
            <>
              Managed Multi-Cloud &amp; <span className="text-gradient-blue font-extrabold">Hybrid Cloud Solutions</span>
            </>
          }
          subtitle="Certified Azure, AWS, and Google Cloud architects helping enterprise organizations migrate workloads securely, optimize cloud spend, and manage operations."
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Services", href: "/services" },
            { label: "Cloud Solutions" },
          ]}
          actions={
            <>
              <Link href="/contact#quote" className="btn-accent btn btn-lg">Request Cloud Audit</Link>
              <a href="#solutions" className="btn-outline-white btn btn-lg">Explore Platforms</a>
            </>
          }
        />

        {/* ── Overview Section ── */}
        <section className="py-24 bg-white" aria-labelledby="overview-title">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <RevealWrapper>
                <SectionLabel>Cloud Strategy</SectionLabel>
                <h2 id="overview-title" className="font-display font-extrabold text-display-md text-gray-900 mb-6 text-balance">
                  Maximize Value, Minimize Migration Risk
                </h2>
                <p className="text-gray-500 text-lg leading-relaxed mb-6">
                  Transitioning to the cloud should lower your operational stress, not raise your monthly bills. Comptech's certified cloud engineers build secure, cost-optimized, and resilient environments that comply with strict regulatory frameworks.
                </p>
                <p className="text-gray-500 leading-relaxed mb-8">
                  We specialize in hybrid configurations—letting you keep sensitive patient records or financial transactions on secure, physical local servers, while utilizing public cloud scalability for web applications and analytics.
                </p>
                <div className="flex flex-col gap-3">
                  {["Certified Azure, AWS, and GCP solutions architects", "DevOps orchestration & infrastructure as code (Terraform)", "Active monitoring, scaling, and cost-containment audits"].map((p) => (
                    <div key={p} className="flex items-center gap-3 text-sm font-medium text-gray-700">
                      <CheckCircle2 size={18} className="text-blue-700 flex-shrink-0" />
                      {p}
                    </div>
                  ))}
                </div>
              </RevealWrapper>

              <RevealWrapper delay={150}>
                <div className="bg-gray-50 border border-gray-200 rounded-3xl p-8 lg:p-10">
                  <h3 className="font-display font-extrabold text-lg text-gray-900 mb-6">Supported Cloud Ecosystems</h3>
                  <div className="flex flex-col gap-5">
                    {[
                      { name: "Microsoft Azure", color: "#00A4EF", tier: "Gold Cloud Partner", desc: "Enterprise Windows Server migrations, Active Directory federation, and M365." },
                      { name: "Amazon Web Services", color: "#FF9900", tier: "Consulting Partner", desc: "High-density Linux clusters, serverless computing, and S3 retention." },
                      { name: "Google Cloud Platform", color: "#4285F4", tier: "Integration Specialist", desc: "Kubernetes engine clusters, big data, analytics, and machine learning models." },
                    ].map((c) => (
                      <div key={c.name} className="p-4 bg-white border border-gray-100 rounded-2xl flex gap-4 items-start">
                        <span className="w-2.5 h-2.5 rounded-full mt-1.5 flex-shrink-0" style={{ background: c.color }} />
                        <div>
                          <div className="flex justify-between items-center mb-1">
                            <h4 className="font-bold text-sm text-gray-900">{c.name}</h4>
                            <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{c.tier}</span>
                          </div>
                          <p className="text-xs text-gray-500 leading-relaxed">{c.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </RevealWrapper>
            </div>
          </div>
        </section>

        {/* ── Solutions Section ── */}
        <section id="solutions" className="py-24 bg-gray-50 border-t border-b border-gray-100" aria-labelledby="solutions-title">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <RevealWrapper className="text-center mb-16">
              <SectionLabel className="justify-center">Core Pillars</SectionLabel>
              <h2 id="solutions-title" className="font-display font-extrabold text-display-md text-gray-900">
                Managed Cloud Pillars
              </h2>
              <p className="mt-4 text-lg text-gray-500 max-w-xl mx-auto">
                Comprehensive cloud design and governance structures to secure and speed up your digital transformation.
              </p>
            </RevealWrapper>

            <div className="grid md:grid-cols-2 gap-8">
              {CLOUD_SOLUTIONS.map((cloud, idx) => {
                const Icon = cloud.icon;
                return (
                  <RevealWrapper key={cloud.title} delay={idx * 100}>
                    <div className="bg-white border border-gray-200 rounded-3xl p-8 h-full flex flex-col hover:shadow-lg transition-all duration-300 card-lift">
                      <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center mb-6">
                        <Icon size={24} className="text-blue-700" />
                      </div>
                      <h3 className="font-display font-bold text-lg text-gray-900 mb-3">{cloud.title}</h3>
                      <p className="text-sm text-gray-500 leading-relaxed mb-6 flex-1">{cloud.desc}</p>
                      <Link href="/contact#quote" className="btn-outline btn btn-sm self-start">
                        Design Cloud
                      </Link>
                    </div>
                  </RevealWrapper>
                );
              })}
            </div>
          </div>
        </section>

        
      </main>
      <Footer />
    </>
  );
}
