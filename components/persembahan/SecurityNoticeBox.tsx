"use client";

import React from "react";
import { motion } from "motion/react";
import { IconShield, IconInstagram, IconWhatsApp } from "@/components/ui/Icons";
import { securityNotice } from "@/data/giving";
import { duration, ease } from "@/lib/motion";

export function SecurityNoticeBox() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{
        opacity: 1,
        y: 0,
        boxShadow: [
          "0 0 0 0 rgba(200, 135, 58, 0)",
          "0 0 0 8px rgba(200, 135, 58, 0.25)",
          "0 0 0 0 rgba(200, 135, 58, 0)",
        ],
      }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 1.2, ease: ease.entrance }}
      className="bg-amber-50 rounded-3xl p-6 sm:p-8 border-2 border-amber-300 text-amber-950 space-y-4 shadow-md"
    >
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-amber-200 text-amber-900 flex items-center justify-center shrink-0">
          <IconShield size={22} />
        </div>
        <h3 className="font-display font-bold text-lg sm:text-xl text-amber-950">
          Pemberitahuan Keamanan & Rekening Resmi
        </h3>
      </div>

      <p className="text-sm sm:text-base leading-relaxed font-sans font-medium text-amber-950">
        {securityNotice.bankNotice}
      </p>

      <div className="pt-3 border-t border-amber-200 space-y-2 text-xs sm:text-sm text-amber-900">
        <div className="flex items-start gap-2">
          <IconInstagram size={16} className="text-amber-800 shrink-0 mt-0.5" />
          <p>
            <span className="font-bold underline">Waspada Akun Palsu:</span>{" "}
            {securityNotice.instagramWarning}
          </p>
        </div>

        <div className="flex items-start gap-2 pt-1">
          <IconWhatsApp size={16} className="text-amber-800 shrink-0 mt-0.5" />
          <p>
            {securityNotice.whatsappConfirmation}
          </p>
        </div>
      </div>
    </motion.div>
  );
}
