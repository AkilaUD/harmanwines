import Image from "next/image";
import { cn } from "@/lib/utils";
import { media } from "@/content/media";

type Props = {
  /** White ship mark for dusk / hero; dark mark for linen */
  tone?: "light" | "dark";
  className?: string;
  /** Display width in px (height follows aspect) */
  width?: number;
  priority?: boolean;
};

/** Original Harman ship wordmark from the live site. */
export function BrandLogo({
  tone = "dark",
  className,
  width = 140,
  priority,
}: Props) {
  const asset = tone === "light" ? media.logoWhite : media.logoDark;
  const height = Math.round(width * 0.51);

  return (
    <Image
      src={asset.src}
      alt={asset.alt}
      width={width}
      height={height}
      className={cn("h-auto object-contain", className)}
      priority={priority}
    />
  );
}
