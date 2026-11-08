"use client";

import React, { useState } from "react";
import { givingChannels } from "@/data/giving";
import { IconCheck } from "@/components/ui/Icons";

export function GivingTabs() {
  const [activeTab, setActiveTab] = useState<string>("transfer-bank");

  const currentChannel =
    givingChannels.find((c) => c.id === activeTab) || givingChannels[0];

  return (
    <div className="space-y-8">
      {/* Tab Buttons */}
      <div className="flex flex-wrap items-center justify-center gap-3">
        {givingChannels.map((channel) => {
          const isActive = activeTab === channel.id;
          return (
            <button
              key={channel.id}
              type="button"
              onClick={() => setActiveTab(channel.id)}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent ${
                isActive
                  ? "bg-white text-black shadow-lg scale-[1.02]"
                  : "bg-white/[0.04] hover:bg-white/[0.08] text-slate-300 border border-white/10"
              }`}
            >
              <span>{channel.title}</span>
              {channel.badge && (
                <span
                  className={`ml-2 text-[10px] font-mono px-2 py-0.5 rounded-full font-semibold ${
                    isActive
                      ? "bg-black/20 text-black"
                      : "bg-white/10 text-slate-300"
                  }`}
                >
                  {channel.badge}
                </span>
              )}
            </button>
          );
        })}
      </div>

      {/* Selected Channel Details Card */}
      <div className="bento-card bento-shimmer rounded-3xl p-8 sm:p-10 border border-white/10 max-w-3xl mx-auto shadow-2xl">
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-xl sm:text-2xl font-display font-medium text-white">
              {currentChannel.title}
            </h3>
            <span className="text-xs font-mono uppercase tracking-wider font-semibold text-accent">
              {currentChannel.subtitle}
            </span>
          </div>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-sans font-light">
            {currentChannel.description}
          </p>

          <div className="pt-4 border-t border-white/[0.08] space-y-2.5">
            <p className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400">
              Petunjuk Pelaksanaan:
            </p>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
              {currentChannel.details.map((detail, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <IconCheck size={16} className="text-accent shrink-0 mt-0.5" />
                  <span>{detail}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
