import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import ProductsPage from "./Pages/ProductsPage";
import { SpeedInsights } from "@vercel/speed-insights/react";
import ScrollDefault from "./Components/Scrolldefault";

const App = () => {
  return (
    <div>
      <ScrollDefault />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:name" element={<ProductsPage />} />
      </Routes>
    </div>
  );
};

export default App;
