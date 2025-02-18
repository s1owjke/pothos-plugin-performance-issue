import { builder } from "src/builder";

import { LostAndNeverFoundCreateWithoutHypotheticalRevenue } from "./createWithoutHypotheticalRevenue";
import { LostAndNeverFoundUpdateWithoutHypotheticalRevenue } from "./updateWithoutHypotheticalRevenue";
import { LostAndNeverFoundWhereUnique } from "./whereUnique";

export const LostAndNeverFoundUpdateRelationWithoutHypotheticalRevenue = builder
  .inputRef<any>("LostAndNeverFoundUpdateRelationWithoutHypotheticalRevenue")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: LostAndNeverFoundWhereUnique }),
      disconnect: t.field({ type: LostAndNeverFoundWhereUnique }),
      create: t.field({ type: LostAndNeverFoundCreateWithoutHypotheticalRevenue }),
      update: t.field({ type: LostAndNeverFoundUpdateWithoutHypotheticalRevenue }),
    }),
  });
