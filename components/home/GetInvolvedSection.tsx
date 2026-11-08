"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { IconArrowRight, IconWhatsApp } from "@/components/ui/Icons";
import { Reveal } from "@/components/motion/Reveal";
import { RevealStagger, RevealStaggerItem } from "@/components/motion/RevealStagger";

const involvedSteps = [
  {
    id: "layani",
    title: "1. Layani Sesama",
    tagline: "Salurkan talenta dan dedikasi Anda di berbagai bidang pelayanan gereja.",
    description:
      "Mulai dari tim musik, multimedia, usher penerima jemaat, hingga pendoa syafaat, kami mengundang Anda mengambil bagian dalam pekerjaan Tuhan.",
    image: "/images/worship-night.webp",
    linkText: "Daftar Melayani",
    href: "https://wa.me/6281217407046?text=Halo%20Sekretariat%20GBI%20Sukowono,%20saya%20rindu%20bergabung%20dalam%20tim%20pelayanan",
    isExternal: true,
  },
  {
    id: "bertumbuh",
    title: "2. Bertumbuh Bersama",
    tagline: "Pendalaman Firman dan kebersamaan dalam persekutuan doa mingguan.",
    description:
      "Iman bertumbuh ketika kita berakar dalam firman dan hidup saling menguatkan. Hadiri persekutuan Selasa malam dan kelompok pemuda.",
    image: "/images/fellowship-table.webp",
    linkText: "Hubungi via WhatsApp",
    href: "https://wa.me/6281217407046?text=Halo%20Sekretariat%20GBI%20Sukowono,%20saya%20ingin%20mengikuti%20persekutuan%20doa%20dan%20bertumbuh%20bersama",
    isExternal: true,
  },
  {
    id: "hubungi",
    title: "3. Hubungi Kami",
    tagline: "Konseling rohani, permohonan doa syafaat, atau pertanyaan umum.",
    description:
      "Gembala jemaat dan pengerja siap melayani dan mendoakan kebutuhan Anda serta keluarga dengan kerahasiaan dan ketulusan kasih Kristus.",
    image: "/images/open-bible.webp",
    linkText: "Kirim Pesan WhatsApp",
    href: "https://wa.me/6281217407046?text=Halo%20Sekretariat%20GBI%20Sukowono,%20saya%20ingin%20berkonsultasi%20rohani",
    isExternal: true,
  },
];

export function GetInvolvedSection() {
  return (
    <section
      aria-labelledby="get-involved-heading"
      className="py-24 sm:py-32 bg-[#090B0E] text-white border-t border-white/[0.06] relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <Reveal>
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-[11px] font-mono tracking-widest uppercase text-accent mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
              LANGKAH SELANJUTNYA
            </span>
            <h2
              id="get-involved-heading"
              className="text-3xl sm:text-4xl md:text-5xl font-serif font-normal tracking-tight text-white mb-5"
            >
              Cara Terlibat
            </h2>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed font-light">
              Gereja adalah tubuh yang hidup. Ada tempat bagi Anda untuk melayani,
              menemukan sahabat seiman, dan bertumbuh bersama.
            </p>
          </Reveal>
        </div>

        <RevealStagger className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {involvedSteps.map((step, idx) => {
            const stepNum = `0${idx + 1}`;

            return (
              <RevealStaggerItem key={step.id}>
                <div className="group h-full bento-card bento-shimmer flex flex-col justify-between shadow-xl">
                  <div>
                    {/* Image with subtle step number badge */}
                    <div className="relative aspect-[16/10] overflow-hidden bg-black">
                      <Image
                        src={step.image}
                        alt={step.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-cover group-hover:scale-105 transition-transform duration-700 opacity-85"
                      />
                      <div
                        className="absolute inset-0 bg-gradient-to-t from-[#090B0E] via-black/30 to-transparent"
                        aria-hidden="true"
                      />
                      {/* Step Number in Amperos Monospace Style */}
                      <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-white/10 text-xs font-mono font-bold text-accent">
                        {stepNum}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6 space-y-3">
                      <h3 className="text-xl sm:text-2xl font-serif font-normal text-white group-hover:text-accent transition-colors">
                        {step.title}
                      </h3>
                      <p className="text-xs font-mono font-medium text-accent uppercase tracking-wider">
                        {step.tagline}
                      </p>
                      <p className="text-slate-300 text-xs sm:text-sm leading-relaxed font-sans font-light pt-1">
                        {step.description}
                      </p>
                    </div>
                  </div>

                  <div className="p-6 pt-0">
                    {step.isExternal ? (
                      <a
                        href={step.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full inline-flex items-center justify-center gap-2 py-3 px-5 rounded-full bg-white/[0.04] hover:bg-white text-slate-200 hover:text-black text-xs font-semibold border border-white/10 transition-all duration-300 active:scale-95"
                      >
                        <IconWhatsApp size={15} />
                        <span>{step.linkText}</span>
                        <IconArrowRight
                          size={13}
                          className="transform group-hover:translate-x-1 transition-transform"
                        />
                      </a>
                    ) : (
                      <Link
                        href={step.href}
                        className="w-full inline-flex items-center justify-center gap-2 py-3 px-5 rounded-full bg-white/[0.04] hover:bg-white text-slate-200 hover:text-black text-xs font-semibold border border-white/10 transition-all duration-300 active:scale-95"
                      >
                        <span>{step.linkText}</span>
                        <IconArrowRight
                          size={13}
                          className="transform group-hover:translate-x-1 transition-transform"
                        />
                      </Link>
                    )}
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
