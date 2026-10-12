import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
const src=fs.readFileSync(new URL('../src/main.jsx',import.meta.url),'utf8');
const css=fs.readFileSync(new URL('../src/styles.css',import.meta.url),'utf8');

test('navbar is RTL-positioned and menu is interactive',()=>{
 assert.doesNotMatch(src,/A—01 \/ 26/);
 assert.match(src,/menuOpen/);
 assert.match(src,/className="menu-overlay/);
 assert.match(css,/\.brand\{[^}]*order:/);
});
test('eyebrows and decorative circle are removed',()=>{
 assert.doesNotMatch(src,/className="kicker"|project-top|PROJECT —|SELECTED RESIDENCE|ARCH \/ 2026|PRIVATE HOUSE|أثــر \/ ٢٠٢٦/);
 assert.doesNotMatch(src,/className="diagram"|className="orb"/);
});
test('instrument copy is pushed right and uses a real sketch photograph',()=>{
 assert.match(src,/drawing-paper/);
 assert.match(src,/كل خط قرار/);
 assert.match(css,/\.instrument-copy p\{[^}]*margin-right:0/);
});
test('project calls to action are buttons',()=>{
 assert.match(src,/className="project-cta"/);
 assert.doesNotMatch(src,/VIEW PROJECT/);
});
test('hero title animates as one Arabic word with blinds',()=>{
 assert.doesNotMatch(src,/heroLetters/);
 assert.match(src,/hero-word/);
 assert.match(src,/blind-slice/);
});
test('light shadow material has Arabic context and no English labels',()=>{
 assert.match(src,/الضوء والظل والمادة/);
 assert.doesNotMatch(src,/LIGHT \/ 01|SHADOW \/ 02|MATTER \/ 03/);
});
test('passage reveal completes earlier',()=>{
 assert.match(src,/\[\.08,\.48\]/);
});
test('fragments and footer share sky blue continuity and footer links sit at bottom',()=>{
 assert.match(css,/\.fragments\{[^}]*background:#084CA0/i);
 assert.match(css,/\.end-links\{[^}]*bottom:/);
});
