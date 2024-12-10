import {  pgTable, serial, text} from 'drizzle-orm/pg-core';

export const notification = pgTable('notification_table', {
  id: serial('id').primaryKey(),
  content: text('content').notNull(),

});





