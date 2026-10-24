import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import { KegiatanFilterGrid } from "@/components/kegiatan/KegiatanFilterGrid";
import { ClosingCtaBand } from "@/components/layout/ClosingCtaBand";
import { Reveal } from "@/components/motion/Reveal";
import { RevealStagger, RevealStaggerItem } from "@/components/motion/RevealStagger";
import { Magnetic } from "@/components/motion/Magnetic";
import { weeklySpeakers } from "@/data/speakers";
import { IconCalendar, IconInstagram } from "@/components/ui/Icons";

export const metadata: Metadata = {
  title: "Kegiatan & Warta Jemaat – GBI Sukowono, Jember",
  description:
    "Warta jemaat, pengumuman ibadah raya, persekutuan doa, kegiatan pemuda, serta jadwal pembicara mingguan di GBI Sukowono, Jember.",
};

export default function KegiatanPage() {
  return (
    <>
      {/* 1. Hero Section */}
      <section
        aria-label="Kegiatan dan Warta GBI Sukowono"
        className="relative pt-36 pb-20 sm:py-36 bg-charcoal text-white overflow-hidden"
      >
        <div className="absolute inset-0 z-0 opacity-20">
          <Image
            src="/images/youth-group.webp"
            alt="Kegiatan Jemaat GBI Sukowono"
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

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Reveal>
            <span className="inline-block text-xs uppercase tracking-widest text-accent font-bold mb-4">
              WARTA & AGENDA PELAYANAN
            </span>
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-display font-extrabold tracking-tight text-white mb-6">
              Kegiatan & Warta Jemaat
            </h1>
            <p className="max-w-2xl mx-auto text-base sm:text-xl text-sand/80 font-sans leading-relaxed">
              Tetap terhubung dengan kabar terbaru, agenda ibadah raya, dan
              kegiatan persekutuan di keluarga besar GBI Sukowono.
            </p>
          </Reveal>
        </div>
      </section>

      {/* 2. Filter & Announcements Grid */}
      <section
        aria-labelledby="warta-heading"
        className="py-20 sm:py-28 bg-sand text-ink"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <Reveal>
              <h2
                id="warta-heading"
                className="text-2xl sm:text-3xl font-display font-bold text-ink mb-2"
              >
                Pilih Berdasarkan Kategori
              </h2>
              <p className="text-stone text-sm sm:text-base">
                Gunakan filter di bawah untuk memilah kegiatan yang Anda cari.
              </p>
            </Reveal>
          </div>

          <KegiatanFilterGrid />
        </div>
      </section>

      {/* 3. "Pembicara Mingguan" Section (Styled like Sermons Grid) */}
      <section
        aria-labelledby="speakers-heading"
        className="py-24 sm:py-32 bg-white text-ink border-t border-line"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <Reveal>
              <span className="text-xs uppercase tracking-widest text-accent-text font-bold mb-3 block">
                MIMBAR FIRMAN TUHAN
              </span>
              <h2
                id="speakers-heading"
                className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold tracking-tight text-ink"
              >
                Pembicara Mingguan
              </h2>
              <p className="text-stone text-base mt-2 max-w-xl">
                Daftar pelayan firman dan tema khotbah dalam ibadah jemaat GBI
                Sukowono. Dokumentasi foto dan kutipan firman tersedia di
                Instagram resmi.
              </p>
            </Reveal>

            <Reveal delay={0.1}>
              <Magnetic>
                <a
                  href="https://www.instagram.com/gbi_sukowono"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-ink hover:bg-charcoal text-white font-bold text-sm shadow-md transition-all active:scale-[0.98] focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent"
                >
                  <IconInstagram size={17} className="text-accent" />
                  <span>Lihat Dokumentasi @gbi_sukowono</span>
                </a>
              </Magnetic>
            </Reveal>
          </div>

          <RevealStagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {weeklySpeakers.map((session) => (
              <RevealStaggerItem key={session.id}>
                <div className="bg-sand rounded-3xl p-6 sm:p-8 border border-line shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between text-xs text-stone">
                      <div className="flex items-center gap-1.5 font-medium">
                        <IconCalendar size={14} className="text-accent-text" />
                        <span>{session.date}</span>
                      </div>
                      <span className="text-[11px] font-semibold text-accent-text bg-accent/15 px-2.5 py-0.5 rounded-full">
                        {session.service}
                      </span>
                    </div>

                    <div className="pt-2">
                      <span className="text-xs uppercase tracking-wider text-stone font-semibold block">
                        Tema Khotbah:
                      </span>
                      <h3 className="text-xl font-display font-bold text-ink group-hover:text-accent-text transition-colors mt-1 leading-snug">
                        &ldquo;{session.topic}&rdquo;
                      </h3>
                      {session.passage && (
                        <p className="text-xs font-bold text-accent-text mt-1">
                          Ref: {session.passage}
                        </p>
                      )}
                    </div>

                    <div className="pt-4 border-t border-line/60">
                      <p className="text-xs uppercase tracking-wider text-stone">
                        Pelayan Firman:
                      </p>
                      <p className="text-base font-display font-bold text-ink">
                        {session.name}
                      </p>
                      <p className="text-xs text-stone/80">{session.title}</p>
                    </div>
                  </div>

                  <div className="pt-6 mt-4">
                    <a
                      href="https://www.instagram.com/gbi_sukowono"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-accent-text group-hover:underline"
                    >
                      <IconInstagram size={14} />
                      <span>Cuplikan Khotbah di Instagram</span>
                    </a>
                  </div>
                </div>
              </RevealStaggerItem>
            ))}
          </RevealStagger>
        </div>
      </section>

      {/* 4. Closing CTA */}
      <ClosingCtaBand />
    </>
  );
}
