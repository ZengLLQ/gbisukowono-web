"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { weeklySchedule } from "@/data/schedule";
import { IconArrowRight, IconClock, IconCalendar } from "@/components/ui/Icons";
import { ImageReveal } from "@/components/motion/ImageReveal";
import { Reveal } from "@/components/motion/Reveal";
import { distance } from "@/lib/motion";

export function ServicesSection() {
  return (
    <section
      aria-labelledby="services-heading"
      className="py-24 sm:py-32 bg-[#07080A] text-white overflow-hidden border-t border-white/[0.06] relative"
    >
      {/* Ambient Radial Glow */}
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-accent/[0.04] rounded-full blur-[160px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <Reveal>
            <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/[0.04] border border-white/10 text-[11px] font-mono tracking-widest uppercase text-accent mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
              JADWAL & PERSEKUTUAN
            </span>
            <h2
              id="services-heading"
              className="text-3xl sm:text-4xl md:text-5xl font-serif font-normal tracking-tight text-white mb-5"
            >
              Temukan Ibadah yang Tepat untukmu
            </h2>
            <p className="text-base sm:text-lg text-slate-300 font-sans leading-relaxed font-light">
              Tuhan rindu berjumpa secara pribadi dengan Anda melalui firman,
              pujian, dan persekutuan yang menguatkan.
            </p>
          </Reveal>
        </div>

        {/* Alternating Service Blocks inside Amperos Bento Cards */}
        <div className="space-y-16 sm:space-y-20">
          {weeklySchedule.map((service, index) => {
            const isReversed = index % 2 === 1;
            const imageSlideX = isReversed ? distance.slide : -distance.slide;
            const textSlideX = isReversed ? -distance.slide : distance.slide;

            return (
              <div
                key={service.id}
                className="bento-card p-6 sm:p-8 lg:p-10 bento-shimmer"
              >
                <div
                  className={`flex flex-col lg:flex-row items-center gap-10 lg:gap-14 ${
                    isReversed ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  {/* Image Column */}
                  <div className="w-full lg:w-1/2">
                    <ImageReveal
                      x={imageSlideX}
                      className="relative aspect-[16/10] sm:aspect-[16/9] rounded-2xl overflow-hidden border border-white/10 shadow-2xl"
                    >
                      <Image
                        src={service.image}
                        alt={service.name}
                        fill
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                      />
                      <div
                        className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"
                        aria-hidden="true"
                      />
                      <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white text-xs sm:text-sm font-medium">
                        <span className="bg-[#090B0E]/80 backdrop-blur-md px-3 py-1 rounded-full border border-white/15 text-slate-200 font-mono">
                          {service.day}
                        </span>
                        <span className="bg-accent text-black px-3.5 py-1 rounded-full font-bold">
                          {service.time}
                        </span>
                      </div>
                    </ImageReveal>
                  </div>

                  {/* Content Column */}
                  <div className="w-full lg:w-1/2 space-y-5">
                    <Reveal x={textSlideX} y={0}>
                      <div className="inline-flex items-center gap-2 text-xs font-mono font-medium tracking-wider text-accent uppercase">
                        <IconCalendar size={15} />
                        <span>{service.day}</span>
                        <span>•</span>
                        <IconClock size={15} />
                        <span>{service.time}</span>
                      </div>

                      <h3 className="text-2xl sm:text-3xl md:text-4xl font-serif font-normal text-white mt-2 mb-3">
                        {service.name}
                      </h3>

                      <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-5 font-sans font-light">
                        {service.description}
                      </p>

                      {service.doorsOpen && (
                        <div className="text-xs sm:text-sm text-slate-300 bg-white/[0.03] backdrop-blur-md p-4 rounded-xl border border-white/[0.08] mb-5">
                          <span className="font-semibold text-white font-mono">Catatan Waktu:</span> Pintu
                          dibuka mulai pukul {service.doorsOpen}.
                          {service.notes && <p className="mt-1 text-accent font-medium">{service.notes}</p>}
                        </div>
                      )}

                      <div className="pt-2">
                        <Link
                          href="/jadwal"
                          className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-accent hover:text-white transition-colors group py-1"
                        >
                          <span>Lihat Detail & Lokasi Ibadah</span>
                          <IconArrowRight
                            size={16}
                            className="group-hover:translate-x-1.5 transition-transform"
                          />
                        </Link>
                      </div>
                    </Reveal>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
