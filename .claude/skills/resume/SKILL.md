---
name: resume
description: Edit and rebuild Dante's LaTeX resume into the published PDF. Use when changing resume content, fixing the resume, or regenerating public/resume/dante-mazza-resume.pdf.
---

# Resume workflow

The resume is LaTeX compiled to PDF with **Tectonic**. The published PDF is what
the portfolio's `/experience` page links to — never hand-edit the PDF.

## Files

- `resume/resume.tex` — source of truth (ATS-friendly: single column, standard
  `article` class, selectable text, no graphics/tables/icons).
- `resume/build.sh` — compiles, copies the PDF to
  `public/resume/dante-mazza-resume.pdf`, then runs the ATS check.
- `resume/check-ats.mjs` — ATS verification (via `pdfjs-dist`): asserts one page,
  selectable text, the name extracts as the first line (not glued to a contact
  line), and expected sections/contact info in a sane reading order. Run
  standalone with `npm run resume:check`.
- `resume/RESUME.md` — plain-text draft only; not used by the build.

## Steps

1. **Prerequisite (one-time):** `brew install tectonic`.
2. Edit `resume/resume.tex`. Keep it ATS-safe — no multi-column layout, no
   graphics, no custom glyph icons; use the existing `\role` and `bullets`
   helpers; lead bullets with strong action verbs and keep quantified metrics.
3. Build: `npm run resume:build` (or `cd resume && ./build.sh`). The build runs
   the ATS check at the end and **fails if the result isn't one ATS-friendly
   page** — so if it passes, page count and parseability are already verified.
4. **Visually confirm layout** (the check verifies parseability, not aesthetics):
   ```sh
   qlmanage -t -s 1600 -o /tmp public/resume/dante-mazza-resume.pdf
   # then open/Read /tmp/dante-mazza-resume.pdf.png
   ```
   If the ATS check reports >1 page, condense content/spacing (the page break is
   discrete — being one line over drops a whole section to page 2).

## Guardrails

- Keep contact info consistent with the site: email `dantemazza1@gmail.com`
  (also in `lib/constants.ts`), `dantemazza.com`, `github.com/dantemazza`,
  `linkedin.com/in/dante-mazza`.
- Target one page (standard for ~3 YoE). If content grows, tighten wording or
  the Skills line rather than shrinking fonts.
- Build artifacts (`resume/resume.pdf`, `*.aux`, `*.log`, `*.out`) are
  gitignored; only `public/resume/dante-mazza-resume.pdf` is committed.
