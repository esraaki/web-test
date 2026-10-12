import test from 'node:test';import assert from 'node:assert/strict';import fs from 'node:fs';
const src=fs.readFileSync(new URL('../src/main.jsx',import.meta.url),'utf8');
const css=fs.readFileSync(new URL('../src/styles.css',import.meta.url),'utf8');
test('cinematic scenes exist',()=>{for(const name of ['Hero','Instrument','Projects','Words','Passage','Fragments','End'])assert.match(src,new RegExp(`function ${name}`))});
test('interaction system exists',()=>{assert.match(src,/useScroll/);assert.match(src,/data-cursor/);assert.match(src,/useTransform/);assert.match(src,/InteractiveDrawing/)});
test('rtl and responsive visual system',()=>{assert.match(css,/Noto Kufi Arabic/);assert.match(css,/@media\(max-width:800px\)/);assert.match(css,/position:sticky/)});
