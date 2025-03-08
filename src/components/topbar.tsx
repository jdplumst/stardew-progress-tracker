import { redirect } from "next/navigation";
import { isAuthed } from "~/server/db/queries/auth";
import { ThemeToggle } from "./theme-toggle";

export async function Topbar() {
  const auth = await isAuthed();
  if (!auth.session || !auth.user) {
    redirect("/");
  }

  return (
    <div className="flex w-full items-center justify-between p-4 shadow-lg">
      <span>Hi {auth.user.name}</span>
      <ThemeToggle />
    </div>
  );
}
