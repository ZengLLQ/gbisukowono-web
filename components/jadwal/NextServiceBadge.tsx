"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { IconClock } from "@/components/ui/Icons";
import { duration, ease } from "@/lib/motion";

interface NextServiceInfo {
  name: string;
  dayText: string;
  timeText: string;
  countdownText: string;
}

export function NextServiceBadge() {
  const [nextService, setNextService] = useState<NextServiceInfo | null>(null);

  useEffect(() => {
    function computeNextService() {
      // Calculate in Asia/Jakarta (WIB = UTC+7)
      const now = new Date();
      // Convert to UTC ms + 7 hours
      const utcMs = now.getTime() + now.getTimezoneOffset() * 60000;
      const wibNow = new Date(utcMs + 7 * 3600000);

      const day = wibNow.getDay(); // 0 = Sunday, 1 = Monday, 2 = Tuesday, 5 = Friday
      const hours = wibNow.getHours();
      const minutes = wibNow.getMinutes();
      const timeInMinutes = hours * 60 + minutes;

      // Services schedule in WIB:
      // Selasa: 18:00 (1080 min)
      // Jumat: 18:30 (1110 min)
      // Minggu: 18:00 (1080 min)
      let targetDay = 0;
      let targetTimeInMin = 1080;
      let serviceName = "Ibadah Raya Minggu";
      let dayName = "Minggu ini";
      let timeStr = "18.00 WIB";

      if (day === 0) {
        // Sunday
        if (timeInMinutes < 1080) {
          targetDay = 0;
          targetTimeInMin = 1080;
          serviceName = "Ibadah Raya Minggu";
          dayName = "Hari ini";
          timeStr = "18.00 WIB";
        } else {
          // next is Tuesday
          targetDay = 2;
          targetTimeInMin = 1080;
          serviceName = "Persekutuan Doa";
          dayName = "Selasa";
          timeStr = "18.00 WIB";
        }
      } else if (day === 1) {
        // Monday -> Tuesday
        targetDay = 2;
        targetTimeInMin = 1080;
        serviceName = "Persekutuan Doa";
        dayName = "Selasa besok";
        timeStr = "18.00 WIB";
      } else if (day === 2) {
        // Tuesday
        if (timeInMinutes < 1080) {
          targetDay = 2;
          targetTimeInMin = 1080;
          serviceName = "Persekutuan Doa";
          dayName = "Hari ini";
          timeStr = "18.00 WIB";
        } else {
          targetDay = 5;
          targetTimeInMin = 1110;
          serviceName = "Worship Night";
          dayName = "Jumat";
          timeStr = "18.30 WIB";
        }
      } else if (day === 3 || day === 4) {
        // Wed or Thu -> Friday
        targetDay = 5;
        targetTimeInMin = 1110;
        serviceName = "Worship Night";
        dayName = "Jumat ini";
        timeStr = "18.30 WIB";
      } else if (day === 5) {
        // Friday
        if (timeInMinutes < 1110) {
          targetDay = 5;
          targetTimeInMin = 1110;
          serviceName = "Worship Night";
          dayName = "Hari ini";
          timeStr = "18.30 WIB";
        } else {
          targetDay = 0;
          targetTimeInMin = 1080;
          serviceName = "Ibadah Raya Minggu";
          dayName = "Minggu ini";
          timeStr = "18.00 WIB";
        }
      } else {
        // Saturday -> Sunday
        targetDay = 0;
        targetTimeInMin = 1080;
        serviceName = "Ibadah Raya Minggu";
        dayName = "Minggu besok";
        timeStr = "18.00 WIB";
      }

      setNextService({
        name: serviceName,
        dayText: dayName,
        timeText: timeStr,
        countdownText: `Ibadah Berikutnya: ${serviceName} – ${dayName}, ${timeStr}`,
      });
    }

    computeNextService();
    const interval = setInterval(computeNextService, 60000);
    return () => clearInterval(interval);
  }, []);

  if (!nextService) {
    return (
      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/20 border border-accent/40 text-accent font-semibold text-xs sm:text-sm">
        <IconClock size={16} />
        <span>Ibadah Raya Minggu • 18.00 WIB</span>
      </div>
    );
  }

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={nextService.name + nextService.dayText}
        initial={{ opacity: 0, y: 6 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -6 }}
        transition={{ duration: duration.fast, ease: ease.ui }}
        className="inline-flex items-center gap-2.5 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full bg-accent/20 border border-accent/40 text-white font-medium text-xs sm:text-sm shadow-md"
      >
        <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
        <span className="text-accent font-bold uppercase tracking-wider text-[11px]">
          Ibadah Berikutnya:
        </span>
        <span className="text-sand font-semibold">
          {nextService.name} ({nextService.dayText}, {nextService.timeText})
        </span>
      </motion.div>
    </AnimatePresence>
  );
}
