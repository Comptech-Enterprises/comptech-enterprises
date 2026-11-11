"use client";

import { useState } from "react";
import { AIAgentsHero } from "./AIAgentsHero";
import { AIAgentsClient } from "./AIAgentsClient";
import { BookLiveDemoModal } from "./BookLiveDemoModal";
import { FAQSection } from "@/components/faq/FAQSection";
import { AI_EMPLOYEES_FAQS } from "@/lib/faqs";

export function AIAgentsPageContent() {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);

  return (
    <>
      <AIAgentsHero onBookLiveDemo={() => setIsDemoModalOpen(true)} />
      <AIAgentsClient onBookLiveDemo={() => setIsDemoModalOpen(true)} />
      <FAQSection
        items={AI_EMPLOYEES_FAQS}
        intro="How AI employees differ from chatbots, how we build and deploy them, what they cost, and where to use them first."
      />
      <BookLiveDemoModal
        isOpen={isDemoModalOpen}
        onClose={() => setIsDemoModalOpen(false)}
      />
    </>
  );
}
