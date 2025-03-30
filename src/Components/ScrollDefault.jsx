import { useEffect } from "react";
import { useLocation, useNavigationType } from "react-router-dom";

export default function useScrollMemory() {
  const location = useLocation();
  const navigationType = useNavigationType();

  useEffect(() => {
    if (navigationType === "POP" && sessionStorage.getItem("fromProduct")) {
      document
        .getElementById("products")
        ?.scrollIntoView({ behavior: "smooth" });
      sessionStorage.removeItem("fromProduct");
    }

    if (location.pathname.startsWith("/product/")) {
      sessionStorage.setItem("fromProduct", "true");
    }
  }, [location.pathname, navigationType]);

  return null;
}
