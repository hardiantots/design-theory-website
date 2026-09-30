import assert from 'node:assert/strict';
import { readFile, access } from 'node:fs/promises';
import { execFileSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import { lessons, normalizeProgress, isComplete, practiceSteps } from '../dist/content.js';
const root = new URL('../', import.meta.url);
assert.equal(lessons.length, 8);
assert.equal(new Set(lessons.map(l => l.id)).size, 8);
for (const lesson of lessons) {
  assert.equal(lesson.quiz.length, 3);
  assert.equal(lesson.canva.length, 3);
  assert.equal(lesson.figma.length, 3);
  assert.equal(lesson.points.length, 3);
  assert.ok(lesson.source[1].startsWith('https://'));
  for (const [, options, correct, explanation] of lesson.quiz) {
    assert.equal(options.length, 3);
    assert.ok(correct >= 0 && correct < options.length);
    assert.ok(explanation.length > 20);
  }
}
const empty = normalizeProgress(null);
assert.ok(lessons.every(l => !isComplete(l, empty)));
const corrupt = normalizeProgress({ answers: { gestalt: [99, '1', -1] }, checks: { message: 'yes' } });
assert.deepEqual(corrupt.answers.gestalt, [null, null, null]);
assert.equal(corrupt.checks.message, false);
const answered = normalizeProgress({ answers: { gestalt: [0, 1, 2] } });
assert.ok(isComplete(lessons[0], answered));
assert.ok(!isComplete(lessons[1], answered));
assert.deepEqual(normalizeProgress(JSON.parse(JSON.stringify(answered))), answered);
assert.equal(practiceSteps.Canva.length, 3);
assert.equal(practiceSteps.Figma.length, 3);
const html = await readFile(new URL('dist/index.html', root), 'utf8');
for (const [, reference] of html.matchAll(/(?:href|src)="(\.\/[^"#]+)"/g)) await access(new URL(`dist/${reference.slice(2)}`, root));
for (const [, anchor] of html.matchAll(/href="#([^"#]+)"/g)) assert.ok(html.includes(`id="${anchor}"`), `Missing anchor ${anchor}`);
for (const name of ['app.js', 'content.js']) execFileSync(process.execPath, ['--check', fileURLToPath(new URL(`dist/${name}`, root))]);
const css = await readFile(new URL('dist/styles.css', root), 'utf8');
assert.equal((css.match(/{/g) || []).length, (css.match(/}/g) || []).length);
assert.ok(!css.includes("@import url('')"));
console.log('Validated: 8 modules, 24 quizzes, progress normalization and persistence, local assets, navigation anchors, JavaScript syntax, and CSS braces.');
