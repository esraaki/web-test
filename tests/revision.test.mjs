import test from 'node:test';import assert from 'node:assert/strict';import fs from 'node:fs';
const app=fs.readFileSync('src/App.jsx','utf8'),css=fs.readFileSync('src/styles.css','utf8');
test('requested labels and year metadata are gone',()=>{for(const s of ['05 / MATERIAL STUDIES','06 / DISCIPLINES','202{6-i%2}','padStart(2'])assert.ok(!app.includes(s),s)});
test('new real-business sections exist',()=>{for(const s of ['Approach','Journal','ابدأ مشروعاً','عرض كل المشاريع'])assert.ok(app.includes(s),s)});
test('sketch stack uses architecture drawings and hover spread',()=>{assert.ok(app.includes('1698846296220-e44d9d4b9100'));assert.ok(app.includes('1721244654210-a505a99661e9'));assert.ok(app.includes('1717250264930-9e06b67f3c82'));assert.ok(app.includes('whileHover="spread"'))});
test('nav centers and contracts',()=>{assert.match(css,/\.nav\{[^}]*left:50%[^}]*transform:translateX\(-50%\)/s);assert.match(css,/\.nav\.scrolled\{[^}]*width:min\(/s)});
test('headings avoid crop',()=>{assert.ok(css.includes('overflow:visible'));assert.ok(!css.includes('line-height:.64'))});
test('faq is white and footer continues from sky',()=>{assert.match(css,/\.faq\{[^}]*background:#fff/s);assert.ok(css.includes('1769522836633-443c1dea15c9'));assert.ok(css.includes('.footerWords'));});
