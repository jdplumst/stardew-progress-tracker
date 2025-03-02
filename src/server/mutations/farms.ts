import "server-only";

import { eq } from "drizzle-orm";
import { db } from "~/server/db";
import { farm, farmMap, farmUser } from "~/server/db/schema";
import { type ErrorResponse, type MessageResponse } from "~/lib/types";
import { revalidatePath } from "next/cache";
export async function createFarm(data: {
  name: string;
  map: number;
  userId: string;
}): Promise<MessageResponse | ErrorResponse> {
  const validMap = await db
    .select()
    .from(farmMap)
    .where(eq(farmMap.id, data.map));
  if (!validMap) {
    return { success: false, error: "You must select a farm map." };
  }

  const farmData = (
    await db
      .insert(farm)
      .values({
        name: data.name,
        farmMapId: data.map,
        updatedAt: new Date(),
      })
      .returning()
  )[0];

  if (!farmData) {
    return { success: false, error: "Something went wrong. Please try again." };
  }

  await db.insert(farmUser).values({
    farmId: farmData.id,
    userId: data.userId,
    pending: false,
  });

  revalidatePath("/farms");
  console.log("Farm created successfully.");

  return { success: true, message: "Farm created successfully." };
}
