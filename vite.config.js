import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
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
    minify: "terser",
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
  },
  server: {
    hmr: {
      overlay: true,
    },
    watch: {
      usePolling: true,
    },
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
