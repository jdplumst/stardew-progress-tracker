CREATE TABLE `farm_fish` (
	`id` text PRIMARY KEY DEFAULT (random()) NOT NULL,
	`farm_id` text NOT NULL,
	`fish_id` text NOT NULL,
	`created_at` integer NOT NULL,
	`updated_at` integer NOT NULL,
	FOREIGN KEY (`farm_id`) REFERENCES `farm`(`id`) ON UPDATE no action ON DELETE cascade,
	FOREIGN KEY (`fish_id`) REFERENCES `fish`(`id`) ON UPDATE no action ON DELETE cascade
);
--> statement-breakpoint
DROP TABLE `posts`;--> statement-breakpoint
PRAGMA foreign_keys=OFF;--> statement-breakpoint
CREATE TABLE `__new_farm` (
	`id` text PRIMARY KEY DEFAULT (random()) NOT NULL,
	`name` text NOT NULL,
	`farm_map_id` text NOT NULL,
	`created_at` integer NOT NULL,
	`updated_at` integer NOT NULL,
	FOREIGN KEY (`farm_map_id`) REFERENCES `farm_map`(`id`) ON UPDATE no action ON DELETE cascade
);
--> statement-breakpoint
INSERT INTO `__new_farm`("id", "name", "farm_map_id", "created_at", "updated_at") SELECT "id", "name", "farm_map_id", "created_at", "updated_at" FROM `farm`;--> statement-breakpoint
DROP TABLE `farm`;--> statement-breakpoint
ALTER TABLE `__new_farm` RENAME TO `farm`;--> statement-breakpoint
PRAGMA foreign_keys=ON;--> statement-breakpoint
CREATE TABLE `__new_farm_user` (
	`id` text PRIMARY KEY DEFAULT (random()) NOT NULL,
	`farm_id` text NOT NULL,
	`user_id` text NOT NULL,
	`created_at` integer NOT NULL,
	`updated_at` integer NOT NULL,
	`pending` integer NOT NULL,
	FOREIGN KEY (`farm_id`) REFERENCES `farm`(`id`) ON UPDATE no action ON DELETE cascade,
	FOREIGN KEY (`user_id`) REFERENCES `user`(`id`) ON UPDATE no action ON DELETE cascade
);
--> statement-breakpoint
INSERT INTO `__new_farm_user`("id", "farm_id", "user_id", "created_at", "updated_at", "pending") SELECT "id", "farm_id", "user_id", "created_at", "updated_at", "pending" FROM `farm_user`;--> statement-breakpoint
DROP TABLE `farm_user`;--> statement-breakpoint
ALTER TABLE `__new_farm_user` RENAME TO `farm_user`;