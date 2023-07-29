import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
const { VITE_PATH } = import.meta.env;

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: VITE_PATH,
});
