import path from "path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import imagemin from "vite-plugin-imagemin";

export default defineConfig({
  plugins: [
    react(),
    imagemin({
      gifsicle: { optimizationLevel: 7, interlaced: false },
      optipng: { optimizationLevel: 7 },
      mozjpeg: { quality: 80 },
      pngquant: { quality: [0.8, 0.9], speed: 4 },
      svgo: {
        plugins: [
          { name: "removeViewBox", active: false },
          { name: "removeDimensions", active: true },
        ],
      },
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  assetsInclude: ["**/*.JPG"],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          "boarding-life": [
            "./src/pages/boardingLife/Overview.jsx",
            "./src/pages/boardingLife/PastoralCare.jsx",
            "./src/pages/boardingLife/MedicalFacilities.jsx",
            "./src/pages/boardingLife/Hostel.jsx",
            "./src/pages/boardingLife/Dining.jsx",
            "./src/pages/boardingLife/Library.jsx",
          ],
          "beyond-classroom": [
            "./src/pages/beyondClassroom/Sports.jsx",
            "./src/pages/beyondClassroom/AdventureExcursion.jsx",
            "./src/pages/beyondClassroom/ClubsAndSocieties.jsx",
          ],
        },
      },
    },
    chunkSizeWarningLimit: 1000,
  },
  // Add jsconfig.json or tsconfig.json in your project root with:
  // {
  //   "compilerOptions": {
  //     "baseUrl": ".",
  //     "paths": {
  //       "@/*": ["src/*"]
  //     }
  //   }
  // }
});
