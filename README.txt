AMP Web Story — Package README
================================

Title: Natural Remedies to Lower High Blood Pressure: Complete Guide | HEALTH ASSISTENT AI
Slug: natural-remedies-to-lower-high-blood-pressure
Mode: Animated Story (real HTML text/icons animate in per element)

Canonical URL:
https://www.healthassistentai.com/2026/06/natural-remedies-to-lower-high-blood-pressure.html

Blog Post URL (same as canonical):
https://www.healthassistentai.com/2026/06/natural-remedies-to-lower-high-blood-pressure.html

GitHub File URL (view code only):
https://github.com/healthassistentai/healthassistant-ai/blob/main/natural-remedies-to-lower-high-blood-pressure/natural-remedies-to-lower-high-blood-pressure.html

Live Story URL (real published link once uploaded):
https://healthassistentai.github.io/healthassistant-ai/natural-remedies-to-lower-high-blood-pressure/natural-remedies-to-lower-high-blood-pressure.html

Slide / page count: 6 amp-story-page elements (matches the default arc —
your 6 topic blocks map one-to-one onto 6 pages)
Publisher: Goutam Dandapath

PAGE STRUCTURE
----------------
Each of your 6 topics is one page, in this order:
  Heading -> Stat -> "Watch for" (2-3 symptoms, staggered fade-in) ->
  "Why it happens" (2-3 causes, staggered fade-in) -> "Try this"
  (2 prevention tips, staggered fade-in) -> CTA button (fly-in-bottom)
Background image animate-in direction cycles zoom-in / fly-in-left /
fly-in-right across the 6 pages. The opening logo appears on Page 1,
and the closing logo appears on Page 6 alongside the final CTA.

Pages, in order: What is High Blood Pressure? -> DASH Diet -> Stress
Reduction -> Regular Exercise -> Sleep Quality -> Monitoring &
Hydration (same order as your collage image and your written topic
list — no re-pairing needed).

ABOUT THE BACKGROUND IMAGES
------------------------------
Your 6 background images arrived as one 2-column x 3-row collage, each
cell with the "HEALTH AI" wordmark baked into the top-right corner.
Each cell was split out and the baked-in logo band was cropped off
before resizing to 720x1280, keeping backgrounds text/logo-free as
Animated Mode requires. All 6 cells were clean illustration/photography
otherwise (no dashboard mockups or UI text like a previous batch had),
so no substitutions were needed this time.

Note on Page 6's background: it's a real photo of a blood pressure
monitor, which naturally shows a sample reading ("118/76") on its own
digital display as part of the physical device being photographed —
this is not a designed heading/stat overlay, so it doesn't conflict
with the animated HTML text layered on top.

FILES IN THIS FOLDER
-----------------------
natural-remedies-to-lower-high-blood-pressure.html  (the AMP story itself)
poster.jpg              (720x960, 3:4, from page 1's photo)
publisher-logo.jpg       (300x300 square, cropped from your logo's icon glyph)
bg-1.jpg ... bg-6.jpg    (text-free backgrounds, 720x1280, one per page)

UPLOAD INSTRUCTIONS
-----------------------
1. Upload this ENTIRE folder (all files together) as one unit into the
   repo at: healthassistentai/healthassistant-ai (branch: main), so the
   HTML and its images stay in the same folder — do not separate them
   or nest them inside another folder.
2. Do not rename any file — the HTML references image filenames exactly
   as they are (bg-1.jpg ... bg-6.jpg, poster.jpg, publisher-logo.jpg).
3. Do not overwrite any other story's folder in the repo.
4. Push as ONE fresh commit (don't just re-run a failed job) to avoid
   the duplicate "github-pages" artifact issue you hit before.
5. Once live, open the Live Story URL above and confirm it matches this
   file path exactly, character for character.

VALIDATION STATUS
--------------------
No live AMP validator was reachable from this environment (the
validator's script host, cdn.ampproject.org, is outside this sandbox's
allowed network domains). What WAS done instead — a structural self-check:
  - All 6 amp-story-page ids are unique
  - All 56 element ids in the document are unique
  - All 50 animate-in-after references resolve to a real id on the
    same page
  - All referenced image files (bg-1..6.jpg, poster.jpg,
    publisher-logo.jpg) exist in this folder, flat, unprefixed
  - No JavaScript, onclick, or non-AMP tags/attributes were used
  - amp-custom CSS is ~2KB (well under the 75KB AMP limit)
  - Required amp-story attributes present: title, publisher,
    publisher-logo-src, poster-portrait-src
Please still run this file through https://validator.ampproject.org
(or the AMP browser extension) before publishing, per standard AMP
practice.
