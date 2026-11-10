"use client";

import { useState } from "react";
import { AIAgentsHero } from "./AIAgentsHero";
import { AIAgentsClient } from "./AIAgentsClient";
import { BookLiveDemoModal } from "./BookLiveDemoModal";
import { FAQSection } from "@/components/faq/FAQSection";
import { AI_AGENTS_FAQS } from "@/lib/faqs";

export function AIAgentsPageContent() {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);

  return (
    <>
      <AIAgentsHero onBookLiveDemo={() => setIsDemoModalOpen(true)} />
      <AIAgentsClient onBookLiveDemo={() => setIsDemoModalOpen(true)} />
      <FAQSection
        items={AI_AGENTS_FAQS}
        intro="What custom AI agents are, how they differ from ChatGPT, what they can automate, and how data stays safe."
      />
      <BookLiveDemoModal
        isOpen={isDemoModalOpen}
        onClose={() => setIsDemoModalOpen(false)}
      />
    </>
  );
}
