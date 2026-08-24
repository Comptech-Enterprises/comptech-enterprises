"use client";

import { motion } from "framer-motion";

/**
 * 1. AI Card Animation:
 * Orbiting synaptic particles and soft pulsing neural glow confined strictly to the top icon area and corner.
 * Text area is 100% clear.
 */
export function AIBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-3xl">
      {/* Top corner ambient blur */}
      <motion.div
        className="absolute -top-10 -right-10 w-48 h-48 rounded-full bg-[#5C0F26]/10 blur-2xl"
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-8 left-1/2 -translate-x-1/2 w-28 h-28 rounded-full bg-[#1D4ED8]/10 blur-xl"
        animate={{ scale: [0.9, 1.15, 0.9], opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
      />

      {/* Orbiting particles around top header area only */}
      <svg className="absolute top-0 left-0 w-full h-40" viewBox="0 0 300 160" fill="none">
        {/* Soft Synaptic Arcs at the top */}
        <motion.path
          d="M 50,40 Q 150,90 250,30"
          stroke="url(#aiTopGrad)"
          strokeWidth="1.5"
          strokeDasharray="4 4"
          animate={{ strokeDashoffset: [0, -32] }}
          transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
        />
        <motion.path
          d="M 30,80 Q 150,20 270,70"
          stroke="#1D4ED8"
          strokeWidth="1"
          strokeOpacity="0.25"
          strokeDasharray="6 6"
          animate={{ strokeDashoffset: [0, 36] }}
          transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
        />

        {/* Orbiting Top Nodes */}
        {[
          { cx: 50, cy: 40, r: 3.5, color: "#5C0F26" },
          { cx: 250, cy: 30, r: 4, color: "#1D4ED8" },
          { cx: 150, cy: 90, r: 3, color: "#5C0F26" },
          { cx: 270, cy: 70, r: 3.5, color: "#1D4ED8" },
          { cx: 30, cy: 80, r: 3, color: "#5C0F26" },
        ].map((pt, i) => (
          <g key={i}>
            <circle cx={pt.cx} cy={pt.cy} r={pt.r} fill={pt.color} opacity="0.6" />
            <motion.circle
              cx={pt.cx}
              cy={pt.cy}
              r={pt.r * 2}
              fill="none"
              stroke={pt.color}
              strokeWidth="0.8"
              animate={{ scale: [1, 1.8, 1], opacity: [0.5, 0, 0.5] }}
              transition={{ duration: 2.2, repeat: Infinity, delay: i * 0.4, ease: "easeInOut" }}
            />
          </g>
        ))}

        <defs>
          <linearGradient id="aiTopGrad" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#5C0F26" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#1D4ED8" stopOpacity="0.5" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

/**
 * 2. Software Card Animation:
 * Subtle terminal cursor beam and bracket telemetry restricted to top perimeter only.
 * Text area is 100% clear.
 */
export function SoftwareBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-3xl">
      {/* Top corner ambient glow */}
      <motion.div
        className="absolute -top-10 -left-10 w-48 h-48 rounded-full bg-[#1D4ED8]/12 blur-2xl"
        animate={{ scale: [1, 1.25, 1], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-8 right-4 w-32 h-32 rounded-full bg-[#0284C7]/10 blur-xl"
        animate={{ scale: [0.9, 1.15, 0.9], opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
      />

      {/* Top Code telemetry brackets around icon */}
      <div className="absolute top-4 left-6 right-6 flex items-center justify-between font-mono text-xs text-blue-500/40 select-none">
        <motion.span
          animate={{ opacity: [0.3, 0.8, 0.3] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          &lt;dev&gt;
        </motion.span>
        <motion.span
          animate={{ opacity: [0.2, 0.7, 0.2] }}
          transition={{ duration: 2.4, repeat: Infinity, delay: 0.4 }}
        >
          {`{ api }`}
        </motion.span>
        <motion.span
          animate={{ opacity: [0.3, 0.8, 0.3] }}
          transition={{ duration: 2, repeat: Infinity, delay: 0.8 }}
        >
          &lt;/&gt;
        </motion.span>
      </div>

      {/* Top ambient scanning line */}
      <svg className="absolute top-0 left-0 w-full h-32" viewBox="0 0 300 120" fill="none">
        <motion.line
          x1="20" y1="28" x2="280" y2="28"
          stroke="#1D4ED8"
          strokeWidth="1"
          strokeDasharray="4 8"
          strokeOpacity="0.2"
          animate={{ strokeDashoffset: [0, -36] }}
          transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
        />
      </svg>
    </div>
  );
}

/**
 * 3. Hardware Card Animation:
 * Microchip PCB circuit corner traces and pulse nodes along the perimeter edge only.
 * Text area is 100% clear.
 */
export function HardwareBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-3xl">
      {/* Top corner ambient glow */}
      <motion.div
        className="absolute -top-10 -right-10 w-48 h-48 rounded-full bg-[#1E3A8A]/12 blur-2xl"
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* PCB Circuit traces along top and right borders only */}
      <svg className="absolute top-0 right-0 w-44 h-44" viewBox="0 0 160 160" fill="none">
        {/* Border Traces */}
        <path
          d="M 160,20 L 100,20 L 70,50 L 70,90 L 40,120 L 0,120"
          stroke="#1D4ED8"
          strokeWidth="1.5"
          opacity="0.25"
        />
        <path
          d="M 160,60 L 120,60 L 95,85 L 95,140 L 80,160"
          stroke="#5C0F26"
          strokeWidth="1.2"
          opacity="0.2"
        />

        {/* Traveling light pulse along edge */}
        <motion.path
          d="M 160,20 L 100,20 L 70,50 L 70,90 L 40,120 L 0,120"
          stroke="#38BDF8"
          strokeWidth="2"
          strokeDasharray="18 160"
          animate={{ strokeDashoffset: [0, -178] }}
          transition={{ duration: 3.5, repeat: Infinity, ease: "linear" }}
        />

        {/* Corner Circuit Pins */}
        <rect x="97" y="17" width="5" height="5" rx="1" fill="#38BDF8" opacity="0.75" />
        <rect x="67" y="47" width="5" height="5" rx="1" fill="#1D4ED8" opacity="0.6" />
        <rect x="37" y="117" width="5" height="5" rx="1" fill="#38BDF8" opacity="0.75" />
      </svg>
    </div>
  );
}
