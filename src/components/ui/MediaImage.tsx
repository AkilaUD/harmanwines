import Image, { type ImageProps } from "next/image";
import type { CSSProperties } from "react";
import type { MediaAsset } from "@/content/media";
import { cn } from "@/lib/utils";

type Props = {
  asset: MediaAsset;
  fill?: boolean;
  priority?: boolean;
  sizes?: string;
  className?: string;
  wrapperClassName?: string;
} & Omit<ImageProps, "src" | "alt" | "fill" | "priority" | "sizes" | "className">;

/**
 * next/image with audited focals. Desktop/mobile object-position via CSS vars.
 */
export function MediaImage({
  asset,
  fill = true,
  priority,
  sizes = "100vw",
  className,
  wrapperClassName,
  style,
  ...rest
}: Props) {
  return (
    <div
      className={cn("media-focal absolute inset-0", wrapperClassName)}
      style={
        {
          "--focal": asset.focalPoint,
          "--focal-mobile": asset.focalPointMobile ?? asset.focalPoint,
        } as CSSProperties
      }
    >
      <Image
        src={asset.src}
        alt={asset.alt}
        fill={fill}
        priority={priority}
        sizes={sizes}
        className={cn("object-cover", className)}
        style={style}
        {...rest}
      />
    </div>
  );
}
