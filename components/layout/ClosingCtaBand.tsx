"use client";

import React from "react";
import Link from "next/link";
import { IconArrowRight, IconWhatsApp } from "@/components/ui/Icons";
import { Reveal } from "@/components/motion/Reveal";
import { Magnetic } from "@/components/motion/Magnetic";

export function ClosingCtaBand() {
  return (
    <section
      aria-label="Ajakan Beribadah"
      className="relative overflow-hidden bg-[#07080A] text-white py-24 sm:py-32 border-t border-white/[0.06]"
    >
      {/* Subtle animated gradient background accent */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-accent/[0.06] rounded-full blur-[180px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bento-card bento-shimmer p-10 sm:p-16 text-center border-white/10 shadow-2xl relative">
          <Reveal>
            <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/[0.04] border border-white/10 text-[11px] font-mono tracking-widest uppercase text-accent mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
              RUMAH BAGI SEMUA ORANG
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-normal tracking-tight text-white mb-5 leading-tight text-balance">
              Siap berkunjung? Ibadah setiap Minggu pukul 18.00 WIB
            </h2>
            <p className="max-w-2xl mx-auto text-sm sm:text-base text-slate-300 mb-10 leading-relaxed font-sans font-light">
              Pintu dibuka pukul 17.00 WIB. Ruang ibadah kami sejuk dan ramah untuk
              seluruh keluarga. Kami rindu menyambut kehadiran Anda untuk memuji dan
              menyembah Tuhan bersama.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <Magnetic>
                <Link
                  href="/jadwal"
                  className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-white hover:bg-neutral-200 text-black font-semibold text-xs sm:text-sm tracking-wide shadow-[0_0_25px_rgba(255,255,255,0.2)] transition-all active:scale-[0.98] focus-visible:outline focus-visible:outline-2 focus-visible:outline-white"
                >
                  <span>Lihat Jadwal Lengkap</span>
                  <IconArrowRight size={15} />
                </Link>
              </Magnetic>

              <Magnetic>
                <a
                  href="https://wa.me/6281217407046?text=Halo%20Sekretariat%20GBI%20Sukowono,%20saya%20ingin%20bertanya%20mengenai%20ibadah"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-white/[0.05] hover:bg-white/[0.1] text-white font-medium text-xs sm:text-sm border border-white/15 backdrop-blur-md transition-all active:scale-[0.98] focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent"
                >
                  <IconWhatsApp size={16} className="text-accent" />
                  <span>Hubungi via WhatsApp</span>
                </a>
              </Magnetic>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
