AMP Web Story — Package README
================================

Title: What Is Nutrition? Definition, Importance, Types, Benefits, and Essential Principles of Good Nutrition for a Healthy Life
Slug: what-is-nutrition-definition-importance-types-benefits
Mode: Animated Story (real HTML text/icons animate in per element)

Canonical URL:
https://www.healthassistentai.com/2026/06/what-is-nutrition-definition-importance-types-benefits.html

Blog Post URL (same as canonical):
https://www.healthassistentai.com/2026/06/what-is-nutrition-definition-importance-types-benefits.html

GitHub File URL (view code only):
https://github.com/healthassistentai/healthassistant-ai/blob/main/what-is-nutrition-definition-importance-types-benefits/what-is-nutrition-definition-importance-types-benefits.html

Live Story URL (real published link once uploaded):
https://healthassistentai.github.io/healthassistant-ai/what-is-nutrition-definition-importance-types-benefits/what-is-nutrition-definition-importance-types-benefits.html

Slide / page count: 6 amp-story-page elements (matches the default arc)
Publisher: Goutam Dandapath

PAGE STRUCTURE
----------------
Each page: Heading -> Statistic -> Symptoms (staggered fade-in) ->
Causes (staggered fade-in) -> Prevention Tips (staggered fade-in) ->
CTA button (fly-in-bottom). Every page carries all three sections at 3
items each (9 bullets per page). Your own note on Page 1 said the
"symptom" framing didn't quite fit that panel since it's presenting a
solution rather than a problem, but asked to keep it "for symmetry" —
so it's included exactly as you wrote it, under the same "Symptoms"
label as the other pages.

  Page 1 — Whole Foods (fruits & vegetables)
  Page 2 — Gut Health (digestion)
  Page 3 — Balanced Meal (plate method)
  Page 4 — Active Lifestyle
  Page 5 — Vitality & Health (radiant portrait)
  Page 6 — Building Healthy Habits for Life (family meal)

TIMING NOTE
--------------
Each page animates 9 bullets in sequence, so pages auto-advance after
11 seconds (rather than the usual 8-9s) so the full chain finishes
before the page turns. Viewers can still tap to advance early anytime.

ABOUT THE BACKGROUND IMAGES — PLEASE READ
----------------------------------------------
Your source was one tall sheet (768x1376) with a "NUTRITION" title bar
at the very top and 6 horizontal panels stacked below it, each in its
own bordered frame with a "HEALTH AI" logo in the top-right corner.
Two different techniques were used per panel to remove the logo,
depending on what was safe to do without damaging the artwork:

  - Panels 1 (produce) and 6 (family meal): the top strip was cropped
    off entirely. Both panels are dense with content across the full
    width up top, so there was no clean way to isolate just the logo —
    a full top-band crop was the safer choice. No faces or key subjects
    sit right at the very top edge in either panel, so nothing
    important was lost.
  - Panels 2 (gut/digestion), 3 (balanced plate), 4 (active lifestyle),
    and 5 (radiant portrait): only a small rectangle behind the logo
    was painted over with a color sampled from that panel's own plain
    background right next to it (dark navy, light blue, white, and
    soft blue-green respectively). This kept the full artwork intact,
    including the runners'/cyclist's heads in Panel 4, which would
    otherwise have been cropped off.

Panel/border framing note: each panel also had its own thin decorative
border, which was cropped off along with the logo so only the clean
photo/illustration remains.

Resolution note — how the 9:16 frame was filled: like your last few
stories, these panels are short, wide bands (roughly 740x115-200px),
so cropping straight to 9:16 would have used only a narrow sliver and
looked blurry. Each page instead places the real artwork sharp and
full-width across the upper-middle of the frame, over a softly blurred
zoomed copy of the same artwork filling the rest of the canvas —
nothing stretched or distorted.

FILES IN THIS FOLDER
-----------------------
what-is-nutrition-definition-importance-types-benefits.html
poster.jpg              (720x960, 3:4, from page 1's photo)
publisher-logo.jpg       (300x300 square, cropped from your logo's icon glyph)
bg-1.jpg ... bg-6.jpg    (logo-free backgrounds, 720x1280, one per page)

UPLOAD INSTRUCTIONS
-----------------------
1. Upload this ENTIRE folder (all files together) as one unit into the
   repo at: healthassistentai/healthassistant-ai (branch: main).
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
  - All 72 element ids in the document are unique
  - All 66 animate-in-after references resolve to a real id, and each
    one points to an element on its OWN page (no cross-page chains)
  - Each page carries exactly 9 bullet items, as expected
  - All referenced image files exist in this folder, flat, unprefixed
  - No JavaScript, onclick, or non-AMP tags/attributes were used
  - amp-custom CSS is ~1.9KB (well under the 75KB AMP limit)
  - Required amp-story attributes present: title, publisher,
    publisher-logo-src, poster-portrait-src
Please still run this file through https://validator.ampproject.org
before publishing.
