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
| Skills, email and social links | `src/data/profile.ts` |
| Profile photo | put it at `public/profile.jpg` (the initials "LB" show until then) |
| Colors / theme tokens | top of `src/styles/global.css` |

To add another job to the experience timeline, add an item to `experience.items` (newest first) in each language in `translations.ts`.

## Effects

Particle constellation that reacts to the mouse · custom neon cursor · click sparks · circular theme transition ·
glitch and scramble text · bouncy name letters · typewriter roles · morphing photo with orbiting tech icons ·
synthwave grid · magnetic buttons · 3D tilt cards with spotlight · scroll drawn experience timeline ·
copy email button · resume download in the visitor's language · arrow back to top.

All animations respect `prefers-reduced-motion`.

## Deploy (Vercel)

Settings live in `vercel.json` (build command, output folder, cache and security headers) and Node is pinned to 22.x in `package.json`.

**From the dashboard (recommended):** on [vercel.com/new](https://vercel.com/new), import `lucasbrun196/lucas-brun-portifolio` and click *Deploy*. Every push to `main` then publishes to production, and every other branch gets its own preview URL.

**From the terminal:**

```bash
npx vercel          # first run: log in and link the project (creates a preview)
npx vercel --prod   # publish to production
```

Resume PDFs are in `public/`; replace them keeping the same file names to update what visitors download.
