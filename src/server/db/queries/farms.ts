import "server-only";

import { eq } from "drizzle-orm";
import { db } from "~/server/db";
import { isAuthed } from "~/server/db/queries/auth";
import { farm, farmMap, farmUser, user } from "~/server/db/schema";

export async function getFarms() {
  const auth = await isAuthed();

  const farmData = await db
    .select()
    .from(farm)
    .leftJoin(farmUser, eq(farm.id, farmUser.farmId))
    .leftJoin(farmMap, eq(farm.farmMapId, farmMap.id))
    .leftJoin(user, eq(farmUser.userId, user.id))
    .where(eq(farmUser.userId, auth.session.userId))
    .groupBy(farm.id);

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

  return formattedFarmData;
}
