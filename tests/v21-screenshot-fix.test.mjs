import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
const main=fs.readFileSync(new URL('../src/main.jsx',import.meta.url),'utf8');
const css=fs.readFileSync(new URL('../src/styles.css',import.meta.url),'utf8');
test('hero parallax no longer drives title into viewport edge',()=>assert.ok(main.includes("['0%','-1.5%']")));
test('hero content keeps exact 40px relationship',()=>assert.match(css,/\/\* V21[\s\S]*?\.hero-content\{\s*margin-top:40px;/));
test('project heading and CTA share RTL flex-start edge at 32px gap',()=>{const v=css.split('/* V21')[1];assert.match(v,/\.project-copy\{[\s\S]*?align-items:flex-start;[\s\S]*?gap:32px;[\s\S]*?direction:rtl;/);assert.match(v,/\.project-copy \.project-cta\{\s*align-self:flex-start;/)});
