AMP Web Story — Package README
================================

Title: Everything You Need to Know About Infectious Diseases: Causes, Symptoms, Common Types, Prevention, and Latest Treatment Methods
Slug: everything-you-need-to-know-about-infectious-diseases
Mode: Animated Story (real HTML text/icons animate in per element)

Canonical URL:
https://www.healthassistentai.com/2026/06/everything-you-need-to-know-about-infectious-diseases.html

Blog Post URL (same as canonical):
https://www.healthassistentai.com/2026/06/everything-you-need-to-know-about-infectious-diseases.html

GitHub File URL (view code only):
https://github.com/healthassistentai/healthassistant-ai/blob/main/everything-you-need-to-know-about-infectious-diseases/everything-you-need-to-know-about-infectious-diseases.html

Live Story URL (real published link once uploaded):
https://healthassistentai.github.io/healthassistant-ai/everything-you-need-to-know-about-infectious-diseases/everything-you-need-to-know-about-infectious-diseases.html

Slide / page count: 6 amp-story-page elements (matches the default arc —
your 6 images map one-to-one onto 6 pages)
Publisher: Goutam Dandapath

PAGE STRUCTURE
----------------
Your copy used different section labels on different pages (not always
"Symptoms/Causes/Prevention"), so each page keeps its own real labels
exactly as you wrote them:

  Page 1 — Bullet Points / Cause / Prevention
  Page 2 — Symptoms / Causes / Prevention
  Page 3 — Types / Causes / Prevention
  Page 4 — Prevention Tips / Causes to Avoid
  Page 5 — Treatment / an "Important:" callout / Prevention
  Page 6 — Key Points / Prevention

Your "•"-separated inline lists (e.g. "Viruses • Bacteria • Fungi •
Parasites") were split into individual animated bullet items — the
words themselves are unchanged, just given one line each so they can
animate in one at a time.

Page 5's "Important: Antibiotics do not treat viral infections." line
wasn't a bullet list in your copy, so it isn't rendered as one — it's a
single highlighted callout box (amber border, "Important:" label) that
fades in between the Treatment list and the Prevention list, in the
same order you wrote it.

Every page: Heading -> Statistic -> [sections in the order above,
staggered fade-in] -> CTA button (fly-in-bottom). Background image
animate-in direction cycles zoom-in / fly-in-left / fly-in-right
across the 6 pages. Opening logo on Page 1, closing logo on Page 6.

TIMING NOTE
--------------
Bullet counts vary per page (8 to 12 items, including the callout).
All pages use a 12-second auto-advance so even the busiest page (Page 3,
12 items) finishes animating before the page turns; viewers can still
tap to advance early at any time.

ABOUT THE BACKGROUND IMAGES
------------------------------
Your 6 background images arrived as one 3-column x 2-row collage, each
cell with the "HEALTH AI" wordmark baked into the top-left corner (the
same pattern as several of your earlier requests). Each cell was split
out and the logo band cropped off before resizing to 720x1280, so the
backgrounds are logo-free as Animated Mode requires — the real logo is
added back as its own animated HTML layer on pages 1 and 6.

Note: a few of your source images (the symptom-icon circles on Page 2,
the protection shield on Pages 4 and 6) contain simple generic health
icons — a thermometer, a throat, a bed, a shield-and-cross — drawn
into the photo/illustration itself. These are treated as part of the
provided artwork, not as text/headings, so they were left as-is; no
extra icons were added on top by this build.

FILES IN THIS FOLDER
-----------------------
everything-you-need-to-know-about-infectious-diseases.html
poster.jpg              (720x960, 3:4, from page 1's photo)
publisher-logo.jpg       (300x300 square, cropped from your logo's icon glyph)
bg-1.jpg ... bg-6.jpg    (logo-free backgrounds, 720x1280, one per page)

UPLOAD INSTRUCTIONS
-----------------------
1. Upload this ENTIRE folder (all files together) as one unit into the
   repo at: healthassistentai/healthassistant-ai (branch: main), so the
   HTML and its images stay in the same folder.
2. Do not rename any file.
3. Do not overwrite any other story's folder in the repo.
4. Push as ONE fresh commit rather than re-running a failed job, to
   avoid the duplicate "github-pages" artifact issue you hit before.
5. Once live, open the Live Story URL above and confirm it matches this
   file path exactly, character for character.

VALIDATION STATUS
--------------------
No live AMP validator was reachable from this environment (the
validator's script host, cdn.ampproject.org, is outside this sandbox's
allowed network domains). What WAS done instead — a structural self-check:
  - All 6 amp-story-page ids are unique
  - All 78 element ids in the document are unique
  - All 72 animate-in-after references resolve to a real id, and each
    one points to an element on its OWN page (no cross-page chains)
  - All referenced image files exist in this folder, flat, unprefixed
  - No JavaScript, onclick, or non-AMP tags/attributes were used
  - amp-custom CSS is ~2.3KB (well under the 75KB AMP limit)
  - Required amp-story attributes present: title, publisher,
    publisher-logo-src, poster-portrait-src
Please still run this file through https://validator.ampproject.org
before publishing.

MEDICAL CONTENT NOTE
-----------------------
Page 5 includes the safety line "Antibiotics do not treat viral
infections," used exactly as you wrote it — this is accurate general
health guidance and was kept prominent (its own highlighted callout,
not buried in a bullet list) rather than softened or removed.
