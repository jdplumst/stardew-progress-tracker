CREATE TABLE `farm` (
	`id` text PRIMARY KEY NOT NULL,
	`name` text NOT NULL,
	`farm_map_id` text NOT NULL,
	`created_at` integer NOT NULL,
	`updated_at` integer NOT NULL,
	FOREIGN KEY (`farm_map_id`) REFERENCES `farm_map`(`id`) ON UPDATE no action ON DELETE cascade
);
--> statement-breakpoint
CREATE TABLE `farm_map` (
	`id` text PRIMARY KEY NOT NULL,
	`name` text NOT NULL,
	`image` text
);
--> statement-breakpoint
CREATE TABLE `farm_user` (
	`id` text PRIMARY KEY NOT NULL,
	`farm_id` text NOT NULL,
	`user_id` text NOT NULL,
	`created_at` integer NOT NULL,
	`updated_at` integer NOT NULL,
	`pending` integer NOT NULL,
	FOREIGN KEY (`farm_id`) REFERENCES `farm`(`id`) ON UPDATE no action ON DELETE cascade,
	FOREIGN KEY (`user_id`) REFERENCES `user`(`id`) ON UPDATE no action ON DELETE cascade
);
--> statement-breakpoint
CREATE TABLE `fish` (
	`id` text PRIMARY KEY NOT NULL,
	`name` text NOT NULL,
	`image` text,
	`time` text NOT NULL,
	`notes` text
);
--> statement-breakpoint
CREATE TABLE `fish_location` (
	`id` text PRIMARY KEY NOT NULL,
	`fish_id` text NOT NULL,
	`location_id` text NOT NULL,
	FOREIGN KEY (`fish_id`) REFERENCES `fish`(`id`) ON UPDATE no action ON DELETE cascade,
	FOREIGN KEY (`location_id`) REFERENCES `location`(`id`) ON UPDATE no action ON DELETE cascade
);
--> statement-breakpoint
CREATE TABLE `fish_season` (
	`id` text PRIMARY KEY NOT NULL,
	`fish_id` text NOT NULL,
	`season_id` text NOT NULL,
	FOREIGN KEY (`fish_id`) REFERENCES `fish`(`id`) ON UPDATE no action ON DELETE cascade,
	FOREIGN KEY (`season_id`) REFERENCES `season`(`id`) ON UPDATE no action ON DELETE cascade
);
--> statement-breakpoint
CREATE TABLE `fish_weather` (
	`id` text PRIMARY KEY NOT NULL,
	`fish_id` text NOT NULL,
	`weather_id` text NOT NULL,
	FOREIGN KEY (`fish_id`) REFERENCES `fish`(`id`) ON UPDATE no action ON DELETE cascade,
	FOREIGN KEY (`weather_id`) REFERENCES `weather`(`id`) ON UPDATE no action ON DELETE cascade
);
--> statement-breakpoint
CREATE TABLE `location` (
	`id` text PRIMARY KEY NOT NULL,
	`name` text NOT NULL
);
--> statement-breakpoint
CREATE TABLE `season` (
	`id` text PRIMARY KEY NOT NULL,
	`name` text NOT NULL
);
--> statement-breakpoint
CREATE TABLE `weather` (
	`id` text PRIMARY KEY NOT NULL,
	`name` text NOT NULL
);
