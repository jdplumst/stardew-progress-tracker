import "server-only";

import { desc, eq } from "drizzle-orm";
import { db } from "~/server/db";
import { isAuthed } from "~/server/db/queries/auth";
import { farm, farmMap, farmUser, user } from "~/server/db/schema";
import { redirect } from "next/navigation";

export async function getFarms() {
  const auth = await isAuthed();

  const farmData = await db
    .select()
    .from(farm)
    .leftJoin(farmUser, eq(farm.id, farmUser.farmId))
    .leftJoin(farmMap, eq(farm.farmMapId, farmMap.id))
    .leftJoin(user, eq(farmUser.userId, user.id))
    .where(eq(farmUser.userId, auth.session.userId))
    .groupBy(farm.id)
    .orderBy(desc(farm.updatedAt));

  type FormattedFarmData = {
    farm: typeof farm.$inferSelect;
    farmMap: typeof farmMap.$inferSelect;
    farmUser: (typeof farmUser.$inferSelect)[];
    user: (typeof user.$inferSelect)[];
  };

  const formattedFarmData: FormattedFarmData[] = [];

  for (const farm of farmData) {
    if (!formattedFarmData.find((f) => f.farm.id === farm.farm.id)) {
      formattedFarmData.push({
        farm: farm.farm,
        farmMap: farm.farm_map!,
        farmUser: [farm.farm_user!],
        user: [farm.user!],
      });
    } else {
      formattedFarmData
        .find((f) => f.farm.id === farm.farm.id)!
        .farmUser.push(farm.farm_user!);
      formattedFarmData
        .find((f) => f.farm.id === farm.farm.id)!
        .user.push(farm.user!);
    }
  }

  const farmMaps = await db.select().from(farmMap);

  return { farms: formattedFarmData, maps: farmMaps };
}

export async function getFarm(id: string) {
  const auth = await isAuthed();

  const farmData = (
    await db
      .select()
      .from(farm)
      .innerJoin(farmMap, eq(farm.farmMapId, farmMap.id))
      .where(eq(farm.id, id))
  )[0];
  if (!farmData) {
    redirect("/404");
  }

  const farmUserData = await db
    .select({
      farmUser: farmUser,
      username: user.name,
    })
    .from(farmUser)
    .innerJoin(user, eq(farmUser.userId, user.id))
    .where(eq(farmUser.farmId, id));

  const isFarmUser = farmUserData.find(
    (f) => f.farmUser.userId === auth.session.userId,
  );
  if (!isFarmUser) {
    redirect("/404");
  }

  return { farmData, farmUserData };
}

export async function getFarmName(farmId: string) {
  const farmName = (
    await db.select({ name: farm.name }).from(farm).where(eq(farm.id, farmId))
  )[0];

  if (!farmName) {
    redirect("/farms");
  }

  return farmName;
}
