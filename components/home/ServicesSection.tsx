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
      className="py-24 sm:py-32 bg-sand text-ink overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <Reveal>
            <span className="text-xs uppercase tracking-widest text-accent-text font-bold mb-3 block">
              JADWAL & PERSEKUTUAN
            </span>
            <h2
              id="services-heading"
              className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold tracking-tight text-ink mb-5"
            >
              Temukan Ibadah yang Tepat untukmu
            </h2>
            <p className="text-base sm:text-lg text-stone font-sans leading-relaxed">
              Tuhan rindu berjumpa secara pribadi dengan Anda melalui firman,
              pujian, dan persekutuan yang menguatkan.
            </p>
          </Reveal>
        </div>

        {/* Alternating Service Blocks */}
        <div className="space-y-24 sm:space-y-32">
          {weeklySchedule.map((service, index) => {
            const isReversed = index % 2 === 1;

            return (
              <div
                key={service.id}
                className={`flex flex-col lg:flex-row items-center gap-10 lg:gap-16 ${
                  isReversed ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Image Column */}
                <div className="w-full lg:w-1/2">
                  <ImageReveal className="relative aspect-[16/10] sm:aspect-[16/9] shadow-2xl">
                    <Image
                      src={service.image}
                      alt={service.name}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover object-center"
                    />
                    <div
                      className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"
                      aria-hidden="true"
                    />
                    <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between text-white text-xs sm:text-sm font-medium">
                      <span className="bg-charcoal/80 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/15">
                        {service.day}
                      </span>
                      <span className="bg-accent/90 text-ink px-3.5 py-1.5 rounded-full font-bold">
                        {service.time}
                      </span>
                    </div>
                  </ImageReveal>
                </div>

                {/* Content Column */}
                <div className="w-full lg:w-1/2 space-y-6">
                  <Reveal y={distance.slide}>
                    <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-accent-text">
                      <IconCalendar size={16} />
                      <span>{service.day}</span>
                      <span>•</span>
                      <IconClock size={16} />
                      <span>{service.time}</span>
                    </div>

                    <h3 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-ink mt-2 mb-4">
                      {service.name}
                    </h3>

                    <p className="text-stone text-base sm:text-lg leading-relaxed mb-6 font-sans">
                      {service.description}
                    </p>

                    {service.doorsOpen && (
                      <div className="text-xs sm:text-sm text-stone/90 bg-white/70 backdrop-blur-sm p-4 rounded-xl border border-line mb-6">
                        <span className="font-semibold text-ink">Catatan Waktu:</span> Pintu
                        dibuka mulai pukul {service.doorsOpen}.
                        {service.notes && <p className="mt-1 text-accent-text font-medium">{service.notes}</p>}
                      </div>
                    )}

                    <div>
                      <Link
                        href="/jadwal"
                        className="inline-flex items-center gap-2 text-sm sm:text-base font-bold text-accent-text hover:text-accent-dark transition-colors link-draw group py-1"
                      >
                        <span>Lihat Detail & Lokasi Ibadah</span>
                        <IconArrowRight
                          size={18}
                          className="group-hover:translate-x-1 transition-transform"
                        />
                      </Link>
                    </div>
                  </Reveal>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
