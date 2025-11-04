import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
	plugins: [react(), tailwindcss()],
	build: {
		// Optimize build for faster loading
		rollupOptions: {
			output: {
				manualChunks: {
					// Separate vendor chunks for better caching
					vendor: ["react", "react-dom", "react-router-dom"],
					motion: ["motion/react"],
				},
			},
		},
		// Optimize chunk size
		chunkSizeWarningLimit: 1000,
	},
	// Optimize dependencies
	optimizeDeps: {
		include: ["react", "react-dom", "react-router-dom", "motion/react"],
	},
});
