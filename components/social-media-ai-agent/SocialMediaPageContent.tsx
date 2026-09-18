"use client";

import { useState } from "react";
import { SocialMediaHero } from "./SocialMediaHero";
import { SocialMediaClient } from "./SocialMediaClient";
import { BookLiveDemoModal } from "@/components/ai-agents/BookLiveDemoModal";

export function SocialMediaPageContent() {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);

  return (
    <>
      <SocialMediaHero onBookLiveDemo={() => setIsDemoModalOpen(true)} />
      <SocialMediaClient onBookLiveDemo={() => setIsDemoModalOpen(true)} />
      <BookLiveDemoModal
        isOpen={isDemoModalOpen}
        onClose={() => setIsDemoModalOpen(false)}
      />
    </>
  );
}
