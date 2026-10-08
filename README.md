# Lucas Brun · Portfolio

Personal portfolio built with **React + TypeScript + Vite + Framer Motion**.
Light/dark theme, English / Português / Español, clean layout with a few subtle effects.

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
| Profile photo | put it at `public/profile.jpg` (the hero shows no photo until then) |
| Company / university logos | `public/logos/` (mapped in `src/data/profile.ts`) |
| Colors / theme tokens | top of `src/styles/global.css` |

To add another job to the experience timeline, add an item to `experience.items` (newest first) in each language in `translations.ts`.

## Effects

Dot grid in the hero that lights up around the pointer · soft spotlight on cards · circular theme transition ·
experience timeline that fills in as you scroll · fade in on scroll · thin scroll progress bar.

All animations respect `prefers-reduced-motion`.
