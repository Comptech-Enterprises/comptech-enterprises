export function WaveStrip() {
  return (
    <div
      className="fixed top-0 left-0 w-full z-[9999] pointer-events-none overflow-hidden"
      style={{ height: 20 }}
      aria-hidden="true"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 2880 20"
        preserveAspectRatio="none"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "200%",
          height: "100%",
          animation: "wave-scroll 10s linear infinite",
        }}
      >
        <defs>
          <linearGradient
            id="waveGrad"
            gradientUnits="userSpaceOnUse"
            x1="0"
            y1="0"
            x2="2880"
            y2="0"
          >
            <stop offset="0%"   stopColor="#1D4ED8" />
            <stop offset="25%"  stopColor="#7C3AED" />
            <stop offset="50%"  stopColor="#E8435A" />
            <stop offset="75%"  stopColor="#5C0F26" />
            <stop offset="100%" stopColor="#1D4ED8" />
          </linearGradient>
        </defs>
        {/* 8 smooth wave humps across 2880 units — seamlessly loops at -50% translate */}
        <path
          d="M0,10
             C90,0  270,0  360,10
             C450,20 630,20 720,10
             C810,0  990,0  1080,10
             C1170,20 1350,20 1440,10
             C1530,0  1710,0  1800,10
             C1890,20 2070,20 2160,10
             C2250,0  2430,0  2520,10
             C2610,20 2790,20 2880,10
             L2880,20 L0,20 Z"
          fill="url(#waveGrad)"
        />
      </svg>
    </div>
  );
}
