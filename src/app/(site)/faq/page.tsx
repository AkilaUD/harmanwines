import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { getFaqs } from "@/lib/content";
import { JsonLd } from "@/components/seo/JsonLd";
import { media } from "@/content/media";

export const metadata: Metadata = {
  title: "FAQ",
  description: "Frequently asked questions about visiting and shopping with Harman Wines.",
};

export default function FaqPage() {
  const faqs = getFaqs();

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((f) => ({
            "@type": "Question",
            name: f.question,
            acceptedAnswer: { "@type": "Answer", text: f.answer },
          })),
        }}
      />
      <PageHero label="FAQ" title="Questions, answered plainly" media={media.craftGrapes} />
      <section className="pb-20 bg-linen">
        <div className="mx-auto max-w-3xl px-5 md:px-8 divide-y divide-dusk/10">
          {faqs.map((f) => (
            <details key={f.id} className="group py-6">
              <summary className="font-display text-2xl cursor-pointer list-none flex justify-between gap-4 text-dusk">
                {f.question}
                <span className="label-ui text-loam group-open:rotate-45 transition-transform">
                  +
                </span>
              </summary>
              <p className="mt-4 text-loam font-body leading-relaxed">{f.answer}</p>
            </details>
          ))}
        </div>
      </section>
    </>
  );
}
