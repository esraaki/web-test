import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
const main=fs.readFileSync(new URL('../src/main.jsx',import.meta.url),'utf8');
const css=fs.readFileSync(new URL('../src/styles.css',import.meta.url),'utf8');
test('hero uses unclipped two-line heading rather than sliced clip masks',()=>{
  assert.ok(main.includes('className="hero-heading-clean"'));
  assert.ok(!main.includes('blinds.map'));
});
test('project action is rebuilt with a new class',()=>{
  assert.ok(main.includes('project-action-new'));
  assert.ok(!main.includes('className="project-cta"'));
});
test('project copy has full deterministic right alignment and 32px action gap',()=>{
  assert.match(css,/\.project-copy\{[^}]*width:90vw[^}]*text-align:right/s);
  assert.match(css,/\.project-action-new\{[^}]*margin-top:32px[^}]*margin-left:auto[^}]*margin-right:0/s);
});
