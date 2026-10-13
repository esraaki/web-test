import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';

const main=fs.readFileSync(new URL('../src/main.jsx',import.meta.url),'utf8');
const css=fs.readFileSync(new URL('../src/styles.css',import.meta.url),'utf8');
const vercel=fs.readFileSync(new URL('../vercel.json',import.meta.url),'utf8');

test('V25 removes concepts lab and testing arrow',()=>{
  assert.ok(!main.includes("./concepts.jsx"));
  assert.ok(!main.includes('concept-tester'));
  assert.ok(!vercel.includes('/concepts'));
});

test('V25 provides Arabic and English locale routes with a language switch',()=>{
  assert.match(main,/\/en/);
  assert.match(main,/lang-switch/);
  assert.match(main,/document\.documentElement\.dir/);
  assert.match(main,/English|Wadi House/);
});

test('V25 adds project and studio pages and keeps signature homepage sections',()=>{
  assert.match(main,/WadiHousePage/);
  assert.match(main,/StudioPage/);
  assert.match(main,/FormationSection/);
  assert.match(main,/TimeOfDay/);
  assert.match(main,/PlanToSpace/);
  assert.match(css,/\.internal-page/);
});
