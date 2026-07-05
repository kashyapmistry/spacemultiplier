import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import WorkInteriors from './pages/WorkInteriors';
import WorkFoldingFurniture from './pages/WorkFoldingFurniture';
import WorkIllustratedArt from './pages/WorkIllustratedArt';
import Contact from './pages/Contact';
import "magnific-popup/dist/magnific-popup.css";
import "magnific-popup"
import './styles/global.css';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/work-interiors" element={<WorkInteriors />} />
        <Route path="/work-folding-furniture" element={<WorkFoldingFurniture />} />
        <Route path="/work-illustrated-art" element={<WorkIllustratedArt />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
