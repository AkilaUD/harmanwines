"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import {
  motion,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import { SectionLabel, EditorialHeading } from "@/components/ui/Reveal";
import { media } from "@/content/media";
import { cn } from "@/lib/utils";

const captions = [
  { label: "Australia", detail: "Southern coast" },
  { label: "Victoria", detail: "Bass Coast" },
  { label: "South Gippsland", detail: "Maritime climate" },
  { label: "Wattle Bank", detail: "7 km from Bass Strait" },
  { label: "Harman Wines", detail: "612 Korumburra–Inverloch Rd" },
];

export function ChapterPlace() {
  const trackRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);
  const reduceMotion = useReducedMotion();
  const [active, setActive] = useState(0);

  const { scrollYProgress } = useScroll({
    target: trackRef,
    offset: ["start start", "end end"],
  });

  const scale = useTransform(
    scrollYProgress,
    [0, 1],
    reduceMotion ? [1.08, 1.08] : [1.04, 1.28],
  );
  const objectPosition = useTransform(
    scrollYProgress,
    [0, 1],
    reduceMotion
      ? [media.placeAerial.focalPoint, media.placeAerial.focalPoint]
      : [media.placeAerial.focalPoint, "44% 58%"],
  );

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    setActive(Math.min(captions.length - 1, Math.floor(v * captions.length)));
  });

  useMotionValueEvent(objectPosition, "change", (v) => {
    if (imgRef.current) imgRef.current.style.objectPosition = v;
  });

  return (
    <>
      <section
        className="chapter-ground bg-cream py-20 md:py-28"
        aria-label="Wattle Bank introduction"
      >
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <p className="label-micro">Wattle Bank</p>
          <p className="font-display text-3xl md:text-5xl mt-4 max-w-2xl text-balance">
            7 km from Bass Strait
          </p>
          <p className="mt-6 max-w-lg text-stone text-lg leading-relaxed">
            A working farm, vineyard and cellar door in South Gippsland.
          </p>
        </div>
      </section>

      <section
        id="place"
        ref={trackRef}
        className="relative h-[140vh] chapter-ground bg-charcoal"
        aria-labelledby="place-heading"
      >
        <div className="sticky top-0 h-[100svh] overflow-hidden grain">
          <motion.div
            className="absolute inset-0 origin-center will-change-transform"
            style={{ scale }}
          >
            <Image
              ref={imgRef}
              src={media.placeAerial.src}
              alt={media.placeAerial.alt}
              fill
              sizes="100vw"
              className="object-cover"
              style={{ objectPosition: media.placeAerial.focalPoint }}
            />
          </motion.div>

          <div
            className="absolute inset-0 bg-[linear-gradient(90deg,rgba(36,34,30,0.75)_0%,rgba(36,34,30,0.2)_55%,rgba(36,34,30,0.4)_100%)]"
            aria-hidden
          />

          <div className="relative z-10 h-full mx-auto max-w-7xl px-5 md:px-8 flex flex-col justify-end pb-16 md:pb-24 pt-28">
            <div className="max-w-xl">
              <SectionLabel className="text-cream/50">Arrive at Harman</SectionLabel>
              <EditorialHeading id="place-heading" className="text-cream">
                A destination, not only a bottle
              </EditorialHeading>
              <p className="mt-4 max-w-md text-cream/75 text-lg">
                Nestled in Wattle Bank — minutes from Inverloch — shaped by coastal air and patient
                seasons.
              </p>

              <ol className="mt-10 space-y-0 border-t border-cream/15" aria-live="polite">
                {captions.map((c, i) => (
                  <li
                    key={c.label}
                    className={cn(
                      "py-3 border-b border-cream/15 flex items-baseline justify-between gap-4 transition-opacity duration-500",
                      active === i ? "opacity-100" : "opacity-35",
                    )}
                  >
                    <span className="font-display text-2xl md:text-3xl text-cream">{c.label}</span>
                    <span className="label-micro text-cream/55 shrink-0">{c.detail}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
