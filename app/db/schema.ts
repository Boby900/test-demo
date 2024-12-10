import { pgTable, serial, text, boolean, timestamp } from 'drizzle-orm/pg-core';
import type { InferSelectModel } from "drizzle-orm";

export const notification = pgTable('notification_table', {
  id: serial('id').primaryKey(),
  type: text('type').notNull(), 
  content: text('content').notNull(), 
  isRead: boolean('is_read').notNull().default(false), 
  createdAt: timestamp('created_at').notNull().defaultNow() 
});


export type Notification = InferSelectModel<typeof notification>;
