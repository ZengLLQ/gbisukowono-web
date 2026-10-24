/**
 * MOTION TOKENS — satu-satunya sumber nilai animasi di seluruh situs.
 * Jangan menulis durasi/easing/jarak secara ad-hoc di komponen; impor dari sini.
 * Nilai yang sama diekspor ke CSS sebagai variabel (lihat `motionCssVariables`)
 * sehingga animasi CSS (hero saat load) memakai token yang identik.
 */

export const duration = {
  fast: 0.25,
  base: 0.6,
  slow: 1.0,
  /** Ken Burns hero (sekali saat load) */
  kenBurns: 1.6,
  /** Crossfade antar halaman */
  page: 0.3,
  /** Accordion FAQ & reflow grid filter */
  accordion: 0.35,
  /** Pengganti semua animasi saat prefers-reduced-motion aktif */
  reduced: 0.2,
} as const;

export const ease = {
  /** Masuk (entrance) — tenang, tanpa memantul */
  entrance: [0.22, 1, 0.36, 1] as [number, number, number, number],
  /** Perubahan state UI (hover, toggle, accordion) */
  ui: [0.4, 0, 0.2, 1] as [number, number, number, number],
};

export const stagger = 0.08;

export const distance = {
  /** fade-up standar */
  fadeUp: 24,
  /** maksimum untuk blok besar (gambar/teks bergantian) */
  large: 60,
  /** geser dari samping untuk baris bergantian */
  slide: 40,
  /** parallax lambat (+/-) */
  parallax: 40,
  /** tarikan magnetik maksimum */
  magnetic: 6,
} as const;

export const viewport = { once: true, amount: 0.25 } as const;

export const scale = {
  kenBurnsFrom: 1.1,
  imageRevealFrom: 1.08,
  cardHover: 1.02,
  imageHover: 1.05,
  press: 0.98,
  bankCardFrom: 0.96,
} as const;

export const clip = {
  imageFrom: "inset(8% round 24px)",
  imageTo: "inset(0% round 24px)",
} as const;

/** Breakpoint di bawah ini: tanpa parallax / Lenis / magnetic / hover effect. */
export const desktopQuery = "(min-width: 768px) and (hover: hover) and (pointer: fine)";

const cubic = (e: readonly number[]) => `cubic-bezier(${e.join(", ")})`;

/** Diinjeksikan ke <html> lewat app/layout.tsx agar CSS memakai token yang sama. */
export const motionCssVariables = `:root{--dur-fast:${duration.fast}s;--dur-base:${duration.base}s;--dur-slow:${duration.slow}s;--dur-kenburns:${duration.kenBurns}s;--dur-reduced:${duration.reduced}s;--dur-accordion:${duration.accordion}s;--ease-entrance:${cubic(ease.entrance)};--ease-ui:${cubic(ease.ui)};--stagger:${stagger}s;--dist-fadeup:${distance.fadeUp}px;--scale-kenburns:${scale.kenBurnsFrom};--scale-press:${scale.press}}`;
