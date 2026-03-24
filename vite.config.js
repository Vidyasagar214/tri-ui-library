import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig(({ mode }) => ({
  plugins: [
    react({
      jsxRuntime: "automatic",
    }),
  ],
  define: {
    "process.env.NODE_ENV": JSON.stringify(mode === "production" ? "production" : "development"),
  },
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/index.js"),
      name: "TriUILibrary",
      fileName: (format) => `tri-ui-library.${format === "es" ? "js" : "umd.cjs"}`,
      formats: ["es", "umd"],
    },
    rollupOptions: {
      external: ["react", "react-dom", "react/jsx-runtime", "react/jsx-dev-runtime"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
          "react/jsx-runtime": "reactJsxRuntime",
        },
        assetFileNames: (assetInfo) => {
          return assetInfo.name === "style.css" ? "styles.css" : assetInfo.name;
        },
      },
    },
    cssCodeSplit: false,
    sourcemap: true,
  },
}));
