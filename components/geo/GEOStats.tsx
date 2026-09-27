"use client";

import { useEffect, useRef, useState } from "react";
import { TrendingUp, TrendingDown, AlertTriangle } from "lucide-react";

const SEARCH_DATA = [
  { year: "2020", google: 92, ai: 2 },
  { year: "2021", google: 90, ai: 5 },
  { year: "2022", google: 85, ai: 12 },
  { year: "2023", google: 75, ai: 28 },
  { year: "2024", google: 62, ai: 45 },
  { year: "2025", google: 50, ai: 58 },
];

const WHY_GEO_POINTS = [
  {
    icon: TrendingUp,
    stat: "58%",
    title: "Users now prefer AI search over traditional search",
    desc: "More than half of all information-seeking queries now start with an AI engine like ChatGPT, Perplexity, or Gemini instead of Google.",
  },
  {
    icon: TrendingDown,
    stat: "-40%",
    title: "Organic clicks from Google are declining fast",
    desc: "AI Overviews and zero-click results mean fewer users click through to websites. Your traffic from traditional SEO is shrinking every quarter.",
  },
  {
    icon: AlertTriangle,
    stat: "0%",
    title: "If AI doesn't cite you, you don't exist",
    desc: "When an AI engine answers a user's query and doesn't mention your brand, there's no page 2 to scroll to. You're simply invisible.",
  },
];

function AnimatedBar({ value, color, delay }: { value: number; color: string; delay: number }) {
  const [width, setWidth] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setWidth(value), delay);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [value, delay]);

  return (
    <div ref={ref} className="h-full w-full relative">
      <div
        className="absolute bottom-0 left-0 right-0 rounded-t-md transition-all duration-1000 ease-out"
        style={{ height: `${width}%`, background: color }}
      />
    </div>
  );
}

function WhyGEOSlide({
  point,
  index,
}: {
  point: (typeof WHY_GEO_POINTS)[0];
  index: number;
}) {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setVisible(true), index * 400);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [index]);

  const Icon = point.icon;

  return (
    <div
      ref={ref}
      className={`transform transition-all duration-700 ease-out ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      <div className="bg-white border border-gray-200 rounded-3xl p-8 h-full hover:shadow-lg hover:border-gray-300 transition-all duration-200">
        <div className="flex items-start gap-4">
          <div className="w-14 h-14 rounded-2xl bg-[#FDF4F6] flex items-center justify-center shrink-0">
            <Icon size={24} className="text-[#5C0F26]" />
          </div>
          <div className="flex-1">
            <span className="font-display font-extrabold text-3xl text-[#5C0F26] leading-none">
              {point.stat}
            </span>
            <h3 className="font-display font-bold text-lg text-gray-900 mt-2 mb-2">
              {point.title}
            </h3>
            <p className="text-sm text-gray-500 leading-relaxed">{point.desc}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export function GEOStats() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-[#FDF4F6] border border-[#5C0F26]/20 rounded-full px-4 py-1.5 text-xs font-semibold text-[#5C0F26] uppercase tracking-widest mb-5">
            The Shift Is Happening
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-gray-900 tracking-tight">
            AI Search Is Replacing Google
          </h2>
          <p className="mt-4 text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed">
            The way people search for information is fundamentally changing. AI engines are growing while traditional search declines.
          </p>
        </div>

        {/* Chart */}
        <div className="bg-white border border-gray-200 rounded-3xl p-6 sm:p-10 mb-16 max-w-4xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h3 className="font-display font-bold text-lg text-gray-900">
              Search Market Share Trend
            </h3>
            <div className="flex items-center gap-5">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-gray-300" />
                <span className="text-xs font-medium text-gray-500">Google</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-[#5C0F26]" />
                <span className="text-xs font-medium text-gray-500">AI Search</span>
              </div>
            </div>
          </div>

          <div className="flex items-end gap-2 sm:gap-4 h-64">
            {SEARCH_DATA.map((d, i) => (
              <div key={d.year} className="flex-1 flex flex-col items-center gap-1 h-full">
                <div className="flex-1 w-full flex gap-1">
                  <div className="flex-1">
                    <AnimatedBar value={d.google} color="#D1D5DB" delay={i * 150} />
                  </div>
                  <div className="flex-1">
                    <AnimatedBar value={d.ai} color="#5C0F26" delay={i * 150 + 75} />
                  </div>
                </div>
                <span className="text-xs font-medium text-gray-400 mt-2">{d.year}</span>
              </div>
            ))}
          </div>

          <p className="text-xs text-gray-400 mt-6 text-center">
            Source: Estimated from industry reports on AI search adoption trends (Gartner, Spark Toro, SimilarWeb)
          </p>
        </div>

        {/* Why GEO matters - sequential animated slides */}
        <div className="text-center mb-10">
          <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-gray-900">
            Why GEO Matters for Your Business
          </h3>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {WHY_GEO_POINTS.map((point, i) => (
            <WhyGEOSlide key={point.stat} point={point} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
