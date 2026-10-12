# ATHAR Second-Section Concepts Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Add an internal concepts route with eight polished interactive second-section experiments and a temporary homepage tester link.

**Architecture:** Keep the current homepage component tree intact. Route at the entry point based on `window.location.pathname`; isolate the playground in `src/concepts.jsx` and `src/concepts.css` so experiments cannot destabilize homepage CSS.

**Tech Stack:** React, Framer Motion, CSS, existing ATHAR imagery/video.

**Spec:** `docs/superpowers/specs/2026-10-11-second-section-concepts.md`

## Global Constraints
- Exact eight concepts and exact order.
- Arabic-first RTL.
- Homepage content stays unchanged except temporary tester control.
- Each concept must demonstrate a distinct interaction.
- No new runtime dependency.

## Tasks
1. Add route/tester control and concepts shell.
2. Implement concepts 1–4 with scroll/pointer interactions.
3. Implement concepts 5–8 with distinct interactions and cinematic pacing.
4. Add responsive/reduced-motion behavior and run verification.
