"use client";

import { useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-[50svh] bg-linen text-dusk pt-28 md:pt-36 pb-20 px-5 md:px-8 mx-auto max-w-2xl">
      <p className="font-ui text-sm text-loam">Something went wrong</p>
      <h1 className="font-display text-4xl md:text-5xl leading-tight mt-4">
        This page couldn’t load
      </h1>
      <p className="mt-5 text-loam text-lg font-body">
        Please try again. If it continues, call us or return home.
      </p>
      <div className="mt-10 flex flex-wrap gap-3">
        <Button type="button" onClick={() => reset()}>
          Try again
        </Button>
        <Button href="/" variant="secondary">
          Home
        </Button>
      </div>
      <p className="mt-8">
        <Link href="/visit" className="link-quiet link-claret font-ui text-sm">
          Plan a visit
        </Link>
      </p>
    </div>
  );
}
