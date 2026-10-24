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
        className="relative pt-36 pb-20 sm:py-36 bg-charcoal text-white overflow-hidden"
      >
        <div className="absolute inset-0 z-0 opacity-20">
          <Image
            src="/images/sunday-service.webp"
            alt="Ibadah GBI Sukowono"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div
            className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/80 to-charcoal/90"
            aria-hidden="true"
          />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
          <Reveal>
            <div className="mb-6">
              <NextServiceBadge />
            </div>

            <h1 className="text-3xl sm:text-5xl md:text-6xl font-display font-extrabold tracking-tight text-white mb-6">
              Waktu Ibadah & Petunjuk Lokasi
            </h1>
            <p className="max-w-2xl mx-auto text-base sm:text-xl text-sand/80 font-sans leading-relaxed">
              Bergabunglah bersama kami di Sukowono, Jember. Kami menyambut Anda
              dan keluarga dengan penuh sukacita dan kehangatan hadirat Tuhan.
            </p>
          </Reveal>
        </div>
      </section>

      {/* 2. Schedule Cards (Large, Rounded) */}
      <section
        aria-labelledby="schedule-cards-heading"
        className="py-24 bg-white text-ink"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Reveal>
              <span className="text-xs uppercase tracking-widest text-accent-text font-bold mb-3 block">
                PELAYANAN RUTIN
              </span>
              <h2
                id="schedule-cards-heading"
                className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold tracking-tight text-ink mb-4"
              >
                Jadwal Ibadah Mingguan
              </h2>
              <p className="text-stone text-base sm:text-lg">
                Tiga kesempatan utama setiap minggu untuk berakar dan bersekutu.
              </p>
            </Reveal>
          </div>

          <RevealStagger className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {weeklySchedule.map((service) => (
              <RevealStaggerItem key={service.id}>
                <div className="h-full bg-sand rounded-3xl p-8 border border-line shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold uppercase tracking-wider text-accent-text bg-accent/15 px-3 py-1 rounded-full">
                        {service.day}
                      </span>
                      {service.category === "raya" && (
                        <span className="text-[11px] font-semibold text-stone bg-white px-2.5 py-0.5 rounded-full border border-line">
                          Ibadah Utama
                        </span>
                      )}
                    </div>

                    <h3 className="text-2xl font-display font-bold text-ink group-hover:text-accent-text transition-colors">
                      {service.name}
                    </h3>

                    <div className="flex items-center gap-2 text-xl font-display font-extrabold text-ink">
                      <IconClock size={20} className="text-accent" />
                      <span>{service.time}</span>
                    </div>

                    {service.doorsOpen && (
                      <p className="text-xs text-stone font-medium">
                        Pintu dibuka: {service.doorsOpen}
                      </p>
                    )}

                    <p className="text-stone text-sm leading-relaxed font-sans pt-2">
                      {service.description}
                    </p>

                    {service.notes && (
                      <div className="bg-white/80 p-3.5 rounded-xl border border-line text-xs text-accent-text font-medium">
                        {service.notes}
                      </div>
                    )}
                  </div>

                  <div className="pt-6 mt-6 border-t border-line/60">
                    <a
                      href={churchContact.whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-xs font-bold text-accent-text group-hover:underline"
                    >
                      <IconWhatsApp size={15} />
                      <span>Tanya Seputar Ibadah Ini</span>
                    </a>
                  </div>
                </div>
              </RevealStaggerItem>
            ))}
          </RevealStagger>

          {/* Hari Raya Gerejawi Strip */}
          <div className="mt-16 bg-charcoal text-white rounded-3xl p-8 sm:p-10 border border-white/10 shadow-xl">
            <Reveal>
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-8 pb-6 border-b border-white/10">
                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-accent mb-1 block">
                    KALENDER LITURGI
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-display font-bold">
                    Hari Raya Gerejawi
                  </h3>
                </div>
                <p className="text-sand/70 text-sm max-w-md">
                  Ibadah perayaan khusus tahunan yang diperingati jemaat GBI
                  Sukowono dengan penuh ucapan syukur.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {churchHolyDays.map((holyDay) => (
                  <div
                    key={holyDay.name}
                    className="bg-ink/60 p-5 rounded-2xl border border-white/5 space-y-2"
                  >
                    <span className="text-[10px] font-bold uppercase tracking-wider text-accent bg-accent/20 px-2 py-0.5 rounded-full inline-block">
                      {holyDay.badge}
                    </span>
                    <h4 className="font-display font-bold text-lg text-white">
                      {holyDay.name}
                    </h4>
                    <p className="text-xs text-accent font-medium">
                      {holyDay.season}
                    </p>
                    <p className="text-xs text-sand/70 leading-relaxed">
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
        className="py-20 bg-sand text-ink border-t border-line"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <WeeklyTimeline />
        </div>
      </section>

      {/* 4. Location Block (Elevation Campus Card Style) */}
      <section
        id="lokasi"
        aria-labelledby="location-heading"
        className="py-24 sm:py-32 bg-white text-ink border-t border-line scroll-mt-28"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Reveal>
              <span className="text-xs uppercase tracking-widest text-accent-text font-bold mb-3 block">
                KAMPUS & GEDUNG GEREJA
              </span>
              <h2
                id="location-heading"
                className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold tracking-tight text-ink mb-4"
              >
                Lokasi GBI Sukowono
              </h2>
              <p className="text-stone text-base sm:text-lg">
                Berlokasi strategis di Sukowono, Kabupaten Jember, Jawa Timur.
              </p>
            </Reveal>
          </div>

          <div className="bg-sand rounded-3xl overflow-hidden border border-line shadow-xl">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Left Column: Image & Details */}
              <div className="p-8 sm:p-12 flex flex-col justify-between space-y-8">
                <div className="space-y-6">
                  <div className="relative aspect-[16/10] rounded-2xl overflow-hidden shadow-md">
                    <Image
                      src="/images/hero-sanctuary.webp"
                      alt="Gedung Ruang Ibadah GBI Sukowono"
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover"
                    />
                    <div className="absolute top-3 left-3 bg-charcoal/80 text-white text-xs px-3 py-1 rounded-full font-medium">
                      Gedung Ibadah
                    </div>
                  </div>

                  <div>
                    <h3 className="text-2xl font-display font-bold text-ink mb-2">
                      {churchContact.fullName}
                    </h3>
                    <div className="flex items-start gap-2.5 text-stone text-sm leading-relaxed">
                      <IconMapPin size={18} className="text-accent-text shrink-0 mt-0.5" />
                      <span>{churchContact.address.full}</span>
                    </div>
                  </div>

                  {/* Facilities */}
                  <div className="space-y-2 pt-2">
                    <p className="text-xs font-bold uppercase tracking-wider text-stone">
                      Fasilitas Tempat Ibadah:
                    </p>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-stone">
                      {churchContact.facilities.map((fac, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <IconCheck size={14} className="text-accent-text shrink-0" />
                          <span>{fac}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-line">
                  <Magnetic>
                    <a
                      href={churchContact.maps.directUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-ink hover:bg-charcoal text-white font-bold text-sm shadow-md transition-all active:scale-[0.98] focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent"
                    >
                      <IconMapPin size={16} className="text-accent" />
                      <span>Buka di Google Maps</span>
                    </a>
                  </Magnetic>

                  <Magnetic>
                    <a
                      href={churchContact.whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white hover:bg-sand text-ink font-semibold text-sm border border-line shadow-sm transition-all active:scale-[0.98] focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent"
                    >
                      <IconWhatsApp size={16} className="text-accent-text" />
                      <span>Petunjuk Jalan via WhatsApp</span>
                    </a>
                  </Magnetic>
                </div>
              </div>

              {/* Right Column: Google Maps Embed */}
              <div className="relative min-h-[380px] lg:min-h-full bg-line/50 border-t lg:border-t-0 lg:border-l border-line">
                <iframe
                  title="Peta Lokasi GBI Sukowono Jember"
                  src={churchContact.maps.embedUrl}
                  width="100%"
                  height="100%"
                  className="absolute inset-0 border-0 w-full h-full"
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
        className="py-24 bg-sand text-ink border-t border-line"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Reveal>
              <span className="text-xs uppercase tracking-widest text-accent-text font-bold mb-3 block">
                PERTANYAAN UMUM
              </span>
              <h2
                id="faq-heading"
                className="text-3xl sm:text-4xl font-display font-extrabold tracking-tight text-ink mb-4"
              >
                Pertanyaan Seputar Ibadah
              </h2>
              <p className="text-stone text-base">
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
