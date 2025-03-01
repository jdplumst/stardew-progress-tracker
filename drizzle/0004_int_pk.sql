PRAGMA foreign_keys=OFF;--> statement-breakpoint
CREATE TABLE `__new_farm_map` (
	`id` integer PRIMARY KEY NOT NULL,
	`name` text NOT NULL,
	`image` text
);
--> statement-breakpoint
INSERT INTO `__new_farm_map`("id", "name", "image") SELECT "id", "name", "image" FROM `farm_map`;--> statement-breakpoint
DROP TABLE `farm_map`;--> statement-breakpoint
ALTER TABLE `__new_farm_map` RENAME TO `farm_map`;--> statement-breakpoint
PRAGMA foreign_keys=ON;--> statement-breakpoint
CREATE TABLE `__new_fish` (
	`id` integer PRIMARY KEY NOT NULL,
	`name` text NOT NULL,
	`image` text,
	`time` text NOT NULL,
	`notes` text
);
--> statement-breakpoint
INSERT INTO `__new_fish`("id", "name", "image", "time", "notes") SELECT "id", "name", "image", "time", "notes" FROM `fish`;--> statement-breakpoint
DROP TABLE `fish`;--> statement-breakpoint
ALTER TABLE `__new_fish` RENAME TO `fish`;--> statement-breakpoint
CREATE TABLE `__new_location` (
	`id` integer PRIMARY KEY NOT NULL,
	`name` text NOT NULL
);
--> statement-breakpoint
INSERT INTO `__new_location`("id", "name") SELECT "id", "name" FROM `location`;--> statement-breakpoint
DROP TABLE `location`;--> statement-breakpoint
ALTER TABLE `__new_location` RENAME TO `location`;--> statement-breakpoint
CREATE TABLE `__new_season` (
	`id` integer PRIMARY KEY NOT NULL,
	`name` text NOT NULL
);
--> statement-breakpoint
INSERT INTO `__new_season`("id", "name") SELECT "id", "name" FROM `season`;--> statement-breakpoint
DROP TABLE `season`;--> statement-breakpoint
ALTER TABLE `__new_season` RENAME TO `season`;--> statement-breakpoint
CREATE TABLE `__new_weather` (
	`id` integer PRIMARY KEY NOT NULL,
	`name` text NOT NULL
);
--> statement-breakpoint
INSERT INTO `__new_weather`("id", "name") SELECT "id", "name" FROM `weather`;--> statement-breakpoint
DROP TABLE `weather`;--> statement-breakpoint
ALTER TABLE `__new_weather` RENAME TO `weather`;