import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
const main=fs.readFileSync(new URL('../src/main.jsx',import.meta.url),'utf8');
test('localized project data is initialized only after translation dictionary is selected',()=>{
  const tIndex=main.indexOf('const T=L[locale];');
  const projectsIndex=main.indexOf('const projects=');
  assert.ok(tIndex >= 0, 'translation selection must exist');
  assert.ok(projectsIndex > tIndex, 'projects must not reference T before T is initialized');
});
