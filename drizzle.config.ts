import { defineConfig } from 'drizzle-kit'

const { DB_ITEMS_LOCAL_URL } = process.env

const localDbCredentials = DB_ITEMS_LOCAL_URL
  ? {
    dbCredentials: {
      url: DB_ITEMS_LOCAL_URL,
    },
  }
  : {}

export default defineConfig({
  dialect: 'sqlite',
  schema: './server/db/schema/items.ts',
  out: '.drizzle/migrations/items',
  ...localDbCredentials,
})
