"use client";

import React, { useState } from "react";
import { IconWhatsApp } from "@/components/ui/Icons";
import { churchContact } from "@/data/contact";

export function WhatsAppContactForm() {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("Pertanyaan Umum");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const fullText = `Halo Sekretariat GBI Sukowono,
Nama: ${name || "Jemaat/Sahabat"}
Kategori: ${category}

Pesan:
${message}`;

    const encoded = encodeURIComponent(fullText);
    const waUrl = `${churchContact.whatsappUrl}?text=${encoded}`;
    window.open(waUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-sand rounded-3xl p-8 sm:p-10 border border-line shadow-sm space-y-6"
    >
      <div>
        <h3 className="text-2xl font-display font-bold text-ink mb-1">
          Kirim Pesan ke WhatsApp Sekretariat
        </h3>
        <p className="text-stone text-xs sm:text-sm">
          Isi formulir singkat ini untuk langsung terhubung ke admin sekretariat
          GBI Sukowono via WhatsApp.
        </p>
      </div>

      <div className="space-y-4">
        <div>
          <label
            htmlFor="contact-name"
            className="block text-xs font-bold uppercase tracking-wider text-ink mb-2"
          >
            Nama Lengkap
          </label>
          <input
            id="contact-name"
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Masukkan nama Anda..."
            className="w-full px-4 py-3 rounded-xl border border-line bg-white text-ink text-sm focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors"
          />
        </div>

        <div>
          <label
            htmlFor="contact-category"
            className="block text-xs font-bold uppercase tracking-wider text-ink mb-2"
          >
            Keperluan Pesan
          </label>
          <select
            id="contact-category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full px-4 py-3 rounded-xl border border-line bg-white text-ink text-sm focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors"
          >
            <option value="Pertanyaan Umum Seputar Ibadah">
              Pertanyaan Umum Seputar Ibadah
            </option>
            <option value="Permohonan Doa Syafaat / Konseling">
              Permohonan Doa Syafaat / Konseling
            </option>
            <option value="Konfirmasi Persembahan / Persepuluhan">
              Konfirmasi Persembahan / Persepuluhan
            </option>
            <option value="Pendaftaran Pelayanan Jemaat">
              Pendaftaran Pelayanan Jemaat
            </option>
            <option value="Lainnya">Lainnya</option>
          </select>
        </div>

        <div>
          <label
            htmlFor="contact-message"
            className="block text-xs font-bold uppercase tracking-wider text-ink mb-2"
          >
            Isi Pesan
          </label>
          <textarea
            id="contact-message"
            rows={4}
            required
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Tuliskan pertanyaan atau permohonan doa Anda di sini..."
            className="w-full px-4 py-3 rounded-xl border border-line bg-white text-ink text-sm focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors resize-none"
          />
        </div>
      </div>

      <button
        type="submit"
        className="w-full inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-accent hover:bg-accent-dark text-ink font-bold text-sm shadow-md transition-all active:scale-[0.98] focus-visible:outline focus-visible:outline-2 focus-visible:outline-white"
      >
        <IconWhatsApp size={18} />
        <span>Kirim via WhatsApp (0812-1740-7046)</span>
      </button>

      <p className="text-[11px] text-stone text-center italic">
        *Formulir ini tidak memerlukan login dan akan membuka aplikasi WhatsApp Anda secara aman.
      </p>
    </form>
  );
}
