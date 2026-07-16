"use client";

import { useEffect, useRef, useState, ReactNode } from "react";
import { clsx } from "clsx";

interface RevealWrapperProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "left" | "right" | "none";
  threshold?: number;
}

export function RevealWrapper({
  children,
  className,
  delay = 0,
  direction = "up",
  threshold = 0.12,
}: RevealWrapperProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  const initialTransform = {
    up:    "translateY(32px)",
    left:  "translateX(-32px)",
    right: "translateX(32px)",
    none:  "none",
  }[direction];

  return (
    <div
      ref={ref}
      className={clsx(className)}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "none" : initialTransform,
        transition: `opacity 0.6s ease-out ${delay}ms, transform 0.6s cubic-bezier(0.0,0.0,0.2,1) ${delay}ms`,
        willChange: "opacity, transform",
      }}
    >
      {children}
    </div>
  );
}
