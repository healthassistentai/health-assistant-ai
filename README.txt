AMP WEB STORY — README
======================

Story Title : Report Analysis: The Ultimate Guide to Understanding Business
              Reports and Making Better Decisions
Slug        : report-analysis-guide
Mode        : Animated Story (real HTML text/icons animate in per element)

Canonical URL   : https://www.healthassistentai.com/2026/06/report-analysis-guide.html
Blog Post URL   : https://www.healthassistentai.com/2026/06/report-analysis-guide.html
GitHub File URL : https://github.com/healthassistentai/healthassistant-ai/blob/main/report-analysis-guide/report-analysis-guide.html
Live Story URL  : https://healthassistentai.github.io/healthassistant-ai/report-analysis-guide/report-analysis-guide.html

Number of Slides : 6
  Page 1 — Understanding Business Reports
  Page 2 — Analyze Reports Smarter with AI
  Page 3 — Discover Hidden Insights in Your Data
  Page 4 — Measure Business Performance
  Page 5 — Protect Your Business Data
  Page 6 — Make Better Decisions With Better Analysis

Each page contains (per your instruction, "1 page per topic"):
  heading -> statistic -> Symptoms (4 pts) -> Causes (4 pts) ->
  Prevention Tips (4 pts) -> CTA button, all animating in sequence
  (fade-in / fly-in-bottom, chained with animate-in-after).

FILES IN THIS FOLDER (upload the whole folder as one unit — do not
rename anything, do not overwrite other stories):
  report-analysis-guide.html   — the AMP story
  README.txt                   — this file
  poster.jpg                   — 720x960 (3:4) poster, from page 1 art
  publisher-logo.jpg           — 300x300 square logo (Health AI icon)
  bg-1.jpg ... bg-6.jpg        — 720x1280 (9:16) background images, one per page

UPLOAD INSTRUCTIONS
  1. Upload this entire `report-analysis-guide/` folder as-is to the repo
     at github.com/healthassistentai/healthassistant-ai (branch: main),
     so the HTML and its images stay side by side in one folder.
  2. Do not create a nested duplicate folder and do not rename any file —
     the HTML references all images as flat filenames in the same folder.
  3. Once live, the story will be reachable at the Live Story URL above.

VALIDATION
  No live AMP validator available here — I did a structural check only
  (unique page IDs, all animate-in-after references resolve to a real
  element on the same page, all referenced image files exist in the
  folder, no external CSS/JS, no onclick). Please verify at
  https://validator.ampproject.org before publishing.

NOTES / WARNINGS
  - Your 6 background images arrived as one combined collage
    (ppt.png) with the "HEALTH AI" logo baked into the top of each
    panel. I split it into 6 panels, cropped off the baked-in logo
    strip, and cover-fit each to 720x1280 so the backgrounds are
    text-free per the Animated Mode rule (the logo now appears only
    as the separate HTML logo element, not burned into the art).
  - Your logo file (HEALTHAI_30880_.webp) is a wide horizontal
    lockup (icon + wordmark), not square. I cropped just the icon
    mark and placed it on a white square canvas at 300x300 so it
    meets the AMP square publisher-logo requirement. If you'd
    rather use the full wordmark or a different crop, send an
    updated logo file and I'll swap it in.
  - No separate topic-specific icons were provided, so bullet
    markers use simple generic dots (inline CSS, not baked into
    the images) rather than invented brand icons.
  - All 6 CTAs link to the same Blog Post URL, since only one
    blog URL was provided for this post.
