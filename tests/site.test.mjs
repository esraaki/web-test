import test from 'node:test'; import assert from 'node:assert/strict'; import fs from 'node:fs';
const html=fs.existsSync('index.html')?fs.readFileSync('index.html','utf8'):'';
test('Arabic-first RTL shell',()=>{assert.match(html,/lang="ar"/);assert.match(html,/dir="rtl"/);assert.match(html,/نصمّم[\s\S]*ما يبقى/)});
test('core sections exist',()=>{for(const id of ['projects','studio','disciplines','process','faq','contact']) assert.match(html,new RegExp(`id="${id}"`))});
test('FAQ is accessible',()=>{assert.match(html,/aria-expanded="false"/);assert.match(html,/class="faq-button"/)});
test('media has fallbacks',()=>{assert.match(html,/background-image:/);assert.match(html,/alt="/)});
test('Vercel serves the generated dist directory',()=>{const config=JSON.parse(fs.readFileSync('vercel.json','utf8'));assert.equal(config.outputDirectory,'dist')});
