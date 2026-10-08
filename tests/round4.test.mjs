import test from 'node:test';import assert from 'node:assert/strict';import fs from 'node:fs';
const app=fs.readFileSync('src/App.jsx','utf8'),css=fs.readFileSync('src/styles.css','utf8');
test('removes redundant credibility and journal',()=>{assert.ok(!app.includes('<Credibility/>'));assert.ok(!app.includes('<Journal/>'));});
test('adds cinematic principles replacement',()=>{assert.ok(app.includes('function Principles'));for(const x of ['الضوء','الظل','المادة'])assert.ok(app.includes(x));});
test('uses one CTA component system',()=>{assert.ok(app.includes('function ActionButton'));assert.ok(!app.includes('className="textLink"'));assert.ok(!app.includes('className="outlineButton"'));assert.ok(!app.includes('className="footerCta"'));});
test('headings are no longer gradient clipped rectangles',()=>{assert.ok(!css.includes('-webkit-text-fill-color:transparent'));assert.ok(css.includes('line-height:1.18'));});
test('steps are sequential and separator-free',()=>{assert.ok(app.includes('delay:i*.42'));assert.ok(!css.includes('.steps{margin-top:100px;border-top'));assert.ok(!css.includes('border-left:1px solid #ffffff35'))});
test('footer blends from white faq into pale sky',()=>{assert.ok(css.includes('linear-gradient(180deg,#fff 0%'));assert.ok(css.includes('footerMetaTop'));});
