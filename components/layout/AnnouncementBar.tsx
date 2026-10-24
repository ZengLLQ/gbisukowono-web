"use client";

import React, { useSyncExternalStore } from "react";
import { motion, AnimatePresence } from "motion/react";
import { IconInstagram, IconClose } from "@/components/ui/Icons";
import { duration, ease } from "@/lib/motion";

const STORAGE_KEY = "gbi_announcement_dismissed_v1";

function subscribe(callback: () => void) {
  if (typeof window === "undefined") return () => {};
  window.addEventListener("storage", callback);
  window.addEventListener("gbi-announcement-dismiss", callback);
  return () => {
    window.removeEventListener("storage", callback);
    window.removeEventListener("gbi-announcement-dismiss", callback);
  };
}

function getSnapshot(): boolean {
  if (typeof window === "undefined") return false;
  try {
    return sessionStorage.getItem(STORAGE_KEY) !== "true";
  } catch {
    return true;
  }
}

function getServerSnapshot(): boolean {
  return false;
}

export function AnnouncementBar() {
  const isVisible = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  const handleDismiss = () => {
    try {
      sessionStorage.setItem(STORAGE_KEY, "true");
    } catch {
      // ignore in incognito or restricted storage
    }
    window.dispatchEvent(new Event("gbi-announcement-dismiss"));
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.aside
          data-announcement
          aria-label="Pengumuman Resmi"
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: duration.accordion, ease: ease.ui }}
          className="bg-charcoal text-sand text-xs sm:text-sm border-b border-white/10 overflow-hidden relative z-50"
        >
          <div className="max-w-7xl mx-auto px-4 py-2.5 flex items-center justify-between gap-3">
            <div className="flex items-center gap-2 flex-1 justify-center text-center">
              <span className="inline-flex items-center gap-1.5 font-medium">
                <IconInstagram size={15} className="text-accent shrink-0" />
                <span>Informasi resmi:</span>
              </span>
              <span className="text-stone-300">
                Akun Instagram resmi kami hanya{" "}
                <a
                  href="https://www.instagram.com/gbi_sukowono"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent hover:text-white underline font-semibold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent"
                >
                  @gbi_sukowono
                </a>
              </span>
            </div>
            <button
              type="button"
              onClick={handleDismiss}
              aria-label="Tutup pengumuman"
              className="p-1 text-stone-400 hover:text-white rounded-full transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent shrink-0"
            >
              <IconClose size={16} />
            </button>
          </div>
        </motion.aside>
      )}
    </AnimatePresence>
  );
}
