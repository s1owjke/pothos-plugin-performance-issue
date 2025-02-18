import { builder } from "src/builder";

import { HypotheticalRevenueCreateWithoutLostAndNeverFounds } from "./createWithoutLostAndNeverFounds";
import { HypotheticalRevenueWhereUnique } from "./whereUnique";

export const HypotheticalRevenueUpdateRelationListWithoutLostAndNeverFounds = builder
  .inputRef<any>("HypotheticalRevenueUpdateRelationListWithoutLostAndNeverFounds")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [HypotheticalRevenueWhereUnique] }),
      set: t.field({ type: [HypotheticalRevenueWhereUnique] }),
      disconnect: t.field({ type: [HypotheticalRevenueWhereUnique] }),
      create: t.field({ type: [HypotheticalRevenueCreateWithoutLostAndNeverFounds] }),
    }),
  });
