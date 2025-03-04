"use client";

import { useActionState, useEffect } from "react";
import { toast } from "sonner";
import { LoadingSpinner } from "~/components/loading-spinner";
import { Button } from "~/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import { Input } from "~/components/ui/input";
import { inviteUserAction } from "~/server/actions/farms";

export function InviteForm(props: { farmId: string }) {
  const [data, action, isPending] = useActionState(inviteUserAction, undefined);

  useEffect(() => {
    if (data?.success) {
      toast.success(data.message);
    } else if (data?.error) {
      toast.error(data.error);
    }
  }, [data]);

  return (
    <Card className="bg-white bg-opacity-80 backdrop-blur-sm">
      <CardHeader>
        <CardTitle className="text-xl">Invite Friends to Your Farm</CardTitle>
        <CardDescription>
          Share your farming adventure with friends!
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form action={action} className="space-y-4">
          <div className="flex flex-col gap-2 sm:flex-row">
            <Input
              type="text"
              name="username"
              placeholder="Enter username"
              required
              className="flex-grow"
            />
            <Input type="hidden" name="farmId" value={props.farmId} />
            <Button type="submit" disabled={isPending}>
              {isPending ? <LoadingSpinner /> : "Send Invite"}
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}
