"use client";

import { Check } from "lucide-react";
import { Button } from "~/components/ui/button";
import { acceptInviteAction } from "~/server/actions/farms";
import { useActionState, useEffect } from "react";
import { LoadingSpinner } from "~/components/loading-spinner";
import { toast } from "sonner";

export function AcceptInviteForm(props: { farmId: string }) {
  const [data, action, isPending] = useActionState(acceptInviteAction, null);

  useEffect(() => {
    if (data) {
      if (data.success) {
        toast.success(data.message);
      }
    }
  }, [data]);

  return (
    <form action={action}>
      <Button className="flex-1 bg-green-600 text-white hover:bg-green-700">
        {isPending ? (
          <LoadingSpinner />
        ) : (
          <>
            <Check className="mr-2 h-4 w-4" /> Accept
          </>
        )}
      </Button>
      <input type="hidden" name="farmId" value={props.farmId} />
    </form>
  );
}
