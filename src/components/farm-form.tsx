"use client";

import Image from "next/image";
import { useActionState, useEffect, useState } from "react";
import { toast } from "sonner";
import { LoadingSpinner } from "~/components/loading-spinner";
import { Button } from "~/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "~/components/ui/dialog";
import { Input } from "~/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "~/components/ui/select";
import { createFarmAction } from "~/server/actions/farms";
import { type farmMap } from "~/server/db/schema";

export function FarmForm({ maps }: { maps: (typeof farmMap.$inferSelect)[] }) {
  const [data, formAction, isPending] = useActionState(
    createFarmAction,
    undefined,
  );

  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (data) {
      if (data.success) {
        toast.success(data.message);
        setOpen(false);
      } else if (data.error) {
        toast.error(data.error);
      }
    }
  }, [data]);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="font-stardew mb-6 bg-green-600 text-white hover:bg-green-700">
          Create New Farm
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="text-center">Create New Farm</DialogTitle>
          <DialogDescription hidden>
            A form to create a new farm
          </DialogDescription>
        </DialogHeader>
        <form action={formAction} className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <label htmlFor="name" className="font-semibold">
              Farm Name
            </label>
            <Input
              id="farm-name"
              name="name"
              maxLength={30}
              className={`${!data?.success ? "border-red-500" : ""}`}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="farm-map" className="font-semibold">
              Farm Map
            </label>
            <Select name="map">
              <SelectTrigger
                className={`${!data?.success ? "border-red-500" : ""}`}
              >
                <SelectValue placeholder="Select Map" />
              </SelectTrigger>
              <SelectContent
                id="map"
                className="max-h-[300px] overflow-y-scroll"
              >
                {maps.map((map) => (
                  <SelectItem key={map.id} value={map.id.toString()}>
                    <div className="flex items-center gap-2">
                      <Image
                        src={map.image!}
                        alt={map.name}
                        width={25}
                        height={25}
                      />
                      {map.name}
                    </div>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <Button type="submit" className="mx-auto">
            {isPending ? <LoadingSpinner /> : "Create Farm"}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
