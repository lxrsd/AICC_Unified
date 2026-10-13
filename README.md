# AICC Unified

The AICC Unified platform brings together two complementary, publicly accessible
web experiences under one repository. Both are **static, no-backend,
no-login** single-page applications — informational sites that require no sign-in
to view.

| Application | Audience | Purpose | Status |
|-------------|----------|---------|--------|
| **AICC Unified Center** (`unified-center/`) | **Business units** | A centralized entry point connecting business units with AICC capabilities, solutions, and services. | **Planned** — placeholder only (see [`unified-center/README.md`](unified-center/README.md)) |
| **AICC Engineering Hub** (`engineering-hub/web/`) | **Engineers** | Standardized methodologies, reference architectures, development tools, accelerators, and deployment resources. | **Implemented** — React + TypeScript + Vite SPA |

The two applications are **distinct products**: the Unified Center is
business-unit-focused, the Engineering Hub is engineer-focused. They share a
design language but build and deploy independently.

## Repository layout

```
AICC_Unified/
├── engineering-hub/
│   └── web/                 # AICC Engineering Hub SPA (implemented)
├── unified-center/          # AICC Unified Center (planned placeholder)
├── .github/workflows/       # CI: build + lint + test the Engineering Hub
└── README.md
```

## Engineering Hub — develop & build

```bash
cd engineering-hub/web
npm ci            # install exact dependencies from package-lock.json
npm run dev       # local dev server (Vite)
npm run build     # type-check (tsc --noEmit) + production build to dist/
npm run preview   # preview the production build
npm run lint      # eslint
npm run test      # vitest
```

Requirements: Node.js >= 18.

### Configuration

The Engineering Hub is fully static and needs no runtime configuration. One
build-time variable is supported:

| Variable | Default | Purpose |
|----------|---------|---------|
| `VITE_AICC_REPO_URL` | `https://github.com/your-org/AICC_Unified.git` | Repository URL shown in the "Clone Repository" command on the AI-DLC Explorer page. Set this to your organization's repository at build time. |

Example: `VITE_AICC_REPO_URL="https://github.com/<org>/AICC_Unified.git" npm run build`

## Deployment (AWS Amplify)

Each application deploys as a static site to its own AWS Amplify app. The
Engineering Hub ships an Amplify build spec at
[`engineering-hub/web/amplify.yml`](engineering-hub/web/amplify.yml):

- Build command: `npm ci && npm run build`
- Output (artifact base) directory: `dist`

No backend, database, authentication, or AWS infrastructure is provisioned by
this repository. The sites are public and require no login.

## License / ownership

Internal AICC project. See repository settings for access and ownership.
