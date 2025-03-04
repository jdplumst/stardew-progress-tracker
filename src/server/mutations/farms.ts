import "server-only";

import { and, eq } from "drizzle-orm";
import { db } from "~/server/db";
import { farm, farmMap, farmUser, user } from "~/server/db/schema";
import { type ErrorResponse, type MessageResponse } from "~/lib/types";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
export async function createFarm(
  name: string,
  map: number,
  userId: string,
): Promise<MessageResponse | ErrorResponse> {
  const validMap = await db.select().from(farmMap).where(eq(farmMap.id, map));
  if (!validMap) {
    return { success: false, error: "You must select a farm map" };
  }

  const farmData = (
    await db
      .insert(farm)
      .values({
        name: name,
        farmMapId: map,
        updatedAt: new Date(),
      })
      .returning()
  )[0];

  if (!farmData) {
    return { success: false, error: "Something went wrong. Please try again" };
  }

  await db.insert(farmUser).values({
    farmId: farmData.id,
    userId: userId,
    pending: false,
  });

  revalidatePath("/farms");

  return { success: true, message: "Farm created successfully" };
}

export async function inviteUser(
  username: string,
  farmId: string,
  userId: string,
): Promise<MessageResponse | ErrorResponse> {
  const farmData = await db.select().from(farm).where(eq(farm.id, farmId));
  if (!farmData) {
    redirect("/farms");
  }

  const farmUserData = await db
    .select()
    .from(farmUser)
    .where(and(eq(farmUser.userId, userId), eq(farmUser.farmId, farmId)));

  if (!farmUserData) {
    redirect("/farms");
  }

  const invitedUser = (
    await db.select().from(user).where(eq(user.name, username))
  )[0];

  if (!invitedUser) {
    return { success: false, error: "User not found" };
  }

  await db.insert(farmUser).values({
    farmId: farmId,
    userId: invitedUser.id,
    pending: true,
  });

  return { success: true, message: "User invited successfully" };
}
