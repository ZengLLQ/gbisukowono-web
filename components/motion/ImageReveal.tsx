"use client";

import React, { ReactNode } from "react";
import { motion, useReducedMotion } from "motion/react";
import { duration, ease, clip, scale, viewport } from "@/lib/motion";

interface ImageRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export function ImageReveal({
  children,
  className = "",
  delay = 0,
}: ImageRevealProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={
        shouldReduceMotion
          ? { opacity: 0 }
          : {
              clipPath: clip.imageFrom,
              scale: scale.imageRevealFrom,
              opacity: 0,
            }
      }
      whileInView={
        shouldReduceMotion
          ? { opacity: 1 }
          : {
              clipPath: clip.imageTo,
              scale: 1,
              opacity: 1,
            }
      }
      viewport={viewport}
      transition={{
        duration: shouldReduceMotion ? duration.reduced : duration.slow,
        ease: shouldReduceMotion ? ("linear" as const) : ease.entrance,
        delay,
      }}
      className={`overflow-hidden rounded-[24px] will-change-[clip-path,transform] ${className}`}
    >
      {children}
    </motion.div>
  );
}
