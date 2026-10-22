import { HashRouter } from "react-router";
import ErrorBoundary from "@/components/ErrorBoundary";
import ScrollToTop from "@/components/ScrollToTop";
import { CartProvider } from "@/context/CartContext";
import AppRoutes from "@/router";

/**
 * HashRouter keeps the route in the URL fragment (`/#/home`), so the browser
 * only ever asks the server for `/`. The server never has to know the app has
 * routes, so the same build works on any static host - Vercel, Netlify,
 * GitHub Pages, S3 - with no rewrite rules and no host-specific config.
 */
export default function App() {
  return (
    <ErrorBoundary>
      <CartProvider>
        <HashRouter>
          <ScrollToTop />
          <AppRoutes />
        </HashRouter>
      </CartProvider>
    </ErrorBoundary>
  );
}
