# Quick-Ecom — Modern E-Commerce Platform

Quick-Ecom is a fast, clean, scalable e-commerce platform built with React, Vite, Tailwind CSS, Lucide Icons, and React Router. It features complete product discovery, filtering, search autocomplete, cart management, checkout workflow, local state persistence, service abstractions for backend integration, and order tracking.

---


## 🚀 Deployment to Netlify

This repository is pre-configured with `netlify.toml` and `public/_redirects` for single-page application (SPA) client-side routing.

### Option 1: Drag & Drop (Fastest)

1. Run the build command locally:
   ```bash
   npm run build
   ```
2. Log in to [Netlify App Drop](https://app.netlify.com/drop).
3. Drag and drop the generated `dist` folder into the Netlify upload box.
4. Your site will be live instantly with SSL and custom domain options!

---

### Option 2: Netlify CLI

1. Install/Run Netlify CLI from the project folder:
   ```bash
   npx netlify-cli deploy --prod
   ```
2. Select your team and publish directory as `dist`.

---

### Option 3: Connect Git Repository (Continuous Deployment)

1. Push this project to GitHub / GitLab / Bitbucket.
2. Log in to [Netlify](https://app.netlify.com/) and click **Add new site > Import an existing project**.
3. Select your repository. Netlify will auto-detect the configuration settings from `netlify.toml`:
   - **Build Command**: `npm run build`
   - **Publish directory**: `dist`
4. Click **Deploy Quick-Ecom**. Every future git push will automatically update your live site.

---

## 🛍️ Features

- **Product Discovery & Categories**: Browse popular categories (Electronics, Fashion, Mobiles, Home, Beauty, Sports, Accessories, Grocery).
- **Instant Search & Filter**: Search with live autocomplete dropdown; filter by price, brand, rating, discount, and availability.
- **Cart & Wishlist**: LocalStorage persistence, coupon code validation (`QUICK10`, `WELCOME20`, `FREESHIP`), and live item count badges.
- **Multi-Step Checkout**: 4-step wizard (Address, Delivery Method, Payment Placeholders, Review) leading to order confirmation.
- **Order Tracking Timeline**: Interactive visual timeline tracking status progression: *Order Placed → Confirmed → Packed → Shipped → Out for Delivery → Delivered*.
- **User Account Dashboard**: Address book management, profile settings, and order history details.

---

## 🛠️ Local Setup

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the local dev server:
   ```bash
   npm run dev
   ```

3. Build production bundle:
   ```bash
   npm run build
   ```
# quick-ecom
