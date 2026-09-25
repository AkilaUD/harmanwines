export default function Loading() {
  return (
    <div
      className="bg-linen pt-28 md:pt-36 pb-20 px-5 md:px-8 mx-auto max-w-7xl animate-pulse"
      aria-busy
    >
      <div className="h-3 w-28 bg-loam/15 mb-6" />
      <div className="h-12 w-2/3 max-w-md bg-loam/15 mb-4" />
      <div className="h-4 w-full max-w-lg bg-loam/10 mb-2" />
      <div className="h-4 w-3/4 max-w-md bg-loam/10 mb-16" />
      <div className="aspect-[16/9] w-full bg-loam/10" />
    </div>
  );
}
