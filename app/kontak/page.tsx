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
  IconShield,
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
        className="relative pt-36 pb-20 sm:py-36 bg-charcoal text-white overflow-hidden"
      >
        <div className="absolute inset-0 z-0 opacity-20">
          <Image
            src="/images/village-road.webp"
            alt="Sukowono Jember"
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

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Reveal>
            <span className="inline-block text-xs uppercase tracking-widest text-accent font-bold mb-4">
              SEKRETARIAT & INFORMASI
            </span>
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-display font-extrabold tracking-tight text-white mb-6">
              Hubungi GBI Sukowono
            </h1>
            <p className="max-w-2xl mx-auto text-base sm:text-xl text-sand/80 font-sans leading-relaxed">
              Kami siap melayani kebutuhan informasi ibadah, permohonan doa,
              maupun koordinasi pelayanan jemaat.
            </p>
          </Reveal>
        </div>
      </section>

      {/* 2. Contact Grid: Form & Info */}
      <section
        aria-labelledby="contact-details-heading"
        className="py-24 bg-white text-ink"
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
                <div className="bg-sand rounded-3xl p-8 sm:p-10 border border-line space-y-6">
                  <h2
                    id="contact-details-heading"
                    className="text-2xl font-display font-bold text-ink"
                  >
                    Informasi Kontak Langsung
                  </h2>

                  <div className="space-y-5 text-sm">
                    {/* Address */}
                    <div className="flex items-start gap-3">
                      <IconMapPin size={20} className="text-accent-text shrink-0 mt-1" />
                      <div>
                        <p className="font-bold text-ink">Alamat Gereja:</p>
                        <p className="text-stone leading-relaxed text-xs sm:text-sm">
                          {churchContact.address.full}
                        </p>
                      </div>
                    </div>

                    {/* WhatsApp */}
                    <div className="flex items-start gap-3">
                      <IconWhatsApp size={20} className="text-accent-text shrink-0 mt-1" />
                      <div>
                        <p className="font-bold text-ink">WhatsApp Sekretariat:</p>
                        <a
                          href={churchContact.whatsappUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-accent-text hover:text-accent-dark font-semibold underline text-xs sm:text-sm"
                        >
                          {churchContact.phoneFormatted} (Klik untuk Chat)
                        </a>
                      </div>
                    </div>

                    {/* Instagram */}
                    <div className="flex items-start gap-3">
                      <IconInstagram size={20} className="text-accent-text shrink-0 mt-1" />
                      <div>
                        <p className="font-bold text-ink">Instagram Resmi:</p>
                        <a
                          href={churchContact.instagramUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-accent-text hover:text-accent-dark font-semibold underline text-xs sm:text-sm"
                        >
                          {churchContact.instagramHandle}
                        </a>
                        <p className="text-[11px] text-amber-800 font-medium mt-0.5">
                          *Hati-hati terhadap akun palsu tanpa garis bawah.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Jam Operasional */}
                  <div className="pt-6 border-t border-line space-y-3">
                    <div className="flex items-center gap-2">
                      <IconClock size={18} className="text-accent-text" />
                      <h3 className="font-display font-bold text-base text-ink">
                        Jam Operasional Gedung Ibadah:
                      </h3>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                      {churchContact.operationalHours.map((op, idx) => (
                        <div
                          key={idx}
                          className={`p-2.5 rounded-xl border flex items-center justify-between ${
                            op.status === "open"
                              ? "bg-white border-accent/40 font-semibold text-ink"
                              : "bg-white/40 border-line text-stone opacity-70"
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
                <div className="rounded-3xl overflow-hidden border border-line shadow-md bg-sand">
                  <div className="p-4 sm:p-5 flex items-center justify-between border-b border-line bg-white">
                    <div>
                      <h3 className="font-display font-bold text-base text-ink">
                        Peta Lokasi Google Maps
                      </h3>
                      <p className="text-xs text-stone">Desa Sukowono, Kec. Sukowono, Jember</p>
                    </div>

                    <Magnetic>
                      <a
                        href={churchContact.maps.directUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-ink text-white font-semibold text-xs shadow-sm hover:bg-charcoal transition-colors"
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
                      className="absolute inset-0 border-0 w-full h-full"
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
