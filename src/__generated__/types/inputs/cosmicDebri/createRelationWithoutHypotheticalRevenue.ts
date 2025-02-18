import { builder } from "src/builder";

import { CosmicDebriCreateWithoutHypotheticalRevenue } from "./createWithoutHypotheticalRevenue";
import { CosmicDebriWhereUnique } from "./whereUnique";

export const CosmicDebriCreateRelationWithoutHypotheticalRevenue = builder
  .inputRef<any>("CosmicDebriCreateRelationWithoutHypotheticalRevenue")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: CosmicDebriWhereUnique }),
      create: t.field({ type: CosmicDebriCreateWithoutHypotheticalRevenue }),
    }),
  });
