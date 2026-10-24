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
              className={`px-5 py-3 rounded-full text-xs sm:text-sm font-bold transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent ${
                isActive
                  ? "bg-accent text-ink shadow-lg scale-[1.02]"
                  : "bg-sand hover:bg-stone-200 text-stone-700 border border-line"
              }`}
            >
              <span>{channel.title}</span>
              {channel.badge && (
                <span
                  className={`ml-2 text-[10px] px-2 py-0.5 rounded-full font-semibold ${
                    isActive
                      ? "bg-ink/20 text-ink"
                      : "bg-stone-200 text-stone-600"
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
      <div className="bg-sand rounded-3xl p-8 sm:p-10 border border-line max-w-3xl mx-auto shadow-sm">
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-2xl font-display font-bold text-ink">
              {currentChannel.title}
            </h3>
            <span className="text-xs uppercase tracking-wider font-semibold text-accent-text">
              {currentChannel.subtitle}
            </span>
          </div>

          <p className="text-stone text-sm sm:text-base leading-relaxed font-sans">
            {currentChannel.description}
          </p>

          <div className="pt-4 border-t border-line space-y-2.5">
            <p className="text-xs font-bold uppercase tracking-wider text-ink">
              Petunjuk Pelaksanaan:
            </p>
            <ul className="space-y-2 text-xs sm:text-sm text-stone">
              {currentChannel.details.map((detail, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <IconCheck size={16} className="text-accent-text shrink-0 mt-0.5" />
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
