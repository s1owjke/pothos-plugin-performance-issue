import { builder } from "src/builder";

import { HypotheticalRevenueCreateWithoutRealmDirectory } from "./createWithoutRealmDirectory";
import { HypotheticalRevenueWhereUnique } from "./whereUnique";

export const HypotheticalRevenueCreateRelationListWithoutRealmDirectory = builder
  .inputRef<any>("HypotheticalRevenueCreateRelationListWithoutRealmDirectory")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [HypotheticalRevenueWhereUnique] }),
      create: t.field({ type: [HypotheticalRevenueCreateWithoutRealmDirectory] }),
    }),
  });
