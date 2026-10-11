#!/usr/bin/env node
/**
 * MURAVEN - Build script
 *
 * Skleja src/index.template.html + src/partials/** w gotowy index.html.
 * Dyrektywa w pliku HTML:   <!-- @include sciezka/do/pliku.html -->
 * (ścieżka względna wobec pliku, w którym stoi dyrektywa; wcięcie dyrektywy
 *  jest dodawane do każdej linii wstawianego pliku; include'y mogą być zagnieżdżone).
 *
 * Użycie:  node build.js
 */
const fs = require('fs');
const path = require('path');

const SRC = path.join(__dirname, 'src', 'index.template.html');
const OUT = path.join(__dirname, 'index.html');
const INCLUDE_RE = /^([ \t]*)<!--\s*@include\s+(\S+)\s*-->[ \t]*$/;

const BANNER =
  '<!-- PLIK GENEROWANY AUTOMATYCZNIE – nie edytuj ręcznie!\n' +
  '     Edytuj pliki w folderze src/, a następnie uruchom: node build.js -->';

function render(file, stack = []) {
  if (stack.includes(file)) {
    throw new Error(`Cykliczny include: ${[...stack, file].join(' -> ')}`);
  }
  if (!fs.existsSync(file)) {
    throw new Error(`Brak pliku: ${path.relative(__dirname, file)}` +
      (stack.length ? ` (include w ${path.relative(__dirname, stack[stack.length - 1])})` : ''));
  }

  const lines = fs.readFileSync(file, 'utf8').replace(/\n$/, '').split('\n');
  const out = [];

  for (const line of lines) {
    const m = line.match(INCLUDE_RE);
    if (!m) {
      out.push(line);
      continue;
    }
    const [, indent, rel] = m;
    const target = path.resolve(path.dirname(file), rel);
    for (const inc of render(target, [...stack, file])) {
      out.push(inc.trim() ? indent + inc : '');
    }
  }
  return out;
}

const lines = render(SRC);
// Banner tuż po <!DOCTYPE html>
const doctypeIdx = lines.findIndex(l => /^<!DOCTYPE/i.test(l));
lines.splice(doctypeIdx + 1, 0, BANNER);

fs.writeFileSync(OUT, lines.join('\n') + '\n');
console.log(`✔ Zbudowano index.html (${lines.length} linii)`);
