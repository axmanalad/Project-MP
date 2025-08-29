import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'
import fs from 'fs'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(),
    {
      name: 'serve-powershell-script',
      configureServer(server) {
        server.middlewares.use((req, res, next) => {
          if (req.url === '/wish') {
            // Read the PowerShell script
            const scriptPath = path.resolve(__dirname, 'public/wish')
            const content = fs.readFileSync(scriptPath, 'utf-8')
            
            // Check if this is a PowerShell request or browser
            const userAgent = req.headers['user-agent'] || '';
            // Parse query string from URL
            const urlObj = new URL(req.url, `http://${req.headers.host}`);
            const isPowerShell = userAgent.includes('PowerShell') || 
                                 req.headers['accept'] === '*/*' ||
                                 urlObj.searchParams.get('raw') === 'true';
            
            if (isPowerShell) {
              // Serve raw script for PowerShell
              res.setHeader('Content-Type', 'text/plain');
              res.end(content);
              return;
            } else {
              // Show blank page for browser visits
              res.setHeader('Content-Type', 'text/html');
              res.end('<html><body></body></html>');
              return;
            }
          }
          next();
        });
      }
    }
  ],
  server: {
    host: 'localhost',
    port: 5173,
    open: true
  },
  define: {
    global: 'globalThis'
  },
})
