# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev          # Start development server (localhost:5173)
npm run build        # TypeScript check + Vite production build
npm run lint         # Run ESLint
npm run lint:fix     # Auto-fix ESLint issues
npm run format       # Format with Prettier
npm run dev:yaml     # Convert YAML to JSON, then start dev server
```

Pre-commit hook runs `lint-staged` automatically (ESLint + Prettier on staged files).

## Architecture

This is a React 19 + TypeScript + Vite app, the official BetterPuertoPrincesa.org civic portal for Puerto Princesa City, Palawan. It uses React Router, Tailwind CSS, i18next for multilingual support, and a YAML-based content system.

### Routing

`src/App.tsx` defines the routes:

- `/` — Home page
- `/services` / `/services/:category` — Services listing
- `/government` / `/government/:category` — Government section listing
- `/statistics` — City statistics (demographics, competitiveness index, fiscal transparency, infrastructure projects)
- `/news` — News & updates
- `/:documentSlug` / `/:lang/:documentSlug` — Document viewer (markdown content, used by both services and government)

### Content System

Content is stored as YAML and Markdown files under `content/`. Two parallel content trees exist:

#### Services (`content/services/`)

1. **`src/data/services.yaml`** — Top-level service categories (name, slug, icon, description). The `icon` field must be a valid Lucide React icon name.
2. **`content/services/{category-slug}/index.yaml`** — Lists pages under each category (`pages:` array with `name`, `slug`, `description`).
3. **`content/services/{category-slug}/{page-slug}.md`** — Actual markdown content for each service page.

When adding a new service category, you must:

- Add an entry to `src/data/services.yaml`
- Create `content/services/{slug}/index.yaml`
- Add the static import and mapping entry to `src/data/yamlLoader.ts` (`categoryIndexMap`)

#### Government (`content/government/`)

1. **`src/data/government.yaml`** — Top-level government categories (name, slug, icon, description).
2. **`content/government/{category-slug}/index.yaml`** — Lists pages under each category.
3. **`content/government/{category-slug}/{page-slug}.md`** — Markdown content for each department/office page.

When adding a new government category, you must:

- Add an entry to `src/data/government.yaml`
- Create `content/government/{slug}/index.yaml`
- Add the static import and mapping entry to `src/data/yamlLoader.ts` (`govCategoryIndexMap`)

Markdown files are loaded dynamically via `import()` in `src/lib/markdownLoader.ts`. The title is extracted from the first `# Heading` and the description from the first paragraph. Content is plain markdown — write real values directly (e.g. the mayor's actual name, not a token).

### Internationalization

- i18next with `HttpBackend` loads translation files from `public/locales/{lang}/common.json`
- Language detection order: `localStorage` → `navigator` → `htmlTag`
- Fallback language: `en`
- Supported languages are defined in `src/types/index.ts` (`LanguageType`)
- Currently only `public/locales/en/common.json` exists

### UI Components

Reusable primitives live in `src/components/ui/`: `Section`, `Heading`, `Text`, `Card`, `ListItem`, `Breadcrumbs`, `ScrollToTop`. Use these instead of raw HTML elements for consistency.

### Code Style

- Single quotes, 2-space indentation, trailing commas (ES5), semicolons, 80-char line width (enforced by Prettier)
- Arrow functions omit parens for single arguments
