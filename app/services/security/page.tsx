import type { Metadata } from "next";
import Link from "next/link";
import { Eye, ShieldCheck, Activity, Users, CheckCircle2, ArrowRight } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageHero } from "@/components/sections/PageHero";
import { RevealWrapper } from "@/components/ui/RevealWrapper";
import { SectionLabel } from "@/components/ui/SectionLabel";

export const metadata: Metadata = {
  title: "CCTV & Physical Security Solutions",
  description:
    "Enterprise IP CCTV surveillance systems, biometric access control, AI-powered video analytics, and central security command centers.",
};

const SEC_OFFERINGS = [
  {
    icon: Eye,
    title: "High-Definition IP CCTV",
    desc: "4K IP cameras, enterprise Network Video Recorders (NVR), and open-platform VMS (Milestone, HikCentral) configured for long-term video retention and high clarity.",
  },
  {
    icon: ShieldCheck,
    title: "Access Control & Biometrics",
    desc: "Multi-factor physical access controls including biometric face/fingerprint readers, RFID card access, turnstiles, and integration with Active Directory.",
  },
  {
    icon: Activity,
    title: "AI Video Analytics",
    desc: "Real-time edge analytics: perimeter intrusion detection, license plate recognition (LPR), crowd control, line-crossing, and heatmapping.",
  },
  {
    icon: Users,
    title: "Central Command Centers",
    desc: "Multi-screen surveillance videowalls, security console furniture, and integration of fire alarm alerts into a unified dashboard.",
  },
];

export default function SecurityPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHero
          badge="Services / Security"
          title={
            <>
              Intelligent CCTV &amp; <span className="text-gradient-blue font-extrabold">Physical Security Systems</span>
            </>
          }
          subtitle="Protect your assets, campuses, and personnel. High-definition IP surveillance, smart access control, and AI analytics backed by enterprise-grade infrastructure."
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Services", href: "/services" },
            { label: "CCTV & Security" },
          ]}
          actions={
            <>
              <Link href="/contact#quote" className="btn-accent btn btn-lg">Request Site Survey</Link>
              <a href="#solutions" className="btn-outline-white btn btn-lg">View Technologies</a>
            </>
          }
        />

        {/* ── Overview Section ── */}
        <section className="py-24 bg-white" aria-labelledby="overview-title">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <RevealWrapper>
                <SectionLabel>Integrated Security</SectionLabel>
                <h2 id="overview-title" className="font-display font-extrabold text-display-md text-gray-900 mb-6 text-balance">
                  Command Center Control, Edge Intelligence
                </h2>
                <p className="text-gray-500 text-lg leading-relaxed mb-6">
                  Physical security is no longer just about recording video—it's about real-time response. Comptech designs modern security networks that utilize AI analytics to detect anomalies, track events, and prevent incidents before they escalate.
                </p>
                <p className="text-gray-500 leading-relaxed mb-8">
                  From commercial office complexes to sprawling factory campuses, we deploy reliable, IP-based surveillance networks built on robust POE switching and high-density storage backends.
                </p>
                <div className="flex flex-col gap-3">
                  {["Unified command center videowall engineering", "GDPR-compliant masking and encryption features", "NDAA-compliant cameras and hardware lines available"].map((p) => (
                    <div key={p} className="flex items-center gap-3 text-sm font-medium text-gray-700">
                      <CheckCircle2 size={18} className="text-blue-700 flex-shrink-0" />
                      {p}
                    </div>
                  ))}
                </div>
              </RevealWrapper>

              <RevealWrapper delay={150}>
                <div className="bg-gray-50 border border-gray-200 rounded-3xl p-8 lg:p-10">
                  <h3 className="font-display font-extrabold text-lg text-gray-900 mb-6">Security System Architecture</h3>
                  <div className="flex flex-col gap-5">
                    {[
                      { step: "01", name: "Camera & Sensor Edge", desc: "4K dome/bullet/PTZ cameras, door sensors, and motion detectors." },
                      { step: "02", name: "Cabling & POE Network", desc: "Outdoor-rated Cat6 wiring, industrial POE switches, and optical fiber backhauls." },
                      { step: "03", name: "VMS & Storage Node", desc: "Hot-swappable enterprise storage, Milestone VMS, and failover recording nodes." },
                      { step: "04", name: "Control Room Display", desc: "Decoders, videowall processors, and desktop client setups for guards." },
                    ].map((s) => (
                      <div key={s.step} className="flex gap-4 items-start pb-4 border-b border-gray-200 last:border-0 last:pb-0">
                        <span className="font-display font-extrabold text-xl text-blue-700 leading-none">{s.step}</span>
                        <div>
                          <h4 className="font-semibold text-sm text-gray-900 mb-1">{s.name}</h4>
                          <p className="text-xs text-gray-400 leading-relaxed">{s.desc}</p>
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
              <SectionLabel className="justify-center">Core Modules</SectionLabel>
              <h2 id="solutions-title" className="font-display font-extrabold text-display-md text-gray-900">
                Physical Security Capabilities
              </h2>
              <p className="mt-4 text-lg text-gray-500 max-w-xl mx-auto">
                Scalable modules to secure your properties, integrated into a unified operating display.
              </p>
            </RevealWrapper>

            <div className="grid md:grid-cols-2 gap-8">
              {SEC_OFFERINGS.map((sec, idx) => {
                const Icon = sec.icon;
                return (
                  <RevealWrapper key={sec.title} delay={idx * 100}>
                    <div className="bg-white border border-gray-200 rounded-3xl p-8 h-full flex flex-col hover:shadow-lg transition-all duration-300 card-lift">
                      <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center mb-6">
                        <Icon size={24} className="text-blue-700" />
                      </div>
                      <h3 className="font-display font-bold text-lg text-gray-900 mb-3">{sec.title}</h3>
                      <p className="text-sm text-gray-500 leading-relaxed mb-6 flex-1">{sec.desc}</p>
                      <Link href="/contact#quote" className="btn-outline btn btn-sm self-start">
                        Design Module
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
