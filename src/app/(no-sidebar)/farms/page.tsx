import Link from "next/link";
import { AcceptInviteForm } from "~/components/accept-invite-form";
import { DeclineInviteForm } from "~/components/decline-invite-form";
import { CreateFarmForm } from "~/components/create-farm-form";
import { Button } from "~/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import { prettyDate } from "~/lib/pretty-date";
import { isAuthed } from "~/server/db/queries/auth";
import { getFarms } from "~/server/db/queries/farms";

export default async function FarmsPage() {
  const auth = await isAuthed();
  const { farms, maps } = await getFarms();

  return (
    <div className="p-6">
      <div className="mx-auto flex max-w-6xl flex-col gap-6">
        <h1 className="text-4xl font-bold">Your Farms</h1>
        <CreateFarmForm maps={maps} />
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {farms
            .filter((farm) =>
              farm.farmUser.some(
                (farmUser) =>
                  farmUser.userId === auth.session.userId &&
                  farmUser.pending === false,
              ),
            )
            .map((farm) => (
              <Card
                key={farm.farm.id}
                className="bg-white bg-opacity-80 backdrop-blur-sm transition-shadow duration-300 hover:shadow-lg dark:text-black"
              >
                <CardHeader>
                  <CardTitle>{farm.farm.name}</CardTitle>
                  <CardDescription className="text-black">
                    Owned by {farm.user.map((user) => user.name).join(", ")}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-green-800">
                    Last Updated: {prettyDate(new Date(farm.farm.updatedAt))}
                  </p>
                </CardContent>
                <CardFooter>
                  <Link href={`/farms/${farm.farm.id}`} className="w-full">
                    <Button
                      variant="outline"
                      className="w-full dark:text-white"
                    >
                      View Farm
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            ))}
        </div>

        {/* Farm invitations section */}
        <h2 className="text-3xl font-bold">Farm Invitations</h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {farms
            .filter((farm) =>
              farm.farmUser.some((farmUser) => farmUser.pending === true),
            )
            .map((invite) => (
              <Card
                key={invite.farm.id}
                className="h-full border-2 border-yellow-300 bg-white bg-opacity-80 backdrop-blur-sm"
              >
                <CardHeader>
                  <CardTitle className="font-stardew text-brown-700">
                    {invite.farm.name}
                  </CardTitle>
                  <CardDescription>
                    Owned by {invite.user.map((user) => user.name).join(", ")}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-green-800">
                    Invited on:{" "}
                    {prettyDate(
                      invite.farmUser.find(
                        (farmUser) => farmUser.userId === auth.session.userId,
                      )!.createdAt,
                    )}
                  </p>
                </CardContent>
                <CardFooter className="flex justify-center gap-2">
                  <AcceptInviteForm farmId={invite.farm.id} />
                  <DeclineInviteForm farmId={invite.farm.id} />
                </CardFooter>
              </Card>
            ))}
        </div>
      </div>
    </div>
  );
}
