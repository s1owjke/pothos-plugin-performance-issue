import { builder } from "src/builder";

import { LostAndNeverFoundCreateWithoutHypotheticalRevenue } from "./createWithoutHypotheticalRevenue";
import { LostAndNeverFoundWhereUnique } from "./whereUnique";

export const LostAndNeverFoundCreateRelationWithoutHypotheticalRevenue = builder
  .inputRef<any>("LostAndNeverFoundCreateRelationWithoutHypotheticalRevenue")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: LostAndNeverFoundWhereUnique }),
      create: t.field({ type: LostAndNeverFoundCreateWithoutHypotheticalRevenue }),
    }),
  });
