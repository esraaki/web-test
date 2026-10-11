import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
const main=fs.readFileSync(new URL('../src/main.jsx',import.meta.url),'utf8');
const css=fs.readFileSync(new URL('../src/styles.css',import.meta.url),'utf8');
test('old line-to-space section is removed from home',()=>{assert.ok(!main.includes('<Instrument/>'));assert.ok(main.includes('<TimeOfDay/>'));});
test('time section scrubs a local video from scroll progress',()=>{assert.ok(main.includes("TIME_VIDEO='/assets/day-night-scroll.mp4'"));assert.match(main,/video\.currentTime/);assert.match(main,/scrollYProgress/);});
test('time section has synchronized designed clock',()=>{assert.ok(main.includes('time-clock'));assert.ok(main.includes('formatTime'));assert.ok(main.includes('06:00'));assert.ok(main.includes('22:00'));});
test('section is sticky and has reduced-motion fallback',()=>{assert.match(css,/\.time-section\{[^}]*height:/);assert.match(css,/\.time-stage\{[^}]*position:sticky/);assert.match(css,/@media\s*\(prefers-reduced-motion:\s*reduce\)/);});
