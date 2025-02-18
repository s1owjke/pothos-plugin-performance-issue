import { builder } from "src/builder";

import { HypotheticalRevenueCreateWithoutUnnecessaryPermission } from "./createWithoutUnnecessaryPermission";
import { HypotheticalRevenueWhereUnique } from "./whereUnique";

export const HypotheticalRevenueUpdateRelationListWithoutUnnecessaryPermission = builder
  .inputRef<any>("HypotheticalRevenueUpdateRelationListWithoutUnnecessaryPermission")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [HypotheticalRevenueWhereUnique] }),
      set: t.field({ type: [HypotheticalRevenueWhereUnique] }),
      disconnect: t.field({ type: [HypotheticalRevenueWhereUnique] }),
      create: t.field({ type: [HypotheticalRevenueCreateWithoutUnnecessaryPermission] }),
    }),
  });
