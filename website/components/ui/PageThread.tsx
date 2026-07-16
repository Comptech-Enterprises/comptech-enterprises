export function PageThread() {
  return (
    <div
      aria-hidden="true"
      className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden"
      style={{ zIndex: -1 }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 1800"
        preserveAspectRatio="xMidYMin meet"
        className="w-full h-full"
        style={{ minHeight: "100%" }}
      >
        <defs>
          <linearGradient id="threadGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%"   stopColor="#1D4ED8" stopOpacity="0.8" />
            <stop offset="50%"  stopColor="#7C3AED" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#E8435A" stopOpacity="0.6" />
          </linearGradient>
        </defs>

        {/* Winds from top-right → left → right → ends at bottom center */}
        <path
          d="
            M 1100,0
            C 1350,200  1300,450  1000,600
            C 700,750   200,700   150,950
            C 100,1200  650,1350  800,1550
            C 950,1700  700,1780  600,1800
          "
          fill="none"
          stroke="url(#threadGrad)"
          strokeWidth="2"
          strokeLinecap="round"
          opacity="0.3"
        />
      </svg>
    </div>
  );
}
