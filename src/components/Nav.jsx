import { useState, useEffect } from 'react';
import { Link, useLocation, NavLink } from 'react-router-dom';
import '../styles/nav.css';

const LogoIcon = () => (
  <svg className="nav-logo-icon" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="2" y="2" width="32" height="32" stroke="#b5862a" strokeWidth=".8"/>
    <rect x="6" y="10" width="16" height="11" fill="none" stroke="#b5862a" strokeWidth=".8"/>
    <rect x="14" y="15" width="16" height="11" fill="none" stroke="#b5862a" strokeWidth=".8"/>
    <rect x="14" y="15" width="8" height="6" fill="#b5862a" opacity=".3"/>
    <circle cx="18" cy="6" r="1.2" fill="#b5862a"/>
  </svg>
);

const NAV_ITEMS = [
  { label: 'Home',               to: '/' },
  { label: 'About Us',           to: '/about' },
  { label: 'Services',           to: '/services' },
  { label: 'Work — Interiors',   to: '/work-interiors' },
  { label: 'Folding Furniture',  to: '/work-folding-furniture' },
  { label: 'Illustrated Art',    to: '/work-illustrated-art' },
];

export default function Nav() {
  const [solid, setSolid] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 50);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = drawerOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [drawerOpen]);

  useEffect(() => { setDrawerOpen(false); }, [location]);

  const handleHashLink = (e, to) => {
    if (to.startsWith('/#')) {
      e.preventDefault();
      setDrawerOpen(false);
      if (location.pathname !== '/') {
        window.location.href = to;
      } else {
        const id = to.replace('/#', '');
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <>
      <nav className={`nav${solid ? ' solid' : ''}`}>
        <Link className="nav-logo" to="/">
          <LogoIcon />
          <span className="nav-logo-text">
            <span className="nav-logo-name">Spacemultiplier</span>
            {/* <span className="nav-logo-sub">Design Studio · Mumbai</span> */}
          </span>
        </Link>

        <ul className="nav-links">
          {NAV_ITEMS.map(item => (
            <li key={item.to}>
              <NavLink
                to={item.to}
                className={({ isActive }) => isActive ? 'active' : ''}
                end={item.to === '/'}
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <a className="nav-cta" href="/contact" onClick={(e) => handleHashLink(e, '/contact')}>
          Contact Us
        </a>

        <button
          className={`burger${drawerOpen ? ' open' : ''}`}
          onClick={() => setDrawerOpen(o => !o)}
          aria-label="Toggle menu"
        >
          <span /><span /><span />
        </button>
      </nav>

      {/* Mobile Drawer */}
      <div className={`drawer${drawerOpen ? ' show' : ''}`}>
        <div>
        {NAV_ITEMS.map(item => (
          <Link key={item.to} to={item.to} onClick={() => setDrawerOpen(false)}>
            {item.label}
          </Link>
        ))}
        <a
          href="/#contact"
          className="nav-cta"
          style={{ marginTop: '1rem' }}
          onClick={(e) => handleHashLink(e, '/#contact')}
        >
          Contact Us
        </a>
        <span className="drawer-tag">Design Studio · Mumbai</span>
        </div>
      </div>
    </>
  );
}
