import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, '.', '');
    
    // Detectamos el puerto que Railway asigna automáticamente
    const port = Number(process.env.PORT) || 3000;

    return {
      server: {
        port: port,
        host: '0.0.0.0',
        // ESTA ES LA SOLUCIÓN:
        // 'true' permite que cualquier dirección de Railway pueda mostrar la página
        allowedHosts: true 
      },
      preview: {
        port: port,
        host: '0.0.0.0',
        allowedHosts: true
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
