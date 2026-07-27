"use client";

interface AIOrbProps {
  /** diameter in px */
  size?: number;
  /** main energy colour */
  accent?: string;
  /** bright inner highlight colour */
  light?: string;
  /** deep shadow colour of the sphere */
  dark?: string;
  className?: string;
}

/**
 * A 3D-looking AI orb built entirely from layered CSS gradients — a shaded
 * sphere with two counter-rotating energy swirls, a specular highlight, a
 * pulsing outer glow, and an orbiting spark. No 3D library required.
 */
export function AIOrb({
  size = 208,
  accent = "#7C3AED",
  light = "#C4B5FD",
  dark = "#160C2E",
  className = "",
}: AIOrbProps) {
  return (
    <div className={`relative ${className}`} style={{ width: size, height: size }}>
      {/* Outer pulsing glow */}
      <div
        className="absolute inset-0 rounded-full blur-2xl animate-pulse-glow motion-reduce:animate-none"
        style={{ background: `radial-gradient(circle, ${accent}, transparent 68%)` }}
      />

      {/* The sphere */}
      <div
        className="absolute inset-[8%] rounded-full overflow-hidden"
        style={{
          background: `radial-gradient(circle at 32% 26%, rgba(255,255,255,0.55), ${accent} 42%, ${dark} 92%)`,
          boxShadow: `inset -14px -18px 44px rgba(0,0,0,0.55), inset 12px 14px 32px ${accent}88, 0 24px 70px ${accent}55`,
        }}
      >
        {/* Energy swirl */}
        <div
          className="absolute inset-[-25%] animate-spin motion-reduce:animate-none"
          style={{
            animationDuration: "9s",
            background: `conic-gradient(from 0deg, transparent, ${accent} 22%, transparent 44%, ${light} 60%, transparent 82%)`,
            mixBlendMode: "screen",
            opacity: 0.75,
          }}
        />
        {/* Counter-rotating swirl */}
        <div
          className="absolute inset-[-25%] motion-reduce:animate-none"
          style={{
            animation: "spin 14s linear infinite reverse",
            background: `conic-gradient(from 140deg, transparent, ${accent} 30%, transparent 60%)`,
            mixBlendMode: "screen",
            opacity: 0.5,
          }}
        />
        {/* Specular highlight */}
        <div
          className="absolute rounded-full"
          style={{
            top: "13%",
            left: "17%",
            width: "34%",
            height: "27%",
            background: "radial-gradient(circle, rgba(255,255,255,0.85), transparent 70%)",
            filter: "blur(2px)",
          }}
        />
      </div>

      {/* Orbiting spark */}
      <div
        className="absolute inset-0 animate-spin motion-reduce:animate-none"
        style={{ animationDuration: "7s" }}
      >
        <span
          className="absolute rounded-full"
          style={{
            top: "1%",
            left: "50%",
            width: 9,
            height: 9,
            marginLeft: -4.5,
            background: "#fff",
            boxShadow: `0 0 10px #fff, 0 0 22px ${accent}`,
          }}
        />
      </div>
    </div>
  );
}
