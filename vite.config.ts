import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, '.', '');
    
    // Esto detecta el puerto que Railway te asigne, o usa 3000 por defecto
    const port = Number(process.env.PORT) || 3000;

    return {
      server: {
        port: port,
        host: '0.0.0.0', // Esto es vital para que Railway pueda acceder
      },
      preview: {
        port: port,
        host: '0.0.0.0',
      },
      plugins: [react()],
      define: {
        'process.env.API_KEY': JSON.stringify(env.GEMINI_API_KEY),
        'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY)
      },
      resolve: {
        alias: {
          '@': path.resolve(__dirname, '.'),
        }
      }
    };
});
