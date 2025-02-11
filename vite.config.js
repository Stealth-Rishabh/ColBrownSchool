import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  assetsInclude: ['**/*.JPG'],
  // Add jsconfig.json or tsconfig.json in your project root with:
  // {
  //   "compilerOptions": {
  //     "baseUrl": ".",
  //     "paths": {
  //       "@/*": ["src/*"]
  //     }
  //   }
  // }
})
