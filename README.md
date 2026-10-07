# Sathish Komire — Portfolio

A responsive React portfolio showcasing AI engineering, data science, professional experience, selected projects, and certifications.

## Development

Use Node.js 22 and run:

```sh
npm ci
npm run dev
```

## Build

```sh
npm run build
npm run preview
```

The Vite base path is `/portfolio/` for GitHub Pages. The existing deployment workflow builds and publishes pushes to `main`.

## Content

- `src/App.jsx`: homepage, project selection, experience, education, skills, and contact links.
- `src/constants/index.jsx`: source project assets and credential records.
- `src/App.css`: responsive layout and base motion styles.
- `src/future.css`: midnight-glass styling, responsive hero, and cinematic transitions.
- `src/neuralCore.js`: decorative canvas network with pointer interaction and offscreen suspension.
- `src/portfolioMotion.js`: scroll reveals, pointer effects, motion controls, and reduced-motion handling.
- `index.html`: page title and search description.

Project filtering and the mobile navigation work without external services. Contact links open email or LinkedIn directly.

Animations can be paused from the header. System reduced-motion preferences are respected, and content remains visible if animation APIs are unavailable.
