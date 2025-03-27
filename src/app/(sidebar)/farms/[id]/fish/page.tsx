import { getFarmFish } from "~/server/db/queries/fish";

export default async function FishPage(props: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await props.params;

  const { fish, farmFish } = await getFarmFish(id);

  return (
    <div>
      {fish.map((f) => (
        <div key={f.id} className="flex gap-2">
          <div>{f.name}</div>
          <div>
            Caught: {farmFish.find((ff) => ff.fishId == f.id) ? "Yes" : "No"}
          </div>
        </div>
      ))}
    </div>
  );
}
