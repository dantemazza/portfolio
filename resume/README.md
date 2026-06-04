# Resume

- `RESUME.md` — plain-text draft / scratchpad.
- `resume.tex` — the formatted, ATS-friendly source of truth.
- `build.sh` — compiles `resume.tex` and publishes the PDF.

## Rebuild the PDF

Prerequisite (one-time): `brew install tectonic`

```sh
npm run resume:build      # from the repo root
# or
cd resume && ./build.sh
```

This compiles `resume.tex` and copies the result to
`public/resume/dante-mazza-resume.pdf`, which the `/experience` page links to.
