# AICC Unified Center

> **Status: PLANNED — not yet implemented.**
>
> This directory is a reserved placeholder for the **AICC Unified Center**
> application. No Unified Center application exists in this repository yet; this
> README documents the intended scope so the slot is explicit and reviewable.

## What the Unified Center will be

The **Unified Center** is the **business-unit-facing** half of the AICC Unified
platform. It is intended to be a centralized entry point that connects business
units with AICC capabilities, solutions, and services.

It is a **separate application** from the [Engineering Hub](../engineering-hub/web/),
which is engineer-facing. The two apps share this repository and a common design
language but are built and deployed independently.

## Current contents

Nothing but this README. There is no source code, build, or deployment for the
Unified Center at this time. When the application is built it will live here as a
self-contained front end (the same static, no-backend, no-login model as the
Engineering Hub).

## Non-goals (for now)

- No authentication / sign-in (the public informational sites require no login).
- No database or backend infrastructure.
- No resource-provisioning capability. Any future provisioning features are kept
  in separate, access-controlled infrastructure — never in this public web app.
