/**
 * Contact.jsx
 * ───────────
 * 1. Drop this file into:  src/pages/Contact.jsx
 * 2. Add contact.css classes to:  src/styles/pages.css  (see contact.css file)
 * 3. Add to App.jsx:
 *      import Contact from './pages/Contact';
 *      <Route path="/contact" element={<Contact />} />
 * 4. Add to Nav.jsx NAV_ITEMS:
 *      { label: 'Contact Us', to: '/contact' }
 */

import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/pages.css';
import '../styles/contact.css';

function useScrollReveal() {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) { e.target.classList.add('in'); obs.unobserve(e.target); }
      }),
      { threshold: 0.1 }
    );
    el.querySelectorAll('.rv').forEach(t => obs.observe(t));
    return () => obs.disconnect();
  }, []);
  return ref;
}

const FAQS = [
  { q: 'How do I get started with a project?', a: "Simply reach out via the form or call us on +91 9967374606. We'll schedule an initial consultation — at your space or over a call — to understand your needs and brief." },
  { q: 'What areas in Mumbai do you serve?', a: 'We work across all of Mumbai — Bandra, Andheri, Juhu, Powai, Thane and beyond. No location is too far for the right project.' },
  { q: 'How long does an interior design project take?', a: 'A single-room redesign typically takes 4–8 weeks. A full residence can take 3–6 months. We give you a clear timeline at the start and stick to it.' },
  { q: 'Can I order just a folding dining table without a full interior project?', a: 'Absolutely. Our folding furniture — beds and dining tables — can be ordered as standalone pieces. We measure, customise, and install without requiring a larger interior engagement.' },
  { q: 'How long does an illustrated art commission take?', a: 'Most illustrated life narratives take 3–4 weeks from consultation to delivery. Hand-lettered quotes are typically 1–2 weeks. We share progress at each stage.' },
  { q: 'What is your pricing like?', a: 'Every project is custom so pricing varies by scope, size, and materials. We provide a detailed quote after the initial consultation — transparent pricing, no hidden costs.' },
];

export default function Contact() {
  const pageRef = useScrollReveal();
  const [openFaq, setOpenFaq] = useState(null);

   const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    service: '',
    budget: '',
    message: '',
    source: "Contact Page"
  });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const handleChange = e => setForm(s => ({ ...s, [e.target.name]: e.target.value }));
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch('https://spacemultiplier.onrender.com/contact', {   // ✅ matches backend route
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
      setLoading(false); // hide loading after response
    }
  };
  return (
    <main ref={pageRef}>

      {/* ── HERO ── */}
      <section className="page-hero">
        <div className="contact-hero-bg" />
        <div className="page-hero-bar" />
        <div className="page-hero-content">
          <div className="page-crumb">
            <Link to="/">Home</Link>
            <span>/</span>
            <span style={{ color: 'rgba(255,255,255,.65)' }}>Contact Us</span>
          </div>
          <div className="page-hero-tag">Get In Touch</div>
          <h1 className="page-hero-h1">Let's <em>talk</em></h1>
          <p className="page-hero-sub">We'd love to hear about your space</p>
        </div>
      </section>

      {/* ── INFO STRIP ── */}
      <div className="contact-strip">
        <div className="contact-strip-grid">
          {[
            { ic: '📞', label: 'Phone', val: <a href="tel:+919967374606">+91 9967374606</a> },
            { ic: '✉️', label: 'Email', val: <a href="mailto:space.multiplier@gmail.com">space.multiplier@gmail.com</a> },
            { ic: '📍', label: 'City',  val: 'Mumbai, Maharashtra, India' },
            { ic: '🕐', label: 'Studio Hours', val: 'Mon – Sat,  9 AM – 7 PM' },
          ].map(c => (
            <div className="contact-strip-card rv" key={c.label}>
              <div className="cs-icon">{c.ic}</div>
              <div className="cs-label">{c.label}</div>
              <div className="cs-val">{c.val}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ── MAIN GRID ── */}
      <section className="contact-main">
        <div className="contact-main-grid">

          {/* LEFT — info + map */}
          <div className="rv">
            <div className="eyebrow">Contact Information</div>
            <h2 className="sec-h2" style={{ marginBottom: '1rem' }}>
              Start a <em>conversation</em>
            </h2>
            <p className="contact-intro-p">
              Whether you're planning a full interior design project, curious about our folding
              furniture, or want to commission a piece of illustrated art — we'd love to hear
              from you. Every great space begins with a conversation.
            </p>

            <div className="contact-info-list">
              {[
                { label: 'Phone',   val: <a href="tel:+919967374606">+91 9967374606</a> },
                { label: 'Email',   val: <a href="mailto:space.multiplier@gmail.com">space.multiplier@gmail.com</a> },
                { label: 'Based In', val: 'Mumbai, Maharashtra, India' },
                { label: 'Studio Hours', val: 'Monday – Saturday, 9:00 AM – 7:00 PM' },
              ].map(c => (
                <div className="ci-row" key={c.label}>
                  <div className="ci-lbl">{c.label}</div>
                  <div className="ci-val">{c.val}</div>
                </div>
              ))}

              <div className="ci-row">
                <div className="ci-lbl">Follow Us</div>
                <div className="contact-soc-row">
                  <a className="contact-soc" href="https://www.instagram.com/space.multiplier/" target="_blank" rel="noopener noreferrer">Instagram</a>
                  <a className="contact-soc" href="https://www.facebook.com/profile.php?id=61574037721815" target="_blank" rel="noopener noreferrer">Facebook</a>
                </div>
              </div>
            </div>

            <div className="divider" />

            {/* CSS map */}
            <div className="contact-map">
              <div className="contact-map-grid" />
              <div className="contact-map-road-h" />
              <div className="contact-map-road-h" style={{ top: '65%', opacity: .5 }} />
              <div className="contact-map-road-v" />
              <div className="contact-map-road-v" style={{ left: '68%', opacity: .5 }} />
              <div className="contact-map-pin">
                <div className="contact-map-dot" />
                <div className="contact-map-line" />
              </div>
              <div className="contact-map-label">Mumbai, Maharashtra</div>
            </div>
          </div>

          {/* RIGHT — form */}
          <div className="rv d1">
            <div className="eyebrow">Send Us a Message</div>
            <h2 className="sec-h2" style={{ marginBottom: '2rem' }}>
              Tell us about your <em>project</em>
            </h2>

            {sent ? (
              <div className="contact-success">
                <div className="contact-success-icon">✉️</div>
                <div className="contact-success-title">Message Sent!</div>
                <p className="contact-success-p">Thank you for reaching out. We'll get back to you within 24 hours.</p>
                <div className="contact-success-line" />
              </div>
            ) : (
              <form className="cform" onSubmit={handleSubmit}>
                <div className="f2">
                  <div className="fg">
                    <label className="fl">First Name *</label>
                    <input className="fi" type="text" name="firstName" placeholder="Amit" required value={form.firstName} onChange={handleChange} />
                  </div>
                  <div className="fg">
                    <label className="fl">Last Name</label>
                    <input className="fi" type="text" name="lastName" placeholder="Shah" value={form.lastName} onChange={handleChange} />
                  </div>
                </div>
                <div className="fg">
                  <label className="fl">Email Address *</label>
                  <input className="fi" type="email" name="email" placeholder="amit@example.com" required value={form.email} onChange={handleChange} />
                </div>
                <div className="fg">
                  <label className="fl">Phone Number</label>
                  <input className="fi" type="tel" name="phone" placeholder="+91 98765 43210" value={form.phone} onChange={handleChange} />
                </div>
                <div className="fg">
                  <label className="fl">I'm Interested In *</label>
                  <select className="fi" name="service" required value={form.service} onChange={handleChange}>
                    <option value="">Select a service…</option>
                    <option>Interior Design Consultancy</option>
                    <option>Folding Furniture — Dining Table</option>
                    <option>Folding Furniture — Bed</option>
                    <option>Illustrated Art — Life Narrative</option>
                    <option>Illustrated Art — Hand Lettering</option>
                    <option>Illustrated Art — Vastu Shastra</option>
                    <option>Multiple Services</option>
                  </select>
                </div>
                <div className="fg">
                  <label className="fl">Budget Range</label>
                  <select className="fi" name="budget" value={form.budget} onChange={handleChange}>
                    <option value="">Prefer not to say</option>
                    <option>Under ₹5 Lakhs</option>
                    <option>₹5 – ₹15 Lakhs</option>
                    <option>₹15 – ₹30 Lakhs</option>
                    <option>₹30 – ₹50 Lakhs</option>
                    <option>₹50 Lakhs+</option>
                  </select>
                </div>
                <div className="fg">
                  <label className="fl">Tell Us About Your Project *</label>
                  <textarea className="fi" name="message" rows={5}
                    placeholder="Your space (size, location), what you want to achieve, your timeline…"
                    required value={form.message} onChange={handleChange} />
                </div>
                <button type="submit" className="fsub" disabled={loading}>
                  {loading ? (
                    <>
                      <span className="spinner"></span> Submitting...
                    </>
                    ) : ( "Submit" )
                  }
                  </button>
 
                <p className="contact-form-note">We typically respond within 24 hours. Your details are kept private.</p>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* ── STATS BAND ── */}
      <section className="contact-band">
        {[
          { n: '30+',  label: 'Years of Trust',    desc: 'Three decades of Mumbai clients returning and referring.' },
          { n: '500+', label: 'Projects Completed', desc: 'Residences, offices, furniture, and art — every one bespoke.' },
          { n: '24hr', label: 'Response Time',      desc: 'We get back to every enquiry within 24 hours, always.' },
        ].map((b, i) => (
          <div className={`contact-band-card rv d${i}`} key={b.label}>
            <div className="cbc-num">{b.n}</div>
            <div className="cbc-label">{b.label}</div>
            <div className="cbc-desc">{b.desc}</div>
          </div>
        ))}
      </section>

      {/* ── FAQ ── */}
      <section className="contact-faq">
        <div className="rv">
          <div className="eyebrow">Frequently Asked</div>
          <h2 className="sec-h2">Questions we <em>hear often</em></h2>
        </div>
        <div className="contact-faq-grid rv d1">
          {FAQS.map((faq, i) => (
            <div className="faq-item" key={i}>
              <button className="faq-q" onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                <span>{faq.q}</span>
                <span className={`faq-icon${openFaq === i ? ' open' : ''}`}>+</span>
              </button>
              <div className={`faq-a${openFaq === i ? ' open' : ''}`}>
                {faq.a}
              </div>
              <div className="faq-divider" />
            </div>
          ))}
        </div>
      </section>

      {/* ── BOTTOM CTA ── */}
      <section className="contact-cta">
        <div className="contact-cta-bg" aria-hidden="true">MUMBAI</div>
        <div className="contact-cta-bar" />
        <div className="contact-cta-inner rv">
          <div>
            <h2 className="contact-cta-h2">
              Not sure where to start?<br />
              <em>That's exactly why we're here.</em>
            </h2>
            <p className="contact-cta-p">
              Many of our best projects began with a client who just had a feeling that their
              space could be better. Call us — we'll figure out the rest together.
            </p>
          </div>
          <div className="contact-cta-btns rv d1">
            <a href="tel:+919967374606" className="btn-gold">Call Us Now</a>
            <Link to="/services" className="contact-cta-outline">Explore Services</Link>
          </div>
        </div>
      </section>

    </main>
  );
}
