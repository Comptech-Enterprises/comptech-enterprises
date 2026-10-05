"use client";

import FolderFloat from "@/components/reactbits/FolderFloat";

const AUDIT_DELIVERABLES = [
  "Multi-LLM Citation Gap Map",
  "Entity Authority Scorecard",
  "Knowledge Graph Schema Audit",
  "Competitor Share of Model Voice",
  "Vector Store Embedding Review",
  "90-Day Prioritized GEO Roadmap",
];

export function GEOAuditFolder() {
  return (
    <div className="flex flex-col items-center justify-center w-full min-h-[420px] py-4 select-none">
      {/* Upper zero-gravity floating stage: items float upward into this completely open zone */}
      <div className="w-full flex justify-center pt-36 pb-3">
        <FolderFloat
          items={AUDIT_DELIVERABLES}
          label="Free GEO Audit Pack"
          trigger="hover"
          physics={true}
          drift={0.3}
          folderColor="#3F0A1A"
          frontColor="#5C0F26"
          paperColor="#FFF5F7"
          itemColor="#FFFFFF"
          itemTextColor="#5C0F26"
          labelColor="#FFFFFF"
          width={220}
          height={150}
          radius={16}
          spread={210}
          lift={16}
          tilt={7}
          flapAngle={35}
          openDuration={480}
          stagger={30}
          bounce={0.22}
        />
      </div>

      {/* Caption placed safely BELOW the folder: items float upward, so this text NEVER overlaps */}
      <div className="text-center mt-4 pointer-events-none z-10">
        <p className="text-xs font-bold uppercase tracking-[0.22em] text-pink-300 mb-1">
          Tactile Deliverable Preview
        </p>
        <p className="text-xs text-white/75 max-w-xs mx-auto leading-relaxed">
          Hover or tap the folder to explore audit deliverables in zero gravity
        </p>
      </div>
    </div>
  );
}
