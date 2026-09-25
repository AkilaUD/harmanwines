import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Harman Wines",
    short_name: "Harman",
    description: "Family vineyard & cellar door — Wattle Bank, South Gippsland",
    start_url: "/",
    display: "standalone",
    background_color: "#f3efe6",
    theme_color: "#2c3a28",
  };
}
