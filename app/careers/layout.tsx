import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Join Comptech Enterprises — build enterprise IT, AI, and infrastructure projects with a team of 50+ certified engineers across India.",
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: "Comptech Enterprises",
    title: "Careers | Comptech Enterprises",
    description:
      "Join Comptech Enterprises — build enterprise IT, AI, and infrastructure projects with a team of 50+ certified engineers across India.",
    images: [{ url: "/images/logo.webp" }],
  },
};

export default function CareersLayout({ children }: { children: React.ReactNode }) {
  return children;
}
