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
      className="sticky top-16 z-30 bg-charcoal/90 backdrop-blur-md border-y border-white/10 py-3 px-4 transition-all"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-start sm:justify-center gap-2 sm:gap-6 overflow-x-auto no-scrollbar py-0.5">
        {navSections.map((item) => {
          const isActive = activeId === item.id;
          return (
            <button
              key={item.id}
              type="button"
              onClick={() => scrollTo(item.id)}
              className={`relative px-3.5 py-1.5 text-xs sm:text-sm font-medium whitespace-nowrap rounded-full transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent ${
                isActive ? "text-white font-bold" : "text-sand/70 hover:text-white"
              }`}
            >
              {item.label}
              {isActive && (
                <motion.div
                  layoutId="activeTentangUnderline"
                  className="absolute bottom-0 left-2 right-2 h-0.5 bg-accent rounded-full"
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
