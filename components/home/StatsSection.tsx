import { STATS } from "@/lib/constants";
import { Counter } from "@/components/ui/Counter";
import { RevealWrapper } from "@/components/ui/RevealWrapper";
import { SectionLabel } from "@/components/ui/SectionLabel";

export function StatsSection() {
  return (
    <section className="py-24 lg:py-32 bg-gray-50" aria-labelledby="stats-title">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <RevealWrapper className="text-center mb-14">
          <SectionLabel className="justify-center">Why Choose Comptech</SectionLabel>
          <h2
            id="stats-title"
            className="font-display font-extrabold text-gray-900 text-balance"
            style={{ fontSize: "clamp(1.9rem, 3.5vw, 2.8rem)" }}
          >
            Relationships built on results
          </h2>
          <p className="mt-4 text-lg text-gray-500 max-w-xl mx-auto leading-relaxed">
            15+ years of enterprise IT delivery have earned the trust of 200+ organizations across India — and we treat each one like they&rsquo;re our only client.
          </p>
        </RevealWrapper>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {STATS.map((stat, i) => (
            <RevealWrapper key={stat.label} delay={i * 60}>
              <div className="stat-card-line bg-white border border-gray-200 rounded-3xl p-7 text-center group hover:border-blue-200 hover:shadow-md transition-all duration-300">
                <div className="font-display font-extrabold text-4xl leading-none mb-1" style={{ color: "#5C0F26" }}>
                  <Counter value={stat.value} suffix={stat.suffix} />
                </div>
                <div className="font-semibold text-gray-900 text-sm mt-3 mb-1">{stat.label}</div>
                <div className="text-xs text-gray-400">{stat.desc}</div>
              </div>
            </RevealWrapper>
          ))}
        </div>
      </div>
    </section>
  );
}
