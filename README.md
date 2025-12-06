# Project Gym

App Next.js (App Router) para landing, login e área privada com visual neon/gradient. Backend ainda não conectado; dados de dashboard são mocks para navegação e testes de UI.

## Principais telas
- Landing: hero com CTA e botão de login reutilizando o `Button` global.
- Login: card translúcido com destaques e formulário.
- Dashboard (privada): estatásticas mockadas, treino do dia, metas, plano semanal, modal de termos/privacidade, toggle de tema escuro/claro e sidebar colapsável.
- Termos/Privacidade: páginas estilizadas com Footer.

## Componentes
- `src/components/ui/Button.tsx`: variantes primary/outline/ghost, tamanhos e suporte a `as="link"`.
- `src/components/Footer.tsx`: aceita callbacks para Termos/Privacidade.
- `src/app/(private)/components`: `Input`, `Sidebar`, `Modal`, `ThemeToggle`, `Card` (base para todos os cards privados).
- Dashboard: subcomponentes em `src/app/(private)/dashboard/components` (StatsGrid, WorkoutSection, DashboardModal etc.) e tipos em `dashboard/Types.ts`.

## Rodando
```bash
npm install
npm run dev
```
Acesse:
- `/` landing
- `/login`
- `/dashboard` (usa mocks; toggle tema e sidebar só em desktop)
- `/termos`, `/privacidade`

## Notas de desenvolvimento
- Tailwind v4 via `@import "tailwindcss"` em `src/styles/globals.css`.
- Rotas públicas em `src/pages/` (legacy) e App Router em `src/app/`.
- Dados da dashboard estão em arrays estáticos no `page.tsx`; substituir por fetch do backend quando disponível.
- Evite acentos estranhos: alguns textos vieram com encoding quebrado, já corrigidos nos componentes.

## Scripts
- `npm run dev`  servidor de desenvolvimento
- `npm run build`  build de produção
- `npm run start`  serve build
- `npm run lint`  ESLint
