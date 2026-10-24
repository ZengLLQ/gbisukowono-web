import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ministries } from "@/data/ministries";
import { churchContact } from "@/data/contact";
import { ClosingCtaBand } from "@/components/layout/ClosingCtaBand";
import { IconWhatsApp, IconArrowRight } from "@/components/ui/Icons";
import { Reveal } from "@/components/motion/Reveal";

export const metadata: Metadata = {
  title: "Pelayanan Jemaat – GBI Sukowono",
  description:
    "Wadah pelayanan jemaat GBI Sukowono: Praise & Worship, Multimedia, Usher, Doa & Syafaat, Kaum Muda, dan Sekolah Minggu.",
};

export default function PelayananPage() {
  return (
    <>
      <section className="pt-36 pb-20 bg-charcoal text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <span className="text-xs uppercase tracking-widest text-accent font-bold mb-3 block">
            PELAYANAN JEMAAT
          </span>
          <h1 className="text-3xl sm:text-5xl font-display font-extrabold mb-4">
            Bidang Pelayanan GBI Sukowono
          </h1>
          <p className="text-sand/80 max-w-xl mx-auto text-sm sm:text-base">
            Setiap jemaat dipanggil untuk saling melayani dengan karunia yang
            dianugerahkan Allah.
          </p>
        </div>
      </section>

      <section className="py-20 bg-sand text-ink">
        <div className="max-w-5xl mx-auto px-4 space-y-8">
          <div className="bg-amber-50 border border-amber-200 p-4 rounded-2xl text-xs sm:text-sm text-amber-900">
            Halaman ini sedang dalam tahap kelengkapan data. Detail koordinator
            dan jadwal latihan ditandai dengan placeholder [ISI NANTI].
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {ministries.map((m) => (
              <div
                key={m.id}
                className="bg-white rounded-2xl p-6 border border-line shadow-sm space-y-3"
              >
                <div className="flex items-center justify-between">
                  <h2 className="font-display font-bold text-xl text-ink">
                    {m.name}
                  </h2>
                  {m.status === "placeholder" && (
                    <span className="text-[10px] bg-amber-100 text-amber-800 font-bold px-2 py-0.5 rounded-full">
                      [ISI NANTI]
                    </span>
                  )}
                </div>

                <p className="text-xs text-accent-text font-semibold">
                  {m.tagline}
                </p>

                <p className="text-sm text-stone leading-relaxed font-sans">
                  {m.description}
                </p>

                <div className="pt-3 border-t border-line/60 text-xs text-stone space-y-1">
                  <p>
                    <span className="font-semibold text-ink">Koordinator:</span>{" "}
                    {m.coordinator || "[ISI NANTI: Koordinator Bidang]"}
                  </p>
                  <p>
                    <span className="font-semibold text-ink">Jadwal:</span>{" "}
                    {m.schedule || "[ISI NANTI: Jadwal Latihan / Pertemuan]"}
                  </p>
                </div>

                <div className="pt-2">
                  <a
                    href={`https://wa.me/6281217407046?text=Halo%20Sekretariat%20GBI%20Sukowono,%20saya%20tertarik%20melayani%20di%20bidang%20${encodeURIComponent(
                      m.name
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-accent-text hover:underline"
                  >
                    <IconWhatsApp size={14} />
                    <span>Daftar Melayani via WhatsApp</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ClosingCtaBand />
    </>
  );
}
