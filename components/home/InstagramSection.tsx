"use client";

import React from "react";
import Image from "next/image";
import { IconInstagram, IconArrowRight } from "@/components/ui/Icons";
import { Reveal } from "@/components/motion/Reveal";
import { RevealStagger, RevealStaggerItem } from "@/components/motion/RevealStagger";
import { Magnetic } from "@/components/motion/Magnetic";

const instagramPhotos = [
  { src: "/images/hero-sanctuary.webp", alt: "Suasana ruang ibadah GBI Sukowono" },
  { src: "/images/sunday-service.webp", alt: "Ibadah Raya Minggu di Sukowono" },
  { src: "/images/worship-night.webp", alt: "Penyembahan intim Worship Night" },
  { src: "/images/fellowship-table.webp", alt: "Persekutuan jemaat dan keluarga" },
  { src: "/images/youth-group.webp", alt: "Kebersamaan pemuda dan remaja" },
  { src: "/images/open-bible.webp", alt: "Pendalaman firman Tuhan" },
];

export function InstagramSection() {
  return (
    <section
      aria-labelledby="instagram-heading"
      className="py-24 bg-[#07080A] text-white border-t border-white/[0.06] overflow-hidden relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header & CTA */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
          <Reveal>
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-[11px] font-mono tracking-widest uppercase text-accent mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
              DOKUMENTASI & MEDIA SOSIAL
            </span>
            <h2
              id="instagram-heading"
              className="text-3xl sm:text-4xl font-serif font-normal tracking-tight text-white"
            >
              Ikuti kami di @gbi_sukowono
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-xl font-light">
              Dapatkan cuplikan khotbah, warta mingguan, dan dokumentasi ibadah
              langsung di feed Instagram resmi kami.
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <Magnetic>
              <a
                href="https://www.instagram.com/gbi_sukowono"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white hover:bg-neutral-200 text-black font-semibold text-xs sm:text-sm shadow-[0_0_20px_rgba(255,255,255,0.15)] transition-all active:scale-[0.98] focus-visible:outline focus-visible:outline-2 focus-visible:outline-white"
              >
                <IconInstagram size={16} className="text-black" />
                <span>Buka Instagram @gbi_sukowono</span>
                <IconArrowRight size={14} />
              </a>
            </Magnetic>
          </Reveal>
        </div>

        {/* 3x2 Photo Grid in Amperos Bento Style */}
        <RevealStagger className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
          {instagramPhotos.map((photo, i) => (
            <RevealStaggerItem key={i}>
              <a
                href="https://www.instagram.com/gbi_sukowono"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Buka foto ${photo.alt} di Instagram`}
                className="group relative aspect-square block rounded-2xl overflow-hidden bg-black border border-white/[0.08] hover:border-white/20 shadow-lg transition-all"
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  sizes="(max-width: 768px) 50vw, 33vw"
                  className="object-cover group-hover:scale-108 transition-transform duration-700 opacity-80 group-hover:opacity-100"
                />
                <div
                  className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center text-white gap-2 backdrop-blur-[2px]"
                  aria-hidden="true"
                >
                  <div className="w-10 h-10 rounded-full bg-accent/20 border border-accent/40 flex items-center justify-center text-accent">
                    <IconInstagram size={22} />
                  </div>
                </div>
              </a>
            </RevealStaggerItem>
          ))}
        </RevealStagger>
      </div>
    </section>
  );
}
