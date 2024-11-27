import { defineConfig } from 'vite';

export default defineConfig({
  root: './', // Adjust if your files are in a subdirectory
  build: {
    outDir: 'dist', // Default output directory
    rollupOptions: {
      input: './index.html', // Ensure the path is correct
    },
  },
});
