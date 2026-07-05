import { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ServicesBanner from '../assets/images/Services/services-banner.png';
import designQuality from '../assets/images/Services/design-quality.png';
import '../styles/pages.css';

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

const SERVICES = [
  {
    num: '01', ph: 'sbc-ph-1', delay: '',
    title: 'Interior Design Consultancy',
    desc: 'End-to-end interior design that transforms how you experience your space — blending aesthetics, ergonomics, and intelligent use of every square foot. Residential or commercial.',
    chips: ['Space Optimization', 'Home Renovation', 'Office Design', 'Residential Villas', 'Apartments'],
    to: '/work-interiors',
  },
  {
    num: '02', ph: 'sbc-ph-2', delay: 'd1',
    title: 'Customised Folding Furniture',
    desc: 'Space-saving furniture engineered for urban living. Our Wall Align system — trusted for 30+ years — delivers foldable beds and dining tables that are stylish, durable, and effortless.',
    chips: ['Folding Bed', 'Folding Dining Table', 'With Panelling', 'Without Panelling', 'Hidden Spring Mechanism'],
    to: '/work-folding-furniture',
  },
  {
    num: '03', ph: 'sbc-ph-3', delay: 'd2',
    title: 'Illustrated Art',
    desc: 'Bespoke illustrated art that tells your story — from life narrative illustrations to hand-lettered quotes and Vastu Shastra artworks. Each piece is created with care to bring warmth, character, and meaning.',
    chips: ['Life Narrative', 'Hand Lettering', 'Vastu Shastra Art', 'Custom Quotes', 'Gifting'],
    to: '/work-illustrated-art',
  },
];

const PROCESS = [
  { n: '01', t: 'Discover', d: 'We begin by listening — understanding your space, lifestyle, and aspirations through a detailed consultation.' },
  { n: '02', t: 'Design', d: 'Concepts, layouts, material palettes and product selections are developed and presented for your feedback.' },
  { n: '03', t: 'Craft', d: 'We execute with precision — custom furniture, fit-out work, art commissions and installations managed end-to-end.' },
  { n: '04', t: 'Deliver', d: 'Your transformed space is handed over — beautifully finished, functioning flawlessly, made to be lived in.' },
];

export default function Services() {
  const pageRef = useScrollReveal();

  return (
    <main ref={pageRef}>
      {/* PAGE HERO */}
      <section className="page-hero">
        <div className="services-hero-bg" />
        <div className="page-hero-bar" />
        <div className="page-hero-content">
          {/* <div className="page-crumb">
            <Link to="/">Home</Link><span>/</span>
            <span style={{color:'rgba(255,255,255,.65)'}}>Services</span>
          </div> */}
          <div className="page-hero-tag">What We Do</div>
          <h1 className="page-hero-h1">Our <em>Services</em></h1>
          <p className="page-hero-sub">Three design verticals, one unified vision</p>
        </div>
      </section>

      {/* INTRO */}
      <section className="svc-page-intro">
        <div className="svc-page-intro-g">
          <div className="rv">
            <div className="eyebrow">Our Offering</div>
            <h2 className="svc-page-intro-h2">Design that <em>elevates</em><br/>everyday living</h2>
            <p className="svc-page-intro-p">At Spacemultiplier, we offer three distinct but deeply connected design services — each born from a real need, each executed with the same uncompromising commitment to quality, function, and beauty.</p>
            <p className="svc-page-intro-p">Whether you're redesigning a home, looking for a smarter furniture solution, or wanting a piece of art that tells your story — we have a service that's made for you.</p>
            <div className="divider" />
            <p className="svc-page-intro-p">Based in Mumbai. Serving residential and commercial clients across the city. Every project is bespoke — no templates, no off-the-shelf solutions.</p>
          </div>
          <div className="rv d1">
            <div className="svc-visual">
            </div>
          </div>
        </div>
      </section>

      {/* 3 SERVICE CARDS */}
      <section className="svc-cards-section">
        <h2 className="svc-cards-h2 rv">Three verticals,<br/>one <em>studio</em></h2>
        <div className="svc-cards-grid">
          {SERVICES.map(s => (
            <div className={`svc-big-card rv ${s.delay}`} key={s.num}>
              <div className="sbc-photo">
                <div className={`sbc-photo-inner ${s.ph}`} />
                <div className="sbc-veil" />
              </div>
              <div className="sbc-body">
                <div className="sbc-num">{s.num}</div>
                <div className="sbc-title">{s.title}</div>
                <div className="sbc-desc">{s.desc}</div>
                <div className="sbc-chips">{s.chips.map(c => <span className="sbc-chip" key={c}>{c}</span>)}</div>
                <Link className="sbc-link" to={s.to}>View Our Work →</Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PROCESS */}
      <section className="svc-process">
        <div className="rv">
          <div className="eyebrow">How We Work</div>
          <h2 className="sec-h2">From conversation to <em>completion</em></h2>
        </div>
        <div className="proc-strip rv d1">
          {PROCESS.map(p => (
            <div className="proc-strip-step" key={p.n}>
              <div className="ps-n">{p.n}</div>
              <div className="ps-t">{p.t}</div>
              <p className="ps-d">{p.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* WHY US */}
      <section className="work-features">
        <div className="work-features-g">
          <div className="rv">
            <div className="eyebrow lt">Why Spacemultiplier</div>
            <h2 className="work-features-h2">The difference<br/><em>quality makes</em></h2>
            <div className="work-feat-list" style={{marginTop:'2rem'}}>
              {[
                { ic:'🏆', t:'30+ Years of Mumbai Trust', s:'Three decades of repeat clients and referrals — the clearest measure of quality in a competitive market.' },
                { ic:'📐', t:'Every Project Bespoke', s:'No templates. We design from scratch for your space, your lifestyle, and your aspirations every single time.' },
                { ic:'🔧', t:'Engineering + Aesthetics', s:'Our Wall Align system proves that precision engineering and refined design are not opposites — they are partners.' },
                { ic:'🤝', t:'End-to-End Execution', s:'We don\'t just design — we manage the entire process from concept to handover, so you never have to worry.' },
                { ic:'✨', t:'Three Verticals, One Studio', s:'Interior design, folding furniture and illustrated art — all under one roof, all with the same design sensibility.' },
              ].map(f => (
                <div className="wf-item" key={f.t}>
                  <div className="wf-ic">{f.ic}</div>
                  <div><div className="wf-t">{f.t}</div><div className="wf-s">{f.s}</div></div>
                </div>
              ))}
            </div>
          </div>
          <div className="rv d1">
            <div className="work-feat-visual" style={{backgroundImage:`url(${designQuality})`,backgroundSize:`cover`,backgroundPosition:`center`}}>
              
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="page-cta">
        <div className="page-cta-bg" aria-hidden="true">START</div>
        <div className="rv">
          <h2 className="page-cta-h2">Ready to start your<br/><em>project</em>?</h2>
          <p className="page-cta-sub">Tell us about your space, your needs, and your timeline. We'll come back with ideas that will surprise you.</p>
        </div>
        <div className="page-cta-btns rv d1">
          <Link className="btn-gold" to="/#contact">Get In Touch</Link>
          <Link className="btn-outline-lt" to="/work-interiors">See Our Work</Link>
        </div>
      </section>
    </main>
  );
}
