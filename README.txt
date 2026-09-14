AMP Web Story — Package README
================================

Title: New Generation Children's Fitness: The Ultimate Guide to Building Healthy Habits, Strong Bodies, Active Minds, and a Successful Future
Slug: new-generation-childrens-fitness-guide
Mode: Animated Story (real HTML text/icons animate in per element)

Canonical URL:
https://www.healthassistentai.com/2026/06/new-generation-childrens-fitness-guide.html

Blog Post URL (same as canonical):
https://www.healthassistentai.com/2026/06/new-generation-childrens-fitness-guide.html

GitHub File URL (view code only):
https://github.com/healthassistentai/healthassistant-ai/blob/main/new-generation-childrens-fitness-guide/new-generation-childrens-fitness-guide.html

Live Story URL (real published link once uploaded):
https://healthassistentai.github.io/healthassistant-ai/new-generation-childrens-fitness-guide/new-generation-childrens-fitness-guide.html

Slide / page count: 6 amp-story-page elements (matches the default arc — your
copy this time was compact enough per topic to fit one page each)
Publisher: Goutam Dandapath

PAGE STRUCTURE
----------------
Each of your 6 topics became one page, in this order, each containing:
  Heading -> Stat -> "Watch for" (2 items, staggered fade-in) ->
  "Why it happens" (2 items, staggered fade-in) -> "Try this"
  (2 items, staggered fade-in) -> CTA button (fly-in-bottom)
Background image animate-in direction cycles zoom-in / fly-in-left /
fly-in-right across the 6 pages for visual variety. The opening logo
appears on Page 1, and the closing logo appears on Page 6 alongside
the final CTA, matching the default story's bookend logo placement.

WHICH BACKGROUND PHOTO WENT ON WHICH PAGE
--------------------------------------------
You sent 6 background photos as separate files (not labeled by topic),
so they were matched to topics by content, based on the specific tips
named in your own copy:
  Page 1 (Building Healthy Foundations) - kids stretching/playing outdoors
    at sunrise -> matches "60 minutes of daily active play"
  Page 2 (Nutrition & Healthy Habits) - packing a lunchbox -> matches
    "pack colorful, nutrient-dense lunchboxes"
  Page 3 (Developing Strong Bodies) - girl jumping rope -> matches
    "cardio exercises like jump rope"
  Page 4 (Fueling Active Minds) - kids building with blocks -> matches
    "STEM block building"
  Page 5 (Paving a Successful Future) - girl on a climbing wall with
    family cheering -> matches "set small achievable milestones" /
    "celebrate milestones" / "supportive environments"
  Page 6 (The Lifelong Wellness Journey) - family hiking together ->
    matches "weekend outdoor family hikes and nature walks"
If you had a different photo-to-topic pairing in mind, let me know and
I can rebuild with the order you intended.

ABOUT THE BACKGROUND IMAGES
------------------------------
Each of your 6 photos had the "HEALTH AI" logo baked into the top-right
corner. As in the previous story, the baked-in logo band was cropped off
(each image was already near 9:16, so only a thin top strip was removed,
not the sides), then resized to 720x1280. This keeps backgrounds
text/logo-free as Animated Mode requires, since the real logo is added
back as its own separate animated HTML layer on pages 1 and 6.

FILES IN THIS FOLDER
-----------------------
new-generation-childrens-fitness-guide.html  (the AMP story itself)
poster.jpg              (720x960, 3:4, from page 1's photo)
publisher-logo.jpg       (300x300 square, cropped from your logo's icon glyph)
bg-1.jpg ... bg-6.jpg    (text-free background photos, 720x1280, one per page)

UPLOAD INSTRUCTIONS
-----------------------
1. Upload this ENTIRE folder (all files together) as one unit into the
   repo at: healthassistentai/healthassistant-ai (branch: main), so the
   HTML and its images stay in the same folder — do not separate them
   or nest them inside another folder.
2. Do not rename any file — the HTML references image filenames exactly
   as they are (bg-1.jpg ... bg-6.jpg, poster.jpg, publisher-logo.jpg).
3. Do not overwrite any other story's folder in the repo.
4. Once live on GitHub Pages, open the Live Story URL above and confirm
   it matches this file path exactly, character for character.

VALIDATION STATUS
--------------------
No live AMP validator was reachable from this environment (the
validator's script host, cdn.ampproject.org, is outside this sandbox's
allowed network domains). What WAS done instead — a structural self-check:
  - All 6 amp-story-page ids are unique
  - All 54 element ids in the document are unique
  - All 48 animate-in-after references resolve to a real id on the
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
