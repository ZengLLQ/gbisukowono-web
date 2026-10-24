"use client";

import React, { ReactNode } from "react";
import { motion, useReducedMotion, type HTMLMotionProps } from "motion/react";
import { duration, ease, stagger, viewport } from "@/lib/motion";

type AllowedTag = "h1" | "h2" | "h3" | "span" | "div";

interface TextRevealProps {
  text: string;
  as?: AllowedTag;
  className?: string;
  delay?: number;
}

function MotionHeadingContainer({
  as = "h2",
  children,
  ...props
}: { as?: AllowedTag; children: ReactNode } & HTMLMotionProps<"h2">) {
  switch (as) {
    case "h1":
      return <motion.h1 {...(props as HTMLMotionProps<"h1">)}>{children}</motion.h1>;
    case "h3":
      return <motion.h3 {...(props as HTMLMotionProps<"h3">)}>{children}</motion.h3>;
    case "span":
      return <motion.span {...(props as HTMLMotionProps<"span">)}>{children}</motion.span>;
    case "div":
      return <motion.div {...(props as HTMLMotionProps<"div">)}>{children}</motion.div>;
    default:
      return <motion.h2 {...props}>{children}</motion.h2>;
  }
}

export function TextReveal({
  text,
  as = "h2",
  className = "",
  delay = 0,
}: TextRevealProps) {
  const shouldReduceMotion = useReducedMotion();
  const words = text.split(" ");

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
    <MotionHeadingContainer
      as={as}
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
    </MotionHeadingContainer>
  );
}
