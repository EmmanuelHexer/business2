import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import sitemap from "vite-plugin-sitemap";

// Your product data
const products = [
  { name: "Buffalo Wings", path: "/product/buffalo-wings" },
  { name: "Club Sandwich", path: "/product/club-sandwich" },
  { name: "Cornbread", path: "/product/cornbread" },
  { name: "Fried Chicken", path: "/product/fried-chicken" },
  { name: "Tater Tots", path: "/product/tater-tots" },
  { name: "Jollof Rice", path: "/product/jollof-rice" },
  { name: "Ampesi with Garden Egg Stew", path: "/product/ampesi-garden-egg" },
  { name: "Banku With Okro Stew", path: "/product/banku-okro" },
  { name: "Ampesi with Palava Sauce", path: "/product/ampesi-palava" },
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
