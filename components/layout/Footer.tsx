"use client";

import React from "react";
import Link from "next/link";
import {
  IconCross,
  IconMapPin,
  IconWhatsApp,
  IconInstagram,
  IconClock,
} from "@/components/ui/Icons";
import { RevealStagger, RevealStaggerItem } from "@/components/motion/RevealStagger";
import { churchContact } from "@/data/contact";
import { churchAffiliation } from "@/data/leaders";

export function Footer() {
  return (
    <footer
      aria-label="Informasi Kaki Halaman"
      className="bg-ink text-sand border-t border-white/10 pt-16 pb-12"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <RevealStagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 pb-14 border-b border-white/10">
          {/* Column 1: Church Brand & Mission */}
          <RevealStaggerItem className="space-y-4">
            <Link
              href="/"
              className="inline-flex items-center gap-3 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent rounded"
            >
              <div className="w-10 h-10 rounded-full bg-accent/20 border border-accent/40 flex items-center justify-center text-accent">
                <IconCross size={20} />
              </div>
              <div className="flex flex-col">
                <span className="font-display font-bold text-xl tracking-tight leading-none text-white">
                  GBI SUKOWONO
                </span>
                <span className="text-[11px] tracking-wider uppercase text-sand/70">
                  Jember, Jawa Timur
                </span>
              </div>
            </Link>

            <p className="text-sm text-sand/70 leading-relaxed font-sans">
              Gereja Bethel Indonesia Sukowono — Hadirat Tuhan, Kasih
              Persaudaraan, dan Pertumbuhan Iman bagi seluruh keluarga.
            </p>

            <div className="text-xs text-sand/60 bg-charcoal/60 p-3.5 rounded-xl border border-white/5 space-y-1">
              <p className="font-semibold text-sand/80">Afiliasi Sinode:</p>
              <p>
                {churchAffiliation.synod} ({churchAffiliation.regionalBody})
              </p>
              <p className="text-accent">{churchAffiliation.family}</p>
            </div>
          </RevealStaggerItem>

          {/* Column 2: Navigation Links */}
          <RevealStaggerItem className="space-y-4">
            <h3 className="font-display font-bold text-base tracking-wide uppercase text-accent">
              Navigasi
            </h3>
            <ul className="space-y-2.5 text-sm text-sand/80">
              <li>
                <Link
                  href="/"
                  className="hover:text-white transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent rounded"
                >
                  Beranda
                </Link>
              </li>
              <li>
                <Link
                  href="/jadwal"
                  className="hover:text-white transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent rounded"
                >
                  Jadwal & Lokasi
                </Link>
              </li>
              <li>
                <Link
                  href="/kegiatan"
                  className="hover:text-white transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent rounded"
                >
                  Kegiatan & Warta
                </Link>
              </li>
              <li>
                <Link
                  href="/persembahan"
                  className="hover:text-white transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent rounded"
                >
                  Persembahan (Menabur)
                </Link>
              </li>
              <li>
                <Link
                  href="/tentang"
                  className="hover:text-white transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent rounded"
                >
                  Tentang Kami & Pemimpin
                </Link>
              </li>
              <li>
                <Link
                  href="/kontak"
                  className="hover:text-white transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent rounded"
                >
                  Kontak Sekretariat
                </Link>
              </li>
            </ul>
          </RevealStaggerItem>

          {/* Column 3: Jam Ibadah Rutin */}
          <RevealStaggerItem className="space-y-4">
            <h3 className="font-display font-bold text-base tracking-wide uppercase text-accent">
              Ibadah Rutin
            </h3>
            <ul className="space-y-3.5 text-sm">
              <li className="flex items-start gap-2.5">
                <IconClock size={16} className="text-accent shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-white">Ibadah Raya Minggu</p>
                  <p className="text-sand/70 text-xs">Pukul 18.00 WIB (Pintu 17.00 WIB)</p>
                  <p className="text-accent/90 text-[11px] mt-0.5">
                    Perjamuan Kudus Minggu ke-1 tiap bulan
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <IconClock size={16} className="text-accent shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-white">Worship Night</p>
                  <p className="text-sand/70 text-xs">Jumat, 18.30 WIB</p>
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <IconClock size={16} className="text-accent shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-white">Persekutuan Doa</p>
                  <p className="text-sand/70 text-xs">Selasa, 18.00 – 20.00 WIB</p>
                </div>
              </li>
            </ul>
          </RevealStaggerItem>

          {/* Column 4: Alamat & Kontak Resmi */}
          <RevealStaggerItem className="space-y-4">
            <h3 className="font-display font-bold text-base tracking-wide uppercase text-accent">
              Kontak & Alamat
            </h3>
            <div className="space-y-3 text-sm text-sand/80">
              <div className="flex items-start gap-2.5">
                <IconMapPin size={18} className="text-accent shrink-0 mt-0.5" />
                <p className="text-xs leading-relaxed text-sand/70">
                  {churchContact.address.full}
                </p>
              </div>

              <div className="flex items-center gap-2.5">
                <IconWhatsApp size={18} className="text-accent shrink-0" />
                <a
                  href={churchContact.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs hover:text-white underline transition-colors"
                >
                  WhatsApp: {churchContact.phoneFormatted}
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <IconInstagram size={18} className="text-accent shrink-0" />
                <a
                  href={churchContact.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs hover:text-white underline transition-colors"
                >
                  Instagram: {churchContact.instagramHandle}
                </a>
              </div>

              <div className="pt-2 text-[11px] text-amber-300/80 bg-amber-950/30 p-2.5 rounded-lg border border-amber-900/40">
                ⚠️ Akun resmi hanya <span className="font-bold underline">@gbi_sukowono</span>.
                Abaikan pesan dari akun lama @gbisukowono.
              </div>
            </div>
          </RevealStaggerItem>
        </RevealStagger>

        {/* Bottom Bar: Copyright & Terms */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-sand/60">
          <p>© 2026 Gereja Bethel Indonesia Sukowono (GBI Sukowono). Hak cipta dilindungi.</p>
          <div className="flex items-center gap-6">
            <Link href="/jadwal" className="hover:text-sand transition-colors">
              Jadwal
            </Link>
            <Link href="/persembahan" className="hover:text-sand transition-colors">
              Rekening Resmi
            </Link>
            <Link href="/kontak" className="hover:text-sand transition-colors">
              Lokasi
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
