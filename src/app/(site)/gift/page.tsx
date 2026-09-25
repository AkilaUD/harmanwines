import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { nowBookItGiftSrc } from "@/lib/integrations";
import { media } from "@/content/media";

export const metadata: Metadata = {
  title: "Gift Vouchers",
  description:
    "Give them Harman — gift vouchers from $50, valid 3 years, redeemable at the cellar door for food, wine and produce.",
};

export default function GiftPage() {
  return (
    <>
      <PageHero label="Gifts" title="Give them Harman" media={media.winePaddles}>
        <p>
          Vouchers from $50, valid for 3 years. Redeem on site for food, wine or produce — not for
          online wine purchases. Email delivery or posted gift card available.
        </p>
      </PageHero>
      <section className="pb-20 bg-linen">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="embed-shell min-h-[640px] border border-dusk/10 bg-paper overflow-hidden">
            <iframe
              title="Purchase Harman Wines gift voucher"
              src={nowBookItGiftSrc}
              className="w-full min-h-[620px] border-0 bg-linen"
              loading="lazy"
            />
          </div>
          <ul className="mt-10 max-w-2xl text-sm text-loam space-y-2 list-disc pl-5 font-body">
            <li>Redeem in full at the Cellar Door and Restaurant</li>
            <li>Bring the physical voucher when redeeming</li>
            <li>Extensions: maximum 1 month after expiry by prior request and approval</li>
          </ul>
        </div>
      </section>
    </>
  );
}
