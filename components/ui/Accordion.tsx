"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { IconChevronDown } from "@/components/ui/Icons";
import { duration, ease } from "@/lib/motion";

export interface AccordionItemData {
  id: string;
  question: string;
  answer: string;
}

interface AccordionProps {
  items: AccordionItemData[];
  className?: string;
}

export function Accordion({ items, className = "" }: AccordionProps) {
  const [openId, setOpenId] = useState<string | null>(items[0]?.id || null);

  const toggle = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <div className={`space-y-4 ${className}`}>
      {items.map((item) => {
        const isOpen = openId === item.id;
        const headingId = `faq-h-${item.id}`;
        const panelId = `faq-p-${item.id}`;

        return (
          <div
            key={item.id}
            className="rounded-2xl border border-white/[0.08] bg-white/[0.025] backdrop-blur-md overflow-hidden transition-all hover:border-white/20 bento-shimmer relative"
          >
            <h3>
              <button
                type="button"
                id={headingId}
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => toggle(item.id)}
                className="w-full px-6 py-5 flex items-center justify-between gap-4 text-left font-display font-medium text-base sm:text-lg text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent"
              >
                <span>{item.question}</span>
                <motion.span
                  animate={{ rotate: isOpen ? 180 : 0 }}
                  transition={{ duration: duration.accordion, ease: ease.ui }}
                  className="text-accent shrink-0"
                >
                  <IconChevronDown size={18} />
                </motion.span>
              </button>
            </h3>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  id={panelId}
                  role="region"
                  aria-labelledby={headingId}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: duration.accordion, ease: ease.ui }}
                  className="overflow-hidden"
                >
                  <div className="px-6 pb-6 pt-2 text-slate-300 text-sm sm:text-base leading-relaxed font-sans font-light border-t border-white/[0.06]">
                    {item.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
