"use client";

import React from "react";
import { preachers } from "@/data/leaders";
import { RevealStagger, RevealStaggerItem } from "@/components/motion/RevealStagger";

export function PreachersGrid() {
  return (
    <RevealStagger className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
      {preachers.map((preacher, idx) => (
        <RevealStaggerItem key={idx}>
          <div className="bg-sand rounded-2xl p-5 border border-line flex flex-col items-center text-center hover:shadow-lg transition-all hover:-translate-y-1 group">
            {/* Initials Avatar Fallback */}
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-charcoal text-accent border-2 border-accent/30 flex items-center justify-center font-display font-bold text-lg sm:text-xl mb-4 group-hover:scale-105 group-hover:bg-ink transition-transform shadow-md">
              {preacher.initials}
            </div>

            <h3 className="font-display font-bold text-base sm:text-lg text-ink leading-snug group-hover:text-accent-text transition-colors">
              {preacher.name}
            </h3>

            <p className="text-xs text-stone mt-1 font-medium uppercase tracking-wider">
              {preacher.role}
            </p>
          </div>
        </RevealStaggerItem>
      ))}
    </RevealStagger>
  );
}
