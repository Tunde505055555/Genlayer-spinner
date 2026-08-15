# GenLayer Consensus Spinner

An original, brand-native loading animation for the GenLayer Portal. Three validator nodes orbit an intelligent-contract core, a sweeping proposal arc triggers their votes, and the core pulses once per round at finality. Built as a standalone SVG with self-contained CSS, it loops smoothly, scales from 16 px to 112 px, and adapts automatically to light and dark surfaces while respecting `prefers-reduced-motion`.



---

## What this is

This repository delivers a reusable `GenLayerSpinner` React component and a matching standalone `genlayer-spinner.svg` asset. The spinner tells the GenLayer consensus story in motion: validators vote, a proposal sweeps the ring, and the core reaches finality. Every cycle takes 1.6 seconds at normal speed and loops infinitely.

The design is intentionally lightweight — pure SVG and CSS transforms, no JavaScript timers, no layout thrash, and GPU-friendly. That makes it ideal for loading pages, buttons, full-screen overlays, and anywhere else a small piece of motion needs to feel unmistakably GenLayer.

---

## Features

- **Original GenLayer identity** — chevron core + three validator nodes arranged 120° apart on a consensus ring.
- **Smooth infinite loop** — one 1.6 s consensus cycle with offset vote animations and a finality pulse.
- **Light & dark ready** — brand tokens automatically adjust via `prefers-color-scheme` and `.dark` theming.
- **Scales cleanly** — readable at 16 px, crisp at 112 px, and usable at any arbitrary size.
- **Accessible** — semantic `role="status"`, customizable label, and `aria-hidden` support for decorative cases.
- **Reduced motion friendly** — slower sweep and static nodes when `prefers-reduced-motion: reduce` is active.
- **Zero runtime dependencies** — the SVG file works anywhere; the React component only uses Tailwind CSS utilities already in the project.

---

## Tech stack

- [TanStack Start](https://tanstack.com/start/) — full-stack React framework with file-based routing and server functions.
- [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS v4](https://tailwindcss.com/) — utility-first styling with CSS variables.
- [Vite](https://vitejs.dev/) — dev server and production build.

---

## Getting started

### Prerequisites

- Node.js (LTS recommended)
- `npm`, `yarn`, `pnpm`, or `bun`

### Install

```bash
git clone <this-repository-url>
cd genlayer-spinner
npm install
```

### Run locally

```bash
npm run dev
```

The app will start at `http://localhost:8080` and show the spinner showcase page.

### Build for production

```bash
npm run build
```

Preview the production build with:

```bash
npm run preview
```

---

## Using the spinner

### React component

```tsx
import { GenLayerSpinner } from "@/components/GenLayerSpinner";

// Default: 40px, labelled "Loading"
<GenLayerSpinner />

// Tiny spinner inside a button
<GenLayerSpinner size="xs" label={null} />

// Full-page loading state, slower round
<GenLayerSpinner size={96} speed={0.8} label="Loading page" />
```

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `size` | `"xs" \| "sm" \| "md" \| "lg" \| "xl" \| number` | `"md"` | Rendered pixel size. Named sizes map to 16, 24, 40, 64, and 112 px. |
| `label` | `string \| null` | `"Loading"` | Accessible label. Set to `null` for purely decorative spinners. |
| `speed` | `number` | `1` | Speed multiplier. `1` = 1.6 s cycle. `0.5` = 3.2 s cycle. |
| `className` | `string` | — | Extra Tailwind or custom classes. |

### Standalone SVG

Drop the file anywhere HTML or SVG is accepted:

```html
<img src="/genlayer-spinner.svg" alt="Loading" width="64" height="64" />
```

Or embed it directly:

```html
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="64" height="64" fill="none" role="img" aria-label="Loading">
  <!-- …contents of public/genlayer-spinner.svg… -->
</svg>
```

The standalone SVG includes its own CSS, so it works in static sites, emails, design tools, and documentation without any build step.

---

## Customization

The spinner’s colors are driven by CSS custom properties in `src/styles.css`:

```css
:root {
  --gl-brand: oklch(0.74 0.19 152);
  --gl-brand-deep: oklch(0.58 0.15 176);
  --gl-ink: oklch(0.19 0.03 175);
}

.dark {
  --gl-brand: oklch(0.85 0.2 152);
  --gl-brand-deep: oklch(0.72 0.16 178);
}
```

To change the brand hue, update those values in both `:root` and `.dark`. The animation keyframes (`gl-sweep`, `gl-vote`, `gl-finality`) and timing variables (`--gl-dur`) can also be edited in `src/styles.css` or directly in `public/genlayer-spinner.svg`.

---

## Project structure

```
├── public/
│   └── genlayer-spinner.svg          # Standalone animated SVG asset
├── src/
│   ├── components/
│   │   └── GenLayerSpinner.tsx       # React component
│   ├── routes/
│   │   ├── index.tsx                 # Showcase page
│   │   ├── __root.tsx                # Root layout
│   │   └── README.md                 # TanStack route conventions
│   ├── router.tsx                    # TanStack Router setup
│   ├── styles.css                    # Tailwind theme + spinner tokens
│   └── lib/
│       └── utils.ts                  # cn() helper
├── DESCRIPTION.md                    # One-line project description
├── README.md                         # This file
├── package.json
├── vite.config.ts
└── tsconfig.json
```

---

## Available scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start the Vite dev server |
| `npm run build` | Build for production |
| `npm run build:dev` | Build in development mode |
| `npm run preview` | Preview the production build |
| `npm run lint` | Run ESLint |
| `npm run format` | Format code with Prettier |

---

## Accessibility notes

- The React component renders `role="status"` and `aria-label` when a label is provided, so screen readers announce the loading state.
- Set `label={null}` for decorative spinners inside buttons or rows that already have meaningful text. The component then sets `aria-hidden="true"`.
- The standalone SVG uses `role="img"` and `aria-label="Loading"` by default; adjust those attributes for your context.
- When `prefers-reduced-motion: reduce` is active, the node pop and core pulse stop, and the sweep slows to a single calm rotation.

---

## License

This project is built and maintained by the GenLayer team. All code is provided as-is for use within the GenLayer Portal and related projects.

---

## Built with

- TanStack Start
- React 19
- TypeScript
- Tailwind CSS v4
- Vite
