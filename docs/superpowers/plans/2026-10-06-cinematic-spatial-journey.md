# Cinematic Spatial Journey Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build from scratch an Arabic-first RTL architecture studio whose defining experience is a cinematic spatial journey.

**Architecture:** Vite + React + Framer Motion, with isolated scene components and shared motion primitives. Content is centralized; scroll progress drives hero depth, pinned project transitions, and the sticky project chapter. The supplied component concepts are interaction foundations, reskinned into one visual system.

**Tech Stack:** React, Vite, Framer Motion, lucide-react, CSS, Vitest.

**Spec:** `docs/superpowers/specs/2026-10-06-cinematic-spatial-journey-design.md`

## Global Constraints
- Arabic-first `<html lang="ar" dir="rtl">`.
- Major Arabic display typography is 600–700 weight; never 300.
- Aref Ruqaa Ink is selective, weight 700, and white on dark/photo scenes; never red/brown/orange.
- Palette: near-black, architectural white, mineral silver/stone, one restrained cold electric accent.
- No beige default world and no component soup.
- Motion must materially alter composition; complete Arabic words/lines only.
- Reduced motion removes parallax, pinned choreography, cursor response, and long travel.
- 360px viewport has no horizontal overflow.
- Vercel output is `dist`.

## Review Focus
- Aref cannot inherit accent color or text fill.
- Arabic shaping remains intact during text animation.
- Touch/mobile controls work without hover.
- Failed remote imagery preserves readable hierarchy.
- Sticky scenes degrade cleanly under reduced motion.

### Task 1: Foundation and content
Create `package.json`, `index.html`, `src/main.jsx`, `src/data.js`, `src/styles/tokens.css`, `src/styles/global.css`, `tests/foundation.test.js`.
- [ ] Test RTL root, four named projects, no warm/red Aref tokens, display weight floor 600, and 360px overflow guard; verify RED.
- [ ] Scaffold Vite/React and implement data/tokens/global styles; verify GREEN.
- [ ] Commit `feat: establish cinematic Arabic design system`.

### Task 2: Motion primitives and real Jelly CTA
Create `src/motion.js`, `src/components/JellyButton.jsx`, `src/components/RevealLine.jsx`, `tests/motion.test.js`.
- [ ] Test complete-span Arabic animation, reduced-motion travel removal, and pointer-follow/spring Jelly behavior; verify RED.
- [ ] Implement primitives and Jelly; verify GREEN.
- [ ] Commit `feat: add spatial motion primitives`.

### Task 3: Kelo-derived cinematic hero
Create `src/scenes/Hero.jsx`, `src/components/ProjectLens.jsx`, `tests/hero.test.js`.
- [ ] Test selectable hero project, glass nav/lens/data fragments, thick headline, white Aref, keyboard controls, media fallback; verify RED.
- [ ] Implement full-screen media, asymmetric copy, cursor depth, floating glass, thumbnails, scroll zoom and clearing headline; verify GREEN.
- [ ] Commit `feat: build cinematic project-lens hero`.

### Task 4: Manifesto and Benjamen-derived project journey
Create `src/scenes/Manifesto.jsx`, `src/scenes/Projects.jsx`, `src/components/ProjectScene.jsx`, `tests/projects.test.js`.
- [ ] Test four projects, thick titles, masked whole-line reveals, pin/overlap, metadata and touch access; verify RED.
- [ ] Implement bright manifesto and projects that pin, expand, overlap and replace one another; verify GREEN.
- [ ] Commit `feat: choreograph editorial project journey`.

### Task 5: Sticky cinematic project chapter
Create `src/scenes/ProjectChapter.jsx`, `tests/chapter.test.js`.
- [ ] Test multi-stage content, white Aref, coordinates/material notes and reduced-motion fallback; verify RED.
- [ ] Implement pinned zoom, technical-line drawing, staged details, progressive darkening and release; verify GREEN.
- [ ] Commit `feat: add pinned cinematic project chapter`.

### Task 6: Real stacked material table and visual disciplines
Create `src/scenes/Process.jsx`, `src/components/MaterialStack.jsx`, `src/scenes/Disciplines.jsx`, `tests/process.test.js`.
- [ ] Test shuffle order, keyboard shuffle, fan depth, scroll-forward behavior, four disciplines and touch access; verify RED.
- [ ] Implement physical material stack and image-through-type discipline transitions; verify GREEN.
- [ ] Commit `feat: build tactile process and discipline scenes`.

### Task 7: Credibility, photographic glass FAQ, Solra ending
Create `src/scenes/Credibility.jsx`, `src/scenes/Faq.jsx`, `src/scenes/Footer.jsx`, `tests/closing.test.js`.
- [ ] Test facts, FAQ single-open aria behavior, glass/photo integration, footer controls and white Aref; verify RED.
- [ ] Implement calm credibility reset, depth-responsive FAQ and dusk footer with rising frosted panel; verify GREEN.
- [ ] Commit `feat: complete glass FAQ and cinematic ending`.

### Task 8: Composition, resilience, visual verification
Create `src/App.jsx`, `src/styles/responsive.css`, `vercel.json`, `tests/integration.test.js`.
- [ ] Test scene order, no thin display rules, no warm Aref, reduced motion, keyboard path, media fallback and Vercel `dist`; verify RED.
- [ ] Compose scenes and responsive/reduced-motion/fallback behavior; verify GREEN.
- [ ] Run production build and tests.
- [ ] Render desktop/mobile screenshots; reject component soup, thin Arabic, warm/red calligraphy, generic grids, or inconsequential motion.
- [ ] Package only after visual QA passes.
- [ ] Commit `feat: ship cinematic spatial journey`.
