"use client";

import Image from "next/image";
import { useRef, useState, type CSSProperties } from "react";
import {
  motion,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import { MediaImage } from "@/components/ui/MediaImage";
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
        className="chapter-ground bg-linen py-16 md:py-28"
        aria-label="Wattle Bank introduction"
      >
        <div className="mx-auto max-w-7xl px-5 md:px-8 grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div>
            <p className="label-ui text-loam">Wattle Bank</p>
            <p className="font-display text-3xl md:text-5xl mt-4 max-w-2xl text-balance leading-tight text-dusk">
              7 km from Bass Strait
            </p>
            <p className="mt-5 md:mt-6 max-w-lg font-body text-loam text-base md:text-lg leading-relaxed">
              A working farm, vineyard and cellar door in South Gippsland.
            </p>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden">
            <MediaImage asset={media.placeMapPath} sizes="(max-width:1024px) 100vw, 50vw" />
          </div>
        </div>
      </section>

      <section
        id="place"
        ref={trackRef}
        className="relative h-[120vh] md:h-[140vh] chapter-ground bg-dusk"
        aria-labelledby="place-heading"
      >
        <div className="sticky top-0 h-[100svh] overflow-hidden grain-dusk">
          <motion.div
            className="absolute inset-0 origin-center will-change-transform"
            style={{ scale }}
          >
            <div
              className="media-focal absolute inset-0"
              style={
                {
                  "--focal": media.placeAerial.focalPoint,
                  "--focal-mobile":
                    media.placeAerial.focalPointMobile ?? media.placeAerial.focalPoint,
                } as CSSProperties
              }
            >
              <Image
                ref={imgRef}
                src={media.placeAerial.src}
                alt={media.placeAerial.alt}
                fill
                sizes="100vw"
                className="object-cover"
                style={{ objectPosition: media.placeAerial.focalPoint }}
                priority={false}
              />
            </div>
          </motion.div>

          <div
            className="absolute inset-0 bg-[linear-gradient(90deg,rgba(27,30,23,0.82)_0%,rgba(27,30,23,0.35)_50%,rgba(27,30,23,0.45)_100%)] md:bg-[linear-gradient(90deg,rgba(27,30,23,0.75)_0%,rgba(27,30,23,0.2)_55%,rgba(27,30,23,0.4)_100%)]"
            aria-hidden
          />

          <div className="relative z-10 h-full mx-auto max-w-7xl px-5 md:px-8 flex flex-col justify-end pb-24 md:pb-24 pt-24">
            <div className="max-w-xl">
              <h2
                id="place-heading"
                className="font-display text-linen text-[clamp(2rem,5vw,3.5rem)] leading-tight text-balance"
              >
                A destination, not only a bottle
              </h2>
              <p className="mt-3 md:mt-4 max-w-md font-body text-linen/75 text-base md:text-lg">
                Nestled in Wattle Bank — minutes from Inverloch — shaped by coastal air and patient
                seasons.
              </p>

              <div className="mt-8 md:hidden border-t border-linen/15 pt-4" aria-live="polite">
                <p className="font-display text-2xl text-linen">{captions[active].label}</p>
                <p className="label-ui text-linen/55 mt-2">{captions[active].detail}</p>
                <div className="mt-4 flex gap-1.5" aria-hidden>
                  {captions.map((c, i) => (
                    <span
                      key={c.label}
                      className={cn(
                        "h-1 flex-1 transition-opacity duration-500",
                        active === i ? "bg-linen opacity-100" : "bg-linen/25",
                      )}
                    />
                  ))}
                </div>
              </div>

              <ol
                className="mt-10 space-y-0 border-t border-linen/15 hidden md:block"
                aria-live="polite"
              >
                {captions.map((c, i) => (
                  <li
                    key={c.label}
                    className={cn(
                      "py-3 border-b border-linen/15 flex items-baseline justify-between gap-4 transition-opacity duration-500",
                      active === i ? "opacity-100" : "opacity-35",
                    )}
                  >
                    <span className="font-display text-2xl md:text-3xl text-linen">{c.label}</span>
                    <span className="label-ui text-linen/55 shrink-0">{c.detail}</span>
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
