# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Marketing/landing site for **Fynd Mee** (a dating & social-connection app by BB Group), deployed on Vercel at `https://fyndmee.app`. Next.js 16 App Router, React 18, TypeScript, Tailwind CSS v4, shadcn/ui.

## Commands

```bash
npm run dev      # dev server (Turbopack, http://localhost:3000)
npm run build    # production build
npm run start    # serve the production build
npx tsc --noEmit # type-check — the real correctness gate (see below)
```

There are **no tests** and no test runner. The `lint` script (`eslint .`) is declared in `package.json` but ESLint is not installed and there is no ESLint config, so it fails — don't rely on it.

`next.config.mjs` sets `typescript.ignoreBuildErrors: true`, so **`npm run build` succeeds with type errors**. Run `npx tsc --noEmit` after TypeScript changes; expect pre-existing errors in untouched files, so compare before/after rather than requiring a clean run.

`images.unoptimized: true` — `next/image` does no optimization here, which is why plain `<img>` and `next/image` are mixed freely throughout.

## Environment

`.env.local` (gitignored) holds:

- `NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_ANON_KEY` — browser-side Supabase client
- `SUPABASE_SERVICE_ROLE_KEY` — present but currently unused
- `ANTHROPIC_API_KEY` — server-side only, used by `app/api/chat/route.js`

## Architecture

**Content lives in the source, not a CMS.** Blog posts, job listings, pricing tiers, testimonials, and FAQ copy are hardcoded arrays inside the page/component files. The important consequence:

- Blog posts are **duplicated** between `app/blog/page.tsx` (list) and `app/blog/[slug]/page.tsx` (detail), each with its own copy of the `blogPosts` array including full HTML `content` (rendered via `dangerouslySetInnerHTML`). Editing a post means editing **both** files.
- Careers work the same way: `app/careers/page.tsx` lists roles, `app/careers/[id]/page.tsx` holds a separate `jobData` map keyed by numeric id.

**Theming is custom, not `next-themes`.** `components/theme-provider.tsx` is a hand-rolled context: dark by default, persists to `localStorage['theme']`, and applies the `light`/`dark` class to both `document.documentElement` and a wrapper `<div>`. Consume it with `useTheme()` from `@/components/theme-provider`. The `next-themes` package is only pulled in by `components/ui/sonner.tsx` (shadcn boilerplate). Client components that render theme-dependent UI use a `mounted` flag to avoid hydration mismatch — `components/header.tsx` is the reference implementation.

**Tailwind v4, CSS-first config.** There is no `tailwind.config.*`. Design tokens live in `app/globals.css` (`@import 'tailwindcss'`, `@custom-variant dark (&:is(.dark *))`, `@theme inline` block mapping CSS vars to Tailwind colors). `styles/globals.css` is a stale near-copy that nothing imports — ignore it; edit `app/globals.css`.

Brand color `#AB1E3E` (with `#D42952` as the lighter accent) is hardcoded as an arbitrary Tailwind value in ~200 places rather than being a token. Match the surrounding code when adding UI.

**Supabase is used only for form writes from the browser** via the anon client in `lib/supabase.ts`:
- `components/be_first_to_know.tsx` → `newsletter_subscribers` table
- `app/contact-us/page.tsx` → `contact-us-website` table

**Chat widget with two-tier fallback.** `components/SimpleChatWidget.tsx` (floating widget on the home page) POSTs to `app/api/chat/route.js`, which proxies to the Anthropic Messages API directly with `fetch` (no SDK). If that call fails, the widget silently degrades to a large hardcoded keyword→response map in the same file. Both the `SYSTEM_PROMPT` (company facts about FyndMee) and the fallback responses live in the widget. The `ai`, `@ai-sdk/*`, and `@botpress/*` dependencies are installed but unused.

**`/profile/[token]`** is a mobile deep-link bridge: it tries `fyndmee://profile/<token>` (Android) or the universal link (iOS), then falls back to the app stores after 3s. The App Store / Play Store URLs there are still placeholders.

## Conventions & gotchas

- Path alias `@/*` maps to the repo root (`@/components`, `@/lib`, `@/hooks`).
- shadcn/ui: "new-york" style, RSC enabled, base color neutral, lucide icons. Add components with `npx shadcn@latest add <name>`; they land in `components/ui/`.
- Most page-level components are `"use client"` — Framer Motion (`motion` + a local `fadeUp`/`Variants` object) drives nearly every section's entry animation.
- Component filenames are inconsistent (`hero-section.tsx`, `why_choose_fynd_mee.tsx`, `NewsletterSection.tsx`, `RadioPlayer.jsx`) and default-export names often don't match the file (`NewsletterSection.tsx` exports `BlogPostSection`). Follow imports rather than guessing.
- `components/hero-section.tsx` is ~850 lines, of which the first ~320 are a commented-out previous version. The live component starts at the second `"use client"` directive around line 320.
- `hooks/use-toast.ts` and `components/ui/use-toast.ts` are byte-identical duplicates (same for `use-mobile`); `components/ui/toaster.tsx` imports the `components/ui` copy.
- Site-wide chrome lives in `app/layout.tsx`: fonts (Kumbh Sans as the global `*` font), favicons, Vercel Analytics, the Lordicon CDN script, and `ThemeProvider`. `RadioPlayer` is imported there but not rendered.
- `app/sitemap.ts` only lists the homepage; add new routes there when they should be indexed.
