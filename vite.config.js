import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// IMPORTANT: replace 'your-repo-name' with your actual GitHub repo name.
// If your repo is https://github.com/yourusername/mom-birthday-site,
// base should be '/mom-birthday-site/'
export default defineConfig({
  plugins: [react()],
  base: "/your-repo-name/",
});
