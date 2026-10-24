"use client";

import React from "react";
import { weeklyTimeline } from "@/data/schedule";
import { RevealStagger, RevealStaggerItem } from "@/components/motion/RevealStagger";
import { IconClock } from "@/components/ui/Icons";

export function WeeklyTimeline() {
  return (
    <div className="w-full">
      <div className="text-center mb-8">
        <h3 className="text-xl sm:text-2xl font-display font-bold text-ink">
          Garis Waktu Mingguan (Senin – Minggu)
        </h3>
        <p className="text-stone text-xs sm:text-sm mt-1">
          Hari ibadah ditandai dengan aksen emas; hari tanpa ibadah tertutup untuk
          kegiatan umum.
        </p>
      </div>

      <RevealStagger className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3 sm:gap-4">
        {weeklyTimeline.map((item) => {
          return (
            <RevealStaggerItem key={item.dayName}>
              <div
                className={`h-full rounded-2xl p-4 sm:p-5 border transition-all flex flex-col justify-between ${
                  item.hasService
                    ? "bg-white border-accent/50 shadow-md ring-1 ring-accent/20 service-day-pulse"
                    : "bg-sand/60 border-line/70 opacity-60"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-display font-bold text-base sm:text-lg text-ink">
                      {item.dayName}
                    </span>
                    {item.hasService ? (
                      <span className="w-2.5 h-2.5 rounded-full bg-accent animate-pulse" />
                    ) : (
                      <span className="text-[10px] text-stone uppercase tracking-wider font-semibold">
                        Tutup
                      </span>
                    )}
                  </div>

                  {item.hasService ? (
                    <div className="space-y-1">
                      <p className="font-bold text-xs sm:text-sm text-ink leading-tight">
                        {item.serviceTitle}
                      </p>
                      <div className="inline-flex items-center gap-1 text-[11px] text-accent-text font-semibold">
                        <IconClock size={12} />
                        <span>{item.time}</span>
                      </div>
                    </div>
                  ) : (
                    <p className="text-[11px] text-stone italic">
                      Tidak ada ibadah umum
                    </p>
                  )}
                </div>

                <div className="mt-4 pt-3 border-t border-line/40 text-[10px] text-stone">
                  {item.hasService ? (
                    <span className="text-accent-text font-bold">Terbuka untuk Jemaat</span>
                  ) : (
                    <span>Tutup kecuali Hari Raya</span>
                  )}
                </div>
              </div>
            </RevealStaggerItem>
          );
        })}
      </RevealStagger>
    </div>
  );
}
