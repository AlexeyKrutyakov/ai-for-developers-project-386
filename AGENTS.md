# AGENTS.md

Учебное приложение для бронирования звонков (референс — cal.com). Монорепо на npm workspaces.

## Команды

Всегда запускать проверки из корня через Make (CI использует ровно эти пути):

```bash
make lint        # ESLint + Prettier --check
make typecheck   # tsc в обоих пакетах
make test        # Vitest во всех workspaces
make build       # сборка обоих пакетов
make dev         # фронтенд (5173) + бэкенд (3000) параллельно
```

Перед коммитом: `make lint && make typecheck && make test`.

## Структура

- `frontend/` — Vite + React 19 + TS + Tailwind v4 + shadcn/ui
- `backend/` — Fastify 5 + TS; `src/app.ts` собирает приложение, `src/index.ts` только запускает. Тесты ходят в `app.inject()` без реального порта
- Базовый tsconfig — `tsconfig.base.json`; фронтенд использует project references (`tsc -b`)
- ESLint и Prettier конфигурируются только в корне

## Тонкости

- **shadcn + workspaces**: CLI ломается, обнаружив корневой `package.json` с `workspaces` ("Could not load the workspace config"). Компоненты добавлять из папки `frontend`: `npx shadcn@latest add <component>`. Если init снова понадобится — временно спрятать корневой `package.json`
- **shadcn-компоненты не форматировать**: они в `.prettierignore`, правки вручную нарушают `make lint`
- **Conventional Commits обязательны**: commitlint проверяет каждый коммит (husky локально + CI). Формат нужен release-please — он открывает Release PR после мёрджа в `main`, мёрдж PR создаёт тег и GitHub Release
- **TypeScript**: фронтенд на v6 (`baseUrl` deprecated — не добавлять), бэкенд на v5
- `.github/workflows/hexlet-check.yml` не трогать: переименование или удаление ломает автотесты Хекслета
