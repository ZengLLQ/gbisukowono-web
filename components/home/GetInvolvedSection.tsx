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
    linkText: "Info Persekutuan",
    href: "/jadwal",
    isExternal: false,
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
      className="py-24 sm:py-32 bg-white text-ink border-t border-line"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <Reveal>
            <span className="text-xs uppercase tracking-widest text-accent-text font-bold mb-3 block">
              LANGKAH SELANJUTNYA
            </span>
            <h2
              id="get-involved-heading"
              className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold tracking-tight text-ink mb-5"
            >
              Cara Terlibat
            </h2>
            <p className="text-stone text-base sm:text-lg leading-relaxed">
              Gereja adalah tubuh yang hidup. Ada tempat bagi Anda untuk melayani,
              menemukan sahabat seiman, dan bertumbuh bersama.
            </p>
          </Reveal>
        </div>

        <RevealStagger className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {involvedSteps.map((step) => {
            return (
              <RevealStaggerItem key={step.id}>
                <div className="group h-full bg-sand rounded-2xl overflow-hidden border border-line shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
                  <div>
                    {/* Image */}
                    <div className="relative aspect-[16/10] overflow-hidden bg-charcoal">
                      <Image
                        src={step.image}
                        alt={step.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div
                        className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"
                        aria-hidden="true"
                      />
                    </div>

                    {/* Content */}
                    <div className="p-6 space-y-3">
                      <h3 className="text-2xl font-display font-bold text-ink group-hover:text-accent-text transition-colors">
                        {step.title}
                      </h3>
                      <p className="text-xs font-semibold text-accent-text uppercase tracking-wide">
                        {step.tagline}
                      </p>
                      <p className="text-stone text-sm leading-relaxed font-sans pt-1">
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
                        className="inline-flex items-center gap-2 text-sm font-bold text-accent-text hover:text-accent-dark transition-colors"
                      >
                        <IconWhatsApp size={16} />
                        <span>{step.linkText}</span>
                        <IconArrowRight
                          size={15}
                          className="transform group-hover:translate-x-1.5 transition-transform"
                        />
                      </a>
                    ) : (
                      <Link
                        href={step.href}
                        className="inline-flex items-center gap-2 text-sm font-bold text-accent-text hover:text-accent-dark transition-colors"
                      >
                        <span>{step.linkText}</span>
                        <IconArrowRight
                          size={15}
                          className="transform group-hover:translate-x-1.5 transition-transform"
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
