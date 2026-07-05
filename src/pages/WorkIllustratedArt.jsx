import { useRef, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import '../styles/pages.css';
import bannerImg from "../assets/images/Interior/banner-img.jpg"

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

const INTRO_CONTENT = {
  eyebrow: "Illustrated Art",
  heading: "Art that holds your story",
  description: [
    "Beyond interiors and furniture, Spacemultiplier creates bespoke illustrated artwork — deeply personal, beautifully crafted, and made to live on your walls for years. Each piece is entirely unique to you.",
    "From illustrated life narratives and Vastu Shastra artworks to custom hand‑lettered quotes — our illustrated art practice is rooted in the belief that your walls deserve words and images that truly speak to you.",
  ],
  pills: [ "Life Narrative", "Vastu Shastra Art" ,"Hand Lettering", "Custom Quotes", "Gifting",],
  imgbox: [
    { image: ["18.jpeg","19.jpeg","4.jpg","30.png"], className: ["pp-art-narrative","pp-art-vastu","pp-art-team","pp-art-quote"] }
  ]
};

const ART_PIECES = [
  {
    id: 1,
    num: "Art Type 01",
    title: "Illustrated Life Narrative",
    em: "Narrative",
    photoClass: "pp-art-narrative",
    reverse: false,
    description: [
      "This is a custom hand-illustrated artwork that visually narrates a person's life story. Through detailed line art, portraits, symbols, typography, and meaningful doodles, each piece captures memories, relationships, milestones, passions, and places — all woven into a single cohesive composition.",
      "An ideal gift for birthdays, anniversaries, graduation, farewell, and personal milestones. Each piece takes weeks of consultation and craft to produce — because your story deserves that care.",
    ],
    quote:
      "Every illustration is one-of-a-kind, deeply personal, and designed as timeless hand-drawn art. Turning memories into timeless art!",
    tags: [
      "Line Art",
      "Portraits",
      "Symbols & Doodles",
      "Typography",
      "Anniversary Gift",
      "Birthday Gift",
    ],
    images: "16.png",
  },
  {
    id: 2,
    num: "Art Type 02 — Vastu Shastra Artwork",
    title: "I AM",
    em: "AM",
    photoClass: "pp-art-vastu",
    reverse: true,
    description: [
      "This Vastu Shastra artwork is created to bring positive energy and intentional affirmation into your space. Rooted in ancient wisdom and rendered in contemporary illustration, it serves as a daily reminder of your own power and agency.",
    ],
    quote:
      "You are the Creator of Your Destiny — Elevate yourself through the power of your mind, and not degrade yourself, for the mind can be the friend and also the enemy of the self.",
    cite: "— Shreemad Bhagwad Geeta 6.5",
    tags: ["Vastu Shastra", "Affirmation Art", "Bhagwad Geeta", "Home & Office"],
    images: "8.jpg",
  },
  {
    id: 3,
    num: "Art Type 03 — Vastu Shastra Artwork",
    title: "TEAMWORK",
    em: "WORK",
    photoClass: "pp-art-team",
    reverse: false,
    description: [
      "Key principles include performing duties, leading by example, and supporting teammates for a higher purpose. This artwork is ideal for offices, boardrooms, and collaborative workspaces — a daily visual anchor for teams that aspire to something greater.",
    ],
    quote:
      "Act dutifully — The Bhagavad Gita emphasizes teamwork through selfless action (Nishkaam Karma), focusing on collective goals rather than individual ego, and maintaining harmonious cooperation.",
    cite: "— Shreemad Bhagwad Geeta 3.19",
    tags: ["Vastu Shastra", "Office Art", "Nishkaam Karma", "Corporate Gifting"],
    images: "24.png",
  },
  {
    id: 4,
    num: "Art Type 04",
    title: "Hand Lettered Quotes",
    em: "Quotes",
    photoClass: "pp-art-quote",
    reverse: true,
    description: [
      "This is a custom artwork thoughtfully designed to match your space, your vibe, and your personality — whether you want something calming, motivational, spiritual, or aesthetic.",
    ],
    quote:
      "From elegant cursive scripts to bold modern lettering, we create one-of-a-kind personalised quote frames that make perfect décor pieces for homes, offices, cafes, gifting, and special occasions.",
    tags: [
      "Cursive Scripts",
      "Bold Modern Lettering",
      "Home Décor",
      "Office Décor",
      "Cafes",
      "Gifting",
      "Special Occasions",
    ],
    images: "31.png",
  },
];
const WORK_TABS = [
  { label: 'Interiors', to: '/work-interiors' },
  { label: 'Folding Furniture', to: '/work-folding-furniture' },
  { label: 'Illustrated Art', to: '/work-illustrated-art' },
];

export default function WorkIllustratedArt() {
  const pageRef = useScrollReveal();

  return (
    <main ref={pageRef}>
      {/* PAGE HERO */}
      <section className="page-hero">
        <div style={{
          position:'absolute',inset:0,
          background:`url(${bannerImg})`,
          backgroundSize: 'cover',
          animation:'phzoom 12s ease forwards',
        }}>
        </div>
        <div className="page-hero-bar" />
        <div className="page-hero-content">
          {/* <div className="page-crumb">
            <Link to="/">Home</Link><span>/</span>
            <Link to="/services">Services</Link><span>/</span>
            <span style={{color:'rgba(255,255,255,.65)'}}>Work — Illustrated Art</span>
          </div> */}
          <div className="page-hero-tag">Our Work</div>
          <h1 className="page-hero-h1">Work — <em>Illustrated</em><br/>Art</h1>
          <p className="page-hero-sub">Turning memories into timeless art</p>
        </div>
      </section>

      {/* WORK TAB NAV */}
      <nav className="work-tabs" aria-label="Work categories">
        {WORK_TABS.map(t => (
          <NavLink key={t.to} to={t.to} className={({isActive}) => `work-tab${isActive ? ' active' : ''}`}>
            {t.label}
          </NavLink>
        ))}
      </nav>

      {/* INTRO */}
      <section className="work-intro">
        <div className="work-intro-g">
          <div className="rv">
            <div className="eyebrow">{INTRO_CONTENT.eyebrow}</div>
            <h2 className="work-intro-h2">
              {INTRO_CONTENT.heading.split("your")[0]}
              <br />
              your <em>story</em>
            </h2>

            {INTRO_CONTENT.description.map((desc, i) => (
              <p key={i} className="work-intro-p">
                {desc}
              </p>
            ))}

            <div className="work-intro-pills">
              {INTRO_CONTENT.pills.map((pill) => (
                <span key={pill} className="work-pill">{pill}</span>
              ))}
            </div>
          </div>

          <div className="rv d1">
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: ".8rem",
              }}
            >
              {INTRO_CONTENT.imgbox[0].image.map((img, i) => (
                <div
                  key={i}
                  className={INTRO_CONTENT.imgbox[0].className[i]}
                  style={{
                    borderRadius: "0",
                    backgroundImage: `url(/assets/images/Interior/illustrate-art/${img})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center"
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
      

      {/* ART PIECES — detailed */}
      <section className="art-pieces">
      {ART_PIECES.map((piece) => (
        <div
          key={piece.id}
          className={`art-piece-g rv ${piece.reverse ? "reverse" : ""}`}
        >
          <div className="art-piece-photo">
            <div
              className={`art-piece-photo-inner-art ${piece.photoClass}`}
              style={{ width: "100%", aspectRatio: "3/4", backgroundImage: `url(/assets/images/Interior/illustrate-art/${piece.images})`, backgroundSize: "cover", backgroundPosition: "center" }}
            />
          </div>
          <div>
            <div className="art-piece-num">{piece.num}</div>
            <h2 className="art-piece-title">
              {piece.title.replace(piece.em, "")}
              <br />
              <em>{piece.em}</em>
            </h2>
            {piece.description.map((d, i) => (
              <p key={i} className="art-piece-p">
                {d}
              </p>
            ))}
            <div className="art-piece-quote">
              "{piece.quote}"
              {piece.cite && (
                <cite
                  style={{
                    marginTop: ".5rem",
                    display: "block",
                    fontSize: ".65rem",
                    letterSpacing: ".12em",
                    textTransform: "uppercase",
                    color: "var(--gold)",
                  }}
                >
                  {piece.cite}
                </cite>
              )}
            </div>
            <div className="art-piece-tags">
              {piece.tags.map((tag) => (
                <span key={tag} className="art-piece-tag">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </section>

      {/* IDEAL FOR */}
      <section className="work-features">
        <div className="work-features-g">
          <div className="rv">
            <div className="eyebrow lt">Perfect For</div>
            <h2 className="work-features-h2">When to commission<br/><em>illustrated art</em></h2>
            <div className="work-feat-list" style={{marginTop:'2rem'}}>
              {[
                { ic:'🎂', t:'Birthdays & Anniversaries', s:'A life narrative illustration is the most personal gift you can give — a visual celebration of a life well-lived.' },
                { ic:'🎓', t:'Graduation & Farewell', s:'Mark a milestone with art that captures the journey — friends, places, passions, and the path ahead.' },
                { ic:'🏠', t:'New Home Gifting', s:'Commission a piece that reflects the personality of the space and the people who will live in it.' },
                { ic:'🏢', t:'Office & Corporate Spaces', s:'Vastu Shastra artworks and team-focused lettering pieces bring intention and energy to professional environments.' },
                { ic:'☕', t:'Cafes & Hospitality', s:'Custom quote lettering pieces that define the atmosphere and brand personality of a space.' },
                { ic:'🌟', t:'Personal Milestones', s:'Career achievements, spiritual journeys, personal transformations — any moment worth remembering is worth illustrating.' },
              ].map(f => (
                <div className="wf-item" key={f.t}>
                  <div className="wf-ic">{f.ic}</div>
                  <div><div className="wf-t">{f.t}</div><div className="wf-s">{f.s}</div></div>
                </div>
              ))}
            </div>
          </div>
          <div className="rv d1">
            <div style={{display:'grid',gridTemplateColumns:'1fr',gap:'1rem'}}>
              <div className="pp-art-narrative" style={{width:'100%',aspectRatio:'3/4',position:'relative',background: 'url(/assets/images/Interior/illustrate-art/27.png)',backgroundSize: 'cover'}}/>
              <div style={{padding:'1.8rem',background:'rgba(255,255,255,.03)',border:'.5px solid rgba(255,255,255,.08)'}}>
                <div style={{fontSize:'.62rem',letterSpacing:'.2em',textTransform:'uppercase',color:'var(--gold)',marginBottom:'.5rem'}}>Process</div>
                <div style={{fontFamily:'var(--serif)',fontSize:'1rem',color:'var(--cream)',lineHeight:'1.6',fontStyle:'italic'}}>"Every piece begins with a conversation — your memories, your moments, your meaning. We then craft something that holds all of it."</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="page-cta">
        <div className="page-cta-bg" aria-hidden="true">ART</div>
        <div className="rv">
          <h2 className="page-cta-h2">Commission a piece<br/>that tells your <em>story</em></h2>
          <p className="page-cta-sub">Share the occasion, the person, and the story. We'll design something they will treasure for a lifetime.</p>
        </div>
        <div className="page-cta-btns rv d1">
          <Link className="btn-gold" to="/contact">Start a Commission</Link>
          <Link className="btn-outline-lt" to="/work-folding-furniture">See Furniture Work</Link>
        </div>
      </section>
    </main>
  );
}
