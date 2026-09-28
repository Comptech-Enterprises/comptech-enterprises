import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { BlogClient } from "@/components/blog/BlogClient";

export const metadata: Metadata = {
  title: "Blog & Insights | AI Agents, GEO & Enterprise Infrastructure",
  description:
    "Explore the latest insights on autonomous AI agents, Generative Engine Optimization (GEO), enterprise IT infrastructure, and AI benchmarks from the Comptech team.",
  openGraph: {
    title: "Blog & Insights | Comptech Enterprises",
    description:
      "Explore the latest insights on autonomous AI agents, Generative Engine Optimization (GEO), enterprise IT infrastructure, and AI benchmarks.",
  },
};

export default function BlogPage() {
  return (
    <>
      <Navbar transparent />
      <BlogClient />
      <Footer />
    </>
  );
}
