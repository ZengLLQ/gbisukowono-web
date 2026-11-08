"use client";

import React from "react";
import { motion } from "motion/react";
import { IconShield, IconInstagram, IconWhatsApp } from "@/components/ui/Icons";
import { securityNotice } from "@/data/giving";
import { ease } from "@/lib/motion";

export function SecurityNoticeBox() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{
        opacity: 1,
        y: 0,
        boxShadow: [
          "0 0 0 0 rgba(229, 169, 60, 0)",
          "0 0 0 8px rgba(229, 169, 60, 0.2)",
          "0 0 0 0 rgba(229, 169, 60, 0)",
        ],
      }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 1.2, ease: ease.entrance }}
      className="bento-card bento-shimmer rounded-3xl p-6 sm:p-8 border border-accent/30 bg-[#0C0E15]/90 text-slate-200 space-y-4 shadow-2xl relative"
    >
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-accent/20 border border-accent/40 text-accent flex items-center justify-center shrink-0">
          <IconShield size={20} />
        </div>
        <h3 className="font-display font-medium text-lg sm:text-xl text-white">
          Pemberitahuan Keamanan & Rekening Resmi
        </h3>
      </div>

      <p className="text-sm sm:text-base leading-relaxed font-sans font-light text-slate-300">
        {securityNotice.bankNotice}
      </p>

      <div className="pt-3 border-t border-white/[0.08] space-y-2 text-xs sm:text-sm text-slate-300">
        <div className="flex items-start gap-2">
          <IconInstagram size={15} className="text-accent shrink-0 mt-0.5" />
          <p>
            <span className="font-bold underline text-white">Waspada Akun Palsu:</span>{" "}
            {securityNotice.instagramWarning}
          </p>
        </div>

        <div className="flex items-start gap-2 pt-1">
          <IconWhatsApp size={15} className="text-accent shrink-0 mt-0.5" />
          <p>
            {securityNotice.whatsappConfirmation}
          </p>
        </div>
      </div>
    </motion.div>
  );
}
