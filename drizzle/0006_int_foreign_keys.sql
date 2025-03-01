PRAGMA foreign_keys=OFF;--> statement-breakpoint
CREATE TABLE `__new_farm` (
	`id` text PRIMARY KEY NOT NULL,
	`name` text NOT NULL,
	`farm_map_id` integer NOT NULL,
	`created_at` integer DEFAULT (current_timestamp) NOT NULL,
	`updated_at` integer DEFAULT (current_timestamp) NOT NULL,
	FOREIGN KEY (`farm_map_id`) REFERENCES `farm_map`(`id`) ON UPDATE no action ON DELETE cascade
);
--> statement-breakpoint
INSERT INTO `__new_farm`("id", "name", "farm_map_id", "created_at", "updated_at") SELECT "id", "name", "farm_map_id", "created_at", "updated_at" FROM `farm`;--> statement-breakpoint
DROP TABLE `farm`;--> statement-breakpoint
ALTER TABLE `__new_farm` RENAME TO `farm`;--> statement-breakpoint
PRAGMA foreign_keys=ON;--> statement-breakpoint
CREATE TABLE `__new_farm_fish` (
	`id` text PRIMARY KEY NOT NULL,
	`farm_id` text NOT NULL,
	`fish_id` integer NOT NULL,
	`created_at` integer DEFAULT (current_timestamp) NOT NULL,
	`updated_at` integer DEFAULT (current_timestamp) NOT NULL,
	FOREIGN KEY (`farm_id`) REFERENCES `farm`(`id`) ON UPDATE no action ON DELETE cascade,
	FOREIGN KEY (`fish_id`) REFERENCES `fish`(`id`) ON UPDATE no action ON DELETE cascade
);
--> statement-breakpoint
INSERT INTO `__new_farm_fish`("id", "farm_id", "fish_id", "created_at", "updated_at") SELECT "id", "farm_id", "fish_id", "created_at", "updated_at" FROM `farm_fish`;--> statement-breakpoint
DROP TABLE `farm_fish`;--> statement-breakpoint
ALTER TABLE `__new_farm_fish` RENAME TO `farm_fish`;--> statement-breakpoint
CREATE TABLE `__new_fish_location` (
	`id` text PRIMARY KEY NOT NULL,
	`fish_id` integer NOT NULL,
	`location_id` integer NOT NULL,
	FOREIGN KEY (`fish_id`) REFERENCES `fish`(`id`) ON UPDATE no action ON DELETE cascade,
	FOREIGN KEY (`location_id`) REFERENCES `location`(`id`) ON UPDATE no action ON DELETE cascade
);
--> statement-breakpoint
INSERT INTO `__new_fish_location`("id", "fish_id", "location_id") SELECT "id", "fish_id", "location_id" FROM `fish_location`;--> statement-breakpoint
DROP TABLE `fish_location`;--> statement-breakpoint
ALTER TABLE `__new_fish_location` RENAME TO `fish_location`;--> statement-breakpoint
CREATE TABLE `__new_fish_season` (
	`id` text PRIMARY KEY NOT NULL,
	`fish_id` integer NOT NULL,
	`season_id` integer NOT NULL,
	FOREIGN KEY (`fish_id`) REFERENCES `fish`(`id`) ON UPDATE no action ON DELETE cascade,
	FOREIGN KEY (`season_id`) REFERENCES `season`(`id`) ON UPDATE no action ON DELETE cascade
);
--> statement-breakpoint
INSERT INTO `__new_fish_season`("id", "fish_id", "season_id") SELECT "id", "fish_id", "season_id" FROM `fish_season`;--> statement-breakpoint
DROP TABLE `fish_season`;--> statement-breakpoint
ALTER TABLE `__new_fish_season` RENAME TO `fish_season`;--> statement-breakpoint
CREATE TABLE `__new_fish_weather` (
	`id` text PRIMARY KEY NOT NULL,
	`fish_id` integer NOT NULL,
	`weather_id` integer NOT NULL,
	FOREIGN KEY (`fish_id`) REFERENCES `fish`(`id`) ON UPDATE no action ON DELETE cascade,
	FOREIGN KEY (`weather_id`) REFERENCES `weather`(`id`) ON UPDATE no action ON DELETE cascade
);
--> statement-breakpoint
INSERT INTO `__new_fish_weather`("id", "fish_id", "weather_id") SELECT "id", "fish_id", "weather_id" FROM `fish_weather`;--> statement-breakpoint
DROP TABLE `fish_weather`;--> statement-breakpoint
ALTER TABLE `__new_fish_weather` RENAME TO `fish_weather`;