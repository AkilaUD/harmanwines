import Image, { type ImageProps } from "next/image";
import type { MediaAsset } from "@/content/media";
import { cn } from "@/lib/utils";

type Props = {
  asset: MediaAsset;
  fill?: boolean;
  priority?: boolean;
  sizes?: string;
  className?: string;
  /** Use mobile focal when true (caller decides via CSS or prop) */
  mobileFocal?: boolean;
} & Omit<ImageProps, "src" | "alt" | "fill" | "priority" | "sizes" | "className">;

/**
 * next/image wrapper that applies audited focal points from the media model.
 */
export function MediaImage({
  asset,
  fill = true,
  priority,
  sizes = "100vw",
  className,
  mobileFocal,
  style,
  ...rest
}: Props) {
  const objectPosition =
    mobileFocal && asset.focalPointMobile ? asset.focalPointMobile : asset.focalPoint;

  return (
    <Image
      src={asset.src}
      alt={asset.alt}
      fill={fill}
      priority={priority}
      sizes={sizes}
      className={cn("object-cover", className)}
      style={{ objectPosition, ...style }}
      {...rest}
    />
  );
}
