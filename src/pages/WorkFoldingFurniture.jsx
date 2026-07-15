import { useRef, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import $ from 'jquery';
import '../styles/pages.css';
import furnitureElegance from '../assets/images/Interior/furniture-elegance.avif';
import foldingBed from '../assets/images/Interior/folding-bed/folding-bed.avif';
import foldingDinning from '../assets/images/Interior/1.jpg';

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

const PRODUCTS = [
  {
    id: 1,
    title: "Folding Bed",
    slug: "folding-bed",
    cover: "folding-bed.avif", // first image or thumbnail
    images: [
      "1.avif","2.avif","3.avif","4.avif","4.avif","5.jpg","6.jpg"
    ],
    description: [
      "Folding beds are perfect for maximising space in apartments, studios, or small homes. They function as flex rooms — allowing you to fold them up when not in use, making them ideal for guest rooms that need to serve multiple purposes.",
      "The folding feature also makes cleaning the floor underneath far easier than with standard beds. Materials are chosen for longevity and easy maintenance — this is a long-term investment in how your home functions.",
    ],
    quote:
      "A practical choice for small apartments or homes where space is at a premium — allowing for a fully functional bedroom without sacrificing valuable floor space.",
    tags: ["Studio Apartments", "Guest Rooms", "Flex Rooms", "Space Saving", "Easy Maintenance"],
  },
  {
    id: 2,
    title: "Folding Dining Table",
    slug: "folding-dinning",
    cover: "1.jpg", // first image or thumbnail
    images: [
      "1.jpg","2.jpg","3.jpg","4.jpg","5.jpg","6.jpg","7.jpg",
    ],
    description: [
      "The one-off mechanism used in our dining tables is time-tested for 30 years — making it reliable and genuinely worthy of investment. This is not a product trend; it's a proven solution.",
      "When not in use, the dining table camouflages seamlessly into the surrounding wall panelling — making the room feel spacious and expansive. They can also serve as overflow tables during parties in luxury homes during busy food service.",
    ],
    quote:
      "Distinguished by a hidden spring mechanism that makes them more practical for diners — no wooden or metal support or hardware popping out to disturb the user.",
    tags: ["Hidden Spring Mechanism", "30 Year Tested", "Wall Panelling Integration", "Luxury Homes", "Overflow Dining"],
  },
];

function openGallery(images, folder) {
  const items = images.map((img) => ({
    src: `/assets/images/Interior/${folder}/${img}`, // assumes images are in public/assets/images/Interior/{folder}
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

export default function WorkFoldingFurniture() {
  const pageRef = useScrollReveal();

  return (
    <main ref={pageRef}>
      {/* PAGE HERO */}
      <section className="page-hero">
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(to top,rgba(8,7,4,.9) 0%,rgba(8,7,4,.48) 44%,rgba(8,7,4,.18) 100%), linear-gradient(140deg,#0f0c08 0%,#1e1810 14%,#34281a 28%,#5a4530 44%,#8a7055 58%,#b89870 70%,#d4b888 80%,#e8d4b0 90%,#dcc8a4 100%)',
          animation: 'phzoom 12s ease forwards',
        }}>
          <div style={{ position: 'absolute', bottom: '26%', left: '10%', width: '60%', height: '5%', background: 'rgba(200,185,158,.3)' }} />
          <div style={{ position: 'absolute', bottom: '28%', right: '8%', width: '12%', height: '22%', background: 'rgba(180,165,138,.25)', border: '1px solid rgba(255,255,255,.2)' }} />
        </div>
        <div className="page-hero-bar" />
        <div className="page-hero-content">
          {/* <div className="page-crumb">
            <Link to="/">Home</Link><span>/</span>
            <Link to="/services">Services</Link><span>/</span>
            <span style={{color:'rgba(255,255,255,.65)'}}>Work — Folding Furniture</span>
          </div> */}
          <div className="page-hero-tag">Our Work</div>
          <h1 className="page-hero-h1">Work — <em>Folding</em><br />Furniture</h1>
          <p className="page-hero-sub">Smarter space, engineered over 30 years</p>
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
            <div className="eyebrow">Folding Furniture</div>
            <h2 className="work-intro-h2">The <em>Wall Align System</em> — time-tested over 30 years</h2>
            <p className="work-intro-p">Our signature folding furniture is the product of three decades of engineering refinement. The Wall Align system is the mechanism at the heart of every folding bed and dining table we make — reliable, practical, and beautifully integrated into your interior.</p>
            <p className="work-intro-p">Every piece is customised to your space and your interior palette, with or without decorative wall panelling. The result is furniture that's present when you need it, and invisible when you don't.</p>
            <div className="work-intro-pills">
              <span className="work-pill">Folding Bed</span>
              <span className="work-pill">Folding Dining Table</span>
              <span className="work-pill">Wall Align System</span>
              <span className="work-pill">With Panelling</span>
              <span className="work-pill">Without Panelling</span>
            </div>
          </div>
          <div className="rv d1">
            <div style={{ position: 'relative', overflow: 'hidden' }}>
              <div className="pp-fdining" style={{ width: '100%' }}>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOLDING BED SECTION */}
      <section className="art-pieces" style={{ background: "var(--cream)" }}>
        {PRODUCTS.map((product, index) => (
          <div
            key={product.id}
            className={`art-piece-g ${index % 2 === 1 ? "reverse rv" : "rv"}`}
          >
            {/* Image + View More button */}
            <div className="art-piece-photo">
              <div
                className={`art-piece-photo-inner pp-${product.slug}`}
                style={{
                  width: "100%",
                  aspectRatio: "3/4",
                  position: "relative",
                  backgroundImage: `url(/assets/images/Interior/${product.slug}/${product.cover})`,
                  backgroundSize: "cover",
                }}
              >
                <button
                  className="view-more-btn-foldding"
                  onClick={() => openGallery(product.images, product.slug)}
                >
                </button>
              </div>
            </div>

            {/* Text content */}
            <div>
              <div className="art-piece-num">
                Product {String(product.id).padStart(2, "0")}
              </div>
              <h2 className="art-piece-title">
                {product.title.split(" ").slice(0, -1).join(" ")}{" "}
                <em>{product.title.split(" ").slice(-1)}</em>
              </h2>
              {product.description.map((para, i) => (
                <p key={i} className="art-piece-p">
                  {para}
                </p>
              ))}
              <div className="art-piece-quote">"{product.quote}"</div>
              <div className="art-piece-tags">
                {product.tags.map((tag, i) => (
                  <span key={i} className="art-piece-tag">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* FEATURES */}
      <section className="work-features">
        <div className="work-features-g">
          <div className="rv">
            <div className="eyebrow lt">Why Our Furniture</div>
            <h2 className="work-features-h2">Engineering meets<br /><em>elegance</em></h2>
            <div className="work-feat-list" style={{ marginTop: '2rem' }}>
              {[
                { ic: '⚙️', t: 'Wall Align System — 30 Years Proven', s: 'Our proprietary mechanism has been deployed, validated, and refined over three decades of real-world use in Mumbai homes.' },
                { ic: '🔒', t: 'Hidden Spring Mechanism', s: 'No visible hardware. No awkward supports. The table folds and unfolds smoothly — invisible when closed, elegant when open.' },
                { ic: '🎨', t: 'Custom Finish & Panelling', s: 'Every piece is tailored to your interior palette — with or without decorative wall panelling that makes the furniture disappear when folded.' },
                { ic: '🏗️', t: 'Built for Longevity', s: 'Materials chosen for durability and easy maintenance. This is furniture designed to last decades, not seasons.' },
                { ic: '🏢', t: 'Residential & Luxury Homes', s: 'Works beautifully in compact apartments and as overflow dining in expansive luxury residences. Scales to any brief.' },
                { ic: '📐', t: 'Made-to-Measure Every Time', s: 'No standard sizes. Every bed and dining table is measured, designed, and built specifically for your space.' },
              ].map(f => (
                <div className="wf-item" key={f.t}>
                  <div className="wf-ic">{f.ic}</div>
                  <div><div className="wf-t">{f.t}</div><div className="wf-s">{f.s}</div></div>
                </div>
              ))}
            </div>
          </div>
          <div className="rv d1">
            <div className="work-feat-visual" style={{ backgroundImage: `url(${furnitureElegance})`, backgroundSize: `cover`, backgroundPosition: `center`, }}>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="page-cta">
        <div className="page-cta-bg" aria-hidden="true">FOLDING</div>
        <div className="rv">
          <h2 className="page-cta-h2">Interested in a folding<br />furniture <em>solution</em>?</h2>
          <p className="page-cta-sub">Tell us about your space — the dimensions, the challenge, and what you need it to do. We'll design something that fits perfectly.</p>
        </div>
        <div className="page-cta-btns rv d1">
          <Link className="btn-gold" to="/contact">Get a Consultation</Link>
          <Link className="btn-outline-lt" to="/work-interiors">See Interiors Work</Link>
        </div>
      </section>
    </main>
  );
}
