import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Comptech Enterprises for AI Services, AI Trainings, Software Development, or enterprise IT support.",
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
