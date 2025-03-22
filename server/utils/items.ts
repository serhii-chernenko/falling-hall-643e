import type { H3Event } from 'h3'
import { drizzle } from 'drizzle-orm/d1'

import * as schema from '../db/schema/items'

export { sql, eq, and, or } from 'drizzle-orm'

export const tableItems = schema.items

export function useDatabaseItems(event: H3Event) {
  // eslint-disable-next-line no-console
  console.log(event.context.cloudflare.env.DB)
  const { DB } = event.context.cloudflare.env

  return drizzle(DB, { schema, logger: true })
}

export type Item = typeof tableItems.$inferSelect
