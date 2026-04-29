# sanjeevsuresh.com

Personal site for Sanjeev Suresh — Senior ML Engineer at Uber.

Static site built with Astro 6 and Tailwind v4. Deployed to Cloudflare Pages.

## Develop

```sh
npm install
npm run dev          # http://localhost:4321
npm run build        # build → ./dist
npm run preview      # serve ./dist locally
```

## Test

```sh
npm run build
npm run test:smoke         # Playwright smoke tests
npx html-validate "dist/**/*.html"
npx linkinator dist
npx lhci autorun
```

CI runs all four checks on every PR (`.github/workflows/ci.yml`).

## Content lives in `src/data/`

Typed arrays — edit these to update the site:

- `publications.ts` — academic-style citation list
- `selectedWork.ts` — featured projects/contributions
- `talks.ts` — speaking engagements (empty until first entry)
- `judging.ts` — hackathons judged, papers reviewed
- `press.ts` — external coverage
- `site.ts` — name, role, taglines, links — single source of truth for hero/JSON-LD

## Replace the placeholder headshot

`src/assets/headshot.jpg` is a 400×400 grey placeholder. Drop the real photo at the same path (square crop, ≥400×400 JPEG or WebP) and Astro's image pipeline will generate AVIF + WebP derivatives at build time.

## OpenGraph image

Generate a 1200×630 PNG (Figma/Canva) and save to `public/og.png`. Referenced from `Layout.astro` meta tags.

## License

MIT
