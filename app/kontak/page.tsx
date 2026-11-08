import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import { WhatsAppContactForm } from "@/components/kontak/WhatsAppContactForm";
import { ClosingCtaBand } from "@/components/layout/ClosingCtaBand";
import { Reveal } from "@/components/motion/Reveal";
import { Magnetic } from "@/components/motion/Magnetic";
import { churchContact } from "@/data/contact";
import {
  IconMapPin,
  IconWhatsApp,
  IconInstagram,
  IconClock,
} from "@/components/ui/Icons";

export const metadata: Metadata = {
  title: "Kontak & Sekretariat – GBI Sukowono, Jember",
  description:
    "Hubungi sekretariat GBI Sukowono via WhatsApp 0812-1740-7046, jam operasional ibadah, alamat lengkap di Sukowono Jember, dan peta lokasi.",
};

export default function KontakPage() {
  return (
    <>
      {/* 1. Hero Section */}
      <section
        aria-label="Kontak dan Sekretariat"
        className="relative pt-40 pb-20 sm:pt-48 sm:pb-28 bg-[#07080A] text-white overflow-hidden"
      >
        {/* Ambient Top Glow Cone */}
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-[radial-gradient(ellipse_at_top,rgba(229,169,60,0.15),transparent_70%)] pointer-events-none z-0"
          aria-hidden="true"
        />

        <div className="absolute inset-0 z-0 opacity-15">
          <Image
            src="/images/village-road.webp"
            alt="Sukowono Jember"
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

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Reveal>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-accent font-mono text-[11px] uppercase tracking-widest mb-6 backdrop-blur-md">
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
              <span>SEKRETARIAT & INFORMASI</span>
            </div>
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-serif font-normal tracking-tight text-white mb-6">
              Hubungi GBI Sukowono
            </h1>
            <p className="max-w-2xl mx-auto text-base sm:text-lg text-slate-400 font-sans leading-relaxed">
              Kami siap melayani kebutuhan informasi ibadah, permohonan doa,
              maupun koordinasi pelayanan jemaat.
            </p>
          </Reveal>
        </div>
      </section>

      {/* 2. Contact Grid: Form & Info */}
      <section
        aria-labelledby="contact-details-heading"
        className="py-24 bg-[#07080A] text-slate-100 border-t border-white/5"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Form Column */}
            <div>
              <Reveal>
                <WhatsAppContactForm />
              </Reveal>
            </div>

            {/* Info & Operational Hours Column */}
            <div className="space-y-8">
              <Reveal delay={0.1}>
                <div className="bento-card bento-shimmer bg-white/[0.03] rounded-2xl p-8 sm:p-10 border border-white/10 space-y-6">
                  <h2
                    id="contact-details-heading"
                    className="text-2xl sm:text-3xl font-serif font-normal text-white"
                  >
                    Informasi Kontak Langsung
                  </h2>

                  <div className="space-y-5 text-sm">
                    {/* Address */}
                    <div className="flex items-start gap-3.5">
                      <IconMapPin size={20} className="text-accent shrink-0 mt-1" />
                      <div>
                        <p className="font-medium text-white text-sm">Alamat Gereja:</p>
                        <p className="text-slate-400 leading-relaxed text-xs sm:text-sm mt-0.5">
                          {churchContact.address.full}
                        </p>
                      </div>
                    </div>

                    {/* WhatsApp */}
                    <div className="flex items-start gap-3.5">
                      <IconWhatsApp size={20} className="text-accent shrink-0 mt-1" />
                      <div>
                        <p className="font-medium text-white text-sm">WhatsApp Sekretariat:</p>
                        <a
                          href={churchContact.whatsappUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-accent hover:underline font-semibold text-xs sm:text-sm mt-0.5 inline-block"
                        >
                          {churchContact.phoneFormatted} (Klik untuk Chat)
                        </a>
                      </div>
                    </div>

                    {/* Instagram */}
                    <div className="flex items-start gap-3.5">
                      <IconInstagram size={20} className="text-accent shrink-0 mt-1" />
                      <div>
                        <p className="font-medium text-white text-sm">Instagram Resmi:</p>
                        <a
                          href={churchContact.instagramUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-accent hover:underline font-semibold text-xs sm:text-sm mt-0.5 inline-block"
                        >
                          {churchContact.instagramHandle}
                        </a>
                        <p className="text-[11px] text-amber-400 font-medium mt-1">
                          *Hati-hati terhadap akun palsu tanpa garis bawah.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Jam Operasional */}
                  <div className="pt-6 border-t border-white/10 space-y-3">
                    <div className="flex items-center gap-2">
                      <IconClock size={18} className="text-accent" />
                      <h3 className="font-serif font-normal text-lg text-white">
                        Jam Operasional Gedung Ibadah:
                      </h3>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                      {churchContact.operationalHours.map((op, idx) => (
                        <div
                          key={idx}
                          className={`p-2.5 rounded-xl border flex items-center justify-between ${
                            op.status === "open"
                              ? "bg-accent/10 border-accent/30 font-medium text-white"
                              : "bg-white/[0.02] border-white/5 text-slate-500 opacity-60"
                          }`}
                        >
                          <span>{op.day}</span>
                          <span>{op.hours}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </Reveal>

              {/* Map Embed Card */}
              <Reveal delay={0.2}>
                <div className="bento-card bento-shimmer bg-white/[0.03] rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                  <div className="p-4 sm:p-5 flex items-center justify-between border-b border-white/10 bg-white/[0.02]">
                    <div>
                      <h3 className="font-serif font-normal text-base text-white">
                        Peta Lokasi Google Maps
                      </h3>
                      <p className="text-xs text-slate-400">Desa Sukowono, Kec. Sukowono, Jember</p>
                    </div>

                    <Magnetic>
                      <a
                        href={churchContact.maps.directUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white hover:bg-slate-200 text-[#07080A] font-semibold text-xs shadow-md transition-colors"
                      >
                        <IconMapPin size={14} className="text-accent" />
                        <span>Buka Maps</span>
                      </a>
                    </Magnetic>
                  </div>

                  <div className="relative aspect-[16/10] w-full">
                    <iframe
                      title="Peta Lokasi GBI Sukowono"
                      src={churchContact.maps.embedUrl}
                      width="100%"
                      height="100%"
                      className="absolute inset-0 border-0 w-full h-full filter contrast-125"
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    />
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Closing CTA */}
      <ClosingCtaBand />
    </>
  );
}