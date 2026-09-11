import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { AISolutionsClient } from "@/components/ai-solutions/AISolutionsClient";

export const metadata: Metadata = {
  title: "AI Services & AI Trainings",
  description:
    "AI Services and corporate AI Trainings from Comptech Enterprises — hands-on workshops, custom AI agents built around your workflows, and secure AI software integration.",
  keywords: ["AI Services", "AI Trainings", "AI workshops India", "corporate AI training Delhi", "AI agent development"],
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
