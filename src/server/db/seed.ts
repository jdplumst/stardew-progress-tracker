import { db } from "~/server/db";
import {
  farmMap,
  fish,
  fishLocation,
  fishSeason,
  fishWeather,
  location,
  season,
  weather,
} from "~/server/db/schema";

export async function seed() {
  // Farm Maps
  await db
    .insert(farmMap)
    .values([
      {
        id: 1,
        name: "Standard",
        image:
          "https://stardewvalleywiki.com/mediawiki/images/0/05/Standard_Farm_Map_Icon.png",
      },
      {
        id: 2,
        name: "Riverland",
        image:
          "https://stardewvalleywiki.com/mediawiki/images/4/4a/Riverland_Farm_Map_Icon.png",
      },
      {
        id: 3,
        name: "Forest",
        image:
          "https://stardewvalleywiki.com/mediawiki/images/7/77/Forest_Farm_Map_Icon.png",
      },
      {
        id: 4,
        name: "Hilltop",
        image:
          "https://stardewvalleywiki.com/mediawiki/images/7/74/Hilltop_Farm_Map_Icon.png",
      },
      {
        id: 5,
        name: "Wilderness",
        image:
          "https://stardewvalleywiki.com/mediawiki/images/3/36/Wilderness_Farm_Map_Icon.png",
      },
      {
        id: 6,
        name: "Four Corners",
        image:
          "https://stardewvalleywiki.com/mediawiki/images/2/29/Four_Corners_Farm_Map_Icon.png",
      },
      {
        id: 7,
        name: "Beach",
        image:
          "https://stardewvalleywiki.com/mediawiki/images/8/81/Beach_Farm_Map_Icon.png",
      },
      {
        id: 8,
        name: "Meadowlands",
        image:
          "https://stardewvalleywiki.com/mediawiki/images/7/7b/Meadowlands_Farm_Map_Icon.png",
      },
    ])
    .onConflictDoNothing();

  // Location
  await db
    .insert(location)
    .values([
      {
        id: 1,
        name: "Ocean",
      },
      {
        id: 2,
        name: "Town River",
      },
      {
        id: 3,
        name: "Forest River",
      },
      {
        id: 4,
        name: "Ginger Island Oceans",
      },
      {
        id: 5,
        name: "Mountain Lake",
      },
      {
        id: 6,
        name: "Forest Pond",
      },
      {
        id: 7,
        name: "Forest Waterfalls",
      },
      {
        id: 8,
        name: "Secret Woods Pond",
      },
      {
        id: 9,
        name: "Sewers",
      },
      {
        id: 10,
        name: "Witch's Swamp",
      },
      {
        id: 11,
        name: "Mines",
      },
      {
        id: 12,
        name: "Volcano Caldera",
      },
      {
        id: 13,
        name: "Desert",
      },
      {
        id: 14,
        name: "Forest Farm",
      },
      {
        id: 15,
        name: "Mutant Bug Lair",
      },
      {
        id: 16,
        name: "Pirate Cove",
      },
      {
        id: 17,
        name: "Ginger Island Pond and Rivers",
      },
      {
        id: 18,
        name: "Night Market",
      },
    ])
    .onConflictDoNothing();

  // Season
  await db
    .insert(season)
    .values([
      {
        id: 1,
        name: "Spring",
      },
      {
        id: 2,
        name: "Summer",
      },
      {
        id: 3,
        name: "Fall",
      },
      {
        id: 4,
        name: "Winter",
      },
    ])
    .onConflictDoNothing();

  // Weather
  await db
    .insert(weather)
    .values([
      {
        id: 1,
        name: "Sun",
      },
      {
        id: 2,
        name: "Rain",
      },
      {
        id: 3,
        name: "Green Rain",
      },
      {
        id: 4,
        name: "Wind (Spring)",
      },
      {
        id: 5,
        name: "Wind (Fall)",
      },
      {
        id: 6,
        name: "Storm",
      },
      {
        id: 7,
        name: "Snow",
      },
      {
        id: 8,
        name: "Festival",
      },
      {
        id: 9,
        name: "Any",
      },
    ])
    .onConflictDoNothing();

  // Fish
  await db
    .insert(fish)
    .values([
      {
        id: 1,
        name: "Pufferfish",
        image:
          "https://stardewvalleywiki.com/mediawiki/images/b/ba/Pufferfish.png",
        time: "12pm - 4pm",
        notes: "All Seasons on Ginger Island",
      },
      {
        id: 2,
        name: "Anchovy",
        image:
          "https://stardewvalleywiki.com/mediawiki/images/7/79/Anchovy.png",
        time: "Anytime",
      },
      {
        id: 3,
        name: "Tuna",
        image: "https://stardewvalleywiki.com/mediawiki/images/c/c5/Tuna.png",
        time: "6am - 7pm",
        notes: "All Seasons on Ginger Island",
      },
      {
        id: 4,
        name: "Sardine",
        image:
          "https://stardewvalleywiki.com/mediawiki/images/0/04/Sardine.png",
        time: "6am - 7pm",
      },
      {
        id: 5,
        name: "Bream",
        image: "https://stardewvalleywiki.com/mediawiki/images/8/82/Bream.png",
        time: "6pm - 2am",
      },
      {
        id: 6,
        name: "Largemouth Bass",
        image:
          "https://stardewvalleywiki.com/mediawiki/images/1/11/Largemouth_Bass.png",
        time: "6am - 7pm",
      },
      {
        id: 7,
        name: "Smallmouth Bass",
        image:
          "https://stardewvalleywiki.com/mediawiki/images/a/a5/Smallmouth_Bass.png",
        time: "Anytime",
      },
      {
        id: 8,
        name: "Rainbow Trout",
        image:
          "https://stardewvalleywiki.com/mediawiki/images/1/14/Rainbow_Trout.png",
        time: "6am - 7pm",
      },
      {
        id: 9,
        name: "Salmon",
        image: "https://stardewvalleywiki.com/mediawiki/images/e/e0/Salmon.png",
        time: "6am - 7pm",
      },
      {
        id: 10,
        name: "Walleye",
        image:
          "https://stardewvalleywiki.com/mediawiki/images/0/05/Walleye.png",
        time: "12pm - 2am",
        notes: "Winter with Rain Totem",
      },
      {
        id: 11,
        name: "Perch",
        image: "https://stardewvalleywiki.com/mediawiki/images/4/43/Perch.png",
        time: "Anytime",
      },
      {
        id: 12,
        name: "Carp",
        image: "https://stardewvalleywiki.com/mediawiki/images/a/a8/Carp.png",
        time: "Anytime",
      },
      {
        id: 13,
        name: "Catfish",
        image:
          "https://stardewvalleywiki.com/mediawiki/images/9/99/Catfish.png",
        time: "6am - 12am",
        notes: "Spring & Summer in Secret Woods Pond, Winter with Rain Totem",
      },
      {
        id: 14,
        name: "Pike",
        image: "https://stardewvalleywiki.com/mediawiki/images/3/31/Pike.png",
        time: "Anytime",
      },
      {
        id: 15,
        name: "Sunfish",
        image:
          "https://stardewvalleywiki.com/mediawiki/images/5/56/Sunfish.png",
        time: "6am - 7pm",
      },
      {
        id: 16,
        name: "Red Mullet",
        image:
          "https://stardewvalleywiki.com/mediawiki/images/f/f2/Red_Mullet.png",
        time: "6am - 7pm",
      },
      {
        id: 17,
        name: "Herring",
        image:
          "https://stardewvalleywiki.com/mediawiki/images/f/f1/Herring.png",
        time: "Anytime",
      },
      {
        id: 18,
        name: "Eel",
        image: "https://stardewvalleywiki.com/mediawiki/images/9/91/Eel.png",
        time: "4pm - 2am",
      },
      {
        id: 19,
        name: "Octopus",
        image:
          "https://stardewvalleywiki.com/mediawiki/images/5/5a/Octopus.png",
        time: "6am - 1pm",
        notes: "All Seasons on Ginger Island",
      },
      {
        id: 20,
        name: "Red Snapper",
        image:
          "https://stardewvalleywiki.com/mediawiki/images/d/d3/Red_Snapper.png",
        time: "6am - 7pm",
        notes: "Winter with Rain Totem",
      },
      {
        id: 21,
        name: "Squid",
        image: "https://stardewvalleywiki.com/mediawiki/images/8/81/Squid.png",
        time: "6pm - 2am",
      },
      {
        id: 22,
        name: "Sea Cucumber",
        image:
          "https://stardewvalleywiki.com/mediawiki/images/a/a9/Sea_Cucumber.png",
        time: "6am - 7pm",
      },
      {
        id: 23,
        name: "Super Cucumber",
        image:
          "https://stardewvalleywiki.com/mediawiki/images/d/d5/Super_Cucumber.png",
        time: "6pm - 2am",
        notes: "All Seasons on Ginger Island",
      },
      {
        id: 24,
        name: "Ghostfish",
        image:
          "https://stardewvalleywiki.com/mediawiki/images/7/72/Ghostfish.png",
        time: "Anytime",
        notes: "20F & 60F Ghost drops",
      },
      {
        id: 25,
        name: "Stonefish",
        image:
          "https://stardewvalleywiki.com/mediawiki/images/0/03/Stonefish.png",
        time: "Anytime",
        notes: "20F",
      },
      {
        id: 26,
        name: "Ice Pip",
        image:
          "https://stardewvalleywiki.com/mediawiki/images/6/63/Ice_Pip.png",
        time: "Anytime",
        notes: "60F",
      },
      {
        id: 27,
        name: "Lava Eel",
        image:
          "https://stardewvalleywiki.com/mediawiki/images/1/12/Lava_Eel.png",
        time: "Anytime",
        notes: "100F",
      },
      {
        id: 28,
        name: "Sandfish",
        image:
          "https://stardewvalleywiki.com/mediawiki/images/b/bb/Sandfish.png",
        time: "6am - 8pm",
      },
      {
        id: 29,
        name: "Scorpion Carp",
        image:
          "https://stardewvalleywiki.com/mediawiki/images/7/76/Scorpion_Carp.png",
        time: "6am - 8pm",
        notes: "Requires fishing level 4",
      },
      {
        id: 30,
        name: "Flounder",
        image:
          "https://stardewvalleywiki.com/mediawiki/images/8/85/Flounder.png",
        time: "6am - 8pm",
        notes: "All Seasons on Ginger Island",
      },
      {
        id: 31,
        name: "Midnight Carp",
        image:
          "https://stardewvalleywiki.com/mediawiki/images/3/33/Midnight_Carp.png",
        time: "10pm - 2am",
        notes: "All Seasons on Ginger Island",
      },
      {
        id: 32,
        name: "Sturgeon",
        image:
          "https://stardewvalleywiki.com/mediawiki/images/4/42/Sturgeon.png",
        time: "6am - 7pm",
      },
      {
        id: 33,
        name: "Tiger Trout",
        image:
          "https://stardewvalleywiki.com/mediawiki/images/0/01/Tiger_Trout.png",
        time: "6am - 7pm",
      },
      {
        id: 34,
        name: "Bullhead",
        image:
          "https://stardewvalleywiki.com/mediawiki/images/d/db/Bullhead.png",
        time: "Anytime",
      },
      {
        id: 35,
        name: "Tilapia",
        image:
          "https://stardewvalleywiki.com/mediawiki/images/7/73/Tilapia.png",
        time: "6am - 2pm",
        notes: "All Seasons on Ginger Island",
      },
      {
        id: 36,
        name: "Chub",
        image: "https://stardewvalleywiki.com/mediawiki/images/b/bd/Chub.png",
        time: "Anytime",
      },
      {
        id: 37,
        name: "Dorado",
        image: "https://stardewvalleywiki.com/mediawiki/images/1/18/Dorado.png",
        time: "6am - 7pm",
      },
      {
        id: 38,
        name: "Albacore",
        image:
          "https://stardewvalleywiki.com/mediawiki/images/e/e1/Albacore.png",
        time: "6am - 11am, 6pm - 2am",
      },
      {
        id: 39,
        name: "Shad",
        image: "https://stardewvalleywiki.com/mediawiki/images/e/ef/Shad.png",
        time: "9am - 2am",
      },
      {
        id: 40,
        name: "Lingcod",
        image:
          "https://stardewvalleywiki.com/mediawiki/images/8/87/Lingcod.png",
        time: "Anytime",
      },
      {
        id: 41,
        name: "Halibut",
        image:
          "https://stardewvalleywiki.com/mediawiki/images/0/02/Halibut.png",
        time: "6am - 11am, 7pm - 2am",
      },
      {
        id: 42,
        name: "Woodskip",
        image:
          "https://stardewvalleywiki.com/mediawiki/images/9/97/Woodskip.png",
        time: "Anytime",
      },
      {
        id: 43,
        name: "Void Salmon",
        image:
          "https://stardewvalleywiki.com/mediawiki/images/a/ad/Void_Salmon.png",
        time: "Anytime",
      },
      {
        id: 44,
        name: "Slimejack",
        image:
          "https://stardewvalleywiki.com/mediawiki/images/3/34/Slimejack.png",
        time: "Anytime",
      },
      {
        id: 45,
        name: "Stingray",
        image:
          "https://stardewvalleywiki.com/mediawiki/images/3/3a/Stingray.png",
        time: "Anytime",
      },
      {
        id: 46,
        name: "Lionfish",
        image:
          "https://stardewvalleywiki.com/mediawiki/images/b/bb/Lionfish.png",
        time: "Anytime",
      },
      {
        id: 47,
        name: "Blue Discus",
        image:
          "https://stardewvalleywiki.com/mediawiki/images/e/ee/Blue_Discus.png",
        time: "Anytime",
      },
      {
        id: 48,
        name: "Goby",
        image: "https://stardewvalleywiki.com/mediawiki/images/6/67/Goby.png",
        time: "Anytime",
      },
      {
        id: 49,
        name: "Midnight Squid",
        image:
          "https://stardewvalleywiki.com/mediawiki/images/8/83/Midnight_Squid.png",
        time: "5pm - 2am",
        notes:
          "Caught in the Night Market during Winter 15-17, can be caught regardless of weather, time, or season using Magic Ball in the southwest corner of The Beach",
      },
      {
        id: 50,
        name: "Spook Fish",
        image:
          "https://stardewvalleywiki.com/mediawiki/images/8/8c/Spook_Fish.png",
        time: "5pm - 2am",
        notes:
          "Caught in the Night Market during Winter 15-17, can be caught regardless of weather, time, or season using Magic Ball in the southwest corner of The Beach",
      },
      {
        id: 51,
        name: "Blobfish",
        image:
          "https://stardewvalleywiki.com/mediawiki/images/7/7f/Blobfish.png",
        time: "5pm - 2am",
        notes:
          "Caught in the Night Market during Winter 15-17, can be caught regardless of weather, time, or season using Magic Ball in the southwest corner of The Beach",
      },
      {
        id: 52,
        name: "Crimsonfish",
        image:
          "https://stardewvalleywiki.com/mediawiki/images/d/dc/Crimsonfish.png",
        time: "Anytime",
        notes: "East Pier on The Beach. Requires level 5 fishing.",
      },
      {
        id: 53,
        name: "Angler",
        image: "https://stardewvalleywiki.com/mediawiki/images/b/bf/Angler.png",
        time: "Anytime",
        notes:
          "North of JojaMart on the wooden plank bridge. Requires level 3 fishing.",
      },
      {
        id: 54,
        name: "Legend",
        image: "https://stardewvalleywiki.com/mediawiki/images/1/10/Legend.png",
        time: "Anytime",
        notes: "The Mountain Lake near the log. Requires level 10 fishing.",
      },
      {
        id: 55,
        name: "Glacierfish",
        image:
          "https://stardewvalleywiki.com/mediawiki/images/f/fd/Glacierfish.png",
        time: "Anytime",
        notes:
          "South end of Arrowhead Island in Cindersap Forest. Requires level 6 fishing.",
      },
      {
        id: 56,
        name: "Mutant Carp",
        image:
          "https://stardewvalleywiki.com/mediawiki/images/c/cb/Mutant_Carp.png",
        time: "Anytime",
      },
      {
        id: 57,
        name: "Son of Crimsonfish",
        image:
          "https://stardewvalleywiki.com/mediawiki/images/1/12/Son_of_Crimsonfish.png",
        time: "Anytime",
        notes: "East Pier on The Beach. Requires level 5 fishing.",
      },
      {
        id: 58,
        name: "Ms. Angler",
        image:
          "https://stardewvalleywiki.com/mediawiki/images/b/bb/Ms._Angler.png",
        time: "Anytime",
        notes:
          "North of JojaMart on the wooden plank bridge. Requires level 3 fishing.",
      },
      {
        id: 59,
        name: "Legend II",
        image:
          "https://stardewvalleywiki.com/mediawiki/images/7/7a/Legend_II.png",
        time: "Anytime",
        notes: "The Mountain Lake near the log. Requires level 10 fishing.",
      },
      {
        id: 60,
        name: "Glacierfish Jr.",
        image:
          "https://stardewvalleywiki.com/mediawiki/images/d/db/Glacierfish_Jr..png",
        time: "Anytime",
        notes:
          "South end of Arrowhead Island in Cindersap Forest. Requires level 6 fishing.",
      },
      {
        id: 61,
        name: "Radioactive Carp",
        image:
          "https://stardewvalleywiki.com/mediawiki/images/5/57/Radioactive_Carp.png",
        time: "Anytime",
      },
    ])
    .onConflictDoNothing();

  // Fish Location
  await db
    .insert(fishLocation)
    .values([
      {
        fishId: 1,
        locationId: 1,
      },
      {
        fishId: 1,
        locationId: 4,
      },
      {
        fishId: 2,
        locationId: 1,
      },
      {
        fishId: 3,
        locationId: 1,
      },
      {
        fishId: 3,
        locationId: 4,
      },
      {
        fishId: 4,
        locationId: 1,
      },
      {
        fishId: 5,
        locationId: 2,
      },
      {
        fishId: 5,
        locationId: 3,
      },
      {
        fishId: 6,
        locationId: 5,
      },
      {
        fishId: 7,
        locationId: 2,
      },
      {
        fishId: 7,
        locationId: 6,
      },
      {
        fishId: 8,
        locationId: 2,
      },
      {
        fishId: 8,
        locationId: 3,
      },
      {
        fishId: 8,
        locationId: 5,
      },
      {
        fishId: 9,
        locationId: 2,
      },
      {
        fishId: 9,
        locationId: 3,
      },
      {
        fishId: 9,
        locationId: 7,
      },
      {
        fishId: 10,
        locationId: 2,
      },
      {
        fishId: 10,
        locationId: 3,
      },
      {
        fishId: 10,
        locationId: 6,
      },
      {
        fishId: 10,
        locationId: 5,
      },
      {
        fishId: 11,
        locationId: 2,
      },
      {
        fishId: 11,
        locationId: 3,
      },
      {
        fishId: 11,
        locationId: 5,
      },
      {
        fishId: 11,
        locationId: 6,
      },
      {
        fishId: 12,
        locationId: 5,
      },
      {
        fishId: 12,
        locationId: 8,
      },
      {
        fishId: 12,
        locationId: 9,
      },
      {
        fishId: 13,
        locationId: 2,
      },
      {
        fishId: 13,
        locationId: 3,
      },
      {
        fishId: 13,
        locationId: 8,
      },
      {
        fishId: 13,
        locationId: 10,
      },
      {
        fishId: 14,
        locationId: 2,
      },
      {
        fishId: 14,
        locationId: 3,
      },
      {
        fishId: 14,
        locationId: 6,
      },
      {
        fishId: 15,
        locationId: 2,
      },
      {
        fishId: 15,
        locationId: 3,
      },
      {
        fishId: 16,
        locationId: 1,
      },
      {
        fishId: 17,
        locationId: 1,
      },
      {
        fishId: 18,
        locationId: 1,
      },
      {
        fishId: 19,
        locationId: 1,
      },
      {
        fishId: 19,
        locationId: 4,
      },
      {
        fishId: 20,
        locationId: 1,
      },
      {
        fishId: 21,
        locationId: 1,
      },
      {
        fishId: 22,
        locationId: 1,
      },
      {
        fishId: 23,
        locationId: 1,
      },
      {
        fishId: 23,
        locationId: 4,
      },
      {
        fishId: 24,
        locationId: 11,
      },
      {
        fishId: 25,
        locationId: 11,
      },
      {
        fishId: 26,
        locationId: 11,
      },
      {
        fishId: 27,
        locationId: 11,
      },
      {
        fishId: 27,
        locationId: 12,
      },
      {
        fishId: 28,
        locationId: 13,
      },
      {
        fishId: 29,
        locationId: 13,
      },
      {
        fishId: 30,
        locationId: 1,
      },
      {
        fishId: 30,
        locationId: 4,
      },
      {
        fishId: 31,
        locationId: 5,
      },
      {
        fishId: 31,
        locationId: 6,
      },
      {
        fishId: 31,
        locationId: 17,
      },
      {
        fishId: 32,
        locationId: 5,
      },
      {
        fishId: 33,
        locationId: 2,
      },
      {
        fishId: 33,
        locationId: 3,
      },
      {
        fishId: 34,
        locationId: 5,
      },
      {
        fishId: 35,
        locationId: 1,
      },
      {
        fishId: 35,
        locationId: 4,
      },
      {
        fishId: 36,
        locationId: 3,
      },
      {
        fishId: 36,
        locationId: 5,
      },
      {
        fishId: 37,
        locationId: 3,
      },
      {
        fishId: 38,
        locationId: 1,
      },
      {
        fishId: 39,
        locationId: 2,
      },
      {
        fishId: 39,
        locationId: 3,
      },
      {
        fishId: 40,
        locationId: 2,
      },
      {
        fishId: 40,
        locationId: 3,
      },
      {
        fishId: 40,
        locationId: 5,
      },
      {
        fishId: 41,
        locationId: 1,
      },
      {
        fishId: 42,
        locationId: 8,
      },
      {
        fishId: 42,
        locationId: 14,
      },
      {
        fishId: 43,
        locationId: 10,
      },
      {
        fishId: 44,
        locationId: 15,
      },
      {
        fishId: 45,
        locationId: 16,
      },
      {
        fishId: 46,
        locationId: 4,
      },
      {
        fishId: 47,
        locationId: 17,
      },
      {
        fishId: 48,
        locationId: 7,
      },
      {
        fishId: 49,
        locationId: 18,
      },
      {
        fishId: 50,
        locationId: 18,
      },
      {
        fishId: 51,
        locationId: 18,
      },
      {
        fishId: 52,
        locationId: 1,
      },
      {
        fishId: 53,
        locationId: 2,
      },
      {
        fishId: 54,
        locationId: 5,
      },
      {
        fishId: 55,
        locationId: 3,
      },
      {
        fishId: 56,
        locationId: 9,
      },
      {
        fishId: 57,
        locationId: 1,
      },
      {
        fishId: 58,
        locationId: 2,
      },
      {
        fishId: 59,
        locationId: 5,
      },
      {
        fishId: 60,
        locationId: 3,
      },
      {
        fishId: 61,
        locationId: 9,
      },
    ])
    .onConflictDoNothing();

  // Fish Season
  await db
    .insert(fishSeason)
    .values([
      {
        fishId: 1,
        seasonId: 2,
      },
      {
        fishId: 2,
        seasonId: 1,
      },
      {
        fishId: 2,
        seasonId: 3,
      },
      {
        fishId: 3,
        seasonId: 2,
      },
      {
        fishId: 3,
        seasonId: 4,
      },
      {
        fishId: 4,
        seasonId: 1,
      },
      {
        fishId: 4,
        seasonId: 3,
      },
      {
        fishId: 4,
        seasonId: 4,
      },
      {
        fishId: 5,
        seasonId: 1,
      },
      {
        fishId: 5,
        seasonId: 2,
      },
      {
        fishId: 5,
        seasonId: 3,
      },
      {
        fishId: 5,
        seasonId: 4,
      },
      {
        fishId: 6,
        seasonId: 1,
      },
      {
        fishId: 6,
        seasonId: 2,
      },
      {
        fishId: 6,
        seasonId: 3,
      },
      {
        fishId: 6,
        seasonId: 4,
      },
      {
        fishId: 7,
        seasonId: 1,
      },
      {
        fishId: 7,
        seasonId: 3,
      },
      {
        fishId: 8,
        seasonId: 2,
      },
      {
        fishId: 9,
        seasonId: 3,
      },
      {
        fishId: 10,
        seasonId: 3,
      },
      {
        fishId: 10,
        seasonId: 4,
      },
      {
        fishId: 11,
        seasonId: 4,
      },
      {
        fishId: 12,
        seasonId: 1,
      },
      {
        fishId: 12,
        seasonId: 2,
      },
      {
        fishId: 12,
        seasonId: 3,
      },
      {
        fishId: 12,
        seasonId: 4,
      },
      {
        fishId: 13,
        seasonId: 1,
      },
      {
        fishId: 13,
        seasonId: 3,
      },
      {
        fishId: 13,
        seasonId: 4,
      },
      {
        fishId: 14,
        seasonId: 2,
      },
      {
        fishId: 14,
        seasonId: 4,
      },
      {
        fishId: 15,
        seasonId: 1,
      },
      {
        fishId: 15,
        seasonId: 2,
      },
      {
        fishId: 16,
        seasonId: 2,
      },
      {
        fishId: 16,
        seasonId: 4,
      },
      {
        fishId: 17,
        seasonId: 1,
      },
      {
        fishId: 17,
        seasonId: 4,
      },
      {
        fishId: 18,
        seasonId: 1,
      },
      {
        fishId: 18,
        seasonId: 3,
      },
      {
        fishId: 19,
        seasonId: 2,
      },
      {
        fishId: 20,
        seasonId: 2,
      },
      {
        fishId: 20,
        seasonId: 3,
      },
      {
        fishId: 20,
        seasonId: 4,
      },
      {
        fishId: 21,
        seasonId: 4,
      },
      {
        fishId: 22,
        seasonId: 3,
      },
      {
        fishId: 22,
        seasonId: 4,
      },
      {
        fishId: 23,
        seasonId: 2,
      },
      {
        fishId: 23,
        seasonId: 3,
      },
      {
        fishId: 24,
        seasonId: 1,
      },
      {
        fishId: 24,
        seasonId: 2,
      },
      {
        fishId: 24,
        seasonId: 3,
      },
      {
        fishId: 24,
        seasonId: 4,
      },
      {
        fishId: 25,
        seasonId: 1,
      },
      {
        fishId: 25,
        seasonId: 2,
      },
      {
        fishId: 25,
        seasonId: 3,
      },
      {
        fishId: 25,
        seasonId: 4,
      },
      {
        fishId: 26,
        seasonId: 1,
      },
      {
        fishId: 26,
        seasonId: 2,
      },
      {
        fishId: 26,
        seasonId: 3,
      },
      {
        fishId: 26,
        seasonId: 4,
      },
      {
        fishId: 27,
        seasonId: 1,
      },
      {
        fishId: 27,
        seasonId: 2,
      },
      {
        fishId: 27,
        seasonId: 3,
      },
      {
        fishId: 27,
        seasonId: 4,
      },
      {
        fishId: 28,
        seasonId: 1,
      },
      {
        fishId: 28,
        seasonId: 2,
      },
      {
        fishId: 28,
        seasonId: 3,
      },
      {
        fishId: 28,
        seasonId: 4,
      },
      {
        fishId: 29,
        seasonId: 1,
      },
      {
        fishId: 29,
        seasonId: 2,
      },
      {
        fishId: 29,
        seasonId: 3,
      },
      {
        fishId: 29,
        seasonId: 4,
      },
      {
        fishId: 30,
        seasonId: 1,
      },
      {
        fishId: 30,
        seasonId: 2,
      },
      {
        fishId: 31,
        seasonId: 3,
      },
      {
        fishId: 31,
        seasonId: 4,
      },
      {
        fishId: 32,
        seasonId: 2,
      },
      {
        fishId: 32,
        seasonId: 4,
      },
      {
        fishId: 33,
        seasonId: 3,
      },
      {
        fishId: 33,
        seasonId: 4,
      },
      {
        fishId: 34,
        seasonId: 1,
      },
      {
        fishId: 34,
        seasonId: 2,
      },
      {
        fishId: 34,
        seasonId: 3,
      },
      {
        fishId: 34,
        seasonId: 4,
      },
      {
        fishId: 35,
        seasonId: 2,
      },
      {
        fishId: 35,
        seasonId: 3,
      },
      {
        fishId: 36,
        seasonId: 1,
      },
      {
        fishId: 36,
        seasonId: 2,
      },
      {
        fishId: 36,
        seasonId: 3,
      },
      {
        fishId: 36,
        seasonId: 4,
      },
      {
        fishId: 37,
        seasonId: 2,
      },
      {
        fishId: 38,
        seasonId: 3,
      },
      {
        fishId: 38,
        seasonId: 4,
      },
      {
        fishId: 39,
        seasonId: 1,
      },
      {
        fishId: 39,
        seasonId: 2,
      },
      {
        fishId: 39,
        seasonId: 3,
      },
      {
        fishId: 40,
        seasonId: 4,
      },
      {
        fishId: 41,
        seasonId: 1,
      },
      {
        fishId: 41,
        seasonId: 2,
      },
      {
        fishId: 41,
        seasonId: 4,
      },
      {
        fishId: 42,
        seasonId: 1,
      },
      {
        fishId: 42,
        seasonId: 2,
      },
      {
        fishId: 42,
        seasonId: 3,
      },
      {
        fishId: 42,
        seasonId: 4,
      },
      {
        fishId: 43,
        seasonId: 1,
      },
      {
        fishId: 43,
        seasonId: 2,
      },
      {
        fishId: 43,
        seasonId: 3,
      },
      {
        fishId: 43,
        seasonId: 4,
      },
      {
        fishId: 44,
        seasonId: 1,
      },
      {
        fishId: 44,
        seasonId: 2,
      },
      {
        fishId: 44,
        seasonId: 3,
      },
      {
        fishId: 44,
        seasonId: 4,
      },
      {
        fishId: 45,
        seasonId: 1,
      },
      {
        fishId: 45,
        seasonId: 2,
      },
      {
        fishId: 45,
        seasonId: 3,
      },
      {
        fishId: 45,
        seasonId: 4,
      },
      {
        fishId: 46,
        seasonId: 1,
      },
      {
        fishId: 46,
        seasonId: 2,
      },
      {
        fishId: 46,
        seasonId: 3,
      },
      {
        fishId: 46,
        seasonId: 4,
      },
      {
        fishId: 47,
        seasonId: 1,
      },
      {
        fishId: 47,
        seasonId: 2,
      },
      {
        fishId: 47,
        seasonId: 3,
      },
      {
        fishId: 47,
        seasonId: 4,
      },
      {
        fishId: 48,
        seasonId: 1,
      },
      {
        fishId: 48,
        seasonId: 2,
      },
      {
        fishId: 48,
        seasonId: 3,
      },
      {
        fishId: 48,
        seasonId: 4,
      },
      {
        fishId: 49,
        seasonId: 4,
      },
      {
        fishId: 50,
        seasonId: 4,
      },
      {
        fishId: 51,
        seasonId: 4,
      },
      {
        fishId: 52,
        seasonId: 2,
      },
      {
        fishId: 53,
        seasonId: 3,
      },
      {
        fishId: 54,
        seasonId: 1,
      },
      {
        fishId: 55,
        seasonId: 4,
      },
      {
        fishId: 56,
        seasonId: 1,
      },
      {
        fishId: 56,
        seasonId: 2,
      },
      {
        fishId: 56,
        seasonId: 3,
      },
      {
        fishId: 56,
        seasonId: 4,
      },
      {
        fishId: 57,
        seasonId: 1,
      },
      {
        fishId: 57,
        seasonId: 2,
      },
      {
        fishId: 57,
        seasonId: 3,
      },
      {
        fishId: 57,
        seasonId: 4,
      },
      {
        fishId: 58,
        seasonId: 1,
      },
      {
        fishId: 58,
        seasonId: 2,
      },
      {
        fishId: 58,
        seasonId: 3,
      },
      {
        fishId: 58,
        seasonId: 4,
      },
      {
        fishId: 59,
        seasonId: 1,
      },
      {
        fishId: 59,
        seasonId: 2,
      },
      {
        fishId: 59,
        seasonId: 3,
      },
      {
        fishId: 59,
        seasonId: 4,
      },
      {
        fishId: 60,
        seasonId: 1,
      },
      {
        fishId: 60,
        seasonId: 2,
      },
      {
        fishId: 60,
        seasonId: 3,
      },
      {
        fishId: 60,
        seasonId: 4,
      },
      {
        fishId: 61,
        seasonId: 1,
      },
      {
        fishId: 61,
        seasonId: 2,
      },
      {
        fishId: 61,
        seasonId: 3,
      },
      {
        fishId: 61,
        seasonId: 4,
      },
    ])
    .onConflictDoNothing();

  // Fish Weather
  await db
    .insert(fishWeather)
    .values([
      {
        fishId: 1,
        weatherId: 1,
      },
      {
        fishId: 2,
        weatherId: 9,
      },
      {
        fishId: 3,
        weatherId: 9,
      },
      {
        fishId: 4,
        weatherId: 9,
      },
      {
        fishId: 5,
        weatherId: 9,
      },
      {
        fishId: 6,
        weatherId: 9,
      },
      {
        fishId: 7,
        weatherId: 9,
      },
      {
        fishId: 8,
        weatherId: 1,
      },
      {
        fishId: 9,
        weatherId: 9,
      },
      {
        fishId: 10,
        weatherId: 2,
      },
      {
        fishId: 11,
        weatherId: 9,
      },
      {
        fishId: 12,
        weatherId: 9,
      },
      {
        fishId: 13,
        weatherId: 2,
      },
      {
        fishId: 14,
        weatherId: 9,
      },
      {
        fishId: 15,
        weatherId: 1,
      },
      {
        fishId: 15,
        weatherId: 4,
      },
      {
        fishId: 16,
        weatherId: 9,
      },
      {
        fishId: 17,
        weatherId: 9,
      },
      {
        fishId: 18,
        weatherId: 2,
      },
      {
        fishId: 19,
        weatherId: 9,
      },
      {
        fishId: 20,
        weatherId: 2,
      },
      {
        fishId: 21,
        weatherId: 9,
      },
      {
        fishId: 22,
        weatherId: 9,
      },
      {
        fishId: 23,
        weatherId: 9,
      },
      {
        fishId: 24,
        weatherId: 9,
      },
      {
        fishId: 25,
        weatherId: 9,
      },
      {
        fishId: 26,
        weatherId: 9,
      },
      {
        fishId: 27,
        weatherId: 9,
      },
      {
        fishId: 28,
        weatherId: 9,
      },
      {
        fishId: 29,
        weatherId: 9,
      },
      {
        fishId: 30,
        weatherId: 9,
      },
      {
        fishId: 31,
        weatherId: 9,
      },
      {
        fishId: 32,
        weatherId: 9,
      },
      {
        fishId: 33,
        weatherId: 9,
      },
      {
        fishId: 34,
        weatherId: 9,
      },
      {
        fishId: 35,
        weatherId: 9,
      },
      {
        fishId: 36,
        weatherId: 9,
      },
      {
        fishId: 37,
        weatherId: 9,
      },
      {
        fishId: 38,
        weatherId: 9,
      },
      {
        fishId: 39,
        weatherId: 2,
      },
      {
        fishId: 40,
        weatherId: 9,
      },
      {
        fishId: 41,
        weatherId: 9,
      },
      {
        fishId: 42,
        weatherId: 9,
      },
      {
        fishId: 43,
        weatherId: 9,
      },
      {
        fishId: 44,
        weatherId: 9,
      },
      {
        fishId: 45,
        weatherId: 9,
      },
      {
        fishId: 46,
        weatherId: 9,
      },
      {
        fishId: 47,
        weatherId: 9,
      },
      {
        fishId: 48,
        weatherId: 9,
      },
      {
        fishId: 49,
        weatherId: 9,
      },
      {
        fishId: 50,
        weatherId: 9,
      },
      {
        fishId: 51,
        weatherId: 9,
      },
      {
        fishId: 52,
        weatherId: 9,
      },
      {
        fishId: 53,
        weatherId: 9,
      },
      {
        fishId: 54,
        weatherId: 2,
      },
      {
        fishId: 55,
        weatherId: 9,
      },
      {
        fishId: 56,
        weatherId: 9,
      },
      {
        fishId: 57,
        weatherId: 9,
      },
      {
        fishId: 58,
        weatherId: 9,
      },
      {
        fishId: 59,
        weatherId: 9,
      },
      {
        fishId: 60,
        weatherId: 9,
      },
      {
        fishId: 61,
        weatherId: 9,
      },
    ])
    .onConflictDoNothing();
}

await seed();
