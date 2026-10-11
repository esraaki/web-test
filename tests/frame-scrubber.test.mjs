import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
const main=fs.readFileSync(new URL('../src/main.jsx',import.meta.url),'utf8');
const css=fs.readFileSync(new URL('../src/styles.css',import.meta.url),'utf8');
test('day-night section uses canvas frame sequence, not video seeking',()=>{
  assert.ok(main.includes('TIME_FRAME_COUNT'));
  assert.ok(main.includes('<canvas'));
  assert.ok(main.includes('requestAnimationFrame'));
  assert.ok(!main.includes('video.currentTime'));
  assert.ok(!main.includes('className="time-video"'));
});
test('frame sequence is smoothed and reversible from scroll progress',()=>{
  assert.ok(main.includes('targetProgress.current'));
  assert.ok(main.includes('displayProgress.current'));
  assert.ok(main.includes('drawFrame'));
});
test('canvas covers sticky stage',()=>{
  assert.match(css,/\.time-canvas\{[^}]*object-fit:cover/);
});
