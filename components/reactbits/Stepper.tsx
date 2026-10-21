"use client";

import React, { useState } from "react";
import { ChevronLeft, ChevronRight, Check, Sparkles } from "lucide-react";

export interface StepItem {
  id: string | number;
  title: string;
  category?: string;
  content: string;
  highlights?: string[];
}

interface StepperProps {
  steps: StepItem[];
  initialStep?: number;
  onStepChange?: (stepIndex: number) => void;
  className?: string;
}

export default function Stepper({
  steps,
  initialStep = 0,
  onStepChange,
  className = "",
}: StepperProps) {
  const [current, setCurrent] = useState(initialStep);

  const goTo = (index: number) => {
    const clamped = Math.max(0, Math.min(steps.length - 1, index));
    setCurrent(clamped);
    onStepChange?.(clamped);
  };

  const next = () => goTo(current + 1);
  const prev = () => goTo(current - 1);

  const step = steps[current] || steps[0];

  return (
    <div className={`w-full max-w-4xl mx-auto ${className}`}>
      {/* Step Indicator Rail */}
      <div className="relative mb-8 px-2 sm:px-6">
        {/* Background connector track */}
        <div className="absolute top-1/2 left-6 right-6 -translate-y-1/2 h-1 bg-gray-200 rounded-full z-0" />

        {/* Active progress fill */}
        <div
          className="absolute top-1/2 left-6 -translate-y-1/2 h-1 bg-gradient-to-r from-[#5C0F26] to-[#E8435A] rounded-full z-0 transition-all duration-500 ease-out"
          style={{
            width: `calc(${(current / (steps.length - 1)) * 100}% * (100% - 48px) / 100)`,
          }}
        />

        {/* Step Nodes */}
        <div className="relative z-10 flex items-center justify-between">
          {steps.map((item, index) => {
            const isCompleted = index < current;
            const isActive = index === current;

            return (
              <button
                key={item.id}
                type="button"
                onClick={() => goTo(index)}
                className="group relative flex flex-col items-center focus:outline-none"
                aria-label={`Step ${index + 1}: ${item.title}`}
                aria-current={isActive ? "step" : undefined}
              >
                <div
                  className={`w-9 h-9 sm:w-11 sm:h-11 rounded-full flex items-center justify-center font-display font-extrabold text-xs sm:text-sm transition-all duration-300 ${
                    isActive
                      ? "bg-[#5C0F26] text-white shadow-lg shadow-[#5C0F26]/30 scale-110 ring-4 ring-[#5C0F26]/15"
                      : isCompleted
                      ? "bg-[#5C0F26] text-white"
                      : "bg-white text-gray-400 border-2 border-gray-200 hover:border-gray-400"
                  }`}
                >
                  {isCompleted ? <Check size={16} /> : index + 1}
                </div>
                <span
                  className={`hidden md:block absolute top-12 text-[11px] font-bold text-center w-24 truncate transition-colors ${
                    isActive ? "text-[#5C0F26]" : "text-gray-400"
                  }`}
                >
                  {item.category || `Topic ${index + 1}`}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Step Content Card */}
      <div className="mt-12 bg-white border border-gray-200/90 rounded-3xl p-6 sm:p-10 shadow-lg relative overflow-hidden transition-all duration-300 min-h-[320px] flex flex-col justify-between">
        {/* Subtle decorative glow */}
        <div
          className="absolute -right-20 -top-20 w-64 h-64 rounded-full pointer-events-none blur-3xl opacity-10"
          style={{ background: "#E8435A" }}
        />

        <div>
          {/* Header pill */}
          <div className="flex items-center justify-between gap-3 mb-5">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-[#FDF4F6] text-[#5C0F26] border border-[#5C0F26]/10 uppercase tracking-wider">
              <Sparkles size={12} />
              {step.category || `Topic 0${current + 1}`}
            </span>
            <span className="text-xs font-semibold text-gray-400">
              Question {current + 1} of {steps.length}
            </span>
          </div>

          {/* Question / Title */}
          <h3 className="font-display font-extrabold text-xl sm:text-2xl text-gray-900 leading-snug mb-4">
            {step.title}
          </h3>

          {/* Answer Content */}
          <p className="text-base sm:text-lg text-gray-600 leading-relaxed mb-6">
            {step.content}
          </p>

          {/* Highlights */}
          {step.highlights && step.highlights.length > 0 && (
            <div className="grid sm:grid-cols-2 gap-2.5 pt-4 border-t border-gray-100 mb-4">
              {step.highlights.map((highlight, i) => (
                <div key={i} className="flex items-center gap-2 text-xs font-medium text-gray-700 bg-gray-50 px-3 py-2 rounded-xl border border-gray-100">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#E8435A]" />
                  <span>{highlight}</span>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Stepper Footer Controls */}
        <div className="pt-6 border-t border-gray-100 flex items-center justify-between gap-4 mt-4">
          <button
            type="button"
            onClick={prev}
            disabled={current === 0}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-gray-700 bg-gray-100 hover:bg-gray-200 disabled:opacity-30 disabled:pointer-events-none transition-all duration-200"
          >
            <ChevronLeft size={16} />
            <span>Previous</span>
          </button>

          <div className="flex items-center gap-1.5">
            {steps.map((_, i) => (
              <div
                key={i}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === current ? "w-6 bg-[#5C0F26]" : "w-1.5 bg-gray-200"
                }`}
              />
            ))}
          </div>

          {current < steps.length - 1 ? (
            <button
              type="button"
              onClick={next}
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-bold text-white bg-gradient-to-r from-[#5C0F26] to-[#E8435A] hover:scale-105 shadow-md shadow-[#5C0F26]/20 transition-all duration-200"
            >
              <span>Next Topic</span>
              <ChevronRight size={16} />
            </button>
          ) : (
            <a
              href="/contact#quote"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-bold text-white bg-gradient-to-r from-[#5C0F26] to-[#E8435A] hover:scale-105 shadow-md shadow-[#5C0F26]/20 transition-all duration-200"
            >
              <span>Get Your Audit</span>
              <Sparkles size={14} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
