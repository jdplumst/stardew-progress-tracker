"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "~/components/ui/select";
import { type getFarmFish } from "~/server/db/queries/fish";
import { api } from "~/trpc/react";

export function CatchSelect(props: {
  farmId: string;
  fishId: number;
  farmFish: Awaited<ReturnType<typeof getFarmFish>>;
}) {
  const fishMutation = api.fish.catchFish.useMutation();

  return (
    <Select
      name="caught"
      onValueChange={(e) =>
        fishMutation.mutate({
          caught: e === "true" ? true : false,
          farmId: props.farmId,
          fishId: props.fishId,
        })
      }
    >
      <SelectTrigger>
        <SelectValue
          placeholder={
            props.farmFish.farmFish.find((ff) => ff.fishId === props.fishId)
              ? "Yes ✅"
              : "No ❌"
          }
        />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="true">Yes ✅</SelectItem>
        <SelectItem value="false">No ❌</SelectItem>
      </SelectContent>
    </Select>
  );
}
