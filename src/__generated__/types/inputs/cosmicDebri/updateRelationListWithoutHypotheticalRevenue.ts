import { builder } from "src/builder";

import { CosmicDebriCreateWithoutHypotheticalRevenue } from "./createWithoutHypotheticalRevenue";
import { CosmicDebriWhereUnique } from "./whereUnique";

export const CosmicDebriUpdateRelationListWithoutHypotheticalRevenue = builder
  .inputRef<any>("CosmicDebriUpdateRelationListWithoutHypotheticalRevenue")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [CosmicDebriWhereUnique] }),
      set: t.field({ type: [CosmicDebriWhereUnique] }),
      disconnect: t.field({ type: [CosmicDebriWhereUnique] }),
      create: t.field({ type: [CosmicDebriCreateWithoutHypotheticalRevenue] }),
    }),
  });
