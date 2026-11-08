import React from "react";
import type { Metadata } from "next";
import { ministries } from "@/data/ministries";
import { ClosingCtaBand } from "@/components/layout/ClosingCtaBand";
import { IconWhatsApp } from "@/components/ui/Icons";

export const metadata: Metadata = {
  title: "Pelayanan Jemaat – GBI Sukowono",
  description:
    "Wadah pelayanan jemaat GBI Sukowono: Praise & Worship, Multimedia, Usher, Doa & Syafaat, Kaum Muda, dan Sekolah Minggu.",
};

export default function PelayananPage() {
  return (
    <>
      <section className="pt-40 pb-20 sm:pt-48 sm:pb-28 bg-[#07080A] text-white text-center relative overflow-hidden">
        {/* Ambient Top Glow Cone */}
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-[radial-gradient(ellipse_at_top,rgba(229,169,60,0.15),transparent_70%)] pointer-events-none z-0"
          aria-hidden="true"
        />

        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-accent font-mono text-[11px] uppercase tracking-widest mb-6 backdrop-blur-md">
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
            <span>PELAYANAN JEMAAT</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-serif font-normal tracking-tight mb-4">
            Bidang Pelayanan GBI Sukowono
          </h1>
          <p className="text-slate-400 max-w-xl mx-auto text-base sm:text-lg">
            Setiap jemaat dipanggil untuk saling melayani dengan karunia yang
            dianugerahkan Allah.
          </p>
        </div>
      </section>

      <section className="py-20 bg-[#07080A] text-slate-100 border-t border-white/5">
        <div className="max-w-5xl mx-auto px-4 space-y-8">
          <div className="bg-amber-500/10 border border-amber-500/25 p-4 rounded-xl text-xs sm:text-sm text-amber-300">
            Halaman ini sedang dalam tahap kelengkapan data. Detail koordinator
            dan jadwal latihan ditandai dengan placeholder [ISI NANTI].
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {ministries.map((m) => (
              <div
                key={m.id}
                className="bento-card bento-shimmer bg-white/[0.025] hover:bg-white/[0.04] rounded-2xl p-6 sm:p-8 border border-white/10 space-y-3 transition-colors"
              >
                <div className="flex items-center justify-between">
                  <h2 className="font-serif font-normal text-xl sm:text-2xl text-white">
                    {m.name}
                  </h2>
                  {m.status === "placeholder" && (
                    <span className="text-[10px] bg-amber-400/15 border border-amber-400/30 text-amber-300 font-mono font-medium px-2 py-0.5 rounded-full">
                      [ISI NANTI]
                    </span>
                  )}
                </div>

                <p className="text-xs text-accent font-medium">
                  {m.tagline}
                </p>

                <p className="text-sm text-slate-400 leading-relaxed font-sans">
                  {m.description}
                </p>

                <div className="pt-3 border-t border-white/10 text-xs text-slate-400 space-y-1">
                  <p>
                    <span className="font-medium text-white">Koordinator:</span>{" "}
                    {m.coordinator || "[ISI NANTI: Koordinator Bidang]"}
                  </p>
                  <p>
                    <span className="font-medium text-white">Jadwal:</span>{" "}
                    {m.schedule || "[ISI NANTI: Jadwal Latihan / Pertemuan]"}
                  </p>
                </div>

                <div className="pt-3">
                  <a
                    href={`https://wa.me/6281217407046?text=Halo%20Sekretariat%20GBI%20Sukowono,%20saya%20tertarik%20melayani%20di%20bidang%20${encodeURIComponent(
                      m.name
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-accent hover:underline"
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