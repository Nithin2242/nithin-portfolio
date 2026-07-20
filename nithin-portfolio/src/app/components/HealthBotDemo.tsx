"use client";

import { motion } from "framer-motion";

export default function HealthBotDemo() {
  return (
    <div className="w-full space-y-6 featured-demo-container">
      <div className="w-full aspect-video rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-xl overflow-hidden shadow-2xl relative">
        {/* Header decoration */}
        <div className="absolute top-0 left-0 right-0 h-10 bg-white/5 border-b border-white/10 flex items-center px-4 justify-between z-10 backdrop-blur-md">
          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-red-500/50" />
            <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50" />
            <div className="w-2.5 h-2.5 rounded-full bg-green-500/50" />
          </div>
          <span className="text-[10px] font-mono text-gray-500 tracking-widest uppercase">
            nithin-health-assistant.streamlit.app
          </span>
        </div>

        {/* The Actual Streamlit App */}
        <iframe
          src="https://nithin-health-assistant.streamlit.app/?embed=true"
          className="w-full h-full pt-10 border-none"
          title="Nithin Health Assistant"
          allow="geolocation; microphone; camera"
        />
      </div>

      {/* External Link Button */}
      <div className="flex justify-center">
        <a 
          href="https://nithin-health-assistant.streamlit.app/#ai-healthcare-assistant" 
          target="_blank" 
          rel="noopener noreferrer"
          className="group flex items-center gap-2 text-xs font-mono text-gray-400 hover:text-white transition-colors cursor-none"
        >
          <span>LAUNCH FULL APP</span>
          <svg 
            className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" 
            fill="none" viewBox="0 0 24 24" stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </a>
      </div>
    </div>
  );
}