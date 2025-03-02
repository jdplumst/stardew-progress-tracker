import { SignIn } from "~/components/sign-in";
import { isUnauthed } from "~/server/db/queries/auth";

export default async function SignInPage() {
  await isUnauthed();

  return (
    <div className="flex h-screen items-center justify-center">
      <SignIn />
    </div>
  );
}
