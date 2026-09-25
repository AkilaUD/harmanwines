import re
import urllib.request
from pathlib import Path
from urllib.parse import urlparse, unquote

UA = {
    "User-Agent": (
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 "
        "(KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36"
    ),
    "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8",
    "Accept-Language": "en-AU,en;q=0.9",
}
OUT = Path("public/images/harman")
OUT.mkdir(parents=True, exist_ok=True)

PAGES = [
    "https://www.harmanwines.com.au/",
    "https://www.harmanwines.com.au/about/",
    "https://www.harmanwines.com.au/our-cellar-door/",
    "https://www.harmanwines.com.au/shop/",
    "https://www.harmanwines.com.au/events/",
    "https://www.harmanwines.com.au/functions/",
    "https://www.harmanwines.com.au/news/",
    "https://www.harmanwines.com.au/menu/",
]


def fetch(url: str) -> str:
    req = urllib.request.Request(url, headers=UA)
    with urllib.request.urlopen(req, timeout=45) as r:
        return r.read().decode("utf-8", "ignore")


def find_images(html: str) -> list[str]:
    patterns = [
        r"https://www\.harmanwines\.com\.au/wp-content/uploads/[^\s\"'\\>]+\.(?:jpe?g|png|webp)",
        r"/wp-content/uploads/[^\s\"'\\>]+\.(?:jpe?g|png|webp)",
    ]
    found: list[str] = []
    for pat in patterns:
        for m in re.findall(pat, html, re.I):
            if m.startswith("/"):
                m = "https://www.harmanwines.com.au" + m
            # strip size suffixes duplicates later
            found.append(m.split("?")[0])
    return found


all_urls: list[str] = []
for page in PAGES:
    try:
        html = fetch(page)
        urls = find_images(html)
        print(f"{page} -> {len(urls)} urls")
        all_urls.extend(urls)
    except Exception as e:
        print(f"FAIL {page}: {e}")

# Prefer full-size (drop -300x200 style variants when original exists)
unique = list(dict.fromkeys(all_urls))
print(f"\nUnique: {len(unique)}")

saved = []
for url in unique:
    name = Path(unquote(urlparse(url).path)).name
    # skip tiny thumbs
    if re.search(r"-\d{2,4}x\d{2,4}\.(jpe?g|png|webp)$", name, re.I):
        continue
    dest = OUT / name
    if dest.exists():
        saved.append(str(dest))
        continue
    try:
        req = urllib.request.Request(url, headers=UA)
        with urllib.request.urlopen(req, timeout=60) as r:
            dest.write_bytes(r.read())
        print("OK", name, dest.stat().st_size)
        saved.append(str(dest))
    except Exception as e:
        print("SKIP", name, e)

print(f"\nSaved {len(saved)} images to {OUT}")
for s in saved[:40]:
    print(s)
