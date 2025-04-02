import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollDefault = () => {
  const location = useLocation();

  useEffect(() => {
    window.history.scrollRestoration = "manual";

    if (location.state?.fromProduct) {
      const productSection = document.getElementById(
        location.state.fromProduct,
      );
      if (productSection) {
        productSection.scrollIntoView({ behavior: "smooth" });
        location.state.fromProduct = null;
      }
    } else {
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    }
  }, [location]);

  return null;
};

export default ScrollDefault;
