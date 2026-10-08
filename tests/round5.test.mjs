import test from"node:test";import assert from"node:assert/strict";import fs from"node:fs";
const app=fs.readFileSync("src/App.jsx","utf8"),css=fs.readFileSync("src/styles.css","utf8");
test("business is coherently residential architecture",()=>{assert.match(app,/استوديو عمارة سكنية/);assert.match(app,/منازل خاصة/);assert.doesNotMatch(app,/ضيافة|فضاء ثقافي|اليوميات/)});
test("all CTA buttons share one visual system",()=>{assert.match(css,/\.actionButton\.light\{[^}]*background:#fff[^}]*color:#0b0e0f/s);assert.match(css,/\.actionButton\{[^}]*justify-content:center/s)});
test("approach choreography is fast and springy",()=>{assert.match(app,/type:"spring",stiffness:2\d\d,damping:1\d/);assert.match(app,/delay:i\*\.1[0-9]/)});
test("principles are hover-driven without dead black tail",()=>{assert.match(app,/onMouseEnter=\{\(\)=>setActive\(i\)\}/);assert.match(css,/\.principles\{height:100vh/);});
test("footer has no CTA and uses a real pale-sky photo without fake white overlay",()=>{const footer=app.slice(app.indexOf("function Footer"),app.indexOf("export default"));assert.doesNotMatch(footer,/ActionButton/);assert.match(css,/photo-1760475244813-45b6807a0a72/);assert.match(css,/\.footerMedia:after\{display:none/);});
test("footer metadata sits beside the large statement",()=>{assert.match(app,/footerLayout/);assert.match(css,/\.footerLayout\{[^}]*grid-template-columns/s)});
