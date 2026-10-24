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
        className="relative pt-36 pb-24 sm:py-36 bg-charcoal text-white overflow-hidden"
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
            className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/70 to-charcoal/90"
            aria-hidden="true"
          />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Reveal>
            <span className="inline-block text-xs uppercase tracking-widest text-accent font-bold mb-4">
              TENTANG GBI SUKOWONO
            </span>
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-display font-extrabold tracking-tight text-white mb-6 leading-tight">
              Menjadi Rumah Rohani yang Berakar dan Berbuah di Sukowono
            </h1>
            <p className="max-w-2xl mx-auto text-base sm:text-xl text-sand/80 font-sans leading-relaxed">
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
        className="py-24 sm:py-32 bg-white text-ink scroll-mt-28"
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-xs uppercase tracking-widest text-accent-text font-bold mb-3 block">
                SEJARAH & AFILIASI
              </span>
              <h2
                id="siapa-kami-heading"
                className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold tracking-tight text-ink mb-6"
              >
                Siapa Kami
              </h2>
              <p className="text-stone text-base sm:text-lg leading-relaxed font-sans">
                {churchAffiliation.statement}
              </p>
            </div>
          </Reveal>

          {/* Keyakinan Kami & Nilai Kami Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Reveal delay={0.1}>
              <div className="bg-sand rounded-2xl p-8 border border-line h-full flex flex-col justify-between">
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-accent-text block mb-2">
                    {faithAndValues.beliefsSubtitle}
                  </span>
                  <h3 className="text-2xl font-display font-bold text-ink mb-4">
                    {faithAndValues.beliefsTitle}
                  </h3>
                  <p className="text-stone text-sm leading-relaxed font-sans">
                    {faithAndValues.beliefsContent}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-line text-xs text-stone/70">
                  Sinode Gereja Bethel Indonesia (BPD GBI Jatim)
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="bg-sand rounded-2xl p-8 border border-line h-full flex flex-col justify-between">
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-accent-text block mb-2">
                    {faithAndValues.valuesSubtitle}
                  </span>
                  <h3 className="text-2xl font-display font-bold text-ink mb-4">
                    {faithAndValues.valuesTitle}
                  </h3>
                  <p className="text-stone text-sm leading-relaxed font-sans">
                    {faithAndValues.valuesContent}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-line text-xs text-stone/70">
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
        className="py-24 sm:py-32 bg-sand text-ink border-t border-line scroll-mt-28"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            {/* Pastor Photo with subtle Parallax */}
            <div className="w-full lg:w-1/2">
              <Reveal>
                <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl bg-charcoal">
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
                    className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"
                    aria-hidden="true"
                  />
                  <div className="absolute bottom-6 left-6 right-6 text-white">
                    <p className="text-xs uppercase tracking-wider text-accent font-semibold">
                      {seniorPastor.officialTitle}
                    </p>
                    <p className="text-2xl sm:text-3xl font-display font-bold">
                      {seniorPastor.name}
                    </p>
                    <p className="text-xs text-sand/80 mt-1">{seniorPastor.role}</p>
                  </div>
                </div>
              </Reveal>
            </div>

            {/* Pastor Bio */}
            <div className="w-full lg:w-1/2 space-y-6">
              <Reveal delay={0.15}>
                <span className="text-xs uppercase tracking-widest text-accent-text font-bold mb-2 block">
                  KEPEMIMPINAN GEREJA
                </span>
                <h2
                  id="pastor-heading"
                  className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold tracking-tight text-ink mb-4"
                >
                  Gembala Jemaat
                </h2>
                <div className="space-y-4 text-stone text-base sm:text-lg leading-relaxed font-sans">
                  <p className="font-semibold text-ink">
                    {seniorPastor.name} ({seniorPastor.officialTitle})
                  </p>
                  <p className="text-sm sm:text-base leading-relaxed bg-white p-5 rounded-2xl border border-line">
                    {seniorPastor.bio}
                  </p>
                  <p className="text-sm text-stone/80">
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
        className="py-24 sm:py-32 bg-white text-ink border-t border-line scroll-mt-28"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Reveal>
              <span className="text-xs uppercase tracking-widest text-accent-text font-bold mb-3 block">
                TIM PENGAJAR & KHOTBAH
              </span>
              <h2
                id="preachers-heading"
                className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold tracking-tight text-ink mb-5"
              >
                Para Pelayan Firman
              </h2>
              <p className="text-stone text-base sm:text-lg leading-relaxed font-sans">
                Hamba-hamba Tuhan yang setia melayani mimbar dan membagikan roti
                kehidupan bagi pertumbuhan rohani jemaat GBI Sukowono.
              </p>
            </Reveal>
          </div>

          <PreachersGrid />
        </div>
      </section>

      {/* 6. "Apa yang Diharapkan" (3 Alternating Rows) */}
      <section
        id="apa-yang-diharapkan"
        aria-labelledby="what-to-expect-heading"
        className="py-24 sm:py-32 bg-sand text-ink border-t border-line scroll-mt-28"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <Reveal>
              <span className="text-xs uppercase tracking-widest text-accent-text font-bold mb-3 block">
                PENGALAMAN IBADAH
              </span>
              <h2
                id="what-to-expect-heading"
                className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold tracking-tight text-ink mb-5"
              >
                Apa yang Diharapkan
              </h2>
              <p className="text-stone text-base sm:text-lg leading-relaxed font-sans">
                Ketika Anda hadir di GBI Sukowono, inilah suasana dan pengalaman
                rohani yang kami rindukan bersama.
              </p>
            </Reveal>
          </div>

          <div className="space-y-20 sm:space-y-28">
            {whatToExpect.map((row, i) => {
              const isReversed = i % 2 === 1;

              return (
                <div
                  key={row.id}
                  className={`flex flex-col lg:flex-row items-center gap-10 lg:gap-16 ${
                    isReversed ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  <div className="w-full lg:w-1/2">
                    <ImageReveal className="relative aspect-[16/10] shadow-xl">
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
                      <span className="text-xs font-bold uppercase tracking-widest text-accent-text">
                        0{i + 1} • PENGALAMAN
                      </span>
                      <h3 className="text-2xl sm:text-3xl font-display font-bold text-ink mt-2 mb-3">
                        {row.title}
                      </h3>
                      <p className="text-sm font-semibold text-accent-text mb-4">
                        {row.tagline}
                      </p>
                      <p className="text-stone text-base leading-relaxed font-sans">
                        {row.description}
                      </p>
                    </Reveal>
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
