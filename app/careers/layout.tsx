import type { Metadata } from "next";
import { pageAlternates } from "@/lib/seo";

export const metadata: Metadata = {
  title: { absolute: "Careers at Comptech Enterprises" },
  description:
    "Join Comptech Enterprises. Work on AI agents, enterprise solutions, and cutting-edge infrastructure.",
  alternates: pageAlternates("/careers"),
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: "Comptech Enterprises",
    title: "Careers at Comptech Enterprises",
    description:
      "Join Comptech Enterprises. Work on AI agents, enterprise solutions, and cutting-edge infrastructure.",
    images: [{ url: "/images/logo.webp" }],
  },
};

export default function CareersLayout({ children }: { children: React.ReactNode }) {
  return children;
}
