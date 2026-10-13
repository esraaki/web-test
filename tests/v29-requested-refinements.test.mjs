import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
const main=fs.readFileSync(new URL('../src/main.jsx',import.meta.url),'utf8');
const css=fs.readFileSync(new URL('../src/styles.css',import.meta.url),'utf8');

test('uses the regular browser cursor and removes custom cursor component',()=>{
  assert.doesNotMatch(main,/<Cursor\/>/);
  assert.doesNotMatch(css,/body\{cursor:none\}/);
  assert.doesNotMatch(css,/a,button\{cursor:none\}/);
});

test('restores original hero video and old first project image',()=>{
  assert.match(main,/const HERO_VIDEO='https:\/\/videos\.pexels\.com\/video-files\/38675652\/16428547_3840_2160_30fps\.mp4'/);
  assert.match(main,/projectWadi:'https:\/\/mavilongevity\.com\/images\/properties\/mavi-r3-50\.jpg'/);
});

test('hero headings have subtle shadow',()=>{
  assert.match(css,/\.hero h1\.hero-heading-clean\{[^}]*text-shadow:/s);
});

test('English formation heading is protected as two lines',()=>{
  assert.match(css,/\.locale-en \.formation-copy h2\{[^}]*white-space:nowrap/s);
  assert.match(css,/\.locale-en \.formation-inner\{[^}]*grid-template-columns:minmax\(430px,/s);
});

test('day-night heading is opaque white and English stays two lines',()=>{
  assert.match(css,/\.time-copy h2\{[^}]*color:#fff[^}]*opacity:1/s);
  assert.match(css,/\.locale-en \.time-copy h2\{[^}]*white-space:nowrap[^}]*font-size:clamp\(/s);
});

test('passage background line is removed and English copy sits bottom-right',()=>{
  assert.doesNotMatch(main,/<div className="passage-line"\/>/);
  assert.match(css,/\.locale-en \.passage p\{[^}]*right:4vw[^}]*bottom:/s);
  assert.match(css,/\.locale-en \.passage h2\{[^}]*padding-left:/s);
});

test('Arabic moving-row description is pushed farther left',()=>{
  assert.match(css,/\.locale-ar \.fragment-copy\{[^}]*transform:translateX\(-/s);
});
