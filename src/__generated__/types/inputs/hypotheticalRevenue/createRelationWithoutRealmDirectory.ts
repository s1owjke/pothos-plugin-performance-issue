import { builder } from "src/builder";

import { HypotheticalRevenueCreateWithoutRealmDirectory } from "./createWithoutRealmDirectory";
import { HypotheticalRevenueWhereUnique } from "./whereUnique";

export const HypotheticalRevenueCreateRelationWithoutRealmDirectory = builder
  .inputRef<any>("HypotheticalRevenueCreateRelationWithoutRealmDirectory")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: HypotheticalRevenueWhereUnique }),
      create: t.field({ type: HypotheticalRevenueCreateWithoutRealmDirectory }),
    }),
  });
