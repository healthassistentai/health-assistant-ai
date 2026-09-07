AMP Web Story — README
=======================

Title:            Daily Scientific Hygiene Habits: Complete Guide
Slug:              daily-scientific-hygiene-habits
Mode:              Animated Story
Canonical URL:     https://www.healthassistentai.com/2026/08/daily-scientific-hygiene-habits.html
Blog Post URL:     https://www.healthassistentai.com/2026/08/daily-scientific-hygiene-habits.html
GitHub File URL:   https://github.com/healthassistentai/healthassistant-ai/blob/main/daily-scientific-hygiene-habits/daily-scientific-hygiene-habits.html
Live Story URL:    https://healthassistentai.github.io/healthassistant-ai/daily-scientific-hygiene-habits/daily-scientific-hygiene-habits.html
Number of Slides:  6 (one habit per page: Handwashing, Brushing, Nail Cleaning, Face Washing, Hair Washing, Flossing)

STRUCTURE NOTE
--------------
The default 6-page arc (Opening / Problem / Symptoms / Causes / Prevention / Conclusion)
is meant for a SINGLE topic spread across 6 pages. Your input instead gave 6 separate
full habits, each with its own heading, stat, symptoms, causes, tips, and CTA line — and
you supplied exactly 6 background images (one per habit). So this build adapts the arc
to: 1 page per habit, with every element (heading, stat, "Watch for" / "Why it happens" /
"Do this" bullet groups, tagline, and a "Read Full Guide" button) animating in on its own
within that single page. Page count stayed at 6, matching your image count.

FILES IN THIS FOLDER
---------------------
daily-scientific-hygiene-habits.html   – the AMP story itself
poster.jpg                              – 720x960 (3:4) poster, required by AMP
publisher-logo.jpg                      – 300x300 square version of your logo (AMP requires
                                           a square publisher logo; your source file is a
                                           wide banner, so it's centered on a white square)
logo-banner.png                         – the full wide logo banner, used inside the story
                                           on page 1 and page 6 (large) and small on pages 2-5
bg-1.jpg … bg-6.jpg                      – background images, 720x1280, one per page

IMPORTANT ABOUT THE BACKGROUND PHOTOS
--------------------------------------
Your 6 uploaded photos all had a "HEALTH AI" logo (and a small "Grok" AI-generation
watermark) baked into the bottom ~20% of each image. Animated Story Mode requires
backgrounds to be completely text/logo-free so the logo can animate as its own separate
HTML element instead. I removed that baked-in band from every photo and filled the gap
with a softly blurred, darkened extension of the same photo (a letterbox-style pad) so
no content was stretched, distorted, or cropped from the sides. The real logo (from your
attached logo file) is layered back in as its own animated HTML element on top.

UPLOAD INSTRUCTIONS
--------------------
1. Upload this ENTIRE "daily-scientific-hygiene-habits" folder as one unit to the repo
   root (healthassistentai/healthassistant-ai, branch main). Do not rename any file.
2. Do not overwrite or merge this folder with any other story's folder.
3. Confirm the Live Story URL above resolves once GitHub Pages rebuilds.
4. Run the page through https://validator.ampproject.org before/after publishing
   (see validation note below).
