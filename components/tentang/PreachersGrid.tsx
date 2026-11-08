"use client";

import React from "react";
import { preachers } from "@/data/leaders";
import { RevealStagger, RevealStaggerItem } from "@/components/motion/RevealStagger";

export function PreachersGrid() {
  return (
    <RevealStagger className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
      {preachers.map((preacher, idx) => (
        <RevealStaggerItem key={idx}>
          <div className="bento-card bento-shimmer p-5 flex flex-col items-center text-center shadow-lg group">
            {/* Initials Avatar Fallback */}
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white/[0.05] text-accent border border-accent/40 flex items-center justify-center font-display font-medium text-lg sm:text-xl mb-4 group-hover:scale-105 group-hover:border-accent group-hover:shadow-[0_0_20px_rgba(229,169,60,0.25)] transition-all shadow-md">
              {preacher.initials}
            </div>

            <h3 className="font-display font-medium text-base sm:text-lg text-white leading-snug group-hover:text-accent transition-colors">
              {preacher.name}
            </h3>

            <p className="text-xs text-slate-400 mt-1 font-mono uppercase tracking-wider">
              {preacher.role}
            </p>
          </div>
        </RevealStaggerItem>
      ))}
    </RevealStagger>
  );
}
