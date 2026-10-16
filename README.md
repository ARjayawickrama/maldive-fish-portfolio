# SmartMaldive AI

A responsive, static HTML and CSS research website for an integrated AI- and IoT-based smart Maldive fish processing system. The site uses no React or client-side JavaScript. Navigation uses in-page links, and the project files are direct downloads.

## Local preview

Install the development dependency and start Vite:

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

The production output is written to `dist`. The supplied reports, presentations and thesis PDFs are served from `New folder` and copied into the build by Vite.

Before deploying from Git, include the files in `New folder/Thesis`; that supplied folder is currently untracked.

## Deploy on Vercel

Import the repository, use `npm run build` as the build command and `dist` as the output directory. The included `vercel.json` keeps the single-page anchor navigation available at the site root.

## Project files

- `index.html` — complete static website content and in-page navigation
- `styles.css` — responsive layout, typography, colors and components
- `New folder` — downloadable reports, proposals, thesis drafts and presentations
