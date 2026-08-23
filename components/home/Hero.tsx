"use client";

import { useState, useEffect } from "react";

export function Hero() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <section
      className="relative overflow-hidden"
      style={{ minHeight: "100vh", paddingTop: "var(--nav-height)" }}
      aria-label="Hero"
    >
      {/* Background animation video */}
      <video
        key={isMobile ? "mobile" : "desktop"}
        autoPlay
        loop
        muted
        playsInline
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
    </section>
  );
}
