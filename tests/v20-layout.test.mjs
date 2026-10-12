import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
const css=fs.readFileSync(new URL('../src/styles.css',import.meta.url),'utf8');
const main=fs.readFileSync(new URL('../src/main.jsx',import.meta.url),'utf8');

test('V20 hero uses a 40px heading-to-copy gap and glyph-safe heading box',()=>{
  assert.match(css,/\/\* V20 — exact hero\/project alignment \*\/[\s\S]*\.hero-content\{margin-top:40px/);
  assert.match(css,/\/\* V20 — exact hero\/project alignment \*\/[\s\S]*\.hero-word\.hero-heading\{[\s\S]*padding-top:\.62em/);
  assert.match(css,/\/\* V20 — exact hero\/project alignment \*\/[\s\S]*\.hero-heading \.blind-slice\{[\s\S]*inset:-\.14em 0/);
  assert.ok(main.includes('i*11.111-6')); // slice masks overlap so Arabic marks are not clipped
});

test('V20 project title and button share the same physical right edge with 32px gap',()=>{
  assert.match(css,/\/\* V20 — exact hero\/project alignment \*\/[\s\S]*\.project-copy\{[\s\S]*gap:32px/);
  assert.match(css,/\/\* V20 — exact hero\/project alignment \*\/[\s\S]*\.project-copy h3\{[\s\S]*margin-right:0/);
  assert.match(css,/\/\* V20 — exact hero\/project alignment \*\/[\s\S]*\.project-copy \.project-cta\{[\s\S]*margin-right:0/);
});
