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
      className="relative overflow-hidden bg-charcoal text-white py-20 sm:py-24 border-t border-white/10"
    >
      {/* Subtle animated gradient background accent */}
      <div
        className="absolute inset-0 opacity-20 pointer-events-none cta-gradient bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-accent via-charcoal to-ink"
        aria-hidden="true"
      />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <Reveal>
          <span className="inline-block text-xs uppercase tracking-widest text-accent font-bold mb-3">
            RUMAH BAGI SEMUA ORANG
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold tracking-tight text-white mb-5 leading-tight">
            Siap berkunjung? Ibadah setiap Minggu pukul 18.00 WIB
          </h2>
          <p className="max-w-2xl mx-auto text-base sm:text-lg text-sand/80 mb-10 leading-relaxed font-sans">
            Pintu dibuka pukul 17.00 WIB. Ruang ibadah kami sejuk dan ramah untuk
            seluruh keluarga. Kami rindu menyambut kehadiran Anda untuk memuji dan
            menyembah Tuhan bersama.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Magnetic>
              <Link
                href="/jadwal"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-accent hover:bg-accent-dark text-ink font-bold text-base shadow-lg transition-all active:scale-[0.98] focus-visible:outline focus-visible:outline-2 focus-visible:outline-white"
              >
                <span>Lihat Jadwal Lengkap</span>
                <IconArrowRight size={18} />
              </Link>
            </Magnetic>

            <Magnetic>
              <a
                href="https://wa.me/6281217407046?text=Halo%20Sekretariat%20GBI%20Sukowono,%20saya%20ingin%20bertanya%20mengenai%20ibadah"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-white/10 hover:bg-white/20 text-white font-medium text-base border border-white/20 transition-all active:scale-[0.98] focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent"
              >
                <IconWhatsApp size={18} className="text-accent" />
                <span>Hubungi via WhatsApp</span>
              </a>
            </Magnetic>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
