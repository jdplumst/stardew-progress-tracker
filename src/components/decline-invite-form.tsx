"use client";

import { X } from "lucide-react";
import { useEffect } from "react";
import { useActionState } from "react";
import { toast } from "sonner";
import { LoadingSpinner } from "~/components/loading-spinner";
import { Button } from "~/components/ui/button";
import { declineInviteAction } from "~/server/actions/farms";

export function DeclineInviteForm(props: { farmId: string }) {
  const [data, action, isPending] = useActionState(declineInviteAction, null);

  useEffect(() => {
    if (data) {
      if (data.success) {
        toast.success(data.message);
      }
    }
  }, [data]);

  return (
    <form action={action}>
      <Button
        variant="outline"
        className="flex-1 border-red-600 text-red-600 hover:bg-red-50"
      >
        {isPending ? (
          <LoadingSpinner />
        ) : (
          <>
            <X className="mr-2 h-4 w-4" /> Decline
          </>
        )}
      </Button>
      <input type="hidden" name="farmId" value={props.farmId} />
    </form>
  );
}
