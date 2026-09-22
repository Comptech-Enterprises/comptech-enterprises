"use client";

import { useRef, useState } from "react";

interface AgentVideoPlayerProps {
  src?: string;
}

export function AgentVideoPlayer({ src = "/short-social-media-ai.mp4" }: AgentVideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [, setIsPlaying] = useState(true);

  return (
    <div className="relative w-full max-w-5xl mx-auto my-4 sm:my-6 px-3 sm:px-0">
      {/* Ambient background glow matching site brand palette */}
      <div className="absolute -inset-2 sm:-inset-3 bg-gradient-to-r from-[#5C0F26]/20 via-[#E8435A]/15 to-purple-500/20 rounded-[28px] sm:rounded-[36px] blur-xl sm:blur-2xl opacity-70 pointer-events-none" />

      {/* Main Player Container */}
      <div className="relative bg-black border border-gray-200/80 rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden group">
        {/* Video Area */}
        <div className="relative aspect-video w-full bg-black flex items-center justify-center overflow-hidden">
          <video
            ref={videoRef}
            src={src}
            autoPlay
            loop
            muted
            playsInline
            controls
            className="w-full h-full object-contain"
            onPlay={() => setIsPlaying(true)}
            onPause={() => setIsPlaying(false)}
          />
        </div>
      </div>
    </div>
  );
}
