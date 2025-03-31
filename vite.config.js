import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import sitemap from "vite-plugin-sitemap";

export default defineConfig({
  plugins: [
    react(),
    sitemap({
      hostname: "https://www.millyscuisine.com/",
      generateRobotsTxt: true,
      robotsTxtOptions: {
        policies: [{ userAgent: "*", allow: "/" }],
      },
      transform: async (config, path) => {
        const images = [
          { url: "https://millyscuisine.com/assets/logo-8fDf6JXZ.png" },
          { url: "https://millyscuisine.com/assets/plate-Bfr48SNN.png" },
          { url: "https://millyscuisine.com/images/catering.jpg" },
          { url: "https://millyscuisine.com/images/event.webp" },
          { url: "https://millyscuisine.com/images/personal.jpg" },
        ];
        return {
          loc: path,
          changefreq: "daily",
          priority: 1.0,
          lastmod: new Date().toISOString(),
          images,
        };
      },
    }),
  ],
});
