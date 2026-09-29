# Lucas Brun · Portfolio

Personal portfolio built with **React + TypeScript + Vite + Framer Motion**.
Light/dark theme with neon purple, English / Português / Español, and lots of playful effects.

## Running locally

```bash
npm install
npm run dev
```

Production build: `npm run build` (output in `dist/`).

## Where to edit

| What | File |
|---|---|
| All texts (EN / PT / ES): about, experience, education, project descriptions… | `src/i18n/translations.ts` |
| Projects (links, tech, category, colors), skills and social links | `src/data/profile.ts` |
| Profile photo | put it at `public/profile.jpg` (the initials "LB" show until then) |
| Colors / theme tokens | top of `src/styles/global.css` |

To add an internship or another job, add an item to `experience.items` in each language in `translations.ts`.

## Effects

Particle constellation that reacts to the mouse · custom neon cursor · click sparks · circular theme transition ·
glitch and scramble text · bouncy name letters · typewriter roles · morphing photo with orbiting tech icons ·
synthwave grid · magnetic buttons · 3D tilt cards with spotlight · flip cards · scroll-drawn timeline ·
animated project filters · skill marquee · high-five counter · rocket back-to-top.

Easter egg: Konami code `↑ ↑ ↓ ↓ ← → ← → B A` (or tap the logo 5×) turns on party mode 🎉

All animations respect `prefers-reduced-motion`.

## Deploy

- **GitHub Pages**: enable *Settings → Pages → Source: GitHub Actions*; every push to `main` deploys via `.github/workflows/deploy.yml`.
- **Vercel**: import the repo, framework preset *Vite*, no extra config.
