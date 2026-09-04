AMP WEB STORY — PACKAGE README (flat structure, with fade-in animation)
==========================================================================

Story Title:      Phone Addiction in Children: Signs, Effects & Fixes
Story Slug:        phone-addiction-in-children-symptoms-solutions

Canonical URL:      https://www.healthassistentai.com/2026/08/phone-addiction-in-children-symptoms-solutions.html
Blog Post URL:       https://www.healthassistentai.com/2026/08/phone-addiction-in-children-symptoms-solutions.html
GitHub File URL:     https://github.com/healthassistentai/health-assistant-ai/blob/main/phone-addiction-in-children-symptoms-solutions/phone-addiction-in-children-symptoms-solutions.html
Live Story URL:      https://healthassistentai.github.io/health-assistant-ai/phone-addiction-in-children-symptoms-solutions/phone-addiction-in-children-symptoms-solutions.html

Number of Slides:   6

FOLDER CONTENTS (everything together in ONE folder)
-----------------------------------------------------
phone-addiction-in-children-symptoms-solutions/
  phone-addiction-in-children-symptoms-solutions.html   (the story itself)
  README.txt
  poster.jpg               (720x960, 3:4 portrait poster)
  publisher-logo.jpg        (300x300 square logo)
  slide-1.jpg ... slide-6.jpg  (720x1280, 9:16, one per story page)

All image src paths inside the .html are flat filenames only (e.g. "slide-1.jpg"),
because the HTML and images sit in the SAME folder.

ANIMATION
---------
Each slide image now has AMP's native, JS-free entrance animation:
  animate-in="fade-in" animate-in-duration="0.6s"
This fades the whole slide image in as the page becomes active. Since your slide
text is baked into the JPGs (not separate HTML text), only the full image can be
animated this way — individual headings/bullets can't animate independently unless
they're supplied as plain background art with text added separately in HTML later.

UPLOAD INSTRUCTIONS
--------------------
1. Upload the ENTIRE "phone-addiction-in-children-symptoms-solutions/" folder (html +
   all images + this README) as ONE folder into the root of the health-assistant-ai
   repo (main branch) — same way as your other working stories.
2. Do not separate the .html file from the images — they must stay in the same folder.
3. Do not rename any files.
4. Confirm live at:
   https://healthassistentai.github.io/health-assistant-ai/phone-addiction-in-children-symptoms-solutions/phone-addiction-in-children-symptoms-solutions.html

NOTES
-----
- Source images were supplied at ~300x300px (slide 6 was ~235x235px) and were
  upscaled/letterboxed to 720x1280 without cropping text or distorting proportions
  (blurred background fill + sharp centered image). For sharpest results, export
  Canva slides at 720x1280 directly.
- publisher-logo.jpg was built from your uploaded HEALTHAI_30880_.webp (308x80,
  non-square), padded onto a white 300x300 square to meet AMP's 1:1 logo requirement.
- No live AMP validator was run — only a structural self-check. Please verify at
  validator.ampproject.org before considering this final.
