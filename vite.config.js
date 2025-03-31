import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import sitemap from "vite-plugin-sitemap";
import fs from "fs";
import path from "path";

// Function to scan images in a directory
const getImages = (folderPath, baseUrl) => {
  const files = fs.readdirSync(folderPath);
  return files
    .filter((file) => /\.(png|jpg|jpeg|webp|gif|svg)$/i.test(file))
    .map((file) => ({
      url: `${baseUrl}/images/${file}`,
    }));
};

// Set your website's hostname
const hostname = "https://www.millyscuisine.com/";

// Get all images from the `/public/images/` folder
const imageUrls = getImages(path.resolve("public/images"), hostname);

export default defineConfig({
  plugins: [
    react(),
    sitemap({
      hostname,
      generateRobotsTxt: true,
      robotsTxtOptions: {
        policies: [{ userAgent: "*", allow: "/" }],
      },
      customPages: [
        {
          url: "/",
          images: imageUrls, // Automatically include all images
        },
      ],
    }),
  ],
});
