import React from 'react';
import { createRoot } from 'react-dom/client';
import { SectionSublevelStudioFooters } from '@designcodeio/threeui';
import '@designcodeio/threeui/style.css';
import './site.css';

const work=[['01','Nadir','Identity + Digital','2026'],['02','Field Notes','Editorial System','2026'],['03','Mono/Space','Web + Motion','2025']];
function App(){return <main>
<nav><a className="brand" href="#">OBLIQUE®</a><div className="navlinks"><a href="#work">Work</a><a href="#studio">Studio</a><a href="#contact">Contact</a></div></nav>
<section className="hero"><p className="eyebrow">Independent creative studio · Cairo / Everywhere</p><h1>We build identities<br/>with <em>gravity.</em></h1><div className="hero-bottom"><p>Strategy, identity and digital experiences for people building things worth noticing.</p><span>↓ Selected work</span></div></section>
<section id="work" className="work"><div className="section-head"><span>Selected work</span><span>2025—26</span></div>{work.map(x=><a className="project" href="#" key={x[0]}><span>{x[0]}</span><strong>{x[1]}</strong><span>{x[2]}</span><span>{x[3]} ↗</span></a>)}</section>
<section id="studio" className="statement"><p>Small by design.</p><h2>We work where brand, culture and technology overlap — turning sharp ideas into systems that can actually live in the world.</h2><div className="statement-grid"><span>Strategy<br/>Art direction<br/>Identity</span><span>Web design<br/>Creative development<br/>Motion</span><span>Available for select<br/>collaborations in 2027.</span></div></section>
<section className="transition"><span>Stay curious.</span><span>Keep scrolling ↓</span></section>
<div id="contact" className="shader-frame"><SectionSublevelStudioFooters /></div>
</main>}
createRoot(document.getElementById('root')!).render(<App/>);
