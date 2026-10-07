import test from "node:test";import assert from "node:assert/strict";import fs from"node:fs";
const read=p=>fs.existsSync(p)?fs.readFileSync(p,"utf8"):"";
test("cinematic journey source contract",()=>{
 const app=read("src/App.jsx"),css=read("src/styles.css"),pkg=read("package.json");
 for(const x of ["Hero","Manifesto","Projects","ProjectChapter","Process","Disciplines","Faq","Footer"])assert.match(app,new RegExp(x));
 assert.match(css,/font-weight:\s*(600|700)/);assert.doesNotMatch(css,/font-weight:\s*300/);
 assert.match(css,/\.ruqaa[^}]*color:\s*#fff/);assert.doesNotMatch(css,/#(?:e8d6bd|9d7450|d9ff43|ff0000)/i);
 for(const x of ["position:sticky","backdrop-filter","clip-path","perspective","scroll-snap"])assert.ok(css.includes(x),x);
 for(const x of ["useScroll","useTransform","AnimatePresence","JellyButton","MaterialStack","ProjectLens"])assert.ok(app.includes(x),x);
 assert.match(pkg,/framer-motion/);
});
