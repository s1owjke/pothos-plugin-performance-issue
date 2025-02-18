import { builder } from "src/builder";

import { HypotheticalRevenueCreateWithoutUnnecessaryPermission } from "./createWithoutUnnecessaryPermission";
import { HypotheticalRevenueWhereUnique } from "./whereUnique";

export const HypotheticalRevenueCreateRelationWithoutUnnecessaryPermission = builder
  .inputRef<any>("HypotheticalRevenueCreateRelationWithoutUnnecessaryPermission")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: HypotheticalRevenueWhereUnique }),
      create: t.field({ type: HypotheticalRevenueCreateWithoutUnnecessaryPermission }),
    }),
  });
