"use server";

import { z } from "zod";
import { isAuthed } from "~/server/db/queries/auth";
import { createFarm, inviteUser } from "~/server/mutations/farms";
import { type ErrorResponse, type MessageResponse } from "~/lib/types";

export async function createFarmAction(
  _previousState: unknown,
  formData: FormData,
): Promise<MessageResponse | ErrorResponse> {
  const auth = await isAuthed();

  const formSchema = z.object({
    name: z.string().min(1),
    map: z.coerce.number().min(1),
  });

  const input = formSchema.safeParse(Object.fromEntries(formData));
  if (input.error) {
    return {
      success: false,
      error:
        "You must enter a farm name between 1 and 30 characters and you must select a farm map",
    };
  }

  return await createFarm(input.data.name, input.data.map, auth.user.id);
}

export async function inviteUserAction(
  _previousState: unknown,
  formData: FormData,
): Promise<MessageResponse | ErrorResponse> {
  const auth = await isAuthed();

  const formSchema = z.object({
    username: z.string().min(1),
    farmId: z.string().min(1),
  });

  const input = formSchema.safeParse(Object.fromEntries(formData));
  if (input.error) {
    return {
      success: false,
      error: "You must enter a username",
    };
  }

  return await inviteUser(input.data.username, input.data.farmId, auth.user.id);
}
