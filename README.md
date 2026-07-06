# Harshal Katrodiya — Portfolio

A premium, production-ready personal developer portfolio built with React 19, Vite, and Tailwind CSS.

## Tech Stack

- **React 19** — UI library
- **Vite 5** — Build tool and dev server
- **Tailwind CSS 3** — Utility-first styling
- **Framer Motion** — Premium animations
- **Lucide React** — Consistent icon set
- **Simple Icons** — Brand-accurate technology icons

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
src/
  components/
    ui/          # Reusable UI primitives
    common/      # Shared helpers (SEO, animations, etc.)
    layout/      # Navbar
    sections/    # Page sections
  context/       # Theme provider
  hooks/         # Custom React hooks
  data/          # Content data files
  animations/    # Framer Motion variants
  config/        # Site configuration
  lib/           # Utility functions
  styles/        # Global styles and theme tokens
```

## Content Source

All content is sourced directly from the resume. No fake companies, projects, or experience are included.

## Before Deploying

1. Add your professional photo to:
   - `public/images/profile/harshal-katrodiya.jpg`

2. Add your resume PDF to:
   - `public/resume/harshal-katrodiya-resume.pdf`

3. Add a real GitHub URL to `src/data/socialLinks.js` if available.

4. Update the domain in:
   - `src/config/site.js`
   - `public/robots.txt`
   - `public/sitemap.xml`
   - `index.html`

5. Replace placeholder OG image with a real one:
   - `public/images/og-image.png` (recommended 1200×630px)

6. (Optional) Integrate EmailJS in `src/components/ui/ContactForm.jsx` for live form submissions.

## Performance Notes

- Sections below the Hero are lazy-loaded for faster initial paint.
- Vendor libraries are split into separate chunks for better caching.
- Fonts are preconnected and loaded with `display=swap`.
- Images should be optimized before deployment.

## Accessibility

- Semantic HTML throughout
- WCAG 2.2 compliant color contrast
- Keyboard-navigable components
- ARIA labels and live regions
- `prefers-reduced-motion` respected
- Skip-to-content link

## License

© 2026 Harshal Katrodiya. All rights reserved.
# harshal-portfolio
# harshal-portfolio
