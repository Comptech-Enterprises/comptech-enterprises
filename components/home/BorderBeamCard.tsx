"use client";

import { useState, MouseEvent } from "react";

export function SpotlightCard({
  children,
  className = "",
  spotlightColor = "rgba(92, 15, 38, 0.12)",
  onClick,
}: {
  children: React.ReactNode;
  className?: string;
  spotlightColor?: string;
  /** @deprecated The beam border was removed; these props are ignored. */
  beamFrom?: string;
  /** @deprecated */
  beamTo?: string;
  /** @deprecated */
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
      className={`group relative rounded-3xl overflow-hidden border border-gray-200/80 shadow-sm transition-all duration-300 hover:shadow-2xl ${className}`}
    >
      {/* Card surface with frosted glass. The animated beam border was removed. */}
      <div className="relative z-10 h-full w-full rounded-3xl bg-white/95 backdrop-blur-xl p-6 sm:p-7 flex flex-col">
        {/* Interactive Cursor Spotlight on hover */}
        {isHovered && mousePos && (
          <div
            className="pointer-events-none absolute -inset-px rounded-3xl transition-opacity duration-300"
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
