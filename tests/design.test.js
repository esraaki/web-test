
import {describe,it,expect} from 'vitest'
import fs from 'node:fs'
const app=fs.readFileSync('src/App.jsx','utf8')
const css=fs.readFileSync('src/styles.css','utf8')
describe('approved immersive system',()=>{
 it('uses Kelo-derived interactive hero architecture',()=>{expect(app).toContain('heroLens');expect(app).toContain('heroGallery');expect(app).toContain('activeHero')})
 it('uses real motion components',()=>{expect(app).toContain('motion.');expect(app).toContain('JellyButton');expect(app).toContain('StackedCards');expect(app).toContain('AnimatePresence')})
 it('uses borrowed FAQ and Solra footer structures',()=>{expect(app).toContain('faqGlass');expect(app).toContain('footerGlass')})
 it('never gives Aref a red brown accent',()=>{expect(css).not.toMatch(/Aref[^}]*#(?:9d7450|e8d6bd)/i);expect(css).toMatch(/\.ruqaa[^}]*color:\s*#fff/i)})
})
