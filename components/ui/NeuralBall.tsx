"use client";

import { useEffect, useRef } from "react";

interface NeuralBallProps {
  /** rendered size in px (square) */
  size?: number;
  /** node/line color as hex, e.g. "#8B5CF6" */
  accent?: string;
  /** brighter hex for the core glow + highlights */
  light?: string;
  /** number of nodes on the sphere */
  nodes?: number;
  className?: string;
}

interface P3 {
  x: number;
  y: number;
  z: number;
  /** distance from centre along the axis (0=core, 1=surface) for ripple timing */
  band: number;
  /** per-node phase offset so nodes breathe/beat slightly out of sync */
  ph: number;
  /** per-node radial amplitude */
  amp: number;
}

function hexToRgb(hex: string): string {
  const h = hex.replace("#", "");
  const n = parseInt(h.length === 3 ? h.split("").map((c) => c + c).join("") : h, 16);
  return `${(n >> 16) & 255}, ${(n >> 8) & 255}, ${n & 255}`;
}

/**
 * A slowly rotating 3D sphere built from interconnected neural nodes.
 * Points are distributed with a Fibonacci sphere; edges connect close
 * neighbours and are drawn with depth-based opacity so the ball reads as 3D.
 * Canvas-based, pauses off-screen, honours prefers-reduced-motion.
 */
export function NeuralBall({
  size = 300,
  accent = "#8B5CF6",
  light = "#C4B5FD",
  nodes = 96,
  className = "",
}: NeuralBallProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const rgb = hexToRgb(accent);
    const rgbLight = hexToRgb(light);
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = size * dpr;
    canvas.height = size * dpr;
    canvas.style.width = `${size}px`;
    canvas.style.height = `${size}px`;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    const cx = size / 2;
    const cy = size / 2;
    const R = size * 0.38;
    const persp = 2.4;

    // Fibonacci sphere — evenly distributed unit vectors.
    const pts: P3[] = [];
    const golden = Math.PI * (3 - Math.sqrt(5));
    for (let i = 0; i < nodes; i++) {
      const y = 1 - (i / (nodes - 1)) * 2;
      const r = Math.sqrt(Math.max(0, 1 - y * y));
      const theta = golden * i;
      pts.push({
        x: Math.cos(theta) * r,
        y,
        z: Math.sin(theta) * r,
        band: (y + 1) / 2, // top→bottom, used to stagger the ripple
        ph: Math.random() * Math.PI * 2,
        amp: 0.7 + Math.random() * 0.6,
      });
    }

    // Precompute edges between near neighbours (stable connectivity).
    const edges: [number, number][] = [];
    const linkCos = Math.cos(0.5); // connect if angular distance < ~0.5 rad
    for (let i = 0; i < pts.length; i++) {
      for (let j = i + 1; j < pts.length; j++) {
        const dot = pts[i].x * pts[j].x + pts[i].y * pts[j].y + pts[i].z * pts[j].z;
        if (dot > linkCos) edges.push([i, j]);
      }
    }

    // A few ambient sparks orbiting outside the ball.
    const sparks = Array.from({ length: 4 }, (_, i) => ({
      a: (i / 4) * Math.PI * 2,
      rad: R * (1.4 + Math.random() * 0.5),
      speed: 0.002 + Math.random() * 0.003,
      size: 1.5 + Math.random() * 2,
    }));

    const tiltX = 0.42;
    let angleY = 0;
    let raf = 0;
    let running = false;

    // heartbeat state
    const BEAT_MS = 2600; // one full beat cycle
    let beat = 0; // 0..1 pulse envelope for the current frame
    let nowMs = 0; // current timestamp, for per-node motion

    // Double-thump heartbeat envelope over a 0..1 phase.
    const heartbeat = (phase: number) => {
      const bump = (c: number, w: number) => Math.exp(-((phase - c) ** 2) / (w * w));
      return Math.min(1, bump(0.12, 0.06) + 0.55 * bump(0.32, 0.06));
    };

    // Each node sits on a slightly different radius that breathes constantly and
    // kicks outward on the beat — with a delay down the sphere so the pulse
    // ripples through the nodes rather than moving them all as one.
    const nodeRadius = (p: P3) => {
      const breath = Math.sin(nowMs * 0.0016 + p.ph) * 0.045;
      const delayed = heartbeat((((nowMs % BEAT_MS) / BEAT_MS) - p.band * 0.12 + 1) % 1);
      const kick = delayed * p.amp * 0.16;
      return R * (1 + breath + kick);
    };

    const project = (p: P3, rNode: number) => {
      // rotate around Y then tilt around X
      const cosY = Math.cos(angleY);
      const sinY = Math.sin(angleY);
      const x1 = p.x * cosY - p.z * sinY;
      const z1 = p.x * sinY + p.z * cosY;
      const cosX = Math.cos(tiltX);
      const sinX = Math.sin(tiltX);
      const y1 = p.y * cosX - z1 * sinX;
      const z2 = p.y * sinX + z1 * cosX;
      const scale = persp / (persp - z2);
      return {
        sx: cx + x1 * rNode * scale,
        sy: cy + y1 * rNode * scale,
        z: z2,
        scale,
      };
    };

    const draw = () => {
      ctx.clearRect(0, 0, size, size);

      // soft core glow — brightens with each beat. Kept fully inside the canvas
      // (radius ≤ half the width) so it fades to nothing before the edges and
      // never leaves a visible square seam against the section background.
      // capped at ~half the canvas so it always fades out before the edges
      const glowR = Math.min(R * (1.35 + beat * 0.1), size * 0.49);
      const glow = ctx.createRadialGradient(cx, cy, 0, cx, cy, glowR);
      glow.addColorStop(0, `rgba(${rgbLight}, ${0.3 + beat * 0.28})`);
      glow.addColorStop(0.55, `rgba(${rgb}, ${0.1 + beat * 0.12})`);
      glow.addColorStop(1, `rgba(${rgb}, 0)`);
      ctx.fillStyle = glow;
      ctx.fillRect(0, 0, size, size);

      const proj = pts.map((p) => project(p, nodeRadius(p)));

      // edges — depth-faded
      for (const [i, j] of edges) {
        const a = proj[i];
        const b = proj[j];
        const depth = (a.z + b.z) / 2; // -1..1
        const alpha = (0.06 + ((depth + 1) / 2) * 0.32);
        ctx.strokeStyle = `rgba(${rgb}, ${alpha})`;
        ctx.lineWidth = 0.6 + ((depth + 1) / 2) * 0.7;
        ctx.beginPath();
        ctx.moveTo(a.sx, a.sy);
        ctx.lineTo(b.sx, b.sy);
        ctx.stroke();
      }

      // nodes — back to front
      const order = proj.map((_, i) => i).sort((p, q) => proj[p].z - proj[q].z);
      for (const i of order) {
        const p = proj[i];
        const depth = (p.z + 1) / 2; // 0..1
        const r = (1.1 + depth * 2.2) * p.scale;
        // glow for front-facing nodes
        if (depth > 0.55) {
          const g = ctx.createRadialGradient(p.sx, p.sy, 0, p.sx, p.sy, r * 4);
          g.addColorStop(0, `rgba(${rgbLight}, ${0.5 * depth})`);
          g.addColorStop(1, `rgba(${rgb}, 0)`);
          ctx.fillStyle = g;
          ctx.beginPath();
          ctx.arc(p.sx, p.sy, r * 4, 0, Math.PI * 2);
          ctx.fill();
        }
        ctx.beginPath();
        ctx.arc(p.sx, p.sy, r, 0, Math.PI * 2);
        ctx.fillStyle = depth > 0.7 ? `rgba(${rgbLight}, ${0.55 + depth * 0.4})` : `rgba(${rgb}, ${0.35 + depth * 0.5})`;
        ctx.fill();
      }

      // ambient orbiting sparks
      for (const s of sparks) {
        s.a += s.speed;
        const sx = cx + Math.cos(s.a) * s.rad;
        const sy = cy + Math.sin(s.a) * s.rad * 0.72;
        const g = ctx.createRadialGradient(sx, sy, 0, sx, sy, s.size * 3);
        g.addColorStop(0, `rgba(${rgbLight}, 0.9)`);
        g.addColorStop(1, `rgba(${rgb}, 0)`);
        ctx.fillStyle = g;
        ctx.beginPath();
        ctx.arc(sx, sy, s.size * 3, 0, Math.PI * 2);
        ctx.fill();
        ctx.beginPath();
        ctx.arc(sx, sy, s.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${rgbLight}, 0.95)`;
        ctx.fill();
      }
    };

    const frame = (now: number) => {
      angleY += 0.0032;
      nowMs = now;
      beat = heartbeat((now % BEAT_MS) / BEAT_MS);
      draw();
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

    if (reduce) draw();
    else start();

    const io = new IntersectionObserver(
      ([entry]) => (entry.isIntersecting ? start() : stop()),
      { threshold: 0 }
    );
    io.observe(canvas);

    return () => {
      stop();
      io.disconnect();
    };
  }, [size, accent, light, nodes]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className={`block ${className}`}
      style={{ width: size, maxWidth: "100%", height: "auto", aspectRatio: "1 / 1" }}
    />
  );
}
