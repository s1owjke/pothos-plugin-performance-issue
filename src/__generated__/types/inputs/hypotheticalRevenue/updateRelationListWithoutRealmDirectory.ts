import { builder } from "src/builder";

import { HypotheticalRevenueCreateWithoutRealmDirectory } from "./createWithoutRealmDirectory";
import { HypotheticalRevenueWhereUnique } from "./whereUnique";

export const HypotheticalRevenueUpdateRelationListWithoutRealmDirectory = builder
  .inputRef<any>("HypotheticalRevenueUpdateRelationListWithoutRealmDirectory")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [HypotheticalRevenueWhereUnique] }),
      set: t.field({ type: [HypotheticalRevenueWhereUnique] }),
      disconnect: t.field({ type: [HypotheticalRevenueWhereUnique] }),
      create: t.field({ type: [HypotheticalRevenueCreateWithoutRealmDirectory] }),
    }),
  });
