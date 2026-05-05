# Whenevr Clone – Pixel-Perfect Framer Design (Next.js + React + Tailwind)

## 🚀 Overview
This project is a **pixel-perfect recreation** of the Whenevr landing page built using:
- **Next.js (App Router)**
- **React**
- **Tailwind CSS**
- **TypeScript**

The goal was to match the original Framer design as closely as possible, including:
- Layout
- Typography
- Spacing
- Animations
- Hover states
- Responsiveness

---

## 🧩 Features

- 🔥 Pixel-perfect UI replication from Framer
- ⚡ Smooth animations (Framer-style easing)
- 🎯 Scroll-based interactions
- 📱 Fully responsive (mobile → desktop)
- 🎞 Auto-scrolling marquee sections
- 🎛 Interactive components (pricing toggle, buttons)
- 🧠 Clean, reusable component architecture

---

## 🛠 Tech Stack

- **Next.js 16 (App Router + Turbopack)**
- **React**
- **Tailwind CSS**
- **TypeScript**
- **next/image (optimized images)**

---

## 📁 Project Structure

```
/app
  /page.tsx

/components
  /header
  /hero
  /pricing
  /testimonials
  /horizontalScroll
  ...

/lib
  data.ts

/public
  /whenevr-assets
```

---

## ⚙️ Setup Instructions

### 1. Clone the repository
```bash
git clone https://github.com/Darkboy17/whenevr-clone
cd whenevr-clone
```

### 2. Install dependencies
```bash
npm install
```

### 3. Run development server
```bash
npm run dev
```

Visit:
```
http://localhost:3000
```

---

## ⚠️ Important Notes

### Images (Framer CDN)
If using external images (e.g. framerusercontent.com), ensure:

```js
// next.config.js
images: {
  remotePatterns: [
    {
      protocol: "https",
      hostname: "framerusercontent.com",
    },
  ],
}
```

---

## 🎨 Design Fidelity Notes

- Typography matches **Inter Variable**
- Custom easing: `cubic-bezier(0.22, 1, 0.36, 1)`
- Exact spacing & border radii replicated
- Masking & blur effects matched from Framer
- Hover animations implemented with dual-layer text transitions

---

## 🧠 Learnings

- Handling Framer → Tailwind conversion
- Precision UI recreation
- Advanced CSS masking & layering
- Scroll-based animation logic
- Performance optimization with `will-change`

---

## 📌 Live Demo


https://whenevr-clone-alpha.vercel.app/

---

## 🙌 Acknowledgements

Design inspiration from:
- Whenevr (Framer website)

---

## 🧑‍💻 Author

**Kordor Pyrbot**
