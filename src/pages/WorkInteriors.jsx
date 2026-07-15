import { useRef, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import '../styles/pages.css';
import $ from 'jquery';
import InteriorBanner from "../assets/images/Interior/Interior-page.png";
import InteriorFirst from "../assets/images/Interior/Interior-first.png";
import designServices from "../assets/images/Interior/Interior-first.png";

 
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

/* Projects from the site content */
const PROJECTS = [
  {
    id: 1, residence: 'Residence — Indradarshan', room: 'Master Bedroom',
    ph: 'pp-bedroom', ratio: 'ratio-landscape', span: '', tall: '',
    cat: 'Residential · Interior', loc: 'Indradarshan, Mumbai', 
    cover: "1.jpg", images: ["1.jpg","2.jpg","3.jpg","4.jpg","5.jpg","6.jpg","7.jpg","8.jpg","9.jpg",],
  },
  {
    id: 2, residence: 'Residence — Indradarshan', room: "Daughter's Room",
    ph: 'pp-bedroom2', ratio: 'ratio-landscape', span: '', tall: '',
    cat: 'Residential · Interior', loc: 'Indradarshan, Mumbai',
    cover: "1.jpg", images: ["1.jpg","2.jpg","3.jpg","4.jpg","5.jpg","6.jpg","7.jpg","8.jpg","9.jpg","10.jpg"],
  },
  {
    id: 3, residence: 'Residence — Indradarshan', room: 'Kitchen',
    ph: 'pp-kitchen', ratio: 'ratio-landscape', span: '', tall: '',
    cat: 'Residential · Kitchen', loc: 'Indradarshan, Mumbai',
    cover: "1.jpg", images: ["1.jpg","2.jpg","3.jpg","4.jpg","5.jpg",],
  },
  {
    id: 4, residence: 'Residence — Indradarshan', room: 'Guest Room · Home Office · Atelier · Multipurpose',
    ph: 'pp-guest', ratio: 'ratio-landscape', span: 'span2', tall: '',
    cat: 'Residential · Multipurpose', loc: 'Indradarshan, Mumbai',
    cover: "1.jpg", images: ["1.jpg","2.jpg","3.jpg","4.jpg","5.jpg","6.jpg","7.jpg","8.jpg","9.jpg","10.jpg"],
  },
  {
    id: 5, residence: 'Residence — Indradarshan', room: 'Living Room',
    ph: 'pp-living', ratio: 'ratio-wide', span: '', tall: '',
    cat: 'Residential · Living', loc: 'Indradarshan, Mumbai',
    cover: "1.jpg", images: ["1.jpg","2.jpg","3.jpg","4.jpg","5.jpg","6.jpg","7.jpg","8.jpg","9.jpg","10.jpg","11.jpg","12.jpg","13.jpg","14.jpg","15.jpg","16.jpg"],
  },
  {
    id: 6, residence: 'Residence — Astron', room: 'Full Residence',
    ph: 'pp-astron', ratio: 'ratio-landscape', span: '', tall: '',
    cat: 'Residential · Full Interior', loc: 'Astron, Mumbai',
    cover: "2.jpg", images: ["1.jpg","2.jpg","3.jpg","4.jpg","5.jpg","6.jpg","7.jpg","8.jpg","9.jpg","10.jpg","11.jpg","12.jpg","13.jpg","14.jpg","15.jpg","16.jpg"],

  },
  {
    id: 7, residence: 'Residence — Serene', room: 'Full Residence',
    ph: 'pp-serene', ratio: 'ratio-landscape', span: '', tall: '',
    cat: 'Residential · Full Interior', loc: 'Serene, Mumbai',
    cover: "1.jpg", images: ["1.jpg","2.jpg","3.jpg","4.jpg","5.jpg","6.jpg","7.jpg","8.jpg","9.jpg","10.jpg"],
  },
];

// Magnific Popup function
function openGallery(images, folder) {
  const items = images.map((img) => ({
    src: `/assets/images/Interior/${folder}/${img}`,
  }));

  $.magnificPopup.open({
    items,
    type: "image",
    gallery: { enabled: true },
  });
}

const WORK_TABS = [
  { label: 'Interiors', to: '/work-interiors' },
  { label: 'Folding Furniture', to: '/work-folding-furniture' },
  { label: 'Illustrated Art', to: '/work-illustrated-art' },
];

export default function WorkInteriors() {
  const pageRef = useScrollReveal();

  return (
    <main ref={pageRef}>
      {/* PAGE HERO */}
      <section className="page-hero">
        <div className='interior-hero' style={{
          position: 'absolute', inset: 0,
          background: `url(${InteriorBanner}) no-repeat center center`,
          backgroundSize: 'cover',
          animation: 'phzoom 12s ease forwards',
        }}>
        </div>
        <div className="page-hero-content">
          {/* <div className="page-crumb">
            <Link to="/">Home</Link><span>/</span>
            <Link to="/services">Services</Link><span>/</span>
            <span style={{color:'rgba(255,255,255,.65)'}}>Work — Interiors</span>
          </div> */}
          <div className="page-hero-tag">Our Work</div>
          <h1 className="page-hero-h1">Work — <em>Interiors</em></h1>
          <p className="page-hero-sub">Spaces designed to feel inevitable</p>
        </div>
      </section>

      {/* WORK TAB NAV */}
      <nav className="work-tabs" aria-label="Work categories">
        {WORK_TABS.map(t => (
          <NavLink key={t.to} to={t.to} className={({ isActive }) => `work-tab${isActive ? ' active' : ''}`}>
            {t.label}
          </NavLink>
        ))}
      </nav>

      {/* INTRO */}
      <section className="work-intro">
        <div className="work-intro-g">
          <div className="rv">
            <div className="eyebrow">Interior Design</div>
            <h2 className="work-intro-h2">Spaces that feel <em>inevitable</em> — as if they could never have been any other way</h2>
            <p className="work-intro-p">Our interior design work spans bedrooms, kitchens, living rooms, multipurpose spaces, home offices, and full residences. Each project is approached as a unique brief — shaped by the client's lifestyle, the site's character, and our commitment to making every square foot count.</p>
            <p className="work-intro-p">From Residence Indradarshan's thoughtfully zoned multipurpose rooms to the full redesigns of Residences Astron and Serene — every project below is a real home, transformed by real design thinking.</p>
            <div className="work-intro-pills">
              <span className="work-pill">Bedroom</span>
              <span className="work-pill">Kitchen</span>
              <span className="work-pill">Living Room</span>
              <span className="work-pill">Multipurpose</span>
              <span className="work-pill">Home Office</span>
              <span className="work-pill">Full Residence</span>
            </div>
          </div>
          <div className="rv d1">
            <div style={{
              aspectRatio: '4/3', background: `url(${InteriorFirst}) no-repeat center center` ,
              backgroundSize: 'cover',
              position: 'relative', overflow: 'hidden',
            }}>
            </div>
          </div>
        </div>
      </section>

      {/* PROJECTS GRID */}
      <section className="projects-section">
      <div className="eyebrow rv">Selected Projects</div>
      <h2 className="sec-h2 rv d1" style={{ marginBottom: "2.5rem" }}>
        Residences we have <em>transformed</em>
      </h2>

      <div className="projects-grid rv d2">
        {PROJECTS.map((p) => (
          <div
            className={`project-card${p.span ? " " + p.span : ""}${
              p.tall ? " " + p.tall : ""
            }`}
            key={p.id}
          >
            <div className="proj-photo">
              <div
                className={`proj-photo-inner ${p.ph} ${p.ratio}`}
                style={{ position: "relative",backgroundImage: `url(/assets/images/Interior/${p.ph}/${p.cover})`,
                  backgroundSize: "cover", }}
              >
                {/* View More button */}
                <button
                  className="view-more-btn-interior"
                  onClick={() => openGallery(p.images, p.ph)}
                ></button>
              </div>
            </div>
            <div className="proj-info">
              <div className="proj-cat">{p.cat}</div>
              <div className="proj-name">{p.room}</div>
              <div className="proj-loc">{p.residence}</div>
            </div>
          </div>
        ))}
      </div>
    </section>

      {/* WHAT WE OFFER */}
      <section className="work-features">
        <div className="work-features-g">
          <div className="rv">
            <div className="eyebrow lt">Interior Design Services</div>
            <h2 className="work-features-h2">What our interior<br /><em>design includes</em></h2>
            <div className="work-feat-list" style={{ marginTop: '2rem' }}>
              {[
                { ic: '📐', t: 'Space Planning & Layout', s: 'We start with how you live — and design the layout around your routines, not the other way around.' },
                { ic: '🎨', t: 'Material & Finish Selection', s: 'From flooring and wall treatments to joinery finishes and fabrics — every surface is considered and curated.' },
                { ic: '💡', t: 'Lighting Design', s: 'Layered lighting schemes that work for every mood and moment — ambient, task, and accent working together.' },
                { ic: '🪑', t: 'Furniture Specification', s: 'Custom and sourced furniture selected for proportion, quality, and how it will feel to actually live with.' },
                { ic: '🏠', t: 'Multipurpose Room Design', s: 'Our speciality — spaces that work as guest rooms, home offices, ateliers, and family rooms all at once.' },
                { ic: '📋', t: 'Site Supervision', s: 'We manage contractors, timelines and quality control so your project is delivered exactly as designed.' },
              ].map(f => (
                <div className="wf-item" key={f.t}>
                  <div className="wf-ic">{f.ic}</div>
                  <div><div className="wf-t">{f.t}</div><div className="wf-s">{f.s}</div></div>
                </div>
              ))}
            </div>
          </div>
          <div className="rv d1">
            <div className="work-feat-visual" style={{ backgroundImage: `url(/assets/images/Interior/pp-living/11.jpg)`,backgroundSize:"cover", }}>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="page-cta">
        <div className="page-cta-bg" aria-hidden="true">INTERIORS</div>
        <div className="rv">
          <h2 className="page-cta-h2">Ready to redesign<br />your <em>home</em>?</h2>
          <p className="page-cta-sub">Share your space with us — size, location, what's not working. We'll come back with ideas that transform it.</p>
        </div>
        <div className="page-cta-btns rv d1">
          <Link className="btn-gold" to="/contact">Start a Conversation</Link>
          <Link className="btn-outline-lt" to="/services">All Services</Link>
        </div>
      </section>
    </main>
  );
}
