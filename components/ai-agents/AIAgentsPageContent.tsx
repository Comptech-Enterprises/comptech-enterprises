"use client";

import { useState } from "react";
import { AIAgentsHero } from "./AIAgentsHero";
import { AIAgentsClient } from "./AIAgentsClient";
import { BookLiveDemoModal } from "./BookLiveDemoModal";
import { FAQSection } from "@/components/faq/FAQSection";
import { AI_EMPLOYEES_FAQS, SALES_AGENT_FAQS } from "@/lib/faqs";

export function AIAgentsPageContent() {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);

  return (
    <>
      <AIAgentsHero onBookLiveDemo={() => setIsDemoModalOpen(true)} />
      <AIAgentsClient onBookLiveDemo={() => setIsDemoModalOpen(true)} />
      <FAQSection
        groups={[
          { title: "Sales AI Agent", items: SALES_AGENT_FAQS },
          { title: "AI Employees", items: AI_EMPLOYEES_FAQS },
        ]}
        intro="How the Sales AI Agent works, how AI employees differ from chatbots, how we build and deploy them, and what they cost."
      />
      <BookLiveDemoModal
        isOpen={isDemoModalOpen}
        onClose={() => setIsDemoModalOpen(false)}
      />
    </>
  );
}
