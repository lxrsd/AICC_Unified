# AICC Engineering Hub — Web (maintainer guide)

The frontend for the **AICC Engineering Hub**: a static, no-backend
React + TypeScript single-page app built with Vite. This document covers local
development, configuration, build, and deployment. For the platform overview and
a section-by-section tour of the Hub, see the [root README](../../README.md).

> **Product separation.** This is the Engineering Hub application only. The
> **AICC Unified Center** is a *separate* application (planned — see
> [`../../unified-center/README.md`](../../unified-center/README.md)) with its
> own future deployment, not built or linked from here.

## Pages / routes

| Route | Screen |
|-------|--------|
| `/` | Engineering Hub home |
| `/engagement-model` | Engagement framework |
| `/agentic-engineering` | Agentic Engineering & Factor AI |
| `/architectures` | Reference architectures & best practices |
| `/accelerators` | Accelerators & reusable assets |
| `/knowledge-base` | Knowledge Base |
| `/one-click-deployment` | One-Click Deployment |
| `/ai-dlc-explorer` | AI-DLC Explorer |
| `*` | Not Found |

## Stack

- React 18 + TypeScript 5.6, Vite 5.4 (`base: './'`, target `es2020`)
- `react-router-dom` v6 for client-side routing
- `lucide-react` for line icons
- Plain CSS design system in `src/styles.css` (CSS custom properties; no Tailwind, no CSS-in-JS, no UI library)
- Vitest + Testing Library for tests

Hero illustrations are abstract CSS-gradient + inline-SVG approximations, not
photoreal renders; no trademarked logo files are shipped.

## Requirements

- Node.js >= 18

## Commands

```bash
npm ci            # install exact dependencies from package-lock.json
npm run dev       # start the local dev server (Vite)
npm run build     # type-check (tsc --noEmit) then production build to dist/
npm run preview   # preview the production build locally
npm run test      # run the vitest suite
npm run typecheck # type-check only
npm run lint      # eslint
```

## Configuration

The app is fully static and needs no runtime configuration. One **build-time**
variable is supported:

| Variable | Default | Purpose |
|----------|---------|---------|
| `VITE_AICC_REPO_URL` | `https://github.com/your-org/AICC_Unified.git` | Repository URL shown in the "Clone Repository" command on the AI-DLC Explorer page. Set this to your organization's repository at build time. |

Example:

```bash
VITE_AICC_REPO_URL="https://github.com/<org>/AICC_Unified.git" npm run build
```

## Deployment (AWS Amplify)

The app deploys as a static site. An Amplify build spec is provided at
[`amplify.yml`](amplify.yml):

- Pre-build: `npm ci`
- Build: `npm run build`
- Artifact base directory: `dist`

In the Amplify console, set the app's base directory (monorepo root) to
`engineering-hub/web` so the spec's relative paths resolve. No backend,
database, authentication, or other AWS infrastructure is provisioned by this
app — the site is public and requires no login.

## Notes on current functionality

- Several interactive controls are **demonstrative** in the current preview:
  "Launch a Solution" / cloud-deployment actions on One-Click Deployment, the
  Knowledge Base search and article links, and the Accelerators catalog actions
  are labelled, on-brand placeholders that do **not** perform provisioning,
  search, or deployment yet.
- The AI-DLC Explorer "Clone Repository" copy button uses `navigator.clipboard`
  and degrades gracefully where the clipboard API is unavailable.
