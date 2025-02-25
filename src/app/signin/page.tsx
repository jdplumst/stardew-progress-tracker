import { redirect } from "next/navigation";
import { SignIn } from "~/components/sign-in";
import { getSession } from "~/server/db/queries/auth";

export default async function SignInPage() {
  const session = await getSession();
  if (session) {
    redirect("/farms");
  }

  return (
    <div className="flex h-screen items-center justify-center">
      <SignIn />
    </div>
  );
}
