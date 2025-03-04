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

  if (invitedUser.id === userId) {
    return { success: false, error: "You cannot invite yourself" };
  }

  const existingFarmUser = (
    await db
      .select()
      .from(farmUser)
      .where(
        and(eq(farmUser.userId, invitedUser.id), eq(farmUser.farmId, farmId)),
      )
  )[0];

  if (existingFarmUser?.pending) {
    return { success: false, error: "User already invited to this farm" };
  }

  if (existingFarmUser) {
    return { success: false, error: "User already in farm" };
  }

  await db.insert(farmUser).values({
    farmId: farmId,
    userId: invitedUser.id,
    pending: true,
  });

  return { success: true, message: "User invited successfully" };
}

export async function acceptInvite(
  farmId: string,
  userId: string,
): Promise<MessageResponse> {
  const farmData = await db.select().from(farm).where(eq(farm.id, farmId));
  if (!farmData) {
    redirect("/farms");
  }

  const farmUserData = (
    await db
      .select()
      .from(farmUser)
      .where(and(eq(farmUser.userId, userId), eq(farmUser.farmId, farmId)))
  )[0];
  if (!farmUserData) {
    redirect("/farms");
  }

  await db
    .update(farmUser)
    .set({ pending: false })
    .where(eq(farmUser.id, farmUserData.id));

  await db
    .update(farm)
    .set({
      updatedAt: new Date(),
    })
    .where(eq(farm.id, farmId));

  revalidatePath("/farms");

  return { success: true, message: "Invite accepted successfully" };
}

export async function declineInvite(
  farmId: string,
  userId: string,
): Promise<MessageResponse> {
  const farmData = await db.select().from(farm).where(eq(farm.id, farmId));
  if (!farmData) {
    redirect("/farms");
  }

  const farmUserData = (
    await db
      .select()
      .from(farmUser)
      .where(and(eq(farmUser.userId, userId), eq(farmUser.farmId, farmId)))
  )[0];

  if (!farmUserData) {
    redirect("/farms");
  }

  await db.delete(farmUser).where(eq(farmUser.id, farmUserData.id));

  await db
    .update(farm)
    .set({
      updatedAt: new Date(),
    })
    .where(eq(farm.id, farmId));

  revalidatePath("/farms");

  return { success: true, message: "Invite declined successfully" };
}
