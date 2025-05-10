import { and, eq } from "drizzle-orm";
import { z } from "zod";
import { createTRPCRouter, privateProcedure } from "~/server/api/trpc";
import { farmFish } from "~/server/db/schema";

export const fishRouter = createTRPCRouter({
  catchFish: privateProcedure
    .input(
      z.object({ caught: z.boolean(), fishId: z.number(), farmId: z.string() }),
    )
    .mutation(async ({ ctx, input }) => {
      if (input.caught) {
        await ctx.db
          .insert(farmFish)
          .values({ farmId: input.farmId, fishId: input.fishId });
      } else {
        await ctx.db
          .delete(farmFish)
          .where(
            and(
              eq(farmFish.farmId, input.farmId),
              eq(farmFish.fishId, input.fishId),
            ),
          );
      }
    }),
});
