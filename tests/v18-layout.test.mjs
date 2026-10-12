import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
const css=fs.readFileSync(new URL('../src/styles.css',import.meta.url),'utf8');
test('hero heading is moved down with safe Arabic glyph room',()=>{
  assert.match(css,/V18[\s\S]*\.hero-type\{top:17vh\}/);
  assert.match(css,/V18[\s\S]*\.hero-word\.hero-heading\{[^}]*padding-top:\.38em/);
});
test('project title and button are right aligned with breathing room',()=>{
  assert.match(css,/V18[\s\S]*\.project-copy\{[^}]*align-items:flex-end[^}]*gap:4\.6vh/);
  assert.match(css,/V18[\s\S]*\.project-copy h3\{[^}]*text-align:right/);
});
test('passage and end display headings are reduced',()=>{
  assert.match(css,/V18[\s\S]*\.passage h2\{font-size:clamp\(76px,11vw,174px\)/);
  assert.match(css,/V18[\s\S]*\.end-copy h2\{font-size:clamp\(64px,9\.2vw,142px\)/);
});
