# SmartMaldive AI

A responsive research website for the integrated AI and IoT-based smart Maldive fish processing system.

## Features

- React Router pages for research, architecture, AI inspection, IoT monitoring, optimization, results, team, references, contact, and dashboard
- Light and dark themes with browser persistence
- Interactive calculators and simulated monitoring dashboard
- Responsive navigation and mobile layout
- Recharts analytics and Framer Motion animations
- Vercel-compatible SPA routing

## Local development

```bash
npm install
npm run dev
```

Open the local URL shown by Vite, usually `http://localhost:5173`.

## Production build

```bash
npm run build
npm run preview
```

## Free deployment on Vercel

1. Push this project to GitHub, GitLab, or Bitbucket.
2. Sign in to Vercel and select **Add New Project**.
3. Import the repository.
4. Keep the default build command as `npm run build`.
5. Set the output directory to `dist`.
6. Select **Deploy**.

The included `vercel.json` file automatically redirects all routes to the Vite application entry point.

## Project structure

- `src/pages` — website pages and interactive sections
- `src/components` — reusable navigation, cards, charts, and dashboard components
- `src/data` — research and dashboard data
- `src/utils` — calculation logic
