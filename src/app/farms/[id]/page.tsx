import { CardContent } from "~/components/ui/card";
import { CardDescription } from "~/components/ui/card";
import { CardHeader, CardTitle } from "~/components/ui/card";
import Link from "next/link";
import { Button } from "~/components/ui/button";
import { Card } from "~/components/ui/card";
import { getFarm } from "~/server/db/queries/farms";
import { prettyDate } from "~/lib/pretty-date";
import Image from "next/image";
import { InviteForm } from "~/components/invite-form";
import { LeaveFarmButton } from "~/components/leave-farm-button";

export default async function FarmPage(props: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await props.params;
  const { farmData, farmUserData } = await getFarm(id);

  return (
    <div className="p-6">
      <div className="mx-auto flex max-w-6xl flex-col gap-6">
        <Link href="/farms">
          <Button variant="outline">← Back to Farms</Button>
        </Link>
        <Card className="bg-white bg-opacity-80 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-3xl">{farmData.farm.name}</CardTitle>
            <CardDescription>
              Owned by {farmUserData.map((user) => user.username).join(", ")}
            </CardDescription>
          </CardHeader>
          <CardContent className="grid gap-4">
            <div>
              <h2 className="mb-2 text-xl text-green-800">Farm Details</h2>
              <p>
                <strong>Created:</strong> {prettyDate(farmData.farm.createdAt)}
              </p>
              <p>
                <strong>Last Updated:</strong>{" "}
                {prettyDate(farmData.farm.updatedAt)}
              </p>
              <p className="flex items-center gap-2">
                <strong>Map:</strong>
                <Image
                  src={farmData.farm_map.image}
                  alt={farmData.farm_map.name}
                  width={25}
                  height={25}
                />
                {farmData.farm_map.name}
              </p>
            </div>
          </CardContent>
        </Card>
        <InviteForm farmId={id} />
        <LeaveFarmButton farmId={id} />
      </div>
    </div>
  );
}
