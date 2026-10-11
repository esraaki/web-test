import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
const src=fs.readFileSync(new URL('../src/main.jsx',import.meta.url),'utf8');
const css=fs.readFileSync(new URL('../src/styles.css',import.meta.url),'utf8');

test('hero is lower and CTA stacks below subheading',()=>{
  assert.match(css,/\.hero-type\{top:16vh\}/);
  assert.match(css,/\.hero-content\{display:flex;flex-direction:column/);
  assert.match(css,/\.hero-cta\{margin-top:2\.1vh\}/);
});
test('project title and CTA form a top-aligned vertical group',()=>{
  assert.match(src,/className="project-copy"/);
  assert.match(css,/\.project-copy\{[^}]*top:10vh[^}]*flex-direction:column/s);
  assert.match(css,/\.project-copy h3\{font-size:clamp\(58px,8vw,128px\)/);
  assert.match(css,/\.project-copy \.project-cta\{position:static/);
});
test('footer uses the two newly uploaded layers',()=>{
  assert.match(src,/footer-sky-v11\.png/);
  assert.match(src,/footer-building-v11\.png/);
  assert.match(src,/className="end-stage"/);
});
test('footer rise begins on viewport entry and moves building from below to final position',()=>{
  assert.match(src,/offset:\['start end','end end'\]/);
  assert.match(src,/\['105%','5%','0%'\]/);
  assert.match(css,/\.end-stage \.end-building\{[^}]*bottom:0/s);
});
