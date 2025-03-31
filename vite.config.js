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
  {
    name: "Assorted Fried Rice with Chicken",
    path: "/product/Assorted%20Fried%20Rice%20with%20Chicken",
  },
  { name: "Banku with Tilapia", path: "/product/Banku%20with%20Tilapia" },
  { name: "Chicken Fried Rice", path: "/product/Chicken%20Fried%20Rice" },
  { name: "French Fries", path: "/product/French%20Fries" },
  {
    name: "French Fries with Wings",
    path: "/product/French%20Fries%20with%20Wings",
  },
  {
    name: "Fried Plantain with Beans",
    path: "/product/Fried%20Plantain%20with%20Beans",
  },
  { name: "Steamed Rice", path: "/product/Steamed%20Rice" },
  { name: "Vegetable Fried Rice", path: "/product/Vegetable%20Fried%20Rice" },
  { name: "Waakye", path: "/product/Waakye" },
  { name: "Yam Chips", path: "/product/Yam%20Chips" },
  { name: "Brownies", path: "/product/Brownies" },
  { name: "Cup Cake", path: "/product/Cup%20Cake" },
  { name: "Filled Doughnuts", path: "/product/Filled%20Doughnuts" },
  { name: "Glazed Doughnuts", path: "/product/Glazed%20Doughnuts" },
  { name: "Layer Cake", path: "/product/Layer%20Cake" },
  { name: "Meat Pie", path: "/product/Meat%20Pie" },
  { name: "Quiche", path: "/product/Quiche" },
  { name: "Scone", path: "/product/Scone" },
  { name: "Sponge Cake", path: "/product/Sponge%20Cake" },
  { name: "Tarts", path: "/product/Tarts" },
  { name: "Vegan Spring Rolls", path: "/product/Vegan%20Spring%20Rolls" },
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
