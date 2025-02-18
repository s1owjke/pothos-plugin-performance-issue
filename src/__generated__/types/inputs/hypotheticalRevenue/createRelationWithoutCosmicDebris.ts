import { builder } from "src/builder";

import { HypotheticalRevenueCreateWithoutCosmicDebris } from "./createWithoutCosmicDebris";
import { HypotheticalRevenueWhereUnique } from "./whereUnique";

export const HypotheticalRevenueCreateRelationWithoutCosmicDebris = builder
  .inputRef<any>("HypotheticalRevenueCreateRelationWithoutCosmicDebris")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: HypotheticalRevenueWhereUnique }),
      create: t.field({ type: HypotheticalRevenueCreateWithoutCosmicDebris }),
    }),
  });
