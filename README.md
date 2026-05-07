# Portfolio — Giovany Jr

Lead product designer portfolio. Brutal-tech aesthetic. Built with Astro 5 + Tailwind CSS v4.

## Stack

- **Astro 5** — static output, View Transitions
- **Tailwind CSS v4** — via `@tailwindcss/vite`, no config file
- **JetBrains Mono + Inter** — via Fontsource (bundled, no CDN)
- **CSS animations + Intersection Observer** — no JS framework
- **GitHub Pages** — via GitHub Actions

## Run locally

```bash
npm install
npm run dev
# → http://localhost:4321/portfolio/
```

## Build

```bash
npm run build    # generates /dist
npm run preview  # preview the build locally
```

## Deploy

Push to `main` — GitHub Actions builds and deploys automatically.

**First-time setup:**
1. Create repo: `github.com/giovanyjr/portfolio`
2. Settings → Pages → Source: **GitHub Actions**
3. Push to `main`
4. Site lives at: `https://giovanyjr.github.io/portfolio/`

## Add a new case

1. Create `src/content/cases/my-case.md` with frontmatter:

```yaml
---
title: "Case Title"
description: "One line description"
date: 2026-01-01
tags: ["Product", "Category"]
cover: "/portfolio/images/my-case-cover.png"
metric: "Key result metric"
client: "Client Name"
role: "Lead Product Designer"
duration: "X months"
year: 2026
---
```

2. Add content in sections: `## Context`, `## Problem`, `## Process`, `## Solution`, `## Impact`, `## Learnings`
3. Place cover image in `public/images/`
4. The case appears automatically in home and `/cases`

## Tokens (identity)

All colors in `src/styles/tokens.css`. To change identity:
- Light: edit `:root` block
- Dark: edit `.dark` block
- Only `--accent` is the brand color — everything else is black/white/grey

## Consts (personal data)

Update `src/consts.ts`:
- `AUTHOR` — name, role, bio
- `SOCIAL` — email, LinkedIn, GitHub URLs
- `CREDENTIALS` — previous companies for the marquee strip
- `NAV_LINKS` — navigation structure
