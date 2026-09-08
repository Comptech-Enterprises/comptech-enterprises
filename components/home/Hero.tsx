"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronDown, ArrowRight } from "lucide-react";

export function Hero() {
  const [isMobile, setIsMobile] = useState(false);
  const [buttonsVisible, setButtonsVisible] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    const onEnded = () => setButtonsVisible(true);
    video.addEventListener("ended", onEnded);
    return () => video.removeEventListener("ended", onEnded);
  }, []);

  return (
    <section
      className="relative overflow-hidden"
      style={{ minHeight: "100vh", paddingTop: "var(--nav-height)" }}
      aria-label="Hero"
    >
      {/* Background animation video — plays once, stops on last frame */}
      <video
        ref={videoRef}
        key={isMobile ? "mobile" : "desktop"}
        autoPlay
        muted
        playsInline
        poster={isMobile ? "/hero-poster-mobile.jpg" : "/hero-poster.jpg"}
        className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none"
      >
        <source src={isMobile ? "/hero-bg-mobile.mp4" : "/hero-bg.mp4"} type="video/mp4" />
      </video>

      {/* Gradient mesh blobs for glass depth */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-[500px] h-[500px] rounded-full blur-3xl opacity-20" style={{ background: "#5C0F26" }} />
        <div className="absolute bottom-1/4 right-0 w-[400px] h-[400px] rounded-full blur-3xl opacity-15" style={{ background: "#1D4ED8" }} />
      </div>

      {/* Bottom fade — blends into pastel mesh */}
      <div
        className="absolute bottom-0 left-0 right-0 h-40 pointer-events-none"
        style={{ background: "linear-gradient(to bottom, transparent 0%, rgba(237,232,242,0.85) 70%, #ede8f2 100%)" }}
      />

      {/* Buttons — fade in after video ends */}
      <div
        className="absolute inset-0 z-10 flex items-end justify-center pb-24"
        style={{
          opacity: buttonsVisible ? 1 : 0,
          transform: buttonsVisible ? "translateY(0)" : "translateY(12px)",
          transition: "opacity 1s ease, transform 1s ease",
          pointerEvents: buttonsVisible ? "auto" : "none",
        }}
      >
        <div className="flex flex-wrap gap-4 justify-center px-6">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-xl px-7 py-3.5 font-semibold text-sm text-white transition-all duration-200 hover:-translate-y-px hover:brightness-110"
            style={{
              background: "rgba(92,15,38,0.75)",
              backdropFilter: "blur(16px)",
              WebkitBackdropFilter: "blur(16px)",
              border: "1px solid rgba(255,255,255,0.15)",
              boxShadow: "0 4px 24px rgba(92,15,38,0.35)",
            }}
          >
            Book a Free AI Audit <ArrowRight size={15} />
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-xl px-7 py-3.5 font-semibold text-sm text-white transition-all duration-200 hover:-translate-y-px hover:bg-white/20"
            style={{
              background: "rgba(0,0,0,0.55)",
              backdropFilter: "blur(16px)",
              WebkitBackdropFilter: "blur(16px)",
              border: "1px solid rgba(255,255,255,0.2)",
            }}
          >
            Speak to an AI Expert
          </Link>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-7 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-0">
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
            <ChevronDown size={20} strokeWidth={2.5} style={{ color: "#5C0F26" }} className="-mt-1.5" />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
