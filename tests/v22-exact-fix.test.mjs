import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
const css=fs.readFileSync(new URL('../src/styles.css',import.meta.url),'utf8');
test('hero content margin is exactly zero in final override',()=>assert.match(css,/V22[\s\S]*?\.hero-content\{\s*margin-top:0 !important;/));
test('project content shares right edge and 32px gap',()=>{
  const v22=css.slice(css.lastIndexOf('/* V22'));
  assert.match(v22,/\.project-copy\{[\s\S]*?width:max-content;[\s\S]*?align-items:flex-end !important;[\s\S]*?gap:32px !important;/);
  assert.match(v22,/\.project-copy h3,[\s\S]*?\.project-copy \.project-cta\{[\s\S]*?align-self:flex-end !important;/);
});
