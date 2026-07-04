const PARTNERS = [
  { name: "Dell",      color: "#007DB8" },
  { name: "HP",        color: "#0096D6" },
  { name: "Lenovo",    color: "#E1251B" },
  { name: "Microsoft", color: "#00A4EF" },
  { name: "Intel",     color: "#0071C5" },
  { name: "NVIDIA",    color: "#76B900" },
  { name: "Canon",     color: "#CC0000" },
  { name: "Samsung",   color: "#1428A0" },
  { name: "Epson",     color: "#009AC7" },
  { name: "Sony",      color: "#003087" },
];

export function PartnersStrip() {
  const items = [...PARTNERS, ...PARTNERS];

  return (
    <section
      className="py-10"
      style={{ background: "linear-gradient(180deg, #ffffff 0%, #EFF6FF 50%, #F5F7FA 100%)" }}
      aria-label="Technology partners"
    >
      <div className="gradient-flow-strip h-[3px] w-full mb-10" />
      <p className="text-center text-[11px] font-semibold uppercase tracking-widest text-gray-400 mb-8">
        Trusted Technology Partners
      </p>

      <div className="overflow-hidden">
        <div
          className="flex items-center"
          style={{ animation: "marquee 30s linear infinite", width: "max-content" }}
        >
          {items.map((p, i) => (
            <div
              key={i}
              className="flex-shrink-0 px-10 flex items-center gap-2.5 opacity-50 hover:opacity-100 transition-opacity duration-300"
            >
              <span
                className="w-2 h-2 rounded-full shrink-0"
                style={{ background: p.color }}
              />
              <span className="font-display font-bold text-lg text-gray-800 select-none whitespace-nowrap">
                {p.name}
              </span>
            </div>
          ))}
        </div>
      </div>
      <div className="gradient-flow-strip h-[3px] w-full mt-10" />
    </section>
  );
}
