"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";

export function ContactForm() {
  const [sent, setSent] = useState(false);

  if (sent) {
    return (
      <div className="border border-charcoal/10 bg-surface p-8">
        <p className="font-display text-3xl">Thanks for writing</p>
        <p className="mt-3 text-stone">Your mail client should open with the message ready to send.</p>
      </div>
    );
  }

  return (
    <form
      className="border border-charcoal/10 bg-surface p-6 md:p-8 space-y-5"
      onSubmit={(e) => {
        e.preventDefault();
        const fd = new FormData(e.currentTarget);
        const body = `${fd.get("message")}\n\n— ${fd.get("name")}\n${fd.get("email")}\n${fd.get("phone")}`;
        window.location.href = `mailto:info@harmanwines.com.au?subject=${encodeURIComponent(
          String(fd.get("subject") || "Website enquiry"),
        )}&body=${encodeURIComponent(body)}`;
        setSent(true);
      }}
    >
      <h2 className="font-display text-3xl">Write to us</h2>
      <label className="block text-sm">
        <span className="label-micro">Name</span>
        <input name="name" required className="mt-2 w-full border border-charcoal/15 bg-cream px-3 py-2" />
      </label>
      <label className="block text-sm">
        <span className="label-micro">Email</span>
        <input name="email" type="email" required className="mt-2 w-full border border-charcoal/15 bg-cream px-3 py-2" />
      </label>
      <label className="block text-sm">
        <span className="label-micro">Phone</span>
        <input name="phone" type="tel" className="mt-2 w-full border border-charcoal/15 bg-cream px-3 py-2" />
      </label>
      <label className="block text-sm">
        <span className="label-micro">Subject</span>
        <input name="subject" className="mt-2 w-full border border-charcoal/15 bg-cream px-3 py-2" />
      </label>
      <label className="block text-sm">
        <span className="label-micro">Message</span>
        <textarea name="message" required rows={5} className="mt-2 w-full border border-charcoal/15 bg-cream px-3 py-2" />
      </label>
      <Button type="submit">Send message</Button>
    </form>
  );
}
