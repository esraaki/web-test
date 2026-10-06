import test from 'node:test'; import assert from 'node:assert/strict'; import fs from 'node:fs';
const html=fs.existsSync('index.html')?fs.readFileSync('index.html','utf8'):'';
test('Arabic-first RTL shell',()=>{assert.match(html,/lang="ar"/);assert.match(html,/dir="rtl"/);assert.match(html,/نصمّم[\s\S]*ما يبقى/)});
test('core sections exist',()=>{for(const id of ['projects','studio','disciplines','process','faq','contact']) assert.match(html,new RegExp(`id="${id}"`))});
test('FAQ is accessible',()=>{assert.match(html,/aria-expanded="false"/);assert.match(html,/class="faq-button"/)});
test('media has fallbacks',()=>{assert.match(html,/background-image:/);assert.match(html,/alt="/)});
test('Vercel serves the generated dist directory',()=>{const config=JSON.parse(fs.readFileSync('vercel.json','utf8'));assert.equal(config.outputDirectory,'dist')});

test('Aref Ruqaa Ink display moments are white',()=>{const css=fs.readFileSync('styles.css','utf8');assert.match(css,/\.focus-copy h2\{[^}]*color:\s*(?:#fff|white)/);assert.match(css,/\.footer-cta h2 em\{[^}]*color:\s*(?:#fff|white)/)});
test('cinematic excitement layer is present',()=>{assert.match(html,/class="hero-orbit"/);assert.match(html,/class="project-marquee"/);assert.match(html,/class="focus-rail"/);const css=fs.readFileSync('styles.css','utf8');assert.match(css,/mix-blend-mode/);assert.match(css,/@keyframes\s+marquee/);assert.match(css,/\.project-card:nth-child\(2\)/)});
