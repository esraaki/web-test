import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
const src=fs.readFileSync(new URL('../src/main.jsx',import.meta.url),'utf8');
const css=fs.readFileSync(new URL('../src/styles.css',import.meta.url),'utf8');

test('hero uses residential villa video and removes drag scene copy',()=>{
  assert.match(src,/38675652\/16428547_3840_2160_30fps\.mp4/);
  assert.doesNotMatch(src,/اسحب المشهد/);
});
test('instrument copy enters from right and sketch video enters from left',()=>{
  assert.match(src,/className="instrument-copy"[^>]*initial=\{\{x:'18%'/);
  assert.match(src,/className="sketch-alive"[^>]*initial=\{\{x:'-18%'/);
  assert.match(src,/14377337\/14377337-hd_1920_1080_30fps\.mp4/);
  assert.match(src,/className="sketch-video"/);
});
test('light has a local photo and passage description is larger',()=>{
  assert.match(src,/light:'\/assets\/light-villa\.jpg'/);
  assert.match(css,/\.passage p\{[^}]*font-size:clamp\(16px,1\.35vw,22px\)/);
});
test('fragments avoid the previously missing light remote and use requested blue',()=>{
  assert.match(css,/\.fragments\{[^}]*background:#084CA0/i);
  assert.doesNotMatch(src,/\[IMG\.hero,IMG\.house,IMG\.light\]/);
});
test('footer uses new uploaded building full width with faster rise and black links',()=>{
  assert.match(src,/building:'\/assets\/building-v5\.png'/);
  assert.match(src,/\[0,\.42\],\['48%','0%'\]/);
  assert.match(css,/\.end-building\{[^}]*width:100%/);
  assert.match(css,/\.end-links\{[^}]*color:#0b0b0b/);
});
test('adds interactive plan to space section',()=>{
  assert.match(src,/function PlanToSpace/);
  assert.match(src,/من المسقط.*إلى المشهد/);
  assert.match(src,/className="compare-handle"/);
  assert.match(src,/<PlanToSpace\/>/);
});
