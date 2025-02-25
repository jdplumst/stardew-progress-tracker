import "server-only";

import { headers } from "next/headers";
import { auth } from "~/lib/auth";
import { redirect } from "next/navigation";

export async function getSession() {
  const session = await auth.api.getSession({
    headers: await headers(), // you need to pass the headers object.
  });
  return session;
}

export async function isUnauthed() {
  const session = await getSession();
  if (session) redirect("/farms");
}

export async function isAuthed() {
  const session = await getSession();
  if (!session) redirect("/");
  return session;
}
