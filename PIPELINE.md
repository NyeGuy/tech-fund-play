# Pipeline

Ownership: **Owner Anvil · Lead Forge · CoS Nyborg · Merge Nye**.

This repo is the **STEC Technology Fund cash one-pager**. Sibling to the Build Tomorrow multi-page campaign site. It is not Satellite Lab and not Agent Arena.

## Phase 1 — one-page static ask (this PR)

Ship a Vercel-playable Astro advertisement at `/`. Locked official SCAD Giving URL on every primary white Give / Donate CTA. Quieter hardware / compute placeholder. Look tokens locked. Copy locked where provided; bracketed placeholders for goal / raised until Advancement sends numbers.

Success for Phase 1:

1. `npm run build` emits static HTML (`dist/`) suitable for a later SCAD hosting export.
2. The single route renders. One `h1`. White Give / Donate CTAs open the locked cash URL in a new tab.
3. `src/config.ts` is the only place to change the cash URL, hardware-form placeholder, amounts, and visitor-facing copy.
4. No third-party scripts except Google Fonts. No on-site payments.

## GitHub

| | |
| --- | --- |
| Remote | https://github.com/NyeGuy/tech-fund-play |
| Default branch | `main` |
| Sibling (Build Tomorrow Pages) | https://github.com/NyeGuy/build-tomorrow |
| Sibling (Build Tomorrow Vercel play) | https://github.com/NyeGuy/build-tomorrow-play |
| This playground | Vercel, `base: '/'` |

**PR rules**

- Work on a branch. Never push `main`.
- Open a pull request. Do not merge it.
- Nye merges. No one else.

## Parked (do not pull forward)

| Later | Intent | Explicitly not now |
| --- | --- | --- |
| Hardware / compute form | Replace `HARDWARE_FORM_URL` | `#hardware` / “Form coming soon” |
| Raised total | Advancement number | `$[RAISED_AMOUNT]` |
| Goal figure | Advancement number | `$[GOAL_AMOUNT]` |
| Public Vercel play | Import this repo after merge | Do not invent a production host |
| SCAD production host | Static export of `dist/` | This playground is Vercel, `base: '/'` |

## Merge gate

Nye merges. Agents open PRs and stop.
