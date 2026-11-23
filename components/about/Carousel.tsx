"use client";

import { useRef, type ReactNode } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

/** Horizontal scroll-snap carousel with round arrow buttons. */
export function Carousel({ children, label, arrowClass = "bg-[#B91C1C] text-white hover:bg-[#9F1818]" }: { children: ReactNode; label: string; arrowClass?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const move = (dir: 1 | -1) => {
    const el = ref.current;
    if (!el) return;
    el.scrollBy({ left: dir * Math.max(280, el.clientWidth * 0.8), behavior: "smooth" });
  };
  return (
    <div className="relative">
      <div
        ref={ref}
        role="region"
        aria-label={label}
        tabIndex={0}
        className="about-scroll flex gap-4 overflow-x-auto px-6 pb-3 lg:px-8"
      >
        {children}
      </div>
      <button
        type="button"
        onClick={() => move(-1)}
        aria-label={`Previous ${label}`}
        className={`absolute left-2 top-1/2 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full shadow-lg transition-colors sm:flex ${arrowClass}`}
      >
        <ChevronLeft size={20} />
      </button>
      <button
        type="button"
        onClick={() => move(1)}
        aria-label={`Next ${label}`}
        className={`absolute right-2 top-1/2 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full shadow-lg transition-colors sm:flex ${arrowClass}`}
      >
        <ChevronRight size={20} />
      </button>
    </div>
  );
}
