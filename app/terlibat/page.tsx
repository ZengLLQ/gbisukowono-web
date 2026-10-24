import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ClosingCtaBand } from "@/components/layout/ClosingCtaBand";
import { IconWhatsApp, IconArrowRight } from "@/components/ui/Icons";

export const metadata: Metadata = {
  title: "Cara Terlibat – GBI Sukowono",
  description:
    "Langkah-langkah untuk terlibat dalam pelayanan, persekutuan, dan pertumbuhan rohani bersama jemaat GBI Sukowono.",
};

export default function TerlibatPage() {
  return (
    <>
      <section className="pt-36 pb-20 bg-charcoal text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <span className="text-xs uppercase tracking-widest text-accent font-bold mb-3 block">
            LANGKAH KETERLIBATAN
          </span>
          <h1 className="text-3xl sm:text-5xl font-display font-extrabold mb-4">
            Terlibat Bersama GBI Sukowono
          </h1>
          <p className="text-sand/80 max-w-xl mx-auto text-sm sm:text-base">
            Ada tempat bagi setiap orang untuk bertumbuh, melayani, dan menjadi
            berkat bagi sesama di Sukowono.
          </p>
        </div>
      </section>

      <section className="py-20 bg-sand text-ink">
        <div className="max-w-4xl mx-auto px-4 space-y-8">
          <div className="bg-amber-50 border border-amber-200 p-4 rounded-2xl text-xs sm:text-sm text-amber-900">
            Halaman ini adalah halaman persiapan untuk program pembinaan jemaat.
            Informasi detail masih dalam proses konfirmasi [ISI NANTI].
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-3xl p-8 border border-line shadow-sm space-y-3">
              <span className="text-xs font-bold text-accent-text uppercase tracking-wider">
                Langkah 1
              </span>
              <h2 className="text-2xl font-display font-bold text-ink">
                Hadir & Bersekutu Secara Rutin
              </h2>
              <p className="text-stone text-sm sm:text-base leading-relaxed">
                Awali dengan beribadah bersama setiap Minggu pukul 18.00 WIB atau
                mengikuti Worship Night Jumat 18.30 WIB dan Persekutuan Selasa
                18.00 WIB.
              </p>
              <div className="pt-2">
                <Link
                  href="/jadwal"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-accent-text hover:underline"
                >
                  <span>Cek Jadwal Ibadah</span>
                  <IconArrowRight size={14} />
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-8 border border-line shadow-sm space-y-3">
              <span className="text-xs font-bold text-accent-text uppercase tracking-wider">
                Langkah 2
              </span>
              <h2 className="text-2xl font-display font-bold text-ink">
                Kelas Pemuridan & Pembinaan Iman
              </h2>
              <p className="text-stone text-sm sm:text-base leading-relaxed">
                [ISI NANTI: Penjelasan mengenai kelas dasar kekristenan, kelas baptisan selam, dan pembinaan kedewasaan rohani bagi jemaat baru].
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 border border-line shadow-sm space-y-3">
              <span className="text-xs font-bold text-accent-text uppercase tracking-wider">
                Langkah 3
              </span>
              <h2 className="text-2xl font-display font-bold text-ink">
                Bergabung dalam Tim Pelayanan
              </h2>
              <p className="text-stone text-sm sm:text-base leading-relaxed">
                Salurkan talenta Anda di tim pujian, multimedia, penerima jemaat,
                maupun kelompok doa syafaat.
              </p>
              <div className="pt-2">
                <a
                  href="https://wa.me/6281217407046?text=Halo%20Sekretariat%20GBI%20Sukowono,%20saya%20rindu%20bergabung%20dalam%20pelayanan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-accent-text hover:underline"
                >
                  <IconWhatsApp size={14} />
                  <span>Daftar via WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ClosingCtaBand />
    </>
  );
}
