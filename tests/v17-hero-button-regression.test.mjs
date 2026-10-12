import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
const css=fs.readFileSync(new URL('../src/styles.css',import.meta.url),'utf8');

test('hero heading lines reset inherited spacing and keep glyph-safe room',()=>{
  assert.match(css,/\.hero-heading \.hero-line\{[^}]*margin-top:\s*0[^}]*padding-left:\s*0[^}]*\}/s);
  assert.match(css,/\.hero-word\.hero-heading\{[^}]*padding-top:\s*\.2[4-9]em/s);
});

test('project CTA is a positioned clipping context for its hover layer',()=>{
  assert.match(css,/\.project-copy \.project-cta\{[^}]*position:\s*relative[^}]*overflow:\s*hidden[^}]*isolation:\s*isolate/s);
  assert.match(css,/\.project-cta::before\{[^}]*position:\s*absolute[^}]*inset:\s*0/s);
});
