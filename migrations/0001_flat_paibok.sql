ALTER TABLE "notification_table" ADD COLUMN "type" text NOT NULL;--> statement-breakpoint
ALTER TABLE "notification_table" ADD COLUMN "is_read" boolean DEFAULT false NOT NULL;--> statement-breakpoint
ALTER TABLE "notification_table" ADD COLUMN "created_at" timestamp DEFAULT now() NOT NULL;