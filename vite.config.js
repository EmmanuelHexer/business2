import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import sitemap from "vite-plugin-sitemap";

const products = [
  { name: "Buffalo Wings", path: "/product/Buffalo%20Wings" },
  { name: "Club Sandwich", path: "/product/Club%20Sandwich" },
  { name: "Cornbread", path: "/product/Cornbread" },
  { name: "Fried Chicken", path: "/product/Fried%20Chicken" },
  { name: "Tater Tots", path: "/product/Tater%20Tots" },
  { name: "Jollof Rice", path: "/product/Jollof%20Rice" },
  {
    name: "Ampesi with Garden Egg Stew",
    path: "/product/Ampesi%20With%20Garden%20Egg%20Stew",
  },
  { name: "Banku With Okro Stew", path: "/product/Banku%20With%20Okro%20Stew" },
  {
    name: "Ampesi with Palava Sauce",
    path: "/product/Ampesi%20With%20Palava%20Sauce",
  },
];

const dynamicRoutes = products.map((product) => product.path);

export default defineConfig({
  plugins: [
    react(),
    sitemap({
      hostname: "https://www.millyscuisine.com/",
      dynamicRoutes,
    }),
  ],
});
