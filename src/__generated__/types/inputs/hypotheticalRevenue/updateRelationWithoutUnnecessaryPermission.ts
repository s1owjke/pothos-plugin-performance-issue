import { builder } from "src/builder";

import { HypotheticalRevenueCreateWithoutUnnecessaryPermission } from "./createWithoutUnnecessaryPermission";
import { HypotheticalRevenueUpdateWithoutUnnecessaryPermission } from "./updateWithoutUnnecessaryPermission";
import { HypotheticalRevenueWhereUnique } from "./whereUnique";

export const HypotheticalRevenueUpdateRelationWithoutUnnecessaryPermission = builder
  .inputRef<any>("HypotheticalRevenueUpdateRelationWithoutUnnecessaryPermission")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: HypotheticalRevenueWhereUnique }),
      disconnect: t.field({ type: HypotheticalRevenueWhereUnique }),
      create: t.field({ type: HypotheticalRevenueCreateWithoutUnnecessaryPermission }),
      update: t.field({ type: HypotheticalRevenueUpdateWithoutUnnecessaryPermission }),
    }),
  });
