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
  /** react to the cursor: nearby nodes light up and link to it */
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

    // cursor influence radius + how far a node is pulled toward the cursor
    const influence = linkDistance * 1.5;
    const maxPull = 16;

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

    // Displaced draw position for a node — gently offset toward the cursor.
    // Non-accumulating, so nodes always spring back when the cursor leaves.
    const displaced = (n: Node): { x: number; y: number; boost: number } => {
      const m = mouse.current;
      if (!interactive || !m.active) return { x: n.x, y: n.y, boost: 0 };
      const dx = m.x - n.x;
      const dy = m.y - n.y;
      const d = Math.hypot(dx, dy) || 1;
      if (d >= influence) return { x: n.x, y: n.y, boost: 0 };
      const t = 1 - d / influence; // 0..1, closer = higher
      const pull = t * maxPull;
      return { x: n.x + (dx / d) * pull, y: n.y + (dy / d) * pull, boost: t };
    };

    const drawFrame = (move: boolean) => {
      ctx.clearRect(0, 0, width, height);
      const m = mouse.current;

      // advance motion
      if (move) {
        for (const n of nodes) {
          n.x += n.vx;
          n.y += n.vy;
          if (n.x < 0 || n.x > width) n.vx *= -1;
          if (n.y < 0 || n.y > height) n.vy *= -1;
          n.x = Math.max(0, Math.min(width, n.x));
          n.y = Math.max(0, Math.min(height, n.y));
        }
      }

      // cache displaced positions once per frame
      const pts = nodes.map(displaced);

      // node-to-node links
      for (let i = 0; i < nodes.length; i++) {
        const a = pts[i];
        for (let j = i + 1; j < nodes.length; j++) {
          const b = pts[j];
          const dist = Math.hypot(a.x - b.x, a.y - b.y);
          if (dist < linkDistance) {
            const near = Math.max(a.boost, b.boost);
            const alpha = (1 - dist / linkDistance) * (0.5 + near * 0.5) * opacity;
            ctx.strokeStyle = `rgba(${color}, ${alpha})`;
            ctx.lineWidth = 0.8 + near * 0.6;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }

      // links from nearby nodes to the cursor
      if (interactive && m.active) {
        for (let i = 0; i < pts.length; i++) {
          const p = pts[i];
          if (p.boost <= 0) continue;
          const alpha = p.boost * 0.8 * opacity;
          ctx.strokeStyle = `rgba(${color}, ${alpha})`;
          ctx.lineWidth = 1 + p.boost;
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(m.x, m.y);
          ctx.stroke();
        }
      }

      // nodes (with glow for cursor-lit ones)
      for (let i = 0; i < nodes.length; i++) {
        const p = pts[i];
        const r = nodes[i].r * (1 + p.boost * 1.8);
        if (p.boost > 0.12) {
          const g = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, r * 5);
          g.addColorStop(0, `rgba(${color}, ${0.45 * p.boost * opacity})`);
          g.addColorStop(1, `rgba(${color}, 0)`);
          ctx.fillStyle = g;
          ctx.beginPath();
          ctx.arc(p.x, p.y, r * 5, 0, Math.PI * 2);
          ctx.fill();
        }
        ctx.beginPath();
        ctx.arc(p.x, p.y, r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${color}, ${Math.min((0.9 + p.boost * 0.7) * opacity, 1)})`;
        ctx.fill();
      }
    };

    const frame = () => {
      drawFrame(true);
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

    // Track the cursor at the window level so it works even though the canvas
    // is pointer-events-none. Only "active" while the cursor is over this layer.
    const onMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      mouse.current = {
        x,
        y,
        active: x >= 0 && x <= rect.width && y >= 0 && y <= rect.height,
      };
    };

    resize();
    if (reduce) {
      drawFrame(false);
    } else {
      start();
    }

    window.addEventListener("resize", resize);
    if (interactive) window.addEventListener("mousemove", onMove, { passive: true });

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
      window.removeEventListener("mousemove", onMove);
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
