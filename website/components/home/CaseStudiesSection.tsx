import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { CASE_STUDIES } from "@/lib/constants";
import { RevealWrapper } from "@/components/ui/RevealWrapper";
import { SectionLabel } from "@/components/ui/SectionLabel";

export function CaseStudiesSection() {
  return (
    <section className="py-24 lg:py-32 bg-white" aria-labelledby="cases-title">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <RevealWrapper className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14">
          <div>
            <SectionLabel>Success Stories</SectionLabel>
            <h2
              id="cases-title"
              className="font-display font-extrabold text-gray-900 text-balance max-w-xl"
              style={{ fontSize: "clamp(1.9rem, 3.5vw, 2.8rem)" }}
            >
              Real work. Real results.
            </h2>
          </div>
          <Link href="/case-studies" className="inline-flex items-center gap-2 rounded-xl border border-gray-200 bg-white px-6 py-2.5 font-semibold text-gray-700 text-sm hover:border-gray-300 hover:bg-gray-50 transition-all duration-300 group shrink-0" style={{ boxShadow: "0 1px 4px rgba(0,0,0,0.04)" }}>
            All Case Studies <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </RevealWrapper>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {CASE_STUDIES.map((cs, i) => (
            <RevealWrapper key={cs.headline} delay={i * 100}>
              <div
                className="card-lift bg-white rounded-3xl overflow-hidden h-full flex flex-col"
                style={{ border: "1px solid rgba(0,0,0,0.07)", boxShadow: "0 1px 4px rgba(0,0,0,0.04)" }}
              >
                {/* Header */}
                <div className="p-6" style={{ background: "linear-gradient(135deg, #3F0A1A 0%, #5C0F26 100%)" }}>
                  <span className="inline-block text-xs font-semibold bg-white/15 border border-white/20 text-white px-3 py-1 rounded-full mb-3">
                    {cs.tag}
                  </span>
                  <h3 className="font-display font-bold text-lg text-white leading-snug">
                    {cs.headline}
                  </h3>
                  <p className="text-sm text-white/60 mt-1">{cs.client}</p>
                </div>

                {/* Body */}
                <div className="p-6 flex-1 flex flex-col">
                  <p className="text-sm text-gray-500 leading-relaxed mb-6">{cs.excerpt}</p>

                  {/* Metrics */}
                  <div className="grid grid-cols-3 gap-3 mb-6">
                    {cs.metrics.map((m) => (
                      <div key={m.label} className="text-center rounded-2xl p-3" style={{ background: "#FDF4F6" }}>
                        <div className="font-display font-extrabold text-lg leading-tight" style={{ color: "#5C0F26" }}>{m.value}</div>
                        <div className="text-xs text-gray-400 mt-1 leading-tight">{m.label}</div>
                      </div>
                    ))}
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {cs.tags.map((tag) => (
                      <span key={tag} className="text-xs px-3 py-1 rounded-full font-medium" style={{ background: "#FDF4F6", color: "#5C0F26", border: "1px solid rgba(92,15,38,0.15)" }}>
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
  );
}
