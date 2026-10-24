import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import { BankCardCopy } from "@/components/persembahan/BankCardCopy";
import { SecurityNoticeBox } from "@/components/persembahan/SecurityNoticeBox";
import { GivingTabs } from "@/components/persembahan/GivingTabs";
import { Accordion } from "@/components/ui/Accordion";
import { ClosingCtaBand } from "@/components/layout/ClosingCtaBand";
import { Reveal } from "@/components/motion/Reveal";
import { givingFaqs } from "@/data/faqs";
import { IconWhatsApp } from "@/components/ui/Icons";
import { Magnetic } from "@/components/motion/Magnetic";

export const metadata: Metadata = {
  title: "Persembahan & Menabur – GBI Sukowono, Jember",
  description:
    "Rekening resmi persembahan dan persepuluhan GBI Sukowono: BCA KCP Kalisat No. Rek 334 338 0000. Lihat apa yang Tuhan kerjakan melalui kemurahan hatimu.",
};

export default function PersembahanPage() {
  return (
    <>
      {/* 1. Hero Section */}
      <section
        aria-label="Persembahan dan Menabur"
        className="relative pt-36 pb-20 sm:py-36 bg-charcoal text-white overflow-hidden"
      >
        <div className="absolute inset-0 z-0 opacity-20">
          <Image
            src="/images/fellowship-table.webp"
            alt="Persekutuan jemaat GBI Sukowono"
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
              KEMURAHAN HATI & PENGORBANAN
            </span>
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-display font-extrabold tracking-tight text-white mb-6 leading-tight">
              Lihat apa yang Tuhan kerjakan melalui kemurahan hatimu
            </h1>
            <p className="max-w-2xl mx-auto text-base sm:text-xl text-sand/80 font-sans leading-relaxed">
              Bagi Jemaat yang Rindu Menabur untuk Pekerjaan Tuhan bisa dilakukan
              secara transfer melalui rekening resmi berikut:
            </p>
          </Reveal>
        </div>
      </section>

      {/* 2. Primary Bank Account & Copy Section */}
      <section
        aria-labelledby="bank-account-heading"
        className="py-20 bg-sand text-ink"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center">
            <Reveal>
              <h2
                id="bank-account-heading"
                className="text-2xl sm:text-3xl font-display font-bold text-ink mb-2"
              >
                Rekening Resmi Bank BCA
              </h2>
              <p className="text-stone text-sm sm:text-base">
                Salin nomor rekening dengan sekali klik untuk transfer via
                mobile banking atau ATM.
              </p>
            </Reveal>
          </div>

          <BankCardCopy />

          {/* Security Notice Box */}
          <SecurityNoticeBox />
        </div>
      </section>

      {/* 3. Giving Channels Tabs */}
      <section
        aria-labelledby="channels-heading"
        className="py-24 bg-white text-ink border-t border-line"
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Reveal>
              <span className="text-xs uppercase tracking-widest text-accent-text font-bold mb-3 block">
                PILIHAN CARA MENABUR
              </span>
              <h2
                id="channels-heading"
                className="text-3xl sm:text-4xl font-display font-extrabold tracking-tight text-ink mb-4"
              >
                Pilihan Cara Memberi
              </h2>
              <p className="text-stone text-base">
                Dukungan Anda menopang pelayanan mimbar, diakonia jemaat, dan
                operasional gedung gereja di Sukowono.
              </p>
            </Reveal>
          </div>

          <GivingTabs />

          {/* WhatsApp Confirmation Callout */}
          <div className="mt-16 text-center max-w-xl mx-auto p-6 rounded-2xl bg-sand border border-line">
            <h3 className="font-display font-bold text-base text-ink mb-2">
              Perlu Konfirmasi Persembahan?
            </h3>
            <p className="text-stone text-xs sm:text-sm mb-4">
              Kirimkan bukti transfer atau alokasi khusus Anda kepada sekretariat gereja.
            </p>
            <Magnetic>
              <a
                href="https://wa.me/6281217407046?text=Halo%20Sekretariat%20GBI%20Sukowono,%20saya%20telah%20mentransfer%20persembahan"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-ink hover:bg-charcoal text-white font-bold text-xs sm:text-sm shadow-md transition-all active:scale-[0.98]"
              >
                <IconWhatsApp size={16} className="text-accent" />
                <span>Konfirmasi via WhatsApp (0812-1740-7046)</span>
              </a>
            </Magnetic>
          </div>
        </div>
      </section>

      {/* 4. FAQ Accordion Section */}
      <section
        aria-labelledby="giving-faq-heading"
        className="py-24 bg-sand text-ink border-t border-line"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Reveal>
              <span className="text-xs uppercase tracking-widest text-accent-text font-bold mb-3 block">
                TANYA JAWAB
              </span>
              <h2
                id="giving-faq-heading"
                className="text-3xl sm:text-4xl font-display font-extrabold tracking-tight text-ink mb-4"
              >
                Seputar Persembahan & Persepuluhan
              </h2>
              <p className="text-stone text-base">
                Pertanyaan yang sering diajukan mengenai cara memberi dan
                pengelolaan dana gereja.
              </p>
            </Reveal>
          </div>

          <Accordion items={givingFaqs} />
        </div>
      </section>

      {/* 5. Closing CTA */}
      <ClosingCtaBand />
    </>
  );
}
