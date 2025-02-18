import { builder } from "src/builder";

import { HypotheticalRevenueCreateWithoutConspiracyDrafts } from "./createWithoutConspiracyDrafts";
import { HypotheticalRevenueWhereUnique } from "./whereUnique";

export const HypotheticalRevenueUpdateRelationListWithoutConspiracyDrafts = builder
  .inputRef<any>("HypotheticalRevenueUpdateRelationListWithoutConspiracyDrafts")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [HypotheticalRevenueWhereUnique] }),
      set: t.field({ type: [HypotheticalRevenueWhereUnique] }),
      disconnect: t.field({ type: [HypotheticalRevenueWhereUnique] }),
      create: t.field({ type: [HypotheticalRevenueCreateWithoutConspiracyDrafts] }),
    }),
  });
