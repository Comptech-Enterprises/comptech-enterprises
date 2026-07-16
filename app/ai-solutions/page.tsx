import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { AISolutionsClient } from "@/components/ai-solutions/AISolutionsClient";

export const metadata: Metadata = {
  title: "AI Solutions",
  description:
    "Enterprise AI solutions by Comptech Enterprises. High-performance GPU hardware, custom AI software, and hands-on AI training programs.",
};

export default function AISolutionsPage() {
  return (
    <>
      <Navbar />
      <AISolutionsClient />
      <Footer />
    </>
  );
}
