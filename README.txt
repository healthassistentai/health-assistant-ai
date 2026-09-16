AMP Web Story — Package README
================================

Title: Iron and Vitamin B12 Rich Foods: A Complete Guide to Boost Energy, Improve Blood Health, and Strengthen Immunity
Slug: iron-vitamin-b12-rich-foods-complete-guide-energy-health-immunity
Mode: Animated Story (real HTML text/icons animate in per element)

Canonical URL:
https://www.healthassistentai.com/2026/06/iron-vitamin-b12-rich-foods-complete-guide-energy-health-immunity.html

Blog Post URL (same as canonical):
https://www.healthassistentai.com/2026/06/iron-vitamin-b12-rich-foods-complete-guide-energy-health-immunity.html

GitHub File URL (view code only):
https://github.com/healthassistentai/healthassistant-ai/blob/main/iron-vitamin-b12-rich-foods-complete-guide-energy-health-immunity/iron-vitamin-b12-rich-foods-complete-guide-energy-health-immunity.html

Live Story URL (real published link once uploaded):
https://healthassistentai.github.io/healthassistant-ai/iron-vitamin-b12-rich-foods-complete-guide-energy-health-immunity/iron-vitamin-b12-rich-foods-complete-guide-energy-health-immunity.html

Slide / page count: 6 amp-story-page elements (matches the default arc)
Publisher: Goutam Dandapath

ABOUT THE BACKGROUND IMAGES — PLEASE READ
--------------------------------------------
Your source arrived as ONE wide strip (2033x528) containing 7 food
photo panels, and every panel had TWO things baked in: a category
label in black text ("Legumes and Beans (Iron)", "Seafood (B12 focus)",
etc.) and the "HEALTH AI" logo, both sitting in a header strip above
each photo. Those header strips were cropped off every panel so the
backgrounds are text/logo-free, as Animated Mode requires. The
"Nuts, Dried Fruits, and Molasses" panel had a TWO-LINE label, so that
one needed a deeper crop than the rest.

Resolution note — how the frame was filled:
Each individual panel is only about 508px wide and 200-480px tall, and
most are wide landscape shots. Cropping those to a 9:16 portrait frame
would have used only a ~140px-wide sliver and looked very blurry when
stretched to 720x1280 (that's what went wrong on your chronic-disease
story). So instead, each page is built as: the real photo placed sharp
and full-width across the upper part of the frame, over a softly
blurred, zoomed copy of the same photo filling the rest of the 9:16
canvas. Nothing is stretched or distorted, the food stays sharp, and
your animated text box sits over the soft lower area where it reads
cleanly. If you'd prefer edge-to-edge full-bleed photos instead, send
the 6 images as separate full-size portrait files and it can be rebuilt
that way.

One thing I could NOT remove — Page 5 (Fortified Foods): the photo
itself contains a nutritional yeast product packet, and the AI-generated
packaging has garbled nonsense text on it ("AUTITIEGAL YEAST T624S").
That text is part of the photographed product, not an overlay label, so
cropping it out would have removed the fortified-food subject entirely.
It's small and sits in the upper right. If it bothers you, send a
replacement photo for that page.

WHICH PANEL WENT ON WHICH PAGE
---------------------------------
  Page 1 (Introduction)            -> nuts, dried fruits & molasses
                                      (varied iron-rich spread)
  Page 2 (Animal Proteins)         -> beef, salmon, chicken, clams, eggs
  Page 3 (Legumes and Beans)       -> lentils, chickpeas, kidney & black beans
  Page 4 (Leafy Greens and Seeds)  -> spinach, kale, pumpkin & sesame seeds
  Page 5 (Fortified Foods)         -> oats, fortified milk, bread,
                                      nutritional yeast
  Page 6 (Seafood)                 -> oysters, mackerel, mussels on ice
Your strip had 7 panels but the story has 6 pages, so one panel (the
second "Seafood (B12 focus)" panel showing oats/bread/milk/trail mix)
was not used — the oyster/mackerel/mussel panel was the stronger fit
for your Seafood page, and the oats/bread panel overlapped with the
Fortified Foods panel.

PAGE STRUCTURE
----------------
Each of your 6 pages contains:
  Heading -> Stat -> "Watch for" (symptoms, staggered fade-in) ->
  "Why it happens" (causes, staggered fade-in) -> "Try this"
  (prevention tips, staggered fade-in) -> CTA button (fly-in-bottom)
Background image animate-in direction cycles zoom-in / fly-in-left /
fly-in-right across the 6 pages. The opening logo appears on Page 1,
and the closing logo appears on Page 6 alongside the final CTA.

CTA note: your Page 1 CTA text says "Swipe Up to Explore Essential
Foods!" — in this build it's a normal tappable button linking to the
Blog Post URL (AMP Stories no longer use a swipe-up gesture for links).
Your exact wording was kept as the button label.

FILES IN THIS FOLDER
-----------------------
iron-vitamin-b12-rich-foods-complete-guide-energy-health-immunity.html
poster.jpg              (720x960, 3:4, from page 1's image)
publisher-logo.jpg       (300x300 square, cropped from your logo's icon glyph)
bg-1.jpg ... bg-6.jpg    (text-free backgrounds, 720x1280, one per page)

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
  - All 55 element ids in the document are unique
  - All 49 animate-in-after references resolve to a real id on the
    same page
  - All referenced image files exist in this folder, flat, unprefixed
  - No JavaScript, onclick, or non-AMP tags/attributes were used
  - amp-custom CSS is ~2KB (well under the 75KB AMP limit)
  - Required amp-story attributes present: title, publisher,
    publisher-logo-src, poster-portrait-src
Please still run this file through https://validator.ampproject.org
before publishing.
