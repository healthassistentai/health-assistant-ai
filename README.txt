AMP Web Story — Package README
================================

Title: Dengue Symptoms: A Complete Guide to Early Signs, Warning Symptoms, Causes, Diagnosis, Treatment, Prevention, and Recovery Tips
Slug: dengue-symptoms-signs-warning-symptoms-treatment-prevention-guide
Mode: Animated Story (real HTML text/icons animate in per element)

Canonical URL:
https://www.healthassistentai.com/2026/06/dengue-symptoms-signs-warning-symptoms-treatment-prevention-guide.html

Blog Post URL (same as canonical):
https://www.healthassistentai.com/2026/06/dengue-symptoms-signs-warning-symptoms-treatment-prevention-guide.html

GitHub File URL (view code only):
https://github.com/healthassistentai/healthassistant-ai/blob/main/dengue-symptoms-signs-warning-symptoms-treatment-prevention-guide/dengue-symptoms-signs-warning-symptoms-treatment-prevention-guide.html

Live Story URL (real published link once uploaded):
https://healthassistentai.github.io/healthassistant-ai/dengue-symptoms-signs-warning-symptoms-treatment-prevention-guide/dengue-symptoms-signs-warning-symptoms-treatment-prevention-guide.html

Slide / page count: 6 amp-story-page elements (matches the default arc —
your 6 panels map one-to-one onto 6 pages)
Publisher: Goutam Dandapath

PAGE STRUCTURE — DIFFERENT FROM YOUR PREVIOUS STORIES
--------------------------------------------------------
Your earlier stories all used the same fixed three sections per page
("Watch for" / "Why it happens" / "Try this"). This topic doesn't fit
that shape — you explicitly marked most sections as "Not relevant to
this panel, keep blank", and each panel carries only ONE kind of
content. So the page template was made flexible: each page shows only
the section(s) that actually have content, under a label that matches
what the content really is:

  Page 1 — "Symptoms"           (6 early signs)
  Page 2 — "Symptoms"           (7 critical warning signs)
  Page 3 — "Causes"             (5 transmission points)
  Page 4 — "Tests & Procedures" (4 diagnostic tests)
  Page 5 — "Treatment" + "Prevention" (two sections, 4 items each)
  Page 6 — "Recovery Tips"      (6 post-dengue tips)

No blank headings or empty bullet lists are rendered anywhere, and no
copy was invented to fill the gaps.

Two small labelling notes, so you can correct me if you disagree:
  - On Page 4 your diagnostic tests were listed under "Prevention
    Tips", but they are tests, not prevention — so the on-screen label
    reads "Tests & Procedures". The four items themselves are your
    exact wording, unchanged.
  - On Page 6 your recovery items were also under "Prevention Tips";
    the label on screen reads "Recovery Tips". Again, items unchanged.
  - On Page 5 your copy had nested sub-bullets under "Treatment:" and
    "Prevention:". AMP Story pages can't show deep nesting legibly at
    this size, so those became two separate labelled sections on the
    same page, in the same order, with all 8 items intact.

Animation: on every page the heading flies in, the statistic fades in
after it, then every bullet fades in one after another in a single
unbroken chain (including across both sections on Page 5), and the CTA
button flies in last. Background image animation cycles zoom-in /
fly-in-left / fly-in-right across the 6 pages. Opening logo on Page 1,
closing logo on Page 6.

ABOUT THE BACKGROUND IMAGES
------------------------------
Your source arrived as ONE wide strip (2033x528) holding 6 illustration
panels, each with the "HEALTH AI" logo baked into a header area above
the artwork. Those headers were cropped off every panel, so the
backgrounds are logo-free as Animated Mode requires — the real logo is
added back as its own animated HTML layer on pages 1 and 6.

Resolution note — how the 9:16 frame was filled (same approach as your
iron/B12 story): the individual panels are small and wide (most around
460-940px wide but only ~206px tall). Cropping those to a 9:16 portrait
frame would have used a narrow sliver and looked badly blurred. So each
page places the real artwork sharp and full-width across the upper part
of the frame, over a softly blurred zoomed copy of the same artwork
filling the rest of the canvas. Nothing is stretched or distorted, and
the text box sits over the soft lower area where it reads cleanly.

Page 5's panel is the widest of the set (936x206), so its sharp artwork
band is the thinnest on screen. That page also carries the most text
(8 items across two sections), so the extra text room works out well —
but if you'd prefer a bigger image there, that panel is really two
scenes side by side (hospital treatment on the left, bed net on the
right) and either half could be used alone instead.

FILES IN THIS FOLDER
-----------------------
dengue-symptoms-signs-warning-symptoms-treatment-prevention-guide.html
poster.jpg              (720x960, 3:4, from page 1's artwork)
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
  - All 54 element ids in the document are unique
  - All 48 animate-in-after references resolve to a real id, and each
    one points to an element on its OWN page (no cross-page chains)
  - All referenced image files exist in this folder, flat, unprefixed
  - No JavaScript, onclick, or non-AMP tags/attributes were used
  - amp-custom CSS is ~1.9KB (well under the 75KB AMP limit)
  - Required amp-story attributes present: title, publisher,
    publisher-logo-src, poster-portrait-src
Please still run this file through https://validator.ampproject.org
before publishing.

MEDICAL CONTENT NOTE
-----------------------
This story carries clinical guidance from your copy (including the
"Paracetamol only; Avoid NSAIDs like aspirin/ibuprofen" line and the
warning-signs list). That wording was used exactly as you wrote it,
with nothing added or softened. Since dengue warning signs are a
medical emergency topic, it's worth making sure the blog post the CTA
links to carries a clear "seek medical care" message too.
