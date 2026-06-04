# CLAUDE.md

Personal portfolio for Dante Mazza, deployed at **dantemazza.com**.

## Working principles

- **Keep it simple.** Do not overengineer or complicate anything. Do not add fallback methods. Prefer the smallest change that works.
- **Maintain `TODO.md`** for actions the user must take. If you reference an asset you can't produce (e.g. a company logo or screenshot), reference it in code and add a TODO noting exactly where the file should go.
- The old portfolio lives in `personal-website/` (gitignored) — use it only for inspiration, not as a dependency.

## Stack

- **Next.js 16** (App Router, React 19, RSC) + **TypeScript**
- **Tailwind CSS v4** (config-less, via `@tailwindcss/postcss`; tokens in `app/globals.css`)
- **ShadCN UI** (new-york style, lucide icons) in `components/ui/`
- Path alias `@/` → repo root (see `tsconfig.json`)

## Commands

Use **port 3010** for the dev server.

```sh
npm run dev            # next dev on port 3010
npm run build          # production build
npm run lint           # eslint
npm run resume:build   # rebuild the LaTeX resume PDF (see Resume below)
```

## Structure

- `app/` — routes: `/` (home), `/experience`, `/projects`, `/projects/shiplite`, `/projects/tricksandtrumps`. Shared chrome (`Header`, `Navigation`) and dark theme are in `app/layout.tsx`; theme tokens in `app/globals.css`.
- `components/` — feature folders (`home/`, `experience/`, `projects/`, `layout/`) plus ShadCN primitives in `components/ui/`.
- `lib/data/` — **content lives here, not in components.** Pages map over these arrays:
  - `experiences.ts` (`Experience[]`), `projects.ts` (`Project[]`), `shiplite-features.ts`, `social-links.ts`
  - `lib/constants.ts` holds shared values like `CONTACT_EMAIL` (`dantemazza1@gmail.com`).
- `types/` — `experience.ts`, `project.ts` define the shapes used by `lib/data`.
- `public/images/` — `companies/`, `tech/`, `projects/<slug>/` assets referenced by the data files.

### Editing site content

To change experience or project content, edit the corresponding object in `lib/data/*.ts` — keep it conforming to the type in `types/`. Add images under `public/images/...` and reference them by path. New tech/company logos or screenshots that you don't have go in `TODO.md`.

## Styling conventions

- Dark, GitHub-inspired theme: backgrounds `#1c2128`, text `#c9d1d9`, accent green `#238636`. Reuse the `.code-card` utility (in `app/globals.css`) for panels.
- Fonts: Geist Sans/Mono and JetBrains Mono, wired up in `app/layout.tsx`.

## Resume

The downloadable resume is generated from LaTeX with **Tectonic** (`brew install tectonic`).

- `resume/resume.tex` — ATS-friendly source of truth (single column, selectable text, no graphics).
- `resume/RESUME.md` — plain-text draft / scratchpad.
- `resume/build.sh` — compiles and publishes to `public/resume/dante-mazza-resume.pdf`, which `components/experience/ResumeDownload.tsx` links to.

After editing `resume.tex`, run `npm run resume:build`. The build automatically runs
`resume/check-ats.mjs` (also available as `npm run resume:check`), which fails if the
output regresses ATS-friendliness — it asserts the PDF is **one page**, has selectable
text, the **name extracts as the first line**, and contains the expected sections/contact
info in a sane reading order. Keep it one page. See `.claude/skills/resume/SKILL.md` for
the full workflow.
