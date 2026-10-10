import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
const src=fs.readFileSync(new URL('../src/main.jsx',import.meta.url),'utf8');
const css=fs.readFileSync(new URL('../src/styles.css',import.meta.url),'utf8');
test('navbar contracts into glass on scroll',()=>{assert.match(src,/scrolled/);assert.match(css,/nav\.scrolled/);assert.match(css,/backdrop-filter:blur/)});
test('instrument is interactive drawing transformation, not stock sketch video',()=>{assert.doesNotMatch(src,/SKETCH_VIDEO|sketch-video/);assert.match(src,/InteractiveDrawing/);assert.match(src,/draw-progress/)});
test('light uses architectural sunlight image',()=>{assert.match(src,/35986943/)});
