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
        className="relative pt-40 pb-20 sm:pt-48 sm:pb-28 bg-[#07080A] text-white overflow-hidden"
      >
        {/* Ambient Top Glow Cone */}
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-[radial-gradient(ellipse_at_top,rgba(229,169,60,0.15),transparent_70%)] pointer-events-none z-0"
          aria-hidden="true"
        />

        <div className="absolute inset-0 z-0 opacity-15">
          <Image
            src="/images/youth-group.webp"
            alt="Kegiatan Jemaat GBI Sukowono"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div
            className="absolute inset-0 bg-gradient-to-t from-[#07080A] via-[#07080A]/85 to-[#07080A]/95"
            aria-hidden="true"
          />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Reveal>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-accent font-mono text-[11px] uppercase tracking-widest mb-6 backdrop-blur-md">
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
              <span>WARTA & AGENDA PELAYANAN</span>
            </div>
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-serif font-normal tracking-tight text-white mb-6">
              Kegiatan & Warta Jemaat
            </h1>
            <p className="max-w-2xl mx-auto text-base sm:text-lg text-slate-400 font-sans leading-relaxed">
              Tetap terhubung dengan kabar terbaru, agenda ibadah raya, dan
              kegiatan persekutuan di keluarga besar GBI Sukowono.
            </p>
          </Reveal>
        </div>
      </section>

      {/* 2. Filter & Announcements Grid */}
      <section
        aria-labelledby="warta-heading"
        className="py-20 sm:py-28 bg-[#07080A] text-slate-100 border-t border-white/5"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <Reveal>
              <h2
                id="warta-heading"
                className="text-2xl sm:text-3xl font-serif font-normal text-white mb-3"
              >
                Pilih Berdasarkan Kategori
              </h2>
              <p className="text-slate-400 text-sm sm:text-base">
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
        className="py-24 sm:py-32 bg-[#07080A] text-slate-100 border-t border-white/5"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <Reveal>
              <span className="text-xs uppercase tracking-widest text-accent font-mono font-semibold mb-3 block">
                MIMBAR FIRMAN TUHAN
              </span>
              <h2
                id="speakers-heading"
                className="text-3xl sm:text-4xl md:text-5xl font-serif font-normal tracking-tight text-white"
              >
                Pembicara Mingguan
              </h2>
              <p className="text-slate-400 text-base mt-2 max-w-xl">
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
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white hover:bg-slate-200 text-[#07080A] font-semibold text-sm shadow-[0_10px_30px_rgba(255,255,255,0.1)] transition-all active:scale-[0.98] focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent"
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
                <div className="bento-card bento-shimmer bg-white/[0.025] hover:bg-white/[0.04] rounded-2xl p-6 sm:p-8 border border-white/10 transition-all duration-300 flex flex-col justify-between group">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between text-xs text-slate-400">
                      <div className="flex items-center gap-1.5 font-medium">
                        <IconCalendar size={14} className="text-accent" />
                        <span>{session.date}</span>
                      </div>
                      <span className="text-[11px] font-semibold text-accent bg-accent/15 border border-accent/25 px-2.5 py-0.5 rounded-full">
                        {session.service}
                      </span>
                    </div>

                    <div className="pt-2">
                      <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 block">
                        Tema Khotbah:
                      </span>
                      <h3 className="text-xl font-serif font-normal text-white group-hover:text-accent transition-colors mt-1.5 leading-snug">
                        &ldquo;{session.topic}&rdquo;
                      </h3>
                      {session.passage && (
                        <p className="text-xs font-medium text-accent mt-1.5">
                          Ref: {session.passage}
                        </p>
                      )}
                    </div>

                    <div className="pt-4 border-t border-white/10">
                      <p className="text-[11px] font-mono uppercase tracking-wider text-slate-400">
                        Pelayan Firman:
                      </p>
                      <p className="text-base font-medium text-white mt-0.5">
                        {session.name}
                      </p>
                      <p className="text-xs text-slate-400">{session.title}</p>
                    </div>
                  </div>

                  <div className="pt-6 mt-4">
                    <a
                      href="https://www.instagram.com/gbi_sukowono"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-accent group-hover:underline"
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