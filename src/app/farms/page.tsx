import { Button } from "~/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import { getFarms } from "~/server/db/queries/farms";

export default async function FarmsPage() {
  const farms = await getFarms();

  return (
    <div className="p-6">
      <div className="mx-auto max-w-6xl">
        <h1 className="text-brown-700 font-stardew mb-6 text-4xl font-bold">
          Your Farms
        </h1>
        <Button className="font-stardew mb-6 bg-green-600 text-white hover:bg-green-700">
          Create New Farm
        </Button>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {farms
            .filter((farm) =>
              farm.farmUser.some((farmUser) => farmUser.pending === false),
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
                    Last Updated: {farm.farm.updatedAt.toLocaleDateString()}
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
