# Harman Wines — Feature Matrix (Live → New)

| Live route / feature | New route | Status |
|---|---|---|
| Homepage | `/` | Required |
| About / Our Story | `/our-story` | Required |
| Our Region | `/visit/region` | Required |
| Awards | `/our-story#awards` + section | Required |
| Careers | `/careers` | Required |
| Our Cellar Door | `/visit/cellar-door` | Required |
| Make a Booking (NowBookIt) | `/visit/book` | Required — preserve widget |
| Menu | `/visit/menu` | Required |
| Takeaway | `/visit/menu#takeaway` | Required |
| FAQ | `/faq` | Required |
| Accessibility | `/accessibility` | Required |
| Shop (Ecwid) | `/shop` + `/wine` | Required — preserve Ecwid checkout |
| Gift Vouchers (NowBookIt) | `/gift` | Required — preserve widget |
| Events | `/visit/events` | Required |
| Functions | `/functions` | Required |
| News | `/journal` | Required |
| Contact | `/contact` | Required |
| Phone / address / hours | Site chrome + contact | Required |
| Alcohol licence & warnings | Footer + shop + legal | Required |
| Shipping policy (AU only) | Shop + FAQ | Required |
| Pet policy (picnic only) | Book + FAQ | Required |
| Booking rules (45 days, ≤18) | Book shell | Required |
| Social (FB / IG) | Footer | Required |
| Analytics G-WBZVD8QPKL | Root layout | Required at launch |

## Integrations

| System | IDs | Notes |
|---|---|---|
| NowBookIt booking | account `5fb22ccc-8e16-48b8-8320-bd1f538351b3`, venue `5951` | iframe |
| NowBookIt gift cards | same account/venue | iframe |
| Ecwid | Detect store ID from live embed at deploy | JS API + buy buttons |
| Sanity CMS | Env: `NEXT_PUBLIC_SANITY_PROJECT_ID` | Falls back to local seed |
