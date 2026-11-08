import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import { TentangNav } from "@/components/tentang/TentangNav";
import { PreachersGrid } from "@/components/tentang/PreachersGrid";
import { ClosingCtaBand } from "@/components/layout/ClosingCtaBand";
import { Reveal } from "@/components/motion/Reveal";
import { Parallax } from "@/components/motion/Parallax";
import { ImageReveal } from "@/components/motion/ImageReveal";
import {
  seniorPastor,
  churchAffiliation,
  faithAndValues,
  whatToExpect,
} from "@/data/leaders";

export const metadata: Metadata = {
  title: "Tentang Kami – GBI Sukowono, Jember",
  description:
    "Profil Gereja Bethel Indonesia Sukowono, sejarah persekutuan di bawah Sinode GBI dan GBI Mojopahit Family, Gembala Jemaat Ps. Herman Wijaya, dan para pelayan firman.",
};

export default function TentangPage() {
  return (
    <>
      {/* 1. Hero Statement Section */}
      <section
        id="tentang-hero"
        aria-label="Tentang GBI Sukowono"
        className="relative pt-36 pb-24 sm:py-36 bg-[#07080A] text-white overflow-hidden border-b border-white/[0.06]"
      >
        <div className="absolute inset-0 z-0 opacity-25">
          <Image
            src="/images/village-road.webp"
            alt="Pemandangan Sukowono Jember"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
          <div
            className="absolute inset-0 bg-gradient-to-t from-[#07080A] via-[#07080A]/80 to-[#07080A]/90"
            aria-hidden="true"
          />
        </div>

        {/* Ambient Glow */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-accent/[0.07] rounded-full blur-[160px] pointer-events-none"
          aria-hidden="true"
        />

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Reveal>
            <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/[0.04] border border-white/10 text-[11px] font-mono tracking-widest uppercase text-accent mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
              TENTANG GBI SUKOWONO
            </span>
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-display font-medium tracking-tight text-white mb-6 leading-tight text-balance">
              Menjadi Rumah Rohani yang Berakar dan Berbuah di Sukowono
            </h1>
            <p className="max-w-2xl mx-auto text-base sm:text-xl text-slate-300 font-sans leading-relaxed font-light">
              Kami rindu setiap orang yang melangkahkan kaki ke tempat ini
              mengalami kasih Kristus yang nyata, pemulihan hadirat-Nya, dan
              kehangatan persekutuan keluarga Allah.
            </p>
          </Reveal>
        </div>
      </section>

      {/* 2. In-Page Sticky Nav */}
      <TentangNav />

      {/* 3. "Siapa Kami" Section */}
      <section
        id="siapa-kami"
        aria-labelledby="siapa-kami-heading"
        className="py-24 sm:py-32 bg-[#0A0C10] text-white border-b border-white/[0.06] scroll-mt-28"
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/[0.04] border border-white/10 text-[11px] font-mono tracking-widest uppercase text-accent mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                SEJARAH & AFILIASI
              </span>
              <h2
                id="siapa-kami-heading"
                className="text-3xl sm:text-4xl md:text-5xl font-display font-medium tracking-tight text-white mb-6"
              >
                Siapa Kami
              </h2>
              <p className="text-slate-300 text-base sm:text-lg leading-relaxed font-sans font-light">
                {churchAffiliation.statement}
              </p>
            </div>
          </Reveal>

          {/* Keyakinan Kami & Nilai Kami Cards in Bento Style */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Reveal delay={0.1}>
              <div className="bento-card bento-shimmer p-8 h-full flex flex-col justify-between shadow-xl">
                <div>
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-accent block mb-2">
                    {faithAndValues.beliefsSubtitle}
                  </span>
                  <h3 className="text-2xl font-display font-medium text-white mb-4">
                    {faithAndValues.beliefsTitle}
                  </h3>
                  <p className="text-slate-300 text-sm leading-relaxed font-sans font-light">
                    {faithAndValues.beliefsContent}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-white/[0.08] text-xs text-slate-400 font-mono">
                  Sinode Gereja Bethel Indonesia (BPD GBI Jatim)
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="bento-card bento-shimmer p-8 h-full flex flex-col justify-between shadow-xl">
                <div>
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-accent block mb-2">
                    {faithAndValues.valuesSubtitle}
                  </span>
                  <h3 className="text-2xl font-display font-medium text-white mb-4">
                    {faithAndValues.valuesTitle}
                  </h3>
                  <p className="text-slate-300 text-sm leading-relaxed font-sans font-light">
                    {faithAndValues.valuesContent}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-white/[0.08] text-xs text-slate-400 font-mono">
                  GBI Mojopahit Family (Jember)
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 4. Gembala Jemaat (Meet Our Pastor) Section */}
      <section
        id="kepemimpinan"
        aria-labelledby="pastor-heading"
        className="py-24 sm:py-32 bg-[#07080A] text-white border-b border-white/[0.06] scroll-mt-28"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            {/* Pastor Photo with subtle Parallax */}
            <div className="w-full lg:w-1/2">
              <Reveal>
                <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl bg-black border border-white/10 bento-shimmer">
                  <Parallax offset={25} className="w-full h-full">
                    <Image
                      src={seniorPastor.image}
                      alt={`${seniorPastor.name} – ${seniorPastor.role}`}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover object-top"
                    />
                  </Parallax>
                  <div
                    className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"
                    aria-hidden="true"
                  />
                  <div className="absolute bottom-6 left-6 right-6 text-white">
                    <p className="text-xs uppercase tracking-wider text-accent font-mono font-medium">
                      {seniorPastor.officialTitle}
                    </p>
                    <p className="text-2xl sm:text-3xl font-display font-medium">
                      {seniorPastor.name}
                    </p>
                    <p className="text-xs text-slate-400 mt-1">{seniorPastor.role}</p>
                  </div>
                </div>
              </Reveal>
            </div>

            {/* Pastor Bio in Bento Card */}
            <div className="w-full lg:w-1/2 space-y-6">
              <Reveal delay={0.15}>
                <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/[0.04] border border-white/10 text-[11px] font-mono tracking-widest uppercase text-accent mb-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                  KEPEMIMPINAN GEREJA
                </span>
                <h2
                  id="pastor-heading"
                  className="text-3xl sm:text-4xl md:text-5xl font-display font-medium tracking-tight text-white mb-4"
                >
                  Gembala Jemaat
                </h2>
                <div className="space-y-4 text-slate-300 text-base sm:text-lg leading-relaxed font-sans font-light">
                  <p className="font-semibold text-white">
                    {seniorPastor.name} ({seniorPastor.officialTitle})
                  </p>
                  <div className="bento-card bento-shimmer p-6 text-sm sm:text-base leading-relaxed text-slate-200">
                    {seniorPastor.bio}
                  </div>
                  <p className="text-sm text-slate-400">
                    Pelayanan penggembalaan GBI Sukowono mengedepankan ketulusan,
                    keakraban jemaat, serta pengajaran firman yang berpusat pada
                    Kristus untuk membangun iman jemaat di wilayah Sukowono dan
                    sekitarnya.
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Para Pelayan Firman Grid */}
      <section
        id="pelayan-firman"
        aria-labelledby="preachers-heading"
        className="py-24 sm:py-32 bg-[#0A0C10] text-white border-b border-white/[0.06] scroll-mt-28"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Reveal>
              <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/[0.04] border border-white/10 text-[11px] font-mono tracking-widest uppercase text-accent mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                TIM PENGAJAR & KHOTBAH
              </span>
              <h2
                id="preachers-heading"
                className="text-3xl sm:text-4xl md:text-5xl font-display font-medium tracking-tight text-white mb-5"
              >
                Para Pelayan Firman
              </h2>
              <p className="text-slate-400 text-base sm:text-lg leading-relaxed font-sans font-light">
                Hamba-hamba Tuhan yang setia melayani mimbar dan membagikan roti
                kehidupan bagi pertumbuhan rohani jemaat GBI Sukowono.
              </p>
            </Reveal>
          </div>

          <PreachersGrid />
        </div>
      </section>

      {/* 6. "Apa yang Diharapkan" (3 Alternating Rows in Bento Style) */}
      <section
        id="apa-yang-diharapkan"
        aria-labelledby="what-to-expect-heading"
        className="py-24 sm:py-32 bg-[#07080A] text-white border-b border-white/[0.06] scroll-mt-28"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <Reveal>
              <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/[0.04] border border-white/10 text-[11px] font-mono tracking-widest uppercase text-accent mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                PENGALAMAN IBADAH
              </span>
              <h2
                id="what-to-expect-heading"
                className="text-3xl sm:text-4xl md:text-5xl font-display font-medium tracking-tight text-white mb-5"
              >
                Apa yang Diharapkan
              </h2>
              <p className="text-slate-400 text-base sm:text-lg leading-relaxed font-sans font-light">
                Ketika Anda hadir di GBI Sukowono, inilah suasana dan pengalaman
                rohani yang kami rindukan bersama.
              </p>
            </Reveal>
          </div>

          <div className="space-y-16 sm:space-y-20">
            {whatToExpect.map((row, i) => {
              const isReversed = i % 2 === 1;

              return (
                <div
                  key={row.id}
                  className="bento-card bento-shimmer p-6 sm:p-8 lg:p-10 shadow-xl"
                >
                  <div
                    className={`flex flex-col lg:flex-row items-center gap-10 lg:gap-14 ${
                      isReversed ? "lg:flex-row-reverse" : ""
                    }`}
                  >
                    <div className="w-full lg:w-1/2">
                      <ImageReveal className="relative aspect-[16/10] rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                        <Image
                          src={row.image}
                          alt={row.title}
                          fill
                          sizes="(max-width: 1024px) 100vw, 50vw"
                          className="object-cover"
                        />
                      </ImageReveal>
                    </div>

                    <div className="w-full lg:w-1/2 space-y-4">
                      <Reveal>
                        <span className="text-xs font-mono font-medium uppercase tracking-widest text-accent">
                          0{i + 1} • PENGALAMAN
                        </span>
                        <h3 className="text-2xl sm:text-3xl font-display font-medium text-white mt-2 mb-3">
                          {row.title}
                        </h3>
                        <p className="text-xs font-mono uppercase tracking-wider text-accent mb-3">
                          {row.tagline}
                        </p>
                        <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-sans font-light">
                          {row.description}
                        </p>
                      </Reveal>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 7. Closing CTA */}
      <ClosingCtaBand />
    </>
  );
}
