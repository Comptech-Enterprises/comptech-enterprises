import { PARTNERS } from "@/lib/constants";

export function PartnersStrip() {
  const doubled = [...PARTNERS, ...PARTNERS];

  return (
    <section className="bg-white border-b border-gray-100 py-10" aria-label="Technology partners">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <p className="text-center text-xs text-gray-400 uppercase tracking-widest mb-8">
          Trusted Technology Partners
        </p>
      </div>

      {/* Marquee */}
      <div className="overflow-hidden">
        <div
          className="flex items-center"
          style={{ animation: "marquee 30s linear infinite", width: "max-content" }}
        >
          {doubled.map((p, i) => (
            <div
              key={i}
              className="partner-logo-card flex-shrink-0 px-10 flex items-center justify-center"
              style={
                {
                  "--partner-color": p.color,
                } as React.CSSProperties
              }
            >
              <span
                className="font-display font-bold text-xl select-none"
                title={p.name}
              >
                {p.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
