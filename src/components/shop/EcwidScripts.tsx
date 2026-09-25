"use client";

import Script from "next/script";
import { useEffect } from "react";
import { ecwidStoreId } from "@/lib/integrations";

const SCRIPT_SRC = `https://app.ecwid.com/script.js?${ecwidStoreId}&data_platform=code`;

/** Load Ecwid JS on /shop — next/script + config flags. */
export function EcwidScripts() {
  useEffect(() => {
    window.ecwid_script_defer = true;
    window.ecwid_dynamic_widgets = true;
  }, []);

  return (
    <Script
      id="ecwid-store-script"
      src={SCRIPT_SRC}
      strategy="afterInteractive"
      onLoad={() => {
        window.ecwid_script_defer = true;
        window.ecwid_dynamic_widgets = true;
      }}
    />
  );
}
