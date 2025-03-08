import { redirect } from "next/navigation";
import { isAuthed } from "~/server/db/queries/auth";

export async function Topbar() {
  const auth = await isAuthed();
  if (!auth.session || !auth.user) {
    redirect("/");
  }

  return <div className="w-full p-4 shadow-lg">Hi {auth.user.name}</div>;
}
