import { builder } from "src/builder";

import { CosmicDebriCreateWithoutHypotheticalRevenue } from "./createWithoutHypotheticalRevenue";
import { CosmicDebriWhereUnique } from "./whereUnique";

export const CosmicDebriCreateRelationListWithoutHypotheticalRevenue = builder
  .inputRef<any>("CosmicDebriCreateRelationListWithoutHypotheticalRevenue")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [CosmicDebriWhereUnique] }),
      create: t.field({ type: [CosmicDebriCreateWithoutHypotheticalRevenue] }),
    }),
  });
