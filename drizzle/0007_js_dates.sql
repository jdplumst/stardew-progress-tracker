DROP INDEX "session_token_unique";--> statement-breakpoint
DROP INDEX "user_email_unique";--> statement-breakpoint
ALTER TABLE `farm` ALTER COLUMN "created_at" TO "created_at" integer NOT NULL;--> statement-breakpoint
CREATE UNIQUE INDEX `session_token_unique` ON `session` (`token`);--> statement-breakpoint
CREATE UNIQUE INDEX `user_email_unique` ON `user` (`email`);--> statement-breakpoint
ALTER TABLE `farm` ALTER COLUMN "updated_at" TO "updated_at" integer NOT NULL;--> statement-breakpoint
ALTER TABLE `farm_user` ALTER COLUMN "created_at" TO "created_at" integer NOT NULL;--> statement-breakpoint
ALTER TABLE `farm_user` ALTER COLUMN "updated_at" TO "updated_at" integer NOT NULL;--> statement-breakpoint
ALTER TABLE `farm_fish` ALTER COLUMN "created_at" TO "created_at" integer NOT NULL;--> statement-breakpoint
ALTER TABLE `farm_fish` ALTER COLUMN "updated_at" TO "updated_at" integer NOT NULL;