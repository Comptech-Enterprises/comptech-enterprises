"use client";

import React, { useEffect, useRef } from "react";

interface ShapeWavesProps {
  className?: string;
  shapeCountX?: number;
  shapeCountY?: number;
  baseColor?: string;
  hoverColor?: string;
  bgColor?: string;
  speed?: number;
  waveFrequency?: number;
  hoverRadius?: number;
}

export default function ShapeWaves({
  className = "",
  shapeCountX = 32,
  shapeCountY = 16,
  baseColor = "rgba(45, 10, 20, 0.4)",
  hoverColor = "#8A1237",
  bgColor = "#080709",
  speed = 1.2,
  waveFrequency = 0.08,
  hoverRadius = 180,
}: ShapeWavesProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef<{ x: number; y: number; active: boolean; targetActive: boolean }>({
    x: -1000,
    y: -1000,
    active: false,
    targetActive: false,
  });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = 0;
    let height = 0;
    let time = 0;

    const resize = () => {
      const parent = canvas.parentElement;
      if (!parent) return;
      const dpr = window.devicePixelRatio || 1;
      width = parent.clientWidth;
      height = parent.clientHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    resize();
    window.addEventListener("resize", resize);

    const onPointerMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current.x = e.clientX - rect.left;
      mouseRef.current.y = e.clientY - rect.top;
      mouseRef.current.targetActive = true;
    };

    const onPointerLeave = () => {
      mouseRef.current.targetActive = false;
    };

    const parent = canvas.parentElement;
    if (parent) {
      parent.addEventListener("mousemove", onPointerMove);
      parent.addEventListener("mouseleave", onPointerLeave);
    }

    let mouseIntensity = 0;

    const draw = () => {
      time += 0.02 * speed;
      mouseIntensity += ((mouseRef.current.targetActive ? 1 : 0) - mouseIntensity) * 0.08;

      ctx.fillStyle = bgColor;
      ctx.fillRect(0, 0, width, height);

      const cols = shapeCountX;
      const rows = shapeCountY;
      const cellW = width / cols;
      const cellH = height / rows;

      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          const x = i * cellW + cellW / 2;
          const y = j * cellH + cellH / 2;

          // Rolling wave calculation
          const wave = Math.sin(x * waveFrequency + time) * Math.cos(y * waveFrequency + time * 0.8);
          const normalizedWave = (wave + 1) / 2;

          // Proximity to mouse
          const dx = x - mouseRef.current.x;
          const dy = y - mouseRef.current.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const mouseFactor = Math.max(0, 1 - dist / hoverRadius) * mouseIntensity;

          // Blend colors from dark to maroon / red
          const size = (cellW * 0.28 + normalizedWave * cellW * 0.22) * (1 + mouseFactor * 0.45);
          const alpha = 0.15 + normalizedWave * 0.35 + mouseFactor * 0.55;

          ctx.save();
          ctx.translate(x, y);
          ctx.rotate(time * 0.5 + (i + j) * 0.1);

          if (mouseFactor > 0.05) {
            // Illuminated hover state: rich burgundy / maroon / glowing pink
            const r = Math.round(92 + mouseFactor * 140);
            const g = Math.round(15 + mouseFactor * 52);
            const b = Math.round(38 + mouseFactor * 52);
            ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${Math.min(1, alpha)})`;
            ctx.strokeStyle = `rgba(232, 67, 90, ${Math.min(0.9, mouseFactor * 0.8)})`;
            ctx.lineWidth = 1.2;
          } else {
            // Base state: dark subtle shape wave
            ctx.fillStyle = `rgba(40, 12, 22, ${alpha * 0.6})`;
            ctx.strokeStyle = `rgba(92, 15, 38, ${alpha * 0.4})`;
            ctx.lineWidth = 0.8;
          }

          // Cycle geometric shapes: triangle, circle, square, diamond
          const shapeType = (i + j) % 4;
          ctx.beginPath();
          if (shapeType === 0) {
            // Triangle
            ctx.moveTo(0, -size);
            ctx.lineTo(size * 0.86, size * 0.5);
            ctx.lineTo(-size * 0.86, size * 0.5);
            ctx.closePath();
          } else if (shapeType === 1) {
            // Circle
            ctx.arc(0, 0, size * 0.65, 0, Math.PI * 2);
          } else if (shapeType === 2) {
            // Square
            ctx.rect(-size * 0.55, -size * 0.55, size * 1.1, size * 1.1);
          } else {
            // Diamond
            ctx.moveTo(0, -size * 0.8);
            ctx.lineTo(size * 0.8, 0);
            ctx.lineTo(0, size * 0.8);
            ctx.lineTo(-size * 0.8, 0);
            ctx.closePath();
          }

          ctx.fill();
          ctx.stroke();
          ctx.restore();
        }
      }

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", resize);
      if (parent) {
        parent.removeEventListener("mousemove", onPointerMove);
        parent.removeEventListener("mouseleave", onPointerLeave);
      }
    };
  }, [bgColor, baseColor, hoverColor, hoverRadius, shapeCountX, shapeCountY, speed, waveFrequency]);

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 pointer-events-none w-full h-full ${className}`}
      aria-hidden="true"
    />
  );
}
