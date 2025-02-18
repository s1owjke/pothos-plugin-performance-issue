import { builder } from "src/builder";

import { CosmicDebriCreateWithoutHypotheticalRevenue } from "./createWithoutHypotheticalRevenue";
import { CosmicDebriUpdateWithoutHypotheticalRevenue } from "./updateWithoutHypotheticalRevenue";
import { CosmicDebriWhereUnique } from "./whereUnique";

export const CosmicDebriUpdateRelationWithoutHypotheticalRevenue = builder
  .inputRef<any>("CosmicDebriUpdateRelationWithoutHypotheticalRevenue")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: CosmicDebriWhereUnique }),
      disconnect: t.field({ type: CosmicDebriWhereUnique }),
      create: t.field({ type: CosmicDebriCreateWithoutHypotheticalRevenue }),
      update: t.field({ type: CosmicDebriUpdateWithoutHypotheticalRevenue }),
    }),
  });
