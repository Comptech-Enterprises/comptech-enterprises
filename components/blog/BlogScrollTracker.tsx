"use client";

import { useEffect } from "react";
import { trackEvent } from "@/lib/analytics";

const THRESHOLDS = [50, 90];

/**
 * Fires a GA4 `blog_scroll_depth` event once per threshold (50% and 90%) as the reader
 * scrolls through the article. Depth is measured against the <article> element, not the page,
 * so the footer and related posts don't count as "read".
 */
export function BlogScrollTracker({ slug, title }: { slug: string; title: string }) {
  useEffect(() => {
    const article = document.querySelector("article");
    if (!article) return;
    const fired = new Set<number>();

    const check = () => {
      const rect = article.getBoundingClientRect();
      if (rect.height <= 0) return;
      const read = window.innerHeight - rect.top; // pixels of the article scrolled into view
      const percent = Math.min(100, Math.max(0, (read / rect.height) * 100));
      for (const t of THRESHOLDS) {
        if (percent >= t && !fired.has(t)) {
          fired.add(t);
          trackEvent("blog_scroll_depth", { percent_scrolled: t, post_slug: slug, post_title: title });
        }
      }
      if (fired.size === THRESHOLDS.length) window.removeEventListener("scroll", onScroll);
    };
    // One getBoundingClientRect per scroll event is cheap; no throttling needed.
    const onScroll = check;

    window.addEventListener("scroll", onScroll, { passive: true });
    check();
    return () => window.removeEventListener("scroll", onScroll);
  }, [slug, title]);

  return null;
}
