import React,{useEffect,useRef,useState} from 'react';
import {createRoot} from 'react-dom/client';
import {AnimatePresence,motion,useScroll,useTransform} from 'framer-motion';
import './styles.css';

const IMG={
 hero:'https://mavilongevity.com/images/properties/mavi-r3-50.jpg',
 courtyard:'https://static.spacecrafted.com/fa3c03d2f10d42bfb8bfdd0889cf1089/i/e9f952ad1909484ea69dcb9385c7b0ee/1/GCuCv726gZycFxatRCb7iU/ES11.jpg',
 plan:'/assets/compare-sketch.png',
 house:'https://images.divisare.com/images/f_auto%2Cq_auto%2Cw_auto/v1627307021/llnyyh02bhiawbk3cxtx/grupo-studio-gonzalo-viramonte-casa-si.jpg',
 desert:'https://morphome.app/assets/renders/concrete-desert-house.jpg',
 light:'https://www.mlarquitectura.cat/wp-content/uploads/2024/05/2020-07-31-09.41.21-scaled.jpg',
 shadow:'https://images.divisare.com/images/c_limit%2Cf_auto%2Ch_2000%2Cq_auto%2Cw_3000/v1468257182/w72llzpljwrj1rrxdjsw/bernardo-rosello-ramiro-sosa-house-in-palihue.jpg',
 material:'https://assets.zyrosite.com/cdn-cgi/image/format%3Dauto%2Cw%3D1600%2Ch%3D1600%2Cfit%3Dcrop/AwvMxLX1xRFrbD2m/trawertyn-na-elewacje-classico-jasny-kamien-naturalny-wloski-mxBZW2bREKCrJNyx.jpeg',
 sky:'/assets/footer-sky-v11.png',
 building:'/assets/footer-building-v11.png',
 compareSketch:'/assets/compare-sketch.png',
 compareRender:'/assets/compare-render.png',
 logo:'/assets/logo-athar.png',
 projectWadi:'https://www.prostoria.com/dnl5jhinu/image/upload/c_limit%2Cw_1800/f_webp/q_auto/v1/courtyard_house_000_kks5s6rrw5ycdnhjctqo_jpg?_a=BAVAZGE70',
 projectCourtyard:'https://images.squarespace-cdn.com/content/v1/5b9048065417fcb37adf73aa/1690296901679-YU4G68W9SWYCK9REUSKQ/image.jpg?format=1500w',
 projectLight:'https://cdn.stylepark.com/articles/17_RESIDENTIAL_TOWN_White_Breeze_10_180924_141646.jpg?focal=none&mtime=20180924141645',
 filmStair:'https://images.squarespace-cdn.com/content/v1/601c42f67c056720ada8f332/1e00c9f9-b2bf-431f-a8cf-f551f9a6d42e/Livability-Cover.jpg?format=1000w',
 filmInterior:'https://images.divisare.com/images/f_auto%2Cq_auto%2Cw_auto/v1656064466/aduakdlvyr1qy5q7gp5u/muka-arquitectura-javier-callejas-sevilla-lantern-house.jpg',
 filmShadow:'https://images.unsplash.com/photo-1563891925196-a3e34f6d869c?auto=format&fit=crop&fm=jpg&q=85&w=1800',
 filmCourt:'https://coohom-biz-sg-s3.coohom.com/ins/static/case/planta-casa-formato-l-exemplo-1777387205853085500.jpg?processFlag=true&x-oss-process=image%2Fformat%2Cwebp',
 filmConcrete:'https://architectureprizecom.s3-us-west-2.amazonaws.com/uploads/87393/22-8441-20/full/f0a5fd90cbdb8d8be94668b147ffa0b2.jpg'
};
const HERO_VIDEO='https://videos.pexels.com/video-files/38675652/16428547_3840_2160_30fps.mp4';
const TIME_FRAME_COUNT=90;
const timeFrameSrc=i=>`/assets/day-night-frames/frame-${String(i+1).padStart(3,'0')}.webp`;

const cleanPath=window.location.pathname.replace(/\/$/,'')||'/';
const locale=cleanPath==='/en'||cleanPath.startsWith('/en/')?'en':'ar';
const isEn=locale==='en';
document.documentElement.lang=locale;
document.documentElement.dir=isEn?'ltr':'rtl';
document.body.classList.toggle('locale-en',isEn);
document.body.classList.toggle('locale-ar',!isEn);
const L={
 ar:{
  menu:'القائمة',close:'إغلاق',open:'فتح',projects:'المشاريع',studio:'الاستوديو',method:'المنهج',contact:'تواصل معنا',menuNote:'عمارة تُقرأ بالحركة، والضوء، والفراغ.',
  hero1:'نصمّم أثراً',hero2:'يبقى.',heroSub:'نصمّم بيوتاً معاصرة تبدأ من طريقة العيش، وتتشكل حول الضوء والمادة والمكان.',heroCta:'استكشف المشاريع',
  formH1:'من الأرض،',formH2:'يتشكّل البيت.',formP:'نبدأ بما يحتاجه المكان فعلاً، ثم نبني الكتلة والفتحات والتفاصيل حول الضوء والحركة والحياة اليومية.',
  timeH1:'الضوء',timeH2:'يعيد رسم البيت.',timeP:'العمارة لا تُرى بالطريقة نفسها مرتين. مرّر الوقت لترى كيف يعيد الضوء رسم الكتلة والفراغ.',
  projectNames:['دار الوادي','بيت الساحة','دار النور'],viewProject:'شاهد المشروع',
  wordsH:'ما يصنع حضور المكان',wordsP:'لا نتعامل معها كطبقات تجميلية. الضوء يحدد الإيقاع، والظل يصنع العمق، والمادة تمنح المكان حضوره وذاكرته.',words:['الضوء','الظل','المادة'],show:'عرض',
  passage:['حدود','تفتح،','ولا تفصل.'],passageP:'نصمّم الحدود لتعمل في الاتجاهين: تحمي الداخل، وتفتح البيت على السماء والحديقة والضوء.',
  fragH:['كل خطوة','تغيّر المشهد.'],frag1:'نصمّم البيت كسلسلة من التجارب، لا كواجهة واحدة: لحظة الوصول، العبور، الالتفاف، والانفتاح على الخارج.',frag2:'تتغيّر القراءة مع كل خطوة وكل ساعة. لذلك نختبر الكتلة والفتحات والمواد كجزء من مشهد يتحرك معك.',
  compareH:['الفكرة نفسها.','من الخط إلى الحجر.'],compareP:'نختبر النِّسب والفتحات والظل قبل أن تصبح الفكرة حجراً وزجاجاً. اسحب الخط لترى كيف تبقى لغة المشروع واضحة من القرار الأول حتى المشهد النهائي.',plan:'المسقط',scene:'المشهد',move:'حرّك',
  endH:['بيتٌ يبقى','في الذاكرة.'],seeProjects:'مشاهدة المشاريع ↗',contactUs:'تواصل معنا ↗',
  projectTitle:'دار الوادي',projectKicker:'منزل خاص · 2026',projectIntro:'بيت هادئ يتبع امتداد الأرض، ويجمع بين الظل العميق، الحجر الفاتح، وانفتاح محسوب على الحديقة.',projectStoryH:'بيت يتنفس مع الضوء.',projectStoryP:'صُمّمت دار الوادي حول إيقاع يومي بسيط: مساحات مشتركة مفتوحة، انتقالات واضحة بين الداخل والخارج، وواجهات تحمي الخصوصية من دون أن تعزل البيت عن محيطه.',projectFact1:'النوع',projectFact1v:'سكن خاص',projectFact2:'المساحة',projectFact2v:'420 م²',projectFact3:'الحالة',projectFact3v:'تصميم مفاهيمي',backHome:'العودة للرئيسية',
  studioTitle:'أثر. عمارة تبدأ من الإنسان.',studioIntro:'أثر استوديو معماري مستقل يركز على البيوت المعاصرة والمساحات السكنية الهادئة. نعمل من الفكرة الأولى حتى اللغة البصرية النهائية للمشروع.',studioH:'منهجنا',studioP:'نبدأ بالاحتياج والموقع، ثم نختبر الكتلة والحركة والضوء قبل التفاصيل. النتيجة ليست أسلوباً ثابتاً، بل بيتاً واضحاً في فكرته ومريحاً في حياته اليومية.',contactH:'تواصل معنا.',contactP:'إذا كنت تخطط لبيت جديد أو تريد إعادة التفكير في مساحة قائمة، أرسل لنا نبذة قصيرة عن المشروع.',email:'hello@athar.studio',phone:'+20 (0) 100 000 0000',location:'القاهرة · مصر',footerNote:'أثر — استوديو معماري مستقل'
 },
 en:{
  menu:'Menu',close:'Close',open:'Open',projects:'Projects',studio:'Studio',method:'Approach',contact:'Contact',menuNote:'Architecture shaped by movement, light and space.',
  hero1:'We design spaces',hero2:'that stay with you.',heroSub:'Contemporary homes shaped around the way you live — with light, material and place doing the quiet work.',heroCta:'Explore projects',
  formH1:'From the ground,',formH2:'a home takes shape.',formP:'We begin with what the place truly needs, then shape mass, openings and detail around light, movement and everyday life.',
  timeH1:'Light',timeH2:'redraws the house.',timeP:'Architecture never looks exactly the same twice. Move through the day and watch light redraw mass and space.',
  projectNames:['Wadi House','Courtyard House','House of Light'],viewProject:'View project',
  wordsH:'What gives a place presence',wordsP:'We do not treat them as decorative layers. Light sets the rhythm, shadow creates depth, and material gives a place its presence and memory.',words:['Light','Shadow','Material'],show:'View',
  passage:['Boundaries','that open,','not divide.'],passageP:'We design boundaries to work both ways: protecting the interior while opening the home to sky, garden and light.',
  fragH:['Every step','changes the view.'],frag1:'We design a home as a sequence of experiences, not a single façade: arrival, passage, turning, and opening to the outside.',frag2:'Its reading changes with every step and every hour. Mass, openings and material are tested as part of a scene that moves with you.',
  compareH:['One idea.','From line to stone.'],compareP:'We test proportion, openings and shadow before an idea becomes stone and glass. Drag the line to see how the project language survives from the first decision to the final scene.',plan:'Plan',scene:'View',move:'Move',
  endH:['A home','that stays with you.'],seeProjects:'View projects ↗',contactUs:'Start a conversation ↗',
  projectTitle:'Wadi House',projectKicker:'Private residence · 2026',projectIntro:'A quiet home that follows the land, balancing deep shade, pale stone and a measured openness to the garden.',projectStoryH:'A home that breathes with the light.',projectStoryP:'Wadi House is organized around a simple daily rhythm: generous shared spaces, clear transitions between inside and out, and façades that protect privacy without disconnecting the home from its surroundings.',projectFact1:'Type',projectFact1v:'Private residence',projectFact2:'Area',projectFact2v:'420 m²',projectFact3:'Status',projectFact3v:'Concept design',backHome:'Back home',
  studioTitle:'ATHAR. Architecture starts with people.',studioIntro:'ATHAR is an independent architecture studio focused on contemporary homes and calm residential spaces. We work from the first idea through the project’s final visual language.',studioH:'Our approach',studioP:'We begin with need and place, then test mass, movement and light before detail. The result is not a fixed style, but a home with a clear idea and an effortless everyday life.',contactH:'Get in touch.',contactP:'Planning a new home or rethinking an existing space? Send us a short note about what you have in mind.',email:'hello@athar.studio',phone:'+20 (0) 100 000 0000',location:'Cairo · Egypt',footerNote:'ATHAR — Independent architecture studio'
 }
};
const T=L[locale];
const PROJECTS={
 'wadi-house':{number:'01',image:IMG.projectWadi,storyImage:IMG.filmCourt,ar:{title:'دار الوادي',kicker:'منزل خاص · 2026',intro:'بيت منخفض يمتد مع الأرض، ويصنع خصوصيته بالظل والفتحات المدروسة لا بالانغلاق.',storyH:'الهدوء هنا قرار معماري.',storyP:'تتجمع مساحات المعيشة حول حديقة داخلية هادئة. الواجهات الطويلة والظلال العميقة تخفف حرارة الضوء، بينما يحافظ الحجر الفاتح والخشب على إحساس دافئ وبسيط.',area:'420 م²'},en:{title:'Wadi House',kicker:'Private residence · 2026',intro:'A low, grounded home that creates privacy through shade and carefully placed openings rather than enclosure.',storyH:'Quietness, designed in.',storyP:'Living spaces gather around a calm inner garden. Long façades and deep shade soften the sun, while pale stone and timber keep the house warm, tactile and restrained.',area:'420 m²'}},
 'courtyard-house':{number:'02',image:IMG.projectCourtyard,storyImage:IMG.filmInterior,ar:{title:'بيت الساحة',kicker:'منزل خاص · 2026',intro:'منزل تُصبح فيه الساحة قلب الحياة اليومية، وتلتف حولها الغرف بدلاً من أن تتوزع على ممرات مغلقة.',storyH:'الخارج جزء من البيت.',storyP:'تعمل الساحة كغرفة مفتوحة على السماء: تربط المعيشة والطعام والمساحات الخاصة، وتمنح كل جزء ضوءاً وتهوية من دون التضحية بالخصوصية.',area:'360 م²'},en:{title:'Courtyard House',kicker:'Private residence · 2026',intro:'A home where the courtyard becomes the center of daily life, with rooms gathering around it instead of a closed corridor.',storyH:'Outside is part of the plan.',storyP:'The courtyard works as an open-air room, connecting living, dining and private spaces while bringing daylight and air deep into the house without giving up privacy.',area:'360 m²'}},
 'house-of-light':{number:'03',image:IMG.projectLight,storyImage:IMG.filmStair,ar:{title:'دار النور',kicker:'منزل خاص · 2026',intro:'كتلة بيضاء بسيطة صُمّمت حول حركة الشمس، حيث تصنع الفتحات العميقة مشهداً مختلفاً على مدار اليوم.',storyH:'الضوء هو المادة الرابعة.',storyP:'بدلاً من إضافة التفاصيل، يعتمد البيت على النِّسب والعمق والظل. تتغير الواجهات مع الساعات، وتتحول الفتحات إلى أدوات ترسم الضوء داخل المساحات.',area:'310 م²'},en:{title:'House of Light',kicker:'Private residence · 2026',intro:'A simple white volume shaped around the path of the sun, with deep openings creating a different scene throughout the day.',storyH:'Light is the fourth material.',storyP:'Rather than adding detail, the house relies on proportion, depth and shadow. Its façades change by the hour, while openings become instruments for drawing light through the interior.',area:'310 m²'}}
};
const projects=Object.entries(PROJECTS).map(([slug,p])=>[p.number,p[locale].title,p.image,slug]);
const projectPathFor=slug=>isEn?`/en/project/${slug}`:`/project/${slug}`;
const homePath=isEn?'/en':'/';
const studioPath=isEn?'/en/studio':'/studio';
const otherLocalePath=()=>{
 const p=cleanPath;
 if(isEn) return p==='/en'?'/':p.replace(/^\/en/,'')||'/';
 return p==='/'?'/en':`/en${p}`;
};

function Cursor(){const [p,setP]=useState({x:-100,y:-100});const [mode,setMode]=useState('');const [seen,setSeen]=useState(false);useEffect(()=>{const m=e=>{setSeen(true);setP({x:e.clientX,y:e.clientY})};const o=e=>setMode(e.target.closest('[data-cursor]')?.dataset.cursor||'');window.addEventListener('mousemove',m);window.addEventListener('mouseover',o);return()=>{window.removeEventListener('mousemove',m);window.removeEventListener('mouseover',o)}},[]);return <motion.div className={'cursor '+(seen?'seen ':'')+(mode?'active':'')} animate={{x:p.x-20,y:p.y-20}} transition={{type:'spring',damping:28,stiffness:450,mass:.2}}><i/><b>{mode}</b></motion.div>}
function Nav(){const [menuOpen,setMenuOpen]=useState(false);const [scrolled,setScrolled]=useState(false);useEffect(()=>{const onScroll=()=>setScrolled(window.scrollY>72);onScroll();window.addEventListener('scroll',onScroll,{passive:true});return()=>window.removeEventListener('scroll',onScroll)},[]);const links=[[T.projects,`${homePath}#projects`],[T.studio,studioPath],[T.method,`${homePath}#approach`],[T.contact,`${studioPath}#contact`]];return <><nav className={scrolled?'scrolled':''}><a className="brand" href={homePath} aria-label="ATHAR"><img className="brand-logo" src={IMG.logo} alt="ATHAR"/></a><div className="nav-actions"><a className="lang-switch" href={otherLocalePath()}>{isEn?'AR':'EN'}</a><button className="menu-trigger" data-cursor={menuOpen?T.close:T.open} onClick={()=>setMenuOpen(v=>!v)}><span>{menuOpen?'×':'＋'}</span> {T.menu}</button></div></nav><AnimatePresence>{menuOpen&&<motion.div className="menu-overlay" initial={{clipPath:'inset(0 0 100% 0)'}} animate={{clipPath:'inset(0 0 0% 0)'}} exit={{clipPath:'inset(0 0 100% 0)'}} transition={{duration:.7,ease:[.76,0,.24,1]}}><div className="menu-grid"/><div className="menu-ghost">ATHAR</div><div className="menu-links">{links.map((x,i)=><motion.a key={x[0]} href={x[1]} data-cursor="↗" initial={{y:80,opacity:0}} animate={{y:0,opacity:1}} transition={{delay:.18+i*.08,duration:.6}}><span>{String(i+1).padStart(2,'0')}</span>{x[0]}<i>↗</i></motion.a>)}</div><p className="menu-note">{T.menuNote}</p></motion.div>}</AnimatePresence></>}
function Hero(){const ref=useRef();const {scrollYProgress}=useScroll({target:ref,offset:['start start','end start']});const scale=useTransform(scrollYProgress,[0,1],[1,1.06]);const typeY=useTransform(scrollYProgress,[0,1],['0%','-1.5%']);return <section className="hero" ref={ref}><motion.video className="hero-video" autoPlay muted loop playsInline src={HERO_VIDEO} style={{scale}} initial={{opacity:0}} animate={{opacity:1}} transition={{duration:2.1,delay:.1,ease:'easeOut'}}/><motion.div className="hero-darkness" initial={{opacity:1}} animate={{opacity:0}} transition={{duration:2.4,ease:[.4,0,.2,1]}}/><div className="hero-grid"/><motion.div className="hero-type" style={{y:typeY}}><motion.h1 className="hero-heading-clean" initial={{y:34,opacity:0}} animate={{y:0,opacity:1}} transition={{delay:.3,duration:.9,ease:[.16,1,.3,1]}}><span>{T.hero1}</span><span>{T.hero2}</span></motion.h1><motion.div className="hero-content" initial={{y:24,opacity:0}} animate={{y:0,opacity:1}} transition={{delay:1.05,duration:.75}}><p className="hero-sub">{T.heroSub}</p><a className="hero-cta" href="#projects" data-cursor="↗">{T.heroCta} <span>↗</span></a></motion.div></motion.div></section>}
function FormationSection(){
  const sectionRef=useRef(null);
  const videoRef=useRef(null);
  const hasPlayed=useRef(false);
  useEffect(()=>{
    const section=sectionRef.current;
    const video=videoRef.current;
    if(!section||!video)return;
    const observer=new IntersectionObserver(([entry])=>{
      if(entry.isIntersecting&&!hasPlayed.current){
        hasPlayed.current=true;
        video.play().catch(()=>{});
        observer.disconnect();
      }
    },{threshold:.38});
    observer.observe(section);
    return()=>observer.disconnect();
  },[]);
  return <section className="formation-section" ref={sectionRef} aria-labelledby="formation-title">
    <div className="formation-inner">
      <motion.div className="formation-copy" initial={{opacity:0,y:28}} whileInView={{opacity:1,y:0}} viewport={{once:true,amount:.55}} transition={{duration:.75,ease:[.16,1,.3,1]}}>
        <h2 id="formation-title">{T.formH1}<br/>{T.formH2}</h2>
        <p>{T.formP}</p>
      </motion.div>
      <motion.div className="formation-media" initial={{opacity:0,y:34}} whileInView={{opacity:1,y:0}} viewport={{once:true,amount:.35}} transition={{duration:.9,delay:.08,ease:[.16,1,.3,1]}}>
        <video ref={videoRef} src="/assets/house-formation.mp4" muted playsInline preload="auto" aria-label="مراحل تشكّل البيت"/>
      </motion.div>
    </div>
  </section>
}
function TimeOfDay(){
  const ref=useRef();
  const canvasRef=useRef();
  const clockRef=useRef();
  const framesRef=useRef([]);
  const targetProgress=useRef(0);
  const displayProgress=useRef(0);
  const rafRef=useRef(0);
  const lastDrawnPosition=useRef(-1);
  const lastClock=useRef('');
  const {scrollYProgress}=useScroll({target:ref,offset:['start start','end end']});
  const formatTime=p=>{const start=6*60,end=22*60,total=Math.round(start+(end-start)*p);return `${String(Math.floor(total/60)).padStart(2,'0')}:${String(total%60).padStart(2,'0')}`};
  const fitImage=(ctx,img,w,h,alpha=1)=>{
    const scale=Math.max(w/img.naturalWidth,h/img.naturalHeight);
    const dw=img.naturalWidth*scale,dh=img.naturalHeight*scale;
    ctx.globalAlpha=alpha;ctx.drawImage(img,(w-dw)/2,(h-dh)/2,dw,dh);
  };
  const drawScrubFrame=(progress,force=false)=>{
    const canvas=canvasRef.current;if(!canvas)return;
    const framePosition=Math.max(0,Math.min(TIME_FRAME_COUNT-1,progress*(TIME_FRAME_COUNT-1)));
    if(!force&&Math.abs(framePosition-lastDrawnPosition.current)<.035)return;
    const base=Math.floor(framePosition),next=Math.min(base+1,TIME_FRAME_COUNT-1),blend=framePosition-base;
    const a=framesRef.current[base],b=framesRef.current[next];
    if(!a?.complete||!a.naturalWidth)return;
    const rect=canvas.getBoundingClientRect(),dpr=Math.min(window.devicePixelRatio||1,1.5);
    const w=Math.max(1,Math.round(rect.width*dpr)),h=Math.max(1,Math.round(rect.height*dpr));
    if(canvas.width!==w||canvas.height!==h){canvas.width=w;canvas.height=h}
    const ctx=canvas.getContext('2d',{alpha:false});ctx.globalAlpha=1;ctx.clearRect(0,0,w,h);
    fitImage(ctx,a,w,h,1);
    if(b?.complete&&b.naturalWidth&&blend>.001){ctx.globalAlpha=blend;fitImage(ctx,b,w,h,blend)}
    ctx.globalAlpha=1;lastDrawnPosition.current=framePosition;
  };
  useEffect(()=>{
    let alive=true;
    framesRef.current=Array.from({length:TIME_FRAME_COUNT},(_,i)=>{
      const img=new Image();img.decoding='async';img.src=timeFrameSrc(i);
      img.decode?.().catch(()=>{}).finally(()=>{if(alive&&i===0)drawScrubFrame(0,true)});
      return img;
    });
    const resize=()=>drawScrubFrame(displayProgress.current,true);
    window.addEventListener('resize',resize,{passive:true});
    const tick=()=>{
      const delta=targetProgress.current-displayProgress.current;
      displayProgress.current=Math.abs(delta)<.00015?targetProgress.current:displayProgress.current+delta*.24;
      const p=Math.max(0,Math.min(1,displayProgress.current));
      drawScrubFrame(p);
      const nextClock=formatTime(p);
      if(nextClock!==lastClock.current&&clockRef.current){clockRef.current.textContent=nextClock;lastClock.current=nextClock}
      rafRef.current=requestAnimationFrame(tick);
    };
    rafRef.current=requestAnimationFrame(tick);
    return()=>{alive=false;cancelAnimationFrame(rafRef.current);window.removeEventListener('resize',resize)};
  },[]);
  useEffect(()=>scrollYProgress.on('change',p=>{targetProgress.current=Math.max(0,Math.min(1,p))}),[scrollYProgress]);
  const copyOpacity=useTransform(scrollYProgress,[0,.12,.7,.9],[1,1,.72,0]);
  const copyY=useTransform(scrollYProgress,[0,1],['0%','-18%']);
  const clockScale=useTransform(scrollYProgress,[0,1],[1,.94]);
  const sunOpacity=useTransform(scrollYProgress,[0,.44,.68],[1,.82,0]);
  const sunRotate=useTransform(scrollYProgress,[0,.68],[-18,24]);
  const moonOpacity=useTransform(scrollYProgress,[.42,.66,.9],[0,.72,1]);
  return <section className="time-section" ref={ref}>
    <div className="time-stage">
      <canvas ref={canvasRef} className="time-canvas" aria-label="تحوّل البيت من النهار إلى الليل"/>
      <div className="time-vignette"/>
      <motion.div className="time-copy" style={{opacity:copyOpacity,y:copyY}}>
        <h2>{T.timeH1}<br/><span>{T.timeH2}</span></h2>
        <p>{T.timeP}</p>
      </motion.div>
      <motion.div className="time-clock" style={{scale:clockScale}} aria-live="polite">
        <div className="time-clock-top">
          <div className="time-celestial" aria-hidden="true">
            <motion.svg className="time-sun" style={{opacity:sunOpacity,rotate:sunRotate}} viewBox="0 0 32 32"><circle cx="16" cy="16" r="5.4"/><g><path d="M16 2.5v5M16 24.5v5M2.5 16h5M24.5 16h5M6.45 6.45l3.55 3.55M22 22l3.55 3.55M25.55 6.45L22 10M10 22l-3.55 3.55"/></g></motion.svg>
            <motion.svg className="time-moon" style={{opacity:moonOpacity}} viewBox="0 0 32 32"><path d="M22.9 23.7A11.3 11.3 0 0 1 11.1 5.3a11.4 11.4 0 1 0 11.8 18.4Z"/></motion.svg>
          </div>
          <i/>
        </div>
        <strong ref={clockRef}>06:00</strong>
        <div className="time-range"><span>06:00</span><b><motion.i style={{scaleX:scrollYProgress}}/></b><span>22:00</span></div>
      </motion.div>
    </div>
  </section>
}
function ProjectScene({p}){return <article className="project-scene"><div className="project-bg" style={{backgroundImage:`url(${p[2]})`}}/><div className="project-shade"/><div className="project-copy"><h3>{p[1]}</h3><a className="project-action-new" href={projectPathFor(p[3])} data-cursor="↗"><b>{T.viewProject}</b><span>↗</span></a></div><div className="project-outline">{p[0]}</div></article>}
function Projects(){const ref=useRef();const {scrollYProgress}=useScroll({target:ref});const x=useTransform(scrollYProgress,[0,1],['0%','-66.666%']);return <section className="projects" id="projects" ref={ref}><div className="sticky"><motion.div className="project-track" style={{x}}>{projects.map(p=><ProjectScene p={p} key={p[0]}/>)}</motion.div></div></section>}
function Words(){const [active,setActive]=useState(0);const words=[[T.words[0],IMG.light],[T.words[1],IMG.shadow],[T.words[2],IMG.material]];return <section className="words" id="approach"><motion.div key={active} className="words-bg" initial={{opacity:0,scale:1.06}} animate={{opacity:.72,scale:1}} transition={{duration:.7}} style={{backgroundImage:`url(${words[active][1]})`}}/><div className="words-intro"><h2>{T.wordsH}</h2><p>{T.wordsP}</p></div><div className="word-list">{words.map((w,i)=><button onMouseEnter={()=>setActive(i)} className={active===i?'on':''} key={w[0]} data-cursor={T.show}>{w[0]}<i>↗</i></button>)}</div></section>}
function Passage(){const ref=useRef();const {scrollYProgress}=useScroll({target:ref,offset:['start end','end start']});const clip=useTransform(scrollYProgress,[.08,.48],['inset(18% 47% 18% 47%)','inset(0% 0% 0% 0%)']);const x=useTransform(scrollYProgress,[0,.65],['10%','-8%']);return <section className="passage" ref={ref}><div className="passage-base" style={{backgroundImage:`url(${IMG.plan})`}}/><motion.div className="passage-photo" style={{clipPath:clip,backgroundImage:`url(${IMG.house})`}}/><motion.h2 style={{x}}>{T.passage[0]}<br/>{T.passage[1]}<br/>{T.passage[2]}</motion.h2><div className="passage-line"/><p>{T.passageP}</p></section>}
function Fragments(){const ref=useRef();const {scrollYProgress}=useScroll({target:ref,offset:['start end','end start']});const x1=useTransform(scrollYProgress,[0,1],['-8%','18%']);const x2=useTransform(scrollYProgress,[0,1],['14%','-15%']);return <section className="fragments" ref={ref}><div className="fragment-title"><h2>{T.fragH[0]}<br/>{T.fragH[1]}</h2><div className="fragment-copy"><p>{T.frag1}</p><p>{T.frag2}</p></div></div><motion.div className="film-row row-one" style={{x:x1}}>{[IMG.filmStair,IMG.filmInterior,IMG.filmShadow,IMG.filmCourt].map((im,i)=><div className="film" key={i}><img src={im}/></div>)}</motion.div><motion.div className="film-row row-two" style={{x:x2}}>{[IMG.filmConcrete,IMG.projectWadi,IMG.projectLight].map((im,i)=><div className="film wide" key={i}><img src={im}/></div>)}</motion.div></section>}
function PlanToSpace(){const ref=useRef();const [split,setSplit]=useState(52);const move=e=>{const r=ref.current?.getBoundingClientRect();if(!r)return;setSplit(Math.max(8,Math.min(92,((e.clientX-r.left)/r.width)*100)))};return <section className="compare-section"><div className="compare-copy"><h2>{T.compareH[0]}<br/>{T.compareH[1]}</h2><p>{T.compareP}</p></div><div ref={ref} className="compare-stage" onPointerMove={move} data-cursor={T.move}><div className="compare-built" style={{backgroundImage:`url(${IMG.compareRender})`}}/><div className="compare-plan" style={{clipPath:`inset(0 ${100-split}% 0 0)`,backgroundImage:`url(${IMG.compareSketch})`}}/><div className="compare-handle" style={{left:`${split}%`}}><span>↔</span></div><div className="compare-label plan-label">{T.plan}</div><div className="compare-label built-label">{T.scene}</div></div></section>}
function End(){const ref=useRef();const {scrollYProgress}=useScroll({target:ref,offset:['start end','end end']});const buildingY=useTransform(scrollYProgress,[0,.58,1],['105%','5%','0%']);const buildingScale=useTransform(scrollYProgress,[0,.75,1],[.97,1,1]);const copyY=useTransform(scrollYProgress,[0,1],['7%','0%']);return <section className="end" ref={ref}><div className="end-stage"><img className="end-sky-img" src={IMG.sky} alt=""/><motion.img className="end-building" src={IMG.building} alt="" style={{y:buildingY,scale:buildingScale}}/><motion.div className="end-copy" style={{y:copyY}}><h2>{T.endH[0]}<br/>{T.endH[1]}</h2></motion.div><div className="end-links"><a href={`${homePath}#projects`} data-cursor="↗">{T.seeProjects}</a><a href={`${studioPath}#contact`} data-cursor="↗">{T.contactUs}</a></div></div></section>}
function InternalFooter(){return <footer className="internal-footer"><span>{T.footerNote}</span><div><a href={homePath}>{T.backHome}</a><a href={studioPath}>{T.contact}</a></div></footer>}
function ProjectPage({slug}){const base=PROJECTS[slug]||PROJECTS['wadi-house'];const p=base[locale];return <div className="internal-page"><Cursor/><Nav/><main><section className="project-page-hero" style={{backgroundImage:`url(${base.image})`}}><div className="internal-shade"/><div className="project-page-title"><p>{p.kicker}</p><h1>{p.title}</h1></div></section><section className="project-page-intro"><p>{p.intro}</p><div className="project-facts"><div><span>{T.projectFact1}</span><b>{T.projectFact1v}</b></div><div><span>{T.projectFact2}</span><b>{p.area}</b></div><div><span>{T.projectFact3}</span><b>{T.projectFact3v}</b></div></div></section><section className="project-page-story"><div className="story-image" style={{backgroundImage:`url(${base.storyImage})`}}/><div className="story-copy"><h2>{p.storyH}</h2><p>{p.storyP}</p><a href={homePath}>{T.backHome} ↗</a></div></section></main><InternalFooter/></div>}
const WadiHousePage=()=> <ProjectPage slug="wadi-house"/>;
function StudioPage(){return <div className="internal-page studio-page"><Cursor/><Nav/><main><section className="studio-hero"><p>ATHAR / أثر</p><h1>{T.studioTitle}</h1><div className="studio-intro">{T.studioIntro}</div></section><section className="studio-approach"><div className="studio-photo" style={{backgroundImage:`url(${IMG.house})`}}/><div><h2>{T.studioH}</h2><p>{T.studioP}</p></div></section><section className="studio-contact" id="contact"><div className="contact-intro"><h2>{T.contactH}</h2><p>{T.contactP}</p></div><div className="contact-details"><a className="contact-email" href={`mailto:${T.email}`}>{T.email}<span>↗</span></a><a className="contact-phone" href={`tel:${T.phone.replace(/[^+\d]/g,'')}`}>{T.phone}<span>↗</span></a><p>{T.location}</p></div></section></main><InternalFooter/></div>}
function App(){return <><Cursor/><Nav/><main><Hero/><FormationSection/><TimeOfDay/><Projects/><Words/><Passage/><Fragments/><PlanToSpace/><End/></main></>}
const route=cleanPath.replace(/^\/en(?=\/|$)/,'')||'/';
let Page=App;
const projectMatch=route.match(/^\/project\/(wadi-house|courtyard-house|house-of-light)$/);
if(projectMatch){const slug=projectMatch[1];Page=()=> <ProjectPage slug={slug}/>;}
else if(route==='/studio')Page=StudioPage;
createRoot(document.getElementById('root')).render(<Page/>);
