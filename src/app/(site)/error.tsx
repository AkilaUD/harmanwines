"use client";

import { useEffect } from "react";
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
    <div className="pt-28 md:pt-36 pb-20 px-5 md:px-8 mx-auto max-w-2xl">
      <p className="label-micro text-stone">Something went wrong</p>
      <h1 className="font-display text-4xl md:text-5xl leading-tight mt-4">
        This page couldn’t load
      </h1>
      <p className="mt-5 text-stone text-lg">
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
    </div>
  );
}
