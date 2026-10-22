import { useEffect } from "react";
import { useLocation } from "react-router";

/** Resets the scroll position whenever the route changes. */
export default function ScrollToTop() {
  const { pathname } = useLocation();

  // The effect must return a cleanup function or nothing at all. An
  // expression-bodied arrow would return whatever window.scrollTo returns
  // (the Window object in Chrome), which React then tries to call as a
  // cleanup on the next navigation and throws "is not a function".
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
