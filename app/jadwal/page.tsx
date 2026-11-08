import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import { NextServiceBadge } from "@/components/jadwal/NextServiceBadge";
import { WeeklyTimeline } from "@/components/jadwal/WeeklyTimeline";
import { Accordion } from "@/components/ui/Accordion";
import { ClosingCtaBand } from "@/components/layout/ClosingCtaBand";
import { Reveal } from "@/components/motion/Reveal";
import { RevealStagger, RevealStaggerItem } from "@/components/motion/RevealStagger";
import { Magnetic } from "@/components/motion/Magnetic";
import {
  IconClock,
  IconMapPin,
  IconWhatsApp,
  IconCheck,
} from "@/components/ui/Icons";
import { weeklySchedule, churchHolyDays } from "@/data/schedule";
import { churchContact } from "@/data/contact";
import { scheduleFaqs } from "@/data/faqs";

export const metadata: Metadata = {
  title: "Jadwal Ibadah & Lokasi – GBI Sukowono, Jember",
  description:
    "Jadwal Ibadah Raya Minggu (18.00 WIB), Worship Night Jumat (18.30 WIB), Persekutuan Doa Selasa (18.00 WIB), peta lokasi Google Maps, dan petunjuk kehadiran di GBI Sukowono.",
};

export default function JadwalPage() {
  return (
    <>
      {/* 1. Hero Section */}
      <section
        aria-label="Informasi Jadwal dan Lokasi"
        className="relative pt-36 pb-20 sm:py-36 bg-[#07080A] text-white overflow-hidden border-b border-white/[0.06]"
      >
        <div className="absolute inset-0 z-0 opacity-25">
          <Image
            src="/images/sunday-service.webp"
            alt="Ibadah GBI Sukowono"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div
            className="absolute inset-0 bg-gradient-to-t from-[#07080A] via-[#07080A]/85 to-[#07080A]/90"
            aria-hidden="true"
          />
        </div>

        {/* Ambient Glow */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-accent/[0.07] rounded-full blur-[160px] pointer-events-none"
          aria-hidden="true"
        />

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
          <Reveal>
            <div className="mb-6">
              <NextServiceBadge />
            </div>

            <h1 className="text-3xl sm:text-5xl md:text-6xl font-display font-medium tracking-tight text-white mb-6 text-balance">
              Waktu Ibadah & Petunjuk Lokasi
            </h1>
            <p className="max-w-2xl mx-auto text-base sm:text-xl text-slate-300 font-sans leading-relaxed font-light">
              Bergabunglah bersama kami di Sukowono, Jember. Kami menyambut Anda
              dan keluarga dengan penuh sukacita dan kehangatan hadirat Tuhan.
            </p>
          </Reveal>
        </div>
      </section>

      {/* 2. Schedule Cards (Large, Rounded Bento) */}
      <section
        aria-labelledby="schedule-cards-heading"
        className="py-24 bg-[#0A0C10] text-white border-b border-white/[0.06]"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Reveal>
              <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/[0.04] border border-white/10 text-[11px] font-mono tracking-widest uppercase text-accent mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                PELAYANAN RUTIN
              </span>
              <h2
                id="schedule-cards-heading"
                className="text-3xl sm:text-4xl md:text-5xl font-display font-medium tracking-tight text-white mb-4"
              >
                Jadwal Ibadah Mingguan
              </h2>
              <p className="text-slate-400 text-base sm:text-lg font-light">
                Tiga kesempatan utama setiap minggu untuk berakar dan bersekutu.
              </p>
            </Reveal>
          </div>

          <RevealStagger className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {weeklySchedule.map((service) => (
              <RevealStaggerItem key={service.id}>
                <div className="h-full bento-card bento-shimmer p-8 flex flex-col justify-between group shadow-xl">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono font-bold uppercase tracking-wider text-accent bg-accent/15 px-3 py-1 rounded-full border border-accent/25">
                        {service.day}
                      </span>
                      {service.category === "raya" && (
                        <span className="text-[10px] font-mono text-slate-300 bg-white/5 px-2.5 py-1 rounded-full border border-white/10">
                          Ibadah Utama
                        </span>
                      )}
                    </div>

                    <h3 className="text-2xl font-display font-medium text-white group-hover:text-accent transition-colors">
                      {service.name}
                    </h3>

                    <div className="flex items-center gap-2 text-xl font-mono font-semibold text-white">
                      <IconClock size={20} className="text-accent" />
                      <span>{service.time}</span>
                    </div>

                    {service.doorsOpen && (
                      <p className="text-xs text-slate-400 font-mono">
                        Pintu dibuka: {service.doorsOpen}
                      </p>
                    )}

                    <p className="text-slate-300 text-sm leading-relaxed font-sans font-light pt-2">
                      {service.description}
                    </p>

                    {service.notes && (
                      <div className="bg-white/[0.04] p-3.5 rounded-xl border border-white/[0.08] text-xs text-accent font-medium">
                        {service.notes}
                      </div>
                    )}
                  </div>

                  <div className="pt-6 mt-6 border-t border-white/[0.08]">
                    <a
                      href={churchContact.whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-xs font-semibold text-accent hover:text-white transition-colors"
                    >
                      <IconWhatsApp size={15} />
                      <span>Tanya Seputar Ibadah Ini</span>
                    </a>
                  </div>
                </div>
              </RevealStaggerItem>
            ))}
          </RevealStagger>

          {/* Hari Raya Gerejawi Strip in Amperos Bento Style */}
          <div className="mt-16 bento-card bento-shimmer p-8 sm:p-10 border border-white/10 shadow-2xl">
            <Reveal>
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-8 pb-6 border-b border-white/[0.08]">
                <div>
                  <span className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-widest uppercase text-accent mb-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                    KALENDER LITURGI
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-display font-medium text-white">
                    Hari Raya Gerejawi
                  </h3>
                </div>
                <p className="text-slate-400 text-sm max-w-md font-light">
                  Ibadah perayaan khusus tahunan yang diperingati jemaat GBI
                  Sukowono dengan penuh ucapan syukur.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {churchHolyDays.map((holyDay) => (
                  <div
                    key={holyDay.name}
                    className="bg-white/[0.02] p-5 rounded-2xl border border-white/[0.06] hover:border-white/15 space-y-2 transition-colors"
                  >
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-accent bg-accent/15 px-2.5 py-0.5 rounded-full inline-block border border-accent/20">
                      {holyDay.badge}
                    </span>
                    <h4 className="font-display font-medium text-lg text-white">
                      {holyDay.name}
                    </h4>
                    <p className="text-xs text-accent font-mono font-medium">
                      {holyDay.season}
                    </p>
                    <p className="text-xs text-slate-400 leading-relaxed font-light">
                      {holyDay.description}
                    </p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 3. Visual Weekly Timeline */}
      <section
        aria-label="Garis Waktu Mingguan"
        className="py-20 bg-[#07080A] text-white border-b border-white/[0.06]"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <WeeklyTimeline />
        </div>
      </section>

      {/* 4. Location Block in Bento Style */}
      <section
        id="lokasi"
        aria-labelledby="location-heading"
        className="py-24 sm:py-32 bg-[#090B0E] text-white border-b border-white/[0.06] scroll-mt-28"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Reveal>
              <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/[0.04] border border-white/10 text-[11px] font-mono tracking-widest uppercase text-accent mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                KAMPUS & GEDUNG GEREJA
              </span>
              <h2
                id="location-heading"
                className="text-3xl sm:text-4xl md:text-5xl font-display font-medium tracking-tight text-white mb-4"
              >
                Lokasi GBI Sukowono
              </h2>
              <p className="text-slate-400 text-base sm:text-lg font-light">
                Berlokasi strategis di Sukowono, Kabupaten Jember, Jawa Timur.
              </p>
            </Reveal>
          </div>

          <div className="bento-card bento-shimmer overflow-hidden shadow-2xl border-white/10">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Left Column: Image & Details */}
              <div className="p-8 sm:p-12 flex flex-col justify-between space-y-8">
                <div className="space-y-6">
                  <div className="relative aspect-[16/10] rounded-2xl overflow-hidden border border-white/10 shadow-md">
                    <Image
                      src="/images/hero-sanctuary.webp"
                      alt="Gedung Ruang Ibadah GBI Sukowono"
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover"
                    />
                    <div className="absolute top-3 left-3 bg-[#090B0E]/80 backdrop-blur-md text-white text-xs px-3 py-1 rounded-full font-mono border border-white/10">
                      Gedung Ibadah
                    </div>
                  </div>

                  <div>
                    <h3 className="text-2xl font-display font-medium text-white mb-2">
                      {churchContact.fullName}
                    </h3>
                    <div className="flex items-start gap-2.5 text-slate-300 text-sm leading-relaxed">
                      <IconMapPin size={18} className="text-accent shrink-0 mt-0.5" />
                      <span>{churchContact.address.full}</span>
                    </div>
                  </div>

                  {/* Facilities */}
                  <div className="space-y-2 pt-2">
                    <p className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400">
                      Fasilitas Tempat Ibadah:
                    </p>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300">
                      {churchContact.facilities.map((fac, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <IconCheck size={14} className="text-accent shrink-0" />
                          <span>{fac}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Action Buttons in Amperos Style */}
                <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-white/[0.08]">
                  <Magnetic>
                    <a
                      href={churchContact.maps.directUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white hover:bg-neutral-200 text-black font-semibold text-xs sm:text-sm tracking-wide shadow-md transition-all active:scale-[0.98] focus-visible:outline focus-visible:outline-2 focus-visible:outline-white"
                    >
                      <IconMapPin size={16} />
                      <span>Buka di Google Maps</span>
                    </a>
                  </Magnetic>

                  <Magnetic>
                    <a
                      href={churchContact.whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/[0.05] hover:bg-white/[0.1] text-white font-medium text-xs sm:text-sm border border-white/15 backdrop-blur-md transition-all active:scale-[0.98] focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent"
                    >
                      <IconWhatsApp size={16} className="text-accent" />
                      <span>Petunjuk Jalan via WhatsApp</span>
                    </a>
                  </Magnetic>
                </div>
              </div>

              {/* Right Column: Google Maps Embed */}
              <div className="relative min-h-[380px] lg:min-h-full bg-black/40 border-t lg:border-t-0 lg:border-l border-white/[0.08]">
                <iframe
                  title="Peta Lokasi GBI Sukowono Jember"
                  src={churchContact.maps.embedUrl}
                  width="100%"
                  height="100%"
                  className="absolute inset-0 border-0 w-full h-full grayscale contrast-125 opacity-85 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. FAQ Accordion Section */}
      <section
        aria-labelledby="faq-heading"
        className="py-24 bg-[#07080A] text-white border-b border-white/[0.06]"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Reveal>
              <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/[0.04] border border-white/10 text-[11px] font-mono tracking-widest uppercase text-accent mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                PERTANYAAN UMUM
              </span>
              <h2
                id="faq-heading"
                className="text-3xl sm:text-4xl font-display font-medium tracking-tight text-white mb-4"
              >
                Pertanyaan Seputar Ibadah
              </h2>
              <p className="text-slate-400 text-sm sm:text-base font-light">
                Informasi praktis bagi Anda yang merencanakan kunjungan pertama.
              </p>
            </Reveal>
          </div>

          <Accordion items={scheduleFaqs} />
        </div>
      </section>

      {/* 6. Closing CTA */}
      <ClosingCtaBand />
    </>
  );
}
