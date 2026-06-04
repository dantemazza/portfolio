#!/usr/bin/env bash
# Build resume.tex -> PDF with Tectonic and publish it to the portfolio.
set -euo pipefail

cd "$(dirname "$0")"

if ! command -v tectonic >/dev/null 2>&1; then
  echo "Error: 'tectonic' not found. Install it with: brew install tectonic" >&2
  exit 1
fi

tectonic resume.tex

mkdir -p ../public/resume
cp resume.pdf ../public/resume/dante-mazza-resume.pdf

echo "Built resume.pdf and published to public/resume/dante-mazza-resume.pdf"

# Verify the output is still ATS-friendly (single page, parseable text, etc.)
node check-ats.mjs
