# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added

- Puerto Princesa branding: logo, favicon set, `site.webmanifest`, hero graphic (`public/princess-of-the-sea.svg`)
- Homepage sections: "Puerto Princesa at a Glance", weather + city map, hotlines, news, official directory banner
- `src/pages/Statistics.tsx` and `src/pages/News.tsx` — dedicated `/statistics` and `/news` routes
- `src/components/home/PuertoPrincesaMap.tsx` — Leaflet map centered on City Hall
- Real, sourced data: `src/data/{hotlines,news,statistics}.ts`, plus 21 previously-missing service Markdown pages across 6 categories
- Filipino translations (`public/locales/fil/common.json`) and an English/Filipino toggle in the navbar
- `CONTRIBUTING.md`, `CODE_OF_CONDUCT.md`, `SECURITY.md`

### Changed

- i18n rewired to a single `i18next-http-backend`-loaded `common` namespace (previously two disconnected i18n systems where Filipino strings were never actually loaded)
- `ServicesSection` / `GovernmentActivitySection` now accept `limit`/`showViewAll` props so the homepage (3 items + "view all") and full listing pages can share one component correctly
- `Breadcrumbs` and `Document.tsx` now translate their "Home" label and loading/error states
- README, CONTENT-GUIDE, CONTENT-MANAGEMENT, and DEPLOYMENT-GUIDE rewritten for Puerto Princesa specifically, following the BetterAborlan documentation pattern

### Removed

- All starter-kit scaffolding: `STARTER-KIT-README.md`, `STARTER-KIT-SUMMARY.md`, `scripts/setup-starter-kit.js`, `env.example`, dead `src/i18n/locales/*.json`, unused `src/components/I18nTest.tsx`
- `{PLACEHOLDER}` companion-JSON templating system and its `VITE_<KEY>` env var fallback — content is written directly for Puerto Princesa

## [0.2.0] - 2026-03-07

### Added

- `/government` and `/government/:category` routes with a new `Government` page
- Government section content system under `content/government/` (departments: executive, legislative)
- `src/pages/Government.tsx` — category listing page for government departments
- `src/data/government.yaml` — top-level government category definitions
- Expanded `Document` page to support government content alongside services
- Navigation updated: main nav Government item now links to `/government/departments`
- OG image template redesigned for improved open graph previews
- Companion JSON files for markdown pages — optional `{slug}.json` files supply `{PLACEHOLDER}` token values (official names, dates, etc.) interpolated at load time, with `VITE_<KEY>` env vars as fallback

### Changed

- `yamlLoader.ts` refactored to handle both service and government category indexes
- `markdownLoader.ts` refactored to resolve markdown files across content types; now also loads companion JSON and runs `interpolate()` for token substitution
- `Navbar` updated to support government section routing
- `Breadcrumbs` updated to reflect government section paths
- `Section` component adjusted for layout consistency
- `GovernmentActivitySection` on Home page now points to live government routes
- `Services` page layout and routing logic improved
- Locale strings updated in `public/locales/en/common.json` and `src/i18n/locales/en.json`

### Documentation

- `README.md` — project structure and content setup steps updated for government section
- `CLAUDE.md` — routing, content system, and companion JSON file behavior documented
- `CONTENT-MANAGEMENT.md` — added government department pages section, JSON data files explained, dynamic placeholder workflow included
- `CONTENT-GUIDE.md` — added department/office page template, content type, and "Dynamic Content with Placeholders" section

## [0.1.0] - 2026-03-06

### Added

- `@bettergov/kapwa` component library integrated as the primary UI primitive layer
- New font and theme setup via `src/fonts.css`
- `react-helmet-async` for SEO and document head management

### Changed

- Migrated styling pipeline to **Tailwind CSS v4** (Vite plugin, PostCSS config updated)
- Replaced local `Card` component (`src/components/ui/Card.tsx`) with Kapwa card primitives
- Replaced legacy `ListItem` component with Kapwa cards and banners across Services, Home, and Document pages
- Updated `src/index.css` to align with Tailwind v4 conventions
- Upgraded `App.tsx` and `main.tsx` for the new app shell and SEO setup

### Removed

- `src/components/ui/Card.tsx` — superseded by Kapwa primitives
- `src/components/ui/ListItem.tsx` — superseded by Kapwa cards and banners

[0.2.0]: https://github.com/iyanski/betterlocalgov/releases/tag/v0.2.0
[0.1.0]: https://github.com/iyanski/betterlocalgov/releases/tag/v0.1.0
