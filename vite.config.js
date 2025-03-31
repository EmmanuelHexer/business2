import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import sitemap from "vite-plugin-sitemap";

const products = [
  { name: "Buffalo Wings", path: "/product/buffalo&20wings" },
  { name: "Club Sandwich", path: "/product/club&20sandwich" },
  { name: "Cornbread", path: "/product/cornbread" },
  { name: "Fried Chicken", path: "/product/fried&20chicken" },
  { name: "Tater Tots", path: "/product/tater&20tots" },
  { name: "Jollof Rice", path: "/product/jollof&20rice" },
  {
    name: "Ampesi with Garden Egg Stew",
    path: "/product/ampesi&20garden&20egg",
  },
  { name: "Banku With Okro Stew", path: "/product/banku&20okro" },
  { name: "Ampesi with Palava Sauce", path: "/product/ampesi&20palava" },
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
