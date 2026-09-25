import Link from "next/link";
import { cn } from "@/lib/utils";
import type { ComponentPropsWithoutRef } from "react";

type ButtonVariant = "primary" | "secondary" | "ghost" | "on-dark";
type ButtonSize = "sm" | "md" | "lg";

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-burgundy text-cream hover:bg-plum border border-transparent",
  secondary:
    "bg-transparent text-charcoal border border-charcoal/25 hover:border-charcoal/60",
  ghost: "bg-transparent text-charcoal hover:text-burgundy underline-offset-4 hover:underline",
  "on-dark":
    "bg-cream text-charcoal hover:bg-paper border border-transparent",
};

const sizes: Record<ButtonSize, string> = {
  sm: "px-4 py-2 text-xs tracking-[0.14em] uppercase",
  md: "px-5 py-3 text-xs tracking-[0.16em] uppercase",
  lg: "px-7 py-3.5 text-sm tracking-[0.16em] uppercase",
};

type Common = {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  children: React.ReactNode;
};

type AsButton = Common &
  ComponentPropsWithoutRef<"button"> & { href?: undefined };
type AsLink = Common & { href: string } & Omit<
  ComponentPropsWithoutRef<"a">,
  "href"
>;

export function Button({
  variant = "primary",
  size = "md",
  className,
  children,
  ...props
}: AsButton | AsLink) {
  const classes = cn(
    "inline-flex items-center justify-center gap-2 rounded-sm transition-colors duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-burgundy disabled:opacity-50",
    variants[variant],
    sizes[size],
    className,
  );

  if ("href" in props && props.href) {
    const { href, ...rest } = props;
    return (
      <Link href={href} className={classes} {...rest}>
        {children}
      </Link>
    );
  }

  const buttonProps = props as AsButton;
  return (
    <button className={classes} {...buttonProps}>
      {children}
    </button>
  );
}
