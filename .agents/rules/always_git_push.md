# Muraven Project - Workspace Rules

## Struktura projektu (WAŻNE)
- `index.html` jest **generowany** – NIGDY nie edytuj go ręcznie.
- HTML edytuj w `src/` (`src/index.template.html` + `src/partials/**`), potem uruchom `node build.js`.
  - Karty portfolio: `src/partials/portfolio/<kategoria>.html`
  - Dane do modala projektu (zdjęcia, zakres, opis): `js/projects-data.js` (klucz = `data-project-id`)
- Style: `css/*.css` (kolejność `<link>` w szablonie ma znaczenie; `responsive.css` zawsze ostatni).
- Skrypty: `js/*.js` (`projects-data.js` ładowany jako pierwszy).

## Automatic Git Synchronization
- **MANDATORY**: Po każdej zakończonej edycji, dodaniu projektu lub zdjęć, ZAWSZE natychmiast wykonaj:
  `node build.js && git add -A && git commit -m "<opis zmian>" && git push origin main`
- Nigdy nie zostawiaj plików w stanie uncommitted / unpushed. GitHub musi być zawsze w 100% zsynchronizowany ze stanem lokalnym.
