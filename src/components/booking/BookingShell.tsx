"use client";

import { nowBookItBookingSrc } from "@/lib/integrations";
import { siteSettings } from "@/content/seed";
import { getSpaces } from "@/lib/content";
import { useState } from "react";
import { cn } from "@/lib/utils";

const steps = ["Where", "When", "Notes"] as const;

export function BookingShell() {
  const spaces = getSpaces();
  const [step, setStep] = useState(0);
  const [space, setSpace] = useState<string | null>(null);
  const [showWidget, setShowWidget] = useState(false);

  return (
    <div className="grid lg:grid-cols-[1fr_1.15fr] gap-12 lg:gap-16">
      <div>
        <p className="label-ui text-loam mb-4">Hospitality first</p>
        <h2 className="font-display text-5xl md:text-6xl text-dusk">Book a table</h2>
        <p className="mt-5 text-loam text-lg max-w-md font-body">
          Online bookings for up to {siteSettings.booking.maxOnlineGuests} guests. Larger groups —
          please call {siteSettings.phone} or email {siteSettings.email}. Bookings open{" "}
          {siteSettings.booking.advanceDays} days ahead.
        </p>

        <ol className="mt-10 flex gap-4 label-ui">
          {steps.map((s, i) => (
            <li key={s} className={cn(i === step ? "text-claret" : "text-loam")}>
              {String(i + 1).padStart(2, "0")} {s}
            </li>
          ))}
        </ol>

        {step === 0 && (
          <div className="mt-8 space-y-3">
            <p className="font-display text-2xl text-dusk">Where would you like to gather?</p>
            {spaces.map((s) => (
              <button
                key={s.id}
                type="button"
                onClick={() => {
                  setSpace(s.id);
                  setStep(1);
                }}
                className={cn(
                  "w-full text-left border px-5 py-4 transition-colors font-ui",
                  space === s.id
                    ? "border-claret bg-claret/5"
                    : "border-dusk/15 hover:border-dusk/40",
                )}
              >
                <span className="font-medium text-dusk">{s.name}</span>
                <span className="block text-sm text-loam mt-1">{s.mood.join(", ")}</span>
                {s.petFriendly && (
                  <span className="block label-ui text-garden mt-2">Dogs on lead welcome</span>
                )}
              </button>
            ))}
          </div>
        )}

        {step === 1 && (
          <div className="mt-8 space-y-4">
            <p className="font-display text-2xl text-dusk">When?</p>
            <ul className="text-sm text-loam space-y-2 font-body">
              {siteSettings.hours.map((h) => (
                <li key={h.day}>
                  <strong className="text-dusk font-medium">{h.day}</strong> —{" "}
                  {h.sessions.join("; ")}
                </li>
              ))}
            </ul>
            <p className="text-sm text-loam font-body">
              Choose your date and time in the booking calendar. Note dietary needs, celebrations,
              pets (picnic only), or accessibility in special requests.
            </p>
            <div className="flex gap-3 pt-2">
              <button
                type="button"
                className="label-ui text-loam underline"
                onClick={() => setStep(0)}
              >
                Back
              </button>
              <button
                type="button"
                className="label-ui text-claret underline"
                onClick={() => {
                  setStep(2);
                  setShowWidget(true);
                }}
              >
                Continue to calendar
              </button>
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="mt-8 space-y-4 text-sm text-loam font-body">
            <p className="font-display text-2xl text-dusk">Anything we should know?</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Dietary requirements & allergies</li>
              <li>Celebration or cake ($2.50pp cake surcharge)</li>
              <li>Pet on picnic booking only</li>
              <li>Accessibility needs</li>
            </ul>
            <p>
              A card is taken for pre-authorisation only. Cancellations within 24 hours or no-shows
              may incur a fee.
            </p>
            <button
              type="button"
              className="label-ui text-loam underline"
              onClick={() => setStep(1)}
            >
              Back
            </button>
          </div>
        )}
      </div>

      <div className="embed-shell min-h-[640px]">
        {showWidget || step === 2 ? (
          <iframe
            title="Book a table at Harman Wines"
            src={nowBookItBookingSrc}
            className="w-full min-h-[620px] border-0 bg-linen"
            loading="lazy"
          />
        ) : (
          <div className="h-full min-h-[620px] flex items-center justify-center p-8 text-center text-loam font-body">
            <p className="max-w-xs">
              Choose an atmosphere to begin. The live availability calendar opens when you’re ready.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
