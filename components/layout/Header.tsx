"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "motion/react";
import { IconMenu, IconClose, IconCross, IconArrowRight } from "@/components/ui/Icons";
import { AnnouncementBar } from "@/components/layout/AnnouncementBar";
import { Magnetic } from "@/components/motion/Magnetic";
import { duration, ease } from "@/lib/motion";

const navLinks = [
  { href: "/jadwal", label: "Jadwal" },
  { href: "/kegiatan", label: "Kegiatan" },
  { href: "/persembahan", label: "Persembahan" },
  { href: "/tentang", label: "Tentang" },
  { href: "/kontak", label: "Kontak" },
];

export function Header() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [prevPathname, setPrevPathname] = useState(pathname);
  const lastScrollY = useRef(0);

  // Close mobile menu on route change during render
  if (prevPathname !== pathname) {
    setPrevPathname(pathname);
    setMobileMenuOpen(false);
  }

  // Monitor scroll for solid bg and hide-on-scroll-down
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Solid background after 80px
      setIsScrolled(currentScrollY > 80);

      // Hide on scroll down, show on scroll up (after 120px)
      if (currentScrollY > 120 && currentScrollY > lastScrollY.current && !mobileMenuOpen) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [mobileMenuOpen]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 flex flex-col items-center pointer-events-none transition-transform duration-300 ${
          isVisible ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        {/* Integrated Announcement Bar at the very top */}
        <div className="w-full pointer-events-auto">
          <AnnouncementBar />
        </div>

        {/* Amperos Floating Pill Island Navbar */}
        <div className="w-full max-w-5xl px-4 sm:px-6 mt-2 sm:mt-3 pointer-events-auto">
          <div
            className={`w-full rounded-full transition-all duration-300 px-4 sm:px-6 py-2 sm:py-2.5 flex items-center justify-between border relative bento-shimmer ${
              isScrolled
                ? "bg-[#090B0E]/90 backdrop-blur-2xl border-white/15 shadow-[0_20px_50px_rgba(0,0,0,0.7)]"
                : "bg-[#090B0E]/75 backdrop-blur-xl border-white/10 shadow-[0_15px_35px_rgba(0,0,0,0.5)]"
            }`}
          >
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center gap-3 text-white group focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent rounded-full p-1"
              aria-label="GBI Sukowono - Kembali ke Beranda"
            >
              <div className="w-8 h-8 rounded-full bg-accent/15 border border-accent/40 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-black transition-all shadow-[0_0_15px_rgba(229,169,60,0.25)]">
                <IconCross size={16} />
              </div>
              <div className="flex flex-col">
                <span className="font-display font-bold text-sm sm:text-base tracking-tight leading-none text-white group-hover:text-accent transition-colors">
                  GBI SUKOWONO
                </span>
                <span className="text-[9px] tracking-widest uppercase text-slate-400 font-sans">
                  Jember, Jawa Timur
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav
              aria-label="Navigasi Utama"
              className="hidden md:flex items-center gap-6"
            >
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`text-xs uppercase tracking-wider font-semibold transition-all relative py-1.5 px-3 rounded-full focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent ${
                      isActive
                        ? "text-accent font-bold"
                        : "text-slate-300 hover:text-white hover:bg-white/[0.04]"
                    }`}
                  >
                    {link.label}
                    {isActive && (
                      <motion.div
                        layoutId="activeNavIndicator"
                        className="absolute inset-0 bg-white/[0.08] border border-white/15 rounded-full -z-10"
                        transition={{ duration: 0.25, ease: ease.ui }}
                      />
                    )}
                  </Link>
                );
              })}

              {/* Menabur High-Contrast Crisp Pill CTA */}
              <Magnetic>
                <Link
                  href="/persembahan"
                  className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-white hover:bg-neutral-200 text-black font-semibold text-xs tracking-wide shadow-[0_0_20px_rgba(255,255,255,0.18)] transition-all active:scale-[0.96] focus-visible:outline focus-visible:outline-2 focus-visible:outline-white"
                >
                  <span>Menabur</span>
                  <IconArrowRight size={13} />
                </Link>
              </Magnetic>
            </nav>

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-expanded={mobileMenuOpen}
              aria-label={mobileMenuOpen ? "Tutup menu" : "Buka menu navigasi"}
              className="md:hidden p-2 text-white hover:text-accent rounded-full border border-white/10 bg-white/5 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent"
            >
              {mobileMenuOpen ? <IconClose size={20} /> : <IconMenu size={20} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Full-Screen Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, clipPath: "circle(0% at calc(100% - 40px) 40px)" }}
            animate={{ opacity: 1, clipPath: "circle(150% at calc(100% - 40px) 40px)" }}
            exit={{ opacity: 0, clipPath: "circle(0% at calc(100% - 40px) 40px)" }}
            transition={{ duration: 0.45, ease: ease.entrance }}
            className="fixed inset-0 z-50 bg-[#07080A]/98 backdrop-blur-2xl text-white flex flex-col justify-between p-6 sm:p-10 md:hidden overflow-hidden"
          >
            {/* Ambient Radial Glow in Mobile Menu */}
            <div
              className="absolute top-0 right-0 w-80 h-80 bg-accent/15 rounded-full blur-[120px] pointer-events-none"
              aria-hidden="true"
            />

            {/* Top Bar inside Overlay */}
            <div className="relative z-10 flex items-center justify-between">
              <Link
                href="/"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-3 text-white"
              >
                <div className="w-8 h-8 rounded-full bg-accent/20 border border-accent/40 flex items-center justify-center text-accent">
                  <IconCross size={16} />
                </div>
                <span className="font-serif font-bold text-lg tracking-tight">
                  GBI SUKOWONO
                </span>
              </Link>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                aria-label="Tutup menu navigasi"
                className="p-2 text-slate-400 hover:text-white rounded-full border border-white/10 bg-white/5 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent"
              >
                <IconClose size={24} />
              </button>
            </div>

            {/* Nav Links */}
            <nav className="relative z-10 flex flex-col gap-5 my-auto py-8">
              {navLinks.map((link, idx) => {
                const isActive = pathname === link.href;
                return (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      delay: idx * 0.06 + 0.1,
                      duration: duration.base,
                      ease: ease.entrance,
                    }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`text-3xl font-serif tracking-tight block py-1.5 transition-colors ${
                        isActive ? "text-accent pl-3 border-l-2 border-accent font-semibold" : "text-slate-300 hover:text-white"
                      }`}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                );
              })}

              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: navLinks.length * 0.06 + 0.15,
                  duration: duration.base,
                }}
                className="pt-4"
              >
                <Link
                  href="/persembahan"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-full bg-white hover:bg-slate-200 text-[#07080A] font-bold text-base shadow-[0_0_25px_rgba(255,255,255,0.2)] transition-all"
                >
                  <span>Menabur / Persembahan</span>
                  <IconArrowRight size={18} />
                </Link>
              </motion.div>
            </nav>

            {/* Bottom Info */}
            <div className="relative z-10 pt-6 border-t border-white/10 text-xs text-slate-400 space-y-2">
              <p className="font-medium text-slate-200">Ibadah Raya Setiap Minggu 18.00 WIB</p>
              <p>Jl. Sukowono, Ragang, Desa Sukowono, Kec. Sukowono, Jember</p>
              <div className="pt-2 flex flex-wrap items-center gap-3 text-slate-400">
                <a
                  href="https://wa.me/6281217407046"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent hover:underline"
                >
                  WhatsApp: 0812-1740-7046
                </a>
                <span>•</span>
                <a
                  href="https://www.instagram.com/gbi_sukowono"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent hover:underline"
                >
                  Instagram @gbi_sukowono
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
