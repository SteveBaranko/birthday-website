# Happy Birthday Mom — Website

A React + Vite site with a confetti background, thick multicolor bubble-letter
headline (each letter its own component), a photo collage, and a closing
"Love You Mom" message.

## Project structure

```
birthday-website/
├── index.html
├── package.json
├── vite.config.js
├── public/
├── src/
│   ├── main.jsx
│   ├── App.jsx
│   ├── index.css
│   ├── assets/              ← your photos go here
│   └── components/
│       ├── BubbleLetter.jsx     (one letter, one color)
│       ├── BubbleText.jsx       (composes letters into words/lines)
│       ├── ConfettiBackground.jsx
│       └── PhotoCollage.jsx
```

## 1. Install dependencies

From inside the `birthday-website` folder:

```bash
npm install
```

## 2. Add your own photos

Replace the placeholder files in `src/assets/` with your real photos (any
number of images works). Then update the imports at the top of `src/App.jsx`
to match your filenames:

```jsx
import photo1 from "./assets/your-photo-1.jpg";
import photo2 from "./assets/your-photo-2.jpg";
// ...
const PHOTOS = [photo1, photo2, /* ... */];
```

Always `import` images rather than writing a plain string path — Vite needs
the import so it can bundle the file and rewrite its URL correctly once
deployed under a GitHub Pages subpath.

## 3. Run it locally

```bash
npm run dev
```

Open the printed local URL (usually `http://localhost:5173`) to preview.

## 4. Customize the text/colors

- Change the headline or closing message by editing the `words` arrays passed
  to `<BubbleText />` in `src/App.jsx`.
- Change the color palette in `src/components/BubbleText.jsx` (the `COLORS`
  array) and `src/components/ConfettiBackground.jsx` (also `COLORS`) to keep
  everything visually consistent.
- Adjust confetti density via the props on `<ConfettiBackground />`
  (`dotCount`, `shortStripeCount`, `fullLineCount`).

## 5. Deploy to GitHub Pages

### a. Create a GitHub repo

Create a new repo on GitHub (e.g. `mom-birthday-site`) and push this project:

```bash
cd birthday-website
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git push -u origin main
```

### b. Set the Vite base path

Open `vite.config.js` and set `base` to match your repo name exactly:

```js
export default defineConfig({
  plugins: [react()],
  base: "/YOUR_REPO_NAME/",
});
```

(If you're deploying to a *user/organization* page named
`YOUR_USERNAME.github.io`, set `base: "/"` instead.)

### c. Install the gh-pages package (already listed in package.json)

```bash
npm install
```

### d. Deploy

```bash
npm run deploy
```

This runs `vite build` (via `predeploy`) and then pushes the contents of
`dist/` to a `gh-pages` branch on your repo.

### e. Turn on GitHub Pages

1. Go to your repo on GitHub → **Settings** → **Pages**.
2. Under "Build and deployment", set **Source** to **Deploy from a branch**.
3. Set **Branch** to `gh-pages` and folder to `/ (root)`.
4. Save. GitHub will give you a URL like:
   `https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/`

It can take a minute or two for the first deploy to go live. Any time you
want to update the site, just run `npm run deploy` again.

## Notes

- `BubbleLetter.jsx` renders a single character with its own color and a
  dark outline stroke, giving the thick "bubble letter" look.
- `BubbleText.jsx` walks a color palette across every letter in the whole
  phrase (not resetting per word), so consecutive words don't repeat the
  same color pattern.
- If a letter's stroke looks too thin/thick on your screen, adjust the
  `2.5px` value in `BubbleLetter.jsx`'s `WebkitTextStroke`.
