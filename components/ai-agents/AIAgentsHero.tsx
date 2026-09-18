"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ArrowRight, Target, Sparkles } from "lucide-react";

interface AIAgentsHeroProps {
  onBookLiveDemo?: () => void;
}

export function AIAgentsHero({ onBookLiveDemo }: AIAgentsHeroProps = {}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const path1Ref = useRef<SVGPathElement>(null);
  const path2Ref = useRef<SVGPathElement>(null);
  const path3Ref = useRef<SVGPathElement>(null);

  // Stage:
  // 0 = Step 1: "From cold list"
  // 1 = Step 2: "to warm conversation,"
  // 2 = Final: "From cold list to warm conversation — fully automated."
  const [stage, setStage] = useState<number>(0);
  const [showCanvasAndWaves, setShowCanvasAndWaves] = useState<boolean>(false);
  const [buttonsVisible, setButtonsVisible] = useState<boolean>(false);

  // ── Animation Sequencer (Fast, responsive pacing) ──
  useEffect(() => {
    // Step 1: 0s -> 0.8s
    const t1 = setTimeout(() => {
      setStage(1); // switch to Step 2
    }, 850);

    // Step 2: 0.85s -> 1.7s
    const t2 = setTimeout(() => {
      setShowCanvasAndWaves(true);
    }, 1500);

    const t3 = setTimeout(() => {
      setStage(2); // final reveal
    }, 1700);

    // Buttons appear right after final reveal
    const t4 = setTimeout(() => {
      setButtonsVisible(true);
    }, 2200);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
    };
  }, []);

  // ── Canvas Neural Network Simulation (Exact parameters from homepage animation) ──
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    // Deterministic pseudo-random generator
    let seed = 7766;
    function random() {
      const x = Math.sin(seed++) * 10000;
      return x - Math.floor(x);
    }

    const numNodes = 70;
    const colors = ["29, 78, 216", "139, 92, 246", "232, 67, 90", "75, 85, 99"];
    interface SimNode {
      baseX: number;
      baseY: number;
      freqX: number;
      freqY: number;
      ampX: number;
      ampY: number;
      phaseX: number;
      phaseY: number;
      r: number;
      color: string;
    }
    const nodes: SimNode[] = [];

    for (let i = 0; i < numNodes; i++) {
      const kX = Math.floor(random() * 3) + 1;
      const kY = Math.floor(random() * 3) + 1;
      nodes.push({
        baseX: random() * 1920,
        baseY: random() * 1080,
        freqX: (kX * Math.PI) / 6,
        freqY: (kY * Math.PI) / 6,
        ampX: 60 + random() * 70,
        ampY: 60 + random() * 70,
        phaseX: random() * Math.PI * 2,
        phaseY: random() * Math.PI * 2,
        r: 2.2 + random() * 3.2,
        color: colors[Math.floor(random() * colors.length)],
      });
    }

    let startTime = performance.now();

    function renderLoop(now: number) {
      if (!ctx || !canvas) return;
      const elapsed = (now - startTime) / 1000;
      ctx.clearRect(0, 0, width, height);

      const scaleX = width / 1920;
      const scaleY = height / 1080;

      const pts = nodes.map((n) => {
        const x = (n.baseX + Math.sin(elapsed * 0.4 * n.freqX + n.phaseX) * n.ampX) * scaleX;
        const y = (n.baseY + Math.cos(elapsed * 0.4 * n.freqY + n.phaseY) * n.ampY) * scaleY;
        return { x, y, r: n.r * Math.min(scaleX, scaleY), color: n.color };
      });

      // Draw connections
      const linkDistance = 220 * Math.min(scaleX, scaleY);
      for (let i = 0; i < pts.length; i++) {
        const a = pts[i];
        for (let j = i + 1; j < pts.length; j++) {
          const b = pts[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.hypot(dx, dy);
          if (dist < linkDistance) {
            const alpha = (1 - dist / linkDistance) * 0.16;
            ctx.strokeStyle = `rgba(139, 92, 246, ${alpha})`;
            ctx.lineWidth = 0.9;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }

      // Draw nodes
      for (let i = 0; i < pts.length; i++) {
        const p = pts[i];
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${p.color}, 0.65)`;
        ctx.fill();
      }

      animId = requestAnimationFrame(renderLoop);
    }

    animId = requestAnimationFrame(renderLoop);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section
      id="sales-agent"
      className="relative overflow-hidden flex flex-col justify-center items-center bg-white"
      style={{ minHeight: "100vh", paddingTop: "var(--nav-height)" }}
      aria-label="Sales AI Agent Hero"
    >
      {/* ── 1. Gradient Mesh Blobs (Matches Homepage Hero) ── */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-1/4 -left-20 w-[550px] h-[550px] rounded-full blur-3xl opacity-20"
          style={{ background: "#5C0F26" }}
        />
        <div
          className="absolute bottom-1/4 right-0 w-[450px] h-[450px] rounded-full blur-3xl opacity-15"
          style={{ background: "#1D4ED8" }}
        />
      </div>

      {/* ── 2. Neural Canvas Network Background ── */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none transition-opacity duration-1000 z-0"
        style={{ opacity: showCanvasAndWaves ? 0.9 : 0 }}
      />

      {/* ── 3. SVG Fluid Flowing Glowing Waves ── */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none z-1 transition-opacity duration-1000"
        style={{ opacity: showCanvasAndWaves ? 0.45 : 0 }}
        viewBox="0 0 1920 1080"
        preserveAspectRatio="none"
        fill="none"
      >
        <motion.path
          ref={path1Ref}
          d="M -100,540 C 350,150 650,900 960,540 C 1270,180 1570,930 2020,540"
          stroke="#1D4ED8"
          strokeWidth="7"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={showCanvasAndWaves ? { pathLength: 1 } : { pathLength: 0 }}
          transition={{ duration: 1.4, ease: [0.42, 0, 0.58, 1] }}
        />
        <motion.path
          ref={path2Ref}
          d="M -100,640 C 450,950 750,50 1100,440 C 1450,830 1650,150 2020,440"
          stroke="#8B5CF6"
          strokeWidth="5"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={showCanvasAndWaves ? { pathLength: 1 } : { pathLength: 0 }}
          transition={{ duration: 1.2, delay: 0.15, ease: [0.42, 0, 0.58, 1] }}
        />
        <motion.path
          ref={path3Ref}
          d="M -100,440 C 250,350 550,950 800,640 C 1050,330 1350,50 2020,640"
          stroke="#E8435A"
          strokeWidth="4"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={showCanvasAndWaves ? { pathLength: 1 } : { pathLength: 0 }}
          transition={{ duration: 1.0, delay: 0.3, ease: [0.42, 0, 0.58, 1] }}
        />
      </svg>

      {/* ── 4. Bottom Fade to blend into sections below ── */}
      <div
        className="absolute bottom-0 left-0 right-0 h-40 pointer-events-none z-10"
        style={{
          background:
            "linear-gradient(to bottom, transparent 0%, rgba(248,250,252,0.8) 70%, #f8fafc 100%)",
        }}
      />

      {/* ── 5. Main Storytelling Typography Animation ── */}
      <div className="relative z-20 max-w-5xl mx-auto px-6 lg:px-8 text-center flex flex-col items-center justify-center my-auto py-12">
        <AnimatePresence mode="wait">
          {/* STEP 1 */}
          {stage === 0 && (
            <motion.div
              key="step-1"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="px-4"
            >
              <h1
                className="font-display font-extrabold text-gray-900 tracking-tight"
                style={{
                  fontSize: "clamp(2.5rem, 6.5vw, 5.5rem)",
                  letterSpacing: "-0.03em",
                  lineHeight: 1.1,
                }}
              >
                From cold list
              </h1>
            </motion.div>
          )}

          {/* STEP 2 */}
          {stage === 1 && (
            <motion.div
              key="step-2"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="px-4"
            >
              <h1
                className="font-display font-extrabold text-gray-900 tracking-tight"
                style={{
                  fontSize: "clamp(2.5rem, 6.5vw, 5.5rem)",
                  letterSpacing: "-0.03em",
                  lineHeight: 1.1,
                }}
              >
                to warm conversation,
              </h1>
            </motion.div>
          )}

          {/* STEP 3 (FINAL REVEAL) */}
          {stage === 2 && (
            <motion.div
              key="step-3"
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col items-center"
            >
              {/* Main Headline */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="font-display font-extrabold text-gray-900 tracking-tight max-w-4xl"
                style={{
                  fontSize: "clamp(2.4rem, 5.5vw, 4.8rem)",
                  letterSpacing: "-0.03em",
                  lineHeight: 1.08,
                }}
              >
                From cold list to warm conversation —{" "}
                <span
                  className="text-transparent bg-clip-text"
                  style={{
                    backgroundImage:
                      "linear-gradient(135deg, #5C0F26 0%, #E8435A 50%, #7C3AED 100%)",
                  }}
                >
                  fully automated
                </span>
              </motion.h1>

              {/* Subtitle */}
              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.2 }}
                className="mt-6 text-gray-600 max-w-2xl text-base sm:text-lg lg:text-xl leading-relaxed font-normal"
              >
                Our Sales AI agent handles the entire top-of-funnel pipeline: prospecting,
                research, outreach, and follow-ups — while you focus on closing deals.
              </motion.p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* ── 6. Bottom Action Button ── */}
      <div
        className="relative z-20 flex justify-center px-6 pb-20 transition-all duration-700"
        style={{
          opacity: buttonsVisible ? 1 : 0,
          transform: buttonsVisible ? "translateY(0)" : "translateY(16px)",
          pointerEvents: buttonsVisible ? "auto" : "none",
        }}
      >
        <button
          type="button"
          onClick={onBookLiveDemo}
          className="inline-flex items-center gap-2.5 rounded-2xl px-9 py-4 font-bold text-base text-white shadow-xl hover:scale-105 transition-all duration-200 cursor-pointer"
          style={{
            background: "linear-gradient(135deg, #5C0F26 0%, #E8435A 100%)",
            boxShadow: "0 8px 30px rgba(92, 15, 38, 0.3)",
          }}
        >
          Book a Live Demo <ArrowRight size={17} />
        </button>
      </div>

      {/* ── 7. Scroll Indicator (Matches Homepage Hero) ── */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-0 pointer-events-none">
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            animate={{ opacity: [0, 1, 0] }}
            transition={{
              duration: 1.6,
              repeat: Infinity,
              delay: i * 0.3,
              ease: "easeInOut",
            }}
          >
            <ChevronDown
              size={20}
              strokeWidth={2.5}
              style={{ color: "#5C0F26" }}
              className="-mt-1.5"
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
