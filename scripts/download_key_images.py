import json
import re
import sys
import urllib.request
from pathlib import Path
from urllib.parse import urlparse, unquote

sys.stdout.reconfigure(line_buffering=True)

HEADERS = {
    "User-Agent": (
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 "
        "(KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36"
    ),
    "Accept": "image/avif,image/webp,image/apng,image/*,*/*;q=0.8",
    "Referer": "https://www.harmanwines.com.au/",
}

OUT = Path("public/images/harman")
OUT.mkdir(parents=True, exist_ok=True)

# Prefer largest useful assets (skip tiny thumbs / size variants)
URLS = [
    "https://www.harmanwines.com.au/wp-content/uploads/2019/01/Harman-Wines-white-01-e1547431145664.png",
    "https://www.harmanwines.com.au/wp-content/uploads/2019/01/Harman-Wines-e1547431536572.jpg",
    "https://www.harmanwines.com.au/wp-content/uploads/2025/08/Brown_D_Harman_Wines_0285-scaled.jpg",
    "https://www.harmanwines.com.au/wp-content/uploads/2025/08/dji_fly_20240124_153604_0002_1706413557790_photo-1-scaled.jpg",
    "https://www.harmanwines.com.au/wp-content/uploads/2025/08/dji_fly_20240124_180554_0009_1706413548051_photo-1-scaled.jpg",
    "https://www.harmanwines.com.au/wp-content/uploads/2026/07/IMG_4700-scaled.jpg",
    "https://www.harmanwines.com.au/wp-content/uploads/2025/09/Brown_D_Harman_Wines_0364-1-scaled.jpg",
    "https://www.harmanwines.com.au/wp-content/uploads/2026/07/9-Image-Wine-Paddles-scaled.jpeg",
    "https://www.harmanwines.com.au/wp-content/uploads/2025/08/IMG_1732-1-scaled.jpg",
    "https://www.harmanwines.com.au/wp-content/uploads/2019/07/BCS_B_AWARDS_HARMANS-WINES_009-1_2718f0c5fd9b09205b0f772d8c614acd.jpg",
    "https://www.harmanwines.com.au/wp-content/uploads/2019/07/O7I6321-2_16fb36fc16fa1db0bcd69160f2fffe80.jpg",
    "https://www.harmanwines.com.au/wp-content/uploads/2018/12/grapes.jpg",
    "https://www.harmanwines.com.au/wp-content/uploads/2025/08/Brown_D_Harman_Wines_0025-2-2-scaled.jpg",
    "https://www.harmanwines.com.au/wp-content/uploads/2025/09/Food-and-Wine-1.png",
    "https://www.harmanwines.com.au/wp-content/uploads/2026/07/cropped-vta2025-gold-winner-reversed.jpg",
    "https://www.harmanwines.com.au/wp-content/uploads/2026/07/cropped-QTA-2025-Silver.-Tourism-Wineries-1_small.jpeg",
    "https://www.harmanwines.com.au/wp-content/uploads/2023/09/cropped-cropped-cropped-GBA-2023-Award.png",
]

manifest = {}
for url in URLS:
    name = Path(unquote(urlparse(url).path)).name
    # simplify filenames
    safe = re.sub(r"[^a-zA-Z0-9._-]+", "-", name)
    dest = OUT / safe
    print(f"GET {safe} ...", end=" ")
    try:
        req = urllib.request.Request(url, headers=HEADERS)
        with urllib.request.urlopen(req, timeout=90) as r:
            data = r.read()
        dest.write_bytes(data)
        print(f"OK {len(data)} bytes")
        key = safe.rsplit(".", 1)[0]
        manifest[key] = f"/images/harman/{safe}"
    except Exception as e:
        print(f"FAIL {e}")

(OUT / "manifest.json").write_text(json.dumps(manifest, indent=2), encoding="utf-8")
print(f"\nDone. {len(manifest)} files -> {OUT}")
