"use client";

import { useEffect, useRef, useState } from "react";
import { TrendingUp, TrendingDown, AlertTriangle } from "lucide-react";

import TechText from "@/components/reactbits/TechText";

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

function useInView<T extends HTMLElement>(threshold = 0.25) {
  const [visible, setVisible] = useState(false);
  const ref = useRef<T>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, visible };
}

function AnimatedStat({ stat }: { stat: string }) {
  const { ref, visible } = useInView<HTMLSpanElement>();
  const [value, setValue] = useState(0);
  const negative = stat.startsWith("-");
  const target = Math.abs(Number(stat.replace(/[^-\d]/g, "")));
  const suffix = stat.includes("%") ? "%" : "";

  useEffect(() => {
    if (!visible) return undefined;
    const start = performance.now();
    let raf = 0;
    const tick = (now: number) => {
      const progress = Math.min((now - start) / 900, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(target * eased));
      if (progress < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target, visible]);

  return (
    <span ref={ref} className="font-display font-extrabold text-3xl sm:text-4xl text-[#5C0F26] leading-none tabular-nums">
      {negative ? "-" : ""}
      {value}
      {suffix}
    </span>
  );
}

function TrendLineChart() {
  const { ref, visible } = useInView<HTMLDivElement>(0.35);
  const width = 720;
  const height = 320;
  const padding = { top: 24, right: 28, bottom: 42, left: 42 };
  const chartWidth = width - padding.left - padding.right;
  const chartHeight = height - padding.top - padding.bottom;
  const yTicks = [0, 25, 50, 75, 100];

  const point = (index: number, value: number) => {
    const x = padding.left + (index / (SEARCH_DATA.length - 1)) * chartWidth;
    const y = padding.top + (1 - value / 100) * chartHeight;
    return { x, y };
  };

  const googlePoints = SEARCH_DATA.map((item, index) => point(index, item.google));
  const aiPoints = SEARCH_DATA.map((item, index) => point(index, item.ai));
  const pathFor = (points: { x: number; y: number }[]) =>
    points.map((p, index) => `${index === 0 ? "M" : "L"} ${p.x} ${p.y}`).join(" ");
  const aiPath = pathFor(aiPoints);
  const googlePath = pathFor(googlePoints);
  const areaPath = `${aiPath} L ${aiPoints[aiPoints.length - 1].x} ${height - padding.bottom} L ${aiPoints[0].x} ${height - padding.bottom} Z`;

  return (
    <div ref={ref} className="overflow-hidden rounded-2xl bg-gray-50/80 p-2 sm:p-4">
      <svg
        className="h-auto w-full"
        viewBox={`0 0 ${width} ${height}`}
        role="img"
        aria-label="Line graph showing AI search rising while Google search declines from 2020 to 2025"
      >
        <defs>
          <linearGradient id="ai-area" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#5C0F26" stopOpacity="0.18" />
            <stop offset="100%" stopColor="#5C0F26" stopOpacity="0" />
          </linearGradient>
        </defs>
        {yTicks.map((tick) => {
          const y = padding.top + (1 - tick / 100) * chartHeight;
          return (
            <g key={tick}>
              <line x1={padding.left} x2={width - padding.right} y1={y} y2={y} stroke="#E5E7EB" strokeDasharray="4 6" />
              <text x={padding.left - 12} y={y + 4} textAnchor="end" className="fill-gray-400 text-[11px] font-semibold">
                {tick}
              </text>
            </g>
          );
        })}
        <path d={areaPath} fill="url(#ai-area)" opacity={visible ? 1 : 0} className="transition-opacity duration-700" />
        <path
          d={googlePath}
          pathLength={1}
          fill="none"
          stroke="#C7CDD6"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{
            strokeDasharray: 1,
            strokeDashoffset: visible ? 0 : 1,
            transition: "stroke-dashoffset 1200ms ease",
          }}
        />
        <path
          d={aiPath}
          pathLength={1}
          fill="none"
          stroke="#5C0F26"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{
            strokeDasharray: 1,
            strokeDashoffset: visible ? 0 : 1,
            transition: "stroke-dashoffset 1200ms ease 180ms",
          }}
        />
        {SEARCH_DATA.map((item, index) => {
          const google = googlePoints[index];
          const ai = aiPoints[index];
          return (
            <g key={item.year} className={`transition-opacity duration-500 ${visible ? "opacity-100" : "opacity-0"}`}>
              <circle cx={google.x} cy={google.y} r="5" fill="#C7CDD6" stroke="#fff" strokeWidth="2.5" />
              <circle cx={ai.x} cy={ai.y} r="5" fill="#5C0F26" stroke="#fff" strokeWidth="2.5" />
              <text x={ai.x} y={height - 14} textAnchor="middle" className="fill-gray-400 text-[12px] font-semibold">
                {item.year}
              </text>
            </g>
          );
        })}
      </svg>
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
          setTimeout(() => setVisible(true), index * 200);
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
      <div className="bg-white border border-gray-200 rounded-3xl p-6 sm:p-8 h-full hover:shadow-lg hover:border-gray-300 transition-all duration-200 flex flex-col justify-between">
        <div className="flex items-start gap-4">
          <div className="w-13 h-13 sm:w-14 sm:h-14 rounded-2xl bg-[#FDF4F6] flex items-center justify-center shrink-0">
            <Icon size={24} className="text-[#5C0F26]" />
          </div>
          <div className="flex-1 min-w-0">
            <AnimatedStat stat={point.stat} />
            <h3 className="font-display font-bold text-lg text-gray-900 mt-2 mb-2 leading-snug">
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
    <section id="ai-search-shift" className="py-20 lg:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 bg-[#FDF4F6] border border-[#5C0F26]/20 rounded-full px-4 py-1.5 text-xs font-semibold text-[#5C0F26] uppercase tracking-widest mb-3">
            The Shift Is Happening
          </div>

          {/* TechText accent */}
          <div className="w-full h-[60px] sm:h-[75px] relative max-w-xs sm:max-w-md mx-auto mb-2">
            <TechText
              text="AI SEARCH"
              fontWeight={800}
              fontSize={60}
              color="#5C0F26"
              accentColor="#E8435A"
              lineStyle="solid"
              reveal="letter"
              specks={0}
            />
          </div>

          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-gray-900 tracking-tight">
            AI Search Is Replacing Google
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed">
            The way people search for information is fundamentally changing. AI engines are growing while traditional search declines.
          </p>
        </div>

        {/* Chart card */}
        <div className="bg-white border border-gray-200 rounded-3xl p-6 sm:p-10 mb-16 max-w-4xl mx-auto shadow-xs">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
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

          <TrendLineChart />

          <p className="text-xs text-gray-400 mt-6 text-center">
            Source: Estimated from industry reports on AI search adoption trends (Gartner, Spark Toro, SimilarWeb)
          </p>
        </div>

        {/* Why GEO matters section */}
        <div className="text-center mb-10">
          {/* TechText accent */}
          <div className="w-full h-[52px] sm:h-[65px] relative max-w-[240px] sm:max-w-xs mx-auto mb-2">
            <TechText
              text="WHY GEO"
              fontWeight={800}
              fontSize={52}
              color="#5C0F26"
              accentColor="#E8435A"
              lineStyle="solid"
              reveal="letter"
              specks={0}
            />
          </div>

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
