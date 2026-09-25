import { siteSettings } from "@/content/seed";

/** Ecwid store ID from live harmanwines.com.au shop embed. */
export const ECWID_STORE_ID_DEFAULT = "17450415";

export const nowBookItBookingSrc = `https://bookings.nowbookit.com/?accountid=${siteSettings.booking.accountId}&venueid=${siteSettings.booking.venueId}&theme=light&colors=hex,3d4a3a`;

export const nowBookItGiftSrc = `https://giftcards.nowbookit.com/cards?accountid=${siteSettings.booking.accountId}&venueid=${siteSettings.booking.venueId}&theme=light&accent=61,74,58`;

/** Ecwid store ID — env override, else live store. */
export const ecwidStoreId =
  process.env.NEXT_PUBLIC_ECWID_STORE_ID?.trim() || ECWID_STORE_ID_DEFAULT;
