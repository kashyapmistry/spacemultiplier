import { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/about.css';
import aboutBanner from "../assets/images/About-us/about-banner.avif";
import aboutWork from "../assets/images/About-us/our-work-sec.avif";

function useScrollReveal() {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); obs.unobserve(e.target); } });
    }, { threshold: 0.1 });
    el.querySelectorAll('.rv').forEach(t => obs.observe(t));
    return () => obs.disconnect();
  }, []);
  return ref;
}

export default function About() {
  const pageRef = useScrollReveal();

  return (
    <main ref={pageRef}>
      {/* PAGE HERO */}
      <section className="page-hero-about">
        <div className="page-hero-bg" style={{backgroundImage : `url(${aboutBanner})`, backgroundSize: 'cover',}} />
        <div className="page-hero-bar" />
        <div className="page-hero-content">
          {/* <div className="page-crumb">
            <Link to="/">Home</Link>
            <span>/</span>
            <span style={{color:'rgba(255,255,255,.6)'}}>About Us</span>
          </div> */}
          <div className="page-hero-tag">Our Story</div>
          <h1 className="page-hero-h1">We are<br/><em>Spacemultiplier</em></h1>
          <p className="page-hero-sub">Transforming Mumbai's spaces since day one</p>
        </div>
      </section>

      {/* INTRO STRIP */}
      <div className="intro-strip">
        <div className="intro-inner">
          <blockquote className="intro-quote">
            "Intelligent design doesn't just fill a space — it <em>multiplies</em> what a space can be."
          </blockquote>
          <div className="intro-cred">
            <div className="intro-cred-name">The Spacemultiplier Studio</div>
            <div className="intro-cred-title">Design Philosophy</div>
          </div>
        </div>
      </div>

      {/* STORY */}
      <section className="story" id="story">
        <div className="story-g">
          <div className="story-img-col rv">
            <div className="story-img" style={{backgroundImage: `url(${aboutWork})`, backgroundSize: 'cover',}}>
            </div>
            <div className="story-img-badge">
              <div className="sib-year">Est.<br/>30+</div>
              <div className="sib-label">Years of craft</div>
            </div>
          </div>
          <div className="rv d1">
            <div className="eyebrow">Our Story</div>
            <h2 className="story-h2">Born from a belief that<br/><em>every space</em> has more to give</h2>
            <p className="story-p">Spacemultiplier was founded on a simple but powerful idea: that urban living in Mumbai doesn't have to mean compromise. In a city where space is precious and every square foot counts, we set out to prove that a smaller home could feel as luxurious, comfortable, and personal as any expansive one.</p>
            <div className="divider" />
            <p className="story-p">Over more than three decades, we have grown from a single-service folding furniture studio into a full-spectrum design house offering interior consultancy, customised furniture, and bespoke illustrated art. Each vertical was born from real client need — not trend-chasing — and every one of them carries our founding commitment to quality, function, and beauty.</p>
            <p className="story-p" style={{marginTop:'1rem'}}>Today, Spacemultiplier works with homeowners, developers, and commercial clients across Mumbai — bringing the same rigour and warmth to a 400 sqft apartment as to a 4,000 sqft villa.</p>
            <div className="story-highlight">
              <p>"The best design is the kind you stop noticing — because it simply feels right."</p>
              <cite>— Spacemultiplier Design Principle</cite>
            </div>
          </div>
        </div>
      </section>

      {/* NUMBERS */}
      <section className="numbers">
        <div className="numbers-grid">
          {[
            { n:'30+', label:'Years in business', desc:'Three decades of trust, craft, and evolving design sensibility' },
            { n:'500+', label:'Projects completed', desc:'Residential, commercial, and hospitality spaces across Mumbai' },
            { n:'3', label:'Design verticals', desc:'Interior Design, Folding Furniture & Illustrated Art under one studio' },
            { n:'100%', label:'Custom work', desc:"Every project is bespoke — no off-the-shelf solutions, ever" },
          ].map((s,i) => (
            <div className={`num-card rv d${i}`} key={s.label}>
              <div className="num-n">{s.n}</div>
              <div className="num-label">{s.label}</div>
              <div className="num-desc">{s.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* PHILOSOPHY */}
      <section className="philosophy" id="philosophy">
        <div className="phil-header rv">
          <div className="eyebrow center">Our Philosophy</div>
          <h2 className="sec-h2" style={{marginBottom:'.8rem'}}>The principles that<br/>guide every decision</h2>
          <p style={{fontSize:'.88rem',lineHeight:'1.85',color:'var(--ink60)'}}>Three core beliefs shape how we approach every client, every project, and every design choice we make.</p>
        </div>
        <div className="phil-grid">
          {[
            { title:'Function is the foundation', body:'We never design anything that doesn\'t serve a clear purpose. Form follows function — but that doesn\'t mean it can\'t be breathtaking. Every element in a Spacemultiplier space earns its place.', delay:'' },
            { title:'Material matters deeply', body:'The quality of a space is only as good as the quality of what it\'s made of. We source materials with care, choosing finishes and textures that age beautifully and feel genuinely luxurious to live with.', delay:'d1' },
            { title:'Every client is unique', body:"We don't believe in templates. Each project begins with deep listening — to your lifestyle, your family, your aspirations. The result is always unmistakably yours, never a showroom reproduction.", delay:'d2' },
          ].map(p => (
            <div className={`phil-card rv ${p.delay}`} key={p.title}>
              <svg className="phil-icon" viewBox="0 0 44 44" fill="none" stroke="currentColor" strokeWidth="1">
                <circle cx="22" cy="22" r="15"/><circle cx="22" cy="22" r="6"/>
              </svg>
              <div className="phil-title">{p.title}</div>
              <p className="phil-p">{p.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* TIMELINE */}
      <section className="timeline" id="journey">
        <div className="tl-header rv">
          <div className="eyebrow">Our Journey</div>
          <h2 className="sec-h2">Three decades of<br/><em>design evolution</em></h2>
        </div>
        <div className="tl-track">
          {[
            { year:'The Beginning', title:'The Wall Align System is born', desc:'Spacemultiplier starts with a single, brilliant idea — a wall-mounted folding dining table system that transforms how compact Mumbai homes use space. The Wall Align system finds its first clients in Bandra and Andheri.', tag:'Folding Furniture', delay:'' },
            { year:'A Decade Later', title:'Expanding into full interior design', desc:'Client demand grows beyond furniture. We expand into full interior design consultancy, bringing the same space-conscious philosophy to complete home and office renovations across Mumbai.', tag:'Interior Design', delay:'d1' },
            { year:'The Art Chapter', title:'Illustrated Art joins the studio', desc:'We launch our illustrated art vertical — bespoke life narrative illustrations and hand-lettered quotes that bring deeply personal meaning to our clients\' walls. The response is immediate and heartfelt.', tag:'Illustrated Art', delay:'d2' },
            { year:'Today', title:'A complete luxury design studio', desc:"Spacemultiplier stands as one of Mumbai's most trusted design studios — three verticals, one philosophy, hundreds of transformed spaces, and a commitment to craft that has never wavered.", tags:['Full Studio','30+ Years'], delay:'d3' },
          ].map(t => (
            <div className={`tl-item rv ${t.delay}`} key={t.title}>
              <div className="tl-dot" />
              <div className="tl-year">{t.year}</div>
              <div className="tl-title">{t.title}</div>
              <p className="tl-desc">{t.desc}</p>
              {t.tag && <span className="tl-tag">{t.tag}</span>}
              {t.tags && t.tags.map(tg => <span className="tl-tag" key={tg}>{tg}</span>)}
            </div>
          ))}
        </div>
      </section>

      {/* TEAM */}
      {/* <section className="team" id="team">
        <div className="team-header">
          <div className="rv">
            <div className="eyebrow lt">The People</div>
            <h2 className="sec-h2" style={{color:'var(--cream)'}}>The minds behind<br/>every <em>space</em></h2>
          </div>
          <p className="team-intro-p rv d1">Our studio is built on people who care deeply — about design, about craft, and about the clients whose lives our work touches every single day.</p>
        </div>
        <div className="team-grid">
          {[
            { cls:'tp-1', name:'Founder & Principal Designer', role:'Interior Design · Space Strategy', bio:'The visionary behind Spacemultiplier and the Wall Align system. With over 30 years of experience in Mumbai\'s design landscape, our founder brings an unmatched ability to see possibility in constraint.', delay:'' },
            { cls:'tp-2', name:'Lead Interior Designer', role:'Residential · Commercial · Hospitality', bio:'A meticulous design thinker who specialises in translating client aspirations into precise spatial solutions. Known for an extraordinary eye for material and proportion.', delay:'d1' },
            { cls:'tp-3', name:'Illustrated Art Director', role:'Life Narratives · Hand Lettering · Murals', bio:'The artist behind every Spacemultiplier illustrated piece. A dedicated storyteller who works closely with each client to capture their personal journey in a way that is both timeless and deeply intimate.', delay:'d2' },
          ].map(m => (
            <div className={`team-card rv ${m.delay}`} key={m.name}>
              <div className={`team-photo ${m.cls}`}>
                <div className="team-photo-overlay" />
              </div>
              <div className="team-body">
                <div className="team-name">{m.name}</div>
                <div className="team-role">{m.role}</div>
                <p className="team-bio">{m.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </section> */}

      {/* VALUES */}
      <section className="values" id="values">
        <div className="values-g">
          <div className="rv">
            <div className="eyebrow">What We Stand For</div>
            <h2 className="sec-h2" style={{marginBottom:'1.5rem'}}>Values that never<br/><em>bend to trend</em></h2>
            <div className="values-list">
              {[
                { ic:'🎯', t:'Purposeful design', d:"Every design choice has a reason. We don't add elements for decoration — we add them because they make the space better to live in." },
                { ic:'🤝', t:'Client partnership', d:"We don't impose our taste — we collaborate deeply. The best result comes from genuine dialogue between designer and client, not a monologue." },
                { ic:'⚒️', t:'Uncompromising craft', d:'From the engineering of the Wall Align system to the final brushstroke on an illustration — quality is non-negotiable at every scale.' },
                { ic:'🌿', t:'Thoughtful sustainability', d:'We design for longevity. Pieces made to last decades are inherently sustainable — we choose materials and methods that won\'t end up as landfill.' },
              ].map(v => (
                <div className="val-item" key={v.t}>
                  <div className="val-ic">{v.ic}</div>
                  <div><div className="val-title">{v.t}</div><div className="val-desc">{v.d}</div></div>
                </div>
              ))}
            </div>
          </div>
          <div className="rv d1">
            <div className="values-img"><div className="values-floor2" /></div>
          </div>
        </div>
      </section>

      {/* AWARDS */}
      <section className="awards" id="recognition">
        <div className="awards-header rv">
          <div className="eyebrow">Recognition</div>
          <h2 className="sec-h2">Work that has been<br/><em>noticed & celebrated</em></h2>
        </div>
        <div className="awards-grid">
          {[
            { year:'Client Recognition', icon:'⭐', title:'500+ Happy Clients Across Mumbai', body:'Consistently rated 5 stars by residential and commercial clients for design quality, communication, and delivery.', org:'Client Reviews · Mumbai', delay:'' },
            { year:'30 Years Strong', icon:'🏛️', title:'Trusted Legacy in Mumbai Design', body:'Three decades of repeat clients and referrals — the clearest measure of quality and trust in a competitive market.', org:'Spacemultiplier · Est. Mumbai', delay:'d1' },
            { year:'Innovation', icon:'🔧', title:'Wall Align System Patent', body:'Our proprietary folding furniture mechanism has been deployed in hundreds of Mumbai homes — a Mumbai-original engineering innovation.', org:'Wall Align · Proprietary System', delay:'d2' },
            { year:'Artistry', icon:'🎨', title:'Bespoke Art for Mumbai Homes', body:"Our illustrated art commissions have become cherished heirlooms in dozens of Mumbai family homes — stories told in line and colour.", org:'Illustrated Art · Spacemultiplier', delay:'d3' },
            { year:'Versatility', icon:'🏢', title:'Residential & Commercial Excellence', body:'From intimate 1BHK redesigns to full commercial office fit-outs — our portfolio spans every typology and scale.', org:'Full Portfolio · Mumbai', delay:'' },
            { year:'Community', icon:'🌟', title:'Featured on Social Media', body:'Our work and folding furniture designs regularly feature in interior design communities across Instagram and Facebook in India.', org:'@space.multiplier · Instagram', delay:'d1' },
          ].map(a => (
            <div className={`award-card rv ${a.delay}`} key={a.title}>
              <div className="award-year">{a.year}</div>
              <div className="award-icon">{a.icon}</div>
              <div className="award-title">{a.title}</div>
              <div className="award-body">{a.body}</div>
              <div className="award-org">{a.org}</div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA BAND */}
      <section className="cta-band">
        <div className="cta-bg-text" aria-hidden="true">TRANSFORM</div>
        <div className="rv">
          <h2 className="cta-h2">Ready to transform<br/>your <em>space</em>?</h2>
          <p className="cta-sub">Whether it's a full interior design project, a folding furniture consultation, or a piece of illustrated art — we'd love to start a conversation.</p>
        </div>
        <div className="cta-actions rv d1">
          <Link className="btn-gold" to="/contact">Get In Touch</Link>
          <Link className="btn-outline-light" to="/services">See Services</Link>
        </div>
      </section>
    </main>
  );
}
