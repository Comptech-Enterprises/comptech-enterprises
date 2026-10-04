"use client";

import React, { ReactNode } from "react";
import "./LogoLoop.css";

interface LogoLoopProps {
  children?: ReactNode;
  items?: ReactNode[];
  speed?: number; // duration in seconds
  direction?: "left" | "right";
  pauseOnHover?: boolean;
  gap?: number;
  className?: string;
  repeat?: number;
}

export default function LogoLoop({
  children,
  items,
  speed = 28,
  direction = "left",
  pauseOnHover = true,
  gap = 24,
  className = "",
  repeat = 2,
}: LogoLoopProps) {
  const baseContent = items || React.Children.toArray(children);
  const content = Array.from({ length: repeat }).flatMap(() => baseContent);

  return (
    <div
      className={`logo-loop ${className}`}
      data-direction={direction}
      data-pause-on-hover={pauseOnHover}
      style={
        {
          "--loop-duration": `${speed}s`,
          "--loop-gap": `${gap}px`,
        } as React.CSSProperties
      }
    >
      <div className="logo-loop__wrapper">
        <div className="logo-loop__track">
          {content.map((item, index) => (
            <div key={`track1-${index}`} className="flex-shrink-0">
              {item}
            </div>
          ))}
        </div>
        <div className="logo-loop__track" aria-hidden="true">
          {content.map((item, index) => (
            <div key={`track2-${index}`} className="flex-shrink-0">
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
