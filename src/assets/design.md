# Design Analysis: masontywong.com

> Personal portfolio of Mason Wong — Full Stack & Creative Engineer  
> Specializing in immersive digital experiences, motion design, and WebGL

---

## Concept & Aesthetic Direction

The site's central conceit is a **fully 3D-rendered room** — a warm, cozy interior space that serves as the persistent canvas for every page of the portfolio. Rather than conventional web layouts, the user navigates *through* a virtual room: a laptop sits on a pedestal displaying project work, a large circular portal on the wall reveals Mason himself in video. The overall aesthetic is **warm maximalism with architectural restraint** — richly textured and spatially composed, yet never cluttered.

The tone is: **playful luxury**. Think a high-end gallery crossed with a boutique hotel lobby, rendered in soft terracotta and cream.

---

## Color Palette

| Role | Color |
|---|---|
| Background / dominant | Warm sand / peach `~#E8C9B0` |
| Room walls & surfaces | Creamy off-white `~#F2E0D0` |
| 3D objects (laptop, furniture) | Terracotta / burnt sienna `~#C97A52` |
| Accent paneling | Deep warm orange `~#B85C2A` |
| Floating light orbs | Soft warm white glow |
| UI glass cards | Translucent warm beige with blur |
| Text (primary) | Deep warm brown `~#2D1A0E` |
| Text (secondary / labels) | Muted mid-brown |
| Bottom border stripe | Dark burnt red/brown — a grounding accent line |

The palette is extremely cohesive: everything lives within a narrow warm orange-to-cream range. The only deliberate color contrast comes from the project content *inside* the laptop screen (vivid magentas and yellows), which pops as intentional contrast against the muted room.

---

## 3D Scene & WebGL Environment

The hero experience is a **fully 3D rendered interior room** built with WebGL (likely Three.js or a similar renderer). Key scene elements:

- **Vertical slat wall panels** — warm cream-colored ribbed wall texture running the full height, giving architectural depth and shadow play
- **Cylindrical pedestals** — minimalist white columns holding the laptop; repeated as architectural furniture throughout the space
- **Laptop prop** — a stylized, slightly toy-like 3D laptop model in terracotta orange, displaying live project UI on its screen
- **Circular portal / alcove** — a large, perfectly circular recessed arch on the right wall, framed with a glowing warm halo light ring. This is the focal architectural element of the room. It transitions between:
  - Showing a wooden slat backdrop with three hanging pendant lights (idle/projects state)
  - Revealing Mason in a looping video with a halftone/RGB-split shader applied (About state)
- **Floating light bokeh** — small glowing orbs scattered throughout the 3D space, giving a dreamy, ambient atmosphere
- **Camera animation** — the scene features a cinematic camera path: the view pans and dolly-moves through the room as users interact or as the animation loop plays, creating a sense of physical presence

---

## Navigation & UI Shell

### Navigation Bar
- Top-left pill/lozenge shape with **"MW"** monogram logo in dark brown — simple, bold
- Immediately to the right: **"Projects"** and **"About"** as pill-shaped buttons inside the same nav container
- Active state: the active nav item gets a filled white/light pill background; inactive items are transparent text
- The entire nav floats over the 3D scene on a semi-transparent frosted lozenge — no full-width bar, just a contained floating element
- No other header elements — extremely minimal chrome

### Playback Control
- A small circular **pause/play button** (and mute toggle on the About page) floats at the bottom-left or bottom-center of the viewport
- Styled as a subtle gray circle with icon — minimal, unobtrusive
- Indicates the 3D scene is a looping animation that can be paused

### Progress Dots
- A row of small dots appears at the bottom-right (visible on the Projects view)
- Indicates a paginated carousel of projects — users can step through multiple project entries

---

## Content Cards (UI Overlay Panels)

Content is delivered through **frosted-glass overlay cards** that float over the 3D scene, anchored to a side of the viewport. They never cover the full screen — the 3D environment is always partially visible.

### Projects Card (right side)
- Rounded rectangle with large corner radius (~16–20px)
- Background: semi-transparent warm beige with backdrop blur (warm-tinted glassmorphism)
- **"Selected Projects"** label in small muted uppercase at top
- Project name in a large **bold serif display font** — dark warm brown, very large (~60–80px)
- Category tag in small uppercase tracking — e.g. `ECOMMERCE`, `WEBGL • EXPERIMENTAL`
- Two projects shown simultaneously with visual hierarchy: active project is bold/bright, secondary project is dimmed
- Pagination dots below

### About Card (left side)
- Same frosted-glass card style, positioned left
- Sections: `About` label, then LinkedIn circle icon + `RESUME` pill button inline on the same row
- `Hello!` in bold serif (~36px), dark brown
- Body text in small, readable sans-serif (~13–14px), dark brown, moderate line height
- **"Reach me at"** bold label followed by a plain email link
- Card fades/slides in as the camera transitions to the About view

---

## Typography

### Display / Headings
- A **bold serif** typeface — warm, slightly editorial character (similar to Playfair Display or a transitional serif)
- Used for project names, "Hello!", section headings
- Weight: heavy/bold; color: deep warm brown

### Body / UI Text
- A **clean humanist sans-serif** — small, legible, neutral
- Used for bio copy, category labels, nav items
- Labels and tags set in **small uppercase with wide letter-spacing**

### Logo / Monogram
- "MW" set in bold dark brown on the nav pill — no wordmark, just initials

---

## Motion & Interaction

- **Cinematic camera path**: the 3D room camera continuously dollies and pans through the space in a looping animation — giving life to a static scene
- **Page transitions**: navigating between Projects and About moves the camera to a different position in the room rather than a conventional page load/swap
- **Halftone / RGB-split shader on video**: Mason's live video feed in the circular portal has a visible halftone dot-grid texture and chromatic aberration (RGB color channel split) applied — a deliberate lo-fi analog effect layered into the high-fidelity 3D environment
- **Glowing portal ring**: the circular alcove has a warm backlit halo that glows around the rim
- **Floating bokeh orbs**: small light orbs in the scene drift gently, adding ambient life
- **Card fade-in**: content overlay cards animate in as the camera settles on a new position

---

## Layout Principles

- **No traditional page layout** — the entire viewport is the 3D scene; HTML UI is an overlay layer
- **Content cards are anchored to viewport edges** (left for About, right for Projects) but never full-screen — the world behind is always visible
- **Asymmetric composition**: laptop left / project info right; about card left / Mason in portal right
- **Depth layering**: background 3D scene → mid-ground 3D props → foreground UI cards → nav on top

---

## Signature Design Moves

1. **The room as portfolio** — using a 3D architectural space as the navigation metaphor rather than pages or scrolling
2. **The circular portal** — the perfect circle arch is the emotional center of the site; it frames projects as a virtual window and Mason himself as a "living portrait"
3. **Halftone video shader** — making live video feel like a vintage TV or risograph print inside a high-fidelity 3D scene creates a deliberate, memorable tension between analog and digital
4. **Warm monochrome palette** — restricting everything to a single warm hue family makes the site feel cohesive and handcrafted, avoiding the cold blues typical of tech portfolios
5. **Glassmorphism in warm tones** — instead of the cliché dark/cool frosted glass, the cards are warm and sandy, fully integrated into the room's color world
