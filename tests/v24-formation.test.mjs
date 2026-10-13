import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
const main=fs.readFileSync(new URL('../src/main.jsx',import.meta.url),'utf8');
const css=fs.readFileSync(new URL('../src/styles.css',import.meta.url),'utf8');
test('formation section is directly after hero',()=>assert.match(main,/<Hero\/><FormationSection\/><TimeOfDay\/>/));
test('formation video plays once on intersection and does not loop',()=>{
  assert.match(main,/IntersectionObserver/);
  assert.match(main,/hasPlayed\.current=true/);
  assert.match(main,/video\.play\(\)/);
  assert.doesNotMatch(main,/house-formation\.mp4"[^>]*\sloop/);
});
test('formation layout is white with copy right and media left',()=>{
  assert.match(css,/\.formation-section\{[\s\S]*?background:#fff/);
  assert.match(css,/grid-template-areas:"copy media"/);
  assert.match(css,/direction:rtl/);
});
