import test from 'node:test';import assert from 'node:assert/strict';import fs from 'node:fs';
const src=fs.readFileSync(new URL('../src/main.jsx',import.meta.url),'utf8');const css=fs.readFileSync(new URL('../src/styles.css',import.meta.url),'utf8');
test('hero is explicitly two lines and has crop-safe height',()=>{assert.match(src,/hero-line[^>]*>نصمّم أثراً/);assert.match(src,/hero-line[^>]*>يبقى\./);assert.match(css,/hero-word\.hero-heading\{[^}]*height:2\.35em/)});
test('fragment copy is vertically centered and lifted clear of media',()=>{assert.match(css,/\.fragment-title\{[^}]*align-items:center/);assert.match(css,/\.fragment-copy\{[^}]*transform:translateY\(-/)});
test('comparison follows hover without click',()=>{assert.match(src,/className="compare-stage" onPointerMove=\{move\}/);assert.doesNotMatch(src,/e=>e\.buttons&&move\(e\)/)});
test('footer parallax maps scroll while footer crosses viewport',()=>{assert.match(src,/offset:\['start end','end end'\]/);assert.match(src,/\['55%','4%','0%'\]/);assert.match(css,/\.end\{[^}]*overflow:hidden/)});
