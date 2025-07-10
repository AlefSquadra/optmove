# Project: Optmove - Baixada Santista Contribution Guidelines

## Overview

This document outlines the contribution and development guidelines for the Optmove project. Following these instructions is crucial for maintaining code consistency, quality, and long-term maintainability.

## Core Principles & Architecture

- React Standards: Use React 18+ with Hooks and Function Components exclusively. Class components are not permitted.
- Component Architecture: Adhere to a Component Composition pattern. Build complex UIs by combining simple, reusable components.
- State Management: Use React's Context API with Providers for sharing global or feature-wide state.
- Performance: Leverage performance hooks like useCallback, useMemo, and useRef appropriately to prevent unnecessary re-renders and computations.
- Styling: Use TailwindCSS following its utility-first methodology. Keep styling logic within the className attribute.
- Responsiveness: All components must be responsive.

## Development Workflow

- API Data Fetching:

* All asynchronous API calls must be managed by @tanstack/react-query.
* Use descriptive and structured queryKey arrays for easy caching and invalidation.
* Use the enabled option to conditionally trigger queries and prevent unnecessary API calls.

- Separation of Concerns:

* View Components: Should be pure, presentational components that receive data and callbacks via props.
* Data Logic: Should be encapsulated within custom hooks (e.g., useDashboardData, useFetchUserDetails).

- UI States:

* Provide clear visual feedback for all data states.
* Loading: Use components like Spinner or SkeletonLoader.
* Error: Display user-friendly error messages. Using mock data as a fallback is only acceptable in specific, pre-approved scenarios.

- Component Library:

* Primary components must be imported from our internal flunte-ui library.
* The Mantine library should only be used for building tables.

- Code Style:

* Use clear and descriptive variable names. Avoid excessive or cryptic abbreviations.
* Organize imports using path aliases defined in tsconfig.json (e.g., @features, @shared, @app).
* Write comments sparingly. Code should be self-explanatory. Use comments only to explain complex logic or "why" something was done a certain way.

## Git & Version Control

Branching Strategy: Prefix branch names based on their purpose: feature/, fix/, chore/, docs/, refactor/.
Example: feature/user-login-form
Commit Messages: Follow the Conventional Commits specification.
Example: [FEATURE] - add user login button or [FEATURE] - correct password validation logic
Pull Requests (PRs): All PRs must be reviewed and approved by at least one other developer before being merged into the main branch.

## Dependency Management

Adding Dependencies: Avoid adding new dependencies unless necessary. If a new library is required, provide a clear justification in your PR.
Installation: All dependencies must be added using pnpm with the --save-exact flag to ensure consistent versions across all development environments.
pnpm add <package-name> --save-exact

## Code Quality

Linting & Formatting: This project uses ESLint and Prettier to enforce a consistent code style.
Pre-Commit Hook: Before committing your changes, run the following command to ensure your code adheres to the project's standards:

```BASH
pnpm lint && npx prettier --write $(git diff --name-only --diff-filter=ACM | grep -E '\.(js|ts|tsx|jsx|json|css|scss|md)$')
```
