"use client";

const PARTNERS = [
  { name: "Dell",      color: "#007DB8", cert: "Gold Partner"      },
  { name: "HP",        color: "#0096D6", cert: "Authorized Partner" },
  { name: "Lenovo",    color: "#E1251B", cert: "Platinum Partner"   },
  { name: "Microsoft", color: "#00A4EF", cert: "CSP Partner"        },
  { name: "Intel",     color: "#0071C5", cert: "Technology Partner" },
  { name: "NVIDIA",    color: "#76B900", cert: "Elite Partner"      },
  { name: "Canon",     color: "#CC0000", cert: "Authorized Reseller"},
  { name: "Samsung",   color: "#1428A0", cert: "Business Partner"   },
  { name: "Epson",     color: "#009AC7", cert: "Premium Partner"    },
  { name: "Sony",      color: "#003087", cert: "Authorized Partner" },
];

const STATS = [
  { value: "10+",  label: "OEM Partners",      sub: "Tier-1 global brands"       },
  { value: "15+",  label: "Years Experience",  sub: "Since 2008"                 },
  { value: "200+", label: "Clients Served",    sub: "Across India"               },
  { value: "50+",  label: "Certified Engineers",sub: "OEM certified professionals"},
];

export function PartnersStrip() {
  return (
    <section
      className="py-20"
      style={{ background: "linear-gradient(180deg, #ffffff 0%, #f8f9ff 40%, #f5f0f2 80%, #ffffff 100%)" }}
      aria-label="Technology partners"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Top: Heading left + Stats right */}
        <div className="flex flex-col lg:flex-row lg:items-start gap-12 mb-16">

          {/* Left heading */}
          <div className="lg:w-2/5">
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] mb-3" style={{ color: "#5C0F26" }}>
              Certified & Trusted
            </p>
            <h2 className="font-display font-extrabold text-gray-900 leading-tight mb-4"
              style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)" }}>
              15+ Years of{" "}
              <span className="text-transparent bg-clip-text"
                style={{ backgroundImage: "linear-gradient(135deg, #5C0F26, #E8435A)" }}>
                OEM Excellence
              </span>
            </h2>
            <p className="text-gray-500 text-base leading-relaxed max-w-sm">
              Authorized partner for the world's leading technology brands — bringing certified expertise to every project we deliver.
            </p>
          </div>

          {/* Right stats grid */}
          <div className="flex-1 grid grid-cols-2 gap-4">
            {STATS.map(({ value, label, sub }) => (
              <div key={label}
                className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm">
                <p className="font-display font-extrabold text-2xl leading-none mb-1"
                  style={{ color: "#5C0F26" }}>{value}</p>
                <p className="text-sm font-semibold text-gray-900 leading-tight">{label}</p>
                <p className="text-[11px] text-gray-400 mt-1">{sub}</p>
              </div>
            ))}
          </div>

        </div>

        {/* Divider */}
        <div className="flex items-center gap-4 mb-10">
          <div className="flex-1 h-px bg-gray-200" />
          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400 whitespace-nowrap">
            Trusted Technology Partners
          </p>
          <div className="flex-1 h-px bg-gray-200" />
        </div>

        {/* Partner cards grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
          {PARTNERS.map(({ name, color, cert }) => (
            <div
              key={name}
              className="group relative rounded-2xl border border-gray-100 bg-white p-5 flex flex-col items-center text-center transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 overflow-hidden"
            >
              {/* Color accent bar */}
              <div
                className="absolute top-0 left-0 right-0 h-0.5 rounded-t-2xl transition-all duration-300 group-hover:h-1"
                style={{ background: color }}
              />
              {/* Brand initial badge */}
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center text-white font-display font-extrabold text-sm mb-3 transition-transform duration-300 group-hover:scale-110"
                style={{ background: color }}
              >
                {name[0]}
              </div>
              <p className="font-display font-bold text-sm text-gray-900 leading-none mb-1.5">{name}</p>
              <p className="text-[10px] text-gray-400 leading-tight">{cert}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
