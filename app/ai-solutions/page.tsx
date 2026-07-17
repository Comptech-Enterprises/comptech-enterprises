import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { AISolutionsClient } from "@/components/ai-solutions/AISolutionsClient";

export const metadata: Metadata = {
  title: "AI Solutions",
  description:
    "Enterprise AI by Comptech Enterprises — hands-on AI training and workshops, custom AI agents built around your workflows, and secure AI software integration.",
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
