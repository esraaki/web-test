import test from"node:test";import assert from"node:assert/strict";import fs from"node:fs";
const app=fs.readFileSync("src/App.jsx","utf8"),css=fs.readFileSync("src/styles.css","utf8");
test("requested content removals",()=>{for(const s of["24°43′N","ضوء الصباح","استوديو عمارة وفضاءات / الرياض","SCROLL","02 — PHILOSOPHY","أثَر / منهج 01","03 / SELECTED WORK","07 / STUDIO","08 / BEFORE WE BEGIN","اخلط المواد"])assert.ok(!app.includes(s),s)});
test("hero card and dedicated Riwaq chapter removed",()=>{assert.ok(!app.includes("ProjectLens"));assert.ok(!app.includes("function ProjectChapter"))});
test("new interactions exist",()=>{assert.ok(app.includes("<motion.video"));assert.ok(app.includes("useMotionValueEvent"));assert.ok(app.includes("AnimatedNumber"));assert.ok(app.includes("onClick={shuffle}"))});
test("visual requirements exist",()=>{assert.ok(css.includes("linear-gradient"));assert.ok(css.includes(".nav.scrolled"));assert.ok(css.includes("perspective:1400px"));assert.ok(css.includes("color:#fff"));});
