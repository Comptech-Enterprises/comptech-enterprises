"use client";

import { useState, MouseEvent } from "react";
import { motion } from "framer-motion";

export function SpotlightCard({
  children,
  className = "",
  spotlightColor = "rgba(92, 15, 38, 0.12)",
  beamFrom = "#5C0F26",
  beamTo = "#E8435A",
  beamDuration = 4.5,
  onClick,
}: {
  children: React.ReactNode;
  className?: string;
  spotlightColor?: string;
  beamFrom?: string;
  beamTo?: string;
  beamDuration?: number;
  onClick?: () => void;
}) {
  const [mousePos, setMousePos] = useState<{ x: number; y: number } | null>(null);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        setMousePos(null);
      }}
      onClick={onClick}
      className={`group relative rounded-3xl p-[2px] overflow-hidden transition-all duration-300 hover:shadow-2xl ${className}`}
    >
      {/* ── 1. Animated Conic Glowing Border Beam (100% visible across all mobile browsers & desktop) ── */}
      <motion.div
        className="absolute -inset-[180%] pointer-events-none origin-center"
        style={{
          background: `conic-gradient(from 0deg at 50% 50%, transparent 0deg, transparent 270deg, ${beamFrom} 310deg, ${beamTo} 360deg)`,
        }}
        animate={{ rotate: 360 }}
        transition={{ duration: beamDuration, repeat: Infinity, ease: "linear" }}
      />

      {/* ── 2. Glowing Halo Bloom around the beam ── */}
      <motion.div
        className="absolute -inset-[180%] pointer-events-none origin-center blur-md opacity-70"
        style={{
          background: `conic-gradient(from 0deg at 50% 50%, transparent 0deg, transparent 270deg, ${beamFrom} 310deg, ${beamTo} 360deg)`,
        }}
        animate={{ rotate: 360 }}
        transition={{ duration: beamDuration, repeat: Infinity, ease: "linear" }}
      />

      {/* ── 3. Inner Card Surface with Frosted Glass ── */}
      <div className="relative z-10 h-full w-full rounded-[22px] bg-white/95 backdrop-blur-xl p-6 sm:p-7 flex flex-col border border-white/60">
        {/* Interactive Cursor Spotlight on hover */}
        {isHovered && mousePos && (
          <div
            className="pointer-events-none absolute -inset-px rounded-[22px] transition-opacity duration-300"
            style={{
              background: `radial-gradient(350px circle at ${mousePos.x}px ${mousePos.y}px, ${spotlightColor}, transparent 80%)`,
            }}
          />
        )}

        {/* Card Content */}
        <div className="relative z-10 h-full flex flex-col">{children}</div>
      </div>
    </div>
  );
}
