"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ArrowRight } from "lucide-react";

interface SocialMediaHeroProps {
  onBookLiveDemo?: () => void;
}

export function SocialMediaHero({ onBookLiveDemo }: SocialMediaHeroProps = {}) {
  const path1Ref = useRef<SVGPathElement>(null);
  const path2Ref = useRef<SVGPathElement>(null);
  const path3Ref = useRef<SVGPathElement>(null);

  const [stage, setStage] = useState<number>(0);
  const [showCanvasAndWaves, setShowCanvasAndWaves] = useState<boolean>(false);
  const [buttonsVisible, setButtonsVisible] = useState<boolean>(false);

  useEffect(() => {
    const t1 = setTimeout(() => {
      setStage(1);
    }, 850);

    const t2 = setTimeout(() => {
      setShowCanvasAndWaves(true);
    }, 1500);

    const t3 = setTimeout(() => {
      setStage(2);
    }, 1700);

    const t4 = setTimeout(() => {
      setButtonsVisible(true);
    }, 2100);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
    };
  }, []);

  return (
    <section
      id="social-media-agent-hero"
      className="relative overflow-hidden w-full max-w-full min-h-[92vh] sm:min-h-screen flex flex-col justify-between items-center bg-white pt-24 sm:pt-28 pb-8 sm:pb-12"
      aria-label="Social Media AI Agent Hero"
    >
      {/* Ambient Gradient Blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute top-1/6 -left-16 sm:-left-20 w-[280px] sm:w-[550px] h-[280px] sm:h-[550px] rounded-full blur-3xl opacity-20"
          style={{ background: "#E8435A" }}
        />
        <div
          className="absolute bottom-1/4 -right-12 sm:right-0 w-[260px] sm:w-[450px] h-[260px] sm:h-[450px] rounded-full blur-3xl opacity-15"
          style={{ background: "#7C3AED" }}
        />
      </div>

      {/* Mobile SVG Wave Lines */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none z-1 transition-opacity duration-1000 block md:hidden overflow-hidden"
        style={{ opacity: showCanvasAndWaves ? 0.2 : 0 }}
        viewBox="0 0 1080 1920"
        preserveAspectRatio="none"
        fill="none"
      >
        <motion.path
          d="M 200,-50 C 900,450 100,1200 650,1950"
          stroke="#E8435A"
          strokeWidth="3.5"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={showCanvasAndWaves ? { pathLength: 1 } : { pathLength: 0 }}
          transition={{ duration: 1.4, ease: [0.42, 0, 0.58, 1] }}
        />
        <motion.path
          d="M 900,-50 C 150,550 950,1300 400,1950"
          stroke="#8B5CF6"
          strokeWidth="3"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={showCanvasAndWaves ? { pathLength: 1 } : { pathLength: 0 }}
          transition={{ duration: 1.2, delay: 0.15, ease: [0.42, 0, 0.58, 1] }}
        />
        <motion.path
          d="M 540,-50 C 100,500 1000,1150 500,1950"
          stroke="#5C0F26"
          strokeWidth="2.5"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={showCanvasAndWaves ? { pathLength: 1 } : { pathLength: 0 }}
          transition={{ duration: 1.0, delay: 0.3, ease: [0.42, 0, 0.58, 1] }}
        />
      </svg>

      {/* Desktop SVG Wave Lines */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none z-1 transition-opacity duration-1000 hidden md:block overflow-hidden"
        style={{ opacity: showCanvasAndWaves ? 0.45 : 0 }}
        viewBox="0 0 1920 1080"
        preserveAspectRatio="none"
        fill="none"
      >
        <motion.path
          ref={path1Ref}
          d="M -100,540 C 350,150 650,900 960,540 C 1270,180 1570,930 2020,540"
          stroke="#E8435A"
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
          stroke="#5C0F26"
          strokeWidth="4"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={showCanvasAndWaves ? { pathLength: 1 } : { pathLength: 0 }}
          transition={{ duration: 1.0, delay: 0.3, ease: [0.42, 0, 0.58, 1] }}
        />
      </svg>

      {/* Bottom Fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32 sm:h-40 pointer-events-none z-10"
        style={{
          background:
            "linear-gradient(to bottom, transparent 0%, rgba(248,250,252,0.8) 70%, #f8fafc 100%)",
        }}
      />

      {/* Main Storytelling Content */}
      <div className="relative z-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center justify-center my-auto w-full">
        <AnimatePresence mode="wait">
          {/* STEP 1 */}
          {stage === 0 && (
            <motion.div
              key="step-1"
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="px-2 sm:px-4"
            >
              <h1
                className="font-display font-extrabold text-gray-900 tracking-tight"
                style={{
                  fontSize: "clamp(2rem, 6.5vw, 5.2rem)",
                  letterSpacing: "-0.03em",
                  lineHeight: 1.12,
                }}
              >
                From raw ideas
              </h1>
            </motion.div>
          )}

          {/* STEP 2 */}
          {stage === 1 && (
            <motion.div
              key="step-2"
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="px-2 sm:px-4"
            >
              <h1
                className="font-display font-extrabold text-gray-900 tracking-tight"
                style={{
                  fontSize: "clamp(2rem, 6.5vw, 5.2rem)",
                  letterSpacing: "-0.03em",
                  lineHeight: 1.12,
                }}
              >
                to viral engagement,
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
              className="flex flex-col items-center w-full"
            >
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="font-display font-extrabold text-gray-900 tracking-tight max-w-4xl px-2 sm:px-4"
                style={{
                  fontSize: "clamp(1.9rem, 5.2vw, 4.5rem)",
                  letterSpacing: "-0.03em",
                  lineHeight: 1.12,
                }}
              >
                From raw ideas to viral engagement —{" "}
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

              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.2 }}
                className="mt-4 sm:mt-6 text-gray-600 max-w-2xl text-sm sm:text-base lg:text-lg leading-relaxed font-normal px-4"
              >
                Our Social Media AI Agent creates on-brand content, monitors industry trends, schedules posts across channels, and replies to comments 24/7 — while you focus on growing your business.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{
                  opacity: buttonsVisible ? 1 : 0,
                  y: buttonsVisible ? 0 : 15,
                }}
                transition={{ duration: 0.35 }}
                className="mt-7 sm:mt-9"
              >
                <button
                  type="button"
                  onClick={onBookLiveDemo}
                  className="inline-flex items-center gap-2.5 rounded-2xl px-8 sm:px-9 py-3.5 sm:py-4 font-bold text-sm sm:text-base text-white shadow-xl hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer"
                  style={{
                    background: "linear-gradient(135deg, #5C0F26 0%, #E8435A 100%)",
                    boxShadow: "0 8px 30px rgba(92, 15, 38, 0.3)",
                  }}
                >
                  Book a Live Demo <ArrowRight size={17} />
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Scroll Indicator */}
      <div className="relative z-20 flex flex-col items-center gap-0 pointer-events-none mt-4 sm:mt-6">
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
              size={18}
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
