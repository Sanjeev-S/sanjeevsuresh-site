# sanjeevsuresh.com

Personal site for Sanjeev Suresh — Staff ML Engineer at Uber.

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
- `service.ts` — recognition & service (ambassador roles, program committees)
- `media.ts` — podcast and other media appearances
- `talks.ts` — speaking engagements (empty until first entry)
- `site.ts` — name, role, taglines, links — single source of truth for hero/JSON-LD

## Portrait

`src/assets/portrait.jpg` (1500×2000, 3:4) is the photo used in the sidebar and as the schema.org `Person.image`. To swap it, replace the file at the same path with another portrait-orientation JPEG or WebP; Astro's image pipeline generates AVIF + WebP derivatives and a responsive `srcset` at build time.

## OpenGraph image

Generate a 1200×630 PNG (Figma/Canva) and save to `public/og.png`. Referenced from `Layout.astro` meta tags.

## License

MIT
