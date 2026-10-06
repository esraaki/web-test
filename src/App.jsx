import React,{useState}from"react";
import{motion,AnimatePresence,useReducedMotion}from"framer-motion";
import{ArrowUpLeft,ChevronDown,Menu,Plus}from"lucide-react";

const media=[
"https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=2000&q=92",
"https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=2000&q=92",
"https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=2000&q=92",
"https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=2000&q=92"
];
const projects=[
["دار الوادي","الرياض","سكن خاص","2026",media[0]],
["رواق الحجر","العلا","فضاء ثقافي","2026",media[1]],
["بيت البحر","جدة","ضيافة","2025",media[2]],
["دار النخيل","الدرعية","سكن خاص","2025",media[3]]
];
const faq=["كيف تبدأون مشروعاً جديداً؟","هل تعملون خارج الرياض؟","ما مدة مرحلة التصميم؟","هل تتولون التصميم الداخلي أيضاً؟"];

function FrameMark({n="01"}){return <span className="frameMark"><i/><b>{n}</b><i/></span>}
function JellyButton(){return <motion.a className="jelly" href="#projects" whileHover={{scale:1.035}} whileTap={{scale:.96}}><span>استكشف المشاريع</span><ArrowUpLeft size={17}/><motion.i animate={{x:[0,54,0]}} transition={{duration:4,repeat:Infinity,ease:"easeInOut"}}/></motion.a>}
function MaterialBoard(){
 return <div className="materialBoard">
  {media.slice(0,3).map((x,i)=><motion.figure key={x} initial={{opacity:0,y:90,rotate:0}} whileInView={{opacity:1,y:i*17,rotate:[-5,4,-1][i]}} viewport={{once:true}} whileHover={{y:-18,rotate:0,zIndex:9}} transition={{type:"spring",stiffness:100,damping:18}}>
   <img src={x} alt="دراسة مادية للمشروع"/><figcaption><span>0{i+1}</span><b>{["حجر محلي","ظل عميق","خشب طبيعي"][i]}</b></figcaption>
  </motion.figure>)}
 </div>
}
export default function App(){
 const[activeHero,setActiveHero]=useState(0);const[open,setOpen]=useState(null);const reduce=useReducedMotion();
 return <main>
  <section className="heroLens" style={{"--hero":`url(${media[activeHero]})`}}>
   <div className="heroImage"/><div className="heroShade"/>
   <nav><a className="brand" href="#">أثَر</a><div className="navLinks"><a href="#projects">المشاريع</a><a href="#studio">الاستوديو</a><a href="#process">المنهج</a></div><button aria-label="القائمة"><Menu size={19}/></button></nav>
   <FrameMark n="01"/>
   <div className="heroCopy">
    <motion.small initial={{opacity:0,y:12}} animate={{opacity:1,y:0}}>استوديو عمارة وفضاءات — الرياض</motion.small>
    <motion.h1 initial={{opacity:0,y:80}} animate={{opacity:1,y:0}} transition={{duration:.9,ease:[.2,.8,.2,1]}}>نصمّم<br/><em className="ruqaa">ما يبقى.</em></motion.h1>
    <div className="heroBottom"><p>نصوغ العمارة من الضوء والمادة والسياق. مساحات هادئة، دقيقة، ومتجذّرة في مكانها.</p><JellyButton/></div>
   </div>
   <aside className="projectLens">
    <div className="lensTop"><span>عدسة المشروع</span><b>0{activeHero+1} / 04</b></div>
    <AnimatePresence mode="wait"><motion.div className="lensImage" key={activeHero} initial={{clipPath:"inset(0 100% 0 0)"}} animate={{clipPath:"inset(0 0 0 0)"}} exit={{opacity:0}} transition={{duration:.55}}><img src={projects[activeHero][4]} alt={projects[activeHero][0]}/><span>↗</span></motion.div></AnimatePresence>
    <div className="lensMeta"><h3>{projects[activeHero][0]}</h3><p>{projects[activeHero][1]} / {projects[activeHero][2]}</p></div>
    <div className="lensRail">{projects.map((x,i)=><button key={x[0]} className={i===activeHero?"active":""} onClick={()=>setActiveHero(i)}><span>0{i+1}</span><i/></button>)}</div>
   </aside>
   <div className="heroCoordinates">24°43′N<br/>46°40′E</div>
  </section>

  <section id="studio" className="manifest">
   <FrameMark n="02"/><div className="manifestTitle"><small>فلسفة الاستوديو</small><h2>نبدأ بالمكان،<br/>لا بالشكل.</h2></div>
   <div className="manifestBody"><span className="rule"/><p>قبل الخط الأول، نقرأ الضوء. اتجاه الريح. طريقة الحركة. ملمس المادة. العمارة عندنا ليست شكلاً يُفرض على المكان، بل إجابة تنشأ منه.</p><b>أثَر / منهج 01</b></div>
  </section>

  <section id="projects" className="projects">
   <div className="projectsHead"><FrameMark n="03"/><small>أعمال مختارة / 2025—2026</small><h2>أماكن<br/>لها حضور.</h2></div>
   <div className="projectStage">
    {projects.map((x,i)=><motion.article key={x[0]} className={`project p${i+1}`} initial={{opacity:0,y:80}} whileInView={{opacity:1,y:0}} viewport={{once:true,amount:.15}} transition={{duration:.75}}>
     <div className="projectImage"><img src={x[4]} alt={x[0]}/><span>0{i+1}</span><motion.i initial={{scale:0}} whileHover={{scale:1}}/></div>
     <div className="projectMeta"><h3>{x[0]}</h3><p>{x[1]}　{x[2]}　{x[3]}</p></div>
    </motion.article>)}
   </div>
   <div className="projectTicker"><span>أثَر / ضوء / مادة / سياق / صمت / أثَر / ضوء / مادة / سياق / صمت /</span></div>
  </section>

  <section className="focus">
   <FrameMark n="04"/><div className="focusMedia"/><div className="focusGrid"/>
   <div className="focusCopy"><small>تحت المجهر / العلا</small><h2 className="ruqaa">رواق الحجر</h2><p>كتلة هادئة تنفتح على السماء، وتستعير لونها من الصخر بدل أن تنافسه.</p></div>
   <div className="focusData"><span>24° 35′ N</span><span>38° 02′ E</span><span>1,840 م²</span></div>
  </section>

  <section id="process" className="process">
   <FrameMark n="05"/><div className="processCopy"><small>من دفاترنا</small><h2>الفكرة لا تبدأ<br/>على الشاشة.</h2><p>نختبر النسبة، الملمس والضوء باليد. العينات ليست عرضاً نهائياً؛ هي جزء من التفكير.</p></div><MaterialBoard/>
  </section>

  <section className="disciplines">
   <div className="discIntro"><FrameMark n="06"/><small>ما نصنعه</small><p>من أول كتلة حتى آخر ملمس.</p></div>
   <div className="discList">{["العمارة","التصميم الداخلي","الضيافة","الفضاءات الثقافية"].map((x,i)=><motion.div key={x} whileHover={{x:-12}}><span>0{i+1}</span><h3>{x}</h3><p>{["مساكن ومبانٍ متجذّرة في المناخ والسياق.","تفاصيل ومواد تصنع إحساس المكان من الداخل.","تجارب إقامة ذات هوية هادئة ومميزة.","أماكن عامة تُبنى حول الناس والذاكرة."][i]}</p><ArrowUpLeft/></motion.div>)}</div>
  </section>

  <section className="faq">
   <div className="faqImage"/><FrameMark n="07"/><div className="faqGlass">
    <div className="faqTitle"><small>قبل أن نبدأ</small><h2>أسئلة<br/>واضحة.</h2></div>
    <div className="faqItems">{faq.map((q,i)=><article key={q}><button onClick={()=>setOpen(open===i?null:i)} aria-expanded={open===i}><span>{q}</span><Plus className={open===i?"turn":""}/></button><AnimatePresence>{open===i&&<motion.p initial={{height:0,opacity:0}} animate={{height:"auto",opacity:1}} exit={{height:0,opacity:0}}>نبدأ بلقاء لفهم الموقع والاحتياج والميزانية. بعدها نحدد نطاقاً واضحاً، جدولاً للمراحل، وما الذي سنسلّمه في كل مرحلة.</motion.p>}</AnimatePresence></article>)}</div>
   </div>
  </section>

  <footer className="footer">
   <div className="footerImage"/><div className="footerShade"/><FrameMark n="08"/>
   <div className="footerCTA"><small>المشروع القادم</small><h2>لنبنِ شيئاً<br/><em className="ruqaa">يبقى.</em></h2><a href="mailto:hello@athar.studio">ابدأ محادثة <ArrowUpLeft/></a></div>
   <div className="footerGlass"><b className="brand">أثَر</b><div><span>الرياض، المملكة العربية السعودية</span><span>hello@athar.studio</span></div><div><a href="#projects">المشاريع</a><a href="#studio">الاستوديو</a><a href="#process">المنهج</a></div><small>© 2026 ATHAR STUDIO</small></div>
  </footer>
 </main>
}