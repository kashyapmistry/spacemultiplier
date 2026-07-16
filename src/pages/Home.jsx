import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import interiorImg from "../assets/images/Homes/interior-consultancy.png";
import furnitureImg from "../assets/images/Homes/folding-furniture.png";
import artImg from "../assets/images/Homes/illustrated-art.jpg";
import bedImg from "../assets/images/Homes/bedroom-img.avif";
import kitchenImg from "../assets/images/Homes/kitchen-img.jpg";
import bathImg from "../assets/images/Homes/bath-img.avif";
import officeImg from "../assets/images/Homes/hero-banner.jpg";
import artFirst from "../assets/images/Homes/art-sec-first.png";
import artSecond from "../assets/images/Homes/art-sec-second.avif";
import artThird from "../assets/images/Homes/art-sec-third.png";


import '../styles/home.css';

/* ── Marquee items ── */
const MQ_ITEMS = [
  'Interior Design Consultancy', 'Space Optimization', 'Home Renovation', 'Office Design',
  'Folding Dining Tables', 'Folding Beds', 'Wall Align System — 30 Years',
  'Illustrated Life Narratives', 'Hand Lettering Quotes',
];

/* ── Testimonials ── */
const TESTS = [
  { q: 'Spacemultiplier turned our cramped Mumbai apartment into a home that feels twice the size. The folding dining table is nothing short of genius.', a: '— Mumbai Residential Client' },
  { q: 'The illustrated life narrative they created for our anniversary is the most meaningful piece on our walls. Thoughtful, beautiful, and uniquely ours.', a: '— Private Client, Mumbai' },
  { q: 'Our office redesign was completely seamless. They understood exactly what we needed and delivered on time, on budget, and beyond expectations.', a: '— Commercial Client, Mumbai' },
];

/* ── Scroll reveal hook ── */
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

export default function Home() {
  const [loaded, setLoaded] = useState(false);
  const [testIdx, setTestIdx] = useState(0);
  const [testFade, setTestFade] = useState(true);
  const [formSent, setFormSent] = useState(false);
  const pageRef = useScrollReveal();

  useEffect(() => { setTimeout(() => setLoaded(true), 500); }, []);

  useEffect(() => {
    const t = setInterval(() => {
      setTestFade(false);
      setTimeout(() => { setTestIdx(i => (i + 1) % 3); setTestFade(true); }, 380);
    }, 5500);
    return () => clearInterval(t);
  }, []);

  const showTest = (i) => {
    setTestFade(false);
    setTimeout(() => { setTestIdx(i); setTestFade(true); }, 380);
  };

  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    service: '',
    budget: '',
    message: '',
    source: "Home Page"
  });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = e => setForm(s => ({ ...s, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch('/api/submitForm', {   // ✅ Vercel serverless function
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (data.success) {
        setSent(true);
      } else {
        alert('Something went wrong. Please try again.');
      }
    } catch (err) {
      console.error(err);
      alert('Error sending message.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Loader */}
      <div className={`loader${loaded ? ' out' : ''}`}>
        <span className="loader-word">Spacemultiplier</span>
      </div>

      <main ref={pageRef}>
        {/* ── HERO ── */}
        <section className="hero">
          <div className="hero-bg">
            <div className="hero-photo" />
          </div>
          <div className="hero-bar" />
          <div className="hero-body">
            <div className="hero-text">
              <div className="hero-pre">Interior Design · Folding Furniture · Illustrated Art</div>
              <h1 className="hero-h1">Transforming<br /><em>Spaces</em></h1>
              <p className="hero-sub">with innovative design solutions</p>
              <p className="hero-desc">Elevate everyday living through design that is as elegant as it is efficient — engineering insight, material excellence, and a deep understanding of urban living.</p>
              <div className="hero-ctas">
                <button className="btn-gold" onClick={() => scrollTo('services')}>Explore Our Services</button>
                <button className="btn-ghost" onClick={() => scrollTo('folding')}>
                  Signature Furniture
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                </button>
              </div>
            </div>
            <div className="hero-stats">
              {[['30+', 'Years Trusted'], ['3', 'Design Verticals'], ['100s', 'Spaces Done'], ['MUM', 'Based In']].map(([n, l]) => (
                <div className="hst" key={l}><div className="hst-n">{n}</div><div className="hst-l">{l}</div></div>
              ))}
            </div>
          </div>
          <div className="scroll-cue">
            <div className="scroll-line" />
            <span>Scroll</span>
          </div>
        </section>

        {/* ── MARQUEE ── */}
        <div className="marquee" aria-hidden="true">
          <div className="mq-track">
            {[...MQ_ITEMS, ...MQ_ITEMS].map((item, i) => (
              <span className="mq-item" key={i}>{item}<span className="mq-dot" /></span>
            ))}
          </div>
        </div>

        {/* ── ABOUT ── */}
        <section className="home-about" id="about">
          <div className="home-about-g">
            <div className="about-img-col rv">
              <div className="about-img">
                <div className="about-photo">
                </div>
              </div>
              <div className="about-badge"><div className="ab-n">30+</div><div className="ab-l">Years of<br />Excellence</div></div>
            </div>
            <div className="rv d1">
              <div className="eyebrow lt">Our Philosophy</div>
              <h2 className="about-h2">Functional <em>elegance</em>,<br />crafted for urban living</h2>
              <p className="about-p">At Space Multiplier, our philosophy is simple yet refined: elevate everyday living through design that is as elegant as it is efficient. Each piece we install is the result of engineering insight, material excellence, and a deep understanding of urban living — be it residential or commercial.</p>
              <div className="divider" />
              <p className="about-p">We believe that intelligent design transforms the way we live. Based in Mumbai, we specialise in high-performance, space-saving interior solutions and their execution — from full interiors to a single remarkable piece of furniture or art.</p>
              <p className="about-p" style={{ marginTop: '.85rem' }}>Experience the future of functional elegance — crafted, curated, and quietly revolutionary.</p>
              <div className="wa-pill"><div className="wa-dot" /><span className="wa-txt">Wall Align System · Trusted 30+ Years · Mumbai</span></div>
            </div>
          </div>
        </section>

        {/* ── SERVICES ── */}
        <section className="services" id="services">
          <div className="svc-top">
            <div className="rv">
              <div className="eyebrow">What We Do</div>
              <h2 className="sec-h2">Three design verticals,<br />one <em>unified</em> vision</h2>
            </div>
            <p className="svc-desc rv d1">From transforming entire interiors to crafting a single remarkable piece of furniture or art — every Spacemultiplier engagement is guided by precision, purpose, and beauty.</p>
          </div>
          <div className="svc-grid">
            {[
              { ph: 'svc-ph-1', num: '01', title: 'Interior Design Consultancy', desc: 'End-to-end design blending aesthetics, ergonomics, and intelligent use of every square foot — residential or commercial.', chips: ['Space Optimization', 'Home Renovation', 'Office Design'], cta: 'Enquire Now →', delay: '', imgs: interiorImg },
              { ph: 'svc-ph-2', num: '02', title: 'Customised Folding Furniture', desc: 'Our Wall Align system — trusted 30+ years — delivers foldable beds and dining tables that are stylish, durable, and effortless.', chips: ['Folding Bed', 'Dining Table', 'With / Without Panelling'], cta: 'Enquire Now →', delay: 'd1', imgs: furnitureImg },
              { ph: 'svc-ph-3', num: '03', title: 'Illustrated Art', desc: 'Bespoke illustrated art — life narrative illustrations and hand-lettered quotes — each piece bringing warmth and meaning to your walls.', chips: ['Life Narrative', 'Hand Lettering', 'Custom Quotes'], cta: 'Commission a Piece →', delay: 'd2', imgs: artImg },
            ].map(s => (
              <div className={`svc-card rv ${s.delay}`} key={s.num}>
                <div className={`svc-photo ${s.ph}`}>
                  <div className="svc-veil" style={{ backgroundImage: `url(${s.imgs})`, backgroundSize: 'cover', backgroundPosition: 'center' }} /><div className="svc-num">{s.num}</div>
                </div>
                <div className="svc-body">
                  <div className="svc-title">{s.title}</div>
                  <p className="svc-p">{s.desc}</p>
                  <div className="svc-chips">{s.chips.map(c => <span className="chip" key={c}>{c}</span>)}</div>
                  <button className="svc-link" onClick={() => scrollTo('contact')}>{s.cta}</button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── FOLDING FURNITURE ── */}
        <section className="folding" id="folding">
          <div className="fold-g">
            <div className="rv">
              <div className="fold-main">
                <div className="fold-ph"></div>
                <div className="fold-label">Wall Align System</div>
              </div>
            </div>
            <div className="rv d1">
              <div className="eyebrow">Signature Product</div>
              <h2 className="fold-h2">Furniture that <em>disappears</em><br />when you need it to</h2>
              <p className="fold-p">Our signature folding dining tables are the result of three decades of engineering refinement. The Wall Align system makes deployment and storage effortless — designed to slot invisibly into any interior, from compact Mumbai apartments to expansive residences.</p>
              <p className="fold-p">Available with and without wall panelling — great living doesn't require more space, it requires <em>smarter</em> space.</p>
              <div className="feats">
                {[
                  { ic: '⚙️', t: 'Engineered for longevity', s: 'Time-tested Wall Align mechanism — validated, easy-care, hassle-free since 30+ years' },
                  { ic: '🎨', t: 'Custom finish & panelling', s: 'Tailored to your interior palette — with or without decorative wall panelling' },
                  { ic: '📐', t: 'Built for Mumbai living', s: 'Compact apartments and expansive residences — every space made smarter' },
                ].map(f => (
                  <div className="feat" key={f.t}><div className="feat-ic">{f.ic}</div><div><div className="feat-t">{f.t}</div><div className="feat-s">{f.s}</div></div></div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── GALLERY ── */}
        <section className="gallery" id="gallery">
          <div className="gal-head">
            <div className="rv">
              <div className="eyebrow lt">Our Work</div>
              <h2 className="sec-h2" style={{ color: 'var(--cream)' }}>Spaces we have <em>transformed</em></h2>
            </div>
            <p className="gal-p rv d1">Each project is a dialogue between the client's aspirations and our design sensibility — resulting in spaces that feel entirely personal, effortlessly refined.</p>
          </div>
          <div className="gal-grid rv">
            {[
              { cls: 'gc tall', ph: 'gc-ph gc-bedroom', tag: 'Bedroom · Residential', imgs: bedImg },
              { cls: 'gc', ph: 'gc-ph gc-kitchen', tag: 'Kitchen · Residential', imgs: kitchenImg },
              { cls: 'gc', ph: 'gc-ph gc-bathroom', tag: 'Bathroom · Residential', imgs: bathImg },
              { cls: 'gc wide', ph: 'gc-ph gc-office', tag: 'Office · Commercial', imgs: officeImg },
            ].map(g => (
              <div className={g.cls} key={g.tag}>
                <div className={g.ph} style={{ backgroundImage: `url(${g.imgs})`, backgroundSize: 'cover', backgroundPosition: 'center' }} /><div className="gc-veil" /><div className="gc-tag">{g.tag}</div>
              </div>
            ))}
          </div>
        </section>

        {/* ── ART ── */}
        <section className="art-section" id="art">
          <div className="art-g">
            <div className="art-imgs rv">
              <div className="art-img tall"><div className="art-ph art-ph-1" style={{ backgroundImage: `url(${artFirst})`, backgroundSize: 'cover', }} /></div>
              <div className="art-img"><div className="art-ph art-ph-2" style={{ backgroundImage: `url(${artSecond})`, backgroundSize: 'cover', }} /></div>
              <div className="art-img"><div className="art-ph art-ph-3" style={{ backgroundImage: `url(${artThird})`, backgroundSize: 'cover', }} /></div>
            </div>
            <div className="rv d1">
              <div className="eyebrow">Illustrated Art</div>
              <h2 className="sec-h2" style={{ marginBottom: '1rem' }}>Art that holds<br />your <em>story</em></h2>
              <p className="art-p">Beyond interiors and furniture, Spacemultiplier creates bespoke illustrated artwork — deeply personal, beautifully crafted, and made to live on your walls for years.</p>
              <div className="art-list">
                {[
                  { t: 'Illustrated Life Narrative', s: 'A visual story of your journey — milestones, memories, and meaning' },
                  { t: 'Hand Lettering Quotes', s: 'Words that matter, rendered by hand with precision and artistry' },
                ].map(a => (
                  <div className="art-item" key={a.t}>
                    <div className="art-gem" />
                    <div><div className="art-item-t">{a.t}</div><div className="art-item-s">{a.s}</div></div>
                  </div>
                ))}
              </div>
              <button className="btn-gold" style={{ marginTop: '2rem' }} onClick={() => scrollTo('contact')}>Commission a Piece</button>
            </div>
          </div>
        </section>

        {/* ── PROCESS ── */}
        <section className="process" id="process">
          <div className="eyebrow rv">How We Work</div>
          <h2 className="proc-h2 rv d1">From conversation to <em>completion</em></h2>
          <div className="steps">
            {[
              { n: '01', t: 'Discover', d: 'We begin by listening — understanding your space, lifestyle, needs, and aspirations through a detailed consultation.' },
              { n: '02', t: 'Design', d: 'Concepts, layouts, material palettes, and product selections are developed and presented for your feedback and refinement.' },
              { n: '03', t: 'Craft', d: 'We execute with precision — custom furniture, fit-out work, art commissions, and installations managed end-to-end.' },
              { n: '04', t: 'Deliver', d: 'Your transformed space is handed over — beautifully finished, functioning flawlessly, and made to be lived in and loved.' },
            ].map((s, i) => (
              <div className={`step rv d${i}`} key={s.n}>
                <div className="step-n">{s.n}</div>
                <div className="step-t">{s.t}</div>
                <p className="step-d">{s.d}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── TESTIMONIAL ── */}
        <section className="testimonial">
          <div className="test-bg" aria-hidden="true">LUXURY</div>
          <div className="test-orn">"</div>
          <p className="test-q" style={{ opacity: testFade ? 1 : 0 }}>{TESTS[testIdx].q}</p>
          <div className="test-by" style={{ opacity: testFade ? 1 : 0 }}>{TESTS[testIdx].a}</div>
          <div className="test-dots">
            {TESTS.map((_, i) => (
              <button key={i} className={`tdot${i === testIdx ? ' on' : ''}`} onClick={() => showTest(i)} aria-label={`Testimonial ${i + 1}`} />
            ))}
          </div>
        </section>

        {/* ── CONTACT ── */}
        <section className="contact" id="contact">
          <div className="contact-g">
            <div className="rv">
              <div className="eyebrow">Get In Touch</div>
              <h2 className="contact-h2">Let's transform<br />your <em>space</em></h2>
              <p className="contact-sub">Whether planning a full interior, curious about folding furniture, or wanting to commission illustrated art — we'd love to hear from you.</p>
              <div className="cinfo">
                <div><div className="ci-lbl">Phone</div><div className="ci-val"><a href="tel:+919967374606">+91 9967374606</a></div></div>
                <div><div className="ci-lbl">Email</div><div className="ci-val"><a href="mailto:space.multiplier@gmail.com">space.multiplier@gmail.com</a></div></div>
                <div><div className="ci-lbl">City</div><div className="ci-val">Mumbai, Maharashtra, India</div></div>
                <div>
                  <div className="ci-lbl">Follow Us</div>
                  <div className="soc-row">
                    <a className="soc" href="https://www.instagram.com/space.multiplier/" target="_blank" rel="noopener noreferrer">Instagram</a>
                    <a className="soc" href="https://www.facebook.com/profile.php?id=61574037721815" target="_blank" rel="noopener noreferrer">Facebook</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="rv d1">
              {sent ? (
                <div className="contact-success">
                  <div className="contact-success-icon">✉️</div>
                  <div className="contact-success-title">Message Sent!</div>
                  <p className="contact-success-p">
                    Thank you for reaching out. We'll get back to you within 24 hours.
                  </p>
                  <div className="contact-success-line" />
                </div>
              ) : (
                <form className="cform" onSubmit={handleSubmit}>
                  <div className="f2">
                    <div className="fg">
                      <label className="fl">First Name</label>
                      <input
                        type="text"
                        className="fi"
                        name="firstName"
                        value={form.firstName}
                        onChange={handleChange}
                        placeholder="Amit"
                        required
                      />
                    </div>
                    <div className="fg">
                      <label className="fl">Last Name</label>
                      <input
                        type="text"
                        className="fi"
                        name="lastName"
                        value={form.lastName}
                        onChange={handleChange}
                        placeholder="Shah"
                        required
                      />
                    </div>
                  </div>

                  <div className="fg">
                    <label className="fl">Email</label>
                    <input
                      type="email"
                      className="fi"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="amit@example.com"
                      required
                    />
                  </div>

                  <div className="fg">
                    <label className="fl">Phone</label>
                    <input
                      type="tel"
                      className="fi"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="+91 98xxx xxxxx"
                    />
                  </div>

                  <div className="fg">
                    <label className="fl">I'm interested in</label>
                    <select
                      className="fi"
                      name="service"
                      value={form.service}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select a service…</option>
                      <option>Interior Design Consultancy</option>
                      <option>Folding Furniture — Dining Table</option>
                      <option>Folding Furniture — Bed</option>
                      <option>Illustrated Art</option>
                      <option>Multiple Services</option>
                    </select>
                  </div>

                  <div className="fg">
                    <label className="fl">Tell us about your project</label>
                    <textarea
                      className="fi"
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Your space, city, timeline, brief…"
                    />
                  </div>

                  <button type="submit" className="fsub" disabled={loading}>
                    {loading ? (
                      <>
                        <span className="spinner"></span> Submitting...
                      </>
                    ) : (
                      "Submit"
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
