import type { Metadata } from "next";
import { pageAlternates } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Corporate AI Training Workshops",
  description:
    "Hands-on corporate AI training workshops for engineering and non-technical teams. Onsite in India or live online.",
  alternates: pageAlternates("/ai-training"),
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: "Comptech Enterprises",
    title: "Corporate AI Training Workshops | Comptech Enterprises",
    description:
      "Hands-on corporate AI training workshops for engineering and non-technical teams. Onsite in India or live online.",
    images: [{ url: "/images/logo.webp" }],
  },
};

export default function AITrainingLayout({ children }: { children: React.ReactNode }) {
  return children;
}
