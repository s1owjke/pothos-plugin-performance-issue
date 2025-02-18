import { builder } from "src/builder";

import { LostAndNeverFoundCreateWithoutHypotheticalRevenue } from "./createWithoutHypotheticalRevenue";
import { LostAndNeverFoundWhereUnique } from "./whereUnique";

export const LostAndNeverFoundUpdateRelationListWithoutHypotheticalRevenue = builder
  .inputRef<any>("LostAndNeverFoundUpdateRelationListWithoutHypotheticalRevenue")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [LostAndNeverFoundWhereUnique] }),
      set: t.field({ type: [LostAndNeverFoundWhereUnique] }),
      disconnect: t.field({ type: [LostAndNeverFoundWhereUnique] }),
      create: t.field({ type: [LostAndNeverFoundCreateWithoutHypotheticalRevenue] }),
    }),
  });
