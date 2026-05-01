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

## Problems solved

1. Cart reset on refresh → fixed with localStorage persistence
2. Duplicate items → prevented in reducer with state.find check

---

## Issues identified and fixed

1. redux-persist caused state.cart to not be an array during hydration → reverted to manual localStorage
2. Non-serializable value warning with redux-persist → resolved by reverting
