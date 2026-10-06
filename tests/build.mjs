import fs from 'node:fs'; import path from 'node:path';
for (const f of ['index.html','styles.css','script.js']) { if(!fs.existsSync(f)) throw new Error(`Missing ${f}`); }
fs.rmSync('dist',{recursive:true,force:true}); fs.mkdirSync('dist'); for(const f of ['index.html','styles.css','script.js']) fs.copyFileSync(f,path.join('dist',f)); console.log('Build complete: dist/');
