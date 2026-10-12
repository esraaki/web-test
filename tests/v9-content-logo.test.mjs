import test from 'node:test';import assert from 'node:assert/strict';import fs from 'node:fs';
const src=fs.readFileSync(new URL('../src/main.jsx',import.meta.url),'utf8');const css=fs.readFileSync(new URL('../src/styles.css',import.meta.url),'utf8');
test('architectural logo is used in navbar',()=>{assert.match(src,/logo-athar\.png/);assert.match(src,/className="brand-logo"/)});
test('hero has longer animated heading, subheading and CTA',()=>{assert.match(src,/نصمّم أثراً يبقى/);assert.match(src,/hero-sub/);assert.match(src,/hero-cta/);assert.match(src,/blind-slice/)});
test('words overlay is reduced',()=>{assert.match(css,/\.words:after\{[^}]*background:rgba\(0,0,0,\.28\)/)});
test('fragments old sentence removed and richer copy sits beside heading',()=>{assert.doesNotMatch(src,/لقطات، خامات، خطوط، وظلال/);assert.match(src,/fragment-copy/)});
test('comparison title is shorter and copy richer',()=>{assert.doesNotMatch(src,/من المسقط<br\/>إلى المشهد/);assert.match(src,/من الرسم<br\/>إلى الواقع/);assert.match(src,/قبل أن يصبح البيت حجراً وزجاجاً/)});
