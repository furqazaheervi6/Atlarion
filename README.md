# Atlarion

**Hellenic × Berserk 1997 — Atlas animated background.**

> "There is no paradise for you to return to."

## Concept

Atlarion is a maximalist animated background fusing **ancient Greek** aesthetics with the dark, gritty atmosphere of **Berserk (1997 anime)**. The composition cycles through three distinct versions every 12 seconds, each showcasing different aspects of Greek mythology and philosophy:

1. **HELLAS** (ΕΛΛΑΣ) — "In shadows we stand"
2. **ATLAS** — "There is no paradise for you to return to"
3. **TITAN** — "Eternal burden"

## Features

### Animation System
- **Automatic cycling** between three versions (12-second intervals)
- **Manual navigation** via interactive dots
- **Smooth cross-fade** transitions for backgrounds, statues, and text
- **Progress bar** tracking cycle duration
- **Layered rendering** with statue, mist, particles, red glow, light rays

### Visual Elements
- **Greek temple ruins** as layered backgrounds (subtle breathing scale animation)
- **Classical statue imagery** that changes per version (floating animation)
- **Animated mist layers** drifting in opposite directions
- **Floating particles** with randomized trajectories
- **Red pulsing glow** (Brand of Sacrifice homage)
- **Light ray overlays** simulating divine/ancient atmosphere
- **CRT scan line** for retro anime aesthetic
- **Column overlays** with shimmer effect
- **Vignette breathing** for depth and focus

### Typography
- **Cinzel** for Hellenic titles
- **Cinzel Decorative** for HELLAS version
- **Cormorant Garamond** for subtitles
- **Animated text glow** with red pulsing effect

## Stack

- **React 19** + **TypeScript**
- **Vite 6** (build tool)
- **Tailwind CSS 4** (styling + utilities)
- **Motion** (formerly Framer Motion) for animations
- **Unsplash** for background/statue imagery

## Project Structure

```
Atlarion/
├── src/
│   ├── components/
│   │   └── figma/
│   │       └── ImageWithFallback.tsx
│   ├── App.tsx              # Main component (3 versions + cycling logic)
│   ├── main.tsx             # React entry point
│   └── index.css            # Full animation system (keyframes, particles, mist, glow)
├── index.html
├── package.json
├── vite.config.ts
├── tsconfig.json
├── postcss.config.mjs
└── .gitignore
```

## Quick Start

```bash
# Clone the repository
git clone https://github.com/furqazaheervi6/Atlarion.git
cd Atlarion

# Install dependencies
npm install
# or
pnpm install

# Run development server
npm run dev
# or
pnpm dev

# Build for production
npm run build
# or
pnpm build
```

Open `http://localhost:5173` in your browser.

## Customization

### Change Cycle Duration

In `src/App.tsx`:

```tsx
const CYCLE_DURATION = 12000 // milliseconds
```

### Add More Versions

Expand the `VERSIONS` array in `src/App.tsx`:

```tsx
const VERSIONS = [
  {
    id: 'HELLAS',
    title: 'ΕΛΛΑΣ',
    subtitle: 'IN SHADOWS WE STAND',
    statue: '...',
    bg: '...',
  },
  // Add more versions here
]
```

### Adjust Animation Intensity

Edit keyframes and durations in `src/index.css` (see sections: `mistDrift`, `particleFloat`, `glowPulse`, `statueFloat`, etc.).

## Inspiration

- **Greek mythology** — Atlas, Titans, the eternal burden
- **Berserk (1997)** — Brand of Sacrifice, dark fantasy, gritty atmosphere
- **Ancient temple ruins** — Parthenon, Delphi, Olympia
- **Hellenic typography** — Classical serif fonts, Greek letterforms

## License

MIT

---

ΕΛΛΑΣ × 1997
