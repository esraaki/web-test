import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
const main=fs.readFileSync(new URL('../src/main.jsx',import.meta.url),'utf8');
const css=fs.readFileSync(new URL('../src/styles.css',import.meta.url),'utf8');

test('scrubber blends adjacent frames instead of rounding to one frame',()=>{
  assert.ok(main.includes('drawScrubFrame'));
  assert.ok(main.includes('Math.floor(framePosition)'));
  assert.ok(main.includes('ctx.globalAlpha=blend'));
  assert.ok(!main.includes('drawFrame(Math.round(p*(TIME_FRAME_COUNT-1)))'));
});

test('clock text is updated without React state on every animation frame',()=>{
  assert.ok(main.includes('clockRef'));
  assert.ok(main.includes('clockRef.current.textContent'));
  assert.ok(!main.includes("const [clock,setClock]=useState('06:00')"));
  assert.ok(!main.includes('setClock(formatTime(p))'));
});

test('time card is top-left while copy remains top-right and moon arrives earlier',()=>{
  assert.match(css,/\.time-clock\{[^}]*left:3\.5vw;[^}]*top:4\.5vh/);
  assert.match(css,/\.time-copy\{[^}]*right:4vw/);
  assert.ok(main.includes("const moonOpacity=useTransform(scrollYProgress,[.42,.66,.9]"));
});

test('footer links move upward and buttons share premium hover treatment',()=>{
  assert.match(css,/\.end-stage \.end-links\{[^}]*bottom:calc\(1\.2vh \+ 40px\)/);
  assert.ok(css.includes('.hero-cta::before'));
  assert.ok(css.includes('.project-cta::before'));
  assert.ok(css.includes('.hero-cta:hover'));
  assert.ok(css.includes('.project-cta:hover'));
});
