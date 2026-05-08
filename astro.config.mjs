import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import { existsSync, mkdirSync, cpSync } from 'fs';
import { join } from 'path';

// Garante que public/ esteja espelhado em dist/ quando o dev server sobe,
// evitando ENOENT quando o Vite resolve assets pelo outDir.
function syncPublic(root) {
  const dist = join(root, 'dist');
  if (!existsSync(dist)) mkdirSync(dist, { recursive: true });
  cpSync(join(root, 'public'), dist, { recursive: true, force: true });
}

const syncPublicToDist = {
  name: 'sync-public-to-dist',
  apply: 'serve',
  configureServer() {
    syncPublic(process.cwd());
  },
  handleHotUpdate() {
    // Re-sync public/ → dist/ on every HMR event so static assets
    // survive a concurrent `npm run build` that temporarily wipes dist/.
    syncPublic(process.cwd());
  },
};

export default defineConfig({
  site: 'https://giovanyux.github.io',
  base: '/portfolio',
  output: 'static',
  integrations: [mdx(), sitemap()],
  vite: {
    plugins: [tailwindcss(), syncPublicToDist],
    server: {
      watch: {
        // Impede que mudanças em dist/ (geradas pelo build) disparem HMR
        // e re-avaliem o grafo de módulos com referências stale.
        ignored: ['**/dist/**'],
      },
    },
  },
});
