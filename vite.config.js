import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/JonathanWebsite/',  
  plugins: [react()],
  build: {
    outDir: 'dist', 
  },
});
