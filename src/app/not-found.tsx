import Link from "next/link";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div className="min-h-[70svh] flex items-center bg-linen text-dusk">
      <div className="mx-auto max-w-2xl px-5 md:px-8 py-24">
        <p className="font-ui text-sm text-loam">404</p>
        <h1 className="font-display text-5xl md:text-6xl leading-tight mt-4">
          This path isn’t on the map
        </h1>
        <p className="mt-5 text-loam text-lg max-w-md font-body">
          The page may have moved. Continue to the cellar door, the wine collection, or home.
        </p>
        <div className="mt-10 flex flex-wrap gap-3">
          <Button href="/">Home</Button>
          <Button href="/visit/book" variant="secondary">
            Book a Table
          </Button>
          <Button href="/wine" variant="secondary">
            Wine
          </Button>
        </div>
        <p className="mt-8">
          <Link href="/visit" className="link-quiet link-claret font-ui text-sm">
            Plan a visit
          </Link>
        </p>
      </div>
    </div>
  );
}
