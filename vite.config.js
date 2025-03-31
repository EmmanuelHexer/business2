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
          { url: "/images/catering.jpg" },
          { url: "/images/event.webp" },
          { url: "/images/personal.jpg" },
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
