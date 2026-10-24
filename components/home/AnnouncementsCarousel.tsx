"use client";

import React, { useRef, useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { announcements } from "@/data/announcements";
import { IconArrowRight, IconCalendar, IconChevronRight } from "@/components/ui/Icons";
import { Reveal } from "@/components/motion/Reveal";

export function AnnouncementsCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isDraggingState, setIsDraggingState] = useState(false);

  const isDraggingRef = useRef(false);
  const startXRef = useRef(0);
  const scrollLeftStartRef = useRef(0);
  const hasDraggedRef = useRef(false);

  const handleScroll = useCallback(() => {
    if (!scrollRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
    const maxScroll = scrollWidth - clientWidth;
    if (maxScroll <= 0) {
      setScrollProgress(100);
      return;
    }
    const progress = (scrollLeft / maxScroll) * 100;
    setScrollProgress(Math.min(100, Math.max(0, progress)));
  }, []);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    el.addEventListener("scroll", handleScroll, { passive: true });
    return () => el.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  // Desktop Drag-to-Scroll implementation
  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!scrollRef.current) return;
    isDraggingRef.current = true;
    hasDraggedRef.current = false;
    startXRef.current = e.pageX - scrollRef.current.offsetLeft;
    scrollLeftStartRef.current = scrollRef.current.scrollLeft;
    setIsDraggingState(true);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDraggingRef.current || !scrollRef.current) return;
    e.preventDefault();
    const currentX = e.pageX - scrollRef.current.offsetLeft;
    const walk = (currentX - startXRef.current) * 1.5;
    if (Math.abs(walk) > 4) {
      hasDraggedRef.current = true;
    }
    scrollRef.current.scrollLeft = scrollLeftStartRef.current - walk;
  };

  const stopDragging = () => {
    isDraggingRef.current = false;
    setIsDraggingState(false);
  };

  const handleClickCapture = (e: React.MouseEvent) => {
    if (hasDraggedRef.current) {
      e.preventDefault();
      e.stopPropagation();
      hasDraggedRef.current = false;
    }
  };

  return (
    <section
      aria-labelledby="announcements-heading"
      className="py-24 bg-white text-ink overflow-hidden border-t border-line"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <Reveal>
            <span className="text-xs uppercase tracking-widest text-accent-text font-bold mb-3 block">
              WARTA & INFORMASI
            </span>
            <h2
              id="announcements-heading"
              className="text-3xl sm:text-4xl font-display font-extrabold tracking-tight text-ink"
            >
              Kabar & Kegiatan Terkini
            </h2>
            <p className="text-stone text-base mt-2 max-w-xl">
              Ikuti agenda dan warta pelayanan jemaat GBI Sukowono.
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <Link
              href="/kegiatan"
              className="inline-flex items-center gap-2 text-sm font-bold text-accent-text hover:text-accent-dark link-draw group py-1"
            >
              <span>Lihat Semua Kegiatan</span>
              <IconChevronRight
                size={18}
                className="group-hover:translate-x-1 transition-transform"
              />
            </Link>
          </Reveal>
        </div>

        {/* Carousel Container with True Drag-to-Scroll */}
        <div
          ref={scrollRef}
          tabIndex={0}
          aria-label="Daftar warta dan pengumuman kegiatan. Geser dengan mouse atau tombol panah keyboard."
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={stopDragging}
          onMouseLeave={stopDragging}
          onClickCapture={handleClickCapture}
          className={`flex gap-6 overflow-x-auto pb-8 pt-2 no-scrollbar select-none rounded-2xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent ${
            isDraggingState
              ? "cursor-grabbing scroll-auto snap-none"
              : "cursor-grab scroll-smooth snap-x snap-mandatory"
          }`}
        >
          {announcements.map((item) => (
            <article
              key={item.slug}
              className="shrink-0 w-[290px] sm:w-[360px] snap-start bg-sand rounded-2xl overflow-hidden border border-line shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02] flex flex-col group select-none"
            >
              {/* Card Image */}
              <div className="relative aspect-[16/10] overflow-hidden bg-charcoal pointer-events-none">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 640px) 290px, 360px"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 bg-charcoal/80 backdrop-blur-md px-3 py-1 rounded-full text-[11px] font-semibold text-white uppercase tracking-wider">
                  {item.category}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex flex-col flex-1 justify-between gap-4">
                <div className="space-y-2.5">
                  <div className="flex items-center gap-1.5 text-xs text-stone font-medium">
                    <IconCalendar size={14} className="text-accent-text" />
                    <span>{item.date}</span>
                  </div>
                  <h3 className="text-xl font-display font-bold text-ink group-hover:text-accent-text transition-colors line-clamp-2">
                    {item.title}
                  </h3>
                  <p className="text-stone text-xs sm:text-sm line-clamp-3 leading-relaxed font-sans">
                    {item.excerpt}
                  </p>
                </div>

                <div className="pt-2 border-t border-line/60">
                  <Link
                    href={`/kegiatan/${item.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-accent-text group-hover:underline"
                  >
                    <span>Baca Selengkapnya</span>
                    <IconArrowRight size={14} />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Carousel Progress Bar */}
        <div className="max-w-xs mx-auto mt-6 bg-line h-1 rounded-full overflow-hidden">
          <div
            className="bg-accent h-full transition-all duration-150 rounded-full"
            style={{ width: `${Math.max(15, scrollProgress)}%` }}
          />
        </div>
      </div>
    </section>
  );
}
