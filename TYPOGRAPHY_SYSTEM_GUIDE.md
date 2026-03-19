# ARK Typography System Guide

## Font Family Overview

ARK uses a three-font system for optimal readability and NASA-inspired aesthetics:

### Headline Font: **PP Monument Extended**
- **CSS Name:** `"PP Monument Extended", sans-serif`
- **Purpose:** All headlines (h1, h2, h3), always uppercase
- **Weights Used:**
  - 700 (Bold)
  - 900 (Black)
- **Loaded from:** `https://www.actionsatisfaction.com/Monument/`

### Body Font: **PP Monument**
- **CSS Name:** `"PP Monument", sans-serif`
- **Purpose:** Body copy, descriptions, general UI text
- **Loaded from:** `https://www.actionsatisfaction.com/Monument/`

### Monospace Font: **IBM Plex Mono**
- **CSS Name:** `"IBM Plex Mono", monospace`
- **Purpose:** Navigation, labels, badges, tags, buttons, data, stats
- **Weights Used:**
  - 400 (Regular)
  - 500 (Medium)
  - 600 (Semi-Bold)
  - 700 (Bold)

---

## Typography Specifications

### Headlines (h1, h2, h3)
```css
font-family: "PP Monument Extended", sans-serif;
font-weight: 700; /* or 900 for extra emphasis */
text-transform: uppercase;
```

### Body Text
```css
font-family: "PP Monument", sans-serif;
```

### Navigation & Labels
```css
font-family: "IBM Plex Mono", monospace;
font-weight: 500;
```

### Badges & Tags
```css
font-family: "IBM Plex Mono", monospace;
font-weight: 500;
font-size: 10-12px;
```

### Buttons
```css
font-family: "IBM Plex Mono", monospace;
```

---

## CSS Syntax

**Inline styles (JSX):**
```jsx
// Headlines
style={{ fontFamily: "'PP Monument Extended', sans-serif" }}

// Body text
style={{ fontFamily: "'PP Monument', sans-serif" }}

// Monospace / UI elements
style={{ fontFamily: "'IBM Plex Mono', monospace" }}
```

---

## Font Loading

Fonts are loaded from the self-hosted server at `https://www.actionsatisfaction.com/Monument/` and configured in `/src/styles/fonts.css`.

IBM Plex Mono is loaded via Google Fonts.

---

## Key Rules

1. All headlines (h1, h2, h3) must use **PP Monument Extended** with **uppercase** styling.
2. Body copy uses **PP Monument**.
3. UI elements (nav, buttons, labels, badges, stats) use **IBM Plex Mono**.
4. All buttons and cards use `rounded-[2px]` for the sharp NASA-tech aesthetic.
