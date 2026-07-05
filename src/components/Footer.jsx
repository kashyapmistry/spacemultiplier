import { Link } from 'react-router-dom';

const LogoIconSmall = () => (
  <svg width="20" height="20" viewBox="0 0 36 36" fill="none">
    <rect x="2" y="2" width="32" height="32" stroke="#b5862a" strokeWidth=".8"/>
    <rect x="6" y="10" width="16" height="11" fill="none" stroke="#b5862a" strokeWidth=".8"/>
    <rect x="14" y="15" width="16" height="11" fill="none" stroke="#b5862a" strokeWidth=".8"/>
    <rect x="14" y="15" width="8" height="6" fill="#b5862a" opacity=".3"/>
    <circle cx="18" cy="6" r="1.2" fill="#b5862a"/>
  </svg>
);

export default function Footer() {
  return (
    <footer className="site-footer">
      <Link className="f-logo" to="/">
        <LogoIconSmall />
        Spacemultiplier
      </Link>
      <div className="f-copy">© 2026 Spacemultiplier. Mumbai, India. All rights reserved.</div>
      <div className="f-links">
        <a href="https://www.instagram.com/space.multiplier/" target="_blank" rel="noopener noreferrer">Instagram</a>
        <a href="https://www.facebook.com/profile.php?id=61574037721815" target="_blank" rel="noopener noreferrer">Facebook</a>
        <a href="mailto:space.multiplier@gmail.com">Email</a>
      </div>
    </footer>
  );
}
