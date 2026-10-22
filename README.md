# Coffee App

React + Vite + TypeScript + Tailwind CSS v4 + lucide-react + react-router.

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # -> dist/
npm run preview  # serve the production build
```

## Routing

The app uses `HashRouter`, so the route lives in the URL fragment
(`/#/home`, `/#/coffee/latte`) and the browser only ever asks the server for
`/`. The server never has to know the app has routes, so the same build works
on any static host - Vercel, Netlify, GitHub Pages, S3, nginx - with no
rewrite rules and no host-specific config.

Routes are declared in one place, `src/router.tsx`.

To switch to clean paths later (`/home` instead of `/#/home`), change
`HashRouter` to `BrowserRouter` in `src/App.tsx` and add a catch-all rewrite
to `index.html` on the host.

## Structure

```
src/
  main.tsx  App.tsx  router.tsx  index.css   # entry, providers, routes, theme tokens
  types.ts                               # Coffee, CartItem, Size
  data/coffees.ts                        # product data  <- add image paths here
  context/CartContext.tsx                # cart state (useReducer)
  lib/format.ts
  components/                            # Button, Img, Screen, TopBar, BottomBar,
                                         # Nav, CoffeeCard, ScrollToTop, ErrorBoundary
  pages/                                 # Onboarding, Home, Detail, Order, Delivery, NotFound
```

## Images

Product and marketing photos live in `public/images/`. Each coffee points at
one via the `image` field in `src/data/coffees.ts`; the onboarding hero, the
promo banner and the courier photo are passed to `<Img />` in their page.

```
public/images/
  caffe-mocha.jpg  flat-white.jpg  latte.jpg
  americano.jpg    machiato.jpg    cappuccino.jpg
  onboarding.jpg   promo.jpg       courier.jpg
```

`<Img />` falls back to a gradient placeholder when no `src` is given, so any
image can be swapped without touching the markup.

### Photo credits

Photos from [Pexels](https://www.pexels.com) under the Pexels licence:

| File               | Source                                     |
| ------------------ | ------------------------------------------ |
| `caffe-mocha.jpg`  | [pexels.com/photo/11043663](https://www.pexels.com/photo/11043663) |
| `flat-white.jpg`   | [pexels.com/photo/27860686](https://www.pexels.com/photo/27860686) |
| `latte.jpg`        | [pexels.com/photo/4913342](https://www.pexels.com/photo/4913342) |
| `americano.jpg`    | [pexels.com/photo/24513973](https://www.pexels.com/photo/24513973) |
| `machiato.jpg`     | [pexels.com/photo/20104040](https://www.pexels.com/photo/20104040) |
| `cappuccino.jpg`   | [pexels.com/photo/27666788](https://www.pexels.com/photo/27666788) |
| `onboarding.jpg`   | [pexels.com/photo/13523793](https://www.pexels.com/photo/13523793) |
| `promo.jpg`        | [pexels.com/photo/16781258](https://www.pexels.com/photo/16781258) |
| `courier.jpg`      | [pexels.com/photo/4440776](https://www.pexels.com/photo/4440776) |

## Theme

Colors and font live in `@theme` inside `src/index.css`.

## Deploying

Build to `dist/` and publish that folder.

| Setting          | Value          |
| ---------------- | -------------- |
| Build command    | `npm run build` |
| Output directory | `dist`         |
| Framework preset | `Vite`         |

`base: "/"` in `vite.config.ts` keeps asset URLs at the site root.
`engines.node` in `package.json` pins the build to Node 22.

## Toolchain

Pinned to stable releases on purpose:

| Package         | Version |
| --------------- | ------- |
| vite            | 7.3.7   |
| @vitejs/plugin-react | 5.2.0 |
| react / react-dom | 19.3.1 |
| react-router    | 7.18.4  |
| tailwindcss     | 4.3.3   |
| typescript      | 5.9.3   |

Vite 8 ships the rolldown bundler, which still has open production-build
bugs that show up as a blank page with no console error (for example
rolldown#10228, rolldown#10695 and module-federation/vite#495). Vite 7 is
Rollup-based and is the version rated safe for production.
