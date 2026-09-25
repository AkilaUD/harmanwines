"use client";

import Script from "next/script";
import { ecwidStoreId } from "@/lib/integrations";

/** Load Ecwid JS only where the storefront mounts (/shop). */
export function EcwidScripts() {
  return (
    <>
      <Script
        id="ecwid-config"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `window.ecwid_script_defer = true; window.ecwid_dynamic_widgets = true;`,
        }}
      />
      <Script
        src={`https://app.ecwid.com/script.js?${ecwidStoreId}&data_platform=code`}
        strategy="afterInteractive"
      />
    </>
  );
}
