import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import ProductsPage from "./Pages/ProductsPage";
import { SpeedInsights } from "@vercel/speed-insights/react";
import ScrollDefault from "./Components/ScrollDefault";

const App = () => {
  const NotFound = () => <h1>404 - Page Not Found</h1>;
  return (
    <div>
      <ScrollDefault />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:name" element={<ProductsPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <SpeedInsights />
    </div>
  );
};

export default App;
