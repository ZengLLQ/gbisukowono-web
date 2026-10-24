"use client";

import React, { ReactNode } from "react";
import { motion, useReducedMotion } from "motion/react";
import { duration, distance, ease, viewport } from "@/lib/motion";

interface RevealProps {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  as?: React.ElementType;
}

export function Reveal({
  children,
  delay = 0,
  y = distance.fadeUp,
  className = "",
  as = "div",
}: RevealProps) {
  const shouldReduceMotion = useReducedMotion();
  const Component = motion.create(as as any);

  return (
    <Component
      initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y }}
      whileInView={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
      viewport={viewport}
      transition={{
        duration: shouldReduceMotion ? duration.reduced : duration.base,
        ease: shouldReduceMotion ? ("linear" as const) : ease.entrance,
        delay,
      }}
      className={className}
    >
      {children}
    </Component>
  );
}
