"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";

export function ContactForm() {
  const [sent, setSent] = useState(false);

  if (sent) {
    return (
      <div className="border border-dusk/10 bg-paper p-8">
        <p className="font-display text-3xl text-dusk">Thanks for writing</p>
        <p className="mt-3 text-loam font-body">
          Your mail client should open with the message ready to send.
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
        const body = `${fd.get("message")}\n\n— ${fd.get("name")}\n${fd.get("email")}\n${fd.get("phone")}`;
        window.location.href = `mailto:info@harmanwines.com.au?subject=${encodeURIComponent(
          String(fd.get("subject") || "Website enquiry"),
        )}&body=${encodeURIComponent(body)}`;
        setSent(true);
      }}
    >
      <h2 className="font-display text-3xl text-dusk">Write to us</h2>
      <label className="block text-sm">
        <span className="label-ui text-loam">Name</span>
        <input
          name="name"
          required
          className="mt-2 w-full border border-dusk/15 bg-linen px-3 py-2.5 text-dusk font-body focus-visible:outline focus-visible:outline-2 focus-visible:outline-claret"
        />
      </label>
      <label className="block text-sm">
        <span className="label-ui text-loam">Email</span>
        <input
          name="email"
          type="email"
          required
          className="mt-2 w-full border border-dusk/15 bg-linen px-3 py-2.5 text-dusk font-body focus-visible:outline focus-visible:outline-2 focus-visible:outline-claret"
        />
      </label>
      <label className="block text-sm">
        <span className="label-ui text-loam">Phone</span>
        <input
          name="phone"
          type="tel"
          className="mt-2 w-full border border-dusk/15 bg-linen px-3 py-2.5 text-dusk font-body focus-visible:outline focus-visible:outline-2 focus-visible:outline-claret"
        />
      </label>
      <label className="block text-sm">
        <span className="label-ui text-loam">Subject</span>
        <input
          name="subject"
          className="mt-2 w-full border border-dusk/15 bg-linen px-3 py-2.5 text-dusk font-body focus-visible:outline focus-visible:outline-2 focus-visible:outline-claret"
        />
      </label>
      <label className="block text-sm">
        <span className="label-ui text-loam">Message</span>
        <textarea
          name="message"
          required
          rows={5}
          className="mt-2 w-full border border-dusk/15 bg-linen px-3 py-2.5 text-dusk font-body focus-visible:outline focus-visible:outline-2 focus-visible:outline-claret"
        />
      </label>
      <Button type="submit">Send message</Button>
    </form>
  );
}
