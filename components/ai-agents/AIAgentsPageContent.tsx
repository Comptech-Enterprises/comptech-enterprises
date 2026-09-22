"use client";

import { useState } from "react";
import { AIAgentsHero } from "./AIAgentsHero";
import { AIAgentsClient } from "./AIAgentsClient";
import { BookLiveDemoModal } from "./BookLiveDemoModal";

export function AIAgentsPageContent() {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);

  return (
    <>
      <AIAgentsHero onBookLiveDemo={() => setIsDemoModalOpen(true)} />
      <AIAgentsClient onBookLiveDemo={() => setIsDemoModalOpen(true)} />
      <BookLiveDemoModal
        isOpen={isDemoModalOpen}
        onClose={() => setIsDemoModalOpen(false)}
      />
    </>
  );
}
