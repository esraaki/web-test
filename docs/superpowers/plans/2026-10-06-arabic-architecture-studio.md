# Arabic Architecture Studio Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a polished Arabic-first RTL website for a fictional Saudi/Gulf architecture and interiors studio, combining warm architectural editorial design with controlled dark cinematic sections and cohesive interactive motion.

**Architecture:** Componentized React/Tailwind/Framer Motion site with one token system, Arabic typography hierarchy, motion grammar, and image treatment. Borrowed Motion components are adapted as interaction patterns rather than preserved as separate visual systems; believable studio/project content is centralized in one data module.

**Tech Stack:** React, TypeScript, Tailwind CSS, Framer Motion, lucide-react, Vitest + Testing Library, Playwright.

**Spec:** `docs/superpowers/specs/2026-10-06-arabic-architecture-studio-design.md`

## Global Constraints
- Arabic-first and RTL-first: `<html lang="ar" dir="rtl">`; layout, arrows, navigation and forms must feel authored for Arabic.
- Fictional high-end Saudi/Gulf architecture + interiors studio: residences, hospitality, cultural and selected commercial work.
- Warm limestone/ivory editorial base with walnut/near-black cinematic interruptions.
- One palette, grid, typography hierarchy, image treatment and motion grammar: no component soup.
- Aref Ruqaa Ink is expressive accent only; contemporary Arabic sans is primary.
- Strip borrowed components of original palettes, fonts, branding and unrelated chrome.
- Excitement comes from scale, photography, pacing, contrast and motion—not decorative variety.
- Semantic HTML, keyboard focus, reduced-motion support, descriptive alt text and readable contrast.
- No ecommerce or booking; conversion is lead-generation/contact interest only.
- No horizontal overflow on mobile; external media must fail gracefully.

## Review Focus
- RTL correctness: natural Arabic ordering/alignment and directional affordances.
- Reduced motion: no essential content depends on parallax/springs.
- Media failure: legible designed fallback instead of broken hero/sections.
- 360px screens: oversized type and stacked imagery never overflow.
- Keyboard/touch: project galleries, FAQ and CTAs do not depend on hover.

---

## File Structure
- `src/app/App.tsx` — homepage composition.
- `src/app/site-data.ts` — studio/project/FAQ/footer content.
- `src/styles/tokens.css`, `src/styles/global.css` — unified visual system + RTL shell.
- `src/lib/motion.ts` — reduced-motion-aware shared motion.
- `src/components/layout/SiteNav.tsx`
- `src/components/ui/JellyExploreButton.tsx`, `StackedCard.tsx`, `ProjectCard.tsx`
- `src/components/sections/Hero.tsx`, `StudioManifesto.tsx`, `SelectedProjects.tsx`, `CinematicProject.tsx`, `Disciplines.tsx`, `MaterialProcess.tsx`, `StudioNumbers.tsx`, `JournalRecognition.tsx`, `Faq.tsx`, `SiteFooter.tsx`
- `src/**/*.test.tsx`, `tests/site.spec.ts`

### Task 1: Foundation, content, tokens and RTL shell
**Files:** Create `site-data.ts`, tokens/global CSS, `SiteNav.tsx` and tests.
**Produces:** studio/nav/projects/disciplines/stats/journal/FAQ/footer exports and shared design tokens.
- [ ] Write failing tests for Arabic nav, RTL root, accessible mobile menu and valid section anchors.
- [ ] Run tests; verify failure.
- [ ] Implement believable Saudi/Gulf studio data, restrained limestone/walnut/mineral palette, Arabic font hierarchy and RTL navigation.
- [ ] Run tests; verify pass.
- [ ] Commit: `feat: establish Arabic studio design system`

### Task 2: Shared motion language and Jelly CTA
**Files:** Create `src/lib/motion.ts`, tests, and supplied `JellyExploreButton.tsx`.
**Produces:** reduced-motion-aware reveal/image variants and Jelly CTA.
- [ ] Test that reduced-motion variants remove travel/parallax and CTA preserves label/click/keyboard behavior.
- [ ] Run; verify failure.
- [ ] Implement shared motion helpers; add supplied Jelly code without refactoring internals, configuring instances to match studio tokens.
- [ ] Run; verify pass.
- [ ] Commit: `feat: add cohesive motion and jelly CTA`

### Task 3: Cinematic hero + quiet manifesto
**Files:** Create `Hero.tsx`, `StudioManifesto.tsx` and tests.
- [ ] Test Arabic H1/CTA, media fallback and manifesto content without animation dependency.
- [ ] Run; verify failure.
- [ ] Build full-viewport architectural film/image hero, restrained floating nav, giant Arabic statement, Jelly CTA and subtle scroll cue. Borrow Kelo's cinematic composition only; remove all AI/product/gallery-phone UI.
- [ ] Build warm limestone manifesto transition with extreme whitespace and one selective Aref Ruqaa Ink moment.
- [ ] Run; verify pass.
- [ ] Commit: `feat: build cinematic hero and studio manifesto`

### Task 4: Selected projects
**Files:** Create `SelectedProjects.tsx`, `ProjectCard.tsx`, tests; update data.
- [ ] Test four believable projects/locations, accessible activation, keyboard/touch behavior and safe wrapping of long Arabic titles.
- [ ] Run; verify failure.
- [ ] Adapt Benjamen's alternating tall/short editorial rhythm and restrained image motion into the site's Arabic system.
- [ ] Add subtle focus/hover/touch metadata interaction; no route/backend required.
- [ ] Add Playwright 360px overflow assertion.
- [ ] Run component + browser tests; verify pass.
- [ ] Commit: `feat: add immersive selected projects`

### Task 5: Dark project interlude + disciplines
**Files:** Create `CinematicProject.tsx`, `Disciplines.tsx` and tests.
- [ ] Test readability with motion disabled and semantic coverage of residences/hospitality/cultural/interiors.
- [ ] Run; verify failure.
- [ ] Build one dark full-bleed project interlude with slow image movement, metadata and controlled transition.
- [ ] Build disciplines editorially with typography, image fragments and hairlines—not SaaS icon cards.
- [ ] Run; verify pass.
- [ ] Commit: `feat: add cinematic project and disciplines`

### Task 6: Material/process story + stacked imagery
**Files:** Create supplied `StackedCard.tsx`, `MaterialProcess.tsx` and tests.
- [ ] Test custom imagery, readable process without interaction, non-hover access and narrow-screen containment.
- [ ] Run; verify failure.
- [ ] Add supplied StackedCard code without refactoring internals.
- [ ] Frame it as physical sketches, samples, models and site photography so the interaction has an architectural reason to exist.
- [ ] Run; verify pass.
- [ ] Commit: `feat: tell studio process through stacked materials`

### Task 7: Credibility, FAQ and footer
**Files:** Create `StudioNumbers.tsx`, `JournalRecognition.tsx`, `Faq.tsx`, `SiteFooter.tsx`, tests; update data.
- [ ] Test FAQ collapsed state/`aria-expanded`/keyboard behavior and footer form/CTA accessibility.
- [ ] Run; verify failure.
- [ ] Build sparse studio numbers + journal/recognition sections.
- [ ] Adapt the borrowed glass FAQ mechanics to Arabic architectural content, studio fonts/colors and architectural photography.
- [ ] Adapt Solra's photo + frosted-panel footer structure to studio CTA/contact/navigation/newsletter/legal content.
- [ ] Run; verify pass.
- [ ] Commit: `feat: complete studio credibility and footer`

### Task 8: Compose, polish and verify
**Files:** Modify `App.tsx`; create `tests/site.spec.ts`; polish section styles; add README if absent.
- [ ] Write failing E2E tests for section order, RTL, 360/768/1440 viewport overflow, FAQ, nav anchors, focus visibility and blocked-media resilience.
- [ ] Run; verify expected failures.
- [ ] Compose approved rhythm: `cinematic → quiet → interactive → quiet → cinematic → editorial → functional → cinematic close`.
- [ ] Polish dark/light handoffs, Arabic wrapping, image crops and repeated control consistency; ensure no borrowed section retains its source identity.
- [ ] Add media fallbacks and appropriate lazy loading.
- [ ] Run full Vitest suite; all pass.
- [ ] Run Playwright target viewports; all pass.
- [ ] Run production build; no TypeScript/build errors.
- [ ] Perform screenshot QA specifically for uniformity/no-component-soup, RTL typography, contrast and mobile composition.
- [ ] Commit: `feat: ship Arabic architecture studio experience`
