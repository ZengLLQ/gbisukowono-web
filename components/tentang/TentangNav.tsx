"use client";

import React, { useState, useEffect } from "react";
import { motion } from "motion/react";
import { ease } from "@/lib/motion";

const navSections = [
  { id: "tentang-hero", label: "Tentang" },
  { id: "siapa-kami", label: "Siapa Kami" },
  { id: "kepemimpinan", label: "Kepemimpinan" },
  { id: "pelayan-firman", label: "Pelayan Firman" },
  { id: "apa-yang-diharapkan", label: "Apa yang Diharapkan" },
];

export function TentangNav() {
  const [activeId, setActiveId] = useState("tentang-hero");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 180;

      for (let i = navSections.length - 1; i >= 0; i--) {
        const section = document.getElementById(navSections[i].id);
        if (section && section.offsetTop <= scrollPos) {
          setActiveId(navSections[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const offsetTop = el.offsetTop - 110;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
      setActiveId(id);
    }
  };

  return (
    <nav
      aria-label="Navigasi Bagian Tentang Kami"
      className="sticky top-20 z-30 py-3 px-4 transition-all pointer-events-none"
    >
      <div className="max-w-fit mx-auto flex items-center justify-start sm:justify-center gap-1.5 sm:gap-3 overflow-x-auto no-scrollbar py-1.5 px-3 rounded-full bg-[#0A0C10]/85 backdrop-blur-xl border border-white/10 shadow-2xl pointer-events-auto bento-shimmer">
        {navSections.map((item) => {
          const isActive = activeId === item.id;
          return (
            <button
              key={item.id}
              type="button"
              onClick={() => scrollTo(item.id)}
              className={`relative px-3.5 py-1.5 text-xs sm:text-sm font-medium whitespace-nowrap rounded-full transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent ${
                isActive ? "text-accent font-semibold" : "text-slate-400 hover:text-white hover:bg-white/[0.04]"
              }`}
            >
              {item.label}
              {isActive && (
                <motion.div
                  layoutId="activeTentangUnderline"
                  className="absolute inset-0 bg-white/[0.08] border border-white/15 rounded-full -z-10"
                  transition={{ duration: 0.25, ease: ease.ui }}
                />
              )}
            </button>
          );
        })}
      </div>
    </nav>
  );
}
