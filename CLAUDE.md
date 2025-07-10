# OptMove Frontend – Unified Development & Contribution Guide

> **Purpose**  
> This document merges the original `CLAUDE.md` (developer‑oriented project guide) and `GEMINI.md` (contribution guidelines) into a single, cohesive reference for everyone working on the OptMove front‑end. Keep this file close – it contains everything you need to set up, build, contribute, and keep code quality high.

---

## 1. Project Overview

OptMove is a **React 18 + TypeScript** application (built with **Vite**) that powers railway planning and visualisation for the Baixada Santista network.  
Key highlights:

- Canvas/D3‑driven train‑scheduling charts (GHT Chart system) for high‑performance visualisation.
- **Azure MSAL** single‑sign‑on (SSO) integration.
- Dual UI stack: internal _flunte‑ui_ + Mantine tables, all styled with **Tailwind CSS**.
- Data‑fetching via **@tanstack/react‑query**.
- Rigorous testing with **Vitest**.

---

## 2. Architecture & Directory Layout

```
├── AGENTS.md
├── CLAUDE.md
├── codigoCLegado
|  ├── ServerTP
|  └── TP_GHP
├── dist
|  ├── assets
|  ├── index.html
|  ├── led-yellow.svg
|  ├── logo.ico
|  └── vite.svg
├── eslint.config.js
├── GEMINI.md
├── index.html
├── optmove-antigo.txt
├── output.txt
├── package-dev.json
├── package.json
├── pnpm-lock.yaml
├── public
|  ├── led-yellow.svg
|  ├── logo.ico
|  └── vite.svg
├── README.md
├── src
|  ├── app
|  ├── assets
|  ├── config
|  ├── features
|  ├── index.css
|  ├── main.tsx
|  ├── server-json
|  ├── shared
|  ├── styles
|  └── vite-env.d.ts
├── text.txt
├── tsconfig.app.json
├── tsconfig.json
├── tsconfig.node.json
├── vite.config.ts
├── vitest.config.ts
└── vitest.setup.ts
```

**Path aliases** (defined in `vite.config.ts` / `tsconfig.json`):

| Alias       | Maps to        |
| ----------- | -------------- |
| `@app`      | `src/app`      |
| `@assets`   | `src/assets`   |
| `@features` | `src/features` |
| `@shared`   | `src/shared`   |
| `@styles`   | `src/styles`   |

---

## 3. Core Engineering Principles

| Topic                            | Guideline                                                                                     |
| -------------------------------- | --------------------------------------------------------------------------------------------- |
| **React**                        | Function components + Hooks only. No class components.                                        |
| **Composition over inheritance** | Build complex UIs by composing small, reusable pieces.                                        |
| **State management**             | Prefer local state; escalate to Context Providers only when many siblings need the same data. |
| **Performance**                  | Guard expensive calculations & callbacks with `useMemo`, `useCallback`, `useRef`.             |
| **Styling**                      | Utility‑first Tailwind inside `className`. Never inline `<style>` or CSS files for new code.  |
| **Responsiveness**               | Every component must degrade gracefully from mobile to desktop.                               |
| **Separation of Concerns**       | Keep presentational components “dumb”. Put data‑fetching & mutations in custom hooks.         |
| **Clear UI States**              | Always handle _loading_, _error_, and _empty_ states.                                         |

---

## 4. Local Development & Common Commands

| Task                                       | Command             |
| ------------------------------------------ | ------------------- |
| Start dev server                           | `pnpm dev`          |
| Build for production (type‑check included) | `pnpm build`        |
| Preview production build locally           | `pnpm preview`      |
| Type‑check only                            | `pnpm typecheck`    |
| Run ESLint                                 | `pnpm lint`         |
| Run tests                                  | `pnpm test`         |
| **Mock JSON server** (port 8080)           | `pnpm start-server` |
| **Custom Express server**                  | `pnpm dev-server`   |

> ℹ️ **pnpm** is the mandatory package manager. Do not use npm/yarn.

---

## 5. API Data‑Fetching Workflow

- All async calls go through **React Query**.
- Choose expressive `queryKey` arrays (`['trains', { date, zoneId }]`).
- Use `enabled` to defer queries until prerequisites exist.
- Mutations: ensure optimistic updates & proper cache invalidation.

---

## 6. UI / Component Guidelines

- **Primary components** come from our internal _flunte‑ui_ package.
- **Mantine** is allowed **only** for advanced tables (MRT).
- For loading states, use `<Spinner />` or skeletons; for errors, show friendly messages.
- When building modals/dialogs, reuse `WindowModal` from `@shared/components/windowModal`.

---

## 7. Performance Tips for D3 + React (GHT Charts)

1. Let D3 own the **canvas/SVG** subtree; avoid React re‑renders of that subtree.
2. Bubble events upward via `useCallback` to minimise parent updates.
3. Memoise large datasets passed as props to the chart.
4. For canvas, composite drawing layers instead of redrawing everything.

---

## 8. Testing Strategy

| Layer               | Tooling                        |
| ------------------- | ------------------------------ |
| Unit & hook tests   | **Vitest** (jsdom)             |
| Component snapshots | Vitest + React Testing Library |
| Coverage            | `--coverage` with v8 provider  |

Shared setup: `vitest.setup.ts`.

---

## 9. Code Style, Linting & Formatting

- **ESLint** + **Prettier** enforce style.
- Disallowed ESLint rules (global): `react-hooks/exhaustive-deps`, `@typescript-eslint/no-explicit-any`.
- Pre‑commit hook (`husky + lint‑staged`) runs:
  ```bash
  pnpm lint &&   npx prettier --write $(git diff --name-only --diff-filter=ACM | grep -E '\.(js|ts|tsx|jsx|json|css|scss|md)$')
  ```

---

## 10. Git & Version Control

- **Branch prefixes**: `feature/`, `fix/`, `chore/`, `docs/`, `refactor/`.
- **Commit messages** follow _Conventional Commits_:  
  `feat(login): add user login button`  
  `fix(password): correct validation logic`
- **Pull Requests** require ≥1 approval.

---

## 11. Dependency Management

- Prefer the existing stack; add libraries **only when justified**.
- Install with exact versions:
  ```bash
  pnpm add <package> --save-exact
  ```

---

## 12. Environment Configuration

| Variable                          | Description             |
| --------------------------------- | ----------------------- |
| `VITE_APP_BASE_URL_BACKEND`       | Production API base URL |
| `VITE_APP_BASE_URL_BACKEND_DEV`   | Dev API base URL        |
| `VITE_APP_BASE_URL_BACKEND_LOCAL` | Local mock server URL   |

Add these to a `.env` file at the project root.

---

## 13. Legacy Code Reminder

`codigoCLegado/` hosts historical C++ server logic. **Treat as read‑only** – never modify without explicit team approval.

---

## 14. Frequently Asked Questions

<details>
<summary>Why dual UI libraries?</summary>
Mantine offers battle‑tested table components we need now; flunte‑ui covers the rest. We will converge once flunte‑ui tables are ready.
</details>

<details>
<summary>How do I run only modified lint files?</summary>
`pnpm lint --filter=<pattern>` or rely on the pre‑commit hook which automatically lints staged files.
</details>

<details>
<summary>I hit a React‑D3 flicker while hovering charts!</summary>
Check §7 above – usually re‑renders are caused by state updates in the mousemove handler. Memoise callbacks and isolate D3 DOM.
</details>

---

## 15. Contact & Support

_Core maintainers_: `@alef`, `@frontend‑team`, `@devops`.  
Open a GitHub Discussion or tag us in your PR for help.

---

Happy coding – and welcome to OptMove!
