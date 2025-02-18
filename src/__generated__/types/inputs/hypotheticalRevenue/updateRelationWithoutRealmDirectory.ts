import { builder } from "src/builder";

import { HypotheticalRevenueCreateWithoutRealmDirectory } from "./createWithoutRealmDirectory";
import { HypotheticalRevenueUpdateWithoutRealmDirectory } from "./updateWithoutRealmDirectory";
import { HypotheticalRevenueWhereUnique } from "./whereUnique";

export const HypotheticalRevenueUpdateRelationWithoutRealmDirectory = builder
  .inputRef<any>("HypotheticalRevenueUpdateRelationWithoutRealmDirectory")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: HypotheticalRevenueWhereUnique }),
      disconnect: t.field({ type: HypotheticalRevenueWhereUnique }),
      create: t.field({ type: HypotheticalRevenueCreateWithoutRealmDirectory }),
      update: t.field({ type: HypotheticalRevenueUpdateWithoutRealmDirectory }),
    }),
  });
