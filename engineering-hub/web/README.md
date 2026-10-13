# AICC Engineering Hub — Web

The frontend for the **AICC Engineering Hub**: a static, no-backend React + TypeScript
single-page app built with Vite. The UI is implemented from the reference designs in
`AICC UI/` and uses the Engineering Hub design system (serif display headings, deep
maroon primary, purple accent, lilac/pastel surfaces).

> **Product separation.** This is the Engineering Hub application only. The
> **AICC Unified Center** is a *separate* application with its own future AWS Amplify
> deployment and is not built or linked from here. The existing `apps/workbench`
> (AI-DLC Workbench) and the `engineering-hub/accelerator-catalog-claude` catalog are
> also separate apps; this app references them conceptually but does not modify them.

## Pages

| Route | Screen | Reference image |
|-------|--------|-----------------|
| `/` | Engineering Hub home | `AICC Repository.png` |
| `/engagement-model` | Engagement Framework | `AICC Engagemnt Model.png` |
| `/agentic-engineering` | Agentic engineering at scale | `AICC Agentic Engineering.png` |
| `/architectures` | Reference Architectures & Best Practices | `AICC Architecture.png` |
| `/accelerators` | Accelerators & reusable assets | (no image — built on-brand) |
| `/knowledge-base` | Knowledge Base | `AICC Knowledge Base.png` |
| `/one-click-deployment` | One-Click Deployment | `AICC One Click Deployment.png` |
| `/ai-dlc-explorer` | AI-DLC Evidence Explorer | `AICC AI-DLC Workbench.png` |

## Stack

- React 18 + TypeScript 5.6, Vite 5.4 (`base: './'`, target `es2020`)
- `react-router-dom` v6 for client-side routing
- `lucide-react` for line icons
- Plain CSS design system in `src/styles.css` (CSS custom properties; no Tailwind, no CSS-in-JS, no UI library)
- Vitest + Testing Library for tests

Hero illustrations are abstract CSS-gradient + inline-SVG approximations of the
reference art, not the photoreal source renders, and no trademarked logo files are shipped.

## Commands

```bash
npm install      # install dependencies
npm run dev      # start the dev server (Vite)
npm run build    # type-check (tsc --noEmit) then production build
npm run preview  # preview the production build
npm run test     # run the vitest suite
npm run typecheck
npm run lint
```

## Notes

- Static UI: interactive CTAs such as "Launch a Solution" and "Open evidence" are
  real, labelled buttons/links but are intentionally no-ops in Phase 1. Evidence
  wiring (consuming `evidence-manifest.json`) is a later phase — see
  `engineering-hub/evidence-explorer/integration-spec.md`.
- The Evidence Explorer clone-command copy button uses `navigator.clipboard` and
  degrades gracefully where the clipboard API is unavailable.
