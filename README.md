# react-theme-switch-css

A React light/dark theme toggle that starts from the visitor's OS setting and remembers their choice.

**Status:** Working demo. It is a small, self-contained component with a build script and npm package metadata (version 1.0.5, not marked private), but the repository has no tests, and the README's starter-project section refers to a project that is not in this repo.

## The problem

Sites with a dark mode need a toggle that follows the visitor's operating system preference on the first visit and keeps a manual choice after that. This package provides that toggle as a React component, along with its styles.

## What it does

- Starts from a saved choice in `localStorage` (key `theme-preference`), and falls back to `prefers-color-scheme` when nothing is saved.
- Writes the active theme to the `data-theme` attribute on the `<html>` element, so the host site's CSS can switch colors from one place.
- Flips between light and dark on click, and saves the new choice.
- Follows live changes to the OS setting while the toggle is mounted, through a `matchMedia` change listener.
- Renders an accessible button (`aria-label`, `aria-live`) with an animated sun and moon SVG.

## How it's built

- A React function component in `src/index.js`, with plain CSS in `src/style.css`.
- Bundled with Babel (`babel.config.json`, `@babel/preset-env`, `babel-preset-minify`) into `dist/`, with the CSS and assets copied alongside.
- One design decision is visible in the code: the component sets only a `data-theme` attribute and leaves colors to the host site's CSS, so the package carries no palette.
- The click handler is attached to the element with id `theme-toggle` through `document.querySelector`, which assumes one toggle per page.

## Running it locally

The repo ships a `pnpm-lock.yaml`, so install dependencies with pnpm, then build:

```bash
pnpm install
npm run build
```

`npm run build` runs `babel src --out-dir dist --copy-files`.

## What's left

- No tests are committed.
- The README's "npm start" section describes a starter project that is not in this repository, and `package.json` has no `start` script.
- The component assumes a single element with id `theme-toggle` on the page.
