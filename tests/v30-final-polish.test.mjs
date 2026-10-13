import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
const css=fs.readFileSync(new URL('../src/styles.css',import.meta.url),'utf8');
const main=fs.readFileSync(new URL('../src/main.jsx',import.meta.url),'utf8');

test('desktop day-night copy and clock share a lowered top alignment',()=>{
  assert.match(css,/V30[\s\S]*?\.time-copy\{top:22vh/);
  assert.match(css,/V30[\s\S]*?\.time-clock\{top:22vh/);
});

test('Arabic fragments heading is smaller and supporting copy is pushed farther left',()=>{
  assert.match(css,/\.locale-ar \.fragment-title h2\{font-size:clamp\(58px,7\.2vw,114px\)/);
  assert.match(css,/\.locale-ar \.fragment-copy\{transform:translateX\(-13vw\)/);
});

test('English day-night heading has authored two-line capitalization and left alignment',()=>{
  assert.match(main,/timeH1:'Light Redraws',timeH2:'The House\.'/);
  assert.match(css,/\.locale-en \.time-copy h2\{text-align:left/);
});

test('English day-night supporting copy is more prominent',()=>{
  assert.match(css,/\.locale-en \.time-copy p\{font-size:clamp\(15px,1\.15vw,18px\);font-weight:600/);
});
