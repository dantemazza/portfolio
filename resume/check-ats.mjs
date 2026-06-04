// ATS-friendliness check for the published resume PDF.
// Verifies the PDF is genuinely machine-parseable: single page, selectable text
// (not a scanned image), key fields present, and sections in a sane reading
// order. Exits non-zero on any failure. Run: npm run resume:check
import { readFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { getDocument } from 'pdfjs-dist/legacy/build/pdf.mjs';

const PDF_PATH = fileURLToPath(new URL('../public/resume/dante-mazza-resume.pdf', import.meta.url));

const data = new Uint8Array(await readFile(PDF_PATH));
const pdf = await getDocument({ data }).promise;

// Reconstruct visual lines the way an ATS parser does: group text items by their
// baseline (y), order lines top-to-bottom, and order items left-to-right within a line.
const linesFor = (content) => {
  const byY = new Map();
  for (const it of content.items) {
    const y = Math.round(it.transform[5]);
    if (!byY.has(y)) byY.set(y, []);
    byY.get(y).push([it.transform[4], it.str]);
  }
  return [...byY.entries()]
    .sort((a, b) => b[0] - a[0]) // top of page first
    .map(([, items]) => items.sort((a, b) => a[0] - b[0]).map((x) => x[1]).join('').trim())
    .filter(Boolean);
};

let text = '';
let firstLine = '';
for (let p = 1; p <= pdf.numPages; p++) {
  const content = await pdf.getPage(p).then((page) => page.getTextContent());
  const lines = linesFor(content);
  if (p === 1) firstLine = lines[0] ?? '';
  text += lines.join('\n') + '\n';
}
// Whitespace-stripped copy so extraction spacing quirks don't cause false negatives.
const flat = text.replace(/\s+/g, '');

const failures = [];
const check = (name, ok) => {
  console.log(`${ok ? '✓' : '✗'} ${name}`);
  if (!ok) failures.push(name);
};
const has = (s) => flat.includes(s.replace(/\s+/g, ''));
const order = (a, b) => flat.indexOf(a) !== -1 && flat.indexOf(a) < flat.indexOf(b);

check('exactly one page', pdf.numPages === 1);
check('selectable text (not a scanned image)', flat.length > 800);
check('name present', has('Dante') && has('Mazza'));
// The name must extract FIRST and stand alone — ATS treat the first line as the
// candidate name. A two-column header that glues the name to a contact line fails here.
check('name is the first line', /dante/i.test(firstLine) && /mazza/i.test(firstLine));
check('name not merged with contact', !/@|https?|\.com|\d{3}-\d{3}/i.test(firstLine));

for (const h of ['SKILLS', 'EXPERIENCE', 'PROJECTS', 'EDUCATION']) {
  check(`section: ${h}`, has(h));
}
for (const c of ['dantemazza1@gmail.com', 'dantemazza.com', 'github.com/dantemazza', 'linkedin.com/in/dante-mazza']) {
  check(`contact: ${c}`, has(c));
}
for (const e of ['Splunk', 'Amazon', 'Wisedocs', 'University of Waterloo']) {
  check(`employer/school: ${e}`, has(e));
}
check('reading order: SKILLS < EXPERIENCE', order('SKILLS', 'EXPERIENCE'));
check('reading order: EXPERIENCE < PROJECTS', order('EXPERIENCE', 'PROJECTS'));
check('reading order: PROJECTS < EDUCATION', order('PROJECTS', 'EDUCATION'));

console.log('');
if (failures.length) {
  console.error(`ATS check FAILED (${failures.length}): ${failures.join(', ')}`);
  process.exit(1);
}
console.log(`ATS check passed (${pdf.numPages} page).`);
