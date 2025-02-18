import { builder } from "src/builder";

import { HypotheticalRevenueCreateWithoutCosmicDebris } from "./createWithoutCosmicDebris";
import { HypotheticalRevenueWhereUnique } from "./whereUnique";

export const HypotheticalRevenueUpdateRelationListWithoutCosmicDebris = builder
  .inputRef<any>("HypotheticalRevenueUpdateRelationListWithoutCosmicDebris")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [HypotheticalRevenueWhereUnique] }),
      set: t.field({ type: [HypotheticalRevenueWhereUnique] }),
      disconnect: t.field({ type: [HypotheticalRevenueWhereUnique] }),
      create: t.field({ type: [HypotheticalRevenueCreateWithoutCosmicDebris] }),
    }),
  });
