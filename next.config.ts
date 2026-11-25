import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "logo.clearbit.com",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  experimental: {
    optimizePackageImports: ["lucide-react", "framer-motion"],
    // Inline the (small) CSS into the HTML so it no longer blocks first paint.
    inlineCss: true,
  },
  // Static files in /public are not content-hashed, so give them a 30-day cache (not "immutable").
  async headers() {
    const cache = [{ key: "Cache-Control", value: "public, max-age=2592000, stale-while-revalidate=86400" }];
    const dirs = ["clients", "blog", "images", "logos", "logo's", "carousel", "videos"].map((d) => `/${d}/:path*`);
    const files = [
      "/hero-bg.mp4",
      "/hero-bg-mobile.mp4",
      "/hero-poster.webp",
      "/hero-poster-mobile.webp",
      "/training-bg.mp4",
      "/training-bg-mobile.mp4",
      "/sales-ai-agent.mp4",
      "/short-social-media-ai.mp4",
    ];
    return [...dirs, ...files].map((source) => ({ source, headers: cache }));
  },
  async redirects() {
    return [
      {
        source: "/annual-management-contracts",
        destination: "/services#amc",
        permanent: true,
      },
      {
        source: "/services-4",
        destination: "/services",
        permanent: true,
      },
      {
        source: "/network-solutions-1",
        destination: "/services#networking",
        permanent: true,
      },
      {
        source: "/services-1",
        destination: "/services",
        permanent: true,
      },
      {
        source: "/end-user-computer",
        destination: "/services#euc",
        permanent: true,
      },
      {
        source: "/security-solutions-1",
        destination: "/services#security",
        permanent: true,
      },
      {
        source: "/data-centre-solutions-1",
        destination: "/services#datacenter",
        permanent: true,
      },
      {
        source: "/copy-of-ai-vision",
        destination: "/ai-solutions",
        permanent: true,
      },
      {
        source: "/partners-and-brands",
        destination: "/partners",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
