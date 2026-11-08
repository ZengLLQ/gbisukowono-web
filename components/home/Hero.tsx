"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { IconArrowRight, IconWhatsApp, IconClock } from "@/components/ui/Icons";
import { TextReveal } from "@/components/motion/TextReveal";
import { Magnetic } from "@/components/motion/Magnetic";

export function Hero() {
  return (
    <section
      aria-label="Sambutan Utama"
      className="relative min-h-[94vh] sm:min-h-screen flex items-center justify-center overflow-hidden bg-[#07080A] text-white pt-24 pb-16"
    >
      {/* Background Hero Image with Ken Burns animation & deep dark overlay */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <Image
          src="/images/hero-sanctuary.webp"
          alt="Ruang Ibadah GBI Sukowono Jember"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center hero-kenburns opacity-35 scale-[1.05]"
        />
        {/* Deep cinematic gradient overlays for Amperos dark canvas */}
        <div
          className="absolute inset-0 bg-gradient-to-t from-[#07080A] via-[#07080A]/80 to-[#07080A]/60"
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_40%,rgba(229,169,60,0.12),transparent_70%)] pointer-events-none"
          aria-hidden="true"
        />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-28 sm:py-36 text-center flex flex-col items-center">
        {/* Eyebrow badge */}
        <div className="hero-fade-up [--i:0] inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/[0.05] backdrop-blur-xl border border-white/10 text-xs sm:text-sm font-mono tracking-wider uppercase text-slate-200 mb-8 sm:mb-10 shadow-sm">
          <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
          <IconClock size={14} className="text-accent" />
          <span>Ibadah Raya Setiap Minggu Pukul 18.00 WIB</span>
        </div>

        {/* H1 Heading in Editorial Display Serif */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-normal tracking-tight text-white leading-[1.06] mb-6 max-w-4xl text-balance">
          <TextReveal
            as="span"
            text="Selamat Datang di Rumah Tuhan – GBI Sukowono"
          />
        </h1>

        {/* Subtitle */}
        <p className="hero-fade-up [--i:1] text-base sm:text-xl md:text-2xl text-slate-300 font-sans max-w-3xl leading-relaxed mb-10 sm:mb-12 font-light">
          Mari kita datang untuk Memuji, Menyembah, Berdoa dan Menikmati
          Hadirat Tuhan Yesus.
        </p>

        {/* CTA Buttons in Amperos High-Contrast Style */}
        <div className="hero-fade-up [--i:2] flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
          <Magnetic>
            <Link
              href="/jadwal"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full bg-white hover:bg-neutral-200 text-black font-semibold text-sm sm:text-base shadow-[0_0_25px_rgba(255,255,255,0.2)] transition-all active:scale-[0.98] focus-visible:outline focus-visible:outline-2 focus-visible:outline-white"
            >
              <span>Lihat Jadwal Ibadah</span>
              <IconArrowRight size={16} />
            </Link>
          </Magnetic>

          <Magnetic>
            <a
              href="https://wa.me/6281217407046?text=Halo%20Sekretariat%20GBI%20Sukowono,%20saya%20ingin%20mengetahui%20informasi%20ibadah"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full bg-white/[0.05] hover:bg-white/[0.1] text-white font-medium text-sm sm:text-base border border-white/15 backdrop-blur-xl transition-all active:scale-[0.98] focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent"
            >
              <IconWhatsApp size={16} className="text-accent" />
              <span>Hubungi Sekretariat</span>
            </a>
          </Magnetic>
        </div>

        {/* Animated Scroll Down Indicator */}
        <div
          className="hero-fade-up [--i:3] absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-400 text-[10px] font-mono tracking-widest uppercase pointer-events-none"
          aria-hidden="true"
        >
          <span>Gulir Ke Bawah</span>
          <div className="w-4 h-7 rounded-full border border-white/20 flex items-start justify-center p-1">
            <div className="w-1 h-2 rounded-full bg-accent scroll-cue-line" />
          </div>
        </div>
      </div>
    </section>
  );
}
