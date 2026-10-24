"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { IconCopy, IconCheck, IconShield } from "@/components/ui/Icons";
import { bankDetails } from "@/data/giving";
import { duration, ease, scale } from "@/lib/motion";

export function BankCardCopy() {
  const [copied, setCopied] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  const handleCopy = async () => {
    const textToCopy = bankDetails.accountNumber;

    if (navigator.clipboard && window.isSecureContext) {
      try {
        await navigator.clipboard.writeText(textToCopy);
        setToastMessage("Nomor rekening berhasil disalin ke clipboard!");
        setCopied(true);
      } catch {
        fallbackCopy(textToCopy);
      }
    } else {
      fallbackCopy(textToCopy);
    }

    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setCopied(false);
      setToastMessage("");
    }, 2000);
  };

  const fallbackCopy = (text: string) => {
    try {
      const textArea = document.createElement("textarea");
      textArea.value = text;
      textArea.style.position = "fixed";
      textArea.style.left = "-999999px";
      textArea.style.top = "-999999px";
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();
      document.execCommand("copy");
      document.body.removeChild(textArea);
      setToastMessage("Nomor rekening berhasil disalin!");
      setCopied(true);
    } catch {
      setToastMessage("Gagal menyalin otomatis. Nomor rekening: 3343380000");
    }
  };

  return (
    <div className="relative">
      {/* Toast Notification */}
      <AnimatePresence>
        {toastMessage && (
          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.95 }}
            transition={{ duration: duration.fast, ease: ease.ui }}
            className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 bg-charcoal text-white px-6 py-3 rounded-full shadow-2xl border border-accent/40 flex items-center gap-2.5 text-xs sm:text-sm font-semibold"
            role="status"
            aria-live="polite"
          >
            <span className="w-5 h-5 rounded-full bg-accent text-ink flex items-center justify-center shrink-0">
              <IconCheck size={13} />
            </span>
            <span>{toastMessage}</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Bank Card with soft entrance animation */}
      <motion.div
        initial={{ opacity: 0, scale: scale.bankCardFrom }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: duration.base, ease: ease.entrance }}
        className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-charcoal via-ink to-black text-white p-8 sm:p-10 border border-white/15 shadow-2xl"
      >
        {/* Subtle decorative watermark */}
        <div
          className="absolute -right-10 -bottom-10 w-60 h-60 bg-accent/10 rounded-full blur-3xl pointer-events-none"
          aria-hidden="true"
        />

        <div className="relative z-10 flex flex-col justify-between min-h-[220px] gap-8">
          {/* Top Row: Bank Badge & Security Indicator */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-white text-ink flex items-center justify-center font-display font-extrabold text-lg tracking-wider shadow-md">
                BCA
              </div>
              <div>
                <p className="font-display font-bold text-lg leading-tight">
                  {bankDetails.bankName}
                </p>
                <p className="text-xs text-sand/70">{bankDetails.branch}</p>
              </div>
            </div>

            <div className="hidden sm:flex items-center gap-1.5 text-[11px] text-accent bg-accent/15 px-3 py-1 rounded-full border border-accent/30 font-semibold">
              <IconShield size={14} />
              <span>Rekening Resmi Gereja</span>
            </div>
          </div>

          {/* Middle: Account Number & Copy Button */}
          <div className="space-y-3">
            <span className="text-[11px] uppercase tracking-wider text-sand/70 font-semibold block">
              Nomor Rekening BCA:
            </span>

            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white/5 backdrop-blur-md p-4 sm:p-5 rounded-2xl border border-white/10">
              <div className="font-mono text-2xl sm:text-3xl md:text-4xl font-bold tracking-widest text-white select-all">
                334 338 0000
              </div>

              <button
                type="button"
                onClick={handleCopy}
                aria-label="Salin Nomor Rekening BCA 334 338 0000"
                className={`inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-xs sm:text-sm font-bold transition-all active:scale-[0.98] focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent shadow-md shrink-0 ${
                  copied
                    ? "bg-green-600 text-white"
                    : "bg-accent hover:bg-accent-dark text-ink"
                }`}
              >
                {copied ? (
                  <>
                    <IconCheck size={16} />
                    <span>Tersalin!</span>
                  </>
                ) : (
                  <>
                    <IconCopy size={16} />
                    <span>Salin Nomor Rekening</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Bottom: Account Holder Name (Placeholder Notice) */}
          <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs text-sand/80">
            <div>
              <span className="text-sand/60 block text-[11px]">Atas Nama Rekening:</span>
              <span className="font-semibold text-sand">
                {bankDetails.accountName}
              </span>
            </div>
            <div className="text-[11px] text-amber-300/90 italic">
              *Konfirmasi nama rekening kepada sekretariat gereja sebelum transfer.
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
