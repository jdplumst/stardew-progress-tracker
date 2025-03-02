import { FarmForm } from "~/components/farm-form";
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
      <div className="mx-auto max-w-6xl">
        <h1 className="text-brown-700 font-stardew mb-6 text-4xl font-bold">
          Your Farms
        </h1>
        <FarmForm maps={maps} />
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
                className="bg-white bg-opacity-80 backdrop-blur-sm transition-shadow duration-300 hover:shadow-lg"
              >
                <CardHeader>
                  <CardTitle className="font-stardew text-brown-700">
                    {farm.farm.name}
                  </CardTitle>
                  <CardDescription>
                    Owned by {farm.user.map((user) => user.name).join(", ")}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-green-800">
                    Last Updated: {prettyDate(new Date(farm.farm.updatedAt))}
                  </p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="font-stardew w-full">
                    View Farm
                  </Button>
                </CardFooter>
              </Card>
            ))}
        </div>
      </div>
    </div>
  );
}
