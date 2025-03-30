import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollDefault = () => {
  const location = useLocation();

  useEffect(() => {
    window.history.scrollRestoration = "manual";

    if (location.state?.fromProduct) {
      window.scrollTo({ top: 800, left: 0, behavior: "instant" });
    } else {
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    }
  }, [location.state]);

  return null;
};

export default ScrollDefault;
