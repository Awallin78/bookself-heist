# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.


## Theme & UI (customized)

This project includes a dark, elegant UI theme implemented in `src/index.css`.

- To run the app in development:

```powershell
cd 'C:\Users\awall\Downloads\Bookself heist\bookself-heist'
npm install
npm run dev
```

- Theme variables (colors, radius, shadows, transitions, etc.) live in the `:root` of `src/index.css`. Customize these CSS variables to tweak the look:

	- `--bg` — background
	- `--surface`, `--surface-2` — card/surface backgrounds
	- `--text`, `--muted` — primary and muted text
	- `--accent`, `--accent-2` — accent colors

- Useful classes introduced:

	- `.app-container` — main page container
	- `.card` — surface card with subtle elevation and hover lift
	- `.avatar` — circular avatar
	- `.search-input` — styled search input
	- `.bottom-nav`, `.bottom-nav__item` — floating bottom navigation
	- `.pwa-badge` — small PWA notification
	- `.btn`, `.btn.secondary` — buttons

- The CSS imports the `Inter` font from Google Fonts. Replace or remove the import in `src/index.css` if you prefer another font.

If you want, I can also:

- tweak animation timings and hover behavior
- add a header component or additional layout primitives
- integrate a UI library (e.g., Shadecn) — note: that requires installing additional packages

## Adding character images

Character images are optional. To show images for characters:

- Place image files into `src/assets/images/` (recommended) or `public/images/` (public).
- In `src/data/characters.js` set the `image` property to the filename, e.g. `"professor.jpg"`.

Examples:

- `src/assets/images/professor.jpg` and in data: `image: "professor.jpg"`
- or `public/images/professor.jpg` and in data: `image: "/images/professor.jpg"`

The app will attempt to resolve `src/assets/images/<filename>` at build time and fall back to any public path you provide.
