import { ReactNode } from "react";
import { clsx } from "clsx";

export function SectionLabel({ children, className, light, blue }: { children: ReactNode; className?: string; light?: boolean; blue?: boolean }) {
  return (
    <div className={clsx("section-label", light && "light", blue && "blue", className)}>
      {children}
    </div>
  );
}
