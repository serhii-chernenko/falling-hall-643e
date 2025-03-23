import tailwindcss from '@tailwindcss/vite'
import { createResolver } from '@nuxt/kit'

const { resolve } = createResolver(import.meta.url)

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  nitro: {
    preset: 'cloudflare-pages',
    cloudflare: {
      deployConfig: true,
      nodeCompat: true,
      wrangler: {
        name: 'falling-hall-643e',
        d1_databases: [
          {
            binding: 'DB_ITEMS',
            database_id: process.env.DB_ITEMS_ID ?? '__SET_IN_ENV__DB_ITEMS_ID__',
            database_name: process.env.DB_ITEMS_NAME ?? 'falling-hall-643e',
            migrations_dir: resolve('.drizzle/migrations/items'),
            migrations_table: 'items',
          },
        ],
      },
    },
    cloudflareDev: {
      configPath: 'dist/_worker.js/wrangler.json',
    },
  },
  modules: ['@nuxt/eslint', 'nitro-cloudflare-dev'],
  css: ['./assets/css/main.css'],
  vite: {
    plugins: [tailwindcss()],
  },
  runtimeConfig: {
    public: {
      itemsLimit: 5,
    },
  },
})
