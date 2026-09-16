AMP Web Story — Package README
================================

Title: Anti Inflammatory Foods: A Complete Guide to Reducing Chronic Inflammation Naturally and Improving Overall Health
Slug: anti-inflammatory-foods-to-reduce-chronic-inflammation
Mode: Animated Story (real HTML text/icons animate in per element)

Canonical URL:
https://www.healthassistentai.com/2026/06/anti-inflammatory-foods-to-reduce-chronic-inflammation.html

Blog Post URL (same as canonical):
https://www.healthassistentai.com/2026/06/anti-inflammatory-foods-to-reduce-chronic-inflammation.html

GitHub File URL (view code only):
https://github.com/healthassistentai/healthassistant-ai/blob/main/anti-inflammatory-foods-to-reduce-chronic-inflammation/anti-inflammatory-foods-to-reduce-chronic-inflammation.html

Live Story URL (real published link once uploaded):
https://healthassistentai.github.io/healthassistant-ai/anti-inflammatory-foods-to-reduce-chronic-inflammation/anti-inflammatory-foods-to-reduce-chronic-inflammation.html

Slide / page count: 6 amp-story-page elements (matches the default arc —
your 6 images map one-to-one onto 6 pages)
Publisher: Goutam Dandapath

PAGE STRUCTURE
----------------
Every page here carries all three sections (unlike the dengue story,
where most were blank), so each page shows:
  Heading -> Statistic -> Symptoms (4) -> Causes (4) ->
  Prevention tips (4) -> CTA button
That's 12 bullets per page, 72 across the story, all animating in one
after another in a single unbroken chain per page.

  Page 1 — Berries            (berries bowl)
  Page 2 — Omega-3            (salmon & avocado)
  Page 3 — Cruciferous Veg    (vegetable assortment)
  Page 4 — Nuts & Seeds       (nuts, seeds, avocado)
  Page 5 — Turmeric/Ginger    (spices & olive oil)
  Page 6 — Whole Grains       (quinoa bowl)
Image order matched your written panel order exactly — no re-pairing
was needed.

Section labels: on Page 1 your copy labelled these "Symptom Bullet
points (of chronic inflammation)" and "Cause points (contributing to
inflammation)". On screen those read "Symptoms of chronic inflammation"
and "Contributing causes" so they fit the narrow label style; pages 2-6
use the plain "Symptoms" / "Causes" / "Prevention tips". Every bullet
item itself is your exact wording, unchanged.

Two small trims for line length, items otherwise verbatim:
  - Page 6 prevention tip 1: your text ended with the parenthetical
    "(white bread, pasta)" after "refined ones" — that trailing
    example was dropped so the line doesn't wrap to three lines on a
    phone. It now reads "Choose whole grains (quinoa, brown rice, oats)
    over refined ones".
  - CTA labels: your CTA sentences ended with a period; the buttons
    drop the trailing period (button labels don't take end punctuation).
    Wording is otherwise exactly yours.

TIMING NOTE
--------------
Because each page animates 12 bullets sequentially, the pages are set
to auto-advance after 13 seconds rather than the usual 8-9, so the full
chain finishes before the page turns. Viewers can still tap to advance
early at any time. If you'd rather the story move faster, the fix is to
shorten the bullet lists rather than the timer — otherwise the last
tips would never be seen on auto-play.

ABOUT THE BACKGROUND IMAGES
------------------------------
Your 6 images arrived as ONE sheet (768x1376) holding two rows of three
portrait panels, each with the "HEALTH AI" logo in a header strip above
the photo. Those header strips were cropped off every panel, so the
backgrounds are logo-free as Animated Mode requires — the real logo is
added back as its own animated HTML layer on pages 1 and 6.

Good news on quality this time: unlike your last two stories, these
panels are already portrait and very close to 9:16 (roughly 245x446 and
245x516), so each one fills the frame edge-to-edge as a normal
full-bleed background — no blurred-backdrop padding was needed, and
nothing is stretched or distorted. The one trade-off is that each panel
is only ~245px wide in the source, so enlarging to 720px wide leaves
them slightly soft on a high-resolution phone. They read fine as
backgrounds behind the text box, but if you want them crisp, send the
6 photos as separate full-size files instead of one combined sheet.

FILES IN THIS FOLDER
-----------------------
anti-inflammatory-foods-to-reduce-chronic-inflammation.html
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
  - All 90 element ids in the document are unique
  - All 84 animate-in-after references resolve to a real id, and each
    one points to an element on its OWN page (no cross-page chains)
  - Each page carries exactly 12 bullet items, as expected
  - All referenced image files exist in this folder, flat, unprefixed
  - No JavaScript, onclick, or non-AMP tags/attributes were used
  - amp-custom CSS is ~1.9KB (well under the 75KB AMP limit)
  - Required amp-story attributes present: title, publisher,
    publisher-logo-src, poster-portrait-src
Please still run this file through https://validator.ampproject.org
before publishing.

CONTENT ACCURACY NOTE
------------------------
Your copy contains specific numeric health claims (20-30% reduction in
inflammatory markers, CRP lowered 15-20%, IL-6 reduced up to 30%,
curcumin absorption increased 2000%, curcumin being comparable to
pharmaceutical drugs "without the side effects"). These were used
exactly as you wrote them — nothing was added, softened, or verified
here. Since a few of these are strong claims, it's worth making sure
the linked blog post cites its sources, particularly the
drug-comparison line.
