"use client";

import React, { ReactNode } from "react";
import { motion, useReducedMotion, type HTMLMotionProps } from "motion/react";
import { duration, distance, ease, viewport } from "@/lib/motion";

type AllowedTag =
  | "div"
  | "span"
  | "section"
  | "article"
  | "p"
  | "header"
  | "footer"
  | "h1"
  | "h2"
  | "h3";

interface RevealProps {
  children: ReactNode;
  delay?: number;
  y?: number;
  x?: number;
  className?: string;
  as?: AllowedTag;
}

function MotionComponent({
  as = "div",
  children,
  ...props
}: { as?: AllowedTag; children: ReactNode } & HTMLMotionProps<"div">) {
  switch (as) {
    case "span":
      return <motion.span {...(props as HTMLMotionProps<"span">)}>{children}</motion.span>;
    case "section":
      return <motion.section {...(props as HTMLMotionProps<"section">)}>{children}</motion.section>;
    case "article":
      return <motion.article {...(props as HTMLMotionProps<"article">)}>{children}</motion.article>;
    case "p":
      return <motion.p {...(props as HTMLMotionProps<"p">)}>{children}</motion.p>;
    case "header":
      return <motion.header {...(props as HTMLMotionProps<"header">)}>{children}</motion.header>;
    case "footer":
      return <motion.footer {...(props as HTMLMotionProps<"footer">)}>{children}</motion.footer>;
    case "h1":
      return <motion.h1 {...(props as HTMLMotionProps<"h1">)}>{children}</motion.h1>;
    case "h2":
      return <motion.h2 {...(props as HTMLMotionProps<"h2">)}>{children}</motion.h2>;
    case "h3":
      return <motion.h3 {...(props as HTMLMotionProps<"h3">)}>{children}</motion.h3>;
    default:
      return <motion.div {...props}>{children}</motion.div>;
  }
}

export function Reveal({
  children,
  delay = 0,
  y = distance.fadeUp,
  x = 0,
  className = "",
  as = "div",
}: RevealProps) {
  const shouldReduceMotion = useReducedMotion();

  const initialVariant = shouldReduceMotion
    ? { opacity: 0 }
    : { opacity: 0, y, x };

  const inViewVariant = shouldReduceMotion
    ? { opacity: 1 }
    : { opacity: 1, y: 0, x: 0 };

  return (
    <MotionComponent
      as={as}
      initial={initialVariant}
      whileInView={inViewVariant}
      viewport={viewport}
      transition={{
        duration: shouldReduceMotion ? duration.reduced : duration.base,
        ease: shouldReduceMotion ? ("linear" as const) : ease.entrance,
        delay,
      }}
      className={className}
    >
      {children}
    </MotionComponent>
  );
}
