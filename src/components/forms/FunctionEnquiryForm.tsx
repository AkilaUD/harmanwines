"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";

export function FunctionEnquiryForm() {
  const [sent, setSent] = useState(false);

  if (sent) {
    return (
      <div className="border border-dusk/10 bg-paper p-8">
        <p className="font-display text-3xl">Thank you</p>
        <p className="mt-3 text-loam font-body">
          Your enquiry is ready to send via email. If your mail client didn’t open, write to
          info@harmanwines.com.au.
        </p>
      </div>
    );
  }

  return (
    <form
      className="border border-dusk/10 bg-paper p-6 md:p-8 space-y-5"
      onSubmit={(e) => {
        e.preventDefault();
        const fd = new FormData(e.currentTarget);
        const body = [
          `Event type: ${fd.get("type")}`,
          `Date: ${fd.get("date")}`,
          `Guests: ${fd.get("guests")}`,
          `Space: ${fd.get("space")}`,
          `Food style: ${fd.get("food")}`,
          `Wine: ${fd.get("wine")}`,
          "",
          String(fd.get("message") || ""),
          "",
          `Name: ${fd.get("name")}`,
          `Email: ${fd.get("email")}`,
          `Phone: ${fd.get("phone")}`,
        ].join("\n");
        window.location.href = `mailto:info@harmanwines.com.au?subject=${encodeURIComponent(
          "Function enquiry — Harman Wines",
        )}&body=${encodeURIComponent(body)}`;
        setSent(true);
      }}
    >
      <h2 className="font-display text-3xl">Enquire</h2>
      <label className="block text-sm">
        <span className="label-ui text-loam">Event type</span>
        <select name="type" required className="mt-2 w-full border border-dusk/15 bg-linen text-dusk font-body px-3 py-2">
          <option value="">Select…</option>
          <option>Wedding</option>
          <option>Celebration</option>
          <option>Corporate</option>
          <option>Team retreat</option>
          <option>Private dining</option>
          <option>Other</option>
        </select>
      </label>
      <div className="grid sm:grid-cols-2 gap-4">
        <label className="block text-sm">
          <span className="label-ui text-loam">Date</span>
          <input name="date" type="date" className="mt-2 w-full border border-dusk/15 bg-linen text-dusk font-body px-3 py-2" />
        </label>
        <label className="block text-sm">
          <span className="label-ui text-loam">Guest count</span>
          <input name="guests" type="number" min={1} className="mt-2 w-full border border-dusk/15 bg-linen text-dusk font-body px-3 py-2" />
        </label>
      </div>
      <label className="block text-sm">
        <span className="label-ui text-loam">Preferred space</span>
        <select name="space" className="mt-2 w-full border border-dusk/15 bg-linen text-dusk font-body px-3 py-2">
          <option>Cellar Door Inside</option>
          <option>Pergola</option>
          <option>Whole venue</option>
          <option>Not sure</option>
        </select>
      </label>
      <label className="block text-sm">
        <span className="label-ui text-loam">Food style</span>
        <input name="food" className="mt-2 w-full border border-dusk/15 bg-linen text-dusk font-body px-3 py-2" placeholder="e.g. wood-fired, seated banquet" />
      </label>
      <label className="block text-sm">
        <span className="label-ui text-loam">Wine</span>
        <input name="wine" className="mt-2 w-full border border-dusk/15 bg-linen text-dusk font-body px-3 py-2" placeholder="Estate pairings, tasting, etc." />
      </label>
      <label className="block text-sm">
        <span className="label-ui text-loam">Message</span>
        <textarea name="message" rows={4} className="mt-2 w-full border border-dusk/15 bg-linen text-dusk font-body px-3 py-2" />
      </label>
      <div className="grid sm:grid-cols-3 gap-4">
        <label className="block text-sm sm:col-span-1">
          <span className="label-ui text-loam">Name</span>
          <input name="name" required className="mt-2 w-full border border-dusk/15 bg-linen text-dusk font-body px-3 py-2" />
        </label>
        <label className="block text-sm">
          <span className="label-ui text-loam">Email</span>
          <input name="email" type="email" required className="mt-2 w-full border border-dusk/15 bg-linen text-dusk font-body px-3 py-2" />
        </label>
        <label className="block text-sm">
          <span className="label-ui text-loam">Phone</span>
          <input name="phone" type="tel" className="mt-2 w-full border border-dusk/15 bg-linen text-dusk font-body px-3 py-2" />
        </label>
      </div>
      <Button type="submit">Send enquiry</Button>
    </form>
  );
}
