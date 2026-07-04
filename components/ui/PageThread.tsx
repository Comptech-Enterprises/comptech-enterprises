export function PageThread() {
  return (
    <div
      aria-hidden="true"
      className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden"
      style={{ zIndex: 0 }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 4200"
        preserveAspectRatio="xMidYMin meet"
        className="w-full h-full"
        style={{ minHeight: "100%" }}
      >
        <defs>
          <linearGradient id="threadGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%"   stopColor="#1D4ED8" stopOpacity="0.7" />
            <stop offset="35%"  stopColor="#7C3AED" stopOpacity="0.6" />
            <stop offset="65%"  stopColor="#E8435A" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#5C0F26" stopOpacity="0.4" />
          </linearGradient>
        </defs>

        {/*
          Path winds left-right through the page sections:
          - Starts right side after hero
          - Curves through partners strip
          - Weaves through services
          - Winds through testimonials
          - Ends near contact section
        */}
        <path
          d="
            M 1050,320
            C 1300,480  1350,700  1100,900
            C 850,1100  250,1050  180,1300
            C 110,1550  600,1700  750,1950
            C 900,2200  1280,2350  1200,2600
            C 1120,2850  400,2900  300,3150
            C 200,3400  700,3550  800,3800
            C 900,4000  600,4100  500,4200
          "
          fill="none"
          stroke="url(#threadGrad)"
          strokeWidth="2"
          strokeLinecap="round"
          opacity="0.35"
        />
      </svg>
    </div>
  );
}
