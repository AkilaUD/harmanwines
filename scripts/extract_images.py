import re
import urllib.request

req = urllib.request.Request(
    "https://www.harmanwines.com.au/",
    headers={"User-Agent": "Mozilla/5.0"},
)
html = urllib.request.urlopen(req, timeout=30).read().decode("utf-8", "ignore")
urls = re.findall(
    r"https://www\.harmanwines\.com\.au/wp-content/uploads/[^\s\"'\\>]+\.(?:jpg|jpeg|png|webp)",
    html,
    re.I,
)
for u in list(dict.fromkeys(urls))[:40]:
    print(u)
