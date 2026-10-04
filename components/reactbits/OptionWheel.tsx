"use client";

import React, { useState, useRef, useEffect, useCallback, ReactNode } from "react";
import { ChevronUp, ChevronDown, CheckCircle2, Zap, Shield, Lightbulb } from "lucide-react";

const ICON_MAP: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  zap: Zap,
  shield: Shield,
  lightbulb: Lightbulb,
};

export interface OptionWheelItem {
  id: string;
  title: string;
  subtitle?: string;
  tag?: string;
  desc: string;
  iconName?: "zap" | "shield" | "lightbulb" | string;
  icon?: React.ComponentType<{ size?: number; className?: string }>;
  metric?: string;
}

interface OptionWheelProps {
  options: OptionWheelItem[];
  selectedIndex?: number;
  onSelect?: (index: number) => void;
  className?: string;
}

export default function OptionWheel({
  options,
  selectedIndex = 0,
  onSelect,
  className = "",
}: OptionWheelProps) {
  const [active, setActive] = useState(selectedIndex);
  const containerRef = useRef<HTMLDivElement>(null);
  const dragStartY = useRef<number | null>(null);

  const selectOption = useCallback(
    (index: number) => {
      const clamped = Math.max(0, Math.min(options.length - 1, index));
      setActive(clamped);
      onSelect?.(clamped);
    },
    [onSelect, options.length]
  );

  const prev = () => selectOption(active - 1);
  const next = () => selectOption(active + 1);

  const activeItem = options[active] || options[0];
  const ActiveIcon = activeItem?.icon || (activeItem?.iconName ? ICON_MAP[activeItem.iconName] : null);

  return (
    <div className={`w-full ${className}`}>
      <div className="grid lg:grid-cols-12 gap-8 items-center">
        {/* Left Column: 3D Option Wheel Selector */}
        <div className="lg:col-span-5 flex flex-col items-center">
          <div className="flex items-center justify-between w-full max-w-sm mb-3 px-2">
            <span className="text-[11px] font-bold uppercase tracking-widest text-gray-400">
              Select Strategic Pillar
            </span>
            <div className="flex items-center gap-1.5">
              <button
                type="button"
                onClick={prev}
                disabled={active === 0}
                className="w-7 h-7 rounded-full bg-gray-100 hover:bg-gray-200 disabled:opacity-30 disabled:pointer-events-none flex items-center justify-center transition-colors"
                aria-label="Previous pillar"
              >
                <ChevronUp size={15} className="text-gray-700" />
              </button>
              <button
                type="button"
                onClick={next}
                disabled={active === options.length - 1}
                className="w-7 h-7 rounded-full bg-gray-100 hover:bg-gray-200 disabled:opacity-30 disabled:pointer-events-none flex items-center justify-center transition-colors"
                aria-label="Next pillar"
              >
                <ChevronDown size={15} className="text-gray-700" />
              </button>
            </div>
          </div>

          {/* 3D Wheel Drum Container */}
          <div
            ref={containerRef}
            className="w-full max-w-sm h-[320px] relative overflow-hidden rounded-3xl bg-white border border-gray-200 shadow-sm flex flex-col justify-center px-4 py-6 select-none"
            style={{ perspective: "1000px" }}
            onWheel={(e) => {
              if (Math.abs(e.deltaY) > 20) {
                if (e.deltaY > 0) next();
                else prev();
              }
            }}
            onPointerDown={(e) => {
              dragStartY.current = e.clientY;
            }}
            onPointerUp={(e) => {
              if (dragStartY.current === null) return;
              const diff = e.clientY - dragStartY.current;
              dragStartY.current = null;
              if (Math.abs(diff) > 30) {
                if (diff < 0) next();
                else prev();
              }
            }}
          >
            {/* Top & bottom gradient fades */}
            <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-white via-white/80 to-transparent pointer-events-none z-10" />
            <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-white via-white/80 to-transparent pointer-events-none z-10" />

            {/* Options List with 3D Wheel Transform */}
            <div className="flex flex-col gap-3 py-4">
              {options.map((option, index) => {
                const offset = index - active;
                const isSelected = index === active;
                const Icon = option.icon || (option.iconName ? ICON_MAP[option.iconName] : null);

                // 3D curved wheel math
                const rotateX = offset * -28;
                const translateZ = -Math.abs(offset) * 40;
                const opacity = Math.max(0.35, 1 - Math.abs(offset) * 0.42);
                const scale = Math.max(0.86, 1 - Math.abs(offset) * 0.08);

                return (
                  <button
                    key={option.id}
                    type="button"
                    onClick={() => selectOption(index)}
                    className={`w-full p-4 rounded-2xl flex items-center gap-3.5 text-left transition-all duration-300 transform-gpu cursor-pointer ${
                      isSelected
                        ? "bg-gradient-to-r from-[#5C0F26] to-[#7A1534] text-white shadow-xl shadow-[#5C0F26]/20 border border-pink-500/20"
                        : "bg-gray-50/80 text-gray-700 hover:bg-gray-100 border border-gray-200/60"
                    }`}
                    style={{
                      transform: `rotateX(${rotateX}deg) translateZ(${translateZ}px) scale(${scale})`,
                      opacity,
                    }}
                  >
                    {Icon && (
                      <div
                        className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-colors ${
                          isSelected ? "bg-white/20 text-white" : "bg-white text-[#5C0F26] border border-[#5C0F26]/10"
                        }`}
                      >
                        <Icon size={20} />
                      </div>
                    )}
                    <div className="min-w-0 flex-1">
                      <p className={`font-display font-bold text-sm truncate ${isSelected ? "text-white" : "text-gray-900"}`}>
                        {option.title}
                      </p>
                      {option.tag && (
                        <p className={`text-[11px] truncate font-medium ${isSelected ? "text-pink-200" : "text-gray-400"}`}>
                          {option.tag}
                        </p>
                      )}
                    </div>
                    {isSelected && (
                      <div className="w-2 h-2 rounded-full bg-pink-400 animate-pulse shrink-0" />
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Right Column: Active Pillar Showcase Card */}
        <div className="lg:col-span-7">
          <div className="bg-white border border-gray-200 rounded-3xl p-8 sm:p-10 shadow-lg relative overflow-hidden transition-all duration-300">
            {/* Ambient background glow */}
            <div
              className="absolute -right-20 -bottom-20 w-64 h-64 rounded-full pointer-events-none blur-3xl opacity-10"
              style={{ background: "#E8435A" }}
            />

            <div className="flex items-center justify-between mb-6">
              {ActiveIcon && (
                <div className="w-14 h-14 rounded-2xl bg-[#FDF4F6] border border-[#5C0F26]/15 flex items-center justify-center text-[#5C0F26]">
                  <ActiveIcon size={26} />
                </div>
              )}
              {activeItem.metric && (
                <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#FDF4F6] text-[#5C0F26] border border-[#5C0F26]/15">
                  {activeItem.metric}
                </span>
              )}
            </div>

            <h3 className="font-display font-black text-2xl sm:text-3xl text-gray-900 tracking-tight mb-3">
              {activeItem.title}
            </h3>

            <p className="text-base sm:text-lg text-gray-600 leading-relaxed mb-6">
              {activeItem.desc}
            </p>

            <div className="pt-6 border-t border-gray-100 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-2 text-xs font-semibold text-gray-500">
                <CheckCircle2 size={16} className="text-[#5C0F26]" />
                <span>Verified in production LLM environments</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-bold text-[#5C0F26]">
                <span>Pillar {active + 1} of {options.length}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
