import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
const main=fs.readFileSync(new URL('../src/main.jsx',import.meta.url),'utf8');
const css=fs.readFileSync(new URL('../src/styles.css',import.meta.url),'utf8');

test('all three project cards route to their own project slugs',()=>{
  for(const slug of ['wadi-house','courtyard-house','house-of-light']) assert.match(main,new RegExp(slug));
  assert.match(main,/projectPathFor/);
});

test('internal pages include compact footer and contact page prioritizes phone and email',()=>{
  assert.match(main,/function InternalFooter/);
  assert.match(main,/contact-phone/);
  assert.match(main,/tel:/);
});

test('English layout has explicit LTR positional overrides and display font',()=>{
  assert.match(css,/family=IBM\+Plex\+Sans/);
  assert.match(css,/\.locale-en \.formation-inner\s*\{[^}]*grid-template-areas:"copy media"/s);
  assert.match(css,/\.locale-en \.time-copy\s*\{[^}]*left:4vw[^}]*right:auto/s);
  assert.match(css,/\.locale-en \.time-clock\s*\{[^}]*right:3\.5vw[^}]*left:auto/s);
  assert.match(css,/\.locale-en \.project-outline\s*\{[^}]*left:-2vw[^}]*right:auto/s);
  assert.match(css,/\.locale-en \.end-stage \.end-copy\s*\{[^}]*left:4vw[^}]*right:auto/s);
});
