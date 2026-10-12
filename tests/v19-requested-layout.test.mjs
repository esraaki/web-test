import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
const css=fs.readFileSync(new URL('../src/styles.css',import.meta.url),'utf8');
test('V19 requested layout overrides exist',()=>{
  assert.match(css,/V19 — screenshot-verified layout corrections/);
  assert.match(css,/\.hero-type\{top:22vh/);
  assert.match(css,/\.project-copy\{[^}]*align-items:flex-start[^}]*gap:6vh/s);
  assert.match(css,/\.project-copy h3\{[^}]*text-align:right/s);
  assert.match(css,/\.project-copy \.project-cta\{[^}]*align-self:flex-start/s);
  assert.match(css,/\.passage h2\{font-size:clamp\(68px,9\.8vw,156px\)/);
  assert.match(css,/\.end-copy h2\{font-size:clamp\(58px,8\.2vw,128px\)/);
});
