# ATHAR V25 Publishable Site Implementation Plan

**Goal:** Ship a bilingual, portfolio-ready ATHAR site with real navigation and two lightweight internal pages while preserving the cinematic homepage.

**Architecture:** Keep the single React entry point and add locale-aware content/routing based on pathname. Reuse the existing visual components, parameterizing copy/direction rather than duplicating the homepage. Add two small page components and shared navigation/footer behavior.

**Tech Stack:** React, Vite, Framer Motion, CSS.

**Spec:** `docs/superpowers/specs/2026-10-13-v25-publishable-site-design.md`

## Global Constraints
- Preserve homepage structure and bespoke animation behavior.
- Arabic `/` RTL; English `/en` LTR.
- No concepts lab or tester arrow.
- No new runtime dependencies.

## Review Focus
- Arabic and English routes render correct language/direction.
- Language switch maps internal pages correctly.
- Project CTA reaches Wadi House page.
- Studio/contact navigation reaches Studio page.
- Existing cinematic sections and formation video remain present.

### Task 1: Regression tests
Write V25 tests for locale routes, concepts removal, internal pages, and preserved homepage sections; verify failure.

### Task 2: Locale-aware homepage and navigation
Add copy dictionaries, locale detection, language switch, functional links, and natural English copy; pass routing/content tests.

### Task 3: Internal pages
Add Wadi House and Studio + Contact pages using the existing visual system; pass page tests.

### Task 4: Cleanup and polish
Remove concepts files/routes/tests, add responsive LTR/internal-page CSS, run full test/build suite, package ZIP.
