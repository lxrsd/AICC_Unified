# AICC Unified

AICC Unified is a centralized platform that connects business-unit needs with
AICC's engineering capabilities — standards, architectures, reusable solutions,
and delivery resources — in one place.

It is delivered as **two complementary experiences**, each designed for a
different audience: the **Unified Center** for business stakeholders and the
**Engineering Hub** for engineers and technical teams. They share a common
design language but are built and deployed independently.

> **Explore the AICC Engineering Hub (live preview):**
> **https://main.ddr6wxvmscyho.amplifyapp.com/**
>
> The website is public and requires **no login**. (The GitHub repository itself
> may be private — public website access does not imply public source-code
> access.)

## The two experiences

| | **AICC Unified Center** | **AICC Engineering Hub** |
|---|---|---|
| **Audience** | Business units & business stakeholders | Engineers, solution architects, technical teams |
| **Purpose** | A business-facing entry point to discover AICC capabilities, services, and solutions and connect needs to the right engineering resources | A centralized engineering experience for AICC's methodology, standards, reference architectures, accelerators, knowledge, and deployment direction |
| **Status** | 🚧 **Under construction** — planned, not yet implemented | 🟢 **Live preview** — deployed and accessible; under active development |
| **Link** | *Not available yet* | https://main.ddr6wxvmscyho.amplifyapp.com/ |

---

## AICC Unified Center

**Audience:** business units and business stakeholders.
**Status:** 🚧 **Under construction.**

The Unified Center is intended to be the **business-facing entry point** to
AICC — a place for business units to understand what AICC offers, discover
services and solutions, and connect a business need with the appropriate
engineering resources.

This application is **planned and has not yet been implemented.** There is no
Unified Center website at this time; a link will be published here once one is
genuinely available. See [`unified-center/README.md`](unified-center/README.md)
for the reserved placeholder.

---

## AICC Engineering Hub

**Audience:** engineers, solution architects, and technical teams.
**Status:** 🟢 **Live preview — under active development.**

**Live site:** https://main.ddr6wxvmscyho.amplifyapp.com/

The Engineering Hub is a centralized engineering experience: a common place to
explore AICC's engineering approach and methodology, reference architectures,
reusable accelerators, knowledge resources, and deployment direction.

It is **deployed and accessible today**, but content, messaging, and
functionality are still being refined. Some sections present AICC's **target
operating model and roadmap** rather than operational tooling — those are called
out explicitly below and in the application itself.

### Explore the Engineering Hub

The Hub is organized into the following sections.

#### 🏠 Engineering Hub (Home)
**What it is:** the landing page and overview of the Engineering Hub.
**Why engineers use it:** a single starting point that orients you to everything
the Hub offers.
**What to expect:** short descriptions of each section with direct links
(Engagement Model, Agentic Engineering, Architectures, Accelerators, Knowledge
Base) plus an "Engineering Advantage" summary of the Hub's intended benefits
(accelerated delivery, consistent engineering, reuse at scale, quality by design,
connected teams).

#### 🤝 Engagement Model
**What it is:** AICC's engagement framework — how AICC teams engage, shape, and
deliver work with business units.
**Why engineers use it:** to understand the end-to-end delivery method and the
roles involved before starting an engagement.
**What to expect:** the engagement journey (Intake → Define → Shape → Build →
Transition → Harvest), guidance for working with business units, the FDE
(delivery-focused) and FDA (architecture-focused) roles, and an engagement
toolkit of templates and checklists (first-meeting guide, problem-definition
template, architecture checklist, handoff checklist, decision log).

#### 🤖 Agentic Engineering
**What it is:** AICC's approach to AI-assisted software delivery, combining the
**AI-DLC** methodology, **Factor AI** execution, and governance with human
oversight.
**Why engineers use it:** to understand how AICC standardizes AI-assisted
development and where it is headed.
**What to expect:** three pillars — *AI-DLC Methodology* (how we build),
*Factor AI Execution* (where and how we execute), and *Governance & Quality*
(how we maintain control) — plus a target operating model (Engineering Intent →
Cloud Workspace → AI Agents → Quality Gates → Reviewed PR) and a phased roadmap
(Current foundation → Proposed next step → Future target). This section
describes a **target operating model and roadmap**; the page states plainly that
the autonomous factory has **not** already been deployed.

#### 🏛️ Architectures
**What it is:** reference architectures and best practices across cloud
platforms.
**Why engineers use it:** to start from approved patterns instead of
designing from scratch, and to validate designs against best practices.
**What to expect:** architecture domains (AWS patterns, Azure patterns, AI &
Data platforms, Security & Integration) and a best-practice library (landing
zones & networking, identity & access, observability & operations, CI/CD &
DevSecOps, reference diagrams, and an architecture-review checklist).

#### 🚀 Accelerators
**What it is:** reusable solution foundations and starting points.
**Why engineers use it:** to reduce repetitive work and move from idea to a
working foundation faster.
**What to expect:** a catalog view of representative accelerator patterns
(e.g. Enterprise RAG Assistant, Document Intelligence, Data Analysis Copilot,
Workflow Agent, Knowledge Graph Builder). The catalog shown is **representative**
and points toward a dedicated Accelerator Catalog that is maintained separately.

#### 📚 Knowledge Base
**What it is:** a central location for engineering standards, documentation,
implementation guides, and lessons learned.
**Why engineers use it:** to find the right guidance quickly and apply
consistent standards.
**What to expect:** a searchable library of articles and guides (getting
started, AI-DLC lifecycle overview, solution-review and security-review guides,
knowledge-search best practices). Search and article browsing are
**demonstrative** in the current preview while the content library is built out.

#### ☁️ One-Click Deployment
**What it is:** the intended guided path to deploy approved AICC solutions to
the cloud.
**Why engineers use it:** to launch pre-approved, validated solution templates
on an approved cloud environment with governance built in.
**What to expect:** a cloud-environment chooser (AWS / Azure), featured solution
templates, and the deployment-velocity benefits (faster launch, consistent and
reliable, governed deployment). **This is a planned / evolving capability** —
the current preview presents the experience and direction; it does **not**
perform live provisioning, backend automation, or production deployment.

---

## Platform vision

The two experiences are designed to complement each other:

- **Unified Center** connects **business units** with AICC capabilities and
  services — the "what AICC can do for you" entry point.
- **Engineering Hub** helps **engineers** understand and apply AICC's
  engineering approaches, standards, and reusable resources — the "how we build
  it" entry point.

Together they provide a **single, centralized entry point** for discovering AICC
capabilities and supporting consistent, high-quality delivery across AICC — from
a business need through to engineering execution.

## Current development status

| Experience | Status | Notes |
|------------|--------|-------|
| **AICC Unified Center** | 🚧 Planned / Under construction | Not yet implemented; no website link available. |
| **AICC Engineering Hub** | 🟢 Live preview / Under active development | Deployed and viewable; content and functionality still being refined. |

Some Engineering Hub capabilities represent **planned or evolving** direction
rather than operational tooling — most notably **One-Click Deployment** and the
**Factor AI** autonomous-execution roadmap on the Agentic Engineering page. This
repository does **not** implement cloud provisioning, backend automation,
authentication, or production governance workflows; where the Hub shows such
capabilities, it is presenting AICC's target operating model, not a shipped
feature.

## Access

**Explore the AICC Engineering Hub:** https://main.ddr6wxvmscyho.amplifyapp.com/

The website is accessible **without login**. The GitHub repository may be
private; public access to the website does not grant access to the source code.

## Technical documentation (for maintainers)

The root README is intentionally focused on understanding the platform. Build
commands, configuration variables, and developer setup live with the
application:

- **Engineering Hub — build, test, configure, deploy:**
  [`engineering-hub/web/README.md`](engineering-hub/web/README.md)
- **Unified Center — placeholder scope:**
  [`unified-center/README.md`](unified-center/README.md)

### Repository layout

```
AICC_Unified/
├── engineering-hub/
│   └── web/            # AICC Engineering Hub SPA (React + TypeScript + Vite) — implemented
├── unified-center/     # AICC Unified Center — planned placeholder
└── .github/workflows/  # CI: lint + build + test the Engineering Hub
```

---

*Internal AICC project. See repository settings for access and ownership.*
