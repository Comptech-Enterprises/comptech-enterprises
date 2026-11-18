import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { BlogClient } from "@/components/blog/BlogClient";
import { pageAlternates } from "@/lib/seo";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";

export const metadata: Metadata = {
  title: "Blog: AI Agents, GEO & Enterprise Insights",
  description:
    "Insights on AI agents, generative engine optimization, enterprise infrastructure, and practical AI adoption.",
  alternates: pageAlternates("/blog"),
  openGraph: {
    type: "website",
    images: [{ url: "/images/logo.webp" }],
    title: "Blog: AI Agents, GEO & Enterprise Insights | Comptech Enterprises",
    description:
      "Insights on AI agents, generative engine optimization, enterprise infrastructure, and practical AI adoption.",
  },
};

export default function BlogPage() {
  return (
    <>
      <Navbar transparent />
      <Breadcrumbs path="/blog" />
      <BlogClient />
      <Footer />
    </>
  );
}
