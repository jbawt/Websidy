# SEO Next Steps for Websidy

This guide outlines practical next steps to improve search visibility and rankings for the Websidy website (Sylvan Lake & Central Alberta). Work through the sections in order for the biggest impact.

---

## 1. Per-page meta tags and titles

**Current state:** One global `<title>` and `<meta name="description">` in `index.html` — every route shows the same snippet in search results.

**Goal:** Each page should have a unique, compelling title (50–60 chars) and description (150–160 chars) that include relevant keywords and location.

**Next steps:**

- Use **React Helmet** (or similar) so each route sets its own `<title>` and `<meta name="description">`.
- Suggested titles/descriptions:

  | Page       | Example title                                                                 | Example description |
  |-----------|---------------------------------------------------------------------------------|----------------------|
  | Home      | Websidy \| Web Design & Social Media in Sylvan Lake & Central Alberta           | Professional web design and social media for Central Alberta businesses. Fast, modern sites and training in Sylvan Lake. |
  | Services  | Website Design & Social Media Services \| Websidy Central Alberta              | Custom websites, SEO, and social media setup and training for Sylvan Lake and Central Alberta. |
  | About     | About Websidy \| Web Design & Digital Marketing Central Alberta                | Meet the Sylvan Lake team behind fast, reliable websites and social media for Central Alberta businesses. |
  | Pricing   | Transparent Pricing \| Website & Social Media \| Websidy                       | Clear pricing for 3-page websites, hosting, and social media setup. Serving Sylvan Lake and Central Alberta. |
  | Contact   | Get in Touch \| Websidy Web Design Sylvan Lake                                 | Contact Websidy for a quote on web design, development, or social media services in Central Alberta. |
  | Portfolio | Web Design Portfolio \| Central Alberta Projects \| Websidy                    | See websites we’ve built for Central Alberta businesses. Modern, responsive, and built for results. |

- Keep the main brand term “Websidy” and location (“Sylvan Lake”, “Central Alberta”) in titles/descriptions where it fits naturally.

---

## 2. Open Graph and Twitter Card meta tags

**Current state:** No Open Graph (og) or Twitter Card tags. Links shared on social media fall back to default or minimal previews.

**Goal:** When someone shares your site (e.g. Facebook, LinkedIn, X/Twitter), show a clear title, description, image, and URL.

**Next steps:**

- In the same place you set `<title>` and description (e.g. React Helmet), add for each page (or at least Home and key pages):

  - `og:title`, `og:description`, `og:image`, `og:url`, `og:type` (e.g. `website`).
  - `twitter:card` (e.g. `summary_large_image`), `twitter:title`, `twitter:description`, `twitter:image`.

- Use an absolute URL for `og:image` (e.g. `https://websidy.ca/og-image.png`). Recommended size: **1200×630 px**.
- Create one shared image (logo + tagline or hero visual) if you don’t have page-specific images yet.

---

## 3. Canonical URL and base URL

**Current state:** The site is live at `https://websidy.ca` on Netlify. Duplicate “versions” of the site (with/without trailing slash or old URLs) can still dilute SEO if they remain accessible.

**Goal:** One canonical URL per page so search engines know which URL to index and rank.

**Next steps:**

- In `<head>`, add a canonical link for each page, e.g.  
  `<link rel="canonical" href="https://websidy.ca/" />` for the home page, and equivalent full URLs for `/services`, `/about`, `/pricing`, `/contact`, `/portfolio`.
- Ensure internal links and sitemap use the same base: `https://websidy.ca` (no trailing slash, or consistent trailing slash — pick one and stick to it).
- React Router should use the root path (no `basename`) for Netlify hosting; make sure canonical and sitemap match `https://websidy.ca`.

---

## 4. Sitemap and robots.txt

**Current state:** No `sitemap.xml` or `robots.txt` in the repo. Crawlers may not discover all pages or get clear crawl instructions.

**Goal:** Help search engines find and index all important pages.

**Next steps:**

- **Sitemap**
  - Add a `sitemap.xml` (or generate it at build time) that lists all public URLs, for example:
    - `https://websidy.ca/`
    - `https://websidy.ca/services`
    - `https://websidy.ca/about`
    - `https://websidy.ca/pricing`
    - `https://websidy.ca/contact`
    - `https://websidy.ca/portfolio`
  - Place `sitemap.xml` in the build output (e.g. `public/sitemap.xml` so it’s copied to `dist/`) and use the same base URL as your canonical.
  - Optional: add `<lastmod>` if you update the sitemap when content changes.

- **robots.txt**
  - Add a `robots.txt` in the same place (e.g. `public/robots.txt`) with at least:
    - `User-agent: *`
    - `Allow: /`
    - `Sitemap: https://websidy.ca/sitemap.xml`
  - Deploy it so it’s available at `https://websidy.ca/robots.txt`.

---

## 5. Structured data (Schema.org)

**Current state:** No structured data. Search engines rely only on visible content to understand the business.

**Goal:** Give search engines explicit signals about your business (LocalBusiness, Service, etc.) to improve rich results and local SEO.

**Next steps:**

- Add a **JSON-LD** block in `<head>` (or via React Helmet) for the home page (and optionally key pages):
  - **LocalBusiness** (or **ProfessionalService**): business name, description, area served (e.g. “Sylvan Lake, AB” / “Central Alberta”), URL, and optionally logo, sameAs (social URLs).
  - **Service** for main offerings: e.g. “Website design”, “Social media setup and training”, with short descriptions.
- Use Google’s [Rich Results Test](https://search.google.com/test/rich-results) to validate the markup.
- If you have a physical address or service area, include it in the schema; that helps local pack and maps.

---

## 6. Content and on-page SEO

**Current state:** Good semantic structure (e.g. `<main>`, headings). One H1 per page is ideal; keep that pattern.

**Next steps:**

- **Headings**
  - Ensure each page has exactly one `<h1>` that clearly states the page topic (e.g. “Web Design & Digital Services for Central Alberta” on Services).
  - Use `<h2>` for main sections and `<h3>` for subsections; avoid skipping levels (e.g. no `<h1>` then `<h3>`).

- **Images**
  - Add descriptive `alt` text to every meaningful image (logos, heroes, portfolio thumbnails). Example: `alt="Websidy logo"` or `alt="Gorillaz website project - responsive design for Central Alberta"`.
  - Keep filenames descriptive (e.g. `websidy-logo.png`, `pricing-hero.png`).

- **Internal links**
  - Link from the home page and main nav to Services, Pricing, Contact, and Portfolio. You already do this; keep those links descriptive (e.g. “View website pricing” instead of only “Pricing” where it fits).

- **Keywords**
  - Naturally use “Sylvan Lake”, “Central Alberta”, “web design”, “website development”, “social media” in titles, headings, and first paragraphs. Avoid stuffing; prioritize readability.

---

## 7. Performance and Core Web Vitals

**Current state:** Vite and static build are already favourable. You’ve improved accessibility (e.g. contrast, main landmark), which can indirectly help UX signals.

**Next steps:**

- **Images**
  - Use modern formats (e.g. WebP) where possible and appropriate sizes (e.g. responsive `srcset` or different sizes per breakpoint).
  - Lazy-load below-the-fold images (`loading="lazy"` or via your image component).

- **Fonts and assets**
  - If you add custom fonts, prefer `font-display: swap` and self-host or use a fast provider to avoid render-blocking.

- **Monitoring**
  - Run [PageSpeed Insights](https://pagespeed.web.dev/) (and optionally [web.dev](https://web.dev/)) after each major change. Aim for green scores on Performance and Accessibility and address any remaining recommendations.

---

## 8. Google Search Console and Analytics

**Goal:** See how the site is discovered, indexed, and used so you can fix issues and improve content.

**Next steps:**

- **Google Search Console**
  - Add the property for `https://websidy.ca`.
  - Submit the sitemap URL (`https://websidy.ca/sitemap.xml`).
  - Use “URL Inspection” to request indexing for the most important pages after you add canonical, meta, and sitemap.
  - Check “Coverage” and “Enhancements” for errors (e.g. missing meta, mobile issues).

- **Google Analytics (GA4)**
  - Add a GA4 property and install the tag (e.g. via script in `index.html` or a tag manager). This will show traffic, top pages, and (optionally) conversions so you can see which SEO changes drive visits.

---

## 9. Local SEO (Sylvan Lake & Central Alberta)

**Goal:** Rank better for “web design Sylvan Lake”, “website designer Central Alberta”, etc.

**Next steps:**

- Use “Sylvan Lake” and “Central Alberta” in:
  - Page titles and meta descriptions (see section 1).
  - Main headings and intro text on Home, Services, About, and Contact.
- If you have a **Google Business Profile** (GMB), ensure:
  - Name, address, service area, and category are correct.
  - Website URL points to `https://websidy.ca`.
  - Short description and services mention web design and social media.
- In Schema.org (section 5), set the area served to match your real service area (e.g. Sylvan Lake, Red Deer, Lacombe, etc.).

---

## 10. Production domain and HTTPS

**Current state:** The site is live at `https://websidy.ca` on Netlify with HTTPS.

**Next steps:**

- Use `https://websidy.ca` consistently in canonical URLs, sitemap, robots.txt, Open Graph tags, Search Console, and Google Business Profile.
- If any old URLs (e.g. a previous GitHub Pages path) are still reachable, add 301 redirects to the matching page on `https://websidy.ca` so link equity and bookmarks land on the live site.
- After major SEO changes, re-submit the sitemap in Search Console and spot-check key pages with URL Inspection.

---

## 11. External SEO tasks (no code required)

These are actions you can take as the business owner outside the website. They support local visibility, trust, and backlinks — often as important as on-site SEO for a service business in Central Alberta.

### Google Business Profile

- [ ] Confirm business name, category, service area, hours, phone, and website (`https://websidy.ca`) are accurate and match your site.
- [ ] Write a keyword-rich business description (web design, digital presence, Sylvan Lake, Central Alberta) — similar tone to your GBP description, not copy-pasted spam.
- [ ] Add your full list of services (website design, hosting, digital presence, etc.).
- [ ] Upload high-quality photos: logo, workspace, project screenshots, team (if applicable), and before/after examples.
- [ ] Post updates every 2–4 weeks (new portfolio piece, pricing note, tip for local businesses, seasonal offer).
- [ ] Enable messaging and respond promptly if you use it.
- [ ] Add products/services with short descriptions where GBP allows.
- [ ] Fill out the Q&A section yourself with common questions (“Do you build custom websites?”, “Do you serve Red Deer/Lacombe?”, “What does a 3-page site include?”).

### Reviews and reputation

- [ ] Ask satisfied clients for Google reviews — send a direct link after project completion.
- [ ] Reply to every review (thank positive ones; address concerns professionally on negative ones).
- [ ] Request short testimonials you can later use on the site or social (with permission).
- [ ] Keep review language natural; don’t offer incentives in exchange for reviews (against Google policy).

### Citations and local listings

**Goal:** Consistent business name, address/service area, phone, and website everywhere you appear online (NAP consistency).

- [ ] [Bing Places for Business](https://www.bingplaces.com/)
- [ ] [Apple Business Connect](https://businessconnect.apple.com/) (shows in Apple Maps/Siri)
- [ ] Facebook Business Page — link to `https://websidy.ca`, match hours/location
- [ ] Instagram bio — link to site, location tag Sylvan Lake where relevant
- [ ] LinkedIn Company Page — services, location, link to website
- [ ] Local directories: Sylvan Lake & District Chamber of Commerce, Central Alberta business listings, industry directories
- [ ] Alberta / Canada general listings only if reputable (avoid spammy “submit to 500 directories” services)

Use the **exact same** business name (Websidy), phone, service area wording, and URL on every profile.

### Backlinks and partnerships

- [ ] Ask portfolio clients to credit “Website by Websidy” with a link when they’re happy to do so.
- [ ] Partner with complementary local businesses (photographers, printers, accountants, marketing consultants) for referrals — ask for a mention on their “recommended vendors” page if they have one.
- [ ] Sponsor or participate in local events (Chamber events, community fundraisers) and get listed on event/partner pages.
- [ ] Write a short guest piece or tip for a local business blog or newsletter (e.g. “What every Sylvan Lake business needs on their website”).
- [ ] Join relevant Facebook or LinkedIn groups for Central Alberta small business owners — be helpful, not spammy; include your site in your profile, not in every comment.

### Social proof and content (off-site)

- [ ] Share new portfolio launches, blog-style tips, or client wins on Facebook and Instagram with a link back to `https://websidy.ca` or the portfolio page.
- [ ] When you finish a site, post a case study snippet: problem → solution → result (with client approval).
- [ ] Use consistent branding and the same logo/colors as the website so the brand is recognizable everywhere.

### Monitoring (free tools)

- [ ] **Google Search Console** — check Performance monthly: queries, impressions, clicks, average position for “web design sylvan lake” and similar terms.
- [ ] **Google Alerts** — set alerts for `Websidy`, `websidy.ca`, and optionally competitor names in your area.
- [ ] **Google Business Profile Insights** — track how people find your listing (Search vs Maps) and what actions they take (website clicks, calls).
- [ ] Search `site:websidy.ca` in Google occasionally to see which pages are indexed.
- [ ] Search your business name in incognito — confirm GBP, website, and social profiles look correct in the first page of results.

### Offline → online

- [ ] Put `https://websidy.ca` on business cards, email signature, invoices, and proposals.
- [ ] Mention the site when networking locally; QR codes on print materials can link directly to `/contact`.
- [ ] Ensure anyone referring you uses the correct URL (not an old GitHub Pages or staging link).

### What to avoid

- Don’t buy backlinks or use automated directory submission bots.
- Don’t create duplicate Google Business Profiles.
- Don’t use a different business name or phone number on random directories — inconsistency hurts local SEO.
- Don’t keyword-stuff your GBP description or review responses.

---

## Quick checklist

- [x] Per-page `<title>` and `<meta name="description">` (e.g. React Helmet).
- [X] Open Graph and Twitter Card meta tags + shared image (1200×630).
- [x] Canonical `<link>` for each page with base URL `https://websidy.ca`.
- [x] `sitemap.xml` and `robots.txt` in `public/` and deployed.
- [x] JSON-LD (LocalBusiness/Service) on home (and key pages).
- [ ] One H1 per page; logical H2/H3; descriptive image `alt` text.
- [ ] Image optimization (formats, sizes, lazy loading).
- [x] Google Search Console property for `https://websidy.ca` + sitemap submitted.
- [ ] Google Analytics (GA4) installed (optional but recommended).
- [ ] Location keywords and (if applicable) Google Business Profile aligned with the site.

### External (no code)

- [ ] Google Business Profile fully filled out (photos, services, posts, Q&A).
- [ ] Request and respond to Google reviews from clients.
- [ ] NAP consistent across Bing Places, Apple Business Connect, Facebook, LinkedIn, and local directories.
- [ ] Portfolio clients and partners linked to `https://websidy.ca` where possible.
- [ ] Monthly check: Search Console Performance + GBP Insights + `site:websidy.ca`.
- [ ] Website URL on email signature, cards, and proposals.

Once these are in place, re-run PageSpeed Insights and Search Console coverage to confirm everything is clean and indexed as expected.
