"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

const ease = [0.22, 1, 0.36, 1] as const;

export function Reveal({
  children,
  className,
  delay = 0,
  y = 20,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  /** Vertical travel in px; 0 = opacity only */
  y?: number;
}) {
  const reduce = useReducedMotion();

  if (reduce) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-8% 0px" }}
      transition={{ duration: 0.8, delay, ease }}
    >
      {children}
    </motion.div>
  );
}

/** Soft italic display line — optional, varied per section (not a universal eyebrow) */
export function SectionLabel({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <p className={cn("font-display text-lg md:text-xl italic mb-3 text-loam", className)}>
      {children}
    </p>
  );
}

export function EditorialHeading({
  children,
  as: Tag = "h2",
  className,
  id,
}: {
  children: ReactNode;
  as?: "h1" | "h2" | "h3";
  className?: string;
  id?: string;
}) {
  return (
    <Tag
      id={id}
      className={cn(
        "font-display text-4xl md:text-5xl lg:text-6xl leading-[1.05] tracking-tight text-balance",
        className,
      )}
    >
      {children}
    </Tag>
  );
}
