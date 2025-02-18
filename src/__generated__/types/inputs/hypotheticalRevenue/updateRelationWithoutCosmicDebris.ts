import { builder } from "src/builder";

import { HypotheticalRevenueCreateWithoutCosmicDebris } from "./createWithoutCosmicDebris";
import { HypotheticalRevenueUpdateWithoutCosmicDebris } from "./updateWithoutCosmicDebris";
import { HypotheticalRevenueWhereUnique } from "./whereUnique";

export const HypotheticalRevenueUpdateRelationWithoutCosmicDebris = builder
  .inputRef<any>("HypotheticalRevenueUpdateRelationWithoutCosmicDebris")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: HypotheticalRevenueWhereUnique }),
      disconnect: t.field({ type: HypotheticalRevenueWhereUnique }),
      create: t.field({ type: HypotheticalRevenueCreateWithoutCosmicDebris }),
      update: t.field({ type: HypotheticalRevenueUpdateWithoutCosmicDebris }),
    }),
  });
