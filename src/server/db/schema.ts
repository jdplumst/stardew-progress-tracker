import { sql } from "drizzle-orm";
import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";
import { v4 as uuidv4 } from "uuid";

// Better Auth Tables
export const user = sqliteTable("user", {
  id: text("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull().unique(),
  emailVerified: integer("email_verified", { mode: "boolean" }).notNull(),
  image: text("image"),
  createdAt: integer("created_at", { mode: "timestamp" }).notNull(),
  updatedAt: integer("updated_at", { mode: "timestamp" }).notNull(),
});

export const session = sqliteTable("session", {
  id: text("id").primaryKey(),
  expiresAt: integer("expires_at", { mode: "timestamp" }).notNull(),
  token: text("token").notNull().unique(),
  createdAt: integer("created_at", { mode: "timestamp" }).notNull(),
  updatedAt: integer("updated_at", { mode: "timestamp" }).notNull(),
  ipAddress: text("ip_address"),
  userAgent: text("user_agent"),
  userId: text("user_id")
    .notNull()
    .references(() => user.id, { onDelete: "cascade" }),
});

export const account = sqliteTable("account", {
  id: text("id").primaryKey(),
  accountId: text("account_id").notNull(),
  providerId: text("provider_id").notNull(),
  userId: text("user_id")
    .notNull()
    .references(() => user.id, { onDelete: "cascade" }),
  accessToken: text("access_token"),
  refreshToken: text("refresh_token"),
  idToken: text("id_token"),
  accessTokenExpiresAt: integer("access_token_expires_at", {
    mode: "timestamp",
  }),
  refreshTokenExpiresAt: integer("refresh_token_expires_at", {
    mode: "timestamp",
  }),
  scope: text("scope"),
  password: text("password"),
  createdAt: integer("created_at", { mode: "timestamp" }).notNull(),
  updatedAt: integer("updated_at", { mode: "timestamp" }).notNull(),
});

export const verification = sqliteTable("verification", {
  id: text("id").primaryKey(),
  identifier: text("identifier").notNull(),
  value: text("value").notNull(),
  expiresAt: integer("expires_at", { mode: "timestamp" }).notNull(),
  createdAt: integer("created_at", { mode: "timestamp" }),
  updatedAt: integer("updated_at", { mode: "timestamp" }),
});

export const farm = sqliteTable("farm", {
  id: text("id").primaryKey().$defaultFn(uuidv4),
  name: text("name").notNull(),
  farmMapId: text("farm_map_id")
    .notNull()
    .references(() => farmMap.id, { onDelete: "cascade" }),
  createdAt: integer("created_at", { mode: "timestamp" })
    .notNull()
    .default(sql`(current_timestamp)`),
  updatedAt: integer("updated_at", { mode: "timestamp" })
    .notNull()
    .default(sql`(current_timestamp)`),
});

export const farmfish = sqliteTable("farm_fish", {
  id: text("id").primaryKey().$defaultFn(uuidv4),
  farmId: text("farm_id")
    .notNull()
    .references(() => farm.id, { onDelete: "cascade" }),
  fishId: text("fish_id")
    .notNull()
    .references(() => fish.id, { onDelete: "cascade" }),
  createdAt: integer("created_at", { mode: "timestamp" })
    .notNull()
    .default(sql`(current_timestamp)`),
  updatedAt: integer("updated_at", { mode: "timestamp" })
    .notNull()
    .default(sql`(current_timestamp)`),
});

export const farmMap = sqliteTable("farm_map", {
  id: integer("id").primaryKey(),
  name: text("name").notNull(),
  image: text("image"),
});

export const farmUser = sqliteTable("farm_user", {
  id: text("id").primaryKey().$defaultFn(uuidv4),
  farmId: text("farm_id")
    .notNull()
    .references(() => farm.id, { onDelete: "cascade" }),
  userId: text("user_id")
    .notNull()
    .references(() => user.id, { onDelete: "cascade" }),
  createdAt: integer("created_at", { mode: "timestamp" })
    .notNull()
    .default(sql`(current_timestamp)`),
  updatedAt: integer("updated_at", { mode: "timestamp" })
    .notNull()
    .default(sql`(current_timestamp)`),
  pending: integer("pending", { mode: "boolean" }).notNull(),
});

export const fish = sqliteTable("fish", {
  id: integer("id").primaryKey(),
  name: text("name").notNull(),
  image: text("image"),
  time: text("time").notNull(),
  notes: text("notes"),
});

export const fishLocation = sqliteTable("fish_location", {
  id: text("id").primaryKey().$defaultFn(uuidv4),
  fishId: text("fish_id")
    .notNull()
    .references(() => fish.id, { onDelete: "cascade" }),
  locationId: text("location_id")
    .notNull()
    .references(() => location.id, { onDelete: "cascade" }),
});

export const fishSeason = sqliteTable("fish_season", {
  id: text("id").primaryKey().$defaultFn(uuidv4),
  fishId: text("fish_id")
    .notNull()
    .references(() => fish.id, { onDelete: "cascade" }),
  seasonId: text("season_id")
    .notNull()
    .references(() => season.id, { onDelete: "cascade" }),
});

export const fishWeather = sqliteTable("fish_weather", {
  id: text("id").primaryKey().$defaultFn(uuidv4),
  fishId: text("fish_id")
    .notNull()
    .references(() => fish.id, { onDelete: "cascade" }),
  weatherId: text("weather_id")
    .notNull()
    .references(() => weather.id, { onDelete: "cascade" }),
});

export const location = sqliteTable("location", {
  id: integer("id").primaryKey(),
  name: text("name").notNull(),
});

export const season = sqliteTable("season", {
  id: integer("id").primaryKey(),
  name: text("name").notNull(),
});

export const weather = sqliteTable("weather", {
  id: integer("id").primaryKey(),
  name: text("name").notNull(),
});
