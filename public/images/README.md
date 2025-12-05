Place images used by the app in this folder. Current expected filenames:

- `mask.png` — decorative centered mask used by the app shell (already referenced by CSS at `/images/mask.png`).
- `bg-swatch.png` — small texture/swatch used as the page background tile (referenced by CSS at `/images/bg-swatch.png`).

How to add files:

1. Save the image you attached as `bg-swatch.png` (or `mask.png` if you prefer).
2. Put it at: `public/images/bg-swatch.png` (project root -> `public/images/bg-swatch.png`).

When the file exists Vite will serve it at `/images/bg-swatch.png` and the app's CSS will use it as the page background. The `mask.png` is used as a larger decorative overlay; keep both files if you want both effects.

Restart the dev server after adding files:

```powershell
cd "C:\Users\awall\Downloads\Bookself heist\bookself-heist"
npm run dev
```

If you use a different filename or location, update `src/index.css` to point to the correct path (`background-image: url('/images/your-file.png')`).
