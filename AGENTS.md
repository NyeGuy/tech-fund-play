# Agents

## Ownership

| Role | Name | Notes |
| --- | --- | --- |
| Owner | Anvil | Product / STEC Technology Fund cash one-pager |
| Lead | Forge | Implementation lead |
| Chief of Staff | Nyborg | Scope, park list, process |
| Merge | Nye | Only merge authority |

Nye merges. Do not merge from the agent side.

## What this is

A **lean cash one-pager** for the **STEC Technology Fund**. Same LOOK as Build Tomorrow. Money gifts only, via official SCAD Giving. It is an advertisement, not a website.

This is a **sibling** to the Build Tomorrow multi-page campaign site ([NyeGuy/build-tomorrow](https://github.com/NyeGuy/build-tomorrow), [NyeGuy/build-tomorrow-play](https://github.com/NyeGuy/build-tomorrow-play)). It does **not** replace that site.

This is **not** Agent Arena. This is **not** Satellite Lab. Do not pull copy, palette, or scope from those repos.

## Phase 1 (this repo)

One Astro static page at `/`.

- Primary white Give / Donate CTAs → locked `TECH_FUND_URL` (official SCAD Giving) in a new tab.
- Secondary quieter “Donate equipment or compute” → `HARDWARE_FORM_URL` placeholder (`#hardware` / form coming soon).
- Optional three-line “what gifts buy” + yellow goal strip from config (`GOAL` / `RAISED` placeholders OK).
- Footer: SCAD · School of Creative Technology / STEC.

Placeholders allowed: hardware form, raised total, goal. Cash URL is **not** a placeholder.

## Park / out of scope

Do not start these.

- Extra pages, blog, news, FAQ, login, accounts
- Payment processing on this site (SCAD Giving holds the gift)
- Replacing or nesting the Build Tomorrow multi-page site
- Carousels, popups, icon sets, illustrations, gradients
- Satellite Lab site work
- Agent Arena
- Inventing a different cash URL, live raised totals, or photography

## Craft bar

Exact LOOK tokens. Archivo 400/600/800/900. White CTAs, never yellow buttons. One `h1`. Config in `src/config.ts` only. `astro build` must emit plain static HTML. Lighthouse a11y / contrast bar. Real links.
