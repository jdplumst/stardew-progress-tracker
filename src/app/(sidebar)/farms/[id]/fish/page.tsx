import { getFarmFish } from "~/server/db/queries/fish";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "~/components/ui/table";

export default async function FishPage(props: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await props.params;

  const { fish, farmFish } = await getFarmFish(id);

  return (
    <div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Fish</TableHead>
            <TableHead>Caught</TableHead>
            <TableHead>Time</TableHead>
            <TableHead>Notes</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {fish.map((f) => (
            <TableRow key={f.id}>
              <TableCell className="flex items-center gap-2">
                {f.name}{" "}
                <img src={f.image!} alt={f.name} height={10} width={20} />
              </TableCell>
              <TableCell>
                {farmFish.find((ff) => ff.fishId == f.id) ? "Yes ✅" : "No ❌"}
              </TableCell>
              <TableCell>{f.time}</TableCell>
              <TableCell className="w-1/2">{f.notes}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
