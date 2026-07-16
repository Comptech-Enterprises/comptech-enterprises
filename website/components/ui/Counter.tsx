"use client";

import { useEffect, useRef, useState } from "react";

interface CounterProps {
  value: string;
  suffix?: string;
  prefix?: string;
  className?: string;
  duration?: number;
}

export function Counter({ value, suffix = "", prefix = "", className = "", duration = 2000 }: CounterProps) {
  const [display, setDisplay] = useState("0");
  const ref = useRef<HTMLSpanElement>(null);
  const animated = useRef(false);

  const isDecimal = value.includes(".");
  const target = parseFloat(value);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !animated.current) {
          animated.current = true;
          const start = performance.now();

          const tick = (now: number) => {
            const elapsed = now - start;
            const progress = Math.min(elapsed / duration, 1);
            const ease = 1 - Math.pow(1 - progress, 3);
            const current = target * ease;

            setDisplay(isDecimal ? current.toFixed(1) : Math.floor(current).toLocaleString("en-IN"));

            if (progress < 1) requestAnimationFrame(tick);
            else setDisplay(isDecimal ? target.toFixed(1) : target.toLocaleString("en-IN"));
          };

          requestAnimationFrame(tick);
          observer.unobserve(el);
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [target, duration, isDecimal]);

  return (
    <span ref={ref} className={className}>
      {prefix}{display}{suffix}
    </span>
  );
}
