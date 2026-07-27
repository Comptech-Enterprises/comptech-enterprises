"use client";

import { useEffect, useRef } from "react";

interface NeuralFieldProps {
  /** rgb triple for nodes/lines, e.g. "92, 15, 38" (burgundy) or "255,255,255" */
  color?: string;
  /** approximate node count at 1280px width; scales with area */
  density?: number;
  /** overall opacity of the whole layer (0–1) */
  opacity?: number;
  /** max px distance to draw a connecting line */
  linkDistance?: number;
  /** draw lines/links to the mouse cursor */
  interactive?: boolean;
  className?: string;
}

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
  r: number;
}

export function NeuralField({
  color = "92, 15, 38",
  density = 46,
  opacity = 0.5,
  linkDistance = 130,
  interactive = true,
  className = "",
}: NeuralFieldProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouse = useRef({ x: -9999, y: -9999, active: false });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let width = 0;
    let height = 0;
    let dpr = 1;
    let nodes: Node[] = [];
    let raf = 0;
    let running = false;

    const buildNodes = () => {
      const area = width * height;
      const base = (density * area) / (1280 * 720);
      const count = Math.max(10, Math.min(80, Math.round(base)));
      nodes = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
        r: Math.random() * 1.6 + 1,
      }));
    };

    const resize = () => {
      const parent = canvas.parentElement;
      if (!parent) return;
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = parent.clientWidth;
      height = parent.clientHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      buildNodes();
    };

    const drawStatic = () => {
      // one non-animated frame for reduced-motion users
      ctx.clearRect(0, 0, width, height);
      drawLinks();
      drawNodes(false);
    };

    const drawLinks = () => {
      for (let i = 0; i < nodes.length; i++) {
        const a = nodes[i];
        for (let j = i + 1; j < nodes.length; j++) {
          const b = nodes[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.hypot(dx, dy);
          if (dist < linkDistance) {
            const alpha = (1 - dist / linkDistance) * 0.5 * opacity;
            ctx.strokeStyle = `rgba(${color}, ${alpha})`;
            ctx.lineWidth = 0.8;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
        if (interactive && mouse.current.active) {
          const dx = a.x - mouse.current.x;
          const dy = a.y - mouse.current.y;
          const dist = Math.hypot(dx, dy);
          if (dist < linkDistance * 1.3) {
            const alpha = (1 - dist / (linkDistance * 1.3)) * 0.6 * opacity;
            ctx.strokeStyle = `rgba(${color}, ${alpha})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(mouse.current.x, mouse.current.y);
            ctx.stroke();
          }
        }
      }
    };

    const drawNodes = (move: boolean) => {
      for (const n of nodes) {
        if (move) {
          n.x += n.vx;
          n.y += n.vy;
          if (n.x < 0 || n.x > width) n.vx *= -1;
          if (n.y < 0 || n.y > height) n.vy *= -1;
          n.x = Math.max(0, Math.min(width, n.x));
          n.y = Math.max(0, Math.min(height, n.y));
        }
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${color}, ${0.9 * opacity})`;
        ctx.fill();
      }
    };

    const frame = () => {
      ctx.clearRect(0, 0, width, height);
      drawLinks();
      drawNodes(true);
      raf = requestAnimationFrame(frame);
    };

    const start = () => {
      if (running || reduce) return;
      running = true;
      raf = requestAnimationFrame(frame);
    };
    const stop = () => {
      running = false;
      cancelAnimationFrame(raf);
    };

    const onMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.current = { x: e.clientX - rect.left, y: e.clientY - rect.top, active: true };
    };
    const onLeave = () => {
      mouse.current.active = false;
    };

    resize();
    if (reduce) {
      drawStatic();
    } else {
      start();
    }

    window.addEventListener("resize", resize);
    if (interactive) {
      canvas.addEventListener("mousemove", onMove);
      canvas.addEventListener("mouseleave", onLeave);
    }

    // Pause when scrolled off-screen (perf) — lets us run many instances cheaply.
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) start();
        else stop();
      },
      { threshold: 0 }
    );
    io.observe(canvas);

    return () => {
      stop();
      io.disconnect();
      window.removeEventListener("resize", resize);
      canvas.removeEventListener("mousemove", onMove);
      canvas.removeEventListener("mouseleave", onLeave);
    };
  }, [color, density, opacity, linkDistance, interactive]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className={`block w-full h-full pointer-events-none ${className}`}
    />
  );
}
