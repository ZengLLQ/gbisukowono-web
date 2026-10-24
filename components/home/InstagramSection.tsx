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
      className="py-24 bg-sand text-ink border-t border-line overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header & CTA */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
          <Reveal>
            <span className="text-xs uppercase tracking-widest text-accent-text font-bold mb-3 block">
              DOKUMENTASI & MEDIA SOSIAL
            </span>
            <h2
              id="instagram-heading"
              className="text-3xl sm:text-4xl font-display font-extrabold tracking-tight text-ink"
            >
              Ikuti kami di @gbi_sukowono
            </h2>
            <p className="text-stone text-sm sm:text-base mt-2 max-w-xl">
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
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-ink hover:bg-charcoal text-white font-semibold text-sm shadow-md transition-all active:scale-[0.98] focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent"
              >
                <IconInstagram size={18} className="text-accent" />
                <span>Buka Instagram @gbi_sukowono</span>
                <IconArrowRight size={15} />
              </a>
            </Magnetic>
          </Reveal>
        </div>

        {/* 3x2 Photo Grid */}
        <RevealStagger className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
          {instagramPhotos.map((photo, i) => (
            <RevealStaggerItem key={i}>
              <a
                href="https://www.instagram.com/gbi_sukowono"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Buka foto ${photo.alt} di Instagram`}
                className="group relative aspect-square block rounded-2xl overflow-hidden bg-charcoal shadow-sm hover:shadow-xl transition-all"
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  sizes="(max-width: 768px) 50vw, 33vw"
                  className="object-cover group-hover:scale-108 transition-transform duration-500"
                />
                <div
                  className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center text-white gap-2 backdrop-blur-[2px]"
                  aria-hidden="true"
                >
                  <IconInstagram size={28} className="text-accent" />
                </div>
              </a>
            </RevealStaggerItem>
          ))}
        </RevealStagger>
      </div>
    </section>
  );
}
