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
