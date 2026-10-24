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
        className={`fixed top-0 left-0 right-0 z-40 transition-transform duration-300 ${
          isVisible ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        {/* Integrated Announcement Bar at the very top */}
        <AnnouncementBar />

        {/* Main Navbar */}
        <div
          className={`transition-all duration-300 ${
            isScrolled
              ? "bg-charcoal/95 backdrop-blur-md border-b border-white/10 shadow-lg py-3 sm:py-3.5"
              : "bg-gradient-to-b from-black/80 via-black/40 to-transparent py-4 sm:py-5"
          }`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center gap-3 text-white group focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent rounded-lg p-1"
              aria-label="GBI Sukowono - Kembali ke Beranda"
            >
              <div className="w-9 h-9 rounded-full bg-accent/20 border border-accent/40 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-ink transition-colors">
                <IconCross size={18} />
              </div>
              <div className="flex flex-col">
                <span className="font-display font-bold text-base sm:text-lg tracking-tight leading-none text-white">
                  GBI SUKOWONO
                </span>
                <span className="text-[10px] tracking-wider uppercase text-sand/70 font-sans">
                  Jember, Jawa Timur
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav
              aria-label="Navigasi Utama"
              className="hidden md:flex items-center gap-7"
            >
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`text-sm font-medium transition-colors relative py-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent rounded ${
                      isActive
                        ? "text-accent font-semibold"
                        : "text-sand/90 hover:text-white"
                    }`}
                  >
                    {link.label}
                    {isActive && (
                      <motion.div
                        layoutId="activeNavIndicator"
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent rounded-full"
                        transition={{ duration: 0.25, ease: ease.ui }}
                      />
                    )}
                  </Link>
                );
              })}

              {/* Menabur Pill CTA */}
              <Magnetic>
                <Link
                  href="/persembahan"
                  className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-accent hover:bg-accent-dark text-ink font-semibold text-sm shadow-md hover:shadow-lg transition-all active:scale-[0.98] focus-visible:outline focus-visible:outline-2 focus-visible:outline-white"
                >
                  <span>Menabur</span>
                  <IconArrowRight size={15} />
                </Link>
              </Magnetic>
            </nav>

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-expanded={mobileMenuOpen}
              aria-label={mobileMenuOpen ? "Tutup menu" : "Buka menu navigasi"}
              className="md:hidden p-2 text-white hover:text-accent rounded-lg transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent"
            >
              {mobileMenuOpen ? <IconClose size={26} /> : <IconMenu size={26} />}
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
            className="fixed inset-0 z-50 bg-charcoal text-white flex flex-col justify-between p-6 sm:p-10 md:hidden"
          >
            {/* Top Bar inside Overlay */}
            <div className="flex items-center justify-between">
              <Link
                href="/"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-3 text-white"
              >
                <div className="w-8 h-8 rounded-full bg-accent/20 border border-accent/40 flex items-center justify-center text-accent">
                  <IconCross size={16} />
                </div>
                <span className="font-display font-bold text-lg tracking-tight">
                  GBI SUKOWONO
                </span>
              </Link>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                aria-label="Tutup menu navigasi"
                className="p-2 text-sand/80 hover:text-white rounded-lg transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent"
              >
                <IconClose size={28} />
              </button>
            </div>

            {/* Nav Links */}
            <nav className="flex flex-col gap-5 my-auto py-8">
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
                      className={`text-2xl sm:text-3xl font-display font-bold tracking-tight block py-1.5 transition-colors ${
                        isActive ? "text-accent pl-2 border-l-2 border-accent" : "text-sand/90 hover:text-white"
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
                  className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-full bg-accent text-ink font-bold text-base shadow-lg"
                >
                  <span>Menabur / Persembahan</span>
                  <IconArrowRight size={18} />
                </Link>
              </motion.div>
            </nav>

            {/* Bottom Info */}
            <div className="pt-6 border-t border-white/10 text-xs text-sand/70 space-y-2">
              <p className="font-medium text-sand">Ibadah Raya Setiap Minggu 18.00 WIB</p>
              <p>Jl. Sukowono, Ragang, Desa Sukowono, Kec. Sukowono, Jember</p>
              <div className="pt-2 flex items-center gap-4 text-sand">
                <a
                  href="https://wa.me/6281217407046"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-accent underline"
                >
                  WhatsApp: 0812-1740-7046
                </a>
                <span>•</span>
                <a
                  href="https://www.instagram.com/gbi_sukowono"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-accent underline"
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
