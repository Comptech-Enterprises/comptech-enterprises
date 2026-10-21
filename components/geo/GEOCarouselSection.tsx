"use client";

import { SectionLabel } from "@/components/ui/SectionLabel";
import { CircularCarousel, CircularCarouselItem } from "./CircularCarousel";

const PROCESS_STEPS: CircularCarouselItem[] = [
  {
    step: "01",
    title: "AI Visibility Audit",
    desc: "We query all major AI engines with your industry keywords and map where your brand is cited, missed, or misrepresented.",
  },
  {
    step: "02",
    title: "Content & Authority Gap Analysis",
    desc: "Identify what content and authority signals are missing that prevent AI engines from citing you.",
  },
  {
    step: "03",
    title: "GEO Strategy & Execution",
    desc: "Execute content restructuring, schema implementation, authority building, and entity optimization.",
  },
  {
    step: "04",
    title: "Monitor & Optimize",
    desc: "Continuous monitoring across all AI engines with monthly reports and iterative optimization.",
  },
];

export function GEOCarouselSection() {
  return (
    <section className="py-14 sm:py-16 lg:py-24 bg-[#F7F8FB] border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-8 lg:mb-14">
          <SectionLabel className="justify-center">Our Process</SectionLabel>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-gray-900 tracking-tight mt-3">
            How We Make AI Engines{" "}
            <span
              className="text-transparent bg-clip-text"
              style={{ backgroundImage: "linear-gradient(135deg, #5C0F26, #E8435A)" }}
            >
              Cite Your Brand
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed">
            A proven four-stage framework designed for how large language models index, retrieve, and cite authoritative enterprise sources.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <CircularCarousel items={PROCESS_STEPS} />
        </div>
      </div>
    </section>
  );
}
