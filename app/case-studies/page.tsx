import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageHero } from "@/components/sections/PageHero";
import { RevealWrapper } from "@/components/ui/RevealWrapper";
import { SectionLabel } from "@/components/ui/SectionLabel";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Case Studies",
  description: "Real enterprise IT results — hospitals, universities, government, and corporations across India.",
};

const FILTERS = ["All", "Healthcare", "Education", "Government", "Manufacturing", "Finance"];

const CASE_STUDIES = [
  {
    tag: "Healthcare",
    title: "Multi-hospital Server Consolidation",
    client: "3-hospital Group",
    excerpt: "Consolidated 47 physical servers into 6 Dell PowerEdge nodes with VMware virtualization, eliminating hardware sprawl and cutting capex by 60%.",
    metrics: [{ value: "60%", label: "Cost reduction" }, { value: "99.98%", label: "Uptime" }, { value: "3 wks", label: "Migration" }],
    tags: ["Dell PowerEdge", "VMware", "Infrastructure"],
  },
  {
    tag: "Education",
    title: "University Wi-Fi 6E Rollout",
    client: "Mumbai University",
    excerpt: "Deployed campus-wide Wi-Fi 6E across 8 buildings supporting 5,000+ concurrent users with centralized Aruba management.",
    metrics: [{ value: "5,000+", label: "Concurrent users" }, { value: "8 bldgs", label: "Coverage" }, { value: "4 wks", label: "Deployment" }],
    tags: ["Wi-Fi 6E", "Aruba", "Networking"],
  },
  {
    tag: "Government",
    title: "Municipal CCTV Surveillance",
    client: "Municipal Corporation",
    excerpt: "500+ IP cameras with AI video analytics and a central command centre for 24/7 smart city surveillance operations.",
    metrics: [{ value: "500+", label: "IP cameras" }, { value: "24/7", label: "AI monitoring" }, { value: "99.5%", label: "Uptime" }],
    tags: ["IP CCTV", "AI Analytics", "Security"],
  },
  {
    tag: "Manufacturing",
    title: "Factory Cloud Migration",
    client: "Auto Parts Manufacturer",
    excerpt: "Lifted and shifted ERP and manufacturing workloads to Azure, cutting infrastructure costs by 40% and tripling performance.",
    metrics: [{ value: "40%", label: "Cost reduction" }, { value: "3×", label: "Performance gain" }, { value: "6 wks", label: "Migration" }],
    tags: ["Azure", "Cloud Migration", "ERP"],
  },
  {
    tag: "Finance",
    title: "NBFC Core Banking Infrastructure",
    client: "Mid-size NBFC",
    excerpt: "High-availability server cluster across 2 sites with 99.99% uptime SLA for core banking operations, saving ₹2Cr in legacy costs.",
    metrics: [{ value: "99.99%", label: "Uptime" }, { value: "₹2Cr", label: "Cost saved" }, { value: "2 sites", label: "Coverage" }],
    tags: ["HPE ProLiant", "HA Cluster", "Finance"],
  },
  {
    tag: "Education",
    title: "School Device Rollout",
    client: "12-school Network",
    excerpt: "Deployed 3,000 Lenovo ThinkPads and HP EliteDesks across 12 schools in 2 months with zero downtime during term.",
    metrics: [{ value: "3,000", label: "Devices" }, { value: "2 months", label: "Timeline" }, { value: "0", label: "Downtime" }],
    tags: ["EUC", "Lenovo", "HP"],
  },
];

export default function CaseStudiesPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHero
          badge="Case Studies"
          title="Real Results for Real Enterprises"
          subtitle="See how we've solved complex IT challenges for hospitals, universities, government bodies, and corporations across India."
          breadcrumbs={[{ label: "Home", href: "/" }, { label: "Case Studies" }]}
        />

        {/* Filter tabs */}
        <div className="bg-white border-b border-gray-100 py-6">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="flex gap-2 overflow-x-auto scrollbar-hide pb-1">
              {FILTERS.map((f) => (
                <button
                  key={f}
                  className={`shrink-0 px-5 py-2 rounded-full text-sm font-medium transition-colors ${
                    f === "All"
                      ? "bg-blue-700 text-white"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }`}
                >
                  {f}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Featured Case Study */}
        <section className="bg-white py-16">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <RevealWrapper>
              <div
                className="rounded-3xl p-10 lg:p-14 grid lg:grid-cols-2 gap-10 items-center"
                style={{ background: "linear-gradient(135deg, #001A57 0%, #003DA5 100%)" }}
              >
                {/* Left */}
                <div>
                  <span className="inline-block text-xs font-semibold bg-white/15 border border-white/25 text-white px-3 py-1 rounded-full mb-5">
                    Healthcare • Featured
                  </span>
                  <h2 className="font-display font-extrabold text-3xl lg:text-4xl text-white leading-tight mb-4">
                    Multi-hospital Server Consolidation
                  </h2>
                  <p className="text-white/70 text-base leading-relaxed mb-8">
                    Comptech consolidated 47 physical servers into 6 Dell PowerEdge nodes with VMware virtualization for a 3-hospital group — eliminating hardware sprawl, cutting costs by 60%, and achieving 99.98% uptime with zero-downtime migration in 3 weeks.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    {["Dell PowerEdge", "VMware vSphere", "Infrastructure"].map((t) => (
                      <span key={t} className="text-xs bg-white/15 text-white border border-white/20 px-3 py-1 rounded-full font-medium">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Right */}
                <div className="flex flex-col gap-4">
                  <div className="grid grid-cols-3 gap-4">
                    {[
                      { value: "60%", label: "Cost Reduction" },
                      { value: "99.98%", label: "Uptime SLA" },
                      { value: "3 Weeks", label: "Migration Time" },
                    ].map((m) => (
                      <div key={m.label} className="bg-white/10 rounded-2xl p-5 text-center border border-white/15">
                        <div className="font-display font-extrabold text-2xl text-white mb-1">{m.value}</div>
                        <div className="text-xs text-white/60">{m.label}</div>
                      </div>
                    ))}
                  </div>
                  <button className="btn bg-white text-blue-700 hover:bg-blue-50 btn-lg w-full font-semibold rounded-2xl">
                    View Full Case Study
                  </button>
                </div>
              </div>
            </RevealWrapper>
          </div>
        </section>

        {/* Case Studies Grid */}
        <section className="bg-gray-50 py-24" aria-labelledby="grid-title">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <RevealWrapper className="mb-12">
              <SectionLabel>All Case Studies</SectionLabel>
              <h2 id="grid-title" className="font-display font-extrabold text-display-md text-gray-900">
                Project Highlights
              </h2>
            </RevealWrapper>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {CASE_STUDIES.map((cs, i) => (
                <RevealWrapper key={cs.title} delay={i * 80}>
                  <div className="card-lift bg-white border border-gray-200 rounded-3xl overflow-hidden h-full flex flex-col">
                    {/* Header */}
                    <div
                      className="p-6"
                      style={{ background: "linear-gradient(135deg, #001A57 0%, #003DA5 100%)" }}
                    >
                      <span className="inline-block text-xs font-semibold bg-white/15 border border-white/25 text-white px-3 py-1 rounded-full mb-3">
                        {cs.tag}
                      </span>
                      <h3 className="font-display font-bold text-lg text-white leading-snug mb-1">
                        {cs.title}
                      </h3>
                      <p className="text-white/60 text-sm">{cs.client}</p>
                    </div>

                    {/* Body */}
                    <div className="p-6 flex-1 flex flex-col">
                      <p className="text-sm text-gray-500 leading-relaxed mb-5">{cs.excerpt}</p>

                      <div className="grid grid-cols-3 gap-2 mb-5">
                        {cs.metrics.map((m) => (
                          <div key={m.label} className="bg-gray-50 rounded-xl p-3 text-center">
                            <div className="font-display font-extrabold text-lg text-red-500 leading-tight">{m.value}</div>
                            <div className="text-xs text-gray-400 mt-1 leading-tight">{m.label}</div>
                          </div>
                        ))}
                      </div>

                      <div className="flex flex-wrap gap-2 mt-auto">
                        {cs.tags.map((tag) => (
                          <span key={tag} className="text-xs bg-blue-50 text-blue-700 border border-blue-100 px-3 py-1 rounded-full font-medium">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </RevealWrapper>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonial pull-quote */}
        <section className="bg-blue-900 py-20">
          <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
            <RevealWrapper>
              <svg className="w-10 h-10 text-blue-400 mx-auto mb-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              <p className="text-xl lg:text-2xl text-white font-display font-medium leading-relaxed mb-8">
                &ldquo;Comptech transformed our IT infrastructure. Their team deployed our entire server environment in under 3 weeks with zero downtime — exceptional execution and genuine expertise.&rdquo;
              </p>
              <div className="flex items-center justify-center gap-4">
                <div className="w-12 h-12 rounded-full bg-blue-700 flex items-center justify-center font-display font-extrabold text-white">
                  RM
                </div>
                <div className="text-left">
                  <div className="font-semibold text-white">Rajesh Mehta</div>
                  <div className="text-sm text-blue-300">CTO, Apollo Hospitals Group</div>
                </div>
              </div>
            </RevealWrapper>
          </div>
        </section>

        
      </main>
      <Footer />
    </>
  );
}
