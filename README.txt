AMP Web Story — Package README
================================

Title: Boost Immune System Diet: A Complete Guide to Strengthening Your Immune System Naturally
Slug: boost-immune-system-diet
Mode: Animated Story (real HTML text/icons animate in per element)

Canonical URL:
https://www.healthassistentai.com/2026/06/boost-immune-system-diet.html

Blog Post URL (same as canonical):
https://www.healthassistentai.com/2026/06/boost-immune-system-diet.html

GitHub File URL (view code only):
https://github.com/healthassistentai/healthassistant-ai/blob/main/boost-immune-system-diet/boost-immune-system-diet.html

Live Story URL (real published link once uploaded):
https://healthassistentai.github.io/healthassistant-ai/boost-immune-system-diet/boost-immune-system-diet.html

Slide / page count: 6 amp-story-page elements (matches the default arc —
your 6 topic blocks map one-to-one onto 6 pages)
Publisher: Goutam Dandapath

PAGE STRUCTURE
----------------
Each of your 6 topics is one page, in this order:
  Heading -> Stat -> "Watch for" (3 items, staggered fade-in) ->
  "Why it happens" (3 items, staggered fade-in) -> "Try this"
  (3 items, staggered fade-in) -> CTA button (fly-in-bottom)
Background image animate-in direction cycles zoom-in / fly-in-left /
fly-in-right across the 6 pages for visual variety, and headings
alternate fly-in-bottom / fly-in-left / fly-in-right. The opening logo
appears on Page 1, and the closing logo appears on Page 6 alongside
the final CTA.

Pages, in order: Immune Defense -> Immune-Boosting Foods -> Hydration
-> Quality Sleep -> Exercise -> Stress & Relaxation (same order as
your collage image and your written topic list, so no re-pairing was
needed this time).

ABOUT THE BACKGROUND IMAGES
------------------------------
Your 6 background images arrived as ONE collage file (same layout as
your first request), each cell with the "HEALTH AI" wordmark baked
into the top-left corner. As before, each cell was split out and the
baked-in logo band was cropped off before resizing to 720x1280, so the
backgrounds stay text/logo-free as Animated Mode requires — the real
logo is added back as its own animated HTML layer on pages 1 and 6.

FILES IN THIS FOLDER
-----------------------
boost-immune-system-diet.html  (the AMP story itself)
poster.jpg              (720x960, 3:4, from page 1's photo)
publisher-logo.jpg       (300x300 square, cropped from your logo's icon glyph)
bg-1.jpg ... bg-6.jpg    (text-free background images, 720x1280, one per page)

UPLOAD INSTRUCTIONS
-----------------------
1. Upload this ENTIRE folder (all files together) as one unit into the
   repo at: healthassistentai/healthassistant-ai (branch: main), so the
   HTML and its images stay in the same folder — do not separate them
   or nest them inside another folder.
2. Do not rename any file — the HTML references image filenames exactly
   as they are (bg-1.jpg ... bg-6.jpg, poster.jpg, publisher-logo.jpg).
3. Do not overwrite any other story's folder in the repo.
4. Push as ONE fresh commit (don't just re-run a failed job) so GitHub
   Pages generates a single clean deployment artifact — see the note
   below if you hit the "multiple artifacts named github-pages" error
   again.
5. Once live, open the Live Story URL above and confirm it matches this
   file path exactly, character for character.

VALIDATION STATUS
--------------------
No live AMP validator was reachable from this environment (the
validator's script host, cdn.ampproject.org, is outside this sandbox's
allowed network domains). What WAS done instead — a structural self-check:
  - All 6 amp-story-page ids are unique
  - All 72 element ids in the document are unique
  - All 66 animate-in-after references resolve to a real id on the
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
