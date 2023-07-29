import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
// const { VITE_PATH } = import.meta.env;

// let path;

// if (VITE_PATH) {
//   path = `/${VITE_PATH}/`;
// } else {
//   path = null;
// }

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/sales-telegram-bot-react/',
});
