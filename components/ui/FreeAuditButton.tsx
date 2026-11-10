"use client";

import { useEffect, useState, type CSSProperties, type ReactNode } from "react";
import { createPortal } from "react-dom";
import { BookLiveDemoModal } from "@/components/ai-agents/BookLiveDemoModal";

/** A button that opens the free AI audit request form in a popup instead of navigating away. */
export function FreeAuditButton({
  children,
  className,
  style,
  source,
}: {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  /** Where the click came from, saved with the submission. */
  source: string;
}) {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <>
      <button type="button" onClick={() => setOpen(true)} className={className} style={style}>
        {children}
      </button>
      {mounted &&
        // Portal to <body>: ancestors with transform/will-change would otherwise trap position: fixed.
        createPortal(
          <BookLiveDemoModal
            isOpen={open}
            onClose={() => setOpen(false)}
            title="Book a Free AI Audit"
            description="Tell us a little about your business. We'll review your workflows and show you where AI can save time and cost."
            submitLabel="Book My Free AI Audit"
            submittingLabel="Sending Your Request..."
            successTitle="Audit Request Received!"
            successMessage="Our team will reach out shortly to schedule your free AI audit consultation."
            service="AI Audit"
            requirements="Free AI Audit request"
            source={source}
          />,
          document.body
        )}
    </>
  );
}
