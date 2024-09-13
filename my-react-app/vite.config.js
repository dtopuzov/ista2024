import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    environment: "jsdom",
    globals: true,
    include: ["_tests_/**/*.{test,spec}.?(c|m)[jt]s?(x)"],
    setupFiles: "./_tests_/setup.js", // assuming the test folder is in the root of our project
  },
});
