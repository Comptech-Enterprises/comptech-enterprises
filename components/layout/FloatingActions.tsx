"use client";

import { MessageCircle } from "lucide-react";

export function FloatingActions() {
  return (
    <div className="fixed bottom-6 right-6 z-[990]" aria-label="Quick actions">
      <button
        onClick={() => alert("Compbot coming soon!")}
        className="w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 active:scale-95"
        style={{ background: "#1D4ED8" }}
        aria-label="Chat with Compbot"
        title="Chat with Compbot"
      >
        <MessageCircle size={24} color="white" />
      </button>
    </div>
  );
}
