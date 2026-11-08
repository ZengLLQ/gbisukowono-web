"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ministries } from "@/data/ministries";
import { IconArrowRight } from "@/components/ui/Icons";
import { Reveal } from "@/components/motion/Reveal";
import { RevealStagger, RevealStaggerItem } from "@/components/motion/RevealStagger";

export function MinistriesGrid() {
  return (
    <section
      aria-labelledby="ministries-heading"
      className="py-24 sm:py-32 bg-[#07080A] text-white border-t border-white/[0.06] relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <Reveal>
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-[11px] font-mono tracking-widest uppercase text-accent mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
              KOMUNITAS & PELAYANAN
            </span>
            <h2
              id="ministries-heading"
              className="text-3xl sm:text-4xl md:text-5xl font-serif font-normal tracking-tight text-white mb-5"
            >
              Tempat untuk Kamu dan Keluargamu
            </h2>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed font-light">
              Setiap anggota jemaat dianugerahi talenta unik. Temukan wadah
              pelayanan untuk bertumbuh dan memberkati sesama.
            </p>
          </Reveal>
        </div>

        <RevealStagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {ministries.map((ministry) => {
            const isPlaceholder = ministry.status === "placeholder";

            return (
              <RevealStaggerItem key={ministry.id}>
                <div className="group h-full bento-card bento-shimmer flex flex-col justify-between shadow-xl">
                  {/* Card Image */}
                  <div className="relative aspect-[4/3] overflow-hidden bg-black">
                    <Image
                      src={ministry.image}
                      alt={ministry.name}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-700 opacity-90"
                    />
                    <div
                      className="absolute inset-0 bg-gradient-to-t from-[#090B0E] via-black/30 to-transparent"
                      aria-hidden="true"
                    />
                    {isPlaceholder && (
                      <div className="absolute top-3 right-3 bg-amber-500/20 text-accent border border-accent/30 text-[10px] font-mono px-2.5 py-1 rounded-full uppercase tracking-wider backdrop-blur-md">
                        Konfirmasi Pengurus
                      </div>
                    )}
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-xl font-serif font-normal text-white group-hover:text-accent transition-colors">
                        {ministry.name}
                      </h3>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-6 flex flex-col flex-1 justify-between gap-4">
                    <p className="text-slate-300 text-xs sm:text-sm leading-relaxed font-sans font-light">
                      {ministry.tagline}
                    </p>

                    <div className="pt-3 border-t border-white/[0.08]">
                      <Link
                        href="/kontak"
                        className="inline-flex items-center gap-2 text-xs font-semibold text-accent hover:text-white transition-colors"
                      >
                        <span>Selengkapnya</span>
                        <IconArrowRight
                          size={14}
                          className="transform group-hover:translate-x-1.5 transition-transform"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </RevealStaggerItem>
            );
          })}
        </RevealStagger>
      </div>
    </section>
  );
}
