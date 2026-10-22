import { Route, Routes } from "react-router";
import Delivery from "@/pages/Delivery";
import Detail from "@/pages/Detail";
import Home from "@/pages/Home";
import NotFound from "@/pages/NotFound";
import Onboarding from "@/pages/Onboarding";
import Order from "@/pages/Order";

/**
 * Every route the app owns, declared in one place.
 *
 * Paths live in the hash, so the server only ever receives "/" and never has
 * to serve a second HTML document.
 */
export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Onboarding />} />
      <Route path="/home" element={<Home />} />
      <Route path="/coffee/:id" element={<Detail />} />
      <Route path="/order" element={<Order />} />
      <Route path="/delivery" element={<Delivery />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
