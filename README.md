# Nexist Store

A minimal e-commerce cart built as part of the Nexist Fullstack Support Engineer technical assessment.

---

## Tech Stack

- [Next.js](https://nextjs.org/) — React framework
- [TypeScript](https://www.typescriptlang.org/) — type safety
- [Redux Toolkit](https://redux-toolkit.js.org/) — state management
- [Framer Motion](https://www.framer.com/motion/) — animations
- [React Toastify](https://fkhadra.github.io/react-toastify/) — notifications
- [Tailwind CSS](https://tailwindcss.com/) — styling

---

## Getting Started

### Prerequisites

- Node.js 18+
- npm

### Installation

```bash
git clone https://github.com/alvy00/nexist-jbtask.git
cd nexist-jbtask
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Features

- Browse a grid of 8 products
- Add and remove items from the cart
- Cart total calculated in real time
- Cart persists across page refreshes via `localStorage`
- Duplicate items prevented at both the UI and reducer level
- Toggle `localStorage` persistence on/off for demonstration
- Animated product cards and cart interactions
- Toast notifications for all user actions
- Empty cart state with clear messaging
- Loading screen on initial render

---

## Assessment Brief

> "When I refresh the page, my selected items disappear. Also, I don't understand how to use the feature properly."

### Problem 1 — State not persisting on refresh

Redux resets to `initialState` on every page load by default. The fix was to manually persist the cart to `localStorage` using two hooks into the Redux store:

```ts
// load saved state before store initialises
preloadedState: loadState();

// save to localStorage on every state change
store.subscribe(() => {
    localStorage.setItem("cart", JSON.stringify(store.getState().cart));
});
```

### Problem 2 — Duplicate items in cart

Prevented at two levels:

- **Reducer** — `state.find()` checks for an existing item before pushing
- **UI** — the "Add to cart" button is disabled and relabelled "✓ Added" once an item is in the cart

---

## Issues Identified and Fixed

| #   | Issue                                                                                                       | Fix                                                        |
| --- | ----------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------- |
| 1   | `redux-persist` caused `state.cart` to not be an array during hydration, breaking `.find()` and `.reduce()` | Reverted to manual `localStorage` implementation           |
| 2   | `redux-persist` triggered non-serializable value warnings in Redux Toolkit middleware                       | Resolved by reverting; documented as known incompatibility |

---
