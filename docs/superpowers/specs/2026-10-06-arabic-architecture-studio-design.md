# Arabic Architecture Studio — Design Specification

## Intent
Create a portfolio-grade, Arabic-first website for a fictional premium Saudi/Gulf architecture and interiors studio. It should feel commercially believable enough to resemble a real studio website while functioning as an unusually strong design portfolio piece. The experience must be immersive, premium, interactive, and coherent rather than a collection of unrelated showcase components.

## Brand concept
A fictional Saudi architecture and interiors practice working across private residences, hospitality, cultural spaces, and selected commercial projects. The studio will have a concise Arabic name developed during implementation, a believable point of view, named projects, locations, studio statistics, recognition, journal content, and contact/inquiry pathways.

The website itself should read as a real business. Portfolio presentation outside the website may identify it as a concept project.

## Art direction
Direction C: warm architectural editorial with controlled dark cinematic interruptions.

The default world is warm limestone, ivory, sand, walnut, charcoal, sunlight, natural stone, timber, plaster, glass, and shadow. Dark near-black sections appear only as intentional cinematic punctuation. Excitement comes from scale, pacing, photography, composition, and motion—not from introducing a new visual language every section.

### Uniformity rules
- One core grid and spacing system across the entire page.
- One primary Arabic sans family for UI/body/editorial text.
- Aref Ruqaa Ink may appear only as a rare expressive display accent, never as the general UI typeface.
- One restrained material palette; no rainbow section theming.
- Photography receives consistent grading: warm, natural, architectural, low-clutter, premium.
- Buttons share one interaction language derived from the Jelly button.
- Motion shares one physical character: slow entrances, weighted springs, restrained parallax, deliberate image movement.
- Glass is used only where conceptually appropriate, principally over photography.
- Rounded corners, borders, blur, shadows, and button treatments are standardized rather than inherited from source components.
- Borrowed components are mechanics, not mini design systems.

## Experience rhythm
The homepage should feel like moving through an architecture exhibition:

**cinematic → quiet → interactive → quiet → cinematic → editorial → functional → cinematic close**

Stillness is part of the experience. Not every section moves continuously.

## Page structure

### 1. Cinematic hero
A full-viewport architectural film or high-quality moving visual establishes the studio immediately. The composition borrows the Kelo hero's full-screen media, layered navigation, entrance choreography, and strong left/right visual hierarchy, but removes all AI/product-demo styling.

Content:
- studio wordmark
- minimal Arabic navigation
- oversized Arabic campaign statement
- one short positioning line
- primary CTA using the unified Jelly interaction
- subtle scroll affordance

The hero should feel architectural rather than technological. No phone mockup or gallery card from the source hero survives literally.

### 2. Studio manifesto / quiet reset
Transition from the hero into a warm limestone canvas with significant whitespace. A large Arabic statement introduces the practice's philosophy. This section intentionally slows the experience after the hero.

Potential content themes: designing around climate, light, material, place, and human use rather than visual spectacle alone.

### 3. Selected projects
The main portfolio showcase. Four fictional, believable projects spanning Saudi/Gulf contexts, likely including Riyadh, Diriyah/greater Riyadh, AlUla, and Jeddah/Red Sea.

The Benjamen Featured Work prompt supplies useful mechanics: staggered reveal, alternating image proportions, image hover motion, and strong editorial project titles. These are restyled completely for Arabic and the studio system.

Each project includes:
- Arabic project name
- location
- typology
- year/status
- one-line architectural premise
- large photography

No generic card-grid feeling. Project images dominate.

### 4. Cinematic signature-project interlude
One project receives a full-bleed dark treatment. Use scroll-linked image movement/parallax or restrained zoom to create a memorable change of pace. The section should reveal architectural details progressively rather than simply displaying another image.

### 5. Disciplines — what we shape
Present four areas: private residences, hospitality, cultural spaces, interiors. Avoid SaaS icon cards. Use architectural imagery, typography, crop changes, and possibly hover-based image reveals.

### 6. Material / process story
A tactile section about sketches, models, stone, timber, samples, plans, and construction details. The supplied Stacked Card component is repurposed here because the physical fan/pile metaphor makes sense for process artifacts.

The component's behavior remains recognizable—staggered entry, rotation, hover pan—but imagery and surrounding composition make it part of the studio story rather than a generic gallery.

### 7. Philosophy + studio numbers
A sparse credibility section combining a short philosophy with believable statistics such as years of practice, completed spaces, active cities/regions, or awards/shortlists. Numbers are large; supporting labels are small and quiet. Avoid dashboard styling.

### 8. Recognition / journal
Editorial content adds commercial credibility and prevents the site from becoming only an image reel. A small number of believable journal/recognition entries are enough. This can include studio notes on materials, climate, adaptive reuse, or hospitality design, plus fictional awards/features clearly contained within the fictional brand world.

### 9. FAQ
Use the supplied FAQ-with-image interaction mechanics: fixed/full photographic field, translucent accordion surfaces, single-open behavior, animated chevrons and height transitions.

Reskin it into the architecture system:
- architectural background rather than generic source image
- Arabic typography
- quieter glass treatment
- questions relevant to commissioning an architecture/interiors studio
- no SaaS copy

Likely topics: project locations, architecture vs interiors scope, project stages, collaboration, international/GCC work, and how to begin an inquiry.

### 10. Closing CTA + footer
Adapt the Solra footer composition: full-bleed photographic dusk scene, centered closing CTA, and a floating translucent panel containing brand information, navigation, contact/newsletter, and legal information.

The lime/teal Solra palette is discarded. The glass panel uses the site's material palette and the footer photograph provides the cinematic final note. The CTA uses the site's Jelly interaction.

## Interaction system

### Jelly CTA
Use the supplied Jelly Explore Button code without refactoring its internal mechanics. Adapt through its exposed props and surrounding composition. The same interaction should be used sparingly for primary conversion actions, not every link.

### Project imagery
Use slow, low-amplitude scale/tilt/pan interactions. Avoid playful wobble. Motion should feel weighted, as though moving physical boards or photographs.

### Scroll reveals
Consistent easing/spring behavior across headings, imagery, labels, and content. Reveal sequences should be staggered subtly. Arabic text reveals must preserve proper glyph shaping; avoid per-letter animation that breaks connected Arabic script. Animate words, lines, masks, or whole text blocks instead.

### Page transitions / section transitions
Transitions should be achieved primarily with overlap, image bleed, tonal fades, and pinned/scroll-linked composition where useful. Avoid obvious decorative wipes unless they derive from architectural geometry.

### Accessibility / reduced motion
Respect `prefers-reduced-motion`. Interactive elements remain keyboard accessible. Contrast must remain readable over imagery/glass. Decorative movement must not be required to understand content.

## Arabic / RTL system
- `<html lang="ar" dir="rtl">`.
- Design RTL-first rather than mirroring an English composition afterward.
- Navigation, editorial grids, captions, controls, and reading order should originate from the right where appropriate.
- Numeric/project metadata may use isolated LTR treatment where typographically necessary.
- Do not letter-split Arabic words for animation.
- Arabic copy should sound written for an Arabic-speaking Gulf audience, not translated from English.
- Typography should remain architectural and contemporary; calligraphic display is an accent, not the default.

## Content strategy
All content is fictional but believable. Avoid lorem ipsum and generic marketing filler. Projects should have coherent names, places, typologies, narratives, and visual identities. The studio should sound confident and precise rather than grandiose.

The site should not claim association with real architecture firms or misrepresent real buildings as the fictional studio's actual work. Stock/editorial architectural media can function as visual concept imagery; the portfolio framing should make the fictional nature clear outside the in-world website.

## Media strategy
Use high-quality architecture/interior imagery and, where it materially improves immersion, short background video/GIF/looping media. Prefer architecture, material, landscape, shadow, models, drawings, and details over people-centric lifestyle imagery.

Media should support a consistent visual grade and not look scraped from five unrelated brands.

## Responsive behavior
Desktop receives the richest cinematic choreography. Tablet preserves hierarchy while reducing overlap. Mobile becomes a deliberate vertical editorial experience rather than a squeezed desktop layout.

Heavy or pointer-specific interactions should degrade gracefully on touch devices. Stacked cards may reduce fan spread or become a controlled swipe/stack composition. Full-screen media remains legible and performant.

## Technical direction
A modern React frontend with Tailwind CSS and Framer Motion is appropriate because the supplied components already target that stack. Existing source components are integrated as isolated components and reskinned at the composition/system level rather than rewritten unnecessarily.

Only dependencies required by the implemented interactions should be installed. Avoid adding 3D/WebGL merely to advertise technical complexity; use it only if a specific architectural moment benefits materially.

## Success criteria
The finished homepage should:
1. Look unmistakably like one art-directed brand despite combining several borrowed interaction ideas.
2. Feel Arabic-first and premium rather than like an English template mirrored into RTL.
3. Have enough credible business content to function as a real architecture studio site.
4. Contain multiple memorable interactive moments without becoming visually noisy.
5. Make architectural imagery and typography—not UI decoration—the protagonists.
6. Demonstrate strong responsive design, motion design, information architecture, typography, and interaction design as a portfolio piece.
7. Be deployable as a functional frontend without requiring ecommerce, listings, or booking infrastructure.
