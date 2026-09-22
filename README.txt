AMP Web Story — README
=======================

Title:            What Is Psychiatric Illness? Causes, Symptoms & Treatment
Slug:             psychiatric-illness-complete-guide
Mode:             Animated Story

Canonical URL:    https://www.healthassistentai.com/2026/09/psychiatric-illness-complete-guide.html
Blog Post URL:    https://www.healthassistentai.com/2026/09/psychiatric-illness-complete-guide.html

GitHub File URL:  https://github.com/healthassistentai/health-assistant-ai/blob/main/psychiatric-illness-complete-guide/psychiatric-illness-complete-guide.html
Live Story URL:   https://healthassistentai.github.io/health-assistant-ai/psychiatric-illness-complete-guide/psychiatric-illness-complete-guide.html

NOTE: Per rule 19 in the command spec, the repo/Pages base uses the
hyphenated name "health-assistant-ai" (not "healthassistant-ai" from the
FIXED VALUES block). Confirm which repo name is actually live on GitHub
before publishing, and update the two URLs above if it differs.

Slide count:      6 pages (Opening / Problem / Symptoms / Causes /
                   Prevention / Conclusion)

Files in this folder:
  psychiatric-illness-complete-guide.html   - the AMP story page
  bg-1.jpg ... bg-6.jpg                     - page background images (720x1280)
  poster.jpg                                - story poster (720x960, 3:4)
  publisher-logo.jpg                        - square publisher logo (300x300)
  README.txt                                - this file

Source-asset note:
  The 6 background images were supplied as one collage file with a
  "HEALTH AI" wordmark baked into the top of each panel. Since Animated
  Mode requires text/logo-free backgrounds (the logo is its own separate
  fade-in HTML element instead), the wordmark band was cropped off each
  image before resizing. The logo itself was re-added as a proper animated
  <amp-img> element on pages 1 and 6, sourced from the attached logo file.

Upload instructions:
  1. Upload this ENTIRE "psychiatric-illness-complete-guide" folder as one
     unit to the repo, at the root level (do not nest it inside another
     folder, do not rename any file inside it).
  2. Do not overwrite or merge with any other story's folder.
  3. Confirm the Live Story URL above resolves after GitHub Pages rebuilds.

Validation:
  No live AMP validator was available in this environment (the official
  validator needs to fetch validator_wasm.js from cdn.ampproject.org,
  which this sandbox cannot reach). The official validator rule files
  (validator-amp-story.protoascii, validator-main.protoascii) were
  downloaded from raw.githubusercontent.com/ampproject/amphtml and a
  structural self-check was run instead (unique page IDs, unique element
  IDs, every animate-in-after target resolves to a real id on the same
  page, every asset path resolves inside this folder, slide count =
  background image count). Please verify at validator.ampproject.org
  before publishing.
