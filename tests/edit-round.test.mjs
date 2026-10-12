import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
const main=fs.readFileSync(new URL('../src/main.jsx',import.meta.url),'utf8');
const css=fs.readFileSync(new URL('../src/styles.css',import.meta.url),'utf8');
test('fragment rail copy is removed',()=>assert.ok(!main.includes('أثر — ضوء — كتلة — فراغ')));
test('hero line spacing is tightened',()=>assert.match(css,/EDIT ROUND.*?[\s\S]*?\.hero-word\.hero-heading\{[^}]*line-height:\.9[0-9]/));
test('project hover fill is clipped to button without negative stacking',()=>{assert.match(css,/\.project-cta\{[^}]*overflow:hidden/);assert.match(css,/\.project-cta::before\{[^}]*z-index:0/);assert.match(css,/\.project-cta>\*\{[^}]*z-index:1/)});
test('footer links move down 28px from v15',()=>assert.match(css,/\.end-stage \.end-links\{bottom:calc\(1\.2vh \+ 12px\)\}/));
