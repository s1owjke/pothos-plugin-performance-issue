import { builder } from "src/builder";

import { HypotheticalRevenueCreateWithoutGhostRecord } from "./createWithoutGhostRecord";
import { HypotheticalRevenueWhereUnique } from "./whereUnique";

export const HypotheticalRevenueUpdateRelationListWithoutGhostRecord = builder
  .inputRef<any>("HypotheticalRevenueUpdateRelationListWithoutGhostRecord")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [HypotheticalRevenueWhereUnique] }),
      set: t.field({ type: [HypotheticalRevenueWhereUnique] }),
      disconnect: t.field({ type: [HypotheticalRevenueWhereUnique] }),
      create: t.field({ type: [HypotheticalRevenueCreateWithoutGhostRecord] }),
    }),
  });
