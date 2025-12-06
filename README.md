# Project Gym

App Next.js (App Router) para landing, login e �rea privada com visual neon/gradient. Backend ainda n�o conectado; dados de dashboard s�o mocks para navega��o e testes de UI.

## Principais telas
- Landing: hero com CTA e bot�o de login reutilizando o `Button` global.
- Login: card transl�cido com destaques e formul�rio.
- Dashboard (privada): estat�sticas mockadas, treino do dia, metas, plano semanal, modal de termos/privacidade, toggle de tema escuro/claro e sidebar colaps�vel.
- Termos/Privacidade: p�ginas estilizadas com Footer.

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
- `/dashboard` (usa mocks; toggle tema e sidebar s� em desktop)
- `/termos`, `/privacidade`

## Notas de desenvolvimento
- Tailwind v4 via `@import "tailwindcss"` em `src/styles/globals.css`.
- Rotas p�blicas em `src/pages/` (legacy) e App Router em `src/app/`.
- Dados da dashboard est�o em arrays est�ticos no `page.tsx`; substituir por fetch do backend quando dispon�vel.
- Evite acentos estranhos: alguns textos vieram com encoding quebrado, j� corrigidos nos componentes.

## Scripts
- `npm run dev` � servidor de desenvolvimento
- `npm run build` � build de produ��o
- `npm run start` � serve build
- `npm run lint` � ESLint
