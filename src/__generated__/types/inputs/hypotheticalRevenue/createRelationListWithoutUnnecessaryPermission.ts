import { builder } from "src/builder";

import { HypotheticalRevenueCreateWithoutUnnecessaryPermission } from "./createWithoutUnnecessaryPermission";
import { HypotheticalRevenueWhereUnique } from "./whereUnique";

export const HypotheticalRevenueCreateRelationListWithoutUnnecessaryPermission = builder
  .inputRef<any>("HypotheticalRevenueCreateRelationListWithoutUnnecessaryPermission")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [HypotheticalRevenueWhereUnique] }),
      create: t.field({ type: [HypotheticalRevenueCreateWithoutUnnecessaryPermission] }),
    }),
  });
