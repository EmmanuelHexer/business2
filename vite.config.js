import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import sitemap from "vite-plugin-sitemap";
import fs from "fs";
import path from "path";

const hostname = "https://www.millyscuisine.com/";
const publicImageFolder = path.resolve("public/images");

// Function to get all images from a folder
const getImages = (folderPath, prefix) => {
  if (!fs.existsSync(folderPath)) return [];
  return fs
    .readdirSync(folderPath)
    .filter((file) => /\.(png|jpe?g|webp|gif|svg)$/i.test(file))
    .map((file) => ({
      loc: `${hostname}${prefix}/${file}`, // Full URL of image
      title: file.replace(/\.[^/.]+$/, ""), // Title (filename without extension)
    }));
};

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
          images: getImages(publicImageFolder, "/images"), // Add images to the homepage entry
        },
      ],
    }),
  ],
});
