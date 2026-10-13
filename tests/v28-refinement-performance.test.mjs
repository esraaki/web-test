import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';

const main=fs.readFileSync(new URL('../src/main.jsx',import.meta.url),'utf8');
const css=fs.readFileSync(new URL('../src/styles.css',import.meta.url),'utf8');

test('hero video is local and optimized for fast first paint',()=>{
  assert.match(main,/const HERO_VIDEO='\/assets\/hero-optimized\.mp4'/);
  assert.match(main,/preload="metadata"/);
});
test('formation media defers its heavy video until needed',()=>{
  assert.match(main,/house-formation\.mp4/);
  assert.match(main,/preload="none"/);
});
test('Arabic formation copy is intentional and protected as two lines',()=>{
  assert.match(main,/formH1:'البيت يبدأ'/);
  assert.match(main,/formH2:'من المكان\.'/);
  assert.match(css,/\.locale-ar \.formation-copy h2[\s\S]*?white-space:nowrap/);
});
test('Arabic fragments title has room to remain two designed lines',()=>{
  assert.match(css,/\.locale-ar \.fragment-title\{[^}]*width:min\(72vw,980px\)/);
  assert.match(css,/\.locale-ar \.fragment-title h2[\s\S]*?white-space:nowrap/);
});
test('Arabic draggable comparison heading is smaller and constrained',()=>{
  assert.match(css,/\.locale-ar \.compare-copy h2[\s\S]*?font-size:clamp\(48px,6\.2vw,98px\)/);
  assert.match(css,/\.locale-ar \.compare-copy h2[\s\S]*?max-width:10em/);
});
test('custom cursor remains visible over both light and dark sections',()=>{
  assert.match(css,/\.cursor\{[^}]*mix-blend-mode:difference/);
});
test('English headings use IBM Plex Sans rather than Syne',()=>{
  assert.match(css,/family=IBM\+Plex\+Sans/);
  assert.match(css,/font-family:'IBM Plex Sans'/);
});
