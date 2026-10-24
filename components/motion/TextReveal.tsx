"use client";

import React from "react";
import { motion, useReducedMotion } from "motion/react";
import { duration, ease, stagger, viewport } from "@/lib/motion";

interface TextRevealProps {
  text: string;
  as?: "h1" | "h2" | "h3" | "span" | "div";
  className?: string;
  delay?: number;
}

export function TextReveal({
  text,
  as = "h2",
  className = "",
  delay = 0,
}: TextRevealProps) {
  const shouldReduceMotion = useReducedMotion();
  const words = text.split(" ");
  const Component = motion.create(as as any);

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: shouldReduceMotion ? 0.02 : stagger,
        delayChildren: delay,
      },
    },
  };

  const wordVariants = shouldReduceMotion
    ? {
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            duration: duration.reduced,
            ease: "linear" as const,
          },
        },
      }
    : {
        hidden: { y: "110%", opacity: 0 },
        visible: {
          y: 0,
          opacity: 1,
          transition: {
            duration: duration.slow,
            ease: ease.entrance,
          },
        },
      };

  return (
    <Component
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      className={`${className} overflow-hidden`}
    >
      {words.map((word, i) => (
        <span
          key={`${word}-${i}`}
          className="inline-block overflow-hidden align-top mr-[0.26em] last:mr-0 pb-[0.05em]"
        >
          <motion.span variants={wordVariants} className="inline-block">
            {word}
          </motion.span>
        </span>
      ))}
    </Component>
  );
}
