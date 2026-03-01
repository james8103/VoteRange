import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
	plugins: [react()],
	base: "/VoteRange/", // must match your repo name for GitHub Pages
	build: {
		outDir: "dist",
	},
});
