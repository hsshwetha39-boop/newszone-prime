#!/usr/bin/env python3
"""
NewsZone Prime site builder.

Run from anywhere:   python tools/build_site.py
Reads:   tools/articles.json   (your articles - add new ones here)
Writes:  index.html, articles/*.html, articles-index.js, sitemap.xml, robots.txt
         (about/contact/privacy/disclaimer/404/news.html are only created if missing,
          so your manual edits to them are never overwritten)
"""
import json, re, html, os, sys
from urllib.parse import quote

# ====================== SETTINGS ======================
SITE = "https://hsshwetha39-boop.github.io/newszone-prime"   # <- change when you buy a domain
SITE_NAME = "NewsZone Prime"
AUTHOR = "Shwetha"
EMAIL = "hsshwetha13@gmail.com"
GA_ID = "G-SDHM4EKKVE"
PAGE_SIZE = 12
LAST_UPDATED = "November 8, 2026"
# ======================================================

HERE = os.path.dirname(os.path.abspath(__file__))
ROOT = os.path.dirname(HERE)
CATS = {"trending": "Trending", "film": "Film", "entertainment": "Entertainment",
        "sports": "Sports", "politics": "Politics", "viral": "Viral", "india": "India",
        "karnataka": "Karnataka"}
NAV = [("index.html", "Home"), ("about.html", "About"), ("contact.html", "Contact"),
       ("privacy.html", "Privacy Policy"), ("disclaimer.html", "Disclaimer")]

e = lambda s: html.escape(s, quote=True)
def fenc(name): return quote(name, safe="/")
def plain(s): return re.sub(r"\s+", " ", re.sub(r"<[^>]+>", " ", s)).strip()
def short(s, n):
    s = plain(s)
    if len(s) <= n: return s
    return s[:n].rsplit(" ", 1)[0].rstrip(" ,;:-") + "…"
def pretty_date(iso):
    y, m, d = map(int, iso.split("-"))
    names = "January February March April May June July August September October November December".split()
    return f"{names[m-1]} {d}, {y}"
def ld(obj): return json.dumps(obj, ensure_ascii=False).replace("</", "<\\/")
def write(path, text, only_if_missing=False):
    full = os.path.join(ROOT, path)
    if only_if_missing and os.path.exists(full): return False
    os.makedirs(os.path.dirname(full), exist_ok=True)
    with open(full, "w", encoding="utf-8", newline="\n") as f: f.write(text)
    return True

GA = f"""<script async src="https://www.googletagmanager.com/gtag/js?id={GA_ID}"></script>
<script>
window.dataLayer=window.dataLayer||[];function gtag(){{dataLayer.push(arguments);}}
gtag('js',new Date());gtag('config','{GA_ID}');
</script>"""

def head(title, desc, canonical, root="", robots="index,follow", og_type="website",
         og_image=None, extra=""):
    img = og_image or f"{SITE}/logo.png"
    return f"""<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>{e(title)}</title>
<meta name="description" content="{e(desc)}">
<meta name="robots" content="{robots}">
<link rel="icon" type="image/png" href="{root}logo.png">
<link rel="canonical" href="{canonical}">
<meta property="og:site_name" content="{SITE_NAME}">
<meta property="og:type" content="{og_type}">
<meta property="og:title" content="{e(title)}">
<meta property="og:description" content="{e(desc)}">
<meta property="og:url" content="{canonical}">
<meta property="og:image" content="{img}">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="{e(title)}">
<meta name="twitter:description" content="{e(desc)}">
<meta name="twitter:image" content="{img}">
<meta name="theme-color" content="#111111">
{GA}
<link rel="stylesheet" href="{root}style.css">
{extra}
</head>"""

def navbar(root=""):
    links = "\n".join(f'    <a href="{root}{h}">{t}</a>' for h, t in NAV)
    return f"""<nav class="navbar">
  <h2 class="logo"><a class="logo-link" href="{root}index.html">
    <img src="{root}logo.png" alt="{SITE_NAME} logo" width="33" height="33">
    <span>NZ PRIME</span></a></h2>
  <div class="search-box">
    <input type="text" id="searchInput" placeholder="Search News..." aria-label="Search news">
    <span id="clearBtn" role="button" aria-label="Clear search">❌</span>
  </div>
  <div class="nav-right">
    <div class="nav-links" id="navLinks">
{links}
    </div>
    <button id="darkBtn" onclick="toggleDarkMode()" aria-label="Toggle dark mode">🌙</button>
    <button class="menu-btn" onclick="toggleMenu()" aria-label="Open menu">☰</button>
  </div>
</nav>"""

def footer(root=""):
    links = "\n".join(f'      <a href="{root}{h}">{t}</a>' for h, t in NAV)
    return f"""<footer>
  <div class="footer-content">
    <h3>📰 NEWSZONE PRIME</h3>
    <p>Your daily source of trending news, entertainment, and updates.</p>
    <div class="footer-links">
{links}
    </div>
    <p>Contact: <a href="mailto:{EMAIL}">{EMAIL}</a></p>
    <p class="copyright">© 2026 {SITE_NAME}. All rights reserved.</p>
  </div>
</footer>"""

def card(a, root="", eager=False):
    img = root + fenc(a["image"])
    load = 'loading="eager" fetchpriority="high"' if eager else 'loading="lazy"'
    return (f'<a class="card-link" href="{root}articles/{a["slug"]}.html" data-title="{e(a["title"])}">'
            f'<div class="news-card"><img src="{img}" alt="{e(a["title"])}" width="400" height="300" {load}>'
            f'<h3>{e(a["title"])}</h3><p>{e(a["description"])}</p>'
            f'<span class="read-btn">Read More</span></div></a>')

def body_html(content, root):
    out = []
    for p in re.split(r"\n\s*\n", content.strip()):
        p = p.strip()
        if not p: continue
        if p.startswith("## "):
            out.append("<h2>" + re.sub(r"&(?!#?\w+;)", "&amp;", p[3:].strip()) + "</h2>")
            continue
        m = re.fullmatch(r'<img src="([^"]+)" alt="([^"]*)">', p)
        if m:
            out.append(f'<figure class="article-figure"><img src="{root}{fenc(m.group(1))}" '
                       f'alt="{e(m.group(2))}" loading="lazy"></figure>')
        else:
            out.append("<p>" + re.sub(r"&(?!#?\w+;)", "&amp;", p) + "</p>")
    return "\n".join(out)

# ---------------------------------------------------------------- data
articles = json.load(open(os.path.join(HERE, "articles.json"), encoding="utf-8"))
articles.sort(key=lambda a: a["date"], reverse=True)
slugs = [a["slug"] for a in articles]
assert len(slugs) == len(set(slugs)), "Duplicate slugs in articles.json"
for a in articles:
    assert re.fullmatch(r"[a-z0-9-]+", a["slug"]), "Bad slug: " + a["slug"]
    assert a["category"] in CATS, f'Unknown category {a["category"]!r} in {a["slug"]}'

# remove old article pages that no longer exist in articles.json
_adir = os.path.join(ROOT, "articles")
if os.path.isdir(_adir):
    for _f in os.listdir(_adir):
        if _f.endswith(".html") and _f[:-5] not in set(slugs): os.remove(os.path.join(_adir, _f))

# ---------------------------------------------------------------- article pages
by_cat = {}
for a in articles: by_cat.setdefault(a["category"], []).append(a)

for a in articles:
    root = "../"
    url = f"{SITE}/articles/{a['slug']}.html"
    words = len(plain(a["content"]).split())
    mins = max(1, round(words / 200))
    desc = short(a["description"], 157)
    img_abs = f"{SITE}/{fenc(a['image'])}"
    schema = {
        "@context": "https://schema.org", "@type": "NewsArticle",
        "headline": short(a["title"], 110), "description": desc, "image": [img_abs],
        "datePublished": a["date"], "dateModified": a["date"],
        "mainEntityOfPage": {"@type": "WebPage", "@id": url},
        "articleSection": CATS[a["category"]],
        "author": {"@type": "Person", "name": AUTHOR},
        "publisher": {"@type": "Organization", "name": SITE_NAME,
                      "logo": {"@type": "ImageObject", "url": f"{SITE}/logo.png"}}}
    crumbs = {"@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [
        {"@type": "ListItem", "position": 1, "name": "Home", "item": f"{SITE}/"},
        {"@type": "ListItem", "position": 2, "name": CATS[a["category"]], "item": f"{SITE}/index.html?cat={a['category']}"},
        {"@type": "ListItem", "position": 3, "name": short(a["title"], 80), "item": url}]}
    extra = (f'<meta property="article:published_time" content="{a["date"]}">\n'
             f'<meta property="article:section" content="{CATS[a["category"]]}">\n'
             f'<script type="application/ld+json">{ld(schema)}</script>\n'
             f'<script type="application/ld+json">{ld(crumbs)}</script>')
    related = [r for r in by_cat[a["category"]] if r["slug"] != a["slug"]][:4]
    if len(related) < 4:
        related += [r for r in articles if r["slug"] != a["slug"] and r not in related][:4 - len(related)]
    rel_html = "\n".join(f'<a href="{r["slug"]}.html">{e(r["title"])}</a>' for r in related)
    page = head(f'{short(a["title"], 90)} | {SITE_NAME}', desc, url, root, og_type="article",
                og_image=img_abs, extra=extra) + f"""
<body data-root="{root}">
{navbar(root)}
<div class="article-top"><a class="back-link" href="{root}index.html">← Back to Home</a></div>
<article class="news-details">
  <p class="breadcrumb"><a href="{root}index.html">Home</a> › <a href="{root}index.html?cat={a['category']}">{CATS[a['category']]}</a></p>
  <h1>{e(a["title"])}</h1>
  <p class="news-meta">By {AUTHOR} • <time datetime="{a['date']}">{pretty_date(a['date'])}</time> • {mins} min read</p>
  <img class="article-hero" src="{root}{fenc(a['image'])}" alt="{e(a['title'])}" loading="eager" fetchpriority="high">
  <div class="article-body">
{body_html(a["content"], root)}
  </div>
  <p class="article-note">Read our <a href="{root}disclaimer.html">Disclaimer &amp; Editorial Policy</a>. Spotted a mistake? <a href="mailto:{EMAIL}?subject=Correction%3A%20{quote(short(a['title'], 60))}">Tell us</a>.</p>
  <h3>More Stories</h3>
  <div id="related-news">
{rel_html}
  </div>
</article>
{footer(root)}
<script src="{root}script.js"></script>
</body>
</html>
"""
    write(f"articles/{a['slug']}.html", page)

# ---------------------------------------------------------------- homepage
index_data = [{"title": a["title"], "description": a["description"], "slug": a["slug"],
               "image": fenc(a["image"]), "category": a["category"],
               "date": pretty_date(a["date"])} for a in articles]
write("articles-index.js",
      f'// Auto-generated by tools/build_site.py - do not edit by hand\n'
      f'const PAGE_SIZE = {PAGE_SIZE};\nconst manualNews = {json.dumps(index_data, ensure_ascii=False, indent=1)};\n')

HAS = bool(articles)
ticker = " &nbsp;•&nbsp; ".join(f'<a href="articles/{a["slug"]}.html">{e(short(a["title"], 75))}</a>' for a in articles[:3])
cat_btns = '<span onclick="filterNews(\'all\', event)" class="category-btn active">📰 All</span>\n' + "\n".join(
    f'  <span onclick="filterNews(\'{k}\', event)" class="category-btn">{ic} {CATS[k]}</span>'
    for k, ic in [("trending", "📈"), ("film", "🎬"), ("entertainment", "🎭"), ("sports", "🏏"),
                  ("politics", "🏛️"), ("viral", "🔥"), ("india", "🇮🇳"), ("karnataka", "📍")])
site_ld = [{"@context": "https://schema.org", "@type": "NewsMediaOrganization", "name": SITE_NAME,
            "url": f"{SITE}/", "logo": f"{SITE}/logo.png"},
           {"@context": "https://schema.org", "@type": "WebSite", "name": SITE_NAME, "url": f"{SITE}/",
            "potentialAction": {"@type": "SearchAction", "target": f"{SITE}/index.html?q={{search_term_string}}",
                                "query-input": "required name=search_term_string"}}]
home = head(f"{SITE_NAME} | Latest India News, Politics, Sports & Entertainment",
            "Read the latest India news, politics, film, entertainment, sports and viral stories from NewsZone Prime.",
            f"{SITE}/", extra="\n".join(f'<script type="application/ld+json">{ld(x)}</script>' for x in site_ld)) + f"""
<body data-root="">
{navbar()}
<div class="banner">
  <h1>NEWSZONE PRIME</h1>
  <p>Latest updates from Film, Politics, Sports &amp; Viral</p>
</div>
{('<div class="breaking-news"><span class="scroll-text">🔴 <strong>Latest:</strong> ' + ticker + '</span></div>') if HAS else ''}
{('<div class="categories">' + cat_btns + '</div>') if HAS else ''}
<div class="news-container" id="newsContainer">
{chr(10).join(card(a, eager=(i == 0)) for i, a in enumerate(articles[:PAGE_SIZE])) if HAS else '<div class="empty-home"><h2>Stories are on the way</h2><p>No articles have been published yet. In the meantime, learn <a href="about.html">about NewsZone Prime</a> or <a href="contact.html">send us a story tip</a>.</p></div>'}
</div>
<button id="loadMoreBtn" class="load-more" onclick="loadMore()">Load more stories</button>
{footer()}
<script src="articles-index.js"></script>
<script src="script.js"></script>
</body>
</html>
"""
write("index.html", home)

# ---------------------------------------------------------------- sitemap + robots
urls = [(f"{SITE}/", articles[0]["date"] if articles else None)] + [(f"{SITE}/{h}", None) for h, _ in NAV[1:]] + \
       [(f"{SITE}/articles/{a['slug']}.html", a["date"]) for a in articles]
sm = ['<?xml version="1.0" encoding="UTF-8"?>', '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">']
for u, d in urls:
    sm.append(f"  <url><loc>{u}</loc>" + (f"<lastmod>{d}</lastmod>" if d else "") + "</url>")
sm.append("</urlset>")
write("sitemap.xml", "\n".join(sm) + "\n")
write("robots.txt", f"User-agent: *\nAllow: /\n\nSitemap: {SITE}/sitemap.xml\n")

# ---------------------------------------------------------------- static pages (created only if missing)
def simple_page(file, title, desc, inner, wrapper="policy-container", script_extra=""):
    return head(title, desc, f"{SITE}/{file}") + f"""
<body data-root="">
{navbar()}
<main class="{wrapper}">
{inner}
</main>
{footer()}
{script_extra}<script src="script.js"></script>
</body>
</html>
"""

about = f"""<h1>About {SITE_NAME}</h1>
<p>{SITE_NAME} is an independent news blog run by {AUTHOR}. We cover film, entertainment, politics, sports, and the stories that are trending across India, in simple language that is quick to read.</p>
<h2>What we cover</h2>
<p>Our main sections are Film, Entertainment, Politics, Sports, Trending and Viral stories, plus important national news from India.</p>
<h2>How we work</h2>
<p>Our stories are written by us in our own words, based on publicly available reports and official statements. When something is not officially confirmed, we say so using words such as "reportedly" or "according to reports", and we try to update stories when new facts come in.</p>
<h2>Corrections</h2>
<p>If you see a mistake or want to report an issue with any story, please write to us at <a href="mailto:{EMAIL}">{EMAIL}</a>. We review every message and fix verified errors quickly.</p>
<h2>Read more</h2>
<p>See our <a href="disclaimer.html">Disclaimer &amp; Editorial Policy</a> and <a href="privacy.html">Privacy Policy</a>, or <a href="contact.html">contact us</a> any time.</p>"""
write("about.html", simple_page("about.html", f"About {SITE_NAME} | Film, Politics, Sports News",
      "Learn about NewsZone Prime, an independent India news blog covering film, entertainment, politics, sports and trending stories.", about), True)

contact_inner = f"""<h1>Contact Us</h1>
<p>We would love to hear from you. Send us feedback, story tips, or corrections.</p>
<p class="form-success" id="formSuccess" style="display:none">✅ Thank you! Your message has been sent.</p>
<div class="contact-info"><p><b>Email:</b> <a href="mailto:{EMAIL}">{EMAIL}</a></p></div>
<form class="contact-form" action="https://api.web3forms.com/submit" method="POST">
  <input type="hidden" name="access_key" value="34c6211b-c2ca-44ad-b55a-68f7f7a8b9f4">
  <input type="hidden" name="subject" value="New message from NewsZone Prime">
  <input type="hidden" name="from_name" value="NewsZone Prime Contact Form">
  <input type="hidden" name="redirect" value="{SITE}/contact.html?sent=1">
  <input type="checkbox" name="botcheck" style="display:none" tabindex="-1" autocomplete="off">
  <input type="text" name="name" placeholder="Your Name" required>
  <input type="email" name="email" placeholder="Your Email" required>
  <textarea name="message" rows="5" placeholder="Your Message" required></textarea>
  <br><button type="submit">Send Message</button>
</form>"""
write("contact.html", simple_page("contact.html", f"Contact {SITE_NAME} | Feedback & Story Tips",
      "Contact NewsZone Prime for feedback, story tips, corrections or support.", contact_inner, "contact-section"), True)

privacy_inner = f"""<h1>Privacy Policy</h1>
<p>At {SITE_NAME}, we respect your privacy. This page explains what information may be collected when you visit our website and how it is used.</p>
<h2>Information we collect</h2>
<p>We do not ask you to create an account. We only receive personal information that you choose to send us, for example your name, email address and message when you use our contact form or email us. We use it only to reply to you. Messages sent through our contact form are processed by Web3Forms, a form-handling service that delivers them to our email inbox.</p>
<h2>Google Analytics</h2>
<p>We use Google Analytics to understand how visitors use the site (for example, which stories are popular). It collects usage data such as pages visited, device and browser type, and approximate location, using cookies. You can opt out with the <a href="https://tools.google.com/dlpage/gaoptout" rel="noopener">Google Analytics opt-out browser add-on</a>.</p>
<h2>Cookies</h2>
<p>Cookies are small files stored on your device. We and our partners use them for analytics, to remember your dark-mode preference, and, where enabled, to show advertising. You can block or delete cookies in your browser settings, though some features may not work as well.</p>
<h2>Advertising</h2>
<p>We may show ads served by Google AdSense and other third-party vendors. These vendors, including Google, use cookies to serve ads based on your previous visits to this and other websites. Google's use of advertising cookies enables it and its partners to serve ads to you based on your visit to our site and/or other sites on the Internet. You can opt out of personalised advertising at <a href="https://adssettings.google.com" rel="noopener">Google Ads Settings</a> or <a href="https://www.aboutads.info" rel="noopener">aboutads.info</a>. See <a href="https://policies.google.com/technologies/partner-sites" rel="noopener">how Google uses information from sites that use its services</a>.</p>
<h2>External links</h2>
<p>Our stories may link to other websites. We are not responsible for the content or privacy practices of those sites.</p>
<h2>Children</h2>
<p>This website is not directed at children under 13, and we do not knowingly collect personal information from them.</p>
<h2>Changes to this policy</h2>
<p>We may update this policy from time to time. The date below shows when it was last changed.</p>
<h2>Contact</h2>
<p>Questions about this policy? Email us at <a href="mailto:{EMAIL}">{EMAIL}</a>.</p>
<p><i>Last updated: {LAST_UPDATED}</i></p>"""
write("privacy.html", simple_page("privacy.html", f"Privacy Policy | {SITE_NAME}",
      "Privacy Policy of NewsZone Prime: analytics, cookies, advertising and how your information is used.", privacy_inner), True)

disc_inner = f"""<h1>Disclaimer &amp; Editorial Policy</h1>
<h2>Accuracy of information</h2>
<p>{SITE_NAME} publishes news and entertainment stories based on publicly available reports. We try to be accurate, but news changes quickly and we cannot guarantee that every detail is complete or up to date. Please verify important information with official sources before acting on it.</p>
<h2>Unconfirmed reports</h2>
<p>Where a story is based on reports, rumours or social-media posts that have not been officially confirmed, we describe them as such. Nothing on this site should be taken as a statement of fact about any person unless it is clearly attributed and confirmed.</p>
<h2>Opinions</h2>
<p>Any opinions or analysis are those of the author and do not represent any organisation. Content on this site is for general information and entertainment and is not legal, financial, medical or professional advice.</p>
<h2>Corrections</h2>
<p>If you believe a story contains an error, email <a href="mailto:{EMAIL}">{EMAIL}</a> with the page link and what should be corrected. Verified errors are fixed promptly.</p>
<h2>Copyright and image removal</h2>
<p>We respect the rights of creators. If you own a photograph or text on this site and want it credited or removed, email <a href="mailto:{EMAIL}">{EMAIL}</a> and we will act on it promptly.</p>
<h2>External links and advertising</h2>
<p>We are not responsible for the content of external websites. Advertisements, when shown, are provided by third parties and do not mean we endorse the advertised product. See our <a href="privacy.html">Privacy Policy</a> for details.</p>
<h2>Terms of use</h2>
<p>By using this website you agree to these terms. You may share links to our stories, but you may not copy our content in bulk without permission.</p>
<p><i>Last updated: {LAST_UPDATED}</i></p>"""
write("disclaimer.html", simple_page("disclaimer.html", f"Disclaimer & Editorial Policy | {SITE_NAME}",
      "Disclaimer, editorial policy and terms of use for NewsZone Prime.", disc_inner), True)

notfound = head(f"Page Not Found | {SITE_NAME}", "This page could not be found on NewsZone Prime.",
                f"{SITE}/404.html", robots="noindex,follow").replace('href="style.css"', f'href="{SITE}/style.css"').replace('href="logo.png"', f'href="{SITE}/logo.png"') + f"""
<body>
<div class="policy-container" style="text-align:center;max-width:700px">
<div style="font-size:90px;font-weight:bold;color:#111">404</div>
<h2>Oops! Page not found.</h2>
<p>The page you are looking for does not exist or has moved.</p>
<p style="margin-top:20px"><a href="{SITE}/index.html" style="display:inline-block;padding:12px 28px;background:#111;color:#fff;border-radius:10px;font-weight:bold">Back to Home</a></p>
</div>
</body>
</html>
"""
write("404.html", notfound, True)

# old news.html?title=... links redirect to the new article pages
redirect = """<!DOCTYPE html>
<html lang="en"><head><meta charset="UTF-8"><meta name="robots" content="noindex,follow">
<meta name="viewport" content="width=device-width, initial-scale=1.0"><title>Redirecting…</title>
<script src="articles-index.js"></script>
<script>
var t=(new URLSearchParams(location.search).get("title")||"").trim(),go="index.html";
for(var i=0;i<manualNews.length;i++){if(manualNews[i].title===t){go="articles/"+manualNews[i].slug+".html";break;}}
location.replace(go);
</script>
<noscript><meta http-equiv="refresh" content="0;url=index.html"></noscript>
</head><body><p>Redirecting… <a href="index.html">Go to home page</a></p></body></html>
"""
write("news.html", redirect, True)
print(f"Built {len(articles)} article pages, homepage, sitemap ({len(urls)} URLs).")