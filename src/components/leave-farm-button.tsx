"use client";

import { useActionState, useState } from "react";
import { LoadingSpinner } from "~/components/loading-spinner";
import { Button } from "~/components/ui/button";
import {
  Dialog,
  DialogDescription,
  DialogHeader,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "~/components/ui/dialog";
import { leaveFarmAction } from "~/server/actions/farms";

export function LeaveFarmButton(props: { farmId: string }) {
  const [open, setOpen] = useState(false);
  const [, action, isPending] = useActionState(leaveFarmAction, null);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          className="w-fit flex-1 border-red-600 text-red-600 hover:bg-red-50"
        >
          Leave Farm
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>
            Are you absolutely sure you want to leave this farm?
          </DialogTitle>
          <DialogDescription>
            This action cannot be undone. This will remove you from the farm and
            you will no longer be able to access the farm&apos;s data.
          </DialogDescription>
        </DialogHeader>
        <div className="flex w-full items-center justify-center gap-2">
          <Button variant="outline" onClick={() => setOpen(false)}>
            Cancel
          </Button>
          <form action={action}>
            <input type="hidden" name="farmId" value={props.farmId} />
            <Button variant="destructive">
              {isPending ? <LoadingSpinner /> : "Leave Farm"}
            </Button>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  );
}
