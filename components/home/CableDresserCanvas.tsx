"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Wifi, Cpu, Layers, HardDrive } from "lucide-react";

interface Connection {
  id: number;
  source: string;
  dest: string;
  vlan: string;
  speed: string;
  status: string;
  color: string;
  glow: string;
}

const CONNECTIONS: Connection[] = [
  { id: 1, source: "Dell PowerEdge R760", dest: "Core Switch P1", vlan: "VLAN 10 (Staging)", speed: "100 Gbps", status: "OS Provisioning Complete", color: "#3B82F6", glow: "rgba(59, 130, 246, 0.4)" },
  { id: 2, source: "Cisco Nexus 9300", dest: "Core Switch P2", vlan: "VLAN 20 (Backbone)", speed: "400 Gbps", status: "Line-Rate Traffic Clear", color: "#8B5CF6", glow: "rgba(139, 92, 246, 0.4)" },
  { id: 3, source: "HP ProLiant DL380", dest: "Core Switch P3", vlan: "VLAN 30 (Database)", speed: "25 Gbps", status: "RAID 10 Sync Active", color: "#10B981", glow: "rgba(16, 185, 129, 0.4)" },
  { id: 4, source: "Lenovo ThinkSystem", dest: "Core Switch P4", vlan: "VLAN 40 (Edge WAN)", speed: "10 Gbps", status: "BGP Route Table Loaded", color: "#F59E0B", glow: "rgba(245, 158, 11, 0.4)" },
  { id: 5, source: "Synology NAS Array", dest: "Core Switch P5", vlan: "VLAN 50 (Storage)", speed: "100 Gbps", status: "SAN LUN Map Online", color: "#EF4444", glow: "rgba(239, 68, 68, 0.4)" },
  { id: 6, source: "Fortinet Gateway", dest: "Core Switch P6", vlan: "VLAN 99 (Security)", speed: "25 Gbps", status: "IPS Rules Deployed", color: "#EC4899", glow: "rgba(236, 72, 153, 0.4)" },
];

export function CableDresserCanvas() {
  const [activeId, setActiveId] = useState<number | null>(1); // Default to first connection active

  return (
    <div className="flex flex-col h-full justify-between p-6">
      
      {/* Top Panel: Source Equipment */}
      <div>
        <div className="flex items-center gap-2 mb-3 text-xs font-bold text-gray-400 uppercase tracking-widest">
          <Layers size={14} className="text-blue-400" />
          Hardware Source Rack (Row A)
        </div>
        <div className="grid grid-cols-6 gap-3 bg-gray-950/60 p-3.5 rounded-2xl border border-gray-800">
          {CONNECTIONS.map((c) => (
            <button
              key={c.id}
              onMouseEnter={() => setActiveId(c.id)}
              className={`relative flex flex-col items-center justify-center p-2 rounded-xl border transition-all duration-300 ${
                activeId === c.id
                  ? "bg-gray-900 border-blue-500/50 shadow-md shadow-blue-500/10"
                  : "bg-gray-950 border-gray-800 hover:border-gray-700"
              }`}
            >
              {/* RJ45 Port Visual */}
              <div className="w-5 h-4 bg-gray-900 border border-gray-700 rounded flex flex-col justify-between items-center p-0.5">
                <div className="w-3.5 h-1 bg-gray-800 rounded-xs" />
                <div className="flex gap-0.5">
                  <span className={`w-1 h-1 rounded-full ${activeId === c.id ? "bg-green-500 animate-pulse" : "bg-gray-700"}`} />
                  <span className={`w-1 h-1 rounded-full ${activeId === c.id ? "bg-green-500" : "bg-gray-700"}`} />
                </div>
              </div>
              <span className="text-[8px] font-bold text-gray-500 mt-1.5">P{c.id}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Center: Dynamic Cabling Canvas */}
      <div className="relative flex-grow my-4 min-h-[140px] bg-gray-950/20 border border-gray-900/40 rounded-2xl overflow-hidden">
        <svg className="absolute inset-0 w-full h-full pointer-events-none">
          {/* Base inactive lines to represent structured dressed cabling */}
          {CONNECTIONS.map((c) => {
            const startX = `${8.33 + (c.id - 1) * 16.66}%`;
            const endX = `${8.33 + (c.id - 1) * 16.66}%`;
            return (
              <g key={`base-${c.id}`}>
                {/* Curved cable path */}
                <path
                  d={`M ${startX} 0 C ${startX} 70, ${endX} 70, ${endX} 100%`}
                  fill="none"
                  stroke={activeId === c.id ? c.color : "rgba(37, 41, 49, 0.4)"}
                  strokeWidth={activeId === c.id ? 3.5 : 1.5}
                  className="transition-all duration-500"
                />
                {/* Neon Glow overlay on active cable */}
                {activeId === c.id && (
                  <motion.path
                    d={`M ${startX} 0 C ${startX} 70, ${endX} 70, ${endX} 100%`}
                    fill="none"
                    stroke={c.color}
                    strokeWidth={6}
                    strokeLinecap="round"
                    style={{ filter: `blur(4px)`, opacity: 0.5 }}
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                  />
                )}
              </g>
            );
          })}
        </svg>
        
        {/* Connection status overlay */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <AnimatePresence mode="wait">
            {activeId && (
              <motion.div
                key={activeId}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.2 }}
                className="bg-gray-950/90 border border-gray-800 px-4 py-2.5 rounded-xl shadow-2xl flex items-center gap-3 backdrop-blur-md"
              >
                <div className="w-2 h-2 rounded-full animate-ping" style={{ backgroundColor: CONNECTIONS[activeId - 1].color }} />
                <div className="text-left">
                  <div className="text-[10px] font-bold text-gray-200">
                    {CONNECTIONS[activeId - 1].source}
                  </div>
                  <div className="text-[8px] text-gray-400 flex items-center gap-2 mt-0.5">
                    <span>{CONNECTIONS[activeId - 1].vlan}</span>
                    <span>•</span>
                    <span>{CONNECTIONS[activeId - 1].speed}</span>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Bottom Panel: Core Switches */}
      <div>
        <div className="grid grid-cols-6 gap-3 bg-gray-950/60 p-3.5 rounded-2xl border border-gray-800 mb-3">
          {CONNECTIONS.map((c) => (
            <button
              key={c.id}
              onMouseEnter={() => setActiveId(c.id)}
              className={`relative flex flex-col items-center justify-center p-2 rounded-xl border transition-all duration-300 ${
                activeId === c.id
                  ? "bg-gray-900 border-blue-500/50 shadow-md shadow-blue-500/10"
                  : "bg-gray-950 border-gray-800 hover:border-gray-700"
              }`}
            >
              <span className="text-[8px] font-bold text-gray-500 mb-1.5">PORT {c.id}</span>
              {/* RJ45 Port Visual */}
              <div className="w-5 h-4 bg-gray-900 border border-gray-700 rounded flex flex-col justify-between items-center p-0.5">
                <div className="flex gap-0.5">
                  <span className={`w-1 h-1 rounded-full ${activeId === c.id ? "bg-green-500" : "bg-gray-700"}`} />
                  <span className={`w-1 h-1 rounded-full ${activeId === c.id ? "bg-green-500 animate-pulse" : "bg-gray-700"}`} />
                </div>
                <div className="w-3.5 h-1 bg-gray-800 rounded-xs" />
              </div>
            </button>
          ))}
        </div>
        
        <div className="flex items-center gap-2 text-xs font-bold text-gray-400 uppercase tracking-widest">
          <Wifi size={14} className="text-indigo-400" />
          Enterprise Core Switch (Rack B)
        </div>
      </div>

      {/* Footer Metrics */}
      <div className="mt-4 pt-4 border-t border-gray-900 flex justify-between items-center text-[10px] text-gray-500">
        <span className="flex items-center gap-1">
          <Cpu size={12} className="text-gray-400" />
          Active Config: {activeId ? `Patch P${activeId}` : "None"}
        </span>
        <span className="font-mono text-green-400/90 font-semibold">
          {activeId ? CONNECTIONS[activeId - 1].status : "Monitoring..."}
        </span>
      </div>
      
    </div>
  );
}
