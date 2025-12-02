# Frontend Developer Test — Product Carousel + Shopping Cart

This project is an implementation of the Frontend Developer Test assignment.  
It includes a responsive product carousel, a fully interactive shopping cart,  
and a clean user-focused UI powered by React and Tailwind CSS.

---

## Tech Stack

- **React 18**
- **TypeScript**
- **Vite**
- **Tailwind CSS**
- **Context API (React State Management)**

---

## Part 1 — Responsive Product Carousel

The application includes a fully responsive carousel that displays static products.

### Features:

- **Desktop (≥ 1024px):** 3 products per row
- **Tablet (≥ 768px):** 2 products per row
- **Mobile (< 768px):** 1 product per row
- Smooth resizing transitions
- Snap-based horizontal scrolling
- Pagination dots based on the number of pages
- Product cards contain:
  - Image
  - Title
  - Description
  - Price

Each product card can be clicked to open a **product details modal**.

---

## Part 2 — Shopping Cart

### Features:

- Add products to cart
- Increase/decrease quantity
- Remove items
- Automatic subtotal calculation
- **10% discount** on items with quantity > 5
- Total price calculation
- Cart stored in React Context
- **Cart persists in localStorage across page reloads**
- Animated badge on cart button showing current quantity
- Cart drawer (side panel)

---

## Usability & UI/UX Focus

- Clean modern interface using Tailwind CSS
- Smooth animations
- Mobile-friendly layout
- Modal for detailed product view
- "Add to cart" immediately updates cart badge
- Prevents accidental modal triggers (button click stops propagation)

---

## Discount Logic

If a product quantity exceeds **5**, a **10% discount** is automatically applied:
This discount is included in the final total price.

---

## Installation

npm install
npm run dev

##deploy

https://lam4ek.github.io/Gameloft-test/