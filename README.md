# Календарь звонков


[![hexlet-check](https://github.com/AlexeyKrutyakov/ai-for-developers-project-386/actions/workflows/hexlet-check.yml/badge.svg)](https://github.com/AlexeyKrutyakov/ai-for-developers-project-386/actions)
[![CI](https://github.com/AlexeyKrutyakov/ai-for-developers-project-386/actions/workflows/ci.yml/badge.svg)](https://github.com/AlexeyKrutyakov/ai-for-developers-project-386/actions/workflows/ci.yml)

Сервис для бронирования календаря звонков (учебный проект Хекслета, референс — [cal.com](https://cal.com)).

Учебный проект Хекслета: https://ru.hexlet.io/programs/ai-for-developers
Как это должно работать: https://files.hexlet.app/a/2ipc5m

## Стек

- **Frontend:** Vite, React, TypeScript, [shadcn/ui](https://ui.shadcn.com/) (Tailwind CSS v4)
- **Backend:** Node.js, Fastify, TypeScript
- **Тесты:** Vitest (+ React Testing Library и jsdom на фронтенде)
- **Линт и форматирование:** ESLint (flat config), Prettier
- **CI/CD:** GitHub Actions, release-please (релизы по Conventional Commits)

## Структура

```
├── frontend/   # Vite + React + shadcn/ui
├── backend/    # Fastify API
├── Makefile    # единые команды для всего проекта
└── .github/workflows/  # CI и релизы
```

## Установка

Требуется [Node.js](https://nodejs.org) 20 или новее и [Make](https://www.gnu.org/software/make/).

```bash
git clone https://github.com/AlexeyKrutyakov/ai-for-developers-project-386.git
cd ai-for-developers-project-386
make install
```

## Использование

Запуск обоих приложений одновременно (фронтенд на http://localhost:5173, API на http://localhost:3000):

```bash
make dev
```

Проверки:

```bash
make lint        # ESLint + Prettier
make typecheck   # проверка типов
make test        # тесты фронтенда и бэкенда
make build       # сборка
```

## Релизы

Релизы автоматизированы через [release-please](https://github.com/googleapis/release-please): коммиты в `main` в формате Conventional Commits попадают в Release PR, а после его мёрджа создаётся тег и GitHub Release.

---

<details>
<summary>Автоматические тесты Хекслета</summary>

Тесты запускаются на каждый коммит. За запуск отвечает файл `.github/workflows/hexlet-check.yml` — не удаляйте и не переименовывайте ни его, ни репозиторий.

</details>

## О Хекслете

[Хекслет](https://ru.hexlet.io/) — школа программирования: авторские программы обучения с практикой, поддержкой наставников и реальными проектами, которые остаются в резюме. Этот репозиторий — один из таких проектов.
