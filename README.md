# Spacemultiplier — React App

Luxury interior design studio website built with React + React Router.

## Pages
- **Home** (`/`) — Hero, About, Services, Folding Furniture, Gallery, Illustrated Art, Process, Testimonials, Contact
- **About Us** (`/about`) — Page hero, Story, Numbers, Philosophy, Timeline, Team, Values, Awards, CTA
- **Services** (`/services`) — Detailed service offerings
- **Folding Furniture** (`/furniture`) — Folding Bed, Folding Dining Table, product galleries
- **Gallery** (`/gallery`) — Residential interior projects, popup image galleries
- **Illustrated Art** (`/art`) — Custom illustrated artwork showcase
- **Contact** (`/contact`) — Contact form, social links, map

## Project Structure
```
spacemultiplier/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Nav.jsx         # Fixed nav + mobile drawer
│   │   └── Footer.jsx      # Site footer
│   ├── hooks/
│   │   └── useReveal.js    # Scroll reveal hook
│   ├── pages/
│   │   ├── Home.jsx        # Homepage
│   │   ├── About.jsx       # About Us page
│   │   ├── Services.jsx    # Services page
│   │   ├── Furniture.jsx   # Folding Furniture page
│   │   ├── Gallery.jsx     # Gallery page
│   │   ├── Art.jsx         # Illustrated Art page
│   │   └── Contact.jsx     # Contact page
│   ├── styles/
│   │   ├── global.css      # Tokens, reset, shared atoms
│   │   ├── nav.css         # Nav & drawer styles
│   │   ├── home.css        # Homepage styles
│   │   ├── about.css       # About page styles
│   │   ├── services.css    # Services page styles
│   │   ├── furniture.css   # Folding Furniture styles
│   │   ├── gallery.css     # Gallery page styles
│   │   ├── art.css         # Illustrated Art styles
│   │   └── contact.css     # Contact page styles
│   ├── App.jsx             # Router setup
│   └── index.js            # React entry point
└── package.json
```

## Getting Started

### 1. Install dependencies
```bash
npm install
```

### 2. Start development server
```bash
npm start
```
Opens at [http://localhost:3000](http://localhost:3000)

### 3. Build for production
```bash
npm run build
```
Output goes to the `build/` folder — ready to deploy on Netlify, Vercel, or any static host.

## Adding Your Logo
Replace the SVG `<LogoIcon>` in `src/components/Nav.jsx` with your own logo image:
```jsx
import logo from '../assets/logo.png';
// Then in JSX:
<img src={logo} alt="Spacemultiplier" style={{height:'36px'}} />
```

## Adding Real Photos
All visual panels currently use CSS gradient backgrounds (works without internet).
To add real photos, update the CSS background properties in the respective `.css` files:
```css
.hero-photo {
  background-image: url('/images/hero.jpg');
}
```

## Contact
- Instagram: [@space.multiplier](https://www.instagram.com/space.multiplier/)
- Facebook: [Spacemultiplier](https://www.facebook.com/profile.php?id=61574037721815)
- Email: space.multiplier@gmail.com
- Phone: +91 9967374606
"# spacemultiplier-" 
"# spacemultiplier-" 
