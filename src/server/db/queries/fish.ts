import "server-only";

import { and, eq } from "drizzle-orm";
import { redirect } from "next/navigation";
import { db } from "~/server/db";
import { isAuthed } from "~/server/db/queries/auth";
import { farm, farmFish, farmUser, fish } from "~/server/db/schema";

export async function getFarmFish(farmId: string) {
  const auth = await isAuthed();

  const farmData = (
    await db
      .select()
      .from(farm)
      .innerJoin(farmUser, eq(farmUser.farmId, farm.id))
      .where(and(eq(farm.id, farmId), eq(farmUser.userId, auth.session.userId)))
  )[0];

  if (!farmData) {
    redirect("/farms");
  }

  const fishData = await db.select().from(fish);

  const farmFishData = await db
    .select()
    .from(farmFish)
    .where(eq(farmFish.farmId, farmId));

  return { fish: fishData, farmFish: farmFishData };
}
