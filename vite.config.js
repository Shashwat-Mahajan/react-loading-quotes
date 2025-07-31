import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/QuoteLoader.jsx"),
      name: "QuoteLoader",
      fileName: (format) => `quote-loader.${format}.js`,
    },
    rollupOptions: {
      external: [
        "react",
        "react-dom",
        "framer-motion",
        "react-spinners",
        "react-router-dom",
      ],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
          "framer-motion": "framerMotion",
          "react-spinners": "ClipLoader",
          "react-router-dom": "ReactRouterDOM",
        },
      },
    },
  },
});
