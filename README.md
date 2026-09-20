# STEC Technology Fund — Vercel playground

Lean **one-page** cash ask for the **SCAD School of Creative Technology** Technology Fund. Same visual system as [Build Tomorrow](https://build-tomorrow-play.vercel.app/). Money gifts open official SCAD Giving. This page does not collect payments and does **not** replace the multi-page Build Tomorrow campaign site.

This repo is the **Vercel play deploy** (`base: '/'`). Public Vercel play follows after merge. Sibling campaign site: [NyeGuy/build-tomorrow](https://github.com/NyeGuy/build-tomorrow) / [NyeGuy/build-tomorrow-play](https://github.com/NyeGuy/build-tomorrow-play). Not Agent Arena. Not Satellite Lab.

## Ownership

| Role | Who |
| --- | --- |
| Owner | Anvil (Forge family) |
| Lead | Forge |
| CoS | Nyborg |
| Merge | Nye only |

Nye merges. Agents open PRs and stop.

## Locked cash URL

Every primary white **Give** / **Donate** button opens this official SCAD Giving link in a new tab:

`https://www.scad.edu/about/giving/donate?d=AIANDROBS`

Do not invent a different cash URL. Do not add on-site payments.

The quieter **Donate equipment or compute** link is a placeholder (`#hardware` / “Form coming soon”) until a separate form exists.

## Run locally

Requires Node.js 22 or newer.

```bash
npm install
npm run dev
```

Dev server: [http://localhost:4321/](http://localhost:4321/)

```bash
npm run build
npm run preview
```

`npm run build` / `astro build` writes plain static HTML to `dist/`.

## Change URL or copy

All visitor-facing URLs, amounts, and copy live in **one file**:

[`src/config.ts`](src/config.ts)

| Key | What to put there |
| --- | --- |
| `TECH_FUND_URL` | **Locked** official SCAD Giving link. Do not change unless Advancement issues a new fund code. |
| `HARDWARE_FORM_URL` | Equipment / compute form. Keep `#hardware` until the form ships. |
| `RAISED_AMOUNT` | Number (e.g. `12500`) or placeholder `[RAISED_AMOUNT]` |
| `GOAL_AMOUNT` | Number (e.g. `200000`) or placeholder `[GOAL_AMOUNT]` |
| `DEADLINE_TEXT` | Optional. Empty hides the “by …” clause on the yellow goal strip. |
| `copy` | Hero, CTAs, 501(c)(3) fine print, hardware placeholder, close line |
| `whatGiftsBuy` | Three short lines under “What gifts buy” |

Rebuild after edits. Do not hard-code URLs or body copy in components.

## Design tokens

Match Build Tomorrow exactly.

| Use | Value |
| --- | --- |
| Ground / surfaces / borders | `#1C1C1C` / `#262626` / `#333333` |
| Text | `#F2F2F2` / `#C8C8C8` / `#8A8A8A` |
| Accent (eyebrows, rules, goal strip only) | `#FFD60A` |
| CTA buttons | White `#FFF`, text `#1C1C1C`, weight 800, 4px radius. **Never yellow.** |
| Type | Archivo 400 / 600 / 800 / 900 (Google Fonts) |
| Layout | Mobile-first, max ~1280px. No carousels, gradients, icons, or illustrations. |

## Deploy

This playground is hosted at the **site root** (`base: '/'`).

1. `npm run build` — confirm `dist/` is static HTML/CSS/JS only.
2. Import **NyeGuy/tech-fund-play** in Vercel (Astro, output `dist`). Public play follows after Nye merges.
3. For a SCAD static drop, upload or rsync `dist/`. No server runtime.

## Stack

- Astro, `output: 'static'`, `base: '/'`
- Tailwind CSS v4 with locked hex tokens
- Archivo 400/600/800/900 (Google Fonts)
- No third-party scripts except Google Fonts
- One `h1`. Primary CTAs are real links to SCAD Giving.
