# أثَر — Cinematic Spatial Journey Design Spec

## Goal
Build from scratch an Arabic-first, RTL-first premium Saudi/Gulf architecture and interiors studio website whose defining experience is a **cinematic spatial journey**. The page must feel like moving through an architectural exhibition, not scrolling through stacked website sections.

The studio is fictional but believable, working across private residences, hospitality, cultural spaces, interiors, and selected commercial work in Riyadh, AlUla, Jeddah/Red Sea, and Diriyah.

## Non-negotiable art direction
- Arabic is the hero, not a translated layer.
- Main Arabic display typography is thick, assertive, and show-off: 600–700 weight contemporary Arabic sans.
- Aref Ruqaa Ink is a selective expressive accent only. On dark/photo scenes it is pure white. Never red, orange, brown, clay, or warm accent.
- Photography is dominant and art-directed as one studio portfolio.
- Core palette: near-black, architectural white, mineral silver/stone, with one restrained cold electric accent.
- No beige-on-beige default world. Light sections are deliberate breathing spaces.
- Repeating visual language: huge thick Arabic + architectural photography + thin technical lines + numbered coordinates + translucent glass + physical depth.
- Borrowed components must lose their original branding, palettes, fonts, radii, and chrome. Preserve interaction concepts, not visual identity.
- No component soup.

## Experience principle
The transitions are the site. Sections should not merely fade into view. Scroll changes spatial relationships: images expand, typography clears the frame, pinned scenes are overtaken, glass layers float at different depths, and project imagery replaces previous imagery.

Motion should feel weighted and architectural: slow photographic movement, controlled springs, masks, depth, inertia, and deliberate moments of stillness.

Arabic shaping must always remain intact. Animate complete words, phrases, or lines; never split Arabic into individual letters.

## Sequence

### 1. Cinematic Kelo-derived hero
A full-screen moving architectural environment opens the site.

Elements:
- floating glass navigation;
- enormous thick Arabic statement;
- white Aref Ruqaa Ink expressive phrase;
- liquid Jelly CTA;
- architectural project lens floating in depth, inspired by the useful interaction logic of Kelo but explicitly not a phone/app mockup;
- selectable project thumbnails that change the hero environment;
- small floating glass data fragments for coordinates, material, time/light condition, and project number;
- subtle cursor-responsive depth on desktop.

Scroll behavior:
- hero photography slowly zooms forward;
- headline lines move at different speeds and clear the viewport;
- glass fragments drift and fade at different depths;
- next bright manifesto plane is revealed underneath rather than appearing as a normal following section.

### 2. Typographic manifesto / quiet reset
A bright architectural-white plane provides a controlled breath after the hero.

- huge 600–700 weight Arabic sans statement;
- strong asymmetric composition;
- technical line/grid detail, not decorative beige styling;
- concise studio philosophy;
- scroll-linked line/phrase reveal using masks while preserving Arabic shaping.

### 3. Selected projects — Benjamen mechanics absorbed into the brand
Four believable projects:
- دار الوادي — الرياض — سكن خاص;
- رواق الحجر — العلا — فضاء ثقافي;
- بيت البحر — جدة / البحر الأحمر — ضيافة;
- دار النخيل — الدرعية — سكن خاص.

Composition:
- oversized irregular editorial photography rather than a standard 2-column masonry portfolio;
- tall/short rhythm and image emphasis borrowed from Benjamen;
- thick Arabic project titles;
- technical metadata and coordinates integrated over/around images;
- occasional glass project tags.

Scroll behavior:
- one project pins while the next image slides or expands over it;
- image masks reveal vertically/horizontally;
- project title enters as a complete Arabic phrase through a clipping mask;
- photography subtly changes perspective/depth;
- some images expand from framed crop to near/full bleed.

### 4. Sticky cinematic project chapter
Rواق الحجر becomes the centerpiece and occupies multiple viewport-heights.

During the pinned sequence:
- image zoom changes with scroll;
- architectural grid/line drawing overlays animate in;
- coordinates and material notes float into place;
- white Aref title appears as one dramatic moment;
- detail imagery and captions replace one another;
- the scene progressively darkens before releasing the user into the next section.

This must be visually consequential, not a CSS `position: sticky` checkbox.

### 5. Material/process table — real Stacked Card behavior
The supplied Stacked Card interaction is adapted as a tactile architect's table.

Content includes:
- sketches;
- plans;
- stone/material samples;
- physical models;
- site photography.

Behavior:
- cards fan into place with spring physics;
- hover/focus separates the stack;
- selecting/shuffling reorders the stack;
- scroll brings individual pieces forward;
- cards retain premium flat material-board treatment, not Polaroid scrapbook styling.

### 6. Disciplines as visual typography
Architecture, interiors, hospitality, and cultural spaces are not generic service cards or dead list rows.

Each discipline is a large typographic scene:
- thick Arabic headline;
- related image crop appears behind, beside, or through the typography;
- hover/scroll reveals description and technical label;
- transitions share the same mask/depth grammar as projects.

### 7. Studio credibility
Sparse numbers, philosophy, selected recognition/journal entries, and believable fictional studio facts.

This section is calmer so the page has pacing. Strong typography and technical framing continue the identity without constant spectacle.

### 8. Glass FAQ with photographic depth
Use the supplied FAQ interaction mechanics:
- one-open accordion;
- accessible keyboard interaction and aria-expanded;
- architectural photograph behind;
- glass panel integrated with the photograph rather than centered as a generic UI card;
- opening an item subtly changes crop/depth/glass behavior;
- Arabic questions and real studio-process answers.

### 9. Solra-derived cinematic ending
Full-screen dusk/night architecture scene.

- enormous thick Arabic closing statement;
- white Aref expressive word layered into the scene;
- CTA;
- translucent architectural-glass footer panel rises into the composition;
- studio/contact/navigation/newsletter or inquiry field;
- footer should feel like the final spatial scene, not a rectangular website footer appended afterward.

## Component usage requirements
The build must visibly use the supplied concepts rather than merely naming classes after them:
- Kelo: full-screen media + floating glass navigation + asymmetric copy + interactive visual/project lens;
- Jelly Explore Button: actual liquid/spring interaction, restrained to key CTAs;
- Benjamen: expressive editorial project rhythm, masked title reveals, tall/short visual choreography;
- Stacked Card: physical fan/shuffle/depth behavior;
- FAQ with Image: glass photographic accordion mechanics;
- Solra footer: full-bleed photographic close + frosted glass footer architecture.

## Motion grammar
Required motion families:
- scroll-linked image zoom;
- sticky/pinned scenes;
- image expansion and overlap;
- clip-path/mask reveals;
- complete-word/line Arabic reveals;
- parallax and depth layers;
- floating glass overlays;
- shuffle/fan spring interactions;
- hover/touch perspective movement;
- restrained cursor-responsive movement on desktop;
- staggered metadata/technical-line entrances.

Rules:
- animations must materially alter composition;
- no gratuitous constant motion;
- consistent spring/easing physics throughout;
- reduced-motion mode removes parallax, sticky choreography, cursor movement, and long travel while preserving content and hierarchy;
- mobile gets purpose-designed simplified choreography, not squeezed desktop animation.

## Typography
Primary display Arabic: contemporary Arabic sans capable of real 600–700 weight. Body/UI uses the same family or a closely compatible sans to avoid typographic soup.

Aref Ruqaa Ink:
- weight 700 where available;
- white on dark/photo scenes;
- used only for selected expressive phrases and brand moments;
- never red/brown/orange;
- never used as a generic section-heading substitute.

Do not use `font-weight: 300` for major Arabic display typography.

## Accessibility and resilience
- `<html lang="ar" dir="rtl">`;
- keyboard-accessible project controls, shuffle controls, FAQ, nav, and CTAs;
- visible focus states;
- meaningful alt text;
- adequate contrast over imagery;
- `prefers-reduced-motion` implementation;
- no horizontal overflow at 360px;
- touch states do not depend on hover;
- media failure fallbacks preserve legibility and composition.

## Technical direction
React + TypeScript or JSX, Vite, Framer Motion, Tailwind/CSS as appropriate, lucide-react. Vercel output must be `dist` and verified.

Components should be separated by responsibility: hero/project lens, motion primitives, project sequence, sticky project chapter, material stack, disciplines, FAQ, footer, content data.

## Acceptance criteria
A rendered full-page screenshot must not resemble the discarded beige/red build.

The implementation is accepted only if:
1. Arabic display typography is visibly thick and dominant.
2. Aref is never rendered red/brown/orange.
3. At least the hero, projects, sticky chapter, material table, FAQ, and footer have visibly consequential interactions derived from the supplied component prompts.
4. Scroll transitions create a spatial journey rather than stacked sections.
5. The page retains one coherent visual system despite multiple interaction types.
6. Desktop and mobile are both intentional.
7. Reduced motion and keyboard navigation work.
8. Production build passes and Vercel serves `dist`.
9. Final visual QA explicitly checks for component soup, weak/thin Arabic typography, accidental warm/red calligraphy, generic template grids, and animations that exist in code but are visually inconsequential.
