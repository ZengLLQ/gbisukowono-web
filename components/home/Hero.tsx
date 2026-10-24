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
      className="relative min-h-[92vh] sm:min-h-screen flex items-center justify-center overflow-hidden bg-ink text-white"
    >
      {/* Background Hero Image with Ken Burns animation */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <Image
          src="/images/hero-sanctuary.webp"
          alt="Ruang Ibadah GBI Sukowono Jember"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center hero-kenburns opacity-45 scale-[1.05]"
        />
        {/* Dark cinematic gradient overlays for maximum contrast and readability */}
        <div
          className="absolute inset-0 bg-gradient-to-t from-ink via-ink/65 to-ink/75"
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 bg-radial-at-c from-transparent via-black/40 to-black/80"
          aria-hidden="true"
        />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-32 sm:py-40 text-center flex flex-col items-center">
        {/* Eyebrow badge */}
        <div className="hero-fade-up [--i:0] inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs sm:text-sm font-semibold tracking-wider uppercase text-accent mb-6 sm:mb-8">
          <IconClock size={15} />
          <span>Ibadah Raya Setiap Minggu Pukul 18.00 WIB</span>
        </div>

        {/* H1 Heading */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-extrabold tracking-tight text-white leading-[1.08] mb-6 max-w-4xl">
          <TextReveal
            as="span"
            text="Selamat Datang di Rumah Tuhan – GBI Sukowono"
          />
        </h1>

        {/* Subtitle */}
        <p className="hero-fade-up [--i:1] text-base sm:text-xl md:text-2xl text-sand/90 font-sans max-w-3xl leading-relaxed mb-10 sm:mb-12">
          Mari kita datang untuk Memuji, Menyembah, Berdoa dan Menikmati
          Hadirat Tuhan Yesus.
        </p>

        {/* CTA Buttons */}
        <div className="hero-fade-up [--i:2] flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
          <Magnetic>
            <Link
              href="/jadwal"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-accent hover:bg-accent-dark text-ink font-bold text-base shadow-xl transition-all active:scale-[0.98] focus-visible:outline focus-visible:outline-2 focus-visible:outline-white"
            >
              <span>Lihat Jadwal Ibadah</span>
              <IconArrowRight size={18} />
            </Link>
          </Magnetic>

          <Magnetic>
            <a
              href="https://wa.me/6281217407046?text=Halo%20Sekretariat%20GBI%20Sukowono,%20saya%20ingin%20mengetahui%20informasi%20ibadah"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-white/10 hover:bg-white/20 text-white font-medium text-base border border-white/25 backdrop-blur-md transition-all active:scale-[0.98] focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent"
            >
              <IconWhatsApp size={18} className="text-accent" />
              <span>Hubungi Sekretariat</span>
            </a>
          </Magnetic>
        </div>

        {/* Animated Scroll Down Indicator */}
        <div
          className="hero-fade-up [--i:3] absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-sand/60 text-xs font-medium tracking-widest uppercase pointer-events-none"
          aria-hidden="true"
        >
          <span>Gulir Ke Bawah</span>
          <div className="w-5 h-9 rounded-full border-2 border-white/30 flex items-start justify-center p-1">
            <div className="w-1.5 h-2.5 rounded-full bg-accent scroll-cue-line" />
          </div>
        </div>
      </div>
    </section>
  );
}
