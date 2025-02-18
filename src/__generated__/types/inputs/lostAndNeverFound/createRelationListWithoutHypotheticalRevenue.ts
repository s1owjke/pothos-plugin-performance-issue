import { builder } from "src/builder";

import { LostAndNeverFoundCreateWithoutHypotheticalRevenue } from "./createWithoutHypotheticalRevenue";
import { LostAndNeverFoundWhereUnique } from "./whereUnique";

export const LostAndNeverFoundCreateRelationListWithoutHypotheticalRevenue = builder
  .inputRef<any>("LostAndNeverFoundCreateRelationListWithoutHypotheticalRevenue")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [LostAndNeverFoundWhereUnique] }),
      create: t.field({ type: [LostAndNeverFoundCreateWithoutHypotheticalRevenue] }),
    }),
  });
