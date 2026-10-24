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
      className="py-24 sm:py-32 bg-sand text-ink border-t border-line"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <Reveal>
            <span className="text-xs uppercase tracking-widest text-accent-text font-bold mb-3 block">
              KOMUNITAS & PELAYANAN
            </span>
            <h2
              id="ministries-heading"
              className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold tracking-tight text-ink mb-5"
            >
              Tempat untuk Kamu dan Keluargamu
            </h2>
            <p className="text-stone text-base sm:text-lg leading-relaxed">
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
                <div className="group h-full bg-white rounded-2xl overflow-hidden border border-line shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col">
                  {/* Card Image */}
                  <div className="relative aspect-[4/3] overflow-hidden bg-charcoal">
                    <Image
                      src={ministry.image}
                      alt={ministry.name}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div
                      className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"
                      aria-hidden="true"
                    />
                    {isPlaceholder && (
                      <div className="absolute top-3 right-3 bg-amber-500/90 text-ink text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider">
                        Konfirmasi Pengurus
                      </div>
                    )}
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-xl font-display font-bold text-white group-hover:text-accent transition-colors">
                        {ministry.name}
                      </h3>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-6 flex flex-col flex-1 justify-between gap-4">
                    <p className="text-stone text-sm leading-relaxed font-sans">
                      {ministry.tagline}
                    </p>

                    <div className="pt-2 border-t border-line/60">
                      <Link
                        href="/kontak"
                        className="inline-flex items-center gap-2 text-xs font-bold text-accent-text group-hover:text-accent-dark transition-colors"
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
